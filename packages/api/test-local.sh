#!/bin/bash

# Local Lambda Testing Script
# Tests OAuth backend changes without deploying to AWS

set -e

echo "======================================"
echo "Local Lambda Testing"
echo "======================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Environment variables
export TABLE_NAME=agentsform-main
export AWS_REGION=ap-southeast-2
export USER_POOL_ID=ap-southeast-2_KQjSkcKvP

# Build TypeScript
echo -e "${YELLOW}Building TypeScript...${NC}"
cd "$(dirname "$0")"
npm run build
echo -e "${GREEN}✓ Build complete${NC}"
echo ""

# Test 1: Email signup (PostConfirmation)
echo -e "${YELLOW}Test 1: Email user signup${NC}"
echo "Testing PostConfirmation trigger with email user..."
node -e "
const handler = require('./dist/handlers/cognito-trigger').handler;
const event = require('./test-events/email-existing-user.json');

handler(event, {})
  .then(result => {
    console.log('${GREEN}✓ Email signup successful${NC}');
    console.log('Result:', JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.error('${RED}✗ Email signup failed:${NC}', err);
    process.exit(1);
  });
"
echo ""

# Test 2: OAuth new user (PostAuthentication)
echo -e "${YELLOW}Test 2: OAuth new user signup${NC}"
echo "Testing PostAuthentication trigger with new OAuth user..."
node -e "
const handler = require('./dist/handlers/cognito-trigger').handler;
const event = require('./test-events/oauth-new-user.json');

handler(event, {})
  .then(result => {
    console.log('${GREEN}✓ OAuth signup successful${NC}');
    console.log('Result:', JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.error('${RED}✗ OAuth signup failed:${NC}', err);
    process.exit(1);
  });
"
echo ""

# Test 3: OAuth account linking
echo -e "${YELLOW}Test 3: OAuth account linking (email → OAuth)${NC}"
echo "Testing account linking when OAuth user matches existing email..."
node -e "
const handler = require('./dist/handlers/cognito-trigger').handler;
const event = require('./test-events/oauth-link-account.json');

handler(event, {})
  .then(result => {
    console.log('${GREEN}✓ Account linking successful${NC}');
    console.log('Result:', JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.error('${RED}✗ Account linking failed:${NC}', err);
    process.exit(1);
  });
"
echo ""

# Test 4: PUT /users/tier endpoint
echo -e "${YELLOW}Test 4: Update user tier (PUT /users/tier)${NC}"
echo "Testing tier update endpoint..."
node -e "
const handler = require('./dist/handlers/user').handler;
const event = require('./test-events/put-user-tier.json');

handler(event, {})
  .then(result => {
    console.log('${GREEN}✓ Tier update successful${NC}');
    console.log('Result:', JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.error('${RED}✗ Tier update failed:${NC}', err);
    process.exit(1);
  });
"
echo ""

echo "======================================"
echo -e "${GREEN}All tests completed!${NC}"
echo "======================================"
echo ""
echo "Next steps:"
echo "1. Check CloudWatch logs for any warnings"
echo "2. Verify DynamoDB records were created correctly"
echo "3. Test admin view with: npm run test:admin"
