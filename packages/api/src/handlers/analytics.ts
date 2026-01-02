import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { GetCommand, PutCommand, QueryCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { db, TABLE_NAME } from '../lib/db';
import { success, badRequest, notFound, serverError } from '../lib/response';
import {
  analyticsKeys,
  detectQuestionConcepts,
  detectErrorPattern,
  type DetailedAttempt,
  type ConceptMastery,
  type ChildQuestionHistory,
  type ErrorPattern,
  type DailyStats,
  type WeeklySummary,
  type ParentReport,
} from '../lib/analytics-schema';

// ============ HANDLER ============

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
  try {
    const path = event.rawPath;
    const method = event.requestContext.http.method;

    // POST /analytics/attempt - Record detailed attempt
    if (path === '/analytics/attempt' && method === 'POST') {
      const body = JSON.parse(event.body || '{}');
      return await recordDetailedAttempt(body);
    }

    // GET /analytics/child/:childId/concepts - Get concept mastery breakdown
    if (path.match(/^\/analytics\/child\/[\w-]+\/concepts$/) && method === 'GET') {
      const childId = path.split('/')[3];
      return await getConceptMastery(childId);
    }

    // GET /analytics/child/:childId/weaknesses - Get specific weaknesses
    if (path.match(/^\/analytics\/child\/[\w-]+\/weaknesses$/) && method === 'GET') {
      const childId = path.split('/')[3];
      return await getWeaknesses(childId);
    }

    // GET /analytics/child/:childId/patterns - Get error patterns
    if (path.match(/^\/analytics\/child\/[\w-]+\/patterns$/) && method === 'GET') {
      const childId = path.split('/')[3];
      return await getErrorPatterns(childId);
    }

    // GET /analytics/child/:childId/report - Full parent report
    if (path.match(/^\/analytics\/child\/[\w-]+\/report$/) && method === 'GET') {
      const childId = path.split('/')[3];
      const period = event.queryStringParameters?.period || 'week';
      return await generateParentReport(childId, period);
    }

    // GET /analytics/child/:childId/daily - Get daily stats
    if (path.match(/^\/analytics\/child\/[\w-]+\/daily$/) && method === 'GET') {
      const childId = path.split('/')[3];
      const days = parseInt(event.queryStringParameters?.days || '7');
      return await getDailyStats(childId, days);
    }

    // GET /analytics/child/:childId/question/:questionId - Question history for child
    if (path.match(/^\/analytics\/child\/[\w-]+\/question\/[\w-]+$/) && method === 'GET') {
      const parts = path.split('/');
      const childId = parts[3];
      const questionId = parts[5];
      return await getQuestionHistory(childId, questionId);
    }

    // GET /analytics/question/:questionId - Global question analytics
    if (path.match(/^\/analytics\/question\/[\w-]+$/) && method === 'GET') {
      const questionId = path.split('/')[3];
      return await getQuestionAnalytics(questionId);
    }

    return badRequest('Invalid analytics endpoint');
  } catch (error) {
    console.error('Analytics handler error:', error);
    return serverError();
  }
}

// ============ RECORD ATTEMPT WITH FULL ANALYTICS ============

