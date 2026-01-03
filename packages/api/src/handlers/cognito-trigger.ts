/**
 * Cognito Post Confirmation Trigger
 *
 * Called by Cognito after a user confirms their email.
 * Creates or updates a DynamoDB PROFILE record for the user.
 *
 * User status flow:
 * - "unverified" - Account created but email not verified (future: pre-signup trigger)
 * - "verified" - Email verified, no active subscription
 * - "active" - Has active subscription (set by Stripe webhook)
 * - "cancelled" - Subscription cancelled (set by Stripe webhook)
 *
 * This ensures every confirmed user has a profile in DynamoDB for:
 * - Rate limiting (AI calls tracking)
 * - Subscription management
 * - User preferences
 * - Analytics (funnel tracking)
 */

import { PostConfirmationTriggerEvent, PostConfirmationTriggerHandler } from 'aws-lambda';
import { PutCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
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
  const name = event.request.userAttributes.name || null;
  const now = new Date().toISOString();

  try {
    // Create user profile in DynamoDB (only if doesn't exist)
    await db.send(new PutCommand({
      TableName: TABLE_NAME,
      Item: {
        ...keys.user(userId),
        email,
        name,
        tier: 'free',
        status: 'verified', // Email is now verified
        verifiedAt: now,
        createdAt: now,
        updatedAt: now,
      },
      ConditionExpression: 'attribute_not_exists(PK)', // Prevent duplicates
    }));

    console.log(`Created user profile for ${email} (${userId}) with status=verified`);
  } catch (err: unknown) {
    // If profile already exists, update it to verified status
    if ((err as { name?: string }).name === 'ConditionalCheckFailedException') {
      console.log(`User profile already exists for ${email} (${userId}), updating to verified`);

      // Update existing profile with verified status
      try {
        await db.send(new UpdateCommand({
          TableName: TABLE_NAME,
          Key: keys.user(userId),
          UpdateExpression: 'SET #status = :status, verifiedAt = if_not_exists(verifiedAt, :now), updatedAt = :now',
          ExpressionAttributeNames: {
            '#status': 'status', // 'status' is a reserved word
          },
          ExpressionAttributeValues: {
            ':status': 'verified',
            ':now': now,
          },
        }));
      } catch (updateErr) {
        console.error(`Failed to update user profile to verified:`, updateErr);
      }
    } else {
      // Log error but don't fail the confirmation
      console.error(`Failed to create user profile for ${email}:`, err);
    }
  }

  // Must return the event for Cognito to complete the flow
  return event;
};
