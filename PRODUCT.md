# Grade My Child - AI-Powered Learning Platform for Australian Students

**Live**: https://grademychild.com.au
**Legacy URL**: https://tutor.agentsform.ai
**Target Market**: Australian families with children in Years 3-6
**Status**: Production-ready with payment infrastructure

---

## Value Proposition

### For Parents
- **Personalised Learning**: AI adapts to each child's pace and identifies weak areas
- **Curriculum-Aligned**: Content maps directly to Victorian/Australian curriculum standards
- **Transparent Progress**: Real-time dashboards show exactly where your child stands
- **Affordable**: $5-12/month vs $50-100/hour for human tutors
- **Safe**: No ads, no data selling, Australian-hosted (Sydney)
- **Self-Paced**: Unlike group classes (Kumon, James An), kids learn at their own speed

### For Students
- **Fun, Not Boring**: Gamified with XP, badges, streaks, and levels
- **Instant Help**: AI tutor available 24/7 to explain concepts
- **No Pressure**: Learn at your own pace without judgment
- **Cambridge-Style Exams**: Practice for selective school/scholarship tests

### For Investors
- **Low CAC**: Organic growth via school networks and parent referrals
- **High LTV**: Multi-year retention as children progress through grades
- **Scalable**: Serverless architecture costs ~$0.04/user/month
- **Defensible**: Curriculum-specific content and learning data moat

---

## Why Not Just Use ChatGPT?

A fair question. Here's the difference:

| Feature | Free ChatGPT | Grade My Child |
|---------|-------------|----------------|
| Curriculum alignment | Generic knowledge | Victorian VCAA codes |
| Progress tracking | None | Per-child, per-section |
| Structured learning | Random Q&A | Strands → Chapters → Sections |
| Parent visibility | None | Dashboard with accuracy, streaks |
| Age-appropriate | User must prompt | Automatic Year 3-6 level |
| Assessment | None | Cambridge-style exams |
| Gamification | None | XP, badges, streaks |
| Safety | Minimal | Child-safe, guardrailed |
| Data residency | US servers | Sydney, Privacy Act compliant |

**ChatGPT is a tool. Grade My Child is a learning system.**

### What Parents Actually Pay For

1. **Structure** - Systematic curriculum coverage, not random Q&A
2. **Accountability** - Progress tracking, streaks, parent reports
3. **Safety** - Guardrailed AI, no ads, Australian data residency
4. **Peace of mind** - Covers exactly what school covers
5. **Record keeping** - All AI interactions logged for review

---

## Competitive Landscape

| Service | Monthly Cost | AI | Curriculum | Self-Paced |
|---------|-------------|-----|------------|------------|
| **Kumon** | $80-160 | No | Generic | Fixed pace |
| **James An College** | $200-400 | No | Yes | Group pace |
| **Cluey Learning** | $300+ | No | Yes | Tutor-paced |
| **Khan Academy** | Free | Limited | US-focused | Yes |
| **Grade My Child** | $5-12 | Yes | Victorian | Yes |

**Our position**: Premium AI features at commodity pricing

---

## Test Results (Live Production - 2 Jan 2026)

| Endpoint | Status | Response |
|----------|--------|----------|
| Website | ✅ 200 OK | tutor.agentsform.ai loads |
| AI Chat | ✅ Working | Groq LLaMA 3.3 responding |
| Admin Stats | ✅ Working | 1 user, 1 child, 25 AI calls today |
| Admin Payments | ✅ Working | Stripe integration active |
| Usage Analytics | ✅ Working | 7-day usage chart data |

---

## Pricing Tiers

| Tier | Price | Children | AI Calls/Day | Questions/Day |
|------|-------|----------|--------------|---------------|
| **Free** | $0 | 2 | 10 | 20 |
| **Scholar** | $5/mo | 5 | Unlimited | Unlimited |
| **Achiever** | $12/mo | 10 | Unlimited | Unlimited + Reports |

**Free Trial**: 14 days on paid plans (card required, not charged)

---

## User Journeys

### Parent Journey

```
1. DISCOVER
   └─ Google "Year 5 maths tutor Melbourne"
   └─ Friend recommendation
   └─ School newsletter

2. SIGN UP (2 min)
   └─ grademychild.com.au/get-started
   └─ Email + password
   └─ Email verification

3. ADD CHILD (1 min)
   └─ Child's first name
   └─ Year level (3-6)
   └─ Create PIN for child login
   └─ Choose avatar

4. BENCHMARK (5 min)
   └─ Child takes placement test
   └─ AI determines starting level
   └─ Weak areas identified

5. DAILY LEARNING
   └─ Child logs in with PIN
   └─ 15-20 min daily practice
   └─ AI explains wrong answers
   └─ Parent receives weekly summary

6. UPGRADE (when ready)
   └─ Hit free tier limit (10 AI calls)
   └─ /pricing page
   └─ Stripe checkout (14-day trial)
   └─ Instant upgrade

7. MANAGE SUBSCRIPTION
   └─ Dashboard → "Manage" button
   └─ Stripe portal: update card, cancel, invoices
```

### Child Journey (Student Experience)

```
1. LOGIN
   └─ grademychild.com.au/child-login
   └─ Enter parent email + child name + PIN
   └─ See their avatar and name

2. HOME SCREEN
   └─ Current streak (🔥 3 days!)
   └─ Total XP and level
   └─ Daily challenges
   └─ Subject selection

3. LEARN → MATHS
   └─ Curriculum browser (Victorian standards)
   └─ Select strand: Number & Algebra
   └─ Select chapter: Fractions
   └─ Read notes with examples

4. QUIZ
   └─ 5-10 questions per section
   └─ Immediate feedback
   └─ Wrong? → AI explains why
   └─ Right? → +10 XP, streak continues

5. AI TUTOR
   └─ "I don't understand fractions"
   └─ AI responds at Year 5 level
   └─ Uses Australian examples
   └─ Encourages, doesn't give away answers

6. EXAM MODE
   └─ Cambridge-style timed test
   └─ 20 questions, 20 minutes
   └─ Similar to NAPLAN/selective tests
   └─ Full report at end

7. ACHIEVEMENTS
   └─ Badges earned
   └─ Leaderboard (optional)
   └─ Level progression
```

