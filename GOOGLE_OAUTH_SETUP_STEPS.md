# Google OAuth Setup - Manual Configuration Steps

**Status**: CDK deployment complete ✅
**Date**: 2026-01-08
**Next**: Configure Google OAuth credentials in AWS Console

---

## What Was Deployed

✅ **CDK Changes**:
- PostAuthentication Lambda trigger added to Cognito
- Google identity provider placeholder created
- Callback URLs updated for all production domains
- Lambda granted read/write access to DynamoDB (for returning OAuth users)

✅ **Lambda Code**:
- cognito-trigger.ts supports both PostConfirmation and PostAuthentication
- Analytics tracking ready: signupMethod, identityProvider, signup Date, firstLoginDate
- Backward compatible with existing users

---

## Step 1: Create Google OAuth App

### 1.1 Go to Google Cloud Console
URL: https://console.cloud.google.com/

### 1.2 Create/Select Project
- Project name: `GradeMyChild` or `StudyMate`
- Location: No organization

### 1.3 Enable Google+ API
1. Navigate to: APIs & Services → Library
2. Search for: "Google+ API"
3. Click: Enable

### 1.4 Create OAuth 2.0 Credentials
1. Navigate to: APIs & Services → Credentials
2. Click: **Create Credentials** → **OAuth client ID**
3. Application type: **Web application**
4. Name: `GradeMyChild Web App`

### 1.5 Configure Authorized Redirect URIs
Add these EXACT URLs (from Cognito hosted UI domain):

```
https://agentsform.auth.ap-southeast-2.amazoncognito.com/oauth2/idpresponse
```

**How to get your Cognito domain**:
1. AWS Console → Cognito → User Pools → agentsform-users
2. App integration → Domain → Copy the domain name
3. Format: `https://YOUR-DOMAIN.auth.ap-southeast-2.amazoncognito.com/oauth2/idpresponse`

### 1.6 Save Credentials
- Copy the **Client ID**
- Copy the **Client Secret**
- Store securely (you'll need these in Step 2)

---

## Step 2: Configure Google in AWS Cognito

### 2.1 Navigate to Cognito User Pool
1. AWS Console → Cognito → User Pools
2. Select: `agentsform-users` (User Pool ID: `ap-southeast-2_KQjSkcKvP`)

### 2.2 Configure Google Identity Provider
1. Go to: **Sign-in experience** tab
2. Click: **Federated identity providers** → **Google**
3. Enter Google credentials:
   - **Client ID**: (from Step 1.6)
   - **Client secret**: (from Step 1.6)
   - **Authorize scopes**: `email profile openid`
4. Click: **Add identity provider**

### 2.3 Update App Client Settings
1. Go to: **App integration** tab
2. Select: **AgentsFormWebClient**
3. **Hosted UI settings**:
   - Identity providers: ☑ Cognito ☑ Google
   - OAuth 2.0 grant types: ☑ Authorization code grant
   - OAuth scopes: `email`, `openid`, `profile`
4. Click: **Save changes**

### 2.4 Verify Callback URLs
Ensure these are configured:
- `http://localhost:3000/auth/callback`
- `https://grademychild.com.au/auth/callback`
- `https://www.grademychild.com.au/auth/callback`
- `https://tutor.agentsform.ai/auth/callback`
- `https://agentsform.ai/auth/callback`

---

## Step 3: Verify Lambda Permissions

### 3.1 Check PostConfirmationTrigger Function
1. AWS Console → Lambda → Functions
2. Select: `agentsform-post-confirmation`
3. **Configuration** → **Permissions**
4. Verify IAM role has:
   - ✅ `dynamodb:GetItem` (for OAuth returning users)
   - ✅ `dynamodb:PutItem` (for new users)
   - ✅ `dynamodb:UpdateItem` (for backfilling analytics)

### 3.2 Check Triggers
1. **Configuration** → **Triggers**
2. Verify both triggers exist:
   - ✅ PostConfirmation (for email signup)
   - ✅ PostAuthentication (for OAuth login)

---

## Step 4: Test OAuth Flow

### 4.1 Test in Hosted UI
1. Get hosted UI URL:
   ```
   https://YOUR-DOMAIN.auth.ap-southeast-2.amazoncognito.com/login?client_id=6sehatih95apslqtikic4sf39o&response_type=code&scope=email+openid+profile&redirect_uri=http://localhost:3000/auth/callback
   ```
2. Click "Sign in with Google"
3. Complete Google authentication
4. Verify redirect to callback URL with authorization code

### 4.2 Verify DynamoDB User Created
1. AWS Console → DynamoDB → Tables → agentsform-main
2. **Explore items**
3. Find user with PK starting with `USER#`
4. Verify fields:
   - ✅ `signupMethod`: `'google'`
   - ✅ `identityProvider`: `'google'`
   - ✅ `firstLoginDate`: ISO timestamp
   - ✅ `tier`: `'free'`

### 4.3 Verify CloudWatch Logs
1. AWS Console → CloudWatch → Log groups
2. Select: `/aws/lambda/agentsform-post-confirmation`
3. Check latest log stream
4. Look for: `Created google user profile for`

---

## Step 5: Frontend Integration (Next Steps)

**File**: `apps/web/src/app/(auth)/register/page.tsx`

Add Google sign-in button:
```tsx
<button
  onClick={() => {
    window.location.href = `https://YOUR-DOMAIN.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?client_id=6sehatih95apslqtikic4sf39o&response_type=code&scope=email+openid+profile&redirect_uri=${encodeURIComponent(window.location.origin + '/auth/callback')}`;
  }}
  className="flex items-center justify-center gap-2 px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50"
>
  <svg>Google Icon</svg>
  Continue with Google
</button>
```

**File**: `apps/web/src/app/(auth)/callback/page.tsx`

Handle OAuth callback (to be implemented).

---

## Verification Checklist

Before going live:

- [ ] Google OAuth app created in Google Cloud Console
- [ ] Client ID and secret configured in Cognito
- [ ] Authorized redirect URIs match Cognito hosted UI domain
- [ ] Cognito app client supports Google identity provider
- [ ] Lambda has both PostConfirmation and PostAuthentication triggers
- [ ] Lambda has DynamoDB read/write permissions
- [ ] Test OAuth flow creates user in DynamoDB with correct fields
- [ ] Existing email users can still log in (backward compatibility)
- [ ] Existing paid users keep their tier (backward compatibility)

---

## Rollback Plan

If issues occur:

1. **Disable Google in Cognito**:
   - User Pool → App integration → App client → Edit
   - Uncheck "Google" identity provider
   - Save

2. **Remove Google provider** (optional):
   - User Pool → Sign-in experience → Federated providers
   - Delete Google

3. **Revert CDK** (if needed):
   ```bash
   git revert HEAD
   pnpm --filter @studymate/api build
   source .env && cd infrastructure/cdk && npx cdk deploy AgentsFormAuth
   ```

Existing users unaffected - email login still works.

---

## Support

**AWS Resources**:
- User Pool ID: `ap-southeast-2_KQjSkcKvP`
- App Client ID: `6sehatih95apslqtikic4sf39o`
- Lambda: `agentsform-post-confirmation`
- DynamoDB: `agentsform-main`

**Contact**:
- Email: tendai@agentsform.ai
- Phone: +61 401 156 266
