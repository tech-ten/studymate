/**
 * Cognito Post Confirmation Trigger
 *
 * Called by Cognito after a user confirms their email.
 * Creates a DynamoDB PROFILE record for the new user.
 *
 * This ensures every confirmed user has a profile in DynamoDB for:
 * - Rate limiting (AI calls tracking)
 * - Subscription management
 * - User preferences
 */

import { PostConfirmationTriggerEvent, PostConfirmationTriggerHandler } from 'aws-lambda';
import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { db, TABLE_NAME, keys } from '../lib/db';

export const handler: PostConfirmationTriggerHandler = async (event: PostConfirmationTriggerEvent) => {
  console.log('Post confirmation trigger:', JSON.stringify(event, null, 2));

  // Only process on ConfirmSignUp (not ConfirmForgotPassword)
  if (event.triggerSource !== 'PostConfirmation_ConfirmSignUp') {
    console.log(`Skipping trigger source: ${event.triggerSource}`);
    return event;
  }

  const userId = event.userName;
  const email = event.request.userAttributes.email;
  const now = new Date().toISOString();

  try {
    // Create user profile in DynamoDB (only if doesn't exist)
    await db.send(new PutCommand({
      TableName: TABLE_NAME,
      Item: {
        ...keys.user(userId),
        email,
        tier: 'free',
        createdAt: now,
        updatedAt: now,
      },
      ConditionExpression: 'attribute_not_exists(PK)', // Prevent duplicates
    }));

    console.log(`Created user profile for ${email} (${userId})`);
  } catch (err: unknown) {
    // If profile already exists (ConditionalCheckFailedException), that's fine
    if ((err as { name?: string }).name === 'ConditionalCheckFailedException') {
      console.log(`User profile already exists for ${email} (${userId})`);
    } else {
      // Log error but don't fail the confirmation
      console.error(`Failed to create user profile for ${email}:`, err);
    }
  }

  // Must return the event for Cognito to complete the flow
  return event;
};
