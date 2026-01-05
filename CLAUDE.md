# StudyMate - Claude Code Context

## Project Overview

StudyMate (branded as "Grade My Child") is an AI-powered curriculum grading platform for Australian primary school students (Years 3-6), aligned to the Victorian curriculum. Live at https://grademychild.com.au (legacy: https://tutor.agentsform.ai)

---

## Critical Files & Documentation

### Documentation
| File | Purpose |
|------|---------|
| `PRODUCT.md` | Feature overview, user journeys, technical architecture |
| `BUSINESS_PLAN.md` | Marketing strategy, family roles, financial projections |
| `PHASE2_PLAN.md` | AWS resources, API docs, development tasks |
| `docs/INVESTOR_DECK.md` | Business overview, competitive analysis, roadmap |
| `docs/DEVELOPER_GUIDE.md` | Architecture, API reference, deployment guide |
| `docs/AI_PROMPT_ENGINEERING.md` | ⭐ AI prompt strategies, year-level customization, token limits |
| `docs/PARENT_GUIDE.md` | User guide for parents |
| `docs/STUDENT_GUIDE.md` | User guide for children |
| `docs/LEGAL_COMPLIANCE.md` | Privacy Act, data protection |

### Key Code Files
| File | Purpose |
|------|---------|
| `infrastructure/cdk/src/stacks/api-stack.ts` | Lambda functions, API Gateway, environment variables |
| `packages/api/src/handlers/payment.ts` | Stripe webhook handler, subscription management |
| `packages/api/src/handlers/ai.ts` | ⭐ Groq AI integration with year-level prompting |
| `packages/api/src/handlers/curriculum.ts` | Curriculum API with multi-year fallback logic |
| `apps/web/src/lib/api.ts` | Frontend API client |
| `apps/web/src/lib/auth.ts` | Cognito authentication |
| `apps/web/src/app/(student)/learn/page.tsx` | ⭐ Main learning interface with quiz scroll fix |
| `packages/curriculum/src/maths/` | Victorian curriculum data (Year 1, 3-6, 8) |

---

## AWS Infrastructure

### Architecture Diagram
```
┌─────────────────────────────────────────────────────────────┐
│                      CLOUDFRONT                              │
│              grademychild.com.au (primary)                   │
│              tutor.agentsform.ai (legacy)                    │
│              Distribution: E1WZZKB5A9CWD6                    │
└─────────────────────────────────────────────────────────────┘
                            │
         ┌──────────────────┴──────────────────┐
         ▼                                      ▼
┌─────────────────┐                  ┌─────────────────────────┐
│       S3        │                  │      API GATEWAY        │
│  Static Assets  │                  │   HTTP API (v2)         │
│  Next.js Export │                  │  yhn9tli08d.execute-api │
└─────────────────┘                  └─────────────────────────┘
                                                │
                    ┌───────────────────────────┼───────────────────────────┐
                    ▼                           ▼                           ▼
          ┌─────────────────┐        ┌─────────────────┐        ┌─────────────────┐
          │     LAMBDA      │        │     LAMBDA      │        │     LAMBDA      │
          │   (Handlers)    │        │    (AI/Groq)    │        │   (Payments)    │
          │   Node 20 ARM   │        │    256MB        │        │    Stripe       │
          └─────────────────┘        └─────────────────┘        └─────────────────┘
                    │                           │                           │
                    └───────────────────────────┼───────────────────────────┘
                                                ▼
                              ┌─────────────────────────────────┐
                              │           DYNAMODB              │
                              │       agentsform-main           │
                              │      Single-table design        │
                              └─────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        COGNITO                               │
│              ap-southeast-2_KQjSkcKvP                        │
│              Parent authentication                           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    EXTERNAL SERVICES                         │
├─────────────────────────────────────────────────────────────┤
│  Groq API (LLaMA 3.3 70B) - AI Tutor                        │
│  Stripe - Payments & Subscriptions                           │
└─────────────────────────────────────────────────────────────┘
```

