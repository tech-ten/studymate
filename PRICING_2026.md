# 2026 Pricing Strategy - Authoritative Reference

**Last Updated**: January 6, 2026
**Status**: LIVE IN PRODUCTION

This document is the SINGLE SOURCE OF TRUTH for all pricing tiers, limits, and feature access. All code implementations MUST align with this specification.

---

## Tier Overview

| Tier | Price | Target | Primary Squeeze |
|------|-------|--------|-----------------|
| **Explorer (Free)** | Always Free | Trial users, lead generation | Solutions locked, 5 questions/day |
| **Scholar** | $5/month | Single-child families | 1 child limit forces upgrade for 2nd child |
| **Achiever** | $12/month | Multi-child families | Premium features, 6 children max |

---

## Feature Access Matrix

### Explorer (Free Tier)

**Access Level**: Restricted trial designed to demonstrate value and create upgrade pressure

| Feature | Access | Details |
|---------|--------|---------|
| **Children Profiles** | ✅ **1 child only** | Single child squeeze - parents with 2+ kids must upgrade |
| **Daily Questions** | ⚠️ **5 questions/day** | Hard limit enforced in backend (progress.ts) |
| **Worked Solutions** | ❌ **LOCKED** | Solutions hidden when answer is wrong - shows 🔒 with upgrade prompt |
| **AI "Explain This"** | ❌ **LOCKED** | "Explain this to me" button hidden for free tier |
| **AI Chat** | ✅ **10 calls/day** | Rate limited in backend (ai.ts) - shows upgrade prompt at limit |
| **Progress Dashboard** | ✅ **Basic only** | Shows score/completion, no detailed analytics |
| **Curriculum Access** | ✅ **Full** | All year levels and topics available |
| **Quiz Attempts** | ✅ **Unlimited** | Can retry quizzes, but only 5 new questions per day |
| **Leaderboard** | ✅ **View only** | Can see other children's scores |

**Enforcement Locations**:
- `packages/api/src/handlers/payment.ts:35-41` - Tier limits definition
- `packages/api/src/handlers/progress.ts:71-124` - Daily question limit
- `packages/api/src/handlers/ai.ts:135-146` - AI call rate limiting
- `apps/web/src/app/(student)/learn/page.tsx:920-946` - Solution lock UI
- `apps/web/src/app/(student)/learn/page.tsx:950-968` - AI explain button hide

---

### Scholar ($5/month)

**Access Level**: Full learning features for one child, upgrade squeeze for 2nd child

| Feature | Access | Details |
|---------|--------|---------|
| **Children Profiles** | ✅ **1 child only** | CRITICAL SQUEEZE: Forces upgrade to Achiever for 2nd child |
| **Daily Questions** | ✅ **Unlimited** | No limits (-1 in backend) |
| **Worked Solutions** | ✅ **Unlimited** | Full explanations shown for all wrong answers |
| **AI "Explain This"** | ✅ **Unlimited** | Can request AI explanations anytime |
| **AI Chat** | ✅ **Unlimited** | No rate limits (-1 in backend) |
| **Progress Dashboard** | ✅ **Enhanced** | Detailed progress tracking, trends |
| **Progress Snapshots** | ✅ **Yes** | Weekly snapshots of child progress |
| **Curriculum Access** | ✅ **Full** | All year levels and topics |
| **Quiz Attempts** | ✅ **Unlimited** | Unlimited questions and retries |
| **Priority Support** | ❌ **No** | Email support only |

**Enforcement Locations**:
- `packages/api/src/handlers/payment.ts:42-46` - Tier limits definition
- Backend returns `-1` for unlimited features
- Frontend checks `tier === 'scholar'` for feature gating

---

### Achiever ($12/month)

**Access Level**: Premium tier for families with multiple children

