# StudyMate Developer Guide

## Quick Start

```bash
# Clone and install
git clone https://github.com/tech-ten/studymate.git
cd studymate
pnpm install

# Set up environment
cp .env.example .env
# Edit .env with your API keys

# Run locally
pnpm dev

# Deploy
source .env && npx cdk deploy --all
```

---

## Architecture Overview

```
studymate/
├── apps/
│   └── web/                 # Next.js 14 frontend (static export)
├── packages/
│   ├── api/                 # Lambda handlers
│   └── curriculum/          # Curriculum data
├── infrastructure/
│   └── cdk/                 # AWS CDK stacks
└── docs/                    # Documentation
```

### Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14, TypeScript, Tailwind, shadcn/ui |
| Backend | AWS Lambda (Node.js 20, ARM64) |
| Database | DynamoDB (single-table design) |
| Auth | AWS Cognito (parents) + DynamoDB (children) |
| AI | Groq API (LLaMA 3.3 70B) |
| Payments | Stripe |
| CDN | CloudFront |
| IaC | AWS CDK (TypeScript) |

---

## Environment Variables

Create `.env` in project root (gitignored):

```bash
# AI
GROQ_API_KEY=gsk_xxx                    # From console.groq.com

# Payments
STRIPE_SECRET_KEY=sk_live_xxx           # From stripe.com/dashboard
STRIPE_WEBHOOK_SECRET=whsec_xxx         # From Stripe webhook config
STRIPE_PRICE_SCHOLAR=price_xxx          # Scholar tier price ID
STRIPE_PRICE_ACHIEVER=price_xxx         # Achiever tier price ID

# Admin
ADMIN_API_KEY=your-secure-key           # For /admin endpoints

# Frontend
FRONTEND_URL=https://tutor.agentsform.ai
```

---

## API Endpoints

