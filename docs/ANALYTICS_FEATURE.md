# Learning Analytics Feature

## Overview

StudyMate's Learning Analytics is a premium feature (Scholar plan - $5/month) that provides detailed insights into a child's learning journey, going far beyond basic "you got 7/10" feedback.

## Key Features

### 1. Concept Mastery Tracking
- Breaks down performance by specific mathematical concepts (place value, rounding, fractions, etc.)
- Shows mastery percentage for each concept
- Tracks improvement trends (improving/stable/declining)

### 2. Error Pattern Detection
Identifies recurring mistakes such as:
- "Always rounds down when should round up"
- "Confuses place value when comparing numbers"
- "Adds instead of subtracts in word problems"
- "Misreads the question"

### 3. Daily Activity Charts
- Visual bar charts showing daily question attempts
- Colour-coded by accuracy (green/yellow/red)
- Tracks time spent learning
- Shows active days count

### 4. Personalised Recommendations
- Priority-based suggestions (high/medium/low)
- Specific activities to address weak areas
- Estimated time for each recommendation
- Parent-friendly language

### 5. Parent Reports
- Weekly/monthly summary reports
- Overall progress status (excellent/good/needs-attention/struggling)
- Key insights in plain language
- Achievement tracking

## Technical Architecture

### API Endpoints
- `POST /analytics/attempt` - Record detailed attempt with question data
- `GET /analytics/child/:childId/concepts` - Concept mastery breakdown
- `GET /analytics/child/:childId/weaknesses` - Identify struggling areas
- `GET /analytics/child/:childId/patterns` - Error pattern analysis
- `GET /analytics/child/:childId/report` - Full parent report
- `GET /analytics/child/:childId/daily` - Daily activity stats

### Data Tracked Per Attempt
- Question text, options, and explanation
- Selected answer vs correct answer
- Time spent on question
- Whether AI explanation was requested
- Session type (quiz/practice/exam)

### Concept Taxonomy
Questions are automatically tagged with concepts like:
- `place-value-identification`
- `rounding`
- `fraction-equivalence`
- `decimal-comparison`
- etc.

## Premium Gating

- **Free (Explorer)**: Basic progress tracking only
- **Scholar ($5/mo)**: Full analytics dashboard access
- **Achiever ($12/mo)**: Full analytics + PDF reports

Free users see an upgrade prompt when accessing `/analytics`.

---

# Marketing/Social Media Posts

## Post 1: The Problem
**Hook**: "Most tutoring apps just tell you 'You got 7/10'. But that tells you nothing about WHERE your child is struggling."

**Body**: We built something different. StudyMate's Learning Analytics shows you EXACTLY which concepts your child has mastered vs needs work.

Not just "maths is hard" - but "your child consistently confuses place value when comparing 4-digit numbers."

That's actionable. That's what parents need.

**CTA**: Try StudyMate's Learning Analytics - link in bio

---

## Post 2: Error Pattern Detection
**Hook**: "Our AI doesn't just mark answers wrong. It spots PATTERNS in your child's mistakes."

**Body**: Example: After 20 rounding questions, StudyMate noticed something.

"Your child rounds DOWN 80% of the time when they should round UP. They're forgetting the '5 or more' rule."

Now you know EXACTLY what to practise.

**CTA**: This is what personalised learning looks like.

---

## Post 3: Parent-Friendly Insights
**Hook**: "You don't need to be a maths teacher to help your child."

**Body**: StudyMate translates learning data into plain English:

Instead of:
"Accuracy: 45% on place-value-identification"

You see:
"Emma is struggling to identify what each digit represents in large numbers. Try using physical counters to show hundreds, tens, and ones."

**CTA**: Analytics that actually help. Not just numbers.

---

## Post 4: The Differentiator
**Hook**: "What makes StudyMate different from Mathspace, IXL, or Khan Academy?"

**Body**:
1. We track WHY your child gets questions wrong, not just that they did
2. We detect recurring mistake patterns across weeks of learning
3. We give parents specific, actionable recommendations
4. We're aligned to the Victorian curriculum (Years 3-6)

**CTA**: Premium analytics from $5/month. Try free first.

---

## Post 5: Real Example
**Hook**: "Here's what a parent saw in their StudyMate dashboard this week:"

**Body**:
- Concept Mastery: Rounding (92%), Place Value (67%), Fractions (45%)
- Error Pattern Detected: "Confuses numerator and denominator when comparing fractions"
- Recommendation: "Spend 10 minutes with pizza slices showing 1/2 vs 2/4"
- Trend: Improving in place value (+12% this week)

This is the visibility every parent deserves.

---

## Key Phrases to Use
- "See exactly which concepts your child struggles with"
- "Detects recurring mistake patterns"
- "Actionable insights, not just numbers"
- "Parent-friendly language"
- "Know what to practise, not just that they need to"
- "Beyond 'you got 7/10'"

## Hashtags
#EdTech #ParentingTips #MathsHelp #PrimarySchool #VictorianCurriculum #LearningAnalytics #PersonalisedLearning #StudyMate
