import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { GetCommand, PutCommand, QueryCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { db, TABLE_NAME, keys } from '../lib/db';
import { success, badRequest, notFound, serverError } from '../lib/response';

// ============ TYPES ============

interface CurriculumSection {
  id: string;
  code: string;
  strandId: string;
  chapterId: string;
  title: string;
  description: string;
  content: string;
  keyPoints: string[];
  examples: Array<{
    problem: string;
    solution: string;
    explanation: string;
  }>;
  questionCount: number;
}

interface CurriculumQuestion {
  id: string;
  sectionId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 1 | 2 | 3;
  topic?: string;
  isAiGenerated: boolean;
  // Analytics
  totalAttempts?: number;
  successRate?: number;
}

interface ChildMastery {
  sectionId: string;
  questionsAttempted: number;
  questionsCorrect: number;
  currentLevel: 1 | 2 | 3;
  masteryScore: number;
  streakCorrect: number;
}

// ============ HANDLER ============

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
  try {
    const path = event.rawPath;
    const method = event.requestContext.http.method;

    // GET /curriculum/:yearLevel - Get all sections for a year level
    if (path.match(/^\/curriculum\/\d+$/) && method === 'GET') {
      const yearLevel = parseInt(path.split('/')[2]);
      return await getSectionsForYear(yearLevel);
    }

    // GET /curriculum/:yearLevel/:sectionId - Get section with content
    if (path.match(/^\/curriculum\/\d+\/[A-Z]+\d+$/) && method === 'GET') {
      const parts = path.split('/');
      const yearLevel = parseInt(parts[2]);
      const sectionId = parts[3];
      return await getSectionContent(yearLevel, sectionId);
    }

    // GET /curriculum/:yearLevel/:sectionId/questions - Get questions for section
    if (path.match(/^\/curriculum\/\d+\/[A-Z]+\d+\/questions$/) && method === 'GET') {
      const parts = path.split('/');
      const sectionId = parts[3];
      const childId = event.queryStringParameters?.childId;
      return await getSectionQuestions(sectionId, childId);
    }

    // GET /curriculum/:yearLevel/:sectionId/adaptive - Get adaptive question
    if (path.match(/^\/curriculum\/\d+\/[A-Z]+\d+\/adaptive$/) && method === 'GET') {
      const parts = path.split('/');
      const sectionId = parts[3];
      const childId = event.queryStringParameters?.childId;
      const excludeIds = event.queryStringParameters?.exclude?.split(',') || [];

      if (!childId) {
        return badRequest('childId is required');
      }

      return await getAdaptiveQuestion(sectionId, childId, excludeIds);
    }

    // POST /curriculum/attempt - Record question attempt
    if (path === '/curriculum/attempt' && method === 'POST') {
      const body = JSON.parse(event.body || '{}');
      return await recordAttempt(body);
    }

    // GET /curriculum/mastery/:childId - Get child's mastery for all sections
    if (path.match(/^\/curriculum\/mastery\/[\w-]+$/) && method === 'GET') {
      const childId = path.split('/')[3];
      return await getChildMastery(childId);
    }

    return badRequest('Invalid endpoint');
  } catch (error) {
    console.error('Curriculum handler error:', error);
    return serverError();
  }
}

// ============ SECTION ENDPOINTS ============

async function getSectionsForYear(yearLevel: number): Promise<APIGatewayProxyResultV2> {
  let result = await db.send(new QueryCommand({
    TableName: TABLE_NAME,
    KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
    ExpressionAttributeValues: {
      ':pk': `CURRICULUM#YEAR${yearLevel}`,
      ':sk': 'SECTION#',
    },
  }));

  // Fallback to Year 5 content if requested year level has no content
  let effectiveYearLevel = yearLevel;
  if (!result.Items || result.Items.length === 0) {
    effectiveYearLevel = 5;
    result = await db.send(new QueryCommand({
      TableName: TABLE_NAME,
      KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
      ExpressionAttributeValues: {
        ':pk': `CURRICULUM#YEAR5`,
        ':sk': 'SECTION#',
      },
    }));
  }

  const sections = (result.Items || []).map(item => ({
    id: item.id,
    code: item.code,
    strandId: item.strandId,
    chapterId: item.chapterId,
    title: item.title,
    description: item.description,
    questionCount: item.questionCount || 0,
  }));

  return success({ yearLevel: effectiveYearLevel, sections, requestedYearLevel: yearLevel });
}

