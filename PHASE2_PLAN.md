# AgentsForm Phase 2 Plan: Parent & Child Journey Completion

## Overview
This document outlines the work required to complete the core parent and child journeys, ensure proper progress tracking, and implement AI tutoring with comprehensive logging.

---

## AWS Resources Reference

### CloudFormation Stacks
| Stack Name | Purpose |
|------------|---------|
| `OnceOffResourcesStack` | S3 bucket for static hosting |
| `AgentsFormApi` | API Gateway + Lambda functions |
| `AgentsFormAuth` | Cognito User Pool |
| `AgentsFormDatabase` | DynamoDB table |

### S3 Bucket (Static Website Hosting)
| Resource | Value |
|----------|-------|
| **Bucket Name** | `onceoffresourcesstack-techxbucket00f18e48-h7seokhaha6q` |
| **Region** | ap-southeast-2 |
| **Deploy Command** | `aws s3 sync apps/web/out s3://onceoffresourcesstack-techxbucket00f18e48-h7seokhaha6q --delete` |

### CloudFront Distributions
| Distribution ID | Domain | Alias | Purpose |
|-----------------|--------|-------|---------|
| `E1WZZKB5A9CWD6` | `d2o8yut6q5cqmv.cloudfront.net` | `tutor.agentsform.ai` | **Tutor App (Primary)** |
| `E1WX2ZJZ8F0CW5` | `d3iml8jgf572l5.cloudfront.net` | `agentsform.com` | AgentsForm main site |
| `E24HVBUAJPT5V0` | `d1wf0q1cyrkyug.cloudfront.net` | `agentsformation.com` | Alt domain |

**Live URL**: `https://tutor.agentsform.ai/`

### API Gateway
| Resource | Value |
|----------|-------|
| **API URL** | `https://yhn9tli08d.execute-api.ap-southeast-2.amazonaws.com` |
| **Region** | ap-southeast-2 |

### Cognito (Authentication)
| Resource | Value |
|----------|-------|
| **User Pool ID** | `ap-southeast-2_KQjSkcKvP` |
| **User Pool Client ID** | `6sehatih95apslqtikic4sf39o` |
| **User Pool ARN** | `arn:aws:cognito-idp:ap-southeast-2:308045886682:userpool/ap-southeast-2_KQjSkcKvP` |
| **Region** | ap-southeast-2 |

### DynamoDB
| Resource | Value |
|----------|-------|
| **Table Name** | `agentsform-main` |
| **Table ARN** | `arn:aws:dynamodb:ap-southeast-2:308045886682:table/agentsform-main` |
| **Region** | ap-southeast-2 |

### AWS Account
| Resource | Value |
|----------|-------|
| **Account ID** | `308045886682` |
| **Region** | ap-southeast-2 (Sydney) |

---

## Deployment Commands

```bash
# Build the web app
cd /Users/tendaimudavanhu/CODE/tutor/agentsform && pnpm --filter @agentsform/web build

# Deploy to S3
aws s3 sync apps/web/out s3://onceoffresourcesstack-techxbucket00f18e48-h7seokhaha6q --delete

# Invalidate CloudFront cache (tutor.agentsform.ai)
aws cloudfront create-invalidation --distribution-id E1WZZKB5A9CWD6 --paths "/*"
```

### Static Assets
| Asset | Path | Source |
|-------|------|--------|
| **Favicon** | `apps/web/src/app/icon.png` | 32x32 from `agentsform1.png` |
| **Apple Icon** | `apps/web/src/app/apple-icon.png` | 180x180 from `agentsform1.png` |
| **Logo with text** | `/Users/tendaimudavanhu/CODE/tutor/agentsform.png` | Full logo for marketing |
| **Logo icon only** | `/Users/tendaimudavanhu/CODE/tutor/agentsform1.png` | Icon-only for favicons |

---

## Architecture Notes (IMPORTANT - READ BEFORE MAKING CHANGES)

### Authentication Model
There are TWO types of sessions in this app:

