# Google OAuth Architecture

**Status**: Live in Production
**Deployed**: 14 January 2026
**Author**: Tendai Mudavanhu

---

## Overview

StudyMate supports Google OAuth for parent authentication, providing a seamless one-click sign-in experience. The implementation includes automatic account linking for users who have both email/password and Google accounts.

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        GOOGLE OAUTH FLOW                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐                 │
│  │   Frontend   │     │   Cognito    │     │    Google    │                 │
│  │  (Next.js)   │     │  User Pool   │     │   OAuth 2.0  │                 │
│  └──────────────┘     └──────────────┘     └──────────────┘                 │
│         │                    │                    │                          │
│         │ 1. Click "Continue with Google"        │                          │
│         │─────────────────────────────────────────                          │
│         │                    │                    │                          │
│         │ 2. Redirect to Cognito Hosted UI      │                          │
│         │───────────────────▶│                    │                          │
│         │                    │                    │                          │
│         │                    │ 3. Redirect to Google                        │
│         │                    │───────────────────▶│                          │
│         │                    │                    │                          │
│         │                    │                    │ 4. User authenticates    │
│         │                    │                    │                          │
│         │                    │ 5. Google returns tokens                     │
│         │                    │◀───────────────────│                          │
│         │                    │                    │                          │
│         │                    │ 6. PreSignUp Lambda fires                    │
│         │                    │    - Check if email exists                   │
│         │                    │    - Link accounts if needed                 │
│         │                    │                    │                          │
│         │ 7. Redirect to /callback?code=xxx      │                          │
│         │◀───────────────────│                    │                          │
│         │                    │                    │                          │
│         │ 8. Exchange code for tokens            │                          │
│         │───────────────────▶│                    │                          │
│         │                    │                    │                          │
│         │                    │ 9. PostAuthentication Lambda                 │
│         │                    │    - Create/update DynamoDB profile          │
│         │                    │    - Sync tier to Cognito                    │
│         │                    │                    │                          │
│         │ 10. Tokens returned                    │                          │
│         │◀───────────────────│                    │                          │
│         │                    │                    │                          │
│         │ 11. Store tokens, redirect to dashboard│                          │
│         │                    │                    │                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Configuration

### Cognito User Pool

| Setting | Value |
|---------|-------|
| User Pool ID | `ap-southeast-2_KQjSkcKvP` |
| Client ID | `6sehatih95apslqtikic4sf39o` |
| Cognito Domain | `auth.grademychild.com.au` |
| Region | `ap-southeast-2` (Sydney) |

### Google OAuth

| Setting | Value |
|---------|-------|
| Client ID | `496794315636-lcosupe2cedmdcic63efi12kfsnke5fn.apps.googleusercontent.com` |
| Scopes | `email`, `profile`, `openid` |
| Authorized Origins | `https://auth.grademychild.com.au` |

### Callback URLs

| Environment | Callback URL | Logout URL |
|-------------|--------------|------------|
| Production | `https://grademychild.com.au/callback` | `https://grademychild.com.au/oauth-redirect` |
| Production (www) | `https://www.grademychild.com.au/callback` | `https://www.grademychild.com.au/oauth-redirect` |
| Legacy | `https://tutor.agentsform.ai/callback` | `https://tutor.agentsform.ai/oauth-redirect` |
| Development | `http://localhost:3000/callback` | `http://localhost:3000/oauth-redirect` |

---

## Lambda Triggers

### PreSignUp Trigger

**Event**: `PreSignUp_ExternalProvider`

**Purpose**: Link OAuth identity to existing email/password accounts before user creation.

**Flow**:
1. Extract email from OAuth user attributes
2. Query Cognito `ListUsers` API to check for existing user with same email
3. If existing native user found:
   - Call `AdminLinkProviderForUser` to link OAuth identity
   - Update DynamoDB profile with `auth_method: 'both'`
   - Throw `USER_LINKED_TO_EXISTING_ACCOUNT` error