async function recordDetailedAttempt(body: {
  childId: string;
  questionId: string;
  sectionId: string;
  selectedAnswer: number;
  correctAnswer: number;
  timeSpentSeconds: number;
  difficulty: number;
  questionText: string;
  options: string[];
  explanation: string;
  sessionType?: 'quiz' | 'practice' | 'exam' | 'adaptive';
  aiExplanationRequested?: boolean;
}): Promise<APIGatewayProxyResultV2> {
  const {
    childId, questionId, sectionId, selectedAnswer, correctAnswer,
    timeSpentSeconds, difficulty, questionText, options, explanation,
    sessionType = 'quiz', aiExplanationRequested = false
  } = body;

  if (!childId || !questionId || !sectionId || selectedAnswer === undefined) {
    return badRequest('Missing required fields');
  }

  const isCorrect = selectedAnswer === correctAnswer;
  const timestamp = new Date().toISOString();
  const dateKey = timestamp.split('T')[0];

  // Detect concepts for this question
  const concepts = detectQuestionConcepts({ id: questionId, question: questionText, options, sectionId });

  // Detect error pattern if wrong
  let errorPatternType: string | null = null;
  if (!isCorrect) {
    errorPatternType = detectErrorPattern(questionText, options, selectedAnswer, correctAnswer);
  }

  // Get attempt number for this question
  const historyResult = await db.send(new GetCommand({
    TableName: TABLE_NAME,
    Key: analyticsKeys.childQuestionHistory(childId, questionId),
  }));
  const attemptNumber = (historyResult.Item?.totalAttempts || 0) + 1;

  // 1. Record detailed attempt
  const attempt: DetailedAttempt = {
    ...analyticsKeys.attempt(childId, timestamp),
    type: 'ATTEMPT',
    childId,
    questionId,
    sectionId,
    selectedAnswer,
    correctAnswer,
    isCorrect,
    questionText,
    options,
    explanation,
    difficulty: difficulty as 1 | 2 | 3,
    concepts,
    timeSpentSeconds,
    attemptNumber,
    sessionType,
    aiExplanationRequested,
    createdAt: timestamp,
  };

  await db.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: attempt,
  }));

  // 2. Update question history for this child
  await updateQuestionHistory(childId, questionId, selectedAnswer, isCorrect, timeSpentSeconds, timestamp);

  // 3. Update concept mastery for each concept
  for (const concept of concepts) {
    await updateConceptMastery(childId, concept, isCorrect, timeSpentSeconds, timestamp);
  }

  // 4. Update daily stats
  await updateDailyStats(childId, dateKey, sectionId, concepts, isCorrect, timeSpentSeconds, aiExplanationRequested);

  // 5. Record error pattern if detected
  if (errorPatternType && !isCorrect) {
    await recordErrorPattern(childId, errorPatternType, questionId, questionText, options[selectedAnswer], options[correctAnswer], timestamp);
  }

  // 6. Update global question analytics
  await updateQuestionAnalytics(questionId, sectionId, selectedAnswer, correctAnswer, isCorrect, timeSpentSeconds, difficulty);

  return success({
    recorded: true,
    isCorrect,
    concepts,
    errorPattern: errorPatternType,
    attemptNumber,
  });
}

// ============ UPDATE HELPERS ============

async function updateQuestionHistory(
  childId: string,
  questionId: string,
  selectedAnswer: number,
  isCorrect: boolean,
  timeSeconds: number,
  timestamp: string
): Promise<void> {
  const key = analyticsKeys.childQuestionHistory(childId, questionId);
  const result = await db.send(new GetCommand({ TableName: TABLE_NAME, Key: key }));

  const existing = result.Item as ChildQuestionHistory | undefined;
  const attempts = existing?.attempts || [];

  // Add new attempt
  attempts.push({ timestamp, selectedAnswer, isCorrect, timeSeconds });

  // Check if mastered (2+ consecutive correct)
  const recentAttempts = attempts.slice(-3);
  const consecutiveCorrect = recentAttempts.filter(a => a.isCorrect).length;
  const mastered = consecutiveCorrect >= 2 && recentAttempts[recentAttempts.length - 1]?.isCorrect;

  await db.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      ...key,
      type: 'QUESTION_HISTORY',
      childId,
      questionId,
      attempts: attempts.slice(-10), // Keep last 10 attempts
      totalAttempts: (existing?.totalAttempts || 0) + 1,
      correctAttempts: (existing?.correctAttempts || 0) + (isCorrect ? 1 : 0),
      lastAttemptAt: timestamp,
      mastered,
    },
  }));
}

