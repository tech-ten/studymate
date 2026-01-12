# OAuth Backend Deployment Guide

**Status**: Ready for Deployment
**Date**: 2026-01-11
**Priority**: High - Required for OAuth Launch

---

## Overview

This guide provides step-by-step instructions for deploying the backend OAuth changes WITHOUT breaking existing email/password login.

---

## Changes Summary

### New Files Created:
1. **`packages/api/src/handlers/user.ts`** - New handler for `PUT /users/tier` endpoint
2. **`packages/api/scripts/migrate-oauth-fields.ts`** - Migration script for existing users

### Modified Files:
1. **`packages/api/src/handlers/cognito-trigger.ts`** - Added user unification logic
2. **`packages/api/src/handlers/admin.ts`** - Added OAuth authentication tracking to admin view

### Database Changes:
- **No schema changes required** - Uses existing `email-index` GSI
- **New fields added to user profiles**:
  - `auth_method`: 'email' | 'oauth' | 'both'
  - `oauth_provider`: 'google' | 'facebook' | 'apple' | null
  - `oauth_sub`: Cognito sub for OAuth users
  - `linked_accounts`: Array of authentication methods

---

## Pre-Deployment Checklist

- [ ] Backend code reviewed and approved
- [ ] Migration script tested on development/staging
- [ ] Cognito User Pool has PostAuthentication trigger configured
- [ ] API Gateway routes configured for new `/users/tier` endpoint
- [ ] CloudWatch logs monitoring set up
- [ ] Rollback plan understood and ready

---

## Deployment Steps

### Step 1: Run Migration Script (CRITICAL)

**Purpose**: Add OAuth fields to existing 19 users before deploying new Lambda code

```bash
# Navigate to API package
cd packages/api

# Set environment variables
export TABLE_NAME=agentsform-main
export AWS_REGION=ap-southeast-2

# DRY RUN first - verify what will be changed
npx ts-node scripts/migrate-oauth-fields.ts --dry-run

# Review output carefully - should show 19 users to migrate

# Execute migration
npx ts-node scripts/migrate-oauth-fields.ts --execute
```

**Expected Output**:
```
OAuth Fields Migration - EXECUTING
Table: agentsform-main
Found 19 user profiles

→ Migrating user1@example.com (USER#xxx)...
  ✓ Migrated successfully
...

Migration Summary:
  Total users: 19
  Migrated: 19
  Skipped: 0
  Mode: EXECUTED
```

**Verification**:
```bash
# Check a random user in DynamoDB
aws dynamodb get-item \
  --table-name agentsform-main \
  --key '{"PK":{"S":"USER#<user-id>"},"SK":{"S":"PROFILE"}}' \
  --region ap-southeast-2 | grep auth_method

# Should show: "auth_method": {"S": "email"}
```

---

### Step 2: Deploy Lambda Functions

```bash
# Navigate to infrastructure
cd infrastructure/cdk

# Build and deploy (this will deploy all Lambda functions)
npm run build
cdk deploy --all

# OR deploy specific stacks
cdk deploy ApiStack
```

**What gets deployed**:
- Updated `cognito-trigger` Lambda (PostAuthentication handler)
- New `user` Lambda handler (PUT /users/tier)
- Updated `admin` Lambda handler (OAuth fields in response)

---

### Step 3: Configure API Gateway Routes

Add new route for PUT /users/tier endpoint:

```bash
# This should be handled automatically by CDK deployment
# Verify route exists:
aws apigatewayv2 get-routes \
  --api-id <your-api-id> \
  --region ap-southeast-2 \
  | grep "/users/tier"
```

**Manual configuration (if needed)**:
1. Open API Gateway console
2. Select your HTTP API
3. Add route: `PUT /users/tier`
4. Integration: Lambda function `user-handler`
5. Authorization: JWT authorizer (existing)

---

### Step 4: Update Cognito PostAuthentication Trigger

```bash
# Attach PostAuthentication trigger to Cognito User Pool
aws cognito-idp update-user-pool \
  --user-pool-id ap-southeast-2_KQjSkcKvP \
  --region ap-southeast-2 \
  --lambda-config PostAuthentication=arn:aws:lambda:ap-southeast-2:308045886682:function:cognito-trigger
```

**Verify**:
```bash
aws cognito-idp describe-user-pool \
  --user-pool-id ap-southeast-2_KQjSkcKvP \
  --region ap-southeast-2 \
  | grep PostAuthentication
```

---

### Step 5: Smoke Tests

#### Test 1: Existing Email/Password Login (CRITICAL - Must Not Break)

```bash
# Test login with existing user
# Frontend: https://tutor.agentsform.ai/login
# Expected: Login works exactly as before, no errors
```

**Verification**:
- User can log in with email/password
- Dashboard loads successfully
- No errors in CloudWatch logs for cognito-trigger

#### Test 2: New OAuth Signup

```bash
# Frontend: https://tutor.agentsform.ai/get-started
# Click "Continue with Google"
# Complete OAuth flow
```