| Feature | Access | Details |
|---------|--------|---------|
| **Children Profiles** | ✅ **Up to 6 children** | $2 per child - premium pricing |
| **Daily Questions** | ✅ **Unlimited** | No limits for all children |
| **Worked Solutions** | ✅ **Unlimited** | Full explanations for all children |
| **AI "Explain This"** | ✅ **Unlimited** | Available for all children |
| **AI Chat** | ✅ **Unlimited** | No rate limits for any child |
| **Progress Dashboard** | ✅ **Premium** | Advanced analytics with drill-down |
| **Progress Snapshots** | ✅ **Yes** | Weekly snapshots for all children |
| **Detailed Reports** | ✅ **Yes** | Comprehensive analytics with drill-down |
| **Concept Mastery Tracking** | ✅ **Yes** | Track specific curriculum concepts |
| **Curriculum Alignment** | ✅ **Yes** | Victorian curriculum alignment insights |
| **Priority Support** | ✅ **Yes** | Fast email support, feature requests prioritized |

**Enforcement Locations**:
- `packages/api/src/handlers/payment.ts:47-51` - Tier limits definition
- `apps/web/src/app/(parent)/analytics/page.tsx` - Premium analytics UI
- `apps/web/src/app/(parent)/children/add/page.tsx:101-114` - Child limit check

---

## Backend Configuration

### Payment Handler (`packages/api/src/handlers/payment.ts`)

**Lines 35-51**: AUTHORITATIVE tier limits returned to frontend

```typescript
const TIER_LIMITS = {
  free: {
    maxChildren: 1,        // Single child squeeze
    dailyQuestions: 5,     // Limited questions to create upgrade pressure
    dailyAiCalls: -1,      // Unlimited AI calls BUT solutions are locked (handled in frontend)
  },
  scholar: {
    maxChildren: 1,        // Single child squeeze - forces upgrade to Achiever for 2nd child
    dailyQuestions: -1,    // Unlimited
    dailyAiCalls: -1,      // Unlimited
  },
  achiever: {
    maxChildren: 6,        // 6 children = $2 per child
    dailyQuestions: -1,    // Unlimited
    dailyAiCalls: -1,      // Unlimited
  },
};
```

**Note**: `dailyAiCalls: -1` for free tier means "backend doesn't limit" but frontend MUST lock solutions. Actual AI rate limit is 10 calls/day enforced in ai.ts handler.

### AI Handler (`packages/api/src/handlers/ai.ts`)

**Lines 78-83**: AI call rate limits (OVERRIDES payment handler for actual enforcement)

```typescript
const RATE_LIMITS: Record<string, number> = {
  free: 10,              // 10 AI calls per day for free tier
  essential: 1000,       // Legacy tier
  premium: 1000,         // Legacy tier
};
```

**Lines 135-146**: Enforces rate limits and returns 429 error with upgrade prompt

### Progress Handler (`packages/api/src/handlers/progress.ts`)

**Lines 6-12**: Daily question limits with backward compatibility

```typescript
const TIER_LIMITS: Record<string, { dailyQuestions: number }> = {
  free: { dailyQuestions: 5 },      // 5 questions per day
  explorer: { dailyQuestions: 5 },  // 5 questions per day (legacy name for free tier)
  scholar: { dailyQuestions: -1 },  // Unlimited
  achiever: { dailyQuestions: -1 }, // Unlimited
};
```

**Lines 93-124**: Enforces daily question limit when saving quiz results with **Sydney timezone awareness**
- Uses `Australia/Sydney` timezone for accurate daily resets at local midnight
- Returns 403 error if limit exceeded with upgrade prompt

**Lines 175-234**: NEW endpoint `GET /progress/{childId}/check-limit?questions=N`
- Checks if user can answer N more questions before proceeding
- Uses Sydney timezone for accurate limit checking
- Returns `{ allowed: boolean, questionsUsed: number, limit: number, tier: string }`

---

## Frontend Enforcement

### Child Login (`apps/web/src/lib/api.ts`)

