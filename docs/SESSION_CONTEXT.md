# StudyMate Session Context Document

**Last Updated:** January 4, 2026
**Git Commit:** `8ad6425` (docs: Add implementation plan for progress reports and cross-year grading)
**Status:** All changes committed and pushed to `main`

---

## Quick Start Prompt

Copy this prompt to start your next Claude Code session:

```
I'm continuing work on StudyMate (AI tutoring platform). Read the context document at:
/Users/tendaimudavanhu/CODE/tutor/studymate/docs/SESSION_CONTEXT.md

Current state:
- All infrastructure is deployed and working
- Family-scoped child login (parent email + child name + PIN) is live
- Child limit enforcement per subscription tier is implemented
- Planning document for progress reports & cross-year grading is ready

Next task: Begin implementing the Progress Reports & Cross-Year Grading feature.
Start with Phase 1 (Cross-Year Grading System) from docs/PLAN-progress-reports-cross-year-grading.md

Remember:
- Always run `pnpm build` in packages/api before CDK deploy
- Delete `cdk.out` folder to force Lambda code updates
- Source `.env` file before deploying
```

---

## Project Overview

**StudyMate** is an AI-powered tutoring platform for Australian students (Prep-Year 12).

| Component | Technology |
|-----------|------------|
| Frontend | Next.js 14 (static export) |
| Backend | AWS Lambda + API Gateway |
| Database | DynamoDB (single-table design) |
| Auth | AWS Cognito |
| AI | Groq (Llama 3.3 70B) |
| Payments | Stripe |
| Hosting | S3 + CloudFront |

---

## Live URLs

| Service | URL |
|---------|-----|
| **Frontend** | https://tutor.agentsform.ai |
| **API** | https://yhn9tli08d.execute-api.ap-southeast-2.amazonaws.com |
| **CloudFront (tutor)** | E1WZZKB5A9CWD6 |
| **S3 Bucket (tutor)** | onceoffresourcesstack-techxbucket00f18e48-h7seokhaha6q |

---

## AWS Infrastructure

### CloudFormation Stacks

| Stack | Purpose | Status |
|-------|---------|--------|
| `AgentsFormAuth` | Cognito User Pool | ACTIVE |
| `AgentsFormApi` | API Gateway + Lambdas | ACTIVE |
| `AgentsFormDatabase` | DynamoDB table | ACTIVE |

### Cognito

| Resource | Value |
|----------|-------|
| User Pool ID | `ap-southeast-2_KQjSkcKvP` |
| Client ID | `6sehatih95apslqtikic4sf39o` |
| Region | `ap-southeast-2` |

### DynamoDB

| Resource | Value |
|----------|-------|
| Table Name | `agentsform-main` |
| GSIs | `GSI1`, `GSI2`, `username-index`, `email-index` |
| All GSIs | ACTIVE |

### CloudFront Distributions

| Domain | Distribution ID | Purpose |
|--------|-----------------|---------|
| tutor.agentsform.ai | E1WZZKB5A9CWD6 | Main app |
| www.agentsform.ai | E1QP7Q4V8GZBLK | Landing page |
| agentsform.com | E1WX2ZJZ8F0CW5 | Redirect |

### S3 Buckets

| Bucket | Purpose |
|--------|---------|
| `onceoffresourcesstack-techxbucket00f18e48-h7seokhaha6q` | tutor.agentsform.ai frontend |
| `www.agentsform.ai` | Landing page |
| `agentsform.ai-ses-emails` | SES email storage |

---

## Environment Variables

File: `/Users/tendaimudavanhu/CODE/tutor/studymate/.env` (DO NOT COMMIT - contains secrets)

**Required variables:**
```bash
# Groq AI
export GROQ_API_KEY=<your-groq-api-key>

# Admin
export ADMIN_API_KEY=<your-admin-key>

# Stripe (LIVE)
export STRIPE_SECRET_KEY=<your-stripe-secret-key>
export STRIPE_WEBHOOK_SECRET=<your-stripe-webhook-secret>
export STRIPE_PRICE_EXPLORER=price_1SlNTJFqL65Zilf9GZop22SQ
export STRIPE_PRICE_SCHOLAR=price_1SkzbOFqL65Zilf9RelDEV2A
export STRIPE_PRICE_ACHIEVER=price_1SkzbOFqL65Zilf9RelDEV2A

# Frontend
export FRONTEND_URL=https://tutor.agentsform.ai

# AWS
export AWS_REGION=ap-southeast-2
```

**Note:** Actual secrets are stored locally in `.env` file. Source it before deploying: `source .env`

---

## Deployment Commands

### API Deployment (IMPORTANT)

```bash
# 1. Build the API package first
cd /Users/tendaimudavanhu/CODE/tutor/studymate/packages/api
pnpm build

# 2. Delete cdk.out to force Lambda code updates
cd /Users/tendaimudavanhu/CODE/tutor/studymate/infrastructure/cdk
rm -rf cdk.out

# 3. Source environment variables
source /Users/tendaimudavanhu/CODE/tutor/studymate/.env

# 4. Deploy
npx cdk deploy AgentsFormApi --require-approval never
```

### Frontend Deployment

```bash
# 1. Build frontend
cd /Users/tendaimudavanhu/CODE/tutor/studymate/apps/web
pnpm build

# 2. Deploy to S3
aws s3 sync out/ s3://onceoffresourcesstack-techxbucket00f18e48-h7seokhaha6q --delete

# 3. Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id E1WZZKB5A9CWD6 --paths "/*"
```

---

## Recent Changes (January 4, 2026)

