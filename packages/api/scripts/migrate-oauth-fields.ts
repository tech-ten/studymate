/**
 * Migration script to add OAuth fields to existing user records
 *
 * This script:
 * 1. Scans all user profiles in DynamoDB
 * 2. Adds OAuth-related fields if they don't exist:
 *    - auth_method: 'email' (default for existing users)
 *    - oauth_provider: null
 *    - oauth_sub: null
 *    - linked_accounts: ['cognito:email']
 *
 * Run this BEFORE deploying OAuth changes to production
 *
 * Usage:
 *   npx ts-node scripts/migrate-oauth-fields.ts --dry-run
 *   npx ts-node scripts/migrate-oauth-fields.ts --execute
 */

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({ region: 'ap-southeast-2' });
const db = DynamoDBDocumentClient.from(client);
const TABLE_NAME = process.env.TABLE_NAME || 'agentsform-main';

interface UserProfile {
  PK: string;
  SK: string;
  email: string;
  tier?: string;
  auth_method?: string;
  oauth_provider?: string | null;
  oauth_sub?: string | null;
  linked_accounts?: string[];
}

async function migrateOAuthFields(dryRun: boolean = true) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`OAuth Fields Migration - ${dryRun ? 'DRY RUN' : 'EXECUTING'}`);
  console.log(`Table: ${TABLE_NAME}`);
  console.log(`${'='.repeat(60)}\n`);

  // Scan for all user profiles
  const scanResult = await db.send(new ScanCommand({
    TableName: TABLE_NAME,
    FilterExpression: 'begins_with(PK, :pk) AND SK = :sk',
    ExpressionAttributeValues: {
      ':pk': 'USER#',
      ':sk': 'PROFILE',
    },
  }));

  const users = (scanResult.Items || []) as UserProfile[];
  console.log(`Found ${users.length} user profiles\n`);

  let migratedCount = 0;
  let skippedCount = 0;

  for (const user of users) {
    // Check if user already has OAuth fields
    if (user.auth_method && user.linked_accounts) {
      console.log(`✓ Skipping ${user.email} - already has OAuth fields`);
      skippedCount++;
      continue;
    }

    console.log(`→ Migrating ${user.email} (${user.PK})...`);

    if (!dryRun) {
      try {
        await db.send(new UpdateCommand({
          TableName: TABLE_NAME,
          Key: { PK: user.PK, SK: user.SK },
          UpdateExpression: `
            SET
              auth_method = if_not_exists(auth_method, :auth),
              oauth_provider = if_not_exists(oauth_provider, :null),
              oauth_sub = if_not_exists(oauth_sub, :null),
              linked_accounts = if_not_exists(linked_accounts, :linked)
          `,
          ExpressionAttributeValues: {
            ':auth': 'email',
            ':null': null,
            ':linked': ['cognito:email'],
          },
        }));
        console.log(`  ✓ Migrated successfully`);
        migratedCount++;
      } catch (err) {
        console.error(`  ✗ Failed to migrate:`, err);
      }
    } else {
      console.log(`  → Would add: auth_method='email', oauth_provider=null, linked_accounts=['cognito:email']`);
      migratedCount++;
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Migration Summary:`);
  console.log(`  Total users: ${users.length}`);
  console.log(`  Migrated: ${migratedCount}`);
  console.log(`  Skipped (already migrated): ${skippedCount}`);
  console.log(`  Mode: ${dryRun ? 'DRY RUN (no changes made)' : 'EXECUTED'}`);
  console.log(`${'='.repeat(60)}\n`);

  if (dryRun) {
    console.log(`\nℹ️  This was a dry run. No changes were made to the database.`);
    console.log(`   To execute the migration, run with --execute flag:\n`);
    console.log(`   npx ts-node scripts/migrate-oauth-fields.ts --execute\n`);
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const dryRun = !args.includes('--execute');

migrateOAuthFields(dryRun)
  .then(() => {
    console.log('✓ Migration completed successfully');
    process.exit(0);
  })
  .catch((err) => {
    console.error('✗ Migration failed:', err);
    process.exit(1);
  });