**Lines 422-430**: Child login response MUST include tier from parent

```typescript
export interface ChildLoginResponse {
  id: string;
  name: string;
  username?: string;
  yearLevel: number;
  avatar: string;
  parentId: string;
  tier: string; // Parent's subscription tier for feature gating
}
```

**Backend source**: `packages/api/src/handlers/child.ts:114`

### Learn Page (`apps/web/src/app/(student)/learn/page.tsx`)

**Line 171**: Limit modal state for graceful error handling

```typescript
const [showLimitModal, setShowLimitModal] = useState(false)
```

**Lines 302-319**: **Pre-quiz limit check** - Blocks quiz start if user already at daily limit

**Lines 361-388**: **Per-answer enforcement** - CRITICAL implementation
- Saves EACH answer immediately to database (not at quiz completion)
- Handles 403 errors gracefully with modal instead of browser alert
- Prevents users from bypassing limit by refreshing browser

**Lines 433-468**: **Per-question limit check** - Blocks proceeding to next question after 5th answer
- Saves partial progress when limit reached mid-quiz
- Shows upgrade modal instead of letting quiz continue

**Lines 787, 928**: Solution lock message updated to include "and detailed explanations"

**Lines 1224-1288**: **Professional upgrade modal** - Replaces browser alerts
- Warning icon with clear messaging about hitting limit
- Lists upgrade benefits (unlimited questions, full solutions, AI tutor)
- "View Plans" button linking to /pricing
- "Close" button to dismiss gracefully

---

## Backward Compatibility

### Legacy "Explorer" Tier Name

**Context**: The free tier was originally named "explorer" ($0.99/mo) but was renamed to "free" (Always Free, $0) in the 2026 pricing strategy. Existing users may still have `tier='explorer'` in the database.

**Requirement**: ALWAYS treat `tier === 'explorer'` as equivalent to `tier === 'free'`

**Implementation**:
- All tier checks use `tier === 'free' || tier === 'explorer'`
- Utility functions in `apps/web/src/lib/tier-utils.ts` normalize explorer → free
- Backend TIER_LIMITS uses 'free' only, but frontend handles both

---

## Trial Period

**All paid tiers (Scholar, Achiever)**: 3-day free trial

**Implementation**:
- Set in `packages/api/src/handlers/payment.ts:82` via Stripe checkout session
- `subscription_data.trial_period_days: 3`
- Card collected but not charged during trial
- After 3 days, Stripe automatically charges card
- Webhook `subscription.deleted` downgrades to free if payment fails

**Status Endpoint**: Returns `isTrialing` and `trialDaysLeft` for frontend to show trial badge

---

## Stripe Price IDs

**Environment Variables** (stored in `.env`):

```bash
STRIPE_PRICE_SCHOLAR=price_1SkzbOFqL65Zilf9RelDEV2A   # $5/month
STRIPE_PRICE_ACHIEVER=price_1SkzbOFqL65Zilf9RelDEV2A  # $12/month
STRIPE_PRICE_EXPLORER=price_1SlNTJFqL65Zilf9GZop22SQ # Legacy $0.99/mo (deprecated)
```

**Note**: Explorer price ID is kept for backward compatibility but should NOT be used for new signups

---

## Critical Rules

### ❌ DO NOT

1. **DO NOT** allow free tier users to see worked solutions (must show 🔒)
2. **DO NOT** allow Scholar users to create 2nd child (must redirect to upgrade)
3. **DO NOT** give free tier users more than 5 questions per day
4. **DO NOT** allow creating checkout session for 'free' or 'explorer' tiers
5. **DO NOT** forget to include `tier` field in child login response

### ✅ ALWAYS

