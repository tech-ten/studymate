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
 * OAuth User Unification:
 * - Users are unified by email address
 * - If OAuth user email matches existing email/password user, accounts are linked
 * - oauth_provider: 'google' | 'facebook' | 'apple' | null
 * - oauth_sub: Cognito sub for OAuth users
 * - auth_method: 'email' | 'oauth' | 'both'
 * - linked_accounts: Array of authentication methods
 *
 * This ensures every user has a profile in DynamoDB for:
 * - Rate limiting (AI calls tracking)
 * - Subscription management
 * - User preferences
 * - Conversion funnel analytics (track OAuth vs email signup conversions)
 */

import { PostConfirmationTriggerEvent, PostConfirmationTriggerHandler, PostAuthenticationTriggerEvent } from 'aws-lambda';
import { PutCommand, UpdateCommand, GetCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';
import { CognitoIdentityProviderClient, AdminUpdateUserAttributesCommand } from '@aws-sdk/client-cognito-identity-provider';
import { db, TABLE_NAME, keys } from '../lib/db';

const cognitoClient = new CognitoIdentityProviderClient({ region: 'ap-southeast-2' });
const USER_POOL_ID = process.env.USER_POOL_ID || '';

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
  const cognitoTier = event.request.userAttributes['custom:tier'] || 'free';
  const now = new Date().toISOString();
  const signupMethod = getSignupMethod(event);

  // Extract identity provider for OAuth users
  const identityProvider = signupMethod !== 'email' ? signupMethod : null;

  const isOAuth = triggerSource === 'PostAuthentication_Authentication';

  try {
    // STEP 1: Check if user with this email already exists (for account linking)
    // This handles the case where a user signed up with email/password, then tries OAuth
    const emailIndexResponse = await db.send(new QueryCommand({
      TableName: TABLE_NAME,
      IndexName: 'email-index', // GSI on email attribute
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': email,
      },
      Limit: 1,
    }));

    const existingUsers = emailIndexResponse.Items || [];

    if (existingUsers.length > 0) {
      const existingUser = existingUsers[0];
      const existingUserId = existingUser.PK.replace('USER#', '');

      // CASE 1: OAuth user trying to link to existing email/password account
      // Only link if: 1) existing user has email auth, 2) existing user ID is DIFFERENT from current OAuth user ID
      // If IDs are the same, this is just a stale record from a deleted user - don't link, just update
      if (isOAuth && existingUser.auth_method === 'email' && existingUserId !== userId) {
        console.log(`Linking OAuth account ${userId} to existing user ${existingUserId}`);

        // Update existing user record to link OAuth account
        await db.send(new UpdateCommand({
          TableName: TABLE_NAME,
          Key: keys.user(existingUserId),
          UpdateExpression: 'SET oauth_sub = :oauth_sub, oauth_provider = :provider, auth_method = :auth, linked_accounts = list_append(if_not_exists(linked_accounts, :empty_list), :new_account), lastLoginDate = :now, updatedAt = :now',
          ExpressionAttributeValues: {
            ':oauth_sub': userId,
            ':provider': signupMethod,
            ':auth': 'both',
            ':new_account': [`oauth:${signupMethod}`],
            ':empty_list': [],
            ':now': now,
          },
        }));

        // Sync tier from DynamoDB to Cognito custom:tier
        if (existingUser.tier !== cognitoTier) {
          await cognitoClient.send(new AdminUpdateUserAttributesCommand({
            UserPoolId: USER_POOL_ID,
            Username: userId,
            UserAttributes: [
              {
                Name: 'custom:tier',
                Value: existingUser.tier,
              },
            ],
          }));
          console.log(`Synced tier ${existingUser.tier} to Cognito for OAuth user ${userId}`);
        }

        console.log(`Successfully linked OAuth account to existing user ${existingUserId}`);
        return event;
      }

      // CASE 2: Returning OAuth user with same email (just update lastLoginDate)
      if (isOAuth && existingUserId === userId) {
        await db.send(new UpdateCommand({
          TableName: TABLE_NAME,
          Key: keys.user(userId),
          UpdateExpression: 'SET lastLoginDate = :now, updatedAt = :now',
          ExpressionAttributeValues: {
            ':now': now,
          },
        }));

        // Sync tier from DynamoDB if out of sync
        if (existingUser.tier !== cognitoTier) {
          await cognitoClient.send(new AdminUpdateUserAttributesCommand({
            UserPoolId: USER_POOL_ID,
            Username: userId,
            UserAttributes: [
              {
                Name: 'custom:tier',
                Value: existingUser.tier,
              },
            ],
          }));
          console.log(`Synced tier ${existingUser.tier} to Cognito for returning user ${userId}`);
        }

        console.log(`OAuth returning user: ${email} (${userId})`);
        return event;
      }

      // CASE 3: Email user returning (already exists)
      if (!isOAuth && existingUserId === userId) {
        await db.send(new UpdateCommand({
          TableName: TABLE_NAME,
          Key: keys.user(userId),
          UpdateExpression: 'SET lastLoginDate = :now, updatedAt = :now',
          ExpressionAttributeValues: {
            ':now': now,
          },
        }));

        console.log(`Email returning user: ${email} (${userId})`);
        return event;
      }
    }

    // STEP 2: Create new user profile (first time signup - email or OAuth)
    const authMethod = isOAuth ? 'oauth' : 'email';
    const linkedAccounts = [isOAuth ? `oauth:${signupMethod}` : 'cognito:email'];

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

        // OAuth account linking fields
        oauth_provider: isOAuth ? signupMethod : null,
        oauth_sub: isOAuth ? userId : null,
        auth_method: authMethod,
        linked_accounts: linkedAccounts,

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

    console.log(`Created ${signupMethod} user profile for ${email} (${userId}) with auth_method=${authMethod}`);
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
              auth_method = if_not_exists(auth_method, :auth),
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
            ':auth': isOAuth ? 'oauth' : 'email',
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
