# Grade My Child - Next Steps

## Current Status (January 2026)

- **Platform**: Live at grademychild.com.au
- **Users**: 5 registered families
- **Content**: Years 3-6 Maths complete (Victorian curriculum)
- **Tech**: Fully deployed (AWS, Stripe, Google OAuth)

---

## Strategic Decision: Bootstrap vs Funding

### Recommendation: Bootstrap to Product-Market Fit

Given the unit economics (99% gross margin, $0.04/user infrastructure cost), bootstrap until reaching 500-1,000 paying users. This proves demand and provides leverage for better funding terms if needed later.

**Key metric to prove**: Can 15% of free users convert to $5-12/month paid plans?

---

## Priority Order

### 1. Marketing (Highest Leverage) - Focus Now

The product works. The bottleneck is distribution, not features.

#### Free Tactics (Start Immediately)
- [ ] Post in Melbourne/Australian parent Facebook groups
- [ ] School gate conversations (leverage 3 kids = built-in network)
- [ ] Ask 5 current users for referrals (offer free month incentive)
- [ ] SEO blog posts: "Year 5 maths help Melbourne" style content
- [ ] Contact local school newsletters (free educational resource mentions)

#### Paid Acquisition (When Ready)
- [ ] Facebook ads: $5-10/day targeting Melbourne parents with primary school kids
- [ ] Test for 1 week, measure cost per signup
- [ ] Target: <$20 CAC for LTV:CAC ratio >4:1

### 2. Time Management

Solo founder with full-time job and 3 kids. Strategies:

- Treat as side project until $500 MRR (proves demand)
- Dedicate specific hours: 6-8am before work, weekends
- Feature freeze: no new development, only acquisition and conversion

### 3. Content Development (Defer)

Years 3-6 Maths is sufficient to prove product-market fit. English/Science can wait until 100+ paying users demand it.

---

## 4-Week Sprint: Distribution Focus

### Week 1-2: Organic Outreach
- Post in 5 parent Facebook groups
- Talk to 10 parents at school
- Email existing users asking for referrals

### Week 3-4: Measure & Iterate
- Track signups from each channel
- Identify highest-converting source
- Double down on what works

### Success Criteria
- **Target**: 50 new family signups
- **Measure**: Free-to-paid conversion rate
- **Goal**: Identify scalable acquisition channel

---

## Why Not Seek Funding Now

### Pros of Bootstrapping
- 99% gross margin = profitable from user #1
- $0.04/user cost = 25,000 users on $1,000/month infra
- Full ownership, no dilution, no board meetings
- Fast iteration without consensus

### Cons of Raising Now
- VCs expect 10x+ returns; $840M Australian TAM may underwhelm
- Pressure to expand to US/UK (different curricula, more competition)
- Loss of control, reporting obligations
- Australian ed-tech exits are rare

### When to Reconsider Funding
- After proving 15%+ free-to-paid conversion
- After reaching 500+ paying users
- If school partnerships require "funded startup" credibility
- If ready to expand to Years 7-12 or other states

---

## Key Metrics to Track

| Metric | Current | Target (4 weeks) |
|--------|---------|------------------|
| Registered families | 5 | 50 |
| Paying users | 1 | 5 |
| Free→Paid conversion | — | 10-15% |
| Cost per signup | — | <$20 |
| MRR | ~$5 | $50 |

---

## What NOT to Do

1. **Don't add features** - The product is complete enough
2. **Don't expand content** - Maths Years 3-6 is sufficient to test
3. **Don't optimize code** - Focus on users, not tech
4. **Don't seek funding** - Prove demand first
5. **Don't compare to competitors** - Execute on distribution

---

## Technical Debt (Low Priority)

Items to address after reaching 100+ users:

### Subscription Management
- [ ] **Enable Scholar → Achiever upgrade**: Currently no way for Scholar users to upgrade to Achiever from dashboard. Options:
  1. Configure Stripe Billing Portal (Dashboard → Settings → Billing → Customer Portal → Enable "Allow customers to switch plans")
  2. Or add "Upgrade to Achiever" button in dashboard for Scholar users
  - **Impact**: Low (unlikely to have multi-child families hitting Scholar limits early)

---

## Document Control

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 15 Jan 2026 | Initial strategy document |