1. **ALWAYS** check `tier === 'free' || tier === 'explorer'` for backward compatibility
2. **ALWAYS** use `-1` to represent unlimited in backend tier limits
3. **ALWAYS** enforce limits at BOTH frontend (UX) and backend (security)
4. **ALWAYS** show upgrade prompts when limits are hit (link to `/pricing`)
5. **ALWAYS** include tier info in child profile from parent's subscription

---

## Testing Free Tier Limits

**Test Account**:
- Email: `enhancedsoftsys@gmail.com`
- Password: `Pass123word`
- Tier: `explorer` (legacy free tier name)
- Has 6 children (to test child limit enforcement)

**What to Verify**:
1. ✅ Solutions are locked (show 🔒) when answer is wrong
2. ✅ "Explain this to me" button is hidden
3. ✅ AI chat limited to 10 calls/day (shows upgrade prompt)
4. ✅ Questions limited to 5 per day (backend returns 403)
5. ✅ Cannot add 2nd child (dashboard shows upgrade prompt)

---

## Monitoring & Metrics

**CloudWatch Metrics** (published from ai.ts):
- `RateLimitHits` - Count of users hitting AI rate limits
- Dimension: `Tier` (free/scholar/achiever)

**Usage Tracking**:
- AI calls stored per user as `aiCalls_YYYY-MM-DD` in DynamoDB
- Question counts calculated from quiz records with today's date filter
- Daily reset at midnight UTC

---

## Immediate Paid Tier Conversion (OAuth Strategy)

### Overview

When users sign up via **OAuth (Google/Facebook/Apple)**, they can be presented with a **tier selection page** immediately after authentication, dramatically increasing paid conversions.

### Strategy: Tier Choice vs Free-First

**Current (Free-First)**:
```
OAuth Login → Default to FREE → Dashboard → Hit limits → Upgrade
```

**Optimized (Tier Choice)**:
```
OAuth Login → CHOOSE TIER (with 3-day trial) → Dashboard
```

### Expected Impact

| Metric | Free-First | Tier Choice | Improvement |
|--------|-----------|-------------|-------------|
| **Paid signups** | 10% (after 30 days) | 40% (immediate) | **+300%** |
| **Revenue/100 users** | $64/month | $270/month | **+322%** |
| **Time to revenue** | 30 days | 3 days | **-90%** |

### Implementation

**File**: `apps/web/src/app/(auth)/choose-tier/page.tsx`

Shows 3 tier cards immediately after OAuth:
1. **Free** - 1 child, 5 questions/day, solutions locked
2. **Scholar ($5/mo)** - 1 child, unlimited, 3-day trial - **"MOST POPULAR"**
3. **Achiever ($12/mo)** - 6 children, unlimited, premium analytics, 3-day trial

**Conversion Psychology**:
- ✅ **Anchoring effect** - Free makes $5 look cheap
- ✅ **Choice architecture** - 3 options, middle most attractive
- ✅ **Social proof** - "1,000+ parents upgraded"
- ✅ **Risk removal** - 3-day trial, no charge, easy cancel
- ✅ **Default effect** - Pre-select or badge "Most Popular"

**Expected Distribution**:
- 50-60% choose Free (still good, in funnel)
- 30-40% choose Scholar ($5/mo)
- 10-15% choose Achiever ($12/mo)

### Revenue Math

**100 OAuth Signups**

**Free-First**:
```
90 free users + 10 paid (after 30 days)
= 8 × $5 + 2 × $12 = $64/month
```

**Tier Choice**:
```
60 free + 30 scholar + 10 achiever (immediate)
= 30 × $5 + 10 × $12 = $270/month
```

**Revenue increase**: **+322%**

### Backend Considerations

**No changes required** - Tier selection uses existing Stripe checkout flow with 3-day trial already configured.

**Post Authentication Lambda** creates user with `tier: 'free'` - tier choice page updates via Stripe webhook when user completes checkout.

### Backward Compatibility