1. **Parent Sessions** (Cognito auth token)
   - Uses `apiFetch()` wrapper in `apps/web/src/lib/api.ts`
   - Token retrieved via `getToken()` from `apps/web/src/lib/auth.ts`
   - Used for: parent dashboard, child management, viewing progress

2. **Child Sessions** (No auth token - localStorage only)
   - Uses direct `fetch()` calls WITHOUT auth headers
   - Child profile stored in `localStorage` as `childProfile` and `selectedChild`
   - Used for: learning, quizzes, AI chat, AI explanations, benchmarks

### API Functions - Auth Requirements
| Function | Auth Required | Used By |
|----------|---------------|---------|
| `getChildren()` | Yes (parent) | Parent dashboard |
| `createChild()` | Yes (parent) | Add child page |
| `updateChild()` | Yes (parent) | Edit child page |
| `deleteChild()` | Yes (parent) | Parent dashboard |
| `childLogin()` | No | Child login page |
| `getNextQuestion()` | Yes (parent) | - |
| `submitAnswer()` | Yes (parent) | - |
| `startBenchmark()` | No | Child benchmark |
| `submitBenchmarkAnswer()` | No | Child benchmark |
| `getProgress()` | Yes (parent) | Progress page |
| `saveSectionQuiz()` | No | Child learn page |
| `getSectionQuizzes()` | No | Child learn page |
| `getAIExplanation()` | **No** | Child learn page (quiz explain) |
| `chatWithAI()` | No | Child learn page (AI tutor sidebar) |
| `getBadges()` | Yes (parent) | - |
| `getStreak()` | Yes (parent) | - |

### Critical Rules for API Changes
1. **NEVER use `apiFetch()` for child session endpoints** - children don't have Cognito tokens
2. Child endpoints must use direct `fetch()` with `Content-Type: application/json` only
3. Test ALL child features after ANY api.ts changes:
   - Child login with PIN
   - Benchmark start/answer
   - Section quiz completion
   - "Explain this" button on quiz results
   - AI Tutor chat sidebar (quick prompts + text input)

### UI Component Architecture
| Component | Location | Key Features |
|-----------|----------|--------------|
| Learn Page | `apps/web/src/app/(student)/learn/page.tsx` | Curriculum browser, section content, quizzes, AI sidebar |
| AI Chat Sidebar | Same file, lines 794-910 | Floating toggle button, sticky sidebar, quick prompts, text input |
| Quiz Section | Same file, within section content | Questions, answer feedback, "Explain this" button |

### Design Guidelines
- **Color scheme**: Black/white/neutral grays (Apple/OpenAI inspired)
- **No emojis** in UI unless explicitly requested
- **Minimal icons**: Use Heroicons (outline style, 1.5-2 stroke width)
- Button styles: `bg-black text-white` for primary, `border border-neutral-200` for secondary

---

## 1. Critical Fixes

### 1.1 S3/CloudFront Routing Issues
- **Problem**: Sign-in page returning "Access Denied" error
- **Cause**: Static export routing not configured for SPA-style navigation
- **Solution**: Configure CloudFront error pages to redirect 403/404 to index.html

### 1.2 User Role Clarity
- **Problem**: Unclear who is signing in (parent, tutor, child)
- **Solution**:
  - Add clear role labels on auth pages ("Parent/Guardian Sign In")
  - Create separate entry points or tabs for different user types
  - Child login should be clearly distinguished (PIN-based, no email)

---

## 2. Parent Journey

### 2.1 Registration & Onboarding
- [x] Register with email/password
- [x] Email verification
- [x] Login
- [x] Dashboard view (empty state for new users)

### 2.2 Child Management
- [x] Add child profile (name, year level, avatar, PIN)
- [x] Edit child profile
- [x] Delete child profile
- [x] View child's progress

### 2.3 Progress Monitoring
- [ ] View overall stats per child
- [ ] View subject-specific progress
- [ ] View question history with timestamps
- [ ] View accuracy trends

---

## 3. Child Journey

