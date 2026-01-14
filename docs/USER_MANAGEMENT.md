# User Management System

This document describes how user accounts are managed in StudyMate, including the data flow between Cognito and DynamoDB.

## Architecture Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Cognito       │     │   DynamoDB      │     │   Stripe        │
│   User Pool     │────▶│   agentsform-   │◀────│   Payments      │
│   + Google IdP  │     │   main          │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │
        │ Lambda Triggers:      │
        │ - PreSignUp           │
        │ - PostConfirmation    │
        │ - PostAuthentication  │
        ▼                       │
┌─────────────────┐             │
│ agentsform-     │─────────────┘
│ post-           │  Creates/Updates USER#/PROFILE
│ confirmation    │  Links OAuth accounts
└─────────────────┘
```

## Data Storage

### Cognito User Pool
- **Pool ID**: `ap-southeast-2_KQjSkcKvP`
- **Client ID**: `6sehatih95apslqtikic4sf39o`
- **Region**: `ap-southeast-2` (Sydney)

Cognito stores:
- User authentication (email/password OR Google OAuth)
- Email verification status
- Account creation timestamp
- User ID (UUID format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
- Linked identities (e.g., Google OAuth)
- Custom attributes: `custom:tier`, `custom:stripeCustomerId`

### DynamoDB Table (`agentsform-main`)

#### User Profile Record
```
PK: USER#{userId}
SK: PROFILE
email: string
tier: 'free' | 'explorer' | 'scholar' | 'achiever'
stripeCustomerId?: string
stripeSubscriptionId?: string
createdAt: ISO timestamp
updatedAt: ISO timestamp
aiCalls_{YYYY-MM-DD}: number (daily AI call count)

# OAuth fields (added 2026-01-14)
auth_method: 'email' | 'oauth' | 'both'
oauth_provider: 'google' | 'facebook' | 'apple' | null
oauth_sub: string | null (Cognito sub for OAuth users)
linked_accounts: string[] (e.g., ['cognito:email', 'oauth:google'])
signupMethod: 'email' | 'google' | 'facebook' | 'apple'
identityProvider: string | null
firstLoginDate: ISO timestamp | null
lastLoginDate: ISO timestamp
```

#### Child Record (under parent)
```
PK: USER#{parentId}
SK: CHILD#{childId}
childId: string
name: string
username: string
yearLevel: number
pin: string
avatar: string
createdAt: ISO timestamp
updatedAt: ISO timestamp
```

#### Child Profile (for direct lookups)
```
PK: CHILD#{childId}
SK: PROFILE
childId: string
parentId: string
name: string
username: string
yearLevel: number
avatar: string
createdAt: ISO timestamp
```

## User Lifecycle

### 1. Sign Up (Email/Password)
1. User registers via `/get-started` page
2. Cognito creates account (UNCONFIRMED status)
3. Verification code sent to email
4. User enters verification code via `/verify` page
5. Cognito confirms account (CONFIRMED status)
6. **PostConfirmation Lambda Trigger** fires
7. Lambda creates DynamoDB profile with `auth_method: 'email'`

### 2. Sign Up (Google OAuth - New User)
1. User clicks "Continue with Google" on `/get-started` or `/login`
2. Redirected to Google authentication via Cognito hosted UI
3. **PreSignUp Lambda Trigger** fires:
   - Checks if email exists in Cognito (ListUsers)
   - No existing user → auto-confirm, auto-verify
4. Google redirects to `/callback?code={auth_code}`
5. Frontend exchanges code for tokens at Cognito token endpoint
6. **PostAuthentication Lambda Trigger** fires:
   - Creates DynamoDB profile with `auth_method: 'oauth'`, `signupMethod: 'google'`
7. Frontend checks `/payments/status` to determine if new or returning user
8. New user → `/choose-tier`, Returning user → `/dashboard`

### 3. Account Linking (Existing Email User Signs in with Google)
1. User has existing email/password account
2. User clicks "Continue with Google" on `/login` (same email)
3. **PreSignUp Lambda Trigger** fires:
   - Finds existing native user via ListUsers API
   - Calls `AdminLinkProviderForUser` to link Google identity to existing user
   - Updates DynamoDB: `auth_method: 'both'`, `linked_accounts: ['cognito:email', 'oauth:google']`
   - Throws `USER_LINKED_TO_EXISTING_ACCOUNT` error to prevent duplicate
4. Callback page catches error, sets `sessionStorage.accountLinked` flag
5. Callback page immediately retries OAuth (succeeds with linked identity)
6. User lands on `/dashboard` with existing tier/data preserved
7. Dashboard shows toast: "Google account linked - You can now sign in with Google or your password"

### 4. Email Verification (Email/Password Only)
1. User enters verification code via `/verify` page
2. Cognito confirms account (CONFIRMED status)
3. **PostConfirmation Lambda Trigger** fires
4. Lambda creates DynamoDB profile:
   ```typescript
   {
     PK: `USER#${userId}`,
     SK: 'PROFILE',
     email: userEmail,
     tier: 'free',
     status: 'verified',
     signupMethod: 'email',
     auth_method: 'email',
     linked_accounts: ['cognito:email'],
     createdAt: now,
     updatedAt: now
   }
   ```

**Note**: OAuth users skip email verification - they're auto-verified by Google.

### 5. Adding Children
1. Parent adds child via `/children/add`
2. Child record created under `USER#{parentId}`
3. Child profile created for username lookup
4. **Backup**: If no user profile exists, one is created (handles legacy users)