### AWS Resource IDs
| Resource | ID/ARN |
|----------|--------|
| **CloudFront** | `E1WZZKB5A9CWD6` |
| **CloudFront Domain** | `d2o8yut6q5cqmv.cloudfront.net` |
| **SSL Certificate (new)** | `arn:aws:acm:us-east-1:308045886682:certificate/46c8b726-4819-48e6-b691-5f33bf5b4108` |
| **SSL Certificate (legacy)** | `arn:aws:acm:us-east-1:308045886682:certificate/8048c522-52c9-4a5e-af4d-6fa723524c42` |
| **Route53 Hosted Zone** | `Z09881502H85UWWFLHT54` (grademychild.com.au) |
| **S3 Bucket** | `onceoffresourcesstack-techxbucket00f18e48-h7seokhaha6q` |
| **API Gateway** | `yhn9tli08d.execute-api.ap-southeast-2.amazonaws.com` |
| **Cognito User Pool** | `ap-southeast-2_KQjSkcKvP` |
| **Cognito Client ID** | `6sehatih95apslqtikic4sf39o` |
| **DynamoDB Table** | `agentsform-main` |
| **AWS Account** | `308045886682` |
| **Region** | `ap-southeast-2` (Sydney) |

---

## API Keys & Secrets

### Location
All secrets stored in `.env` file (gitignored):
```
/Users/tendaimudavanhu/CODE/tutor/studymate/.env
```

### Required Environment Variables
| Variable | Purpose |
|----------|---------|
| `GROQ_API_KEY` | AI tutor (LLaMA 3.3 70B) |
| `STRIPE_SECRET_KEY` | Payment processing |
| `STRIPE_WEBHOOK_SECRET` | Webhook signature verification |
| `STRIPE_PRICE_EXPLORER` | $0.99/mo Explorer tier price ID |
| `STRIPE_PRICE_SCHOLAR` | $5/mo Scholar tier price ID |
| `STRIPE_PRICE_ACHIEVER` | $12/mo Achiever tier price ID |
| `ADMIN_API_KEY` | Admin dashboard access |

---

## Deployment

### Prerequisites
```bash
# 1. Source environment variables FIRST
cd /Users/tendaimudavanhu/CODE/tutor/studymate
source .env

# 2. Verify keys are loaded
echo $GROQ_API_KEY | head -c 10  # Should show first 10 chars
```

### Deploy Commands
```bash
# Deploy infrastructure (Lambda, API Gateway)
cd infrastructure/cdk
npx cdk deploy --all

# Build and deploy frontend
cd /Users/tendaimudavanhu/CODE/tutor/studymate
pnpm --filter @studymate/web build
aws s3 sync apps/web/out s3://onceoffresourcesstack-techxbucket00f18e48-h7seokhaha6q --delete
aws cloudfront create-invalidation --distribution-id E1WZZKB5A9CWD6 --paths "/*"
```

---

## PITFALLS TO AVOID

### 1. Losing API Keys on Deploy
**Problem**: CDK reads from `process.env` which is empty if `.env` not sourced
**Solution**: ALWAYS run `source .env` before `npx cdk deploy`
**Verification**: After deploy, test AI endpoint to confirm keys work

### 2. Stripe Customer ID Not Saved
**Problem**: Billing portal fails because `stripeCustomerId` is null
**Solution**: Already fixed in `payment.ts` - extracts `session.customer` on checkout.session.completed
**Location**: `packages/api/src/handlers/payment.ts:50-60`

### 3. Child Endpoints Using Auth
**Problem**: Children don't have Cognito tokens - API calls fail
**Solution**: Child endpoints use direct `fetch()` without auth headers
**Rule**: NEVER use `apiFetch()` for child session endpoints
**Location**: `apps/web/src/lib/api.ts`

### 4. CloudFront Cache
**Problem**: Frontend changes not visible after deploy
**Solution**: Always invalidate CloudFront cache after S3 sync
```bash
aws cloudfront create-invalidation --distribution-id E1WZZKB5A9CWD6 --paths "/*"
```

### 5. Static Export Routing
**Problem**: Direct page access returns 403/404
**Solution**: CloudFront error pages configured to return index.html
**Already configured**: 403 and 404 → /index.html with 200 response

---

## Authentication Model

### Two Session Types
| Session Type | Auth Method | Used For |
|--------------|-------------|----------|
| **Parent** | Cognito JWT token via `apiFetch()` | Dashboard, child management, progress |
| **Child** | localStorage only (no auth header) | Learning, quizzes, AI chat |

