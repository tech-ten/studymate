import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { db, TABLE_NAME, getUserIdFromEvent } from '../lib/db';
import { success, badRequest, forbidden, serverError } from '../lib/response';
import Stripe from 'stripe';

// Lazy initialization to avoid crash when STRIPE_SECRET_KEY is not set
let stripe: Stripe | null = null;
function getStripe(): Stripe {
  if (!stripe) {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      throw new Error('STRIPE_SECRET_KEY environment variable is not configured');
    }
    stripe = new Stripe(secretKey);
  }
  return stripe;
}

const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';

// Price IDs - set these in your Stripe dashboard
const PRICE_IDS: Record<string, string> = {
  explorer: process.env.STRIPE_PRICE_EXPLORER || 'price_explorer',
  scholar: process.env.STRIPE_PRICE_SCHOLAR || 'price_scholar',
  achiever: process.env.STRIPE_PRICE_ACHIEVER || 'price_achiever',
};

// Trial periods per plan (in days)
const TRIAL_DAYS: Record<string, number> = {
  explorer: 21,
  scholar: 14,
  achiever: 14,
};

// Tier limits configuration
const TIER_LIMITS = {
  free: {
    maxChildren: 2,
    dailyQuestions: 20,
    dailyAiCalls: 10,
  },
  explorer: {
    maxChildren: 2,
    dailyQuestions: 20,
    dailyAiCalls: 10,
  },
  scholar: {
    maxChildren: 5,
    dailyQuestions: -1, // unlimited
    dailyAiCalls: -1,
  },
  achiever: {
    maxChildren: 10,
    dailyQuestions: -1,
    dailyAiCalls: -1,
  },
};

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
  try {
    const path = event.rawPath;
    const method = event.requestContext.http.method;

    // POST /payments/create-checkout - Create Stripe Checkout session
    if (path === '/payments/create-checkout' && method === 'POST') {
      const userId = getUserIdFromEvent(event);
      if (!userId) {
        return forbidden('Authentication required');
      }

      const body = JSON.parse(event.body || '{}');
      const { plan } = body;

      if (!plan || !['explorer', 'scholar', 'achiever'].includes(plan)) {
        return badRequest('Invalid plan. Must be "explorer", "scholar", or "achiever"');
      }

      // Get user email for pre-filling
      const userResult = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: { PK: `USER#${userId}`, SK: 'PROFILE' },
      }));

      const userEmail = userResult.Item?.email;

      // Create Stripe Checkout session with plan-specific trial period
      const trialDays = TRIAL_DAYS[plan] || 14;
      const session = await getStripe().checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        customer_email: userEmail,
        line_items: [
          {
            price: PRICE_IDS[plan],
            quantity: 1,
          },
        ],
        metadata: {
          userId,
          plan,
        },
        success_url: `${process.env.FRONTEND_URL || 'https://tutor.agentsform.ai'}/dashboard?payment=success`,
        cancel_url: `${process.env.FRONTEND_URL || 'https://tutor.agentsform.ai'}/pricing?payment=cancelled`,
        subscription_data: {
          trial_period_days: trialDays,
          metadata: {
            userId,
            plan,
          },
        },
      });

      return success({ sessionId: session.id, url: session.url });
    }

    // POST /payments/webhook - Stripe webhook handler
    if (path === '/payments/webhook' && method === 'POST') {
      const sig = event.headers['stripe-signature'];

      if (!sig) {
        return badRequest('Missing stripe-signature header');
      }

      let stripeEvent: Stripe.Event;

      try {
        stripeEvent = getStripe().webhooks.constructEvent(
          event.body || '',
          sig,
          STRIPE_WEBHOOK_SECRET
        );
      } catch (err) {
        console.error('Webhook signature verification failed:', err);
        return badRequest('Webhook signature verification failed');
      }

      // Handle the event
      switch (stripeEvent.type) {
        case 'checkout.session.completed': {
          const session = stripeEvent.data.object as Stripe.Checkout.Session;
          const userId = session.metadata?.userId;
          const plan = session.metadata?.plan;
          const customerId = session.customer as string;

          if (userId && plan) {
            await updateUserTier(userId, plan, session.subscription as string, customerId);
          }
          break;
        }

        case 'customer.subscription.updated': {
          const subscription = stripeEvent.data.object as Stripe.Subscription;
          const userId = subscription.metadata?.userId;
          const customerId = subscription.customer as string;

          if (userId) {
            const priceId = subscription.items.data[0]?.price.id;
            let plan = 'explorer';
            if (priceId === PRICE_IDS.achiever) plan = 'achiever';
            else if (priceId === PRICE_IDS.scholar) plan = 'scholar';
            const status = subscription.status;

            // Active or trialing subscriptions get the paid tier
            if (status === 'active' || status === 'trialing') {
              await updateUserTier(userId, plan, subscription.id, customerId);
            } else if (status === 'canceled' || status === 'unpaid') {
              await updateUserTier(userId, 'free', null, null);
            }
          }
          break;
        }

        case 'customer.subscription.deleted': {
          const subscription = stripeEvent.data.object as Stripe.Subscription;
          const userId = subscription.metadata?.userId;

          if (userId) {
            // Keep customerId so user can re-subscribe through portal
            await updateUserTier(userId, 'free', null, null);
          }
          break;
        }

        default:
          console.log(`Unhandled event type: ${stripeEvent.type}`);
      }

      return success({ received: true });
    }

    // GET /payments/portal - Create Stripe customer portal session
    if (path === '/payments/portal' && method === 'GET') {
      const userId = getUserIdFromEvent(event);
      if (!userId) {
        return forbidden('Authentication required');
      }

      // Get user's Stripe customer ID
      const userResult = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: { PK: `USER#${userId}`, SK: 'PROFILE' },
      }));

      const customerId = userResult.Item?.stripeCustomerId;

      if (!customerId) {
        return badRequest('No subscription found. Please subscribe first.');
      }

      const session = await getStripe().billingPortal.sessions.create({
        customer: customerId,
        return_url: `${process.env.FRONTEND_URL || 'https://tutor.agentsform.ai'}/dashboard`,
      });

      return success({ url: session.url });
    }

    // GET /payments/status - Get current subscription status
    if (path === '/payments/status' && method === 'GET') {
      const userId = getUserIdFromEvent(event);
      if (!userId) {
        return forbidden('Authentication required');
      }

      const userResult = await db.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: { PK: `USER#${userId}`, SK: 'PROFILE' },
      }));

      const user = userResult.Item;

      return success({
        tier: user?.tier || 'free',
        subscriptionId: user?.stripeSubscriptionId || null,
        limits: TIER_LIMITS[user?.tier as keyof typeof TIER_LIMITS] || TIER_LIMITS.free,
      });
    }

    return badRequest('Invalid endpoint');
  } catch (error) {
    console.error('Payment handler error:', error);
    return serverError();
  }
}

async function updateUserTier(
  userId: string,
  tier: string,
  subscriptionId: string | null,
  customerId: string | null
): Promise<void> {
  const now = new Date().toISOString();

  // Build update expression dynamically
  // Use if_not_exists for createdAt to preserve it if profile already exists
  // This gracefully handles both new and existing profiles
  let updateExpr = 'SET tier = :tier, stripeSubscriptionId = :subId, updatedAt = :now, createdAt = if_not_exists(createdAt, :now)';
  const exprValues: Record<string, unknown> = {
    ':tier': tier,
    ':subId': subscriptionId,
    ':now': now,
  };

  // Only update customerId if provided (don't overwrite with null on subscription delete)
  if (customerId) {
    updateExpr += ', stripeCustomerId = :custId';
    exprValues[':custId'] = customerId;
  }

  await db.send(new UpdateCommand({
    TableName: TABLE_NAME,
    Key: { PK: `USER#${userId}`, SK: 'PROFILE' },
    UpdateExpression: updateExpr,
    ExpressionAttributeValues: exprValues,
  }));

  console.log(`Updated user ${userId} to tier ${tier}${customerId ? ` with customer ${customerId}` : ''}`);
}