**Expected Behavior**:
1. OAuth redirect to Google
2. User authenticates with Google
3. Redirect to `/callback` with authorization code
4. Token exchange succeeds
5. User redirected to `/choose-tier`
6. User selects tier (e.g., free)
7. PUT /users/tier API call succeeds
8. User redirected to dashboard

**Verification**:
```bash
# Check CloudWatch logs for cognito-trigger
aws logs tail /aws/lambda/cognito-trigger --follow

# Should see: "Created google user profile for <email> with auth_method=oauth"

# Check DynamoDB user record
aws dynamodb get-item \
  --table-name agentsform-main \
  --key '{"PK":{"S":"USER#<oauth-user-id>"},"SK":{"S":"PROFILE"}}' \
  --region ap-southeast-2
```

#### Test 3: User Unification (Email + OAuth)

```bash
# 1. Create test user with email/password signup
# 2. Sign out
# 3. Sign in with Google OAuth using SAME email
```

**Expected Behavior**:
1. OAuth authenticates successfully
2. Cognito PostAuthentication trigger finds existing user by email
3. Existing user record updated with OAuth info:
   - `auth_method='both'`
   - `oauth_provider='google'`
   - `linked_accounts=['cognito:email', 'oauth:google']`
4. User tier preserved from original account
5. User redirected to dashboard (not tier selection)

**Verification**:
```bash
# Check CloudWatch logs
aws logs tail /aws/lambda/cognito-trigger --follow

# Should see: "Linking OAuth account <oauth-sub> to existing user <email-sub>"
# Should see: "Synced tier <tier> to Cognito for OAuth user <oauth-sub>"

# Check DynamoDB - should have both auth methods
aws dynamodb get-item \
  --table-name agentsform-main \
  --key '{"PK":{"S":"USER#<original-email-user-id>"},"SK":{"S":"PROFILE"}}' \
  --region ap-southeast-2 \
  | grep -E "auth_method|oauth_provider|linked_accounts"
```

#### Test 4: Admin View

```bash
# Access admin endpoint with API key
curl -H "X-Admin-Key: <your-admin-key>" \
  https://<your-api-domain>/admin/users
```

**Expected Response**:
```json
{
  "users": [
    {
      "id": "user-id",
      "email": "user@example.com",
      "tier": "free",
      "authMethod": "both",
      "oauthProvider": "google",
      "linkedAccounts": ["cognito:email", "oauth:google"],
      "signupMethod": "email"
    }
  ]
}
```

---

### Step 6: Monitor CloudWatch Logs

```bash
# Monitor cognito-trigger logs
aws logs tail /aws/lambda/cognito-trigger --follow

# Monitor user handler logs
aws logs tail /aws/lambda/user-handler --follow

# Monitor API Gateway logs
aws logs tail /aws/apigateway/<api-id>/default --follow
```

**Watch for**:
- ✓ Successful OAuth user creation
- ✓ Successful account linking
- ✓ Tier sync operations
- ✗ Any errors or exceptions

---

## Rollback Plan

If critical issues occur:

### Option 1: Revert Lambda Code Only (Safest)

```bash
# Revert to previous Lambda version
cd infrastructure/cdk
git checkout HEAD~1 -- src/lambda/cognito-trigger.ts
git checkout HEAD~1 -- src/lambda/admin.ts
rm -rf src/lambda/user.ts

# Redeploy
npm run build
cdk deploy ApiStack
```

**Impact**:
- Email/password login: ✓ Works (never broken)
- OAuth login: ✗ Breaks (users see tier selection every time, no unification)
- Existing OAuth users: ✓ Still have data in DynamoDB
- Database: ✓ No data loss (OAuth fields remain)

### Option 2: Full Rollback (Last Resort)

```bash
# Remove PostAuthentication trigger
aws cognito-idp update-user-pool \
  --user-pool-id ap-southeast-2_KQjSkcKvP \
  --region ap-southeast-2 \
  --lambda-config PostConfirmation=arn:aws:lambda:ap-southeast-2:308045886682:function:cognito-trigger

# Revert all code changes
git revert <commit-hash>

# Redeploy
npm run build
cdk deploy --all
```

**Impact**:
- Email/password login: ✓ Works
- OAuth login: ✗ Completely broken (frontend still has OAuth buttons)
- Need to also revert frontend OAuth changes

---

## Post-Deployment Monitoring

### Metrics to Watch (First 24 Hours)

1. **Lambda Errors**
   - cognito-trigger error rate: Should be 0%
   - user-handler error rate: Should be 0%

2. **API Latency**
   - PUT /users/tier p99: Should be < 300ms

3. **Authentication Success Rate**
   - Email/password login: Should remain 100% (or existing baseline)
   - OAuth login: Should be > 95% (account for user cancellations)

4. **User Growth**
   - New OAuth users per day
   - Email vs OAuth signup ratio
   - Account linking events per day

### CloudWatch Alarms (Recommended)