### 1. Family-Scoped Child Login
- Changed from username-only to parent email + child name + PIN
- Added `email-index` GSI for parent email lookups
- Prevents username collisions across families

### 2. Child Limit Enforcement
- Free/Explorer: 2 children max
- Scholar: 5 children max
- Achiever: 10 children max

### 3. Year 5 Curriculum Fallback
- API falls back to Year 5 content when requested year has no data

---

## Next Implementation: Progress Reports & Cross-Year Grading

**Plan Document:** `docs/PLAN-progress-reports-cross-year-grading.md`

### Phase 1: Cross-Year Grading System (START HERE)

**Files to modify:**
- `packages/api/src/lib/db.ts` - Add grade level key patterns
- `packages/api/src/lib/analytics-schema.ts` - Add StudentGradeLevel interface
- `packages/api/src/handlers/analytics.ts` - Add grade level calculation endpoint
- `packages/api/src/handlers/curriculum.ts` - Modify adaptive question selection

**Database keys to add:**
```typescript
gradeLevel: (childId: string, subject: string) => ({
  PK: `CHILD#${childId}`,
  SK: `GRADELEVEL#${subject}`,
}),

yearPerformance: (childId: string, subject: string, yearLevel: number) => ({
  PK: `CHILD#${childId}`,
  SK: `YEARPERF#${subject}#Y${yearLevel}`,
}),
```

**Algorithm:**
1. Track performance on questions tagged by year level
2. If accuracy > 80% at current level for 20+ questions -> try next level up
3. If accuracy < 50% at current level for 10+ questions -> include level below
4. Calculate "working level" as weighted average

### Phase 2: Curriculum Expansion
- Create Year 0 (Prep), Year 1, Year 2, Year 7 curriculum files
- Add `yearLevel` field to Question interface

### Phase 3: Report Generation
- Create `packages/api/src/handlers/reports.ts`
- Create `packages/api/src/lib/report-generator.ts`
- School-style reports with letter grades (A-E)

### Phase 4: Email Delivery
- AWS SES is already configured (verified sender: `tendai@agentsform.ai`)
- Create email sending Lambda
- Add scheduled triggers (EventBridge)

### Phase 5: Frontend
- Report view page `/report/:childId`
- Email settings page
- Dashboard grade level display

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `packages/api/src/handlers/child.ts` | Child CRUD + login |
| `packages/api/src/handlers/ai.ts` | AI tutor chat |
| `packages/api/src/handlers/analytics.ts` | Progress analytics |
| `packages/api/src/handlers/curriculum.ts` | Curriculum API |
| `packages/api/src/lib/db.ts` | DynamoDB keys & helpers |
| `packages/curriculum/src/maths/` | Maths curriculum content |
| `apps/web/src/lib/api.ts` | Frontend API client |
| `apps/web/src/lib/auth.ts` | Frontend auth |
| `infrastructure/cdk/src/stacks/` | CDK infrastructure |

---

## Subscription Tiers

| Tier | Price | Max Children | Daily Questions | Daily AI Calls |
|------|-------|--------------|-----------------|----------------|
| Free | $0 | 2 | 20 | 10 |
| Explorer | $9.99/mo | 2 | 50 | 30 |
| Scholar | $19.99/mo | 5 | Unlimited | 100 |
| Achiever | $29.99/mo | 10 | Unlimited | Unlimited |

---

## Testing Commands

```bash
# Test child login
curl -s -X POST https://yhn9tli08d.execute-api.ap-southeast-2.amazonaws.com/children/login \
  -H "Content-Type: application/json" \
  -d '{"parentEmail":"test@example.com","childName":"Thomas","pin":"1234"}'

# Test AI chat
curl -s -X POST https://yhn9tli08d.execute-api.ap-southeast-2.amazonaws.com/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"childId":"xxx","message":"What is 2+2?","subject":"maths","yearLevel":5}'
```

---

## Git Repository

| Item | Value |
|------|-------|
| Remote | https://github.com/tech-ten/studymate.git |
| Branch | main |
| Latest Commit | `8ad6425` |

### Recent Commits
```
8ad6425 docs: Add implementation plan for progress reports and cross-year grading
7fbbfba fix: Enforce child limit based on subscription tier
5a36431 feat: Family-scoped child login with parent email + child name + PIN
cb3ecf5 fix: Handle username GSI returning both CHILD and PROFILE records
9e93dc9 fix: Fall back to Year 5 content when year level has no data
```

---

## Documentation Index

| Document | Purpose |
|----------|---------|
| `docs/USER_MANAGEMENT_GUIDE.md` | Complete user flows & API reference |
| `docs/DEVELOPER_GUIDE.md` | Development setup & architecture |
| `docs/CURRICULUM_CONTENT_GUIDE.md` | How to add curriculum content |
| `docs/PLAN-progress-reports-cross-year-grading.md` | Implementation plan for next feature |
| `docs/ANALYTICS_FEATURE.md` | Analytics system documentation |

---

## Troubleshooting

### Lambda code not updating after CDK deploy
```bash
rm -rf infrastructure/cdk/cdk.out
cd packages/api && pnpm build
cd ../../infrastructure/cdk && npx cdk deploy AgentsFormApi
```

### CloudFront not showing new content
```bash
aws cloudfront create-invalidation --distribution-id E1WZZKB5A9CWD6 --paths "/*"
```

### GSI not queryable
Wait 1-2 minutes after creating GSI for backfill to complete. Check status:
```bash
aws dynamodb describe-table --table-name agentsform-main \
  --query 'Table.GlobalSecondaryIndexes[*].{Name:IndexName,Status:IndexStatus}'
```

---

*This document should be read at the start of each Claude Code session to restore context.*