### API Auth Requirements
| Endpoint | Auth Required |
|----------|---------------|
| `POST /children` | Yes (parent) |
| `GET /children` | Yes (parent) |
| `POST /children/login` | No |
| `POST /ai/chat` | No |
| `POST /ai/explain` | No |
| `POST /quiz/save` | No |
| `GET /progress/{childId}` | Yes (parent) |
| `POST /payments/webhook` | No (Stripe signature) |

---

## Stripe Integration

### Webhook Events Handled
| Event | Action |
|-------|--------|
| `checkout.session.completed` | Create subscription, save customerId |
| `customer.subscription.updated` | Update tier, handle trial end |
| `customer.subscription.deleted` | Downgrade to free |
| `invoice.payment_failed` | (Future: notify user) |

### 14-Day Trial Flow
1. User selects plan on `/pricing`
2. Stripe Checkout with `trial_period_days: 14`
3. Card collected but not charged
4. Webhook sets `tier` immediately (trialing = active)
5. After 14 days, Stripe charges card
6. If payment fails, `subscription.deleted` webhook downgrades

### Billing Portal
- User clicks "Manage" button on dashboard
- Backend creates portal session via `stripe.billingPortal.sessions.create()`
- User can update card, cancel, view invoices

---

## Groq AI Integration

### Configuration
| Setting | Value |
|---------|-------|
| Model | `llama-3.3-70b-versatile` |
| Temperature | 0.7 |
| Max Tokens | 1024 |
| Rate Limit | 30 req/min (free tier) |

### System Prompt Context
- Child's year level (Year 3-6)
- Current subject/topic
- Victorian curriculum alignment
- Australian English

---

## Testing Endpoints

```bash
# AI Chat
curl -X POST https://yhn9tli08d.execute-api.ap-southeast-2.amazonaws.com/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"childId":"test","message":"What is 2+2?","yearLevel":5}'

# Admin Stats
curl "https://yhn9tli08d.execute-api.ap-southeast-2.amazonaws.com/admin/stats" \
  -H "x-admin-key: studymate-admin-2024"

# Health Check
curl https://grademychild.com.au
```

---

## Domain Configuration

### Primary Domain: grademychild.com.au
**Status**: SSL certificate pending validation (PENDING_VALIDATION)
**Certificate ARN**: `arn:aws:acm:us-east-1:308045886682:certificate/46c8b726-4819-48e6-b691-5f33bf5b4108`
**Route53 Hosted Zone**: `Z09881502H85UWWFLHT54`

**DNS Validation Records** (added to Route53):
```
_0ace852b7c4c47c8023d3e90ea6f9f89.grademychild.com.au. → _79050f05c2309dc982fe9f54b00b316e.jkddzztszm.acm-validations.aws.
_452befc523c7c9431ad047f353b9bdfc.www.grademychild.com.au. → _2f4c6d8b0f671a68ca5daddf43779e8b.jkddzztszm.acm-validations.aws.
```

**Next Steps** (once certificate validates):
1. Update CloudFront to add `grademychild.com.au` and `www.grademychild.com.au` as aliases
2. Update CloudFront certificate to use new ARN
3. Add A/AAAA records in Route53 pointing to CloudFront distribution
4. Test new domain
5. Configure redirect from legacy domain

### Legacy Domain: tutor.agentsform.ai
**Status**: Active
**Certificate ARN**: `arn:aws:acm:us-east-1:308045886682:certificate/8048c522-52c9-4a5e-af4d-6fa723524c42`
**Plan**: Will redirect to grademychild.com.au after migration

---

## Quick Reference

### URLs
| Resource | URL |
|----------|-----|
| Live Site (Primary) | https://grademychild.com.au (pending) |
| Live Site (Legacy) | https://tutor.agentsform.ai |
| Admin Dashboard | https://tutor.agentsform.ai/admin |
| API | https://yhn9tli08d.execute-api.ap-southeast-2.amazonaws.com |
| GitHub | https://github.com/tech-ten/studymate |

### Cost per User
| Service | Monthly Cost |
|---------|-------------|
| Lambda | $0.005 |
| API Gateway | $0.003 |
| DynamoDB | $0.008 |
| CloudFront | $0.004 |
| Groq AI | $0.015 |
| **Total** | **~$0.04** |

At $5/month subscription = **125x margin**
