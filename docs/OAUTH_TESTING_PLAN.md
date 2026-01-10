# OAuth Testing Plan - Pre-Deployment Checklist

**Status**: DRAFT - Ready for Testing
**Date**: 2026-01-09
**Purpose**: Comprehensive testing before OAuth deployment to production

---

## Testing Environment Setup

### Prerequisites

**1. Local Development Server**
```bash
cd /Users/tendaimudavanhu/CODE/tutor/studymate/apps/web
pnpm dev
```

**2. Test Accounts Required**
- ✅ Personal Google account (for OAuth testing)
- ✅ Test email account (for email/password testing)
- ✅ Existing user account (to test backward compatibility)

**3. Browser Setup**
- Use Chrome DevTools with Console open
- Use Network tab to monitor API calls
- Use Incognito/Private window for clean state testing

**4. AWS Console Access**
- CloudWatch Logs for Lambda errors
- DynamoDB table viewer for data verification
- Cognito User Pool console for user inspection

---

## Phase 1: Pre-Deployment Verification (30 minutes)

### 1.1 Code Review Checklist

**Files to Review**:
- [ ] `apps/web/src/app/(auth)/callback/page.tsx`
  - [ ] Token exchange endpoint correct?
  - [ ] Error handling present?
  - [ ] Redirect logic correct?
- [ ] `apps/web/src/app/(auth)/choose-tier/page.tsx`
  - [ ] Tier selection works?
  - [ ] Stripe checkout integration correct?
- [ ] `apps/web/src/app/(auth)/login/page.tsx`
  - [ ] OAuth button has correct URL?
  - [ ] Redirect to Cognito domain is correct?
- [ ] `apps/web/src/app/(auth)/register/page.tsx`
  - [ ] OAuth button present?
  - [ ] No conflicting plan selection logic?

### 1.2 Configuration Verification

**Cognito Settings** (AWS Console):
```
User Pool: agentsform-users (ap-southeast-2_KQjSkcKvP)
App Client: AgentsFormWebClient (6sehatih95apslqtikic4sf39o)

Verify:
- [ ] Google identity provider configured
- [ ] Client ID and secret correct
- [ ] Callback URLs include:
      - http://localhost:3000/auth/callback
      - https://grademychild.com.au/auth/callback
      - https://www.grademychild.com.au/auth/callback
      - https://tutor.agentsform.ai/auth/callback
- [ ] OAuth 2.0 grant types: Authorization code grant
- [ ] OAuth scopes: email, openid, profile
```

**Google OAuth App** (Google Cloud Console):
```
Project: GradeMyChild or StudyMate

Verify:
- [ ] OAuth app is PUBLISHED (not in testing mode)
- [ ] Authorized redirect URIs include:
      - https://grademychild.auth.ap-southeast-2.amazoncognito.com/oauth2/idpresponse
- [ ] Client ID matches Cognito configuration
- [ ] Google+ API enabled
```

**Lambda Function** (AWS Console):
```
Function: agentsform-post-confirmation

Verify:
- [ ] PostAuthentication trigger configured (not just PostConfirmation)
- [ ] DynamoDB read/write permissions granted
- [ ] Environment variables set correctly
- [ ] Latest code deployed (check deployment timestamp)
```

### 1.3 URL Construction Verification

**Test OAuth URL**:
```
https://grademychild.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?client_id=6sehatih95apslqtikic4sf39o&response_type=code&scope=email+openid+profile&redirect_uri=http://localhost:3000/auth/callback&identity_provider=Google
```

**Verify Each Component**:
- [ ] Domain: `grademychild.auth.ap-southeast-2.amazoncognito.com` (correct Cognito domain)
- [ ] Client ID: `6sehatih95apslqtikic4sf39o` (correct app client)
- [ ] Response type: `code` (authorization code flow)
- [ ] Scopes: `email+openid+profile` (correct scopes)
- [ ] Redirect URI: `http://localhost:3000/auth/callback` (URL encoded)
- [ ] Identity provider: `Google` (forces Google login)

---

## Phase 2: Local Testing (1 hour)

### 2.1 OAuth Signup Flow (New User)

**Test Case**: New user signs up with Google

**Steps**:
1. [ ] Start local dev server: `pnpm dev`
2. [ ] Open http://localhost:3000 in **Incognito window**
3. [ ] Click "Get Started" button
4. [ ] Click "Continue with Google" button

