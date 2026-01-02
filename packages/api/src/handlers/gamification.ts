import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { GetCommand, PutCommand, QueryCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { db, TABLE_NAME, keys, getUserIdFromEvent, verifyChildOwnership } from '../lib/db';
import { success, badRequest, forbidden, serverError } from '../lib/response';

// Badge definitions
const BADGES = {
  // Milestone badges
  'first-question': { name: 'First Steps', description: 'Answer your first question', icon: '🎯', xpBonus: 10 },
  'streak-3': { name: 'On Fire', description: '3-day learning streak', icon: '🔥', xpBonus: 25 },
  'streak-7': { name: 'Week Warrior', description: '7-day learning streak', icon: '⚔️', xpBonus: 50 },
  'streak-30': { name: 'Monthly Master', description: '30-day learning streak', icon: '👑', xpBonus: 200 },
  'questions-100': { name: 'Century Club', description: 'Answer 100 questions', icon: '💯', xpBonus: 100 },
  'questions-500': { name: 'Knowledge Seeker', description: 'Answer 500 questions', icon: '📚', xpBonus: 250 },
  'questions-1000': { name: 'Scholar Supreme', description: 'Answer 1000 questions', icon: '🎓', xpBonus: 500 },

  // Accuracy badges
  'accuracy-80': { name: 'Sharp Mind', description: '80% accuracy (min 50 questions)', icon: '🧠', xpBonus: 75 },
  'accuracy-90': { name: 'Precision Pro', description: '90% accuracy (min 100 questions)', icon: '🎯', xpBonus: 150 },
  'accuracy-95': { name: 'Near Perfect', description: '95% accuracy (min 200 questions)', icon: '⭐', xpBonus: 300 },

  // Level badges
  'level-5': { name: 'Rising Star', description: 'Reach level 5 in any subject', icon: '⭐', xpBonus: 50 },
  'level-8': { name: 'High Achiever', description: 'Reach level 8 in any subject', icon: '🌟', xpBonus: 150 },
  'level-10': { name: 'Master', description: 'Reach level 10 in any subject', icon: '🏆', xpBonus: 500 },

  // Subject badges
  'maths-master': { name: 'Maths Master', description: 'Level 8+ in Maths', icon: '🔢', xpBonus: 200 },
  'english-expert': { name: 'English Expert', description: 'Level 8+ in English', icon: '📝', xpBonus: 200 },

  // Special badges
  'benchmark-complete': { name: 'Tested & Ready', description: 'Complete your first benchmark', icon: '📊', xpBonus: 25 },
  'perfect-session': { name: 'Flawless', description: '10 correct answers in a row', icon: '💎', xpBonus: 100 },
};

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
  try {
    const userId = getUserIdFromEvent(event);
    const path = event.rawPath;
    const childId = event.pathParameters?.childId;

    // GET /gamification/leaderboard - Get global leaderboard
    if (path === '/gamification/leaderboard') {
      // Query top 100 by XP (would use GSI in production)
      const result = await db.send(new QueryCommand({
        TableName: TABLE_NAME,
        IndexName: 'GSI1',
        KeyConditionExpression: 'GSI1PK = :pk',
        ExpressionAttributeValues: {
          ':pk': 'LEADERBOARD',
        },
        Limit: 100,
        ScanIndexForward: false, // Highest XP first
      }));

      const leaderboard = result.Items?.map((item, index) => ({
        rank: index + 1,
        name: item.name,
        xp: item.totalXp,
        level: item.highestLevel,
        badges: item.badgeCount,
      })) || [];

      return success({ leaderboard });
    }

    if (!childId) {
      return badRequest('childId is required');
    }

    if (!await verifyChildOwnership(userId, childId)) {
      return forbidden('Not authorized');
    }

    // GET /gamification/{childId}/badges - Get child's badges
    if (path.includes('/badges')) {
      const result = await db.send(new QueryCommand({
        TableName: TABLE_NAME,
        KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
        ExpressionAttributeValues: {
          ':pk': `CHILD#${childId}`,
          ':sk': 'BADGE#',
        },
      }));

      const earnedBadges = result.Items?.map(item => ({
        id: item.badgeId,
        ...BADGES[item.badgeId as keyof typeof BADGES],
        earnedAt: item.earnedAt,
      })) || [];

      // Include unearned badges for display
      const allBadges = Object.entries(BADGES).map(([id, badge]) => {
        const earned = earnedBadges.find(b => b.id === id);
        return {
          id,
          ...badge,
          earned: !!earned,
          earnedAt: earned?.earnedAt,
        };
      });

      return success({
        earned: earnedBadges.length,
        total: Object.keys(BADGES).length,
        badges: allBadges,
      });
    }

    // GET /gamification/{childId}/streak - Get streak info
    if (path.includes('/streak')) {
      const result = await db.send(new QueryCommand({
        TableName: TABLE_NAME,
        KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
        ExpressionAttributeValues: {
          ':pk': `CHILD#${childId}`,
          ':sk': 'PROGRESS#',
        },
      }));

      const progress = result.Items || [];
      const maxStreak = Math.max(...progress.map(p => p.streak || 0), 0);
      const lastActive = progress.reduce((latest: string | null, p: any) => {
        if (!p.lastActive) return latest;
        return !latest || p.lastActive > latest ? p.lastActive : latest;
      }, null as string | null);

      // Check if streak is still active
      const today = new Date().toISOString().split('T')[0];
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      const lastActiveDate = lastActive ? lastActive.split('T')[0] : null;
      const streakActive = lastActiveDate === today || lastActiveDate === yesterday;

      return success({
        currentStreak: streakActive ? maxStreak : 0,
        longestStreak: maxStreak,
        lastActive,
        streakActive,
        daysUntilBadge: getNextStreakBadge(maxStreak),
      });
    }

    return badRequest('Invalid request');
  } catch (error) {
    console.error('Gamification handler error:', error);
    return serverError();
  }
}

