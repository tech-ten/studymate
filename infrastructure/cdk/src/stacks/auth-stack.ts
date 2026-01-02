import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

interface AuthStackProps extends cdk.StackProps {
  table: dynamodb.Table;
}

export class AuthStack extends cdk.Stack {
  public readonly userPool: cognito.UserPool;
  public readonly userPoolClient: cognito.UserPoolClient;

  constructor(scope: Construct, id: string, props: AuthStackProps) {
    super(scope, id, props);

    const { table } = props;

    // Post-confirmation Lambda trigger to create user profile in DynamoDB
    const postConfirmationTrigger = new lambda.Function(this, 'PostConfirmationTrigger', {
      functionName: 'agentsform-post-confirmation',
      runtime: lambda.Runtime.NODEJS_20_X,
      architecture: lambda.Architecture.ARM_64,
      handler: 'handlers/cognito-trigger.handler',
      code: lambda.Code.fromAsset('../../packages/api/dist'),
      memorySize: 128,
      timeout: cdk.Duration.seconds(10),
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    // Grant DynamoDB write access to the trigger
    table.grantWriteData(postConfirmationTrigger);

    // User pool for parent accounts
    this.userPool = new cognito.UserPool(this, 'AgentsFormUserPool', {
      userPoolName: 'agentsform-users',
      selfSignUpEnabled: true,
      signInAliases: {
        email: true,
      },
      autoVerify: {
        email: true,
      },
      standardAttributes: {
        email: {
          required: true,
          mutable: true,
        },
        fullname: {
          required: true,
          mutable: true,
        },
      },
      customAttributes: {
        tier: new cognito.StringAttribute({ mutable: true }),
        stripeCustomerId: new cognito.StringAttribute({ mutable: true }),
      },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: false,
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      // Add post-confirmation trigger
      lambdaTriggers: {
        postConfirmation: postConfirmationTrigger,
      },
    });

    // App client for Next.js
    this.userPoolClient = this.userPool.addClient('AgentsFormWebClient', {
      userPoolClientName: 'agentsform-web',
      authFlows: {
        userPassword: true,
        userSrp: true,
      },
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
        },
        scopes: [cognito.OAuthScope.EMAIL, cognito.OAuthScope.OPENID, cognito.OAuthScope.PROFILE],
        callbackUrls: [
          'http://localhost:3000/api/auth/callback',
          'https://agentsform.ai/api/auth/callback',
        ],
        logoutUrls: [
          'http://localhost:3000',
          'https://agentsform.ai',
        ],
      },
      preventUserExistenceErrors: true,
      generateSecret: false,
    });

    // Outputs
    new cdk.CfnOutput(this, 'UserPoolId', {
      value: this.userPool.userPoolId,
      exportName: 'AgentsFormUserPoolId',
    });

    new cdk.CfnOutput(this, 'UserPoolClientId', {
      value: this.userPoolClient.userPoolClientId,
      exportName: 'AgentsFormUserPoolClientId',
    });

    new cdk.CfnOutput(this, 'UserPoolArn', {
      value: this.userPool.userPoolArn,
      exportName: 'AgentsFormUserPoolArn',
    });
  }
}
