import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { CognitoIdentityProviderClient, AdminUpdateUserAttributesCommand } from '@aws-sdk/client-cognito-identity-provider';
import { db, TABLE_NAME, getUserIdFromEvent } from '../lib/db';
import { success, badRequest, forbidden, serverError } from '../lib/response';

const cognitoClient = new CognitoIdentityProviderClient({ region: 'ap-southeast-2' });
const USER_POOL_ID = process.env.USER_POOL_ID || '';

/**
 * User management endpoints
 *
 * PUT /users/tier - Update user's subscription tier and sync with Cognito
 */
export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
  try {
    const path = event.rawPath;
    const method = event.requestContext.http.method;

    // PUT /users/tier - Update user tier (for free tier selection during OAuth)
    if (path === '/users/tier' && method === 'PUT') {
      const userId = getUserIdFromEvent(event);
      if (!userId) {
        return forbidden('Authentication required');
      }

      const body = JSON.parse(event.body || '{}');
      const { tier } = body;

      // Validate tier
      const validTiers = ['free', 'explorer', 'scholar', 'achiever'];
      if (!tier || !validTiers.includes(tier)) {
        return badRequest('Invalid tier specified');
      }

      const now = new Date().toISOString();

      try {
        // Update DynamoDB
        await db.send(new UpdateCommand({
          TableName: TABLE_NAME,
          Key: { PK: `USER#${userId}`, SK: 'PROFILE' },
          UpdateExpression: 'SET tier = :tier, updatedAt = :now',
          ExpressionAttributeValues: {
            ':tier': tier,
            ':now': now,
          },
        }));

        // Update Cognito custom:tier attribute to keep it in sync
        await cognitoClient.send(new AdminUpdateUserAttributesCommand({
          UserPoolId: USER_POOL_ID,
          Username: userId,
          UserAttributes: [
            {
              Name: 'custom:tier',
              Value: tier,
            },
          ],
        }));

        console.log(`Updated user ${userId} to tier ${tier} in both DynamoDB and Cognito`);

        return success({ success: true, tier });
      } catch (err) {
        console.error('Error updating tier:', err);
        return serverError('Failed to update tier');
      }
    }

    return badRequest('Invalid endpoint');
  } catch (error) {
    console.error('User handler error:', error);
    return serverError();
  }
}