### 3.1 Authentication
- [x] Child selects their profile from parent's children
- [x] Child enters PIN to authenticate (username + PIN)
- [x] Session management for child

### 3.2 Benchmark Test
- [x] Start benchmark for subject (Maths/English)
- [x] Adaptive difficulty adjustment
- [x] Complete benchmark and set initial level
- [x] Store benchmark results

### 3.3 Learning Flow
- [x] Select subject to practice
- [x] Receive questions at appropriate difficulty
- [x] Submit answers
- [x] View immediate feedback with explanations
- [ ] Request AI help/explanation
- [ ] Track streaks and XP

---

## 4. Victorian Curriculum System (Completed)

### 4.1 Curriculum Structure
All year levels treated equally with separate data files:
- `apps/web/src/app/(student)/curriculum/year3-data.ts` - Year 3 Maths
- `apps/web/src/app/(student)/curriculum/year4-data.ts` - Year 4 Maths
- `apps/web/src/app/(student)/curriculum/year5-data.ts` - Year 5 Maths
- `apps/web/src/app/(student)/curriculum/year6-data.ts` - Year 6 Maths
- `apps/web/src/app/(student)/curriculum/curriculum-data.ts` - Types & registry

### 4.2 Curriculum Features
- [x] VCAA curriculum codes (VCMNA186, VCMMG196, etc.)
- [x] Strands → Chapters → Sections → Questions hierarchy
- [x] Textbook-style markdown content for each section
- [x] Key points summaries
- [x] Worked examples
- [x] Practice questions with difficulty levels
- [x] Dynamic loading based on child's yearLevel

### 4.3 Cambridge-Style Exams
- [x] `/exam` page with mixed curriculum questions
- [x] 30-minute timer
- [x] Question navigator
- [x] Section breakdown results
- [x] Pass/fail threshold (60%)
- [x] Revision recommendations for weak sections

---

## 5. Progress Tracking Requirements

### 5.1 Data to Capture Per Question
```typescript
interface QuestionAttempt {
  id: string;
  childId: string;
  questionId: string;
  subject: 'maths' | 'english';
  difficulty: number;

  // Question details
  questionText: string;
  options: string[];
  correctAnswer: number;

  // Child's response
  selectedAnswer: number;
  isCorrect: boolean;

  // Timing
  timestamp: string;          // ISO timestamp
  timeToAnswer: number;       // milliseconds

  // Curriculum alignment
  curriculumArea: string;     // e.g., "Number and Algebra"
  curriculumSubtopic: string; // e.g., "Fractions"
  yearLevel: number;

  // AI interaction (if any)
  aiExplanationRequested: boolean;
  aiExplanationId?: string;
}
```

### 5.2 DynamoDB Schema Updates
- Add GSI for querying by childId + timestamp
- Add GSI for querying by subject + difficulty
- Ensure efficient pagination for history views

---

## 6. AI Tutoring System

### 6.1 AI Capabilities
- [ ] Explain incorrect answers
- [ ] Provide step-by-step solutions
- [ ] Offer hints without giving away answer
- [ ] Adapt explanation complexity to year level

### 6.2 Logging Requirements
```typescript
interface AIInteractionLog {
  id: string;
  childId: string;
  questionAttemptId: string;

  // Request
  requestType: 'explain' | 'hint' | 'chat';
  requestTimestamp: string;
  prompt: string;
  systemPrompt: string;

  // Context sent to AI
  questionContext: {
    question: string;
    options: string[];
    correctAnswer: number;
    childAnswer: number;
    yearLevel: number;
    subject: string;
  };

  // Response
  responseTimestamp: string;
  response: string;
  tokensUsed: number;
  latencyMs: number;

  // Model info
  model: string;
  temperature: number;
}
```

### 6.3 Future RAG Enhancement Preparation
- Log all prompts and responses for analysis
- Tag interactions with curriculum areas
- Store embeddings-ready text format
- Plan for syllabus document ingestion

---

## 7. Testing Plan

