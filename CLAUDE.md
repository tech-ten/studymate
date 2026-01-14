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
| `docs/USER_MANAGEMENT.md` | ⭐ User lifecycle, OAuth account linking, DynamoDB schema |
| `docs/OAUTH_ARCHITECTURE.md` | Google OAuth flow, account linking, Lambda triggers |

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

### CRITICAL: API CORS Configuration
**IMPORTANT**: API calls can ONLY be made from approved URLs configured in API Gateway CORS settings.

**Current Approved Origins** (infrastructure/cdk/src/stacks/api-stack.ts:37-44):
- `http://localhost:3000` (local development)
- `https://agentsform.ai`
- `https://agentsform.com`
- `https://tutor.agentsform.ai` (legacy domain)
- `https://grademychild.com.au` (primary domain)
- `https://www.grademychild.com.au`

**When Adding New Domains**:
1. Update `allowOrigins` array in api-stack.ts
2. Run `source .env && cd infrastructure/cdk && npx cdk deploy AgentsFormApi`
3. Test API calls from new domain immediately

**Symptom of CORS Block**: Users get infinite redirect to /pricing page because API calls fail silently, triggering error handlers.

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
| **CloudFront Distribution** | `E1WZZKB5A9CWD6` |
| **CloudFront Domain** | `d2o8yut6q5cqmv.cloudfront.net` |
| **SSL Certificate (Active)** | `1387398b-f819-42e3-b090-ba693f80f370` |
| **SSL Certificate ARN (Active)** | `arn:aws:acm:us-east-1:308045886682:certificate/1387398b-f819-42e3-b090-ba693f80f370` |
| **SSL Certificate (Legacy)** | `arn:aws:acm:us-east-1:308045886682:certificate/42524134-550c-41ab-80f2-5665eac1ee0d` (deleted) |
| **Route53 Hosted Zone (grademychild.com.au)** | `Z09881502H85UWWFLHT54` |
| **Route53 Hosted Zone (agentsform.ai)** | `Z0401224GBU1TTNNB67F` |
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
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

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

### 1. CORS Blocking New Domains ⚠️ MOST COMMON
**Problem**: New domain works for static site but all API calls fail silently with CORS errors
**Symptom**: Users stuck in infinite redirect to /pricing, dashboard won't load
**Solution**: Add new domain to API Gateway CORS allowOrigins in api-stack.ts
**Verification**: Open browser console, check for CORS errors in Network tab
**Example**: When adding grademychild.com.au, must add to allowOrigins or ALL API calls fail

### 2. Losing API Keys on Deploy
**Problem**: CDK reads from `process.env` which is empty if `.env` not sourced
**Solution**: ALWAYS run `source .env` before `npx cdk deploy`
**Verification**: After deploy, test AI endpoint to confirm keys work

### 3. Stripe Customer ID Not Saved
**Problem**: Billing portal fails because `stripeCustomerId` is null
**Solution**: Already fixed in `payment.ts` - extracts `session.customer` on checkout.session.completed
**Location**: `packages/api/src/handlers/payment.ts:50-60`

### 4. Child Endpoints Using Auth
**Problem**: Children don't have Cognito tokens - API calls fail
**Solution**: Child endpoints use direct `fetch()` without auth headers
**Rule**: NEVER use `apiFetch()` for child session endpoints
**Location**: `apps/web/src/lib/api.ts`

### 5. CloudFront Cache
**Problem**: Frontend changes not visible after deploy
**Solution**: Always invalidate CloudFront cache after S3 sync
```bash
aws cloudfront create-invalidation --distribution-id E1WZZKB5A9CWD6 --paths "/*"
```

### 6. Static Export Routing
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

### Google OAuth Integration
**Status**: ✅ **LIVE IN PRODUCTION** (deployed 2026-01-14)

#### Cognito OAuth Configuration
| Setting | Value |
|---------|-------|
| Cognito Domain | `auth.grademychild.com.au` |
| Client ID | `6sehatih95apslqtikic4sf39o` |
| Callback URL | `{origin}/callback` |
| Logout URL | `{origin}/oauth-redirect` |
| Identity Provider | Google |
| Google Client ID | `496794315636-lcosupe2cedmdcic63efi12kfsnke5fn.apps.googleusercontent.com` |