async function updateConceptMastery(
  childId: string,
  concept: string,
  isCorrect: boolean,
  timeSeconds: number,
  timestamp: string
): Promise<void> {
  const key = analyticsKeys.conceptMastery(childId, concept);
  const result = await db.send(new GetCommand({ TableName: TABLE_NAME, Key: key }));

  const existing = result.Item as ConceptMastery | undefined;
  const totalAttempts = (existing?.totalAttempts || 0) + 1;
  const correctAttempts = (existing?.correctAttempts || 0) + (isCorrect ? 1 : 0);
  const masteryScore = Math.round((correctAttempts / totalAttempts) * 100);

  // Track recent performance for trend
  const recentAttempts = Math.min((existing?.recentAttempts || 0) + 1, 10);
  let recentCorrect = existing?.recentCorrect || 0;
  if (recentAttempts <= 10) {
    recentCorrect += isCorrect ? 1 : 0;
  } else {
    // Rolling window - approximate
    recentCorrect = Math.round((recentCorrect * 9 + (isCorrect ? 1 : 0)) / 10 * 10);
  }

  // Calculate trend
  const previousScore = existing?.masteryScore || 50;
  let trend: 'improving' | 'stable' | 'declining' = 'stable';
  if (masteryScore > previousScore + 5) trend = 'improving';
  if (masteryScore < previousScore - 5) trend = 'declining';

  // Calculate average time
  const avgTime = existing?.avgTimeSeconds
    ? Math.round((existing.avgTimeSeconds * (totalAttempts - 1) + timeSeconds) / totalAttempts)
    : timeSeconds;

  await db.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      ...key,
      type: 'CONCEPT_MASTERY',
      childId,
      concept,
      totalAttempts,
      correctAttempts,
      masteryScore,
      recentAttempts,
      recentCorrect,
      trend,
      avgTimeSeconds: avgTime,
      lastAttemptAt: timestamp,
      firstAttemptAt: existing?.firstAttemptAt || timestamp,
    },
  }));
}

async function updateDailyStats(
  childId: string,
  date: string,
  sectionId: string,
  concepts: string[],
  isCorrect: boolean,
  timeSeconds: number,
  aiRequested: boolean
): Promise<void> {
  const key = analyticsKeys.dailyStats(childId, date);
  const result = await db.send(new GetCommand({ TableName: TABLE_NAME, Key: key }));

  const existing = result.Item as DailyStats | undefined;

  const sectionBreakdown = existing?.sectionBreakdown || {};
  if (!sectionBreakdown[sectionId]) {
    sectionBreakdown[sectionId] = { attempted: 0, correct: 0 };
  }
  sectionBreakdown[sectionId].attempted++;
  if (isCorrect) sectionBreakdown[sectionId].correct++;

  const conceptBreakdown = existing?.conceptBreakdown || {};
  for (const concept of concepts) {
    if (!conceptBreakdown[concept]) {
      conceptBreakdown[concept] = { attempted: 0, correct: 0 };
    }
    conceptBreakdown[concept].attempted++;
    if (isCorrect) conceptBreakdown[concept].correct++;
  }

  // Calculate streak
  let correctStreak = existing?.correctStreak || 0;
  if (isCorrect) {
    correctStreak++;
  } else {
    correctStreak = 0;
  }
  const longestStreak = Math.max(existing?.longestStreak || 0, correctStreak);

  await db.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      ...key,
      type: 'DAILY_STATS',
      childId,
      date,
      questionsAttempted: (existing?.questionsAttempted || 0) + 1,
      questionsCorrect: (existing?.questionsCorrect || 0) + (isCorrect ? 1 : 0),
      timeSpentMinutes: Math.round(((existing?.timeSpentMinutes || 0) * 60 + timeSeconds) / 60),
      sectionBreakdown,
      conceptBreakdown,
      correctStreak,
      longestStreak,
      aiExplanationsRequested: (existing?.aiExplanationsRequested || 0) + (aiRequested ? 1 : 0),
    },
  }));
}

