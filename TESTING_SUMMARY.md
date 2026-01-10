# OAuth Testing Summary - Quick Start

**Full Plan**: See `docs/OAUTH_TESTING_PLAN.md` for detailed testing procedures

---

## Quick Testing Checklist (30 Minutes)

Before deploying OAuth changes, run these essential tests:

### 1. Local OAuth Flow Test (10 min)

```bash
# Start dev server
cd apps/web
pnpm dev
```

**Test Steps**:
1. ✅ Open http://localhost:3000 in Incognito window
2. ✅ Click "Get Started" → "Continue with Google"
3. ✅ Complete Google authentication
4. ✅ Verify redirect to `/choose-tier` page
5. ✅ Select a tier (try both free and paid)
6. ✅ Verify redirect to dashboard or Stripe

**Pass Criteria**:
- No errors in browser console
- OAuth flow completes without "error encountered" message
- User profile created in DynamoDB with `signupMethod: 'google'`

---

### 2. Returning User Test (5 min)

**Test Steps**:
1. ✅ Close browser, open new Incognito window
2. ✅ Go to /login → "Continue with Google"
3. ✅ Verify SKIPS tier selection
4. ✅ Goes directly to dashboard

**Pass Criteria**:
- Returning users don't see `/choose-tier` again
- `lastLoginDate` updated in DynamoDB

---

### 3. Email Flow Test (10 min)

**Test Steps**:
1. ✅ Use /get-started with email/password flow
2. ✅ Complete verification
3. ✅ Verify profile created with `signupMethod: 'email'`

**Pass Criteria**:
- Email signup still works (backward compatibility)
- No conflicts between OAuth and email users

---

### 4. Error Handling Test (5 min)

**Test Steps**:
1. ✅ Click Google OAuth → Cancel on Google screen
2. ✅ Verify error message shown
3. ✅ Visit /auth/callback?code=invalid
4. ✅ Verify graceful error handling

**Pass Criteria**:
- No blank screens or crashes
- User-friendly error messages
- Link back to login/signup

---

## Critical Configuration Checks

### Before Testing, Verify:

**Cognito Console**:
```
User Pool: ap-southeast-2_KQjSkcKvP
- ✅ Google provider configured
- ✅ PostAuthentication trigger active
- ✅ Callback URLs include localhost:3000
```

**Google Cloud Console**:
```
OAuth App Status: PUBLISHED (not testing mode)
- ✅ Redirect URI: https://grademychild.auth.ap-southeast-2.amazoncognito.com/oauth2/idpresponse
- ✅ Google+ API enabled
```

**Lambda Function**:
```
Function: agentsform-post-confirmation
- ✅ PostAuthentication trigger configured
- ✅ DynamoDB permissions granted
- ✅ Latest code deployed
```

---

## Common Issues & Fixes

### Issue: "An error was encountered"

**Possible Causes**:
1. Callback URL not in approved list
2. Client ID mismatch
3. OAuth app still in testing mode
4. Google+ API not enabled

**Debug Steps**:
```bash
# Check browser console for exact error
# Check Network tab for failed requests
# Check Cognito hosted UI URL construction
# Verify redirect_uri matches exactly
```

---

### Issue: Stuck on Loading Screen

**Possible Causes**:
1. Token exchange failing
2. CORS issue
3. Lambda execution error

**Debug Steps**:
```bash
# Check CloudWatch logs
aws logs tail /aws/lambda/agentsform-post-confirmation --follow

# Check browser Network tab for 500 errors
# Verify API endpoint responding
```

---

### Issue: User Profile Not Created

**Possible Causes**:
1. Lambda trigger not configured
2. DynamoDB permissions missing
3. Lambda execution timeout

**Debug Steps**:
```bash
# Check Lambda has PostAuthentication trigger (not just PostConfirmation)
# Check Lambda execution logs
# Verify DynamoDB permissions in IAM role
```

---

## Go/No-Go Decision

### ✅ DEPLOY If:
- All 4 quick tests pass
- No errors in CloudWatch logs
- DynamoDB profiles created correctly
- Backward compatibility confirmed

### ❌ HOLD If:
- OAuth flow fails at any step
- Token exchange errors
- Lambda execution errors
- Critical UI issues

---

## Post-Deployment Quick Check (5 min)

After deploying to production:

```bash
# 1. Test production OAuth URL
https://grademychild.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?client_id=6sehatih95apslqtikic4sf39o&response_type=code&scope=email+openid+profile&redirect_uri=https://grademychild.com.au/auth/callback&identity_provider=Google

# 2. Complete one signup
# 3. Check CloudWatch logs
# 4. Verify DynamoDB profile created
# 5. Monitor error rates for 1 hour
```

---

## Quick Rollback (If Needed)

```bash
cd /Users/tendaimudavanhu/CODE/tutor/studymate/apps/web

# Checkout pre-OAuth version
git checkout 8b822e4 -- src/app/\(auth\)/

# Build and deploy
pnpm build
aws s3 sync out/ s3://onceoffresourcesstack-techxbucket00f18e48-h7seokhaha6q --delete
aws cloudfront create-invalidation --distribution-id E1WZZKB5A9CWD6 --paths "/*"

# Should be live in 5-10 minutes
```

---

## Testing Resources

**Detailed Testing Plan**: `docs/OAUTH_TESTING_PLAN.md`

**Key URLs**:
- Local: http://localhost:3000
- Production: https://grademychild.com.au
- Cognito Console: https://ap-southeast-2.console.aws.amazon.com/cognito
- Google Console: https://console.cloud.google.com
- CloudWatch Logs: https://ap-southeast-2.console.aws.amazon.com/cloudwatch/home

**Test Credentials**:
- Use personal Google account for OAuth
- Use test email for email/password flow
- Stripe test card: 4242 4242 4242 4242

---

## Next Steps After Testing

1. ✅ Complete testing using this checklist
2. ✅ Document any issues found
3. ✅ Fix critical issues
4. ✅ Review cleanup plan: `docs/AUTH_FLOW_CLEANUP_PLAN.md`
5. ✅ Get approval on cleanup approach
6. ✅ Implement approved changes
7. ✅ Deploy to production
8. ✅ Monitor for 24 hours

---

*Quick Reference - See OAUTH_TESTING_PLAN.md for full details*
*Last Updated: 2026-01-09*