#### OAuth Flow Architecture
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        GOOGLE OAUTH FLOW                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  1. LOGIN/SIGNUP PAGE                                                        │
│     User clicks "Continue with Google" button                                │
│     └─ Redirect to: auth.grademychild.com.au/oauth2/authorize               │
│                                                                              │
│  2. COGNITO HOSTED UI                                                        │
│     Cognito redirects to Google                                              │
│     └─ User authenticates with Google account                               │
│                                                                              │
│  3. PRESIGNUP LAMBDA TRIGGER (new users or account linking)                  │
│     ├─ Check if email exists in Cognito (ListUsers API)                     │
│     ├─ If existing email/password user:                                     │
│     │   └─ Link OAuth identity (AdminLinkProviderForUser)                   │
│     │   └─ Throw USER_LINKED_TO_EXISTING_ACCOUNT error                      │
│     │   └─ Update DynamoDB: auth_method='both', linked_accounts=[...]       │
│     └─ If new user: Auto-confirm and auto-verify                            │
│                                                                              │
│  4. CALLBACK PAGE (/callback)                                                │
│     ├─ If USER_LINKED_TO_EXISTING_ACCOUNT error:                            │
│     │   └─ Set sessionStorage flag 'accountLinked'                          │
│     │   └─ Immediately retry OAuth (now succeeds with linked account)       │
│     ├─ Exchange authorization code for tokens                               │
│     ├─ Check user status via /payments/status API                           │
│     │   └─ Returning user (has tier) → /dashboard                           │
│     │   └─ New user → /choose-tier                                          │
│     └─ Store tokens in localStorage                                          │
│                                                                              │
│  5. DASHBOARD (for linked accounts)                                          │
│     └─ Check sessionStorage for 'accountLinked' flag                        │
│     └─ Show toast notification: "Google account linked"                     │
│     └─ Clear flag immediately (one-time display)                            │
│                                                                              │
│  6. POSTAUTHENTICATION LAMBDA TRIGGER (returning users)                      │
│     └─ Update lastLoginDate in DynamoDB                                      │
│     └─ Sync tier from DynamoDB to Cognito custom:tier                       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Key Files
| File | Purpose |
|------|---------|
| `apps/web/src/app/(auth)/callback/page.tsx` | OAuth callback handler, token exchange, account linking retry |
| `apps/web/src/app/(auth)/login/page.tsx` | Login with Google OAuth button |
| `apps/web/src/app/(auth)/get-started/page.tsx` | Signup with Google OAuth button |
| `apps/web/src/app/(auth)/oauth-redirect/page.tsx` | Logout redirect handler |
| `apps/web/src/app/(parent)/dashboard/page.tsx` | Account linked toast notification |
| `apps/web/src/lib/auth.ts` | `signOut()` with Cognito logout, `clearAllAuthState()` |
| `packages/api/src/handlers/cognito-trigger.ts` | PreSignUp, PostConfirmation, PostAuthentication triggers |
| `packages/api/src/handlers/auth-check.ts` | Check user auth method by email |
| `packages/api/src/handlers/user.ts` | PUT /users/tier endpoint |
| `infrastructure/cdk/src/stacks/auth-stack.ts` | Cognito User Pool, Google IdP, Lambda triggers |

#### Account Linking (PreSignUp Trigger)
When an email/password user clicks "Sign in with Google":
1. **PreSignUp_ExternalProvider** trigger fires
2. Lambda queries Cognito: `ListUsers` with email filter
3. If native user exists: `AdminLinkProviderForUser` links OAuth identity
4. Lambda throws `USER_LINKED_TO_EXISTING_ACCOUNT` error
5. Callback page catches error, sets sessionStorage flag, retries OAuth
6. Second OAuth attempt succeeds (identity now linked)
7. Dashboard shows toast: "Google account linked - You can now sign in with Google or your password"