async function getSectionContent(yearLevel: number, sectionId: string): Promise<APIGatewayProxyResultV2> {
  let result = await db.send(new GetCommand({
    TableName: TABLE_NAME,
    Key: keys.curriculumSection(yearLevel, sectionId),
  }));

  // Fallback to Year 5 if section not found in requested year
  if (!result.Item && yearLevel !== 5) {
    result = await db.send(new GetCommand({
      TableName: TABLE_NAME,
      Key: keys.curriculumSection(5, sectionId),
    }));
  }

  if (!result.Item) {
    return notFound('Section not found');
  }

  return success({
    section: {
      id: result.Item.id,
      code: result.Item.code,
      title: result.Item.title,
      description: result.Item.description,
      content: result.Item.content,
      keyPoints: result.Item.keyPoints,
      examples: result.Item.examples,
      questionCount: result.Item.questionCount,
    },
  });
}

// ============ QUESTION ENDPOINTS ============

async function getSectionQuestions(sectionId: string, childId?: string): Promise<APIGatewayProxyResultV2> {
  // Get all questions for section
  const result = await db.send(new QueryCommand({
    TableName: TABLE_NAME,
    KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
    ExpressionAttributeValues: {
      ':pk': `SECTION#${sectionId}`,
      ':sk': 'QUESTION#',
    },
  }));

  const questions = (result.Items || []).map(item => ({
    id: item.id,
    question: item.question,
    options: item.options,
    correctAnswer: item.correctAnswer,
    explanation: item.explanation,
    difficulty: item.difficulty,
    topic: item.topic,
    // Include knowledge token data for misconception tracking
    knowledge: item.knowledge,
  }));

  // If childId provided, also return mastery info
  let mastery = null;
  if (childId) {
    const masteryResult = await db.send(new GetCommand({
      TableName: TABLE_NAME,
      Key: keys.childMastery(childId, sectionId),
    }));
    if (masteryResult.Item) {
      mastery = {
        questionsAttempted: masteryResult.Item.questionsAttempted,
        questionsCorrect: masteryResult.Item.questionsCorrect,
        currentLevel: masteryResult.Item.currentLevel,
        masteryScore: masteryResult.Item.masteryScore,
      };
    }
  }

  return success({ sectionId, questions, mastery });
}

// ============ ADAPTIVE QUESTION SELECTION ============

async function getAdaptiveQuestion(
  sectionId: string,
  childId: string,
  excludeIds: string[]
): Promise<APIGatewayProxyResultV2> {
  // 1. Get child's mastery for this section
  const masteryResult = await db.send(new GetCommand({
    TableName: TABLE_NAME,
    Key: keys.childMastery(childId, sectionId),
  }));

  let currentLevel: 1 | 2 | 3 = 1;
  let streakCorrect = 0;

  if (masteryResult.Item) {
    currentLevel = masteryResult.Item.currentLevel || 1;
    streakCorrect = masteryResult.Item.streakCorrect || 0;

    // Adaptive difficulty adjustment
    if (masteryResult.Item.masteryScore >= 80 && streakCorrect >= 3) {
      currentLevel = Math.min(3, currentLevel + 1) as 1 | 2 | 3;
    } else if (masteryResult.Item.masteryScore <= 40 || masteryResult.Item.streakWrong >= 2) {
      currentLevel = Math.max(1, currentLevel - 1) as 1 | 2 | 3;
    }
  }

  // 2. Get questions at target difficulty
  const questionsResult = await db.send(new QueryCommand({
    TableName: TABLE_NAME,
    KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
    ExpressionAttributeValues: {
      ':pk': `SECTION#${sectionId}`,
      ':sk': 'QUESTION#',
    },
  }));

  const allQuestions = questionsResult.Items || [];

  // Filter by difficulty and exclude already answered
  let availableQuestions = allQuestions.filter(
    q => q.difficulty === currentLevel && !excludeIds.includes(q.id)
  );

  // If no questions at target difficulty, try adjacent difficulties
  if (availableQuestions.length === 0) {
    availableQuestions = allQuestions.filter(
      q => !excludeIds.includes(q.id)
    );
  }

  if (availableQuestions.length === 0) {
    // All questions answered - could trigger AI generation here
    return success({
      exhausted: true,
      message: 'All questions completed for this section',
      totalQuestions: allQuestions.length,
    });
  }

  // 3. Select random question from available pool
  const selectedQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

  return success({
    question: {
      id: selectedQuestion.id,
      question: selectedQuestion.question,
      options: selectedQuestion.options,
      difficulty: selectedQuestion.difficulty,
      topic: selectedQuestion.topic,
    },
    selectedDifficulty: currentLevel,
    reason: masteryResult.Item ? 'mastery_based' : 'default',
  });
}

// ============ ATTEMPT RECORDING ============

