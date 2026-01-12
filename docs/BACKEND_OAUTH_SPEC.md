# Backend OAuth Integration Specification

**Date**: 2026-01-11
**Status**: Implementation Required
**Priority**: High - Blocking OAuth Launch

---

## Overview

This document specifies the backend changes required to support Google OAuth authentication and unify users who may sign up via both email/password and OAuth methods.

---

## Table of Contents

1. [Database Schema Changes](#1-database-schema-changes)
2. [API Endpoints](#2-api-endpoints)
3. [Cognito Lambda Triggers](#3-cognito-lambda-triggers)
4. [User Unification Logic](#4-user-unification-logic)
5. [Stripe Integration](#5-stripe-integration)
6. [Testing Checklist](#6-testing-checklist)

---

## 1. Database Schema Changes

### Users Table (DynamoDB)

Add the following attributes to the `Users` table:

| Attribute | Type | Description | Required |
|-----------|------|-------------|----------|
| `oauth_provider` | String | OAuth provider: `'google'`, `'cognito'`, or `null` | No |
| `oauth_sub` | String | Cognito sub for OAuth users | No |
| `auth_method` | String | Primary auth method: `'email'`, `'oauth'`, or `'both'` | Yes |
| `linked_accounts` | List | Array of linked authentication methods | No |

**Example User Record (OAuth User):**
```json
{
  "id": "google_a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "email": "parent@example.com",
  "name": "Jane Doe",
  "tier": "free",
  "oauth_provider": "google",
  "oauth_sub": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "auth_method": "oauth",
  "linked_accounts": ["oauth:google"],
  "createdAt": "2026-01-11T00:00:00.000Z"
}
```

**Example User Record (Email User Linked to OAuth):**
```json
{
  "id": "cognito_12345678-abcd-1234-efgh-567890abcdef",
  "email": "parent@example.com",
  "name": "Jane Doe",
  "tier": "scholar",
  "oauth_provider": null,
  "oauth_sub": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "auth_method": "both",
  "linked_accounts": ["cognito:email", "oauth:google"],
  "createdAt": "2026-01-10T00:00:00.000Z"
}
```

### Migration Strategy

- Existing users: Set `auth_method='email'`, `oauth_provider=null`, `linked_accounts=['cognito:email']`
- Run migration script before OAuth launch

---

## 2. API Endpoints

### 2.1 PUT /users/tier

**Purpose**: Update user's subscription tier and sync with Cognito

**Authentication**: Required (Bearer token)

**Request Body:**
```json
{
  "tier": "free" | "explorer" | "scholar" | "achiever"
}
```

**Response (200):**
```json
{
  "success": true,
  "tier": "free"
}
```

**Response (400):**
```json
{
  "error": "Invalid tier specified"
}
```

**Implementation:**

```python
import boto3
import json

dynamodb = boto3.resource('dynamodb')
cognito = boto3.client('cognito-idp')
users_table = dynamodb.Table('Users')

def update_user_tier(event, context):
    # Extract user ID from JWT token
    user_id = event['requestContext']['authorizer']['claims']['sub']

    # Parse request body
    body = json.loads(event['body'])
    tier = body.get('tier')

    # Validate tier
    valid_tiers = ['free', 'explorer', 'scholar', 'achiever']
    if tier not in valid_tiers:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid tier specified'})
        }

    try:
        # Update DynamoDB
        users_table.update_item(
            Key={'id': user_id},
            UpdateExpression='SET tier = :tier, updatedAt = :now',
            ExpressionAttributeValues={
                ':tier': tier,
                ':now': datetime.utcnow().isoformat()
            }
        )

        # Update Cognito custom:tier attribute
        cognito.admin_update_user_attributes(
            UserPoolId=os.environ['USER_POOL_ID'],
            Username=user_id,
            UserAttributes=[
                {'Name': 'custom:tier', 'Value': tier}
            ]
        )

        return {
            'statusCode': 200,
            'body': json.dumps({'success': True, 'tier': tier})
        }
    except Exception as e:
        print(f"Error updating tier: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Failed to update tier'})
        }
```

---

## 3. Cognito Lambda Triggers

### 3.1 Post Authentication Trigger

**Purpose**:
- Ensure user exists in DynamoDB after authentication
- Unify OAuth and email/password users by email
- Sync tier from DynamoDB to Cognito

**Trigger**: Post Authentication (after successful login)

**Implementation:**

```python
import boto3
import json
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
cognito = boto3.client('cognito-idp')
users_table = dynamodb.Table('Users')

def post_authentication_handler(event, context):
    """
    Cognito Post Authentication Lambda Trigger
    Handles user unification and data sync
    """

    # Extract user attributes
    user_attributes = event['request']['userAttributes']
    user_id = user_attributes['sub']
    email = user_attributes['email']
    name = user_attributes.get('name', email.split('@')[0])
    cognito_tier = user_attributes.get('custom:tier', 'free')

    # Determine if this is OAuth or email/password login
    identity_provider = event['request']['userAttributes'].get('identities')
    is_oauth = identity_provider is not None

    try:
        # Check if user with this email already exists
        response = users_table.query(
            IndexName='EmailIndex',  # Assumes GSI on email attribute
            KeyConditionExpression='email = :email',
            ExpressionAttributeValues={':email': email}
        )

        existing_users = response.get('Items', [])

        if existing_users:
            # User exists - link accounts
            existing_user = existing_users[0]
            existing_user_id = existing_user['id']

            # If this is OAuth login and user previously used email/password
            if is_oauth and existing_user.get('auth_method') == 'email':
                # Link OAuth to existing account
                users_table.update_item(
                    Key={'id': existing_user_id},
                    UpdateExpression='SET oauth_sub = :oauth_sub, oauth_provider = :provider, auth_method = :auth, linked_accounts = list_append(linked_accounts, :new_account)',
                    ExpressionAttributeValues={
                        ':oauth_sub': user_id,
                        ':provider': 'google',
                        ':auth': 'both',
                        ':new_account': ['oauth:google']
                    }
                )

                # Update Cognito custom:tier to match existing user's tier
                cognito.admin_update_user_attributes(
                    UserPoolId=event['userPoolId'],
                    Username=user_id,
                    UserAttributes=[
                        {'Name': 'custom:tier', 'Value': existing_user['tier']}
                    ]
                )

                print(f"Linked OAuth account {user_id} to existing user {existing_user_id}")

            # Sync tier from DynamoDB to Cognito if out of sync
            if existing_user['tier'] != cognito_tier:
                cognito.admin_update_user_attributes(
                    UserPoolId=event['userPoolId'],
                    Username=user_id,
                    UserAttributes=[
                        {'Name': 'custom:tier', 'Value': existing_user['tier']}
                    ]
                )
                print(f"Synced tier {existing_user['tier']} to Cognito for user {user_id}")
        else:
            # New user - create in DynamoDB
            auth_method = 'oauth' if is_oauth else 'email'
            linked_accounts = [f'{auth_method}:{"google" if is_oauth else "cognito"}']

            users_table.put_item(
                Item={
                    'id': user_id,
                    'email': email,
                    'name': name,
                    'tier': 'free',  # Default tier for new users
                    'oauth_provider': 'google' if is_oauth else None,
                    'oauth_sub': user_id if is_oauth else None,
                    'auth_method': auth_method,
                    'linked_accounts': linked_accounts,
                    'createdAt': datetime.utcnow().isoformat(),
                    'updatedAt': datetime.utcnow().isoformat()
                }
            )
            print(f"Created new user {user_id} via {auth_method}")

    except Exception as e:
        print(f"Error in post authentication: {str(e)}")
        # Don't block authentication on errors, just log

    return event
```

### 3.2 Pre Token Generation Trigger (Optional)

**Purpose**: Add custom claims to ID token (e.g., tier, subscription status)

**Implementation:**

```python
def pre_token_generation_handler(event, context):
    """
    Add custom claims to JWT token
    """
    user_id = event['request']['userAttributes']['sub']

    try:
        # Fetch user data from DynamoDB
        response = users_table.get_item(Key={'id': user_id})
        user = response.get('Item')

        if user:
            # Add custom claims
            event['response']['claimsOverrideDetails'] = {
                'claimsToAddOrOverride': {
                    'tier': user['tier'],
                    'auth_method': user.get('auth_method', 'email')
                }
            }
    except Exception as e:
        print(f"Error adding custom claims: {str(e)}")

    return event
```

---

## 4. User Unification Logic

### Key Principles

1. **Email is the primary identifier** - Users are unified by email address
2. **First account wins** - Existing user data (tier, children, progress) is preserved
3. **OAuth supplements email/password** - Users can switch between auth methods seamlessly
4. **Tier is synchronized** - Cognito `custom:tier` always reflects DynamoDB tier

### User Scenarios

#### Scenario 1: New OAuth User
1. User signs up with Google OAuth
2. Post Auth trigger creates new user in DynamoDB with `tier='free'`
3. User redirected to `/choose-tier`
4. User selects tier → `PUT /users/tier` updates DynamoDB and Cognito
5. User redirected to dashboard

#### Scenario 2: Existing Email User, Now Signing in with OAuth
1. User previously signed up with email/password (tier='scholar')
2. User clicks "Sign in with Google" on `/login`
3. Post Auth trigger finds existing user by email
4. Trigger links OAuth account: `oauth_sub`, `auth_method='both'`, `linked_accounts=['cognito:email', 'oauth:google']`
5. Trigger updates Cognito `custom:tier='scholar'` to match existing user
6. User redirected to dashboard (no tier selection, already has paid tier)

#### Scenario 3: OAuth User, Then Signs Up with Email/Password
1. User signs up with Google OAuth (tier='free')
2. Later, user forgets and tries to sign up with email/password using same email
3. Cognito prevents duplicate email (email uniqueness constraint)
4. User must use "Sign in with Google" or reset password if they want email login

---

## 5. Stripe Integration

### Webhook: `checkout.session.completed`

Update webhook handler to support OAuth users:

```python
def handle_checkout_completed(event):
    session = event['data']['object']
    customer_email = session['customer_email']

    # Find user by email (works for both OAuth and email users)
    response = users_table.query(
        IndexName='EmailIndex',
        KeyConditionExpression='email = :email',
        ExpressionAttributeValues={':email': customer_email}
    )

    users = response.get('Items', [])
    if not users:
        print(f"No user found for email {customer_email}")
        return

    user = users[0]
    user_id = user['id']

    # Determine tier from Stripe price
    price_id = session['line_items']['data'][0]['price']['id']
    tier = 'scholar' if price_id == SCHOLAR_PRICE_ID else 'achiever'

    # Update DynamoDB
    users_table.update_item(
        Key={'id': user_id},
        UpdateExpression='SET tier = :tier, stripeCustomerId = :customer_id, stripeSubscriptionId = :sub_id',
        ExpressionAttributeValues={
            ':tier': tier,
            ':customer_id': session['customer'],
            ':sub_id': session['subscription']
        }
    )

    # Update Cognito custom:tier
    cognito.admin_update_user_attributes(
        UserPoolId=os.environ['USER_POOL_ID'],
        Username=user_id,
        UserAttributes=[
            {'Name': 'custom:tier', 'Value': tier}
        ]
    )

    print(f"Updated user {user_id} to tier {tier}")
```

---

## 6. Testing Checklist

### Pre-Deployment Tests

- [ ] **Database Migration**: Run migration script on staging database
- [ ] **Lambda Deployment**: Deploy Post Auth trigger to staging Cognito
- [ ] **API Gateway**: Deploy `PUT /users/tier` endpoint to staging
- [ ] **Environment Variables**: Verify all Lambda functions have correct env vars

### Functional Tests

#### OAuth Flow
- [ ] New user signs up with Google → Creates user in DynamoDB with tier='free'
- [ ] New user selects free tier → Updates DynamoDB and Cognito custom:tier
- [ ] New user selects paid tier → Redirects to Stripe, completes payment, tier updated
- [ ] Returning OAuth user (free) → Redirected to tier selection
- [ ] Returning OAuth user (paid) → Redirected to dashboard

#### User Unification
- [ ] Existing email user signs in with Google → Accounts linked, tier preserved
- [ ] OAuth user tier updated → Cognito custom:tier synced on next login
- [ ] User switches between OAuth and email/password → Seamless login with same data

#### Edge Cases
- [ ] User cancels OAuth → Friendly error message, can retry
- [ ] Stripe webhook updates tier → Both DynamoDB and Cognito updated
- [ ] User with expired Cognito token → Refresh token works for OAuth users
- [ ] User clears browser data → Re-login retrieves tier from Cognito

### Performance Tests
- [ ] Post Auth trigger latency < 500ms
- [ ] `PUT /users/tier` API latency < 300ms
- [ ] DynamoDB query by email (GSI) < 100ms

---

## 7. Deployment Steps

### Step 1: Database Migration
```bash
# Run migration script to add new attributes
python scripts/migrate_users_oauth.py --environment staging
```

### Step 2: Deploy Lambda Functions
```bash
# Deploy Post Auth trigger
cd lambdas/post-authentication
sam build && sam deploy --config-env staging
```

### Step 3: Deploy API Endpoint
```bash
# Deploy PUT /users/tier endpoint
cd lambdas/update-user-tier
sam build && sam deploy --config-env staging
```

### Step 4: Update Cognito Triggers
```bash
# Attach Post Auth trigger to Cognito User Pool
aws cognito-idp update-user-pool \
  --user-pool-id ap-southeast-2_KQjSkcKvP \
  --lambda-config PostAuthentication=arn:aws:lambda:ap-southeast-2:308045886682:function:PostAuthTrigger
```

### Step 5: Frontend Deployment
```bash
# Deploy frontend with OAuth changes
cd apps/web
npm run build
# Deploy to staging environment
```

### Step 6: Smoke Tests
- Test new user OAuth signup
- Test existing user OAuth login
- Test tier selection and update
- Verify Stripe checkout flow

### Step 7: Production Deployment
- Repeat steps 1-6 for production environment
- Monitor CloudWatch logs for errors
- Test with real Google OAuth (production client ID)

---

## 8. Rollback Plan

If critical issues occur in production:

1. **Frontend Rollback**: Revert frontend to previous version without OAuth buttons
2. **Lambda Rollback**: Revert Post Auth trigger to previous version
3. **API Rollback**: Remove `PUT /users/tier` endpoint from API Gateway
4. **Database**: No rollback needed (new attributes don't break existing functionality)

---

## 9. Monitoring

### CloudWatch Metrics
- Lambda invocations: `PostAuthTrigger`, `UpdateUserTier`
- Lambda errors: Track error rate
- API Gateway: `PUT /users/tier` latency and error rate
- DynamoDB: `Users` table read/write capacity

### Alarms
- Post Auth trigger error rate > 1%
- `PUT /users/tier` API latency > 1s
- DynamoDB throttling on EmailIndex GSI

---

## 10. Future Enhancements

1. **Additional OAuth Providers**: Support Facebook, Apple Sign In
2. **Account Unlinking**: Allow users to unlink OAuth accounts
3. **Migration Tool**: Bulk migrate email users to OAuth
4. **Analytics**: Track OAuth vs email signup conversion rates

---

**Document Version**: 1.0
**Last Updated**: 2026-01-11
**Author**: Claude (Backend Specification)
**Reviewers**: Backend Team, DevOps Team