4. If no existing user:
   - Set `autoConfirmUser: true`
   - Set `autoVerifyEmail: true`

**IAM Permissions**:
```json
{
  "Effect": "Allow",
  "Action": [
    "cognito-idp:ListUsers",
    "cognito-idp:AdminLinkProviderForUser"
  ],
  "Resource": "arn:aws:cognito-idp:ap-southeast-2:*:userpool/*"
}
```

### PostConfirmation Trigger

**Event**: `PostConfirmation_ConfirmSignUp`

**Purpose**: Create DynamoDB profile for email/password signups after email verification.

**Flow**:
1. Extract user ID (sub) and email from event
2. Create DynamoDB profile with `auth_method: 'email'`
3. Use conditional put to prevent duplicates

### PostAuthentication Trigger

**Event**: `PostAuthentication_Authentication`

**Purpose**: Handle returning users and create profiles for new OAuth users.

**Flow**:
1. Check if user profile exists in DynamoDB by email (GSI query)
2. For new OAuth users: Create profile with `auth_method: 'oauth'`
3. For returning users: Update `lastLoginDate`
4. For linked accounts: Sync tier from DynamoDB to Cognito `custom:tier`

**IAM Permissions**:
```json
{
  "Effect": "Allow",
  "Action": "cognito-idp:AdminUpdateUserAttributes",
  "Resource": "arn:aws:cognito-idp:ap-southeast-2:*:userpool/*"
}
```

---

## Account Linking

### Problem

When a user signs up with email/password, then later tries to sign in with Google OAuth using the same email, Cognito would create a duplicate user. This causes data fragmentation.

### Solution

The PreSignUp Lambda trigger detects this scenario and links the OAuth identity to the existing Cognito user before any duplicate is created.

### User Experience

1. User has existing email/password account
2. User clicks "Continue with Google" on login page
3. Google authenticates user
4. PreSignUp trigger links accounts
5. Cognito returns `USER_LINKED_TO_EXISTING_ACCOUNT` error
6. Callback page catches error, sets `sessionStorage.accountLinked` flag
7. Callback page immediately retries OAuth
8. Second attempt succeeds (identity now linked)
9. User lands on dashboard
10. Dashboard shows toast: "Google account linked - You can now sign in with Google or your password"

### Toast Notification

The dashboard checks for the `accountLinked` flag on mount:

```typescript
useEffect(() => {
  const wasAccountLinked = sessionStorage.getItem('accountLinked')
  if (wasAccountLinked) {
    sessionStorage.removeItem('accountLinked')
    setShowAccountLinkedToast(true)
  }
}, [])
```

The toast is dismissible and only shows once (flag cleared immediately).

---

## DynamoDB Schema

### User Profile with OAuth Fields

```typescript
{
  PK: 'USER#<cognito-sub>',
  SK: 'PROFILE',

  // Core fields
  email: string,
  name: string,
  tier: 'free' | 'explorer' | 'scholar' | 'achiever',
  status: 'verified',

  // OAuth fields
  auth_method: 'email' | 'oauth' | 'both',
  oauth_provider: 'google' | 'facebook' | 'apple' | null,
  oauth_sub: string | null,
  linked_accounts: ['cognito:email'] | ['oauth:google'] | ['cognito:email', 'oauth:google'],

  // Analytics
  signupMethod: 'email' | 'google',
  identityProvider: string | null,
  firstLoginDate: string | null,
  lastLoginDate: string,

  // Timestamps
  createdAt: string,
  updatedAt: string
}
```

---

## Frontend Components

### Callback Page (`/callback`)

**File**: `apps/web/src/app/(auth)/callback/page.tsx`

**Responsibilities**:
1. Parse URL parameters for authorization code or error
2. Handle `USER_LINKED_TO_EXISTING_ACCOUNT` error
3. Exchange authorization code for tokens
4. Store tokens in localStorage
5. Check user status via API
6. Redirect to appropriate page

