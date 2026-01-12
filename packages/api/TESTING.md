# Local Testing Guide

## Quick Start

```bash
cd packages/api

# Build TypeScript
npm run build

# Run all tests
npm run test:local

# Run specific tests
npm run test:oauth         # Test OAuth new user signup
npm run test:linking       # Test OAuth account linking
```

## Available Tests

### 1. Email User Signup
Tests PostConfirmation trigger for email/password signup.

```bash
node test-local.js --test=email-signup
```

**What it tests**:
- Creates user with `auth_method='email'`
- Sets `linked_accounts=['cognito:email']`
- User profile created in DynamoDB

### 2. OAuth New User
Tests PostAuthentication trigger for new OAuth user.

```bash
npm run test:oauth
```

**What it tests**:
- Creates OAuth user with `auth_method='oauth'`
- Sets `oauth_provider='google'`
- Sets `linked_accounts=['oauth:google']`
- User redirected to tier selection

### 3. Account Linking
Tests OAuth login for existing email user (unification).

```bash
npm run test:linking
```

**What it tests**:
- Finds existing email user by email
- Updates to `auth_method='both'`
- Adds OAuth info: `oauth_provider`, `oauth_sub`
- Appends to `linked_accounts`
- Syncs tier from DynamoDB to Cognito

### 4. Update User Tier
Tests PUT /users/tier endpoint.

```bash
node test-local.js --test=update-tier
```

**What it tests**:
- Updates tier in DynamoDB
- Syncs tier to Cognito custom:tier attribute
- Returns success response

## Test Events

Test events are in `/test-events/`:

- `email-existing-user.json` - Email signup event
- `oauth-new-user.json` - New OAuth user event
- `oauth-link-account.json` - OAuth linking to existing email user
- `put-user-tier.json` - Tier update API request

You can modify these events to test different scenarios.

## Environment Variables

Tests use these environment variables (set automatically):

```bash
TABLE_NAME=agentsform-main
AWS_REGION=ap-southeast-2
USER_POOL_ID=ap-southeast-2_KQjSkcKvP
```

To override:

```bash
TABLE_NAME=my-table npm run test:local
```

## Migration Testing

Test migration script before executing:

```bash
# Dry run (safe - doesn't modify data)
npm run migrate:oauth

# Execute migration (modifies DynamoDB)
npm run migrate:oauth:execute
```

## Debugging

### Check Built Files
```bash
ls -la dist/handlers/
# Should show:
# - cognito-trigger.js
# - user.js
# - admin.js
```

### Test Individual Handler
```bash
node -e "
const handler = require('./dist/handlers/cognito-trigger').handler;
const event = require('./test-events/oauth-new-user.json');
handler(event, {}).then(console.log).catch(console.error);
"
```

### Check DynamoDB (after running tests)
```bash
aws dynamodb get-item \
  --table-name agentsform-main \
  --key '{"PK":{"S":"USER#test-oauth-user-123"},"SK":{"S":"PROFILE"}}' \
  --region ap-southeast-2
```

## Common Issues

### "Cannot find module './dist/handlers/...'"
**Solution**: Run `npm run build` first

### "Module did not self-register"
**Solution**: Rebuild node_modules: `rm -rf node_modules && npm install`

### "AccessDeniedException" from AWS
**Solution**: Tests write to real DynamoDB. Ensure AWS credentials are configured:
```bash
aws configure
# Or use environment variables:
export AWS_PROFILE=your-profile
```

### Test passes but data not in DynamoDB
**Check**: Test events use fake user IDs like `test-oauth-user-123`. Look for these IDs in DynamoDB.

## Integration Testing

After local tests pass, test with real OAuth flow:

1. Start local dev server: `cd apps/web && npm run dev`
2. Open http://localhost:3000/get-started
3. Click "Continue with Google"
4. Complete OAuth flow
5. Check CloudWatch logs: `aws logs tail /aws/lambda/cognito-trigger --follow`
6. Verify user in DynamoDB
7. Check admin view

## Next Steps

After local tests pass:

1. ✅ Run migration script (dry-run first!)
2. ✅ Deploy backend: `cd infrastructure/cdk && npm run deploy`
3. ✅ Test email/password login (must not break!)
4. ✅ Test OAuth signup flow
5. ✅ Test account linking
6. ✅ Verify admin view shows OAuth data