### 7.1 Infrastructure Tests
- [x] Verify S3 bucket deployment
- [x] Verify API Gateway endpoints accessible
- [x] Verify Cognito authentication flow
- [x] Verify DynamoDB read/write operations

### 7.2 Parent Journey Tests
| Test | Steps | Expected Result | Status |
|------|-------|-----------------|--------|
| Registration | Fill form, submit | Redirect to verify page | Done |
| Verification | Enter code | Redirect to login | Done |
| Login | Enter credentials | Redirect to dashboard | Done |
| Add Child | Fill form, submit | Child appears in dashboard | Done |
| Edit Child | Modify details | Changes saved | Done |
| View Progress | Click progress link | See child's stats | Done |

### 7.3 Child Journey Tests
| Test | Steps | Expected Result | Status |
|------|-------|-----------------|--------|
| Child Login | Enter username + PIN | Access learning area | Done |
| Start Benchmark | Click start | Receive first question | Done |
| Answer Question | Select answer, submit | See feedback | Done |
| Complete Benchmark | Answer 5 questions | See final level | Done |
| Practice Session | Start learning | Receive adaptive questions | Done |
| Curriculum Browse | View curriculum | See year-appropriate content | Done |
| Take Exam | Complete exam | See section results | Done |
| Request AI Help | Click explain | See AI explanation | Pending |

### 7.4 API Endpoint Tests
- [x] POST /children - Create child
- [x] GET /children - List children
- [x] PUT /children/{id} - Update child
- [x] DELETE /children/{id} - Delete child
- [x] POST /children/login - Child PIN login
- [x] POST /benchmark/start - Start benchmark
- [x] POST /benchmark/{id}/answer - Submit benchmark answer
- [x] GET /questions/next - Get next question
- [x] POST /questions/{id}/answer - Submit answer
- [ ] POST /ai/explain - Get AI explanation
- [x] GET /progress/{childId} - Get progress
- [ ] GET /progress/{childId}/stats - Get detailed stats

---

## 8. Implementation Priority

### Phase 2a: Critical Fixes (Completed)
1. ~~Fix CloudFront routing for SPA~~
2. ~~Clarify auth page user roles~~
3. ~~Test and fix API endpoints~~

### Phase 2b: Core Functionality (Completed)
1. ~~Complete question answering flow~~
2. ~~Implement proper progress tracking~~
3. ~~Store question attempts with full context~~

### Phase 2c: Victorian Curriculum (Completed)
1. ~~Create curriculum data structure~~
2. ~~Implement Year 3-6 Maths curricula~~
3. ~~Build curriculum browser UI~~
4. ~~Implement Cambridge-style exams~~

### Phase 2d: AI Integration (Pending)
1. Implement AI explanation endpoint
2. Add comprehensive logging
3. Store all AI interactions

### Phase 2e: Polish (Pending)
1. Error handling and user feedback
2. Loading states
3. Edge case handling

---

## 9. Success Criteria

- [x] Parent can register, verify, and login without errors
- [x] Parent can add, edit, and delete children
- [x] Child can login with username + PIN
- [x] Child can complete benchmark test
- [x] Child can answer practice questions
- [x] Child can browse curriculum by year level
- [x] Child can take Cambridge-style exams
- [ ] All question attempts are logged with full context
- [ ] AI explanations work and are logged
- [ ] Progress is accurately tracked and displayed
- [x] No routing errors on any page

---

## 10. Notes

### Current Tech Stack
- Frontend: Next.js 14 (static export)
- Hosting: S3 + CloudFront
- Auth: AWS Cognito
- API: API Gateway + Lambda
- Database: DynamoDB
- AI: Groq (Llama models) - planned

### Known Issues to Address
1. ~~S3 routing returns 403 for direct page access~~
2. ~~API CORS may need adjustment~~
3. ~~Child login flow needs testing~~
4. ~~Question generation needs curriculum alignment~~

---

*Document created: 2026-01-01*
*Last updated: 2026-01-02*