async function recordErrorPattern(
  childId: string,
  patternType: string,
  questionId: string,
  questionText: string,
  wrongAnswer: string,
  correctAnswer: string,
  timestamp: string
): Promise<void> {
  const key = analyticsKeys.errorPattern(childId, patternType);
  const result = await db.send(new GetCommand({ TableName: TABLE_NAME, Key: key }));

  const existing = result.Item as ErrorPattern | undefined;
  const examples = existing?.examples || [];

  // Add new example (keep last 5)
  examples.push({ questionId, questionText, wrongAnswer, correctAnswer, timestamp });
  if (examples.length > 5) examples.shift();

  // Generate description based on pattern type
  const descriptions: Record<string, string> = {
    'place-value-magnitude-confusion': 'Confusing the magnitude of place values (e.g., mixing up tens and hundreds)',
    'rounding-up-when-should-round-down': 'Rounding up when the digit is less than 5',
    'rounding-down-when-should-round-up': 'Rounding down when the digit is 5 or greater',
    'number-ordering-confusion': 'Difficulty ordering numbers from smallest to largest',
    'arithmetic-computation-error': 'Making calculation errors when adding or subtracting',
  };

  const suggestedFocus: Record<string, string> = {
    'place-value-magnitude-confusion': 'Practice identifying place values using a place value chart',
    'rounding-up-when-should-round-down': 'Review the rounding rule: round up if digit is 5 or more',
    'rounding-down-when-should-round-up': 'Review the rounding rule: round up if digit is 5 or more',
    'number-ordering-confusion': 'Practice comparing numbers digit by digit from left to right',
    'arithmetic-computation-error': 'Practice mental math strategies and double-check calculations',
  };

  await db.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      ...key,
      type: 'ERROR_PATTERN',
      childId,
      patternType,
      description: descriptions[patternType] || `Error pattern: ${patternType}`,
      occurrences: (existing?.occurrences || 0) + 1,
      examples,
      suggestedFocus: suggestedFocus[patternType] || 'Review this concept',
      lastOccurrence: timestamp,
      firstOccurrence: existing?.firstOccurrence || timestamp,
    },
  }));
}

async function updateQuestionAnalytics(
  questionId: string,
  sectionId: string,
  selectedAnswer: number,
  correctAnswer: number,
  isCorrect: boolean,
  timeSeconds: number,
  difficulty: number
): Promise<void> {
  const key = analyticsKeys.questionAnalytics(questionId);
  const result = await db.send(new GetCommand({ TableName: TABLE_NAME, Key: key }));

  const existing = result.Item;
  const totalAttempts = (existing?.totalAttempts || 0) + 1;
  const totalCorrect = (existing?.totalCorrect || 0) + (isCorrect ? 1 : 0);
  const successRate = Math.round((totalCorrect / totalAttempts) * 100);

  // Update answer distribution
  const answerDistribution = existing?.answerDistribution || [0, 0, 0, 0];
  if (selectedAnswer >= 0 && selectedAnswer < 4) {
    answerDistribution[selectedAnswer]++;
  }

  // Find most common wrong answer
  let mostCommonWrongAnswer = 0;
  let maxWrongCount = 0;
  for (let i = 0; i < answerDistribution.length; i++) {
    if (i !== correctAnswer && answerDistribution[i] > maxWrongCount) {
      maxWrongCount = answerDistribution[i];
      mostCommonWrongAnswer = i;
    }
  }

  // Calculate actual difficulty from success rate
  let actualDifficulty = 2;
  if (successRate >= 80) actualDifficulty = 1;
  else if (successRate <= 40) actualDifficulty = 3;

  // Calculate average time
  const avgTime = existing?.avgTimeSeconds
    ? Math.round((existing.avgTimeSeconds * (totalAttempts - 1) + timeSeconds) / totalAttempts)
    : timeSeconds;

  await db.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      ...key,
      type: 'QUESTION_ANALYTICS',
      questionId,
      sectionId,
      totalAttempts,
      totalCorrect,
      successRate,
      avgTimeSeconds: avgTime,
      answerDistribution,
      mostCommonWrongAnswer,
      actualDifficulty,
      designedDifficulty: difficulty,
      lastUpdated: new Date().toISOString(),
    },
  }));
}

// ============ READ ENDPOINTS ============

async function getConceptMastery(childId: string): Promise<APIGatewayProxyResultV2> {
  const result = await db.send(new QueryCommand({
    TableName: TABLE_NAME,
    KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
    ExpressionAttributeValues: {
      ':pk': `CHILD#${childId}`,
      ':sk': 'CONCEPT#',
    },
  }));

  const concepts = (result.Items || []).map(item => ({
    concept: item.concept,
    totalAttempts: item.totalAttempts,
    correctAttempts: item.correctAttempts,
    masteryScore: item.masteryScore,
    trend: item.trend,
    avgTimeSeconds: item.avgTimeSeconds,
    lastAttemptAt: item.lastAttemptAt,
  }));

  // Sort by mastery score (lowest first = needs most attention)
  concepts.sort((a, b) => a.masteryScore - b.masteryScore);

  return success({ childId, concepts });
}