```bash
# Create alarm for cognito-trigger errors
aws cloudwatch put-metric-alarm \
  --alarm-name oauth-trigger-errors \
  --comparison-operator GreaterThanThreshold \
  --evaluation-periods 1 \
  --metric-name Errors \
  --namespace AWS/Lambda \
  --period 60 \
  --statistic Sum \
  --threshold 5 \
  --alarm-description "OAuth trigger errors > 5 in 1 minute" \
  --dimensions Name=FunctionName,Value=cognito-trigger

# Create alarm for PUT /users/tier latency
aws cloudwatch put-metric-alarm \
  --alarm-name user-tier-update-latency \
  --comparison-operator GreaterThanThreshold \
  --evaluation-periods 2 \
  --metric-name Duration \
  --namespace AWS/Lambda \
  --period 60 \
  --statistic Average \
  --threshold 1000 \
  --alarm-description "User tier update latency > 1s" \
  --dimensions Name=FunctionName,Value=user-handler
```

---

## Testing Admin View Changes

The admin view now shows OAuth authentication details for all 19 existing users.

**Admin View Before**:
```json
{
  "id": "user-123",
  "email": "parent@example.com",
  "tier": "scholar",
  "hasSubscription": true
}
```

**Admin View After** (Unified User):
```json
{
  "id": "user-123",
  "email": "parent@example.com",
  "tier": "scholar",
  "hasSubscription": true,
  "authMethod": "both",
  "oauthProvider": "google",
  "linkedAccounts": ["cognito:email", "oauth:google"],
  "signupMethod": "email"
}
```

**Interpretation**:
- `authMethod='both'`: User can log in with email/password OR Google OAuth
- `oauthProvider='google'`: Google OAuth is linked
- `linkedAccounts`: Shows full auth history
- `signupMethod='email'`: Originally signed up with email/password

**Querying Admin View**:
```bash
# Get all users with OAuth linked
curl -H "X-Admin-Key: <key>" \
  https://<api>/admin/users \
  | jq '.users[] | select(.authMethod == "both")'

# Count OAuth vs email users
curl -H "X-Admin-Key: <key>" \
  https://<api>/admin/users \
  | jq '[.users[] | .authMethod] | group_by(.) | map({method: .[0], count: length})'
```

---

## Troubleshooting

### Issue: OAuth user not finding existing email account

**Symptom**: User signs up with email, then signs in with OAuth, but gets duplicate account

**Possible Causes**:
1. EmailIndex GSI not working
2. Email mismatch (OAuth email different from signup email)
3. Migration script not run

**Fix**:
```bash
# Check if email-index GSI exists
aws dynamodb describe-table \
  --table-name agentsform-main \
  --region ap-southeast-2 \
  | grep -A 5 email-index

# Query GSI manually
aws dynamodb query \
  --table-name agentsform-main \
  --index-name email-index \
  --key-condition-expression "email = :email" \
  --expression-attribute-values '{":email":{"S":"user@example.com"}}' \
  --region ap-southeast-2
```

### Issue: Tier not syncing between DynamoDB and Cognito

**Symptom**: User selects paid tier, but Cognito custom:tier remains 'free'

**Possible Causes**:
1. PUT /users/tier endpoint not deployed
2. Cognito AdminUpdateUserAttributes permission missing
3. Lambda execution role doesn't have cognito-idp:AdminUpdateUserAttributes

**Fix**:
```bash
# Check Lambda role permissions
aws iam get-role-policy \
  --role-name <lambda-role-name> \
  --policy-name <policy-name> \
  | grep AdminUpdateUserAttributes

# Add permission if missing
aws iam put-role-policy \
  --role-name <lambda-role-name> \
  --policy-name cognito-admin-access \
  --policy-document '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Action": "cognito-idp:AdminUpdateUserAttributes",
      "Resource": "arn:aws:cognito-idp:ap-southeast-2:*:userpool/*"
    }]
  }'
```

---

## Success Criteria

- [ ] All 19 existing email users can still log in (ZERO broken logins)
- [ ] New OAuth users can sign up and select tier
- [ ] Existing email users can link OAuth accounts
- [ ] Unified users see same data regardless of login method
- [ ] Admin view shows OAuth authentication details
- [ ] No Lambda errors in CloudWatch logs
- [ ] API latency within acceptable range (<300ms for PUT /users/tier)
- [ ] Stripe checkout works for OAuth users
- [ ] Tier changes sync between DynamoDB and Cognito

---

## Document Version

- **Version**: 1.0
- **Last Updated**: 2026-01-11
- **Author**: Claude (Backend Implementation)
- **Approved By**: _Pending approval_

---

## Next Steps

After successful deployment:

1. Monitor CloudWatch logs for 24-48 hours
2. Verify OAuth signup conversion rate vs email signup
3. Check for any user reports of login issues
4. Plan migration to additional OAuth providers (Facebook, Apple)
5. Implement account unlinking feature (future enhancement)
