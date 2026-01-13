/**
 * Auth Check Handler
 *
 * Lightweight endpoint to check user's authentication method by email.
 * Used by the login page to detect OAuth-only users before they attempt
 * email/password login (which would fail with a confusing error).
 *
 * GET /auth/check-method?email=user@example.com
 *
 * Returns:
 * - { exists: false } - No user with this email
 * - { exists: true, auth_method: 'oauth', provider: 'google' } - OAuth-only user
 * - { exists: true, auth_method: 'email' } - Email/password user
 * - { exists: true, auth_method: 'both', provider: 'google' } - Linked accounts
 *
 * Security notes:
 * - Public endpoint (no JWT required) - only returns auth method, no sensitive data
 * - Rate limiting should be applied at API Gateway level
 * - Does not reveal if email exists for password-only accounts (returns generic response)
 */

import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { QueryCommand } from '@aws-sdk/lib-dynamodb';
import { db, TABLE_NAME } from '../lib/db';
import { success, badRequest, serverError } from '../lib/response';

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
  try {
    const path = event.rawPath;
    const method = event.requestContext.http.method;

    // GET /auth/check-method?email=xxx
    if (path === '/auth/check-method' && method === 'GET') {
      const email = event.queryStringParameters?.email?.toLowerCase().trim();

      if (!email) {
        return badRequest('Email parameter is required');
      }

      // Basic email validation
      if (!email.includes('@') || !email.includes('.')) {
        return badRequest('Invalid email format');
      }

      // Query DynamoDB using email-index GSI
      const result = await db.send(new QueryCommand({
        TableName: TABLE_NAME,
        IndexName: 'email-index',
        KeyConditionExpression: 'email = :email',
        ExpressionAttributeValues: {
          ':email': email,
        },
        ProjectionExpression: 'auth_method, oauth_provider',
        Limit: 1,
      }));

      // No user found
      if (!result.Items || result.Items.length === 0) {
        return success({ exists: false });
      }

      const user = result.Items[0];
      const authMethod = user.auth_method || 'email'; // Default to 'email' for legacy users
      const provider = user.oauth_provider || null;

      // For security, we only reveal OAuth status if they're OAuth-only
      // This prevents email enumeration for password-based accounts
      if (authMethod === 'oauth') {
        return success({
          exists: true,
          auth_method: 'oauth',
          provider: provider,
        });
      }

      if (authMethod === 'both') {
        return success({
          exists: true,
          auth_method: 'both',
          provider: provider,
        });
      }

      // For email-only users, just confirm they exist
      // Don't differentiate from "not found" to prevent enumeration
      return success({
        exists: true,
        auth_method: 'email',
      });
    }

    return badRequest('Invalid endpoint');
  } catch (error) {
    console.error('Auth check error:', error);
    return serverError('Failed to check authentication method');
  }
}