**Expected Behavior**:
- [ ] Redirects to Cognito hosted UI
- [ ] Shows Google login screen
- [ ] After Google auth, redirects to http://localhost:3000/auth/callback?code=XXX

**Verify in Browser Console**:
```javascript
// Check localStorage after callback
localStorage.getItem('idToken') // Should exist
localStorage.getItem('accessToken') // Should exist
localStorage.getItem('refreshToken') // Should exist
localStorage.getItem('user') // Should have user object

// Parse user object
JSON.parse(localStorage.getItem('user'))
// Should have: { sub, email, name, tier: 'free', ... }
```

**Verify Redirect**:
- [ ] Redirects to `/choose-tier` page
- [ ] Scholar plan pre-selected
- [ ] All three tiers displayed
- [ ] "Skip" option available

**Verify in DynamoDB**:
```bash
# Check if user profile created
aws dynamodb query \
  --table-name agentsform-main \
  --key-condition-expression "PK = :pk AND SK = :sk" \
  --expression-attribute-values '{":pk":{"S":"USER#YOUR_USER_ID"},":sk":{"S":"PROFILE"}}' \
  --region ap-southeast-2
```

**Expected DynamoDB Profile**:
```json
{
  "PK": "USER#xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "SK": "PROFILE",
  "email": "test@gmail.com",
  "tier": "free",
  "signupMethod": "google",
  "identityProvider": "google",
  "firstLoginDate": "2026-01-09T...",
  "createdAt": "2026-01-09T...",
  "updatedAt": "2026-01-09T..."
}
```

**Verify in CloudWatch**:
```
Log Group: /aws/lambda/agentsform-post-confirmation
Search: "Created google user profile"

Expected log:
"Created google user profile for <email>"
```

**Common Errors to Check**:
- ❌ "An error was encountered" → OAuth URL malformed or callback URL not registered
- ❌ "Invalid client_id" → Client ID mismatch between Cognito and Google
- ❌ "Redirect URI mismatch" → Callback URL not in approved list
- ❌ Stuck on loading screen → Token exchange failing, check Network tab

---

### 2.2 Tier Selection Flow

**Test Case**: User selects paid tier after OAuth signup

**Continuation from 2.1**:
5. [ ] On `/choose-tier` page, click "Start Free Trial" on Scholar plan

**Expected Behavior**:
- [ ] Shows loading state
- [ ] Calls API: `POST /checkout/session` with tier: 'scholar'
- [ ] Redirects to Stripe checkout

**Verify Stripe Checkout**:
- [ ] URL is `checkout.stripe.com/...`
- [ ] Shows Scholar plan ($5/month)
- [ ] Shows "3-day free trial" messaging
- [ ] Email pre-filled with OAuth email

**Test Case**: User selects free tier

**Alternative Path**:
5. [ ] On `/choose-tier` page, click "Start Free" on Explorer plan

**Expected Behavior**:
- [ ] Shows loading state
- [ ] Redirects to `/dashboard`
- [ ] No Stripe checkout

**Test Case**: User clicks "Skip"

**Alternative Path**:
5. [ ] On `/choose-tier` page, click "I'll choose later"

**Expected Behavior**:
- [ ] Redirects to `/dashboard`
- [ ] Can upgrade later via `/pricing` page

---

### 2.3 Returning OAuth User Flow

**Test Case**: Existing OAuth user logs in again

**Setup**:
- Use same Google account from test 2.1
- Close all browser windows
- Open **new Incognito window**

**Steps**:
1. [ ] Go to http://localhost:3000/login
2. [ ] Click "Continue with Google"

**Expected Behavior**:
- [ ] May auto-login if Google cookies present (one-click)
- [ ] OR shows Google account picker
- [ ] After auth, redirects to `/auth/callback`
- [ ] **SKIPS `/choose-tier`** (already selected tier)
- [ ] Redirects directly to `/dashboard`

**Verify in CloudWatch**:
```
Expected log:
"Updated lastLoginDate for returning user <email>"
```

**Verify in DynamoDB**:
```bash
# Check lastLoginDate updated
aws dynamodb get-item \
  --table-name agentsform-main \
  --key '{"PK":{"S":"USER#YOUR_USER_ID"},"SK":{"S":"PROFILE"}}' \
  --region ap-southeast-2
```

**Expected Update**:
- `lastLoginDate` should be current timestamp
- `tier` should be unchanged
- No new profile created (existing profile updated)

---

### 2.4 Email/Password Flow (Backward Compatibility)