### Login Page (`/login`)

**File**: `apps/web/src/app/(auth)/login/page.tsx`

**Google OAuth Button**:
```typescript
const handleGoogleSignIn = () => {
  const cognitoDomain = 'https://auth.grademychild.com.au'
  const clientId = '6sehatih95apslqtikic4sf39o'
  const redirectUri = `${window.location.origin}/callback`
  const oauthUrl = `${cognitoDomain}/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=email+openid+profile&identity_provider=Google&prompt=select_account`
  window.location.href = oauthUrl
}
```

### Dashboard (`/dashboard`)

**File**: `apps/web/src/app/(parent)/dashboard/page.tsx`

**Account Linked Toast**:
- Green success styling
- Checkmark icon
- Dismissible with X button
- Auto-clears sessionStorage flag

---

## Testing

### Reset Test User

To re-test account linking, remove the Google identity from an existing user:

```bash
# Remove Google identity from Cognito
aws cognito-idp admin-disable-provider-for-user \
  --user-pool-id ap-southeast-2_KQjSkcKvP \
  --user ProviderName=Google,ProviderAttributeName=Cognito_Subject,ProviderAttributeValue=<google-user-id> \
  --region ap-southeast-2

# Reset DynamoDB OAuth fields
aws dynamodb update-item \
  --table-name agentsform-main \
  --key '{"PK":{"S":"USER#<cognito-sub>"},"SK":{"S":"PROFILE"}}' \
  --update-expression "REMOVE oauth_provider, oauth_sub SET auth_method = :auth, linked_accounts = :accounts" \
  --expression-attribute-values '{":auth":{"S":"email"},":accounts":{"L":[{"S":"cognito:email"}]}}' \
  --region ap-southeast-2
```

### Check User Identities

```bash
aws cognito-idp admin-get-user \
  --user-pool-id ap-southeast-2_KQjSkcKvP \
  --username <cognito-username> \
  --region ap-southeast-2
```

### Monitor Lambda Logs

```bash
aws logs tail /aws/lambda/agentsform-post-confirmation --follow --region ap-southeast-2
```

---

## Troubleshooting

### OAuth User Not Linking

1. Verify email matches exactly (case-sensitive)
2. Check CloudWatch logs for PreSignUp trigger
3. Verify IAM permissions include `ListUsers` and `AdminLinkProviderForUser`
4. Ensure existing user is a native Cognito user (not already OAuth)

### Account Linked Toast Not Showing

1. Check browser DevTools: `sessionStorage.getItem('accountLinked')`
2. Verify callback page sets flag before retry redirect
3. Ensure dashboard useEffect runs on mount

### Token Exchange Failing

1. Check callback URL is in Cognito allowed list
2. Verify client ID matches
3. Check for CORS issues in browser console

### Tier Not Syncing

1. Verify PostAuthentication trigger is attached to user pool
2. Check IAM permission for `AdminUpdateUserAttributes`
3. Check DynamoDB profile has correct tier value

---

## Security Considerations

1. **Token Storage**: Tokens stored in localStorage (acceptable for client-side SPA)
2. **HTTPS Only**: All OAuth endpoints use HTTPS
3. **State Parameter**: Cognito handles CSRF protection
4. **Scope Limitation**: Only request `email`, `profile`, `openid` scopes
5. **No Token Persistence**: Google access tokens not stored long-term

---

## Related Documentation

- [USER_MANAGEMENT.md](./USER_MANAGEMENT.md) - User lifecycle and DynamoDB schema
- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - API endpoints and deployment
- [LEGAL_COMPLIANCE.md](./LEGAL_COMPLIANCE.md) - OAuth data handling and privacy
- [PARENT_GUIDE.md](./PARENT_GUIDE.md) - User instructions for Google Sign-In
