#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AuthStack } from './stacks/auth-stack';
import { DatabaseStack } from './stacks/database-stack';
import { ApiStack } from './stacks/api-stack';

const app = new cdk.App();

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: 'ap-southeast-2', // Sydney for Australian data residency
};

// Database stack (DynamoDB)
const databaseStack = new DatabaseStack(app, 'AgentsFormDatabase', { env });

// Auth stack (Cognito)
const authStack = new AuthStack(app, 'AgentsFormAuth', { env });

// API stack (API Gateway + Lambda)
const apiStack = new ApiStack(app, 'AgentsFormApi', {
  env,
  table: databaseStack.table,
  userPool: authStack.userPool,
  userPoolClient: authStack.userPoolClient,
});

// Add dependencies
apiStack.addDependency(databaseStack);
apiStack.addDependency(authStack);