**Test Case**: Email signup still works

**Steps**:
1. [ ] Go to http://localhost:3000/get-started
2. [ ] Enter email: test@example.com
3. [ ] Click "Continue"
4. [ ] Select Scholar plan
5. [ ] Enter name, password on `/register`
6. [ ] Submit form

**Expected Behavior**:
- [ ] Redirects to `/verify`
- [ ] Email sent with verification code
- [ ] Enter code
- [ ] Creates Cognito user
- [ ] PostConfirmation Lambda fires
- [ ] DynamoDB profile created with `signupMethod: 'email'`

**Verify Profile Difference**:
```json
// OAuth profile
{
  "signupMethod": "google",
  "identityProvider": "google",
  "firstLoginDate": "...",
  "lastLoginDate": "..."
}

// Email profile
{
  "signupMethod": "email",
  "status": "verified",
  "verifiedAt": "..."
}
```

---

### 2.5 Error Handling Tests

**Test Case 1**: User cancels OAuth flow

**Steps**:
1. [ ] Click "Continue with Google"
2. [ ] On Google login, click "Cancel" or back button

**Expected Behavior**:
- [ ] Redirects to `/auth/callback?error=access_denied`
- [ ] Shows error message: "Authentication failed"
- [ ] Provides link back to `/login`

---

**Test Case 2**: Invalid callback code

**Steps**:
1. [ ] Manually visit: http://localhost:3000/auth/callback?code=invalid_code

**Expected Behavior**:
- [ ] Token exchange fails
- [ ] Shows error message
- [ ] Logs error in console
- [ ] Provides link back to `/login`

---

**Test Case 3**: Existing email user tries OAuth with same email

**Setup**:
- User already exists with email: existing@example.com (email/password)
- Try to sign up with Google using existing@example.com

**Steps**:
1. [ ] Click "Continue with Google"
2. [ ] Select Google account with existing@example.com

**Expected Behavior** (Current - Known Issue):
- [ ] Creates NEW Cognito user (different User ID)
- [ ] Creates NEW DynamoDB profile
- [ ] User now has TWO accounts with same email

**Verify Duplicate**:
```bash
# List all users with this email
aws cognito-idp list-users \
  --user-pool-id ap-southeast-2_KQjSkcKvP \
  --filter "email = \"existing@example.com\"" \
  --region ap-southeast-2
```

**Note**: This is expected behavior (Cognito limitation). Document as known issue.

---

## Phase 3: Production-like Testing (30 minutes)

### 3.1 Build and Test Locally

**Build Production Version**:
```bash
cd apps/web
pnpm build
pnpm start  # Serves production build on localhost:3000
```

**Repeat All Tests from Phase 2**:
- [ ] OAuth signup flow
- [ ] Tier selection
- [ ] Returning user login
- [ ] Email signup flow

**Why This Matters**:
- Next.js dev mode can hide build issues
- Production build optimizes/minifies code differently
- Edge cases may only appear in production

---

### 3.2 Test OAuth URL on Production Domains

**Update OAuth Button URLs** (temporarily for testing):

In `login/page.tsx`, `register/page.tsx`, `get-started/page.tsx`:
```typescript
const redirectUri = encodeURIComponent('https://grademychild.com.au/auth/callback')
// Instead of: ${window.location.origin}/auth/callback
```

**Test on Production Callback URL**:
```
https://grademychild.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?client_id=6sehatih95apslqtikic4sf39o&response_type=code&scope=email+openid+profile&redirect_uri=https://grademychild.com.au/auth/callback&identity_provider=Google
```

**Expected Behavior**:
- [ ] Google login works
- [ ] Redirects to production callback URL
- [ ] **BUT page shows old version (pre-OAuth)**
- [ ] This confirms callback URL is registered correctly

**Revert Test Changes** before committing:
```typescript
// Change back to dynamic origin
const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
```

---

## Phase 4: Database Integrity Tests (15 minutes)

### 4.1 Verify User Profile Structure

**Check All Required Fields Present**:
```bash
aws dynamodb scan \
  --table-name agentsform-main \
  --filter-expression "begins_with(PK, :pk) AND SK = :sk" \
  --expression-attribute-values '{":pk":{"S":"USER#"},":sk":{"S":"PROFILE"}}' \
  --region ap-southeast-2
```