### Authentication

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | /children/login | None | Child PIN login |
| * | /children/* | Cognito | Parent child management |

### Learning

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | /ai/chat | None* | AI tutor conversation |
| POST | /ai/explain | None* | Explain wrong answer |
| GET | /questions/next | Cognito | Get next adaptive question |
| POST | /questions/{id}/answer | Cognito | Submit answer |
| POST | /progress/{childId}/quiz | None | Save quiz result |
| GET | /progress/{childId}/quizzes | None | Get quiz history |

*Child ID required in body, rate-limited by parent tier

### Payments

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | /payments/create-checkout | Cognito | Create Stripe checkout |
| GET | /payments/portal | Cognito | Get billing portal URL |
| GET | /payments/status | Cognito | Get subscription status |
| POST | /payments/webhook | Stripe Sig | Handle Stripe events |

### Admin

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | /admin/stats | X-Admin-Key | Overview statistics |
| GET | /admin/users | X-Admin-Key | List all users |
| GET | /admin/children | X-Admin-Key | List all children |
| GET | /admin/ai-logs | X-Admin-Key | Recent AI interactions |
| GET | /admin/usage-by-day | X-Admin-Key | 7-day usage chart |
| GET | /admin/payments | X-Admin-Key | Stripe payment data |

---

## Database Schema (DynamoDB Single-Table)

```
PK                    │ SK                    │ Attributes
──────────────────────┼───────────────────────┼──────────────────────
USER#<userId>         │ PROFILE               │ email, tier, stripeCustomerId
USER#<userId>         │ CHILD#<childId>       │ name, yearLevel, pin
CHILD#<childId>       │ PROFILE               │ parentId, username, avatar
CHILD#<childId>       │ PROGRESS#maths        │ level, xp, accuracy
CHILD#<childId>       │ QUIZ#<quizId>         │ section, score, answers
CHILD#<childId>       │ AILOG#<timestamp>     │ type, latency, tokens
CHILD#<childId>       │ TOKEN#<tokenId>       │ masteryScore, confusionPatterns
CHILD#<childId>       │ ATTEMPT#<timestamp>   │ questionId, isCorrect, knowledgeToken
CURRICULUM#YEAR<n>    │ SECTION#<code>        │ title, content, keyPoints, examples
SECTION#<code>        │ QUESTION#<id>         │ question, options, knowledge tokens
```

---

## Curriculum & Question Architecture

### Overview

Questions are stored in **DynamoDB**, not in local files. The TypeScript file `packages/curriculum/src/maths/year5.ts` serves as the **development/authoring source**, which is then seeded to DynamoDB.

### Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    CURRICULUM DATA FLOW                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. AUTHORING                                                   │
│     packages/curriculum/src/maths/year5.ts                     │
│     └─ Questions with knowledge tokens defined in TypeScript    │
│                                                                 │
│  2. SEEDING                                                     │
│     npx ts-node packages/api/src/scripts/seed-curriculum.ts    │
│     └─ Migrates to DynamoDB (SECTION#, QUESTION#)              │
│                                                                 │
│  3. RUNTIME                                                     │
│     API reads from DynamoDB (NOT from TypeScript files)         │
│     └─ GET /curriculum/:year/:section/questions                │
│                                                                 │
│  4. ANALYTICS                                                   │
│     Attempts stored with knowledge tokens for tracking          │
│     └─ POST /analytics/attempt                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Why year5.ts Still Exists

The TypeScript file is kept for:
1. **Version control** - Track question changes in Git
2. **Type safety** - TypeScript ensures valid question structure
3. **Bulk editing** - Easier to edit many questions in IDE
4. **Seeding source** - Single source of truth for new deployments

**Important:** After editing `year5.ts`, you must re-run the seed script!

### DynamoDB Question Schema

```typescript
// Stored in DynamoDB as: PK=SECTION#VCMMG202, SK=QUESTION#VCMMG202-001
{
  PK: 'SECTION#VCMMG202',
  SK: 'QUESTION#VCMMG202-001',
  type: 'QUESTION',
  id: 'VCMMG202-001',
  sectionId: 'VCMMG202',
  question: 'What type of angle is 75°?',
  options: ['Acute', 'Right', 'Obtuse', 'Reflex'],
  correctAnswer: 0,
  explanation: 'An acute angle is less than 90°...',
  difficulty: 1,

  // Knowledge tokens for analytics
  knowledge: {
    questionTokens: ['acute-angle-identification', 'right-angle-identification', ...],
    correctToken: 'acute-angle-identification',
    incorrectTokens: [
      null,                      // Option 0 is correct
      'acute-right-confusion',   // Chose Right → confusion
      'acute-obtuse-confusion',  // Chose Obtuse → confusion
      'reflex-misunderstanding', // Chose Reflex → confusion
    ],
  },

  // Analytics (updated by system)
  totalAttempts: 0,
  correctAttempts: 0,
  avgTimeSeconds: 0,
  isAiGenerated: false,
}
```

### Adding New Questions

#### Step 1: Edit the TypeScript Source

```typescript
// packages/curriculum/src/maths/year5.ts
{
  id: 'VCMMG202-021',
  question: 'What is the angle in a straight line?',
  options: ['90°', '180°', '270°', '360°'],
  correctAnswer: 1,
  explanation: 'A straight angle is exactly 180°',
  difficulty: 2,
  knowledge: {
    questionTokens: ['straight-angle-identification'],
    correctToken: 'straight-angle-identification',
    incorrectTokens: [
      'right-straight-confusion',  // Chose 90°
      null,                         // Correct
      'reflex-misunderstanding',    // Chose 270°
      'full-rotation-confusion',    // Chose 360°
    ],
  },
}
```

#### Step 2: Seed to DynamoDB

```bash
cd packages/api
npx ts-node src/scripts/seed-curriculum.ts
```

#### Step 3: Verify in DynamoDB

```bash
aws dynamodb query \
  --table-name agentsform-main \
  --key-condition-expression "PK = :pk AND SK = :sk" \
  --expression-attribute-values '{":pk":{"S":"SECTION#VCMMG202"},":sk":{"S":"QUESTION#VCMMG202-021"}}'
```

### Knowledge Token System

Knowledge tokens enable granular skill tracking. Each question tests specific skills and tracks which misconceptions occur when wrong answers are selected.

```typescript
// Token definition (in section)
knowledgeTokens: [
  { id: 'acute-angle-identification', name: 'Acute Angle Identification' },
  { id: 'right-angle-identification', name: 'Right Angle Identification' },
]

// Question tagging
knowledge: {
  questionTokens: ['acute-angle-identification', 'right-angle-identification'],
  correctToken: 'acute-angle-identification',  // Skill proven by correct answer
  incorrectTokens: [null, 'acute-right-confusion', ...],  // Misconceptions by wrong answer
}
```

### API Endpoints for Curriculum

| Method | Path | Description |
|--------|------|-------------|
| GET | `/curriculum/:year` | List all sections for year level |
| GET | `/curriculum/:year/:sectionId` | Get section content |
| GET | `/curriculum/:year/:sectionId/questions` | Get all questions (from DB) |
| GET | `/curriculum/:year/:sectionId/adaptive` | Get adaptive question |
| POST | `/curriculum/attempt` | Record question attempt |
| GET | `/curriculum/mastery/:childId` | Get child's mastery |

### Attempt Recording with Knowledge Tokens

When a child answers a question, the frontend sends knowledge token data:

```typescript
// Frontend: submit answer
await fetch('/analytics/attempt', {
  method: 'POST',
  body: JSON.stringify({
    childId,
    questionId: question.id,
    sectionId,
    selectedAnswer,
    correctAnswer: question.correctAnswer,
    timeSpentSeconds,
    difficulty: question.difficulty,
    questionText: question.question,
    options: question.options,
    explanation: question.explanation,
    // Include knowledge token data from the question
    knowledge: question.knowledge,
  }),
});
```

The backend then:
1. Records the attempt in `CHILD#/ATTEMPT#`
2. Updates knowledge token mastery in `CHILD#/TOKEN#`
3. Tracks confusion patterns for misconception analysis

---

## Lambda Handlers

### Handler Structure

```typescript
// packages/api/src/handlers/example.ts
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { db, TABLE_NAME, getUserIdFromEvent } from '../lib/db';
import { success, badRequest, forbidden, serverError } from '../lib/response';

export async function handler(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
  try {
    const path = event.rawPath;
    const method = event.requestContext.http.method;

    if (path === '/example' && method === 'GET') {
      // Handle request
      return success({ data: 'example' });
    }

    return badRequest('Invalid endpoint');
  } catch (error) {
    console.error('Handler error:', error);
    return serverError();
  }
}
```

### Building Handlers

```bash
# Standard handlers (use CDK build)
cd infrastructure/cdk && npx cdk deploy AgentsFormApi

# Handlers with external deps (AI, Payments) - bundle first
cd packages/api
npx esbuild src/handlers/ai.ts --bundle --platform=node --target=node20 \
  --outfile=dist-bundled/ai.js "--external:@aws-sdk/*"
```

---

## Frontend Structure

```
apps/web/src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── (auth)/
│   │   ├── login/                  # Parent login
│   │   └── register/               # Parent registration
│   ├── (parent)/
│   │   ├── dashboard/              # Parent dashboard
│   │   ├── children/               # Child management
│   │   └── pricing/                # Upgrade page
│   ├── (student)/
│   │   ├── learn/                  # Curriculum browser
│   │   ├── exam/                   # Timed tests
│   │   └── child-login/            # Child PIN entry
│   ├── (legal)/
│   │   ├── privacy/
│   │   ├── terms/
│   │   └── refund/
│   └── admin/                      # Admin dashboard
├── components/
│   └── ui/                         # shadcn/ui components
└── lib/
    ├── api.ts                      # API client
    └── auth.ts                     # Cognito helpers
```

---

## Deployment

### Full Deployment

```bash
# 1. Load environment
source .env

# 2. Build frontend
pnpm --filter @studymate/web build

# 3. Bundle Lambda handlers with external deps
cd packages/api
npx esbuild src/handlers/ai.ts --bundle --platform=node --target=node20 \
  --outfile=dist-bundled/ai.js "--external:@aws-sdk/*"
npx esbuild src/handlers/admin.ts --bundle --platform=node --target=node20 \
  --outfile=dist-bundled/admin.js "--external:@aws-sdk/*"
npx esbuild src/handlers/payment.ts --bundle --platform=node --target=node20 \
  --outfile=dist-bundled/payment.js "--external:@aws-sdk/*"

# 4. Deploy CDK stacks
cd infrastructure/cdk
npx cdk deploy --all --require-approval never

# 5. Sync frontend to S3
aws s3 sync ../../apps/web/out s3://onceoffresourcesstack-techxbucket00f18e48-h7seokhaha6q --delete

# 6. Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id E1WZZKB5A9CWD6 --paths "/*"
```

### Quick Frontend Update

```bash
pnpm --filter @studymate/web build
aws s3 sync apps/web/out s3://onceoffresourcesstack-techxbucket00f18e48-h7seokhaha6q --delete
aws cloudfront create-invalidation --distribution-id E1WZZKB5A9CWD6 --paths "/*"
```

---

## Testing

### API Tests (curl)

```bash
# Admin stats
curl -X GET "https://yhn9tli08d.execute-api.ap-southeast-2.amazonaws.com/admin/stats" \
  -H "X-Admin-Key: studymate-admin-2024"

# AI chat
curl -X POST "https://yhn9tli08d.execute-api.ap-southeast-2.amazonaws.com/ai/chat" \
  -H "Content-Type: application/json" \
  -d '{"childId":"<child-id>","message":"What is 2+2?"}'

# Payment status (requires JWT)
curl -X GET "https://yhn9tli08d.execute-api.ap-southeast-2.amazonaws.com/payments/status" \
  -H "Authorization: Bearer <jwt-token>"
```

### Stripe Webhook Testing

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Forward webhooks to local
stripe listen --forward-to localhost:3000/api/webhook

# Trigger test events
stripe trigger checkout.session.completed
```

---

## Monitoring

### CloudWatch Logs

```bash
# View AI handler logs
aws logs tail /aws/lambda/agentsform-aihandler --follow

# View payment handler logs
aws logs tail /aws/lambda/studymate-paymenthandler --follow
```

### Key Metrics to Monitor

- Lambda invocation errors
- DynamoDB throttling
- API Gateway 4xx/5xx rates
- Groq API latency
- Stripe webhook failures

---

## Common Issues

### "GROQ_API_KEY not set"
```bash
source .env && npx cdk deploy AgentsFormApi
```

### "Stripe signature verification failed"
Check `STRIPE_WEBHOOK_SECRET` matches your webhook endpoint config in Stripe dashboard.

### "Cannot find module 'groq-sdk'"
AI handler needs bundling:
```bash
cd packages/api
npx esbuild src/handlers/ai.ts --bundle --platform=node --target=node20 \
  --outfile=dist-bundled/ai.js "--external:@aws-sdk/*"
```

### CloudFront returning wrong page
Invalidate cache:
```bash
aws cloudfront create-invalidation --distribution-id E1WZZKB5A9CWD6 --paths "/*"
```

---

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/my-feature`
3. Make changes and test locally
4. Submit PR with description of changes

---

## AI Integration

### Overview
StudyMate uses Groq's LLaMA 3.3 70B model for AI tutoring with **year-level-specific prompt engineering** to ensure age-appropriate responses.

**📖 Full Documentation:** See [AI_PROMPT_ENGINEERING.md](./AI_PROMPT_ENGINEERING.md) for complete details on:
- Year-level-specific prompting strategies
- Token limits by age group
- Explanation vs Chat endpoint differences
- Caching and rate limiting
- Examples for Year 1, Year 5, and Year 8

### Quick Reference

#### Year-Level Tiers
| Year Level | Max Tokens (Explain) | Max Tokens (Chat) | Response Style |
|-----------|---------------------|------------------|----------------|
| 1-3       | 150                 | 100              | Very short, simple words |
| 4-6       | 250                 | 200              | Concise, age-appropriate |
| 7+        | 300                 | 400              | Full explanations allowed |

#### API Endpoints

**POST /ai/explain** - Explain why answer was wrong
```typescript
{
  childId: string;
  questionId: string;
  question: string;
  options: string[];
  userAnswer: number;
  correctAnswer: number;
  subject: string;
  yearLevel: number;  // Critical for age-appropriate response
  topic?: string;
}
```

**POST /ai/chat** - Free-form tutoring conversation
```typescript
{
  childId: string;
  message: string;
  subject: string;
  yearLevel: number;  // Critical for age-appropriate response
  context?: string;
  topic?: string;
}
```

#### Rate Limits
- **Free tier:** 10 AI calls per day
- **Explorer ($0.99/mo):** 1000 AI calls per day
- **Scholar ($5/mo):** 1000 AI calls per day
- **Achiever ($12/mo):** 1000 AI calls per day

Rate limits are enforced per parent account, tracked via `aiCalls_YYYY-MM-DD` attribute on user record.

#### Caching
- Explanation responses are cached for 30 days
- Cache key: MD5 hash of `questionId:userAnswer:correctAnswer`
- Chat responses are NOT cached (conversational context varies)

---

## Resources

- **AWS CDK**: https://docs.aws.amazon.com/cdk/
- **Groq API**: https://console.groq.com/docs
- **Stripe**: https://stripe.com/docs
- **Next.js**: https://nextjs.org/docs
- **DynamoDB**: https://docs.aws.amazon.com/dynamodb/
- **AI Prompt Engineering**: [./AI_PROMPT_ENGINEERING.md](./AI_PROMPT_ENGINEERING.md)
