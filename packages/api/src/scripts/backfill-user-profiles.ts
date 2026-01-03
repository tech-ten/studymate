/**
 * Backfill User Profiles Script
 *
 * Creates or updates DynamoDB PROFILE records for Cognito users.
 * This ensures all users have a consistent record in DynamoDB for:
 * - Rate limiting (AI calls tracking)
 * - Subscription management
 * - User preferences
 * - Status tracking (verified, active, cancelled)
 *
 * Usage: npx ts-node src/scripts/backfill-user-profiles.ts
 */

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { CognitoIdentityProviderClient, ListUsersCommand } from '@aws-sdk/client-cognito-identity-provider';

const dynamoClient = new DynamoDBClient({ region: 'ap-southeast-2' });
const db = DynamoDBDocumentClient.from(dynamoClient);
const cognitoClient = new CognitoIdentityProviderClient({ region: 'ap-southeast-2' });

const TABLE_NAME = process.env.TABLE_NAME || 'agentsform-main';
const USER_POOL_ID = process.env.USER_POOL_ID || 'ap-southeast-2_KQjSkcKvP';

interface CognitoUser {
  id: string;
  email: string;
  name: string | null;
  createdAt: string;
  emailVerified: boolean;
}

async function getCognitoUsers(): Promise<CognitoUser[]> {
  const users: CognitoUser[] = [];
  let paginationToken: string | undefined;

  do {
    const response = await cognitoClient.send(new ListUsersCommand({
      UserPoolId: USER_POOL_ID,
      Limit: 60,
      PaginationToken: paginationToken,
    }));

    for (const user of response.Users || []) {
      const email = user.Attributes?.find(a => a.Name === 'email')?.Value || '';
      const name = user.Attributes?.find(a => a.Name === 'name')?.Value || null;
      const emailVerified = user.Attributes?.find(a => a.Name === 'email_verified')?.Value === 'true';

      users.push({
        id: user.Username || '',
        email,
        name,
        createdAt: user.UserCreateDate?.toISOString() || new Date().toISOString(),
        emailVerified,
      });
    }

    paginationToken = response.PaginationToken;
  } while (paginationToken);

  return users;
}

async function backfillUserProfiles() {
  console.log(`
====================================
  User Profile Backfill Script
====================================
Table: ${TABLE_NAME}
User Pool: ${USER_POOL_ID}
  `);

  // Get all Cognito users
  console.log('Fetching users from Cognito...');
  const cognitoUsers = await getCognitoUsers();
  console.log(`Found ${cognitoUsers.length} users in Cognito\n`);

  let created = 0;
  let updated = 0;
  let existing = 0;
  let errors = 0;

  for (const user of cognitoUsers) {
    try {
      // Check if profile already exists
      const existingProfile = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: { PK: `USER#${user.id}`, SK: 'PROFILE' },
      }));

      if (existingProfile.Item) {
        const profile = existingProfile.Item;
        const tier = profile.tier || 'free';
        const hasSubscription = !!profile.stripeSubscriptionId;

        // Determine correct status based on tier and subscription
        let correctStatus: string;
        if (hasSubscription && tier !== 'free') {
          correctStatus = 'active';
        } else if (hasSubscription && tier === 'free') {
          correctStatus = 'cancelled';
        } else {
          correctStatus = 'verified'; // No subscription yet, but email verified
        }

        // Update if status is missing or needs correction
        if (!profile.status || profile.status !== correctStatus) {
          const now = new Date().toISOString();
          await db.send(new UpdateCommand({
            TableName: TABLE_NAME,
            Key: { PK: `USER#${user.id}`, SK: 'PROFILE' },
            UpdateExpression: 'SET #status = :status, verifiedAt = if_not_exists(verifiedAt, :verifiedAt), updatedAt = :now',
            ExpressionAttributeNames: {
              '#status': 'status',
            },
            ExpressionAttributeValues: {
              ':status': correctStatus,
              ':verifiedAt': profile.createdAt || now, // Use createdAt as verifiedAt for existing users
              ':now': now,
            },
          }));
          console.log(`↻ ${user.email} - Updated status to '${correctStatus}' (tier: ${tier})`);
          updated++;
        } else {
          console.log(`✓ ${user.email} - Already correct (tier: ${tier}, status: ${profile.status})`);
          existing++;
        }
        continue;
      }

      // Create new profile for user not in DynamoDB
      // Determine status: if email verified in Cognito, set to 'verified'
      const status = user.emailVerified ? 'verified' : 'unverified';
      const now = new Date().toISOString();

      await db.send(new PutCommand({
        TableName: TABLE_NAME,
        Item: {
          PK: `USER#${user.id}`,
          SK: 'PROFILE',
          email: user.email,
          name: user.name,
          tier: 'free',
          status,
          verifiedAt: user.emailVerified ? user.createdAt : null,
          createdAt: user.createdAt,
          updatedAt: now,
        },
      }));

      console.log(`+ ${user.email} - Created new profile (status: ${status})`);
      created++;
    } catch (err) {
      console.error(`✗ ${user.email} - Error: ${err}`);
      errors++;
    }
  }

  console.log(`
====================================
  Backfill Complete
====================================
Created: ${created}
Updated: ${updated}
Already correct: ${existing}
Errors: ${errors}
Total: ${cognitoUsers.length}
  `);
}

backfillUserProfiles().catch(console.error);
