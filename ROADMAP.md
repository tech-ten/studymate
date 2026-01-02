# StudyMate Roadmap

## Email Notifications (Priority: High)

### Transactional Emails
Email notifications for key user lifecycle events:

1. **Sign Up Confirmation**
   - Trigger: New parent account created
   - To: Parent email
   - Content: Welcome message, getting started guide, link to add child

2. **Subscription Created**
   - Trigger: Successful payment for Scholar/Achiever plan
   - To: Parent email
   - Content: Confirmation, plan details, features unlocked, receipt

3. **Subscription Cancelled**
   - Trigger: User cancels subscription
   - To: Parent email
   - Content: Confirmation, access end date, what they'll lose, win-back offer

4. **Internal Notifications (Admin)**
   - New sign-up alert to admin
   - New subscription alert to admin
   - Cancellation alert to admin (for churn tracking)

### Implementation Notes
- Use AWS SES (already configured for domain)
- Create email templates in `/packages/email/templates/`
- Add Lambda handler for email sending
- Consider using react-email for template design
- Track email events (opens, clicks) for engagement metrics

---

## AI Analytics Enhancement (Priority: Medium)

### Knowledge Token Pipeline
Currently, knowledge tokens are defined in curriculum but not flowing through to analytics:

1. **Frontend**: Pass `knowledge` field from question data when submitting answers
2. **API**: Already handles knowledge tokens in `/analytics/attempt`
3. **Display**: AI insights section ready but needs data

### Bundle groq-sdk with Lambda
Options:
- Use esbuild bundling in CDK instead of tsc
- Or use AWS Lambda layers for groq-sdk
- Current: Using dynamic import with fallback (works but no AI)

---

## Future Features

### Learning
- [ ] Spaced repetition for revision
- [ ] Adaptive difficulty based on mastery
- [ ] Subject expansion (English, Science)
- [ ] Parent-set learning goals

### Engagement
- [ ] Weekly progress email to parents
- [ ] Achievement celebration emails
- [ ] Streak notifications
- [ ] Learning milestones

### Analytics
- [ ] Comparative benchmarks (vs year level)
- [ ] Time-of-day learning patterns
- [ ] Exportable reports (PDF)

---

## Comparative Reporting (Priority: Medium)

### Year Level Benchmarking Report
Show where child stands compared to:
1. **Content mastery** - Percentage of curriculum completed correctly
2. **Quartile ranking** - Position among all users at that year level

**Report Features:**
- Visual scale showing child's position (e.g., "Above average for Year 5")
- Breakdown by strand (Number & Algebra, Measurement & Geometry, etc.)
- Percentile ranking (top 25%, top 50%, etc.)
- Anonymous aggregate comparisons
- Historical trend (improving/declining vs peers)

**Privacy Considerations:**
- Only show aggregate data, never individual student comparisons
- Opt-in for benchmarking participation
- Store only anonymized aggregate metrics

**Implementation Notes:**
- Aggregate daily/weekly batch job to calculate quartiles
- Store in DynamoDB: `BENCHMARK#YEAR5#2026-01`, GSI for queries
- API endpoint: `GET /analytics/benchmark/:yearLevel`
- Frontend: Chart component showing position on bell curve