async function getWeaknesses(childId: string): Promise<APIGatewayProxyResultV2> {
  // Get concept mastery
  const conceptResult = await db.send(new QueryCommand({
    TableName: TABLE_NAME,
    KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
    ExpressionAttributeValues: {
      ':pk': `CHILD#${childId}`,
      ':sk': 'CONCEPT#',
    },
  }));

  // Get error patterns
  const errorResult = await db.send(new QueryCommand({
    TableName: TABLE_NAME,
    KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
    ExpressionAttributeValues: {
      ':pk': `CHILD#${childId}`,
      ':sk': 'ERROR#',
    },
  }));

  // Identify weak concepts (below 60% mastery)
  const weakConcepts = (conceptResult.Items || [])
    .filter(item => item.masteryScore < 60)
    .map(item => ({
      concept: item.concept,
      masteryScore: item.masteryScore,
      totalAttempts: item.totalAttempts,
      trend: item.trend,
      severity: item.masteryScore < 40 ? 'critical' : 'moderate',
    }))
    .sort((a, b) => a.masteryScore - b.masteryScore);

  // Get recurring error patterns
  const errorPatterns = (errorResult.Items || [])
    .filter(item => item.occurrences >= 2)
    .map(item => ({
      pattern: item.patternType,
      description: item.description,
      occurrences: item.occurrences,
      suggestedFocus: item.suggestedFocus,
      examples: item.examples?.slice(-2), // Last 2 examples
    }))
    .sort((a, b) => b.occurrences - a.occurrences);

  // Generate actionable insights
  const insights: string[] = [];
  if (weakConcepts.length > 0) {
    const worstConcept = weakConcepts[0];
    insights.push(`Struggling most with "${formatConceptName(worstConcept.concept)}" - only ${worstConcept.masteryScore}% correct`);
  }
  if (errorPatterns.length > 0) {
    insights.push(`Common mistake: ${errorPatterns[0].description}`);
  }

  return success({
    childId,
    weakConcepts,
    errorPatterns,
    insights,
    summary: generateWeaknessSummary(weakConcepts, errorPatterns),
  });
}

async function getErrorPatterns(childId: string): Promise<APIGatewayProxyResultV2> {
  const result = await db.send(new QueryCommand({
    TableName: TABLE_NAME,
    KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
    ExpressionAttributeValues: {
      ':pk': `CHILD#${childId}`,
      ':sk': 'ERROR#',
    },
  }));

  const patterns = (result.Items || []).map(item => ({
    pattern: item.patternType,
    description: item.description,
    occurrences: item.occurrences,
    suggestedFocus: item.suggestedFocus,
    examples: item.examples,
    lastOccurrence: item.lastOccurrence,
  }));

  return success({ childId, patterns });
}

async function getDailyStats(childId: string, days: number): Promise<APIGatewayProxyResultV2> {
  // Get last N days
  const stats: any[] = [];
  const today = new Date();

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateKey = date.toISOString().split('T')[0];

    const result = await db.send(new GetCommand({
      TableName: TABLE_NAME,
      Key: analyticsKeys.dailyStats(childId, dateKey),
    }));

    if (result.Item) {
      stats.push({
        date: dateKey,
        questionsAttempted: result.Item.questionsAttempted,
        questionsCorrect: result.Item.questionsCorrect,
        accuracy: result.Item.questionsAttempted > 0
          ? Math.round((result.Item.questionsCorrect / result.Item.questionsAttempted) * 100)
          : 0,
        timeSpentMinutes: result.Item.timeSpentMinutes,
        longestStreak: result.Item.longestStreak,
        sectionBreakdown: result.Item.sectionBreakdown,
        conceptBreakdown: result.Item.conceptBreakdown,
      });
    } else {
      stats.push({
        date: dateKey,
        questionsAttempted: 0,
        questionsCorrect: 0,
        accuracy: 0,
        timeSpentMinutes: 0,
        longestStreak: 0,
      });
    }
  }

  // Calculate totals
  const totals = stats.reduce((acc, day) => ({
    totalQuestions: acc.totalQuestions + day.questionsAttempted,
    totalCorrect: acc.totalCorrect + day.questionsCorrect,
    totalMinutes: acc.totalMinutes + day.timeSpentMinutes,
    daysActive: acc.daysActive + (day.questionsAttempted > 0 ? 1 : 0),
  }), { totalQuestions: 0, totalCorrect: 0, totalMinutes: 0, daysActive: 0 });

  return success({
    childId,
    period: `${days} days`,
    stats: stats.reverse(), // Oldest first
    totals: {
      ...totals,
      overallAccuracy: totals.totalQuestions > 0
        ? Math.round((totals.totalCorrect / totals.totalQuestions) * 100)
        : 0,
    },
  });
}