**For OAuth Users, Verify**:
- [ ] `signupMethod` = 'google'
- [ ] `identityProvider` = 'google'
- [ ] `firstLoginDate` exists
- [ ] `lastLoginDate` exists
- [ ] `tier` = 'free' (initially)
- [ ] `email` matches Google account
- [ ] No `password` field (OAuth users don't have passwords)

**For Email Users, Verify**:
- [ ] `signupMethod` = 'email'
- [ ] `status` = 'verified'
- [ ] `tier` exists
- [ ] No OAuth fields

---

### 4.2 Test Tier Upgrades

**Test Case**: OAuth user upgrades to Scholar

**Steps**:
1. [ ] Complete OAuth signup (free tier)
2. [ ] Go to `/pricing` page
3. [ ] Click "Upgrade to Scholar"
4. [ ] Complete Stripe checkout (use test card: 4242 4242 4242 4242)

**Verify Stripe Webhook**:
```bash
# Check Stripe webhook logs
# Dashboard → Developers → Webhooks → View logs
```

**Verify DynamoDB Update**:
```bash
aws dynamodb get-item \
  --table-name agentsform-main \
  --key '{"PK":{"S":"USER#YOUR_USER_ID"},"SK":{"S":"PROFILE"}}' \
  --region ap-southeast-2
```

**Expected Updates**:
- [ ] `tier` = 'scholar'
- [ ] `stripeCustomerId` present
- [ ] `stripeSubscriptionId` present
- [ ] `updatedAt` updated
- [ ] `signupMethod` still 'google' (preserved)

---

## Phase 5: CloudWatch Monitoring (15 minutes)

### 5.1 Lambda Execution Logs

**Check PostAuthentication Trigger**:
```
Log Group: /aws/lambda/agentsform-post-confirmation
Filter: "PostAuthentication"

Look for:
✅ "PostAuthentication trigger for user: <email>"
✅ "Created google user profile for <email>" (new users)
✅ "Updated lastLoginDate for returning user <email>"
❌ "Error creating user profile" (should not see)
❌ "ConditionalCheckFailedException" (duplicate profile creation)
```

### 5.2 Error Log Analysis

**Search for Errors**:
```
Filter: "ERROR" or "Exception" or "Failed"

Common errors to watch:
❌ "Token exchange failed" → OAuth credentials issue
❌ "DynamoDB PutItem failed" → Permission issue
❌ "Invalid redirect_uri" → Callback URL not registered
❌ "Client not found" → Client ID mismatch
```

---

## Phase 6: Security & Privacy Tests (15 minutes)

### 6.1 Token Security

**Verify Tokens Not Exposed**:
- [ ] Check browser console - no tokens logged
- [ ] Check Network tab - tokens only in Authorization headers
- [ ] Check URL history - no tokens in query params

**Verify Token Expiration**:
```javascript
// In browser console
const idToken = localStorage.getItem('idToken')
const decoded = JSON.parse(atob(idToken.split('.')[1]))
console.log('Token expires:', new Date(decoded.exp * 1000))
// Should be ~1 hour from now
```

### 6.2 CORS Testing

**Test Cross-Origin Requests**:
- [ ] OAuth callback works (cross-origin from Cognito)
- [ ] API calls work (check Network tab for CORS headers)
- [ ] No CORS errors in console

---

## Phase 7: User Experience Tests (15 minutes)

### 7.1 Mobile Responsiveness

**Test on Mobile Devices** (or DevTools mobile emulation):
- [ ] iPhone 12 Pro (390x844)
- [ ] Samsung Galaxy S21 (360x800)
- [ ] iPad (768x1024)

**Check**:
- [ ] OAuth buttons readable and tappable
- [ ] Tier selection cards display properly
- [ ] No horizontal scrolling
- [ ] Text readable without zooming

### 7.2 Loading States

**Verify Loading Indicators**:
- [ ] OAuth button shows "Processing..." after click
- [ ] Callback page shows "Loading..." spinner
- [ ] Tier selection shows loading state on submit

### 7.3 Error Messages

**Verify User-Friendly Errors**:
- [ ] OAuth cancelled: "Authentication cancelled. Please try again."
- [ ] Network error: "Connection failed. Check your internet."
- [ ] Server error: "Something went wrong. Please try again."

---

## Phase 8: Analytics & Tracking (Optional - 15 minutes)

### 8.1 Verify Analytics Events

**If analytics tracking implemented**:
- [ ] "oauth_signup_started" event fires
- [ ] "oauth_signup_completed" event fires
- [ ] "tier_selected" event fires with tier name
- [ ] User properties include `signupMethod`

---

## Final Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] No console.log statements left in production code
- [ ] Error handling present in all async functions

### Configuration
- [ ] All OAuth URLs use production domains (not localhost)
- [ ] Environment variables set correctly
- [ ] API endpoints point to production
- [ ] Stripe uses production keys (not test keys)

### Documentation
- [ ] User flows documented
- [ ] Known issues documented
- [ ] Rollback plan ready
- [ ] Support team informed

### Backup & Safety
- [ ] Database backup taken
- [ ] Can rollback to previous version quickly
- [ ] Monitoring alerts set up
- [ ] On-call person available

---

## Deployment Go/No-Go Decision

### Go (Deploy to Production) If:
- ✅ All Phase 2 tests pass (local OAuth flow works)
- ✅ No errors in CloudWatch logs
- ✅ DynamoDB profiles created correctly
- ✅ Tier selection and Stripe checkout work
- ✅ Backward compatibility confirmed (email signup works)
- ✅ No security issues found

### No-Go (Hold Deployment) If:
- ❌ OAuth flow fails at any step
- ❌ Token exchange errors
- ❌ Lambda execution errors
- ❌ DynamoDB permission errors
- ❌ Stripe checkout fails
- ❌ Critical UI/UX issues

---

## Post-Deployment Monitoring (First 24 Hours)

### Metrics to Watch

**Signup Conversion**:
- OAuth signup attempts vs. completions
- Email signup attempts vs. completions
- Tier selection: free vs. paid

**Error Rates**:
- OAuth callback errors
- Lambda execution failures
- DynamoDB write failures
- Stripe checkout failures

**User Feedback**:
- Support tickets about OAuth
- User confusion about two signup methods
- Complaints about tier selection

### Alert Thresholds

**Critical (Page Immediately)**:
- OAuth error rate > 10%
- Lambda failures > 5%
- Zero successful OAuth signups in 1 hour

**Warning (Check Within 1 Hour)**:
- OAuth error rate > 5%
- Tier selection drop-off > 50%
- Stripe checkout failures > 10%

---

## Testing Shortcuts for Quick Verification

### Quick Test (5 minutes)
```bash
# Just verify OAuth URL construction
1. Click "Continue with Google" on localhost
2. Check URL redirected to Cognito
3. Check Google login appears
4. Cancel and check error handling
```

### Medium Test (15 minutes)
```bash
# Complete one full flow
1. OAuth signup (new Google account)
2. Tier selection (free tier)
3. Dashboard access
4. Check DynamoDB profile created
```

### Full Test (90 minutes)
```bash
# Run entire testing plan
- All test cases from all phases
- Multiple user scenarios
- Error conditions
- Edge cases
```

---

## Rollback Procedure (If Issues Found)

**Immediate Rollback**:
```bash
# Revert to pre-OAuth version
git checkout 8b822e4 -- apps/web/src/app/\(auth\)/

# Rebuild and deploy
pnpm build
aws s3 sync out/ s3://onceoffresourcesstack-techxbucket00f18e48-h7seokhaha6q --delete
aws cloudfront create-invalidation --distribution-id E1WZZKB5A9CWD6 --paths "/*"
```

**Partial Rollback**:
```bash
# Keep OAuth code but hide buttons
# Set feature flag or comment out OAuth button renders
# Deploy updated version
```

---

## Test Result Documentation Template

```markdown
# OAuth Testing Results - [Date]

## Test Environment
- Branch: [branch_name]
- Commit: [commit_hash]
- Tester: [name]

## Phase 2 Results (Local Testing)
- [ ] 2.1 OAuth Signup: PASS / FAIL / SKIP
- [ ] 2.2 Tier Selection: PASS / FAIL / SKIP
- [ ] 2.3 Returning User: PASS / FAIL / SKIP
- [ ] 2.4 Email Flow: PASS / FAIL / SKIP
- [ ] 2.5 Error Handling: PASS / FAIL / SKIP

## Issues Found
1. [Issue description]
   - Severity: Critical / High / Medium / Low
   - Steps to reproduce:
   - Screenshot/logs:
   - Fix required: Yes / No

## Recommendation
- [ ] DEPLOY - All tests passed
- [ ] HOLD - Critical issues found
- [ ] NEEDS WORK - Minor issues need fixing

## Notes
[Additional observations]
```

---

*Last Updated: 2026-01-09*
*Version: 1.0*
*Status: Ready for Testing*