### 6. Subscription Upgrade
1. Parent selects plan on `/pricing`
2. Stripe Checkout session created
3. After payment, webhook fires
4. `updateUserTier()` updates existing profile:
   - Sets `tier` to 'scholar' or 'achiever'
   - Adds `stripeCustomerId` and `stripeSubscriptionId`
   - Preserves `email` and `createdAt`

### 7. Subscription Cancellation
1. User cancels via Stripe portal
2. Webhook fires with `customer.subscription.deleted`
3. `updateUserTier()` sets `tier` back to 'free'
4. `stripeCustomerId` preserved for re-subscription

## Lambda Functions

### `agentsform-post-confirmation` (PreSignUp Trigger)
- **Trigger**: `PreSignUp_ExternalProvider` (OAuth signups)
- **Source**: `packages/api/src/handlers/cognito-trigger.ts`
- **Purpose**: Link OAuth identity to existing email/password accounts
- **Key Operations**:
  - `ListUsers`: Find existing user by email
  - `AdminLinkProviderForUser`: Link OAuth identity to existing Cognito user
  - Throws `USER_LINKED_TO_EXISTING_ACCOUNT` to signal linking occurred
  - Auto-confirms and auto-verifies new OAuth users
- **IAM Permissions Required**:
  - `cognito-idp:ListUsers`
  - `cognito-idp:AdminLinkProviderForUser`

### `agentsform-post-confirmation` (PostConfirmation Trigger)
- **Trigger**: `PostConfirmation_ConfirmSignUp` (email/password signups)
- **Source**: `packages/api/src/handlers/cognito-trigger.ts`
- **Purpose**: Create DynamoDB profile on email verification
- **Duplicate Prevention**: Uses `ConditionExpression: 'attribute_not_exists(PK)'`
- **Sets**: `signupMethod: 'email'`, `auth_method: 'email'`, `status: 'verified'`

### `agentsform-post-confirmation` (PostAuthentication Trigger)
- **Trigger**: `PostAuthentication_Authentication` (all logins)
- **Source**: `packages/api/src/handlers/cognito-trigger.ts` (same Lambda, different trigger)
- **Purpose**:
  - For new OAuth users: Create DynamoDB profile with `signupMethod: 'google'`, `auth_method: 'oauth'`
  - For returning users: Update `lastLoginDate`
  - For linked accounts: Sync tier from DynamoDB to Cognito `custom:tier`
- **Analytics**: Tracks `identityProvider`, `firstLoginDate`, `oauthSignupDate`
- **IAM Permissions Required**:
  - `cognito-idp:AdminUpdateUserAttributes`

### `agentsform-childhandler`
- **Source**: `packages/api/src/handlers/child.ts`
- **Backup Profile Creation**: Creates user profile if missing when adding child

### `studymate-paymenthandler`
- **Source**: `packages/api/src/handlers/payment.ts`
- **Graceful Updates**: Uses `if_not_exists(createdAt, :now)` to preserve existing data

## Tier Limits

| Tier | Max Children | Daily Questions | Solutions |
|------|-------------|-----------------|-----------|
| explorer (free) | 1 | 5 | Locked |
| scholar | 1 | unlimited | Unlimited worked solutions |
| achiever | 6 | unlimited | Unlimited + detailed reports |

## Admin Dashboard

Access at: `https://grademychild.com.au/admin`

### Admin API Endpoints
- `GET /admin/stats` - Overview statistics (fetches from Cognito + DynamoDB)
- `GET /admin/users` - All users with emails (from Cognito, merged with DynamoDB profiles)
- `GET /admin/children` - All children
- `GET /admin/ai-logs` - AI usage logs
- `GET /admin/payments` - Stripe payment data

### Authentication
Uses `X-Admin-Key` header (separate from Cognito auth)

## Scripts

### Backfill User Profiles
```bash
cd packages/api
npx ts-node src/scripts/backfill-user-profiles.ts
```
Creates DynamoDB profiles for Cognito users who don't have one.

### Seed Curriculum
```bash
cd packages/api
npx ts-node src/scripts/seed-curriculum.ts
```

## Backup & Recovery

### Backup Locations
- `docs/backups/cognito-users-{date}.json` - Cognito user list
- `docs/backups/dynamodb-user-profiles-{date}.json` - DynamoDB user profiles
- `docs/backups/dynamodb-child-profiles-{date}.json` - DynamoDB child profiles