async function getQuestionHistory(childId: string, questionId: string): Promise<APIGatewayProxyResultV2> {
  const result = await db.send(new GetCommand({
    TableName: TABLE_NAME,
    Key: analyticsKeys.childQuestionHistory(childId, questionId),
  }));

  if (!result.Item) {
    return success({ childId, questionId, attempts: [], totalAttempts: 0, mastered: false });
  }

  return success({
    childId,
    questionId,
    attempts: result.Item.attempts,
    totalAttempts: result.Item.totalAttempts,
    correctAttempts: result.Item.correctAttempts,
    mastered: result.Item.mastered,
    lastAttemptAt: result.Item.lastAttemptAt,
  });
}

async function getQuestionAnalytics(questionId: string): Promise<APIGatewayProxyResultV2> {
  const result = await db.send(new GetCommand({
    TableName: TABLE_NAME,
    Key: analyticsKeys.questionAnalytics(questionId),
  }));

  if (!result.Item) {
    return notFound('No analytics for this question');
  }

  return success({
    questionId,
    totalAttempts: result.Item.totalAttempts,
    successRate: result.Item.successRate,
    avgTimeSeconds: result.Item.avgTimeSeconds,
    answerDistribution: result.Item.answerDistribution,
    mostCommonWrongAnswer: result.Item.mostCommonWrongAnswer,
    actualDifficulty: result.Item.actualDifficulty,
    designedDifficulty: result.Item.designedDifficulty,
  });
}

async function generateParentReport(childId: string, period: string): Promise<APIGatewayProxyResultV2> {
  // Get all relevant data
  const [conceptResult, errorResult, dailyResult] = await Promise.all([
    db.send(new QueryCommand({
      TableName: TABLE_NAME,
      KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
      ExpressionAttributeValues: { ':pk': `CHILD#${childId}`, ':sk': 'CONCEPT#' },
    })),
    db.send(new QueryCommand({
      TableName: TABLE_NAME,
      KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
      ExpressionAttributeValues: { ':pk': `CHILD#${childId}`, ':sk': 'ERROR#' },
    })),
    getDailyStatsForReport(childId, period === 'month' ? 30 : 7),
  ]);

  const concepts = conceptResult.Items || [];
  const errors = errorResult.Items || [];

  // Calculate overall metrics
  const totalAttempts = concepts.reduce((sum, c) => sum + (c.totalAttempts || 0), 0);
  const totalCorrect = concepts.reduce((sum, c) => sum + (c.correctAttempts || 0), 0);
  const overallAccuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  // Determine overall progress status
  let overallProgress: 'excellent' | 'good' | 'needs-attention' | 'struggling' = 'good';
  if (overallAccuracy >= 85) overallProgress = 'excellent';
  else if (overallAccuracy >= 70) overallProgress = 'good';
  else if (overallAccuracy >= 50) overallProgress = 'needs-attention';
  else overallProgress = 'struggling';

  // Identify strong and weak concepts
  const sortedConcepts = concepts
    .map(c => ({
      concept: c.concept,
      conceptName: formatConceptName(c.concept),
      masteryScore: c.masteryScore,
      trend: c.trend,
      totalAttempts: c.totalAttempts,
    }))
    .sort((a, b) => b.masteryScore - a.masteryScore);

  const strongConcepts = sortedConcepts.filter(c => c.masteryScore >= 70);
  const weakConcepts = sortedConcepts.filter(c => c.masteryScore < 60);

  // Generate concept analysis
  const conceptAnalysis = sortedConcepts.map(c => {
    let status: 'mastered' | 'progressing' | 'needs-practice' | 'struggling' = 'progressing';
    if (c.masteryScore >= 85) status = 'mastered';
    else if (c.masteryScore >= 70) status = 'progressing';
    else if (c.masteryScore >= 50) status = 'needs-practice';
    else status = 'struggling';

    return {
      concept: c.concept,
      conceptName: c.conceptName,
      status,
      accuracy: c.masteryScore,
      trend: c.trend,
      suggestedActivities: status === 'struggling' || status === 'needs-practice'
        ? getSuggestedActivities(c.concept)
        : undefined,
    };
  });

  // Generate recommendations
  const recommendations = generateRecommendations(weakConcepts, errors);

  // Generate parent-friendly headline
  let headline = '';
  if (strongConcepts.length > 0 && weakConcepts.length > 0) {
    headline = `Doing well with ${strongConcepts[0].conceptName} but needs support with ${weakConcepts[0].conceptName}`;
  } else if (strongConcepts.length > 0) {
    headline = `Excellent progress! Strong understanding across all concepts`;
  } else if (weakConcepts.length > 0) {
    headline = `Some areas need attention - focused practice recommended`;
  } else {
    headline = `Making steady progress in their learning journey`;
  }

  // Build report
  const report: ParentReport = {
    childId,
    childName: '', // Would be populated from child profile
    reportPeriod: {
      start: new Date(Date.now() - (period === 'month' ? 30 : 7) * 24 * 60 * 60 * 1000).toISOString(),
      end: new Date().toISOString(),
    },
    summary: {
      overallProgress,
      headline,
      keyInsights: [
        `Attempted ${totalAttempts} questions with ${overallAccuracy}% accuracy`,
        strongConcepts.length > 0 ? `Strongest in: ${strongConcepts.slice(0, 2).map(c => c.conceptName).join(', ')}` : '',
        weakConcepts.length > 0 ? `Needs practice: ${weakConcepts.slice(0, 2).map(c => c.conceptName).join(', ')}` : '',
      ].filter(Boolean),
    },
    conceptAnalysis,
    learningPatterns: {
      averageSessionLength: dailyResult.avgSessionMinutes || 0,
      preferredDifficulty: 2,
      respondsWellToAI: true,
    },
    recommendations,
    achievements: generateAchievements(concepts, dailyResult),
  };

  return success(report);
}

