import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { GetCommand, QueryCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { db, TABLE_NAME, keys, getUserIdFromEvent, verifyChildOwnership } from '../lib/db';
import { success, badRequest, forbidden, notFound, serverError } from '../lib/response';

// Tier limits (aligned with 2026 pricing strategy)
const TIER_LIMITS: Record<string, { dailyQuestions: number }> = {
  free: { dailyQuestions: 5 },      // 5 questions per day
  explorer: { dailyQuestions: 5 },  // 5 questions per day (legacy name for free tier)
  scholar: { dailyQuestions: -1 },  // Unlimited
  achiever: { dailyQuestions: -1 }, // Unlimited
};

// Types for section quiz results
interface QuizAnswer {
  questionIndex: number;
  questionText: string;
  userAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
  options: string[];
}

interface SectionQuizResult {
  sectionId: string;
  sectionTitle: string;
  chapterTitle: string;
  strandName: string;
  completed: boolean;
  score: number;
  totalQuestions: number;
  lastAttempt: string;
  answers: QuizAnswer[];
}

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
  try {
    const userId = getUserIdFromEvent(event);
    const childId = event.pathParameters?.childId;
    const path = event.rawPath;
    const method = event.requestContext.http.method;

    if (!childId) {
      return badRequest('childId is required');
    }

    // For child sessions (no JWT), verify child exists
    if (!userId) {
      const childResult = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: keys.childProfile(childId),
      }));
      if (!childResult.Item) {
        return forbidden('Child not found');
      }
    } else {
      // For parent sessions, verify ownership
      if (!await verifyChildOwnership(userId, childId)) {
        return forbidden('Not authorized');
      }
    }

    // === SECTION QUIZ ROUTES ===
    // POST /progress/{childId}/quiz - Save section quiz result
    if (path.includes('/quiz') && method === 'POST') {
      const body = JSON.parse(event.body || '{}') as SectionQuizResult;

      if (!body.sectionId || body.score === undefined || !body.totalQuestions) {
        return badRequest('sectionId, score, and totalQuestions are required');
      }

      // Get child's parent to check tier limits
      const childProfile = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: keys.childProfile(childId),
      }));

      if (!childProfile.Item) {
        return notFound('Child not found');
      }

      const parentId = childProfile.Item.parentId;

      // Get parent's tier
      const parentResult = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: keys.user(parentId),
      }));

      const tier = parentResult.Item?.tier || 'free';
      const limits = TIER_LIMITS[tier] || TIER_LIMITS.free;

      // Get today's quiz count for limit checking (using Australia/Sydney timezone)
      const sydneyDate = new Date().toLocaleString('en-US', { timeZone: 'Australia/Sydney' })
      const today = new Date(sydneyDate).toISOString().split('T')[0]; // YYYY-MM-DD in Sydney timezone
      const todayQuizzes = await db.send(new QueryCommand({
        TableName: TABLE_NAME,
        KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
        ExpressionAttributeValues: {
          ':pk': `CHILD#${childId}`,
          ':sk': 'QUIZ#',
        },
      }));

      // Count questions answered today (count unique answers, not total questions)
      const questionsToday = (todayQuizzes.Items || [])
        .filter(item => item.lastAttempt.startsWith(today))
        .reduce((sum, item) => sum + (item.totalQuestions || 0), 0);

      // For free tier with limits, check if they've exceeded the limit
      if (limits.dailyQuestions > 0 && questionsToday >= limits.dailyQuestions) {
        // User has already hit limit - reject new answers
        return {
          statusCode: 403,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            error: `Daily question limit reached. Your ${tier} plan allows ${limits.dailyQuestions} questions per day.`,
            limit: limits.dailyQuestions,
            used: questionsToday,
            tier,
            upgradeUrl: '/pricing',
          }),
        };
      }

      // Save quiz result (will update same section record each time)
      await db.send(new PutCommand({
        TableName: TABLE_NAME,
        Item: {
          ...keys.sectionQuiz(childId, body.sectionId),
          sectionId: body.sectionId,
          sectionTitle: body.sectionTitle || '',
          chapterTitle: body.chapterTitle || '',
          strandName: body.strandName || '',
          completed: true,
          score: body.score,
          totalQuestions: body.totalQuestions,
          lastAttempt: new Date().toISOString(),
          answers: body.answers || [],
        },
      }));

      return success({ message: 'Quiz result saved' });
    }

    // GET /progress/{childId}/quizzes - Get all section quiz results
    if (path.includes('/quizzes') && method === 'GET') {
      const result = await db.send(new QueryCommand({
        TableName: TABLE_NAME,
        KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
        ExpressionAttributeValues: {
          ':pk': `CHILD#${childId}`,
          ':sk': 'QUIZ#',
        },
      }));

      const quizzes: Record<string, SectionQuizResult> = {};
      for (const item of result.Items || []) {
        quizzes[item.sectionId] = {
          sectionId: item.sectionId,
          sectionTitle: item.sectionTitle,
          chapterTitle: item.chapterTitle,
          strandName: item.strandName,
          completed: item.completed,
          score: item.score,
          totalQuestions: item.totalQuestions,
          lastAttempt: item.lastAttempt,
          answers: item.answers || [],
        };
      }

      return success({ quizzes });
    }

    // GET /progress/{childId}/check-limit - Check if user can answer more questions today
    if (path.includes('/check-limit') && method === 'GET') {
      // Get child's parent to check tier
      const childProfile = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: keys.childProfile(childId),
      }));

      if (!childProfile.Item) {
        return notFound('Child not found');
      }

      const parentId = childProfile.Item.parentId;

      // Get parent's tier
      const parentResult = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: keys.user(parentId),
      }));

      const tier = parentResult.Item?.tier || 'free';
      const limits = TIER_LIMITS[tier] || TIER_LIMITS.free;

      // If unlimited, allow immediately
      if (limits.dailyQuestions <= 0) {
        return success({
          allowed: true,
          questionsUsed: 0,
          limit: -1,
          tier,
        });
      }

      // Get today's quiz count (using Australia/Sydney timezone)
      const sydneyDate = new Date().toLocaleString('en-US', { timeZone: 'Australia/Sydney' })
      const today = new Date(sydneyDate).toISOString().split('T')[0]; // YYYY-MM-DD in Sydney timezone
      const todayQuizzes = await db.send(new QueryCommand({
        TableName: TABLE_NAME,
        KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
        ExpressionAttributeValues: {
          ':pk': `CHILD#${childId}`,
          ':sk': 'QUIZ#',
        },
      }));

      // Count questions answered today
      const questionsToday = (todayQuizzes.Items || [])
        .filter(item => item.lastAttempt.startsWith(today))
        .reduce((sum, item) => sum + (item.totalQuestions || 0), 0);

      // Parse question count from query params
      const questionCount = parseInt(event.queryStringParameters?.questions || '0');

      return success({
        allowed: questionsToday + questionCount <= limits.dailyQuestions,
        questionsUsed: questionsToday,
        limit: limits.dailyQuestions,
        tier,
      });
    }

    // GET /progress/{childId} - Get all progress for child
    if (!path.includes('/stats') && !path.includes('/quiz') && !path.includes('/check-limit')) {
      const result = await db.send(new QueryCommand({
        TableName: TABLE_NAME,
        KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
        ExpressionAttributeValues: {
          ':pk': `CHILD#${childId}`,
          ':sk': 'PROGRESS#',
        },
      }));

      const progress = result.Items?.map(item => ({
        subject: item.subject,
        level: item.level,
        xp: item.xp,
        streak: item.streak,
        questionsAnswered: item.questionsAnswered,
        correctAnswers: item.correctAnswers,
        accuracy: item.questionsAnswered > 0
          ? Math.round((item.correctAnswers / item.questionsAnswered) * 100)
          : 0,
        weakTopics: item.weakTopics,
        lastActive: item.lastActive,
        benchmarkCompleted: item.benchmarkCompleted || false,
      })) || [];

      return success({ progress });
    }

    // GET /progress/{childId}/stats - Get detailed stats
    if (path.includes('/stats')) {
      // Get progress for all subjects
      const progressResult = await db.send(new QueryCommand({
        TableName: TABLE_NAME,
        KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
        ExpressionAttributeValues: {
          ':pk': `CHILD#${childId}`,
          ':sk': 'PROGRESS#',
        },
      }));

      // Get recent sessions
      const sessionsResult = await db.send(new QueryCommand({
        TableName: TABLE_NAME,
        KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
        ExpressionAttributeValues: {
          ':pk': `CHILD#${childId}`,
          ':sk': 'SESSION#',
        },
        Limit: 30,
        ScanIndexForward: false, // Most recent first
      }));

      // Get badges
      const badgesResult = await db.send(new QueryCommand({
        TableName: TABLE_NAME,
        KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
        ExpressionAttributeValues: {
          ':pk': `CHILD#${childId}`,
          ':sk': 'BADGE#',
        },
      }));

      const progress = progressResult.Items || [];
      const sessions = sessionsResult.Items || [];
      const badges = badgesResult.Items || [];

      // Calculate aggregate stats
      const totalXp = progress.reduce((sum, p) => sum + (p.xp || 0), 0);
      const totalQuestions = progress.reduce((sum, p) => sum + (p.questionsAnswered || 0), 0);
      const totalCorrect = progress.reduce((sum, p) => sum + (p.correctAnswers || 0), 0);
      const overallAccuracy = totalQuestions > 0
        ? Math.round((totalCorrect / totalQuestions) * 100)
        : 0;

      // Calculate current streak
      const maxStreak = Math.max(...progress.map(p => p.streak || 0), 0);

      // Calculate weekly activity
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      const weeklyActivity = sessions.filter(s =>
        new Date(s.SK.replace('SESSION#', '')) >= oneWeekAgo
      ).length;

      // Subject breakdown
      const subjectStats = progress.map(p => ({
        subject: p.subject,
        level: p.level,
        xp: p.xp,
        accuracy: p.questionsAnswered > 0
          ? Math.round((p.correctAnswers / p.questionsAnswered) * 100)
          : 0,
        questionsThisWeek: sessions.filter(s => s.subject === p.subject).length,
        improvement: calculateImprovement(sessions, p.subject),
      }));

      return success({
        totalXp,
        totalQuestions,
        overallAccuracy,
        currentStreak: maxStreak,
        weeklyActivity,
        badgesEarned: badges.length,
        subjectStats,
        recentSessions: sessions.slice(0, 10).map(s => ({
          date: s.SK.replace('SESSION#', ''),
          subject: s.subject,
          questionsAnswered: s.questionsAnswered,
          correctAnswers: s.correctAnswers,
          xpEarned: s.xpEarned,
        })),
      });
    }

    return badRequest('Invalid request');
  } catch (error) {
    console.error('Progress handler error:', error);
    return serverError();
  }
}

function calculateImprovement(sessions: any[], subject: string): number {
  const subjectSessions = sessions.filter(s => s.subject === subject);
  if (subjectSessions.length < 2) return 0;

  // Compare first half accuracy vs second half
  const midpoint = Math.floor(subjectSessions.length / 2);
  const firstHalf = subjectSessions.slice(midpoint);
  const secondHalf = subjectSessions.slice(0, midpoint);

  const firstHalfAccuracy = calculateAverageAccuracy(firstHalf);
  const secondHalfAccuracy = calculateAverageAccuracy(secondHalf);

  return Math.round(secondHalfAccuracy - firstHalfAccuracy);
}

function calculateAverageAccuracy(sessions: any[]): number {
  if (sessions.length === 0) return 0;
  const totalQuestions = sessions.reduce((sum, s) => sum + (s.questionsAnswered || 0), 0);
  const totalCorrect = sessions.reduce((sum, s) => sum + (s.correctAnswers || 0), 0);
  return totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;
}
