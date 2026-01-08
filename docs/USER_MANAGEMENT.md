# User Management System

This document describes how user accounts are managed in StudyMate, including the data flow between Cognito and DynamoDB.

## Architecture Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Cognito       │     │   DynamoDB      │     │   Stripe        │
│   User Pool     │────▶│   agentsform-   │◀────│   Payments      │
│                 │     │   main          │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │
        │ Post-Confirmation     │
        │ Lambda Trigger        │
        ▼                       │
┌─────────────────┐             │
│ agentsform-     │─────────────┘
│ post-           │  Creates USER#/PROFILE
│ confirmation    │
└─────────────────┘
```

## Data Storage

### Cognito User Pool
- **Pool ID**: `ap-southeast-2_KQjSkcKvP`
- **Client ID**: `6sehatih95apslqtikic4sf39o`
- **Region**: `ap-southeast-2` (Sydney)

Cognito stores:
- User authentication (email/password)
- Email verification status
- Account creation timestamp
- User ID (UUID format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### DynamoDB Table (`agentsform-main`)

#### User Profile Record
```
PK: USER#{userId}
SK: PROFILE
email: string
tier: 'free' | 'scholar' | 'achiever'
stripeCustomerId?: string
stripeSubscriptionId?: string
createdAt: ISO timestamp
updatedAt: ISO timestamp
aiCalls_{YYYY-MM-DD}: number (daily AI call count)
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
1. User registers via `/register` page
2. Cognito creates account (UNCONFIRMED status)
3. Verification code sent to email

### 1 (Alternative). Sign Up (Google OAuth)
1. User clicks "Continue with Google" on `/register` or `/login`
2. Redirected to Google authentication
3. Google redirects to `/auth/callback?code={auth_code}`
4. Frontend exchanges code for tokens
5. **PostAuthentication Lambda Trigger** fires
6. User redirected to `/choose-tier` for tier selection (new users) or `/dashboard` (returning users)

### 2. Email Verification (Email/Password Only)
1. User enters verification code via `/verify` page
2. Cognito confirms account (CONFIRMED status)
3. **Post-Confirmation Lambda Trigger** fires
4. Lambda creates DynamoDB profile:
   ```typescript
   {
     PK: `USER#${userId}`,
     SK: 'PROFILE',
     email: userEmail,
     tier: 'free',
     status: 'verified',
     signupMethod: 'email',  // or 'google' for OAuth
     createdAt: now,
     updatedAt: now
   }
   ```

**Note**: OAuth users skip email verification - they're auto-verified by Google. PostAuthentication Lambda creates their profile instead.

### 3. Adding Children
1. Parent adds child via `/children/add`
2. Child record created under `USER#{parentId}`
3. Child profile created for username lookup
4. **Backup**: If no user profile exists, one is created (handles legacy users)

### 4. Subscription Upgrade
1. Parent selects plan on `/pricing`
2. Stripe Checkout session created
3. After payment, webhook fires
4. `updateUserTier()` updates existing profile:
   - Sets `tier` to 'scholar' or 'achiever'
   - Adds `stripeCustomerId` and `stripeSubscriptionId`
   - Preserves `email` and `createdAt`

### 5. Subscription Cancellation
1. User cancels via Stripe portal
2. Webhook fires with `customer.subscription.deleted`
3. `updateUserTier()` sets `tier` back to 'free'
4. `stripeCustomerId` preserved for re-subscription

## Lambda Functions

### `agentsform-post-confirmation`
- **Trigger**: Cognito Post Confirmation (email/password signups)
- **Source**: `packages/api/src/handlers/cognito-trigger.ts`
- **Purpose**: Create DynamoDB profile on email verification
- **Duplicate Prevention**: Uses `ConditionExpression: 'attribute_not_exists(PK)'`
- **Sets**: `signupMethod: 'email'`, `status: 'verified'`

### `agentsform-post-confirmation` (PostAuthentication Trigger)
- **Trigger**: Cognito Post Authentication (OAuth logins)
- **Source**: `packages/api/src/handlers/cognito-trigger.ts` (same Lambda, different trigger)
- **Purpose**:
  - For new OAuth users: Create DynamoDB profile with `signupMethod: 'google'`
  - For returning OAuth users: Update `lastLoginDate` only
- **Analytics**: Tracks `identityProvider`, `firstLoginDate`, `oauthSignupDate`
- **Duplicate Prevention**: Checks if profile exists before creating

### `agentsform-childhandler`
- **Source**: `packages/api/src/handlers/child.ts`
- **Backup Profile Creation**: Creates user profile if missing when adding child

### `studymate-paymenthandler`
- **Source**: `packages/api/src/handlers/payment.ts`
- **Graceful Updates**: Uses `if_not_exists(createdAt, :now)` to preserve existing data

## Tier Limits

| Tier | Max Children | Daily AI Calls | Daily Questions |
|------|-------------|----------------|-----------------|
| free | 2 | 10 | 20 |
| scholar | 5 | unlimited | unlimited |
| achiever | 10 | unlimited | unlimited |

## Admin Dashboard

Access at: `https://tutor.agentsform.ai/admin`

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

### Subscription not updating
1. Check Stripe webhook logs in Stripe Dashboard
2. Verify `STRIPE_WEBHOOK_SECRET` in Lambda environment
3. Check CloudWatch logs for `studymate-paymenthandler`

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

- `packages/api/src/handlers/cognito-trigger.ts` - Post-confirmation Lambda
- `packages/api/src/handlers/child.ts` - Child management with backup profile creation
- `packages/api/src/handlers/payment.ts` - Subscription management
- `packages/api/src/handlers/admin.ts` - Admin dashboard API
- `packages/api/src/scripts/backfill-user-profiles.ts` - Profile backfill script
- `infrastructure/cdk/src/stacks/auth-stack.ts` - Cognito configuration
- `infrastructure/cdk/src/stacks/api-stack.ts` - API Lambda configuration
