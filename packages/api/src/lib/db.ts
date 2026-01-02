import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand, QueryCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({ region: 'ap-southeast-2' });
export const db = DynamoDBDocumentClient.from(client);

export const TABLE_NAME = process.env.TABLE_NAME || 'agentsform-main';

// Helper functions for single-table design
export const keys = {
  user: (userId: string) => ({ PK: `USER#${userId}`, SK: 'PROFILE' }),
  child: (userId: string, childId: string) => ({ PK: `USER#${userId}`, SK: `CHILD#${childId}` }),
  childProfile: (childId: string) => ({ PK: `CHILD#${childId}`, SK: 'PROFILE' }),
  progress: (childId: string, subject: string) => ({ PK: `CHILD#${childId}`, SK: `PROGRESS#${subject}` }),
  session: (childId: string, date: string) => ({ PK: `CHILD#${childId}`, SK: `SESSION#${date}` }),
  question: (questionId: string) => ({ PK: `QUESTION#${questionId}`, SK: 'META' }),
  cache: (type: string, hash: string) => ({ PK: `CACHE#${type}#${hash}`, SK: 'RESPONSE' }),
  badge: (childId: string, badgeId: string) => ({ PK: `CHILD#${childId}`, SK: `BADGE#${badgeId}` }),
  benchmark: (sessionId: string) => ({ PK: `BENCHMARK#${sessionId}`, SK: 'SESSION' }),
  // New keys for comprehensive tracking
  questionAttempt: (childId: string, timestamp: string) => ({ PK: `CHILD#${childId}`, SK: `ATTEMPT#${timestamp}` }),
  aiLog: (childId: string, timestamp: string) => ({ PK: `CHILD#${childId}`, SK: `AILOG#${timestamp}` }),
  generatedQuestion: (subject: string, difficulty: number, hash: string) => ({ PK: `GENQ#${subject}#${difficulty}`, SK: `Q#${hash}` }),
  // Section quiz results
  sectionQuiz: (childId: string, sectionId: string) => ({ PK: `CHILD#${childId}`, SK: `QUIZ#${sectionId}` }),

  // ============ CURRICULUM KEYS ============
  // Curriculum structure
  curriculumSection: (yearLevel: number, sectionId: string) => ({
    PK: `CURRICULUM#YEAR${yearLevel}`,
    SK: `SECTION#${sectionId}`,
  }),
  // Questions stored by section for efficient querying
  curriculumQuestion: (sectionId: string, questionId: string) => ({
    PK: `SECTION#${sectionId}`,
    SK: `QUESTION#${questionId}`,
  }),
  // Question analytics
  questionStats: (questionId: string) => ({
    PK: `QSTATS#${questionId}`,
    SK: 'AGGREGATE',
  }),
  // Child mastery per section
  childMastery: (childId: string, sectionId: string) => ({
    PK: `CHILD#${childId}`,
    SK: `MASTERY#${sectionId}`,
  }),
  // AI-generated questions pool
  aiQuestion: (sectionId: string, difficulty: number, hash: string) => ({
    PK: `AIQUESTION#${sectionId}#D${difficulty}`,
    SK: `Q#${hash}`,
  }),
};

// Get user ID from JWT claims
export function getUserIdFromEvent(event: any): string {
  const claims = event.requestContext?.authorizer?.jwt?.claims;
  return claims?.sub || '';
}

// Get child ID and verify ownership
export async function verifyChildOwnership(userId: string, childId: string): Promise<boolean> {
  const result = await db.send(new GetCommand({
    TableName: TABLE_NAME,
    Key: keys.child(userId, childId),
  }));
  return !!result.Item;
}
