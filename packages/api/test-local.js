#!/usr/bin/env node

/**
 * Local Lambda Testing Script
 * Tests OAuth backend changes without deploying to AWS
 *
 * Usage:
 *   node test-local.js
 *   node test-local.js --test=oauth-new-user
 *   node test-local.js --test=account-linking
 */

const fs = require('fs');
const path = require('path');

// Environment setup
process.env.TABLE_NAME = process.env.TABLE_NAME || 'agentsform-main';
process.env.AWS_REGION = process.env.AWS_REGION || 'ap-southeast-2';
process.env.USER_POOL_ID = process.env.USER_POOL_ID || 'ap-southeast-2_KQjSkcKvP';

// Colors
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
};

function log(color, ...args) {
  console.log(colors[color], ...args, colors.reset);
}

async function runTest(testName, handlerPath, eventPath) {
  log('yellow', `\n📝 Testing: ${testName}`);

  try {
    // Load handler
    const handler = require(handlerPath).handler;

    // Load test event
    const event = JSON.parse(fs.readFileSync(eventPath, 'utf8'));

    // Execute handler
    const result = await handler(event, {});

    log('green', `✓ ${testName} passed`);
    console.log('Result:', JSON.stringify(result, null, 2));

    return { success: true, result };
  } catch (err) {
    log('red', `✗ ${testName} failed`);
    console.error('Error:', err.message);
    console.error('Stack:', err.stack);

    return { success: false, error: err };
  }
}

async function main() {
  log('blue', '\n========================================');
  log('blue', '  Local Lambda Testing');
  log('blue', '========================================\n');

  // Parse command line args
  const args = process.argv.slice(2);
  const testArg = args.find(arg => arg.startsWith('--test='));
  const specificTest = testArg ? testArg.split('=')[1] : null;

  // Check if TypeScript is built
  const distPath = path.join(__dirname, 'dist');
  if (!fs.existsSync(distPath)) {
    log('yellow', '⚠️  TypeScript not built. Running build...');
    const { execSync } = require('child_process');
    try {
      execSync('npm run build', { stdio: 'inherit', cwd: __dirname });
      log('green', '✓ Build complete\n');
    } catch (err) {
      log('red', '✗ Build failed. Please run: npm run build');
      process.exit(1);
    }
  }

  const tests = [
    {
      name: 'email-signup',
      description: 'Email user signup (PostConfirmation)',
      handler: './dist/handlers/cognito-trigger',
      event: './test-events/email-existing-user.json',
    },
    {
      name: 'oauth-new-user',
      description: 'OAuth new user signup (PostAuthentication)',
      handler: './dist/handlers/cognito-trigger',
      event: './test-events/oauth-new-user.json',
    },
    {
      name: 'account-linking',
      description: 'OAuth account linking (email → OAuth)',
      handler: './dist/handlers/cognito-trigger',
      event: './test-events/oauth-link-account.json',
    },
    {
      name: 'update-tier',
      description: 'Update user tier (PUT /users/tier)',
      handler: './dist/handlers/user',
      event: './test-events/put-user-tier.json',
    },
  ];

  // Filter tests if specific test requested
  const testsToRun = specificTest
    ? tests.filter(t => t.name === specificTest)
    : tests;

  if (testsToRun.length === 0) {
    log('red', `Test "${specificTest}" not found`);
    log('yellow', '\nAvailable tests:');
    tests.forEach(t => console.log(`  - ${t.name}: ${t.description}`));
    process.exit(1);
  }

  // Run tests
  const results = [];
  for (const test of testsToRun) {
    const result = await runTest(
      test.description,
      path.join(__dirname, test.handler),
      path.join(__dirname, test.event)
    );
    results.push({ ...test, ...result });
  }

  // Summary
  log('blue', '\n========================================');
  log('blue', '  Test Summary');
  log('blue', '========================================\n');

  const passed = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  results.forEach(r => {
    const icon = r.success ? '✓' : '✗';
    const color = r.success ? 'green' : 'red';
    log(color, `${icon} ${r.description}`);
  });

  console.log('');
  log('blue', `Total: ${results.length} | Passed: ${passed} | Failed: ${failed}`);

  if (failed > 0) {
    log('red', '\n⚠️  Some tests failed. Check the output above for details.');
    process.exit(1);
  } else {
    log('green', '\n🎉 All tests passed!');
    log('yellow', '\nNext steps:');
    console.log('  1. Run migration: npm run migrate:oauth');
    console.log('  2. Deploy backend: cd ../../infrastructure/cdk && npm run deploy');
    console.log('  3. Test in production with real OAuth flow');
  }
}

main().catch(err => {
  log('red', '\n✗ Test runner crashed:');
  console.error(err);
  process.exit(1);
});