**100% Safe for Existing Users**:
- Cognito trigger updated to handle both PostConfirmation (email) and PostAuthentication (OAuth)
- Uses `if_not_exists()` to prevent overwriting existing user data
- Existing paid users (Scholar/Achiever) keep their tier
- Analytics fields added only if missing
- No data loss, no breaking changes

**Analytics Tracking** ([cognito-trigger.ts](../../packages/api/src/handlers/cognito-trigger.ts)):
- `signupMethod`: 'email' | 'google' | 'facebook' | 'apple'
- `identityProvider`: Provider name for OAuth users
- `signupDate`: ISO timestamp of first signup
- `firstLoginDate`: For OAuth users (instant)
- `lastLoginDate`: Updated on each OAuth login

**Legacy User Handling**:
- Users without `signupMethod` treated as email signups
- Lambda backfills analytics fields on next login
- Analytics queries use `COALESCE(signupMethod, 'email')` for compatibility

### See Also

- Full implementation guide: `SOCIAL_AUTH_SETUP.md`
- OAuth configuration steps
- Analytics tracking details
- A/B testing recommendations
- Conversion optimization tactics
- Backward compatibility testing checklist

---

## Changelog

### 2026-01-08 (Latest)
- 📝 **DOCUMENTED**: Immediate paid tier conversion strategy for OAuth signups
  - Tier selection page shown after OAuth authentication
  - Expected +300% increase in paid conversions
  - Revenue/100 users: $64 → $270 (+322%)
  - Implementation guide added to SOCIAL_AUTH_SETUP.md
- ✅ **UPDATED**: Cognito trigger with analytics tracking and backward compatibility
  - Tracks `signupMethod` (email/google/facebook/apple) for all users
  - Uses `if_not_exists()` to prevent overwriting existing data
  - Existing paid users keep their tier - no data loss
  - PostAuthentication + PostConfirmation triggers unified
  - Analytics fields: signupMethod, identityProvider, firstLoginDate, lastLoginDate

### 2026-01-06
- ✅ **DEPLOYED**: Sydney timezone enforcement for daily question limits
  - Backend uses `Australia/Sydney` timezone for accurate daily resets
  - Daily limits reset at midnight Sydney time, not UTC
  - Deployed to Lambda: ProgressHandler updated at 3:43 PM
- ✅ **IMPLEMENTED**: Per-answer question limit enforcement
  - Each answer saved immediately to database
  - Pre-quiz check blocks starting if already at limit
  - Per-question check blocks after 5th answer during quiz
  - Professional modal UI instead of browser alerts
- ✅ **ADDED**: New API endpoint `/progress/{childId}/check-limit?questions=N`
  - Frontend checks limit before quiz start and each next question
  - Returns `{ allowed, questionsUsed, limit, tier }`
- ✅ **VERIFIED**: Comprehensive analytics tracking operational
  - Every child, every question, every answer tracked
  - Knowledge tokens, confusion patterns, time spent recorded
  - AI-powered insights with Groq integration
  - Token utilization metadata captured
- Updated solution lock message to include "and detailed explanations"
- Fixed `ChildLoginResponse` interface to include `tier` field
- Documented authoritative pricing rules
- Clarified AI rate limit vs solution lock for free tier

### 2026-01-05
- Fixed CORS blocking for grademychild.com.au domain
- Added backward compatibility for explorer tier name

### 2026-01-03
- Renamed Explorer ($0.99/mo) to Free (Always Free)
- Kept 'explorer' tier name in DB for backward compatibility

---

## References

**Key Files**:
- This document: `PRICING_2026.md` (AUTHORITATIVE)
- Backend limits: `packages/api/src/handlers/payment.ts:35-51`
- AI rate limits: `packages/api/src/handlers/ai.ts:78-83`
- Question limits: `packages/api/src/handlers/progress.ts:6-11`
- Frontend checks: `apps/web/src/app/(student)/learn/page.tsx`
- Tier utilities: `apps/web/src/lib/tier-utils.ts`