### Manual Backup Commands
```bash
# Cognito users
aws cognito-idp list-users --user-pool-id ap-southeast-2_KQjSkcKvP --region ap-southeast-2 > backup.json

# DynamoDB user profiles
aws dynamodb scan --table-name agentsform-main \
  --filter-expression "begins_with(PK, :pk) AND SK = :sk" \
  --expression-attribute-values '{":pk":{"S":"USER#"},":sk":{"S":"PROFILE"}}' \
  --region ap-southeast-2 > profiles.json

# Full table (use with caution - large)
aws dynamodb scan --table-name agentsform-main --region ap-southeast-2 > full-table.json
```

### Recovery from Cognito
If DynamoDB profiles are lost, run the backfill script:
```bash
npx ts-node src/scripts/backfill-user-profiles.ts
```

This recreates profiles from Cognito user data.

## Troubleshooting

### User exists in Cognito but not in DynamoDB
1. Check if email was verified (Post-Confirmation trigger only fires after verification)
2. Run backfill script to create missing profile

### Duplicate profiles
Not possible - all profile creation uses conditional puts:
- `ConditionExpression: 'attribute_not_exists(PK)'`

### User can't log in
1. Check Cognito console for account status
2. Verify email confirmation status
3. Check for password policy violations

### OAuth user not linking to existing account
1. Verify email matches exactly (case-sensitive)
2. Check CloudWatch logs for `agentsform-post-confirmation` Lambda
3. Verify IAM permissions: `cognito-idp:ListUsers`, `cognito-idp:AdminLinkProviderForUser`
4. Test reset: Use `admin-disable-provider-for-user` to unlink and retry

### OAuth linked account notification not showing
1. Check `sessionStorage.accountLinked` in browser DevTools
2. Verify callback page is setting the flag before retry
3. Ensure dashboard is checking and clearing the flag on mount

### Subscription not updating
1. Check Stripe webhook logs in Stripe Dashboard
2. Verify `STRIPE_WEBHOOK_SECRET` in Lambda environment
3. Check CloudWatch logs for `studymate-paymenthandler`

### Testing OAuth Account Linking
```bash
# Reset test user for re-testing (removes Google identity from Cognito)
aws cognito-idp admin-disable-provider-for-user \
  --user-pool-id ap-southeast-2_KQjSkcKvP \
  --user ProviderName=Google,ProviderAttributeName=Cognito_Subject,ProviderAttributeValue=<google-user-id> \
  --region ap-southeast-2

# Update DynamoDB to remove OAuth fields
aws dynamodb update-item \
  --table-name agentsform-main \
  --key '{"PK":{"S":"USER#<cognito-sub>"},"SK":{"S":"PROFILE"}}' \
  --update-expression "REMOVE oauth_provider, oauth_sub SET auth_method = :auth, linked_accounts = :accounts" \
  --expression-attribute-values '{":auth":{"S":"email"},":accounts":{"L":[{"S":"cognito:email"}]}}' \
  --region ap-southeast-2

# Check user identities in Cognito
aws cognito-idp admin-get-user \
  --user-pool-id ap-southeast-2_KQjSkcKvP \
  --username <cognito-username> \
  --region ap-southeast-2
```

## Initial Users (Backup Reference)

As of 2026-01-03, these are the registered users:

| Email | User ID | Tier | Children |
|-------|---------|------|----------|
| tmudavanhu@gmail.com | 198e94a8-4021-7046-dc39-0f89f839d1ac | scholar | Lee, Dee, Josh M |
| kapilsaluja.ne@gmail.com | 39be34d8-d0f1-701e-c1be-a5c07cd33a75 | free | Kavya |
| csibanda@yahoo.com | d90ee428-8031-70ae-c577-95ae02b4df11 | free | Eugene |
| katharina.attana@googlemail.com | b95ec4d8-c0a1-7070-6dab-cf78d8a9e7ba | free | Bayley |
| bug@gmail.com | 295ed418-10a1-70f6-8b5d-b39bd8da4e1e | free | (unverified account) |

## Related Files

- `packages/api/src/handlers/cognito-trigger.ts` - PreSignUp, PostConfirmation, PostAuthentication Lambda
- `packages/api/src/handlers/auth-check.ts` - Check user auth method by email
- `packages/api/src/handlers/user.ts` - Update user tier (OAuth users)
- `packages/api/src/handlers/child.ts` - Child management with backup profile creation
- `packages/api/src/handlers/payment.ts` - Subscription management
- `packages/api/src/handlers/admin.ts` - Admin dashboard API
- `packages/api/src/scripts/backfill-user-profiles.ts` - Profile backfill script
- `infrastructure/cdk/src/stacks/auth-stack.ts` - Cognito configuration, Google IdP, Lambda triggers
- `infrastructure/cdk/src/stacks/api-stack.ts` - API Lambda configuration
- `apps/web/src/app/(auth)/callback/page.tsx` - OAuth callback handler
- `apps/web/src/app/(parent)/dashboard/page.tsx` - Account linked toast notification