#### DynamoDB User Fields for OAuth
| Field | Type | Description |
|-------|------|-------------|
| `auth_method` | String | `'email'`, `'oauth'`, or `'both'` |
| `oauth_provider` | String | `'google'`, `'facebook'`, `'apple'`, or `null` |
| `oauth_sub` | String | Cognito sub for OAuth users |
| `linked_accounts` | List | `['cognito:email', 'oauth:google']` |
| `signupMethod` | String | Original signup method: `'email'` or `'google'` |
| `identityProvider` | String | OAuth provider name or `null` |
| `firstLoginDate` | ISO String | For OAuth users (login immediately) |
| `lastLoginDate` | ISO String | Updated on each authentication |

#### Lambda Functions
| Function | Trigger | Purpose |
|----------|---------|---------|
| `agentsform-post-confirmation` | PreSignUp | Link OAuth to existing email accounts |
| `agentsform-post-confirmation` | PostConfirmation | Create profile for email signups |
| `agentsform-post-confirmation` | PostAuthentication | Update lastLoginDate, sync tier |
| `agentsform-authcheckhandler` | API Gateway | Check auth method by email |
| `agentsform-userhandler` | API Gateway | Update user tier (OAuth users) |

#### IAM Permissions for OAuth
The `agentsform-post-confirmation` Lambda requires:
```
cognito-idp:AdminUpdateUserAttributes  - Sync tier to Cognito
cognito-idp:AdminLinkProviderForUser   - Link OAuth to existing user
cognito-idp:ListUsers                   - Find existing user by email
```

#### Testing OAuth Account Linking
```bash
# Reset test user for re-testing (removes Google identity from Cognito)
aws cognito-idp admin-disable-provider-for-user \
  --user-pool-id ap-southeast-2_KQjSkcKvP \
  --user ProviderName=Google,ProviderAttributeName=Cognito_Subject,ProviderAttributeValue=<google-user-id> \
  --region ap-southeast-2

# Update DynamoDB to remove OAuth fields
aws dynamodb update-item \
  --table-name agentsform-main \
  --key '{"PK":{"S":"USER#<cognito-sub>"},"SK":{"S":"PROFILE"}}' \
  --update-expression "REMOVE oauth_provider, oauth_sub SET auth_method = :auth, linked_accounts = :accounts" \
  --expression-attribute-values '{":auth":{"S":"email"},":accounts":{"L":[{"S":"cognito:email"}]}}' \
  --region ap-southeast-2
```

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
| `GET /auth/check-method` | No (pre-login check) |
| `PUT /users/tier` | Yes (parent) |

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
**Status**: ✅ **LIVE IN PRODUCTION**
**Certificate ID**: `1387398b-f819-42e3-b090-ba693f80f370`
**Certificate ARN**: `arn:aws:acm:us-east-1:308045886682:certificate/1387398b-f819-42e3-b090-ba693f80f370`
**Certificate Status**: ISSUED
**Certificate SANs**: grademychild.com.au, www.grademychild.com.au, agentsform.ai, tutor.agentsform.ai
**Route53 Hosted Zone**: `Z09881502H85UWWFLHT54`
**CloudFront Distribution**: `E1WZZKB5A9CWD6`

**DNS Configuration**:
- `grademychild.com.au` → A/AAAA alias to `d2o8yut6q5cqmv.cloudfront.net`
- `www.grademychild.com.au` → A/AAAA alias to `d2o8yut6q5cqmv.cloudfront.net`

**CloudFront Aliases**: `grademychild.com.au`, `www.grademychild.com.au`, `agentsform.ai`, `tutor.agentsform.ai`

### Legacy Domains: agentsform.ai, tutor.agentsform.ai
**Status**: ✅ Active (shares same CloudFront distribution and certificate)
**Route53 Hosted Zone**: `Z0401224GBU1TTNNB67F`
**Certificate**: Same as primary domain (1387398b-f819-42e3-b090-ba693f80f370)
**Plan**: Keep active for existing users, primary domain is grademychild.com.au

---

## Quick Reference

### URLs
| Resource | URL |
|----------|-----|
| Live Site (Primary) | https://grademychild.com.au |
| Live Site (www) | https://www.grademychild.com.au |
| Live Site (Legacy) | https://tutor.agentsform.ai |
| Live Site (Legacy Root) | https://agentsform.ai |
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
