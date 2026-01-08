/**
 * Cognito Post Confirmation & Post Authentication Triggers
 *
 * PostConfirmation: Called after email signup when user confirms their email
 * PostAuthentication: Called after OAuth login (Google/Facebook/Apple) - user is auto-verified
 *
 * Creates or updates a DynamoDB PROFILE record for the user with analytics tracking.
 *
 * User status flow:
 * - "unverified" - Account created but email not verified (future: pre-signup trigger)
 * - "verified" - Email verified OR OAuth authenticated, no active subscription
 * - "active" - Has active subscription (set by Stripe webhook)
 * - "cancelled" - Subscription cancelled (set by Stripe webhook)
 *
 * Analytics tracking:
 * - signupMethod: 'email' | 'google' | 'facebook' | 'apple'
 * - signupDate: ISO timestamp
 * - firstLoginDate: ISO timestamp (for OAuth users)
 * - identityProvider: OAuth provider name (if OAuth)
 *
 * This ensures every user has a profile in DynamoDB for:
 * - Rate limiting (AI calls tracking)
 * - Subscription management
 * - User preferences
 * - Conversion funnel analytics (track OAuth vs email signup conversions)
 */

import { PostConfirmationTriggerEvent, PostConfirmationTriggerHandler, PostAuthenticationTriggerEvent } from 'aws-lambda';
import { PutCommand, UpdateCommand, GetCommand } from '@aws-sdk/lib-dynamodb';
import { db, TABLE_NAME, keys } from '../lib/db';

// Detect signup method from Cognito identity provider
function getSignupMethod(event: PostConfirmationTriggerEvent | PostAuthenticationTriggerEvent): 'email' | 'google' | 'facebook' | 'apple' {
  // PostAuthentication events include identity provider info
  if ('request' in event && event.request && 'userAttributes' in event.request) {
    const identities = event.request.userAttributes['identities'];

    if (identities) {
      try {
        const identityList = JSON.parse(identities);
        const provider = identityList[0]?.providerName?.toLowerCase();

        if (provider?.includes('google')) return 'google';
        if (provider?.includes('facebook')) return 'facebook';
        if (provider?.includes('apple')) return 'apple';
      } catch (e) {
        console.warn('Failed to parse identities attribute:', e);
      }
    }
  }

  // Default to email signup
  return 'email';
}

export const handler = async (event: PostConfirmationTriggerEvent | PostAuthenticationTriggerEvent) => {
  console.log('Cognito trigger:', JSON.stringify(event, null, 2));

  const triggerSource = event.triggerSource;

  // Process PostConfirmation (email signup) and PostAuthentication (OAuth)
  if (
    triggerSource !== 'PostConfirmation_ConfirmSignUp' &&
    triggerSource !== 'PostAuthentication_Authentication'
  ) {
    console.log(`Skipping trigger source: ${triggerSource}`);
    return event;
  }

  const userId = event.userName;
  const email = event.request.userAttributes.email;
  const name = event.request.userAttributes.name || null;
  const now = new Date().toISOString();
  const signupMethod = getSignupMethod(event);

  // Extract identity provider for OAuth users
  const identityProvider = signupMethod !== 'email' ? signupMethod : null;

  const isOAuth = triggerSource === 'PostAuthentication_Authentication';

  try {
    // For OAuth: Check if profile already exists (returning user)
    if (isOAuth) {
      const existing = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: keys.user(userId),
      }));

      if (existing.Item) {
        // Returning OAuth user - just update lastLoginDate
        await db.send(new UpdateCommand({
          TableName: TABLE_NAME,
          Key: keys.user(userId),
          UpdateExpression: 'SET lastLoginDate = :now, updatedAt = :now',
          ExpressionAttributeValues: {
            ':now': now,
          },
        }));

        console.log(`OAuth returning user: ${email} (${userId})`);
        return event;
      }
    }

    // Create new user profile (email signup or first OAuth login)
    await db.send(new PutCommand({
      TableName: TABLE_NAME,
      Item: {
        ...keys.user(userId),
        email,
        name,
        tier: 'free',
        status: 'verified', // Email verified OR OAuth authenticated
        verifiedAt: now,
        createdAt: now,
        updatedAt: now,

        // Analytics tracking
        signupMethod, // 'email' | 'google' | 'facebook' | 'apple'
        signupDate: now,
        identityProvider, // null for email, provider name for OAuth
        firstLoginDate: isOAuth ? now : null, // OAuth users login immediately

        // OAuth-specific tracking
        ...(isOAuth && {
          oauthProvider: signupMethod,
          oauthSignupDate: now,
        }),
      },
      ConditionExpression: 'attribute_not_exists(PK)', // Prevent duplicates
    }));

    console.log(`Created ${signupMethod} user profile for ${email} (${userId}) with status=verified`);
  } catch (err: unknown) {
    // If profile already exists, update it with OAuth info
    if ((err as { name?: string }).name === 'ConditionalCheckFailedException') {
      console.log(`User profile already exists for ${email} (${userId}), updating`);

      try {
        await db.send(new UpdateCommand({
          TableName: TABLE_NAME,
          Key: keys.user(userId),
          UpdateExpression: `
            SET
              #status = :status,
              verifiedAt = if_not_exists(verifiedAt, :now),
              signupMethod = if_not_exists(signupMethod, :method),
              identityProvider = if_not_exists(identityProvider, :provider),
              ${isOAuth ? 'firstLoginDate = if_not_exists(firstLoginDate, :now),' : ''}
              ${isOAuth ? 'lastLoginDate = :now,' : ''}
              updatedAt = :now
          `,
          ExpressionAttributeNames: {
            '#status': 'status', // 'status' is a reserved word
          },
          ExpressionAttributeValues: {
            ':status': 'verified',
            ':now': now,
            ':method': signupMethod,
            ':provider': identityProvider,
          },
        }));

        console.log(`Updated user profile to verified with signupMethod=${signupMethod}`);
      } catch (updateErr) {
        console.error(`Failed to update user profile:`, updateErr);
      }
    } else {
      // Log error but don't fail the auth flow
      console.error(`Failed to create user profile for ${email}:`, err);
    }
  }

  // Must return the event for Cognito to complete the flow
  return event;
};
