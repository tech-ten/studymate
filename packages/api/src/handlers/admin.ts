import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { QueryCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { db, TABLE_NAME, getUserIdFromEvent } from '../lib/db';
import { success, badRequest, forbidden, serverError } from '../lib/response';

// Admin user IDs (add your user ID here)
const ADMIN_USERS = [
  '198e94a8-4021-7046-dc39-0f89f839d1ac', // Tendai's user ID
];

function isAdmin(userId: string): boolean {
  return ADMIN_USERS.includes(userId);
}

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
  try {
    const userId = getUserIdFromEvent(event);

    if (!userId || !isAdmin(userId)) {
      return forbidden('Admin access required');
    }

    const path = event.rawPath;

    // GET /admin/stats - Overview statistics
    if (path === '/admin/stats') {
      const today = new Date().toISOString().split('T')[0];

      // Count users
      const usersResult = await db.send(new ScanCommand({
        TableName: TABLE_NAME,
        FilterExpression: 'begins_with(PK, :pk) AND SK = :sk',
        ExpressionAttributeValues: {
          ':pk': 'USER#',
          ':sk': 'PROFILE',
        },
        Select: 'COUNT',
      }));

      // Count children
      const childrenResult = await db.send(new ScanCommand({
        TableName: TABLE_NAME,
        FilterExpression: 'begins_with(PK, :pk) AND SK = :sk',
        ExpressionAttributeValues: {
          ':pk': 'CHILD#',
          ':sk': 'PROFILE',
        },
        Select: 'COUNT',
      }));

      // Count AI interactions today
      const aiLogsResult = await db.send(new ScanCommand({
        TableName: TABLE_NAME,
        FilterExpression: 'begins_with(SK, :sk) AND begins_with(requestTimestamp, :today)',
        ExpressionAttributeValues: {
          ':sk': 'AILOG#',
          ':today': today,
        },
        Select: 'COUNT',
      }));

      // Count total AI interactions
      const totalAiLogsResult = await db.send(new ScanCommand({
        TableName: TABLE_NAME,
        FilterExpression: 'begins_with(SK, :sk)',
        ExpressionAttributeValues: {
          ':sk': 'AILOG#',
        },
        Select: 'COUNT',
      }));

      // Count quizzes completed
      const quizzesResult = await db.send(new ScanCommand({
        TableName: TABLE_NAME,
        FilterExpression: 'begins_with(SK, :sk)',
        ExpressionAttributeValues: {
          ':sk': 'QUIZ#',
        },
        Select: 'COUNT',
      }));

      return success({
        totalUsers: usersResult.Count || 0,
        totalChildren: childrenResult.Count || 0,
        aiCallsToday: aiLogsResult.Count || 0,
        totalAiCalls: totalAiLogsResult.Count || 0,
        quizzesCompleted: quizzesResult.Count || 0,
        timestamp: new Date().toISOString(),
      });
    }

    // GET /admin/users - List all users with usage
    if (path === '/admin/users') {
      const today = new Date().toISOString().split('T')[0];
      const dailyKey = `aiCalls_${today}`;

      const usersResult = await db.send(new ScanCommand({
        TableName: TABLE_NAME,
        FilterExpression: 'begins_with(PK, :pk) AND SK = :sk',
        ExpressionAttributeValues: {
          ':pk': 'USER#',
          ':sk': 'PROFILE',
        },
      }));

      const users = (usersResult.Items || []).map(item => ({
        id: item.PK.replace('USER#', ''),
        email: item.email,
        tier: item.tier || 'free',
        aiCallsToday: item[dailyKey] || 0,
        createdAt: item.createdAt,
      }));

      return success({ users });
    }

    // GET /admin/children - List all children with progress
    if (path === '/admin/children') {
      const childrenResult = await db.send(new ScanCommand({
        TableName: TABLE_NAME,
        FilterExpression: 'begins_with(PK, :pk) AND SK = :sk',
        ExpressionAttributeValues: {
          ':pk': 'CHILD#',
          ':sk': 'PROFILE',
        },
      }));

      const children = (childrenResult.Items || []).map(item => ({
        id: item.PK.replace('CHILD#', ''),
        name: item.name,
        username: item.username,
        yearLevel: item.yearLevel,
        parentId: item.parentId,
        createdAt: item.createdAt,
      }));

      return success({ children });
    }

    // GET /admin/ai-logs - Recent AI interactions
    if (path === '/admin/ai-logs') {
      const limit = parseInt(event.queryStringParameters?.limit || '50');

      const logsResult = await db.send(new ScanCommand({
        TableName: TABLE_NAME,
        FilterExpression: 'begins_with(SK, :sk)',
        ExpressionAttributeValues: {
          ':sk': 'AILOG#',
        },
        Limit: limit,
      }));

      const logs = (logsResult.Items || [])
        .map(item => ({
          id: item.id,
          childId: item.childId,
          requestType: item.requestType,
          requestTimestamp: item.requestTimestamp,
          latencyMs: item.latencyMs,
          tokensUsed: item.tokensUsed,
          subject: item.subject,
          yearLevel: item.yearLevel,
        }))
        .sort((a, b) => new Date(b.requestTimestamp).getTime() - new Date(a.requestTimestamp).getTime());

      return success({ logs });
    }

    // GET /admin/usage-by-day - AI usage by day (last 7 days)
    if (path === '/admin/usage-by-day') {
      const days: { date: string; count: number }[] = [];

      for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];

        const result = await db.send(new ScanCommand({
          TableName: TABLE_NAME,
          FilterExpression: 'begins_with(SK, :sk) AND begins_with(requestTimestamp, :date)',
          ExpressionAttributeValues: {
            ':sk': 'AILOG#',
            ':date': dateStr,
          },
          Select: 'COUNT',
        }));

        days.push({ date: dateStr, count: result.Count || 0 });
      }

      return success({ days: days.reverse() });
    }

    return badRequest('Invalid endpoint');
  } catch (error) {
    console.error('Admin handler error:', error);
    return serverError();
  }
}