### Admin Journey (AgentsForm Personnel)

```
1. ACCESS
   └─ grademychild.com.au/admin
   └─ Enter admin key
   └─ (Separate from parent accounts)

2. DASHBOARD TABS
   ├─ Overview
   │   └─ Total users, children, AI calls
   │   └─ Today's activity
   │
   ├─ Users
   │   └─ List all parents
   │   └─ Their tier (free/scholar/achiever)
   │   └─ AI usage today
   │
   ├─ Children
   │   └─ All child profiles
   │   └─ Year levels distribution
   │   └─ Learning activity
   │
   ├─ AI Logs
   │   └─ Recent AI interactions
   │   └─ Response times (latency)
   │   └─ Token usage (cost tracking)
   │
   ├─ Usage Charts
   │   └─ 7-day AI call trends
   │   └─ Peak usage times
   │
   └─ Payments (Stripe)
       └─ Revenue summary
       └─ Active subscriptions
       └─ Failed payments
       └─ Customer list
```

---

## Feature Highlights

### 1. Victorian Curriculum Browser
- Organised by VCAA curriculum codes
- Strands → Chapters → Sections
- Each section has:
  - Markdown notes with key concepts
  - Worked examples
  - 5-10 quiz questions
  - AI-powered explanations

### 2. AI Tutor (Groq LLaMA 3.3 70B)
- **Response time**: ~1 second
- **Cost**: Free tier (30 req/min)
- **Context-aware**: Knows child's year level
- **Curriculum-aligned**: Uses Victorian terminology
- **Safe**: No inappropriate content

### 3. Cambridge-Style Exams
- Timed tests (20 min)
- Multiple choice format
- Difficulty scaling
- Detailed results breakdown
- Similar to NAPLAN, selective school tests

### 4. Gamification
- XP for correct answers
- Level progression (1-10)
- Streak tracking (consecutive days)
- Badges for achievements
- Leaderboards (opt-in)

### 5. Parent Dashboard
- Per-child progress view
- Subject breakdown
- Accuracy trends
- Weekly question count
- Upgrade prompts for free tier

### 6. Subscription Management
- Stripe integration
- 14-day free trial
- Self-service portal (update card, cancel)
- Automatic tier enforcement

---

## Technical Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND                              │
│         Next.js 14 (Static Export on CloudFront)        │
│              grademychild.com.au                        │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                    API GATEWAY                           │
│            AWS HTTP API v2 (71% cheaper)                 │
│    yhn9tli08d.execute-api.ap-southeast-2.amazonaws.com  │
└─────────────────────────────────────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Lambda     │  │   Lambda     │  │   Lambda     │
│  (Handlers)  │  │  (AI/Groq)   │  │  (Payments)  │
│   Node 20    │  │   Node 20    │  │   Stripe     │
│    ARM64     │  │   256MB      │  │   Node 20    │
└──────────────┘  └──────────────┘  └──────────────┘
        │                 │                 │
        └─────────────────┼─────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────┐
│                    DYNAMODB                              │
│             Single-table design                          │
│              agentsform-main                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    COGNITO                               │
│           Parent authentication                          │
│        ap-southeast-2_KQjSkcKvP                         │
└─────────────────────────────────────────────────────────┘
```

### Cost Model (Per Active User/Month)

| Service | Cost |
|---------|------|
| Lambda | $0.005 |
| API Gateway | $0.003 |
| DynamoDB | $0.008 |
| CloudFront | $0.004 |
| Cognito | $0.000 (free <50K) |
| Groq AI | $0.015 |
| **Total** | **~$0.04** |

At $5/month subscription = **125x margin** on infrastructure.

---

## Roadmap

### Q1 2026 (Current)
- [x] Victorian curriculum Years 3-6 Maths
- [x] AI tutor with Groq
- [x] Stripe payments with 14-day trial
- [x] Admin dashboard with analytics

### Q2 2026
- [ ] English curriculum (Years 3-6)
- [ ] Science curriculum (Years 3-6)
- [ ] Parent mobile app (React Native)
- [ ] Weekly email reports

### Q3 2026
- [ ] Years 7-10 content
- [ ] School bulk licensing
- [ ] Teacher dashboards
- [ ] Custom branded portals

### Q4 2026
- [ ] NSW/QLD curriculum variants
- [ ] AI-generated practice tests
- [ ] **AI-Powered Video Explanations** - Personalized animated videos generated on-demand explaining concepts the child struggled with, using AI voice synthesis and dynamic visual generation
- [ ] Peer tutoring marketplace

---

## Security & Privacy

- **Data Residency**: All data in AWS Sydney (ap-southeast-2)
- **Child Data**: Only first name + year level stored (no DOB, email, school)
- **Encryption**: TLS 1.3 in transit, AES-256 at rest
- **Compliance**: Australian Privacy Act 1988, APP Guidelines
- **No Tracking**: No third-party analytics in child areas
- **Parental Control**: Parents own all child data, can delete anytime

---

## Contact

- **Product**: grademychild.com.au
- **Admin**: grademychild.com.au/admin
- **Legacy URL**: tutor.agentsform.ai
- **Support**: (via AgentsForm)
