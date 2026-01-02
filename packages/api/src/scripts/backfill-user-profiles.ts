/**
 * Backfill User Profiles Script
 *
 * Creates DynamoDB PROFILE records for Cognito users who don't have one.
 * This ensures all users have a consistent record in DynamoDB for:
 * - Rate limiting (AI calls tracking)
 * - Subscription management
 * - User preferences
 *
 * Usage: npx ts-node src/scripts/backfill-user-profiles.ts
 */

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand } from '@aws-sdk/lib-dynamodb';
import { CognitoIdentityProviderClient, ListUsersCommand } from '@aws-sdk/client-cognito-identity-provider';

const dynamoClient = new DynamoDBClient({ region: 'ap-southeast-2' });
const db = DynamoDBDocumentClient.from(dynamoClient);
const cognitoClient = new CognitoIdentityProviderClient({ region: 'ap-southeast-2' });

const TABLE_NAME = process.env.TABLE_NAME || 'agentsform-main';
const USER_POOL_ID = process.env.USER_POOL_ID || 'ap-southeast-2_KQjSkcKvP';

interface CognitoUser {
  id: string;
  email: string;
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
      const emailVerified = user.Attributes?.find(a => a.Name === 'email_verified')?.Value === 'true';

      users.push({
        id: user.Username || '',
        email,
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
        console.log(`✓ ${user.email} - Profile exists (tier: ${existingProfile.Item.tier || 'free'})`);
        existing++;
        continue;
      }

      // Create new profile
      await db.send(new PutCommand({
        TableName: TABLE_NAME,
        Item: {
          PK: `USER#${user.id}`,
          SK: 'PROFILE',
          email: user.email,
          tier: 'free',
          createdAt: user.createdAt,
          updatedAt: new Date().toISOString(),
        },
      }));

      console.log(`+ ${user.email} - Created new profile`);
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
Existing: ${existing}
Errors: ${errors}
Total: ${cognitoUsers.length}
  `);
}

backfillUserProfiles().catch(console.error);