async function recordAttempt(body: {
  childId: string;
  questionId: string;
  sectionId: string;
  selectedAnswer: number;
  correctAnswer: number;
  timeSpentSeconds: number;
  difficulty: number;
}): Promise<APIGatewayProxyResultV2> {
  const { childId, questionId, sectionId, selectedAnswer, correctAnswer, timeSpentSeconds, difficulty } = body;

  if (!childId || !questionId || !sectionId || selectedAnswer === undefined) {
    return badRequest('Missing required fields');
  }

  const isCorrect = selectedAnswer === correctAnswer;
  const timestamp = new Date().toISOString();

  // 1. Record the attempt
  await db.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      ...keys.questionAttempt(childId, timestamp),
      type: 'QATTEMPT',
      childId,
      questionId,
      sectionId,
      selectedAnswer,
      correctAnswer,
      isCorrect,
      timeSpentSeconds,
      difficulty,
      createdAt: timestamp,
    },
  }));

  // 2. Update question stats
  await db.send(new UpdateCommand({
    TableName: TABLE_NAME,
    Key: keys.questionStats(questionId),
    UpdateExpression: `
      SET totalAttempts = if_not_exists(totalAttempts, :zero) + :one,
          correctAttempts = if_not_exists(correctAttempts, :zero) + :correct,
          #type = :type,
          lastUpdated = :now
    `,
    ExpressionAttributeNames: { '#type': 'type' },
    ExpressionAttributeValues: {
      ':zero': 0,
      ':one': 1,
      ':correct': isCorrect ? 1 : 0,
      ':type': 'QSTATS',
      ':now': timestamp,
    },
  }));

  // 3. Update child mastery
  const masteryKey = keys.childMastery(childId, sectionId);
  await db.send(new UpdateCommand({
    TableName: TABLE_NAME,
    Key: masteryKey,
    UpdateExpression: `
      SET questionsAttempted = if_not_exists(questionsAttempted, :zero) + :one,
          questionsCorrect = if_not_exists(questionsCorrect, :zero) + :correct,
          streakCorrect = if_not_exists(streakCorrect, :zero) + :streakAdd,
          streakWrong = if_not_exists(streakWrong, :zero) + :wrongAdd,
          lastAttemptAt = :now,
          #type = :type,
          childId = :childId,
          sectionId = :sectionId
    `,
    ExpressionAttributeNames: { '#type': 'type' },
    ExpressionAttributeValues: {
      ':zero': 0,
      ':one': 1,
      ':correct': isCorrect ? 1 : 0,
      ':streakAdd': isCorrect ? 1 : -999, // Reset to 0 if wrong (clamped later)
      ':wrongAdd': isCorrect ? -999 : 1,   // Reset to 0 if correct
      ':now': timestamp,
      ':type': 'MASTERY',
      ':childId': childId,
      ':sectionId': sectionId,
    },
  }));

  // 4. Calculate and update mastery score
  const masteryResult = await db.send(new GetCommand({
    TableName: TABLE_NAME,
    Key: masteryKey,
  }));

  if (masteryResult.Item) {
    const attempted = masteryResult.Item.questionsAttempted || 0;
    const correct = masteryResult.Item.questionsCorrect || 0;
    const masteryScore = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    // Clamp streaks to 0 minimum
    const streakCorrect = Math.max(0, masteryResult.Item.streakCorrect || 0);
    const streakWrong = Math.max(0, masteryResult.Item.streakWrong || 0);

    // Determine current level based on mastery
    let currentLevel: 1 | 2 | 3 = 1;
    if (masteryScore >= 80) currentLevel = 3;
    else if (masteryScore >= 50) currentLevel = 2;

    await db.send(new UpdateCommand({
      TableName: TABLE_NAME,
      Key: masteryKey,
      UpdateExpression: `
        SET masteryScore = :score,
            currentLevel = :level,
            streakCorrect = :streakCorrect,
            streakWrong = :streakWrong
      `,
      ExpressionAttributeValues: {
        ':score': masteryScore,
        ':level': currentLevel,
        ':streakCorrect': isCorrect ? streakCorrect : 0,
        ':streakWrong': isCorrect ? 0 : streakWrong,
      },
    }));
  }

  return success({
    recorded: true,
    isCorrect,
    explanation: body.correctAnswer !== undefined ? undefined : 'Answer recorded',
  });
}

// ============ MASTERY ENDPOINTS ============

async function getChildMastery(childId: string): Promise<APIGatewayProxyResultV2> {
  const result = await db.send(new QueryCommand({
    TableName: TABLE_NAME,
    KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
    ExpressionAttributeValues: {
      ':pk': `CHILD#${childId}`,
      ':sk': 'MASTERY#',
    },
  }));

  const mastery = (result.Items || []).map(item => ({
    sectionId: item.sectionId,
    questionsAttempted: item.questionsAttempted,
    questionsCorrect: item.questionsCorrect,
    currentLevel: item.currentLevel,
    masteryScore: item.masteryScore,
    lastAttemptAt: item.lastAttemptAt,
  }));

  return success({ childId, mastery });
}