function getNextStreakBadge(currentStreak: number): { badge: string; daysNeeded: number } | null {
  if (currentStreak < 3) return { badge: 'streak-3', daysNeeded: 3 - currentStreak };
  if (currentStreak < 7) return { badge: 'streak-7', daysNeeded: 7 - currentStreak };
  if (currentStreak < 30) return { badge: 'streak-30', daysNeeded: 30 - currentStreak };
  return null; // All streak badges earned
}

// This function would be called after each question answered to check for new badges
export async function checkAndAwardBadges(childId: string, progress: any): Promise<string[]> {
  const newBadges: string[] = [];

  // Check milestone badges
  if (progress.questionsAnswered === 1) {
    await awardBadge(childId, 'first-question');
    newBadges.push('first-question');
  }

  if (progress.questionsAnswered === 100) {
    await awardBadge(childId, 'questions-100');
    newBadges.push('questions-100');
  }

  if (progress.questionsAnswered === 500) {
    await awardBadge(childId, 'questions-500');
    newBadges.push('questions-500');
  }

  if (progress.questionsAnswered === 1000) {
    await awardBadge(childId, 'questions-1000');
    newBadges.push('questions-1000');
  }

  // Check streak badges
  if (progress.streak === 3) {
    await awardBadge(childId, 'streak-3');
    newBadges.push('streak-3');
  }

  if (progress.streak === 7) {
    await awardBadge(childId, 'streak-7');
    newBadges.push('streak-7');
  }

  if (progress.streak === 30) {
    await awardBadge(childId, 'streak-30');
    newBadges.push('streak-30');
  }

  // Check level badges
  if (progress.level === 5) {
    await awardBadge(childId, 'level-5');
    newBadges.push('level-5');
  }

  if (progress.level === 8) {
    await awardBadge(childId, 'level-8');
    newBadges.push('level-8');
  }

  if (progress.level === 10) {
    await awardBadge(childId, 'level-10');
    newBadges.push('level-10');
  }

  return newBadges;
}

async function awardBadge(childId: string, badgeId: string): Promise<void> {
  const badge = BADGES[badgeId as keyof typeof BADGES];
  if (!badge) return;

  // Check if already has badge
  const existing = await db.send(new GetCommand({
    TableName: TABLE_NAME,
    Key: keys.badge(childId, badgeId),
  }));

  if (existing.Item) return; // Already has badge

  // Award badge
  await db.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      ...keys.badge(childId, badgeId),
      badgeId,
      earnedAt: new Date().toISOString(),
    },
  }));

  // Award bonus XP (update all progress records)
  const progressResult = await db.send(new QueryCommand({
    TableName: TABLE_NAME,
    KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
    ExpressionAttributeValues: {
      ':pk': `CHILD#${childId}`,
      ':sk': 'PROGRESS#',
    },
  }));

  for (const progress of progressResult.Items || []) {
    await db.send(new UpdateCommand({
      TableName: TABLE_NAME,
      Key: { PK: progress.PK, SK: progress.SK },
      UpdateExpression: 'SET xp = xp + :bonus',
      ExpressionAttributeValues: { ':bonus': badge.xpBonus },
    }));
  }
}