// ============ HELPER FUNCTIONS ============

function formatConceptName(concept: string): string {
  const names: Record<string, string> = {
    // Detected concepts from question analysis
    'place-value-identification': 'Place Value Identification',
    'place-value-naming': 'Place Value Position Names',
    'number-reading': 'Reading Large Numbers',
    'number-writing': 'Writing Numbers',
    'number-ordering': 'Ordering Numbers',
    'number-comparing': 'Comparing Numbers',
    'rounding': 'Rounding Numbers',
    'adding-subtracting-place-value': 'Adding/Subtracting by Place Value',
    'times-tables-recall': 'Times Tables',
    'division-facts': 'Division Facts',
    'multiplication-strategies': 'Multiplication Strategies',
    'division-with-remainders': 'Division with Remainders',
    'factors-multiples': 'Factors and Multiples',
    'fraction-identification': 'Identifying Fractions',
    'equivalent-fractions': 'Equivalent Fractions',
    'comparing-fractions': 'Comparing Fractions',
    'decimal-place-value': 'Decimal Place Value',
    'decimal-ordering': 'Ordering Decimals',
    // Victorian Curriculum section codes (Year 5)
    'vcmna186': 'Reading and Writing Large Numbers',
    'vcmna181': 'Factors and Multiples',
    'vcmna182': 'Estimation and Rounding',
    'vcmna183': 'Multiplying Large Numbers',
    'vcmna184': 'Division with Remainders',
    'vcmna187': 'Comparing and Ordering Fractions',
    'vcmna190': 'Comparing and Ordering Decimals',
    'vcmmg195': 'Choosing Appropriate Units',
    'vcmmg196': 'Calculating Perimeter and Area',
    'vcmmg198': 'Converting Between Units',
    'vcmmg200': 'Shape Properties',
    'vcmmg202': 'Angles',
    'vcmsp205': 'Data Representation',
    'vcmsp206': 'Probability',
    // Year 4 codes
    'vcmna153': 'Place Value to Ten Thousands',
    'vcmna155': 'Addition and Subtraction Strategies',
    'vcmna156': 'Multiplication Facts',
    // Year 6 codes
    'vcmna209': 'Integers and the Number Line',
    'vcmna210': 'Prime and Composite Numbers',
    // Geometry concepts
    'angle-types': 'Types of Angles',
    'angle-measurement': 'Measuring Angles',
    'shape-properties': 'Shape Properties',
    'symmetry': 'Symmetry',
    '2d-shapes': '2D Shapes',
    '3d-shapes': '3D Shapes',
  };

  // Try lowercase match first (for case-insensitive lookup)
  const lowerConcept = concept.toLowerCase();
  if (names[lowerConcept]) {
    return names[lowerConcept];
  }

  // Then try exact match
  if (names[concept]) {
    return names[concept];
  }

  // Fallback: convert kebab-case or code to title case
  return concept.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function generateWeaknessSummary(weakConcepts: any[], errorPatterns: any[]): string {
  if (weakConcepts.length === 0 && errorPatterns.length === 0) {
    return 'No significant weaknesses detected. Keep up the great work!';
  }

  const parts: string[] = [];
  if (weakConcepts.length > 0) {
    parts.push(`Focus needed on ${weakConcepts.length} concept(s), especially "${formatConceptName(weakConcepts[0].concept)}"`);
  }
  if (errorPatterns.length > 0) {
    parts.push(`Recurring error pattern: ${errorPatterns[0].description}`);
  }

  return parts.join('. ');
}

function getSuggestedActivities(concept: string): string[] {
  const activities: Record<string, string[]> = {
    'place-value-identification': [
      'Use a place value chart to practice identifying digit values',
      'Play "What\'s My Value?" game with number cards',
    ],
    'rounding': [
      'Practice the "5 or more, round up" rule with number lines',
      'Use estimation in real-life shopping scenarios',
    ],
    'number-ordering': [
      'Sort number cards from smallest to largest',
      'Compare digits from left to right systematically',
    ],
  };
  return activities[concept] || ['Practice with additional questions in this area'];
}

function generateRecommendations(weakConcepts: any[], errors: any[]): ParentReport['recommendations'] {
  const recommendations: ParentReport['recommendations'] = [];

  // Add recommendations for weak concepts
  for (const concept of weakConcepts.slice(0, 3)) {
    recommendations.push({
      priority: concept.masteryScore < 40 ? 'high' : 'medium',
      area: formatConceptName(concept.concept),
      issue: `Currently at ${concept.masteryScore}% accuracy`,
      suggestion: `Spend 10-15 minutes daily practicing ${formatConceptName(concept.concept).toLowerCase()} questions`,
      estimatedTimeMinutes: 15,
    });
  }

  // Add recommendations for error patterns
  for (const error of errors.slice(0, 2)) {
    recommendations.push({
      priority: error.occurrences >= 5 ? 'high' : 'medium',
      area: 'Error Pattern',
      issue: error.description,
      suggestion: error.suggestedFocus,
      estimatedTimeMinutes: 10,
    });
  }

  return recommendations;
}

function generateAchievements(concepts: any[], dailyResult: any): ParentReport['achievements'] {
  const achievements: ParentReport['achievements'] = [];

  // Check for mastered concepts
  const mastered = concepts.filter(c => c.masteryScore >= 90);
  if (mastered.length > 0) {
    achievements.push({
      title: 'Concept Master',
      description: `Mastered ${mastered.length} concept(s) with 90%+ accuracy`,
      date: new Date().toISOString(),
    });
  }

  // Check for improving trends
  const improving = concepts.filter(c => c.trend === 'improving');
  if (improving.length > 0) {
    achievements.push({
      title: 'On the Rise',
      description: `Showing improvement in ${improving.length} area(s)`,
      date: new Date().toISOString(),
    });
  }

  return achievements;
}

async function getDailyStatsForReport(childId: string, days: number): Promise<any> {
  let totalMinutes = 0;
  let daysActive = 0;

  const today = new Date();
  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateKey = date.toISOString().split('T')[0];

    const result = await db.send(new GetCommand({
      TableName: TABLE_NAME,
      Key: analyticsKeys.dailyStats(childId, dateKey),
    }));

    if (result.Item && result.Item.questionsAttempted > 0) {
      totalMinutes += result.Item.timeSpentMinutes || 0;
      daysActive++;
    }
  }

  return {
    avgSessionMinutes: daysActive > 0 ? Math.round(totalMinutes / daysActive) : 0,
    daysActive,
  };
}
