# 2026 Pricing Strategy - Comprehensive Test Plan

**Test Environment**: https://grademychild.com.au
**Legacy URL (Insecure)**: https://tutor.agentsform.ai (redirects to grademychild.com.au)
**Date**: January 6, 2026
**Version**: 1.3

---

## Security Note

⚠️ **IMPORTANT**: `tutor.agentsform.ai` is currently insecure (no SSL) but redirects to secure `grademychild.com.au`. Always use the secure domain for testing.

---

## Test Overview

This test plan validates the complete 2026 pricing strategy implementation including:
- Free tier registration (no credit card)
- Paid tier registration (3-day trials)
- Tier limits enforcement (child limits, daily questions)
- Feature gating (locked solutions, locked drill-down)
- Upgrade triggers and conversion flows

---

## Pre-Test Setup

### Test Accounts Required

| Account Type | Email | Plan | Purpose |
|--------------|-------|------|---------|
| Test Free User | test-free@example.com | Explorer (Free) | Test free tier limits |
| Test Scholar User | test-scholar@example.com | Scholar ($5/mo) | Test Scholar tier limits |
| Test Achiever User | test-achiever@example.com | Achiever ($12/mo) | Test full access |

### Test Data Setup

- Use test credit card: `4242 4242 4242 4242`, any future expiry, any CVC
- Use unique emails for each test (append timestamp: `test-free-20260106@example.com`)
- Clear browser cache and localStorage before each test
- Use incognito/private browsing for registration tests

### Tools Needed

- Browser: Chrome/Safari (latest)
- Admin Dashboard Access: `https://grademychild.com.au/admin`
- Stripe Dashboard: Monitor test mode payments
- Database Access: Verify DynamoDB records (optional)

---

## Test Cases

## 1. Free Tier Registration Journey (No Credit Card)

**Priority**: P0 (Critical)
**Estimated Time**: 5 minutes

### Test Steps

1. **Landing Page**
   - [ ] Navigate to `https://grademychild.com.au`
   - [ ] Verify page loads with secure HTTPS
   - [ ] Click "Get Started" button

2. **Email Capture**
   - [ ] Redirected to `/get-started`
   - [ ] Enter email: `test-free-YYYYMMDD-HHMMSS@example.com`
   - [ ] Click "Continue"

3. **Plan Selection**
   - [ ] Redirected to `/choose-plan`
   - [ ] Verify email is pre-filled from sessionStorage
   - [ ] Verify three plan cards displayed:
     - [ ] Explorer (Free): "Always Free", "No credit card required"
     - [ ] Scholar ($5/mo): "Most popular" badge, "3-day free trial"
     - [ ] Achiever ($12/mo): "3-day free trial"
   - [ ] Click "Select Explorer"

4. **Registration**
   - [ ] Redirected to `/register?plan=free&email=...`
   - [ ] Verify email is pre-filled
   - [ ] Verify plan shows "Explorer - Always Free" (locked, not changeable)
   - [ ] Enter name: "Test Free User"
   - [ ] Enter password: Strong password (min 8 chars)
   - [ ] Confirm password: Same password
   - [ ] Click "Create Account"

5. **Email Verification**
   - [ ] Redirected to `/verify?email=...&plan=free`
   - [ ] Check email inbox for verification code
   - [ ] Enter 6-digit verification code
   - [ ] Click "Verify Email"

6. **Login (No Stripe for Free Tier)**
   - [ ] Redirected to `/login?email=...` (NO `checkout` param)
   - [ ] Verify email is pre-filled
   - [ ] Enter password
   - [ ] Click "Sign In"
   - [ ] **CRITICAL**: Should redirect directly to `/dashboard`
   - [ ] **CRITICAL**: Should NOT go through Stripe checkout

7. **Dashboard - First Time**
   - [ ] Verify redirected to `/dashboard`
   - [ ] Verify "No children added yet" prompt displayed
   - [ ] Click "Add Your First Child"

8. **Add Child**
   - [ ] Redirected to `/children/add`
   - [ ] Select avatar
   - [ ] Enter name: "TestKid Free"
   - [ ] Select year level: "5"
   - [ ] Enter PIN: "1234"
   - [ ] Click "Add Child"
   - [ ] Verify redirected to `/benchmark?child={childId}`

9. **Verify User Profile in Database**
   - [ ] Admin Dashboard → Users tab
   - [ ] Find user by email
   - [ ] Verify tier: `free`
   - [ ] Verify status: `verified`
   - [ ] Verify stripeCustomerId: `null`
   - [ ] Verify stripeSubscriptionId: `null`

### Expected Results

✅ Free tier user created without credit card
✅ User bypasses Stripe checkout
✅ User can add 1 child
✅ Database shows tier=free, no Stripe IDs

### Known Issues

- None expected

---

## 2. Paid Tier Registration Journey (Scholar $5/mo)

**Priority**: P0 (Critical)
**Estimated Time**: 7 minutes

### Test Steps

1. **Landing Page → Email Capture → Plan Selection**
   - [ ] Navigate to `https://grademychild.com.au`
   - [ ] Click "Get Started"
   - [ ] Enter email: `test-scholar-YYYYMMDD-HHMMSS@example.com`
   - [ ] Click "Continue"

2. **Plan Selection**
   - [ ] On `/choose-plan`
   - [ ] Click "Select Scholar" (Most popular)

3. **Registration**
   - [ ] On `/register?plan=scholar&email=...`
   - [ ] Verify plan shows "Scholar - $5/month" (locked)
   - [ ] Enter name: "Test Scholar User"
   - [ ] Enter password
   - [ ] Click "Create Account"

4. **Email Verification**
   - [ ] On `/verify?email=...&plan=scholar`
   - [ ] Enter verification code from email
   - [ ] Click "Verify Email"

5. **Login with Stripe Redirect**
   - [ ] Redirected to `/login?checkout=scholar&email=...`
   - [ ] Enter password
   - [ ] Click "Sign In"
   - [ ] **CRITICAL**: Should redirect to Stripe Checkout (NOT dashboard)

6. **Stripe Checkout**
   - [ ] Verify on Stripe hosted checkout page
   - [ ] Verify plan: "Scholar - $5/month"
   - [ ] Verify trial: "3-day free trial"
   - [ ] Enter test card: `4242 4242 4242 4242`
   - [ ] Enter future expiry date
   - [ ] Enter any CVC
   - [ ] Click "Start trial"

7. **Dashboard After Stripe**
   - [ ] Redirected to `/dashboard?payment=success`
   - [ ] Verify success message displayed
   - [ ] Click "Add Your First Child"

8. **Verify Stripe Webhook**
   - [ ] Stripe Dashboard → Events
   - [ ] Verify `checkout.session.completed` event received
   - [ ] Verify webhook succeeded (200 OK)

9. **Verify User Profile in Database**
   - [ ] Admin Dashboard → Users tab
   - [ ] Find user by email
   - [ ] Verify tier: `scholar`
   - [ ] Verify status: `active`
   - [ ] Verify stripeCustomerId: exists (starts with `cus_`)
   - [ ] Verify stripeSubscriptionId: exists (starts with `sub_`)
   - [ ] Verify subscribedAt: today's date

### Expected Results

✅ Paid tier user goes through Stripe
✅ 3-day trial applied
✅ Webhook updates user to tier=scholar, status=active
✅ Stripe IDs stored in database

---

## 3. Free Tier Limit: Try to Add 2nd Child

**Priority**: P0 (Critical)
**Estimated Time**: 3 minutes

### Prerequisites

- Complete Test Case #1 (Free user with 1 child)

### Test Steps

1. **Navigate to Add Child**
   - [ ] Login as free tier user
   - [ ] Go to `/dashboard`
   - [ ] Click "Add Another Child"
   - [ ] Redirected to `/children/add`

2. **Submit 2nd Child**
   - [ ] Select avatar
   - [ ] Enter name: "TestKid Two"
   - [ ] Select year level: "3"
   - [ ] Enter PIN: "5678"
   - [ ] Click "Add Child"

3. **Verify Tier Limit Enforcement**
   - [ ] **CRITICAL**: Backend returns 403 error
   - [ ] **CRITICAL**: Form becomes disabled (opacity: 0.5)
   - [ ] **CRITICAL**: Upgrade UI displayed:
     - [ ] 🔒 icon visible
     - [ ] Heading: "Ready for more?"
     - [ ] Message: "Your Explorer plan includes 1 child profile. To add more children, upgrade to Scholar ($5/mo) or Achiever ($12/mo for 6 children)."
     - [ ] "See Plans" button
     - [ ] "Back to Dashboard" button

4. **Test Upgrade Flow**
   - [ ] Click "See Plans"
   - [ ] Redirected to `/pricing`
   - [ ] Verify current plan badge on Explorer (Free)
   - [ ] Verify Scholar and Achiever upgrade options

### Expected Results

✅ Backend blocks 2nd child creation
✅ Frontend shows compelling upgrade UI
✅ Message explains limit and upgrade path

---

## 4. Free Tier Limit: Daily Question Limit (5 questions/day)

**Priority**: P0 (Critical)
**Estimated Time**: 5 minutes

### Prerequisites

- Free tier user with child profile created

### Test Steps

1. **Child Login**
   - [ ] Navigate to `/child-login`
   - [ ] Enter parent email
   - [ ] Enter child name
   - [ ] Enter PIN
   - [ ] Click "Log In"
   - [ ] Verify childProfile.tier = 'free' in localStorage

2. **Complete 5 Quizzes**
   - [ ] Navigate to `/learn` or curriculum section
   - [ ] Complete Quiz 1 (5 questions) → Submit
   - [ ] Verify quiz saved successfully
   - [ ] Complete Quiz 2 (5 questions) → Submit
   - [ ] Verify quiz saved successfully
   - [ ] Verify daily total = 10 questions

3. **Attempt 6th Quiz (Exceeds Limit)**
   - [ ] Start Quiz 3
   - [ ] Answer questions
   - [ ] Click "Submit Quiz"
   - [ ] **CRITICAL**: Backend returns 403 error
   - [ ] **CRITICAL**: Error message displayed:
     - [ ] "Daily question limit reached. Your free plan allows 5 questions per day."
     - [ ] Shows limit: 5
     - [ ] Shows used: 10 (or current count)
     - [ ] Shows tier: free
     - [ ] "Upgrade" button to `/pricing`

4. **Test Upgrade Flow**
   - [ ] Click "Upgrade" button
   - [ ] Redirected to `/pricing`
   - [ ] Verify upgrade options displayed

### Expected Results

✅ Backend tracks daily question count
✅ Backend enforces 5 questions/day for free tier
✅ Frontend shows upgrade prompt at limit

### Notes

- Daily limit resets at midnight UTC
- Test next day to verify reset works

---

## 5. Free Tier Feature Lock: Solutions Locked After Wrong Answer

**Priority**: P0 (Critical)
**Estimated Time**: 3 minutes

### Prerequisites

- Free tier child logged in (childProfile.tier = 'free')

### Test Steps

1. **Start Learning Session**
   - [ ] Navigate to `/learn`
   - [ ] Select a section
   - [ ] Start quiz

2. **Answer Question Incorrectly**
   - [ ] Read question
   - [ ] Select WRONG answer
   - [ ] Click "Submit" or "Check Answer"

3. **Verify Solution is Locked**
   - [ ] **CRITICAL**: Solution explanation NOT displayed
   - [ ] **CRITICAL**: Lock UI displayed instead:
     - [ ] 🔒 icon visible
     - [ ] Heading: "Solution locked"
     - [ ] Message: "Upgrade to see worked solutions"
     - [ ] "Upgrade" button (rounded-full style)
   - [ ] Verify clean Jony Ive aesthetic (neutral-50 bg, neutral-200 border)

4. **Answer Question Correctly**
   - [ ] Navigate to next question
   - [ ] Select CORRECT answer
   - [ ] Click "Submit"
   - [ ] **CRITICAL**: Solution/explanation IS displayed (no lock)

5. **Test Upgrade Flow**
   - [ ] Go back to wrong answer
   - [ ] Click "Upgrade" button on locked solution
   - [ ] Redirected to `/pricing`

### Expected Results

✅ Solutions locked for wrong answers (free tier)
✅ Solutions shown for correct answers
✅ Lock UI matches design spec (clean, minimal)
✅ Upgrade button works

---

## 6. Scholar Tier Limit: Try to Add 2nd Child

**Priority**: P0 (Critical)
**Estimated Time**: 3 minutes

### Prerequisites

- Complete Test Case #2 (Scholar user with 1 child)

### Test Steps

1. **Navigate to Add Child**
   - [ ] Login as Scholar tier user
   - [ ] Go to `/dashboard`
   - [ ] Click "Add Another Child"
   - [ ] Redirected to `/children/add`

2. **Submit 2nd Child**
   - [ ] Fill out form (avatar, name, year level, PIN)
   - [ ] Click "Add Child"

3. **Verify Tier Limit Enforcement**
   - [ ] **CRITICAL**: Backend returns 403 error
   - [ ] **CRITICAL**: Form becomes disabled
   - [ ] **CRITICAL**: Upgrade UI displayed:
     - [ ] 🔒 icon visible
     - [ ] Heading: "Need more child profiles?"
     - [ ] Message: "Your Scholar plan includes 1 child profile. To add more children, upgrade to Achiever for just $12/mo (6 child profiles - just $2 per child)."
     - [ ] "Upgrade to Achiever" button
     - [ ] "Back to Dashboard" button

4. **Verify Single Child Squeeze**
   - [ ] Note the messaging emphasizes value: "$2 per child"
   - [ ] Note it forces $5 → $12 upgrade (2.4x revenue jump)

5. **Test Upgrade Flow**
   - [ ] Click "Upgrade to Achiever"
   - [ ] Redirected to `/pricing`
   - [ ] Verify current plan badge on Scholar
   - [ ] Verify Achiever upgrade option highlighted

### Expected Results

✅ Backend blocks 2nd child for Scholar tier
✅ Frontend shows compelling upgrade UI
✅ Message emphasizes value ($2/child)
✅ Forces $5→$12 upgrade

---

## 7. Scholar Tier Feature Lock: Drill-Down Locked

**Priority**: P0 (Critical)
**Estimated Time**: 4 minutes

### Prerequisites

- Scholar tier user with child who has completed quizzes

### Test Steps

1. **Navigate to Progress Page**
   - [ ] Login as Scholar tier user (parent account)
   - [ ] Go to `/progress`
   - [ ] Verify userTier = 'scholar' (from getSubscriptionStatus API)

2. **View Section Quiz Results**
   - [ ] Verify section quiz cards displayed
   - [ ] Verify each card shows:
     - [ ] Section title
     - [ ] Score (e.g., "8/10")
     - [ ] Achievement label (e.g., "Good effort")
     - [ ] Expand arrow (🔒 for Scholar, ▼ for Achiever)

3. **Try to Expand Section (Drill-Down)**
   - [ ] Click on a section card to expand
   - [ ] **CRITICAL**: Drill-down is LOCKED
   - [ ] **CRITICAL**: Lock UI displayed instead of question details:
     - [ ] 🔒 icon in rounded-full container
     - [ ] Heading: "Drill-down locked"
     - [ ] Message: "Upgrade to Achiever to see individual question breakdowns and detailed reports."
     - [ ] "Upgrade to Achiever" button (rounded-full style)

4. **Verify Expand Arrow Shows Lock**
   - [ ] Verify expand arrow shows 🔒 icon (not ▼)
   - [ ] Verify tooltip on hover: "Upgrade to Achiever for detailed drill-down"

5. **Test Upgrade Flow**
   - [ ] Click "Upgrade to Achiever" button
   - [ ] Redirected to `/pricing`
   - [ ] Verify Scholar → Achiever upgrade flow

### Expected Results

✅ Drill-down locked for Scholar tier
✅ Lock UI matches design spec
✅ Upgrade messaging specific to Achiever
✅ Upgrade flow works

---

## 8. Achiever Tier: Full Access (6 Children, Unlimited Everything)

**Priority**: P1 (Important)
**Estimated Time**: 8 minutes

### Prerequisites

- Achiever tier user account

### Test Steps

1. **Add 6 Children**
   - [ ] Login as Achiever tier user
   - [ ] Add child 1: "Kid One" → Success
   - [ ] Add child 2: "Kid Two" → Success
   - [ ] Add child 3: "Kid Three" → Success
   - [ ] Add child 4: "Kid Four" → Success
   - [ ] Add child 5: "Kid Five" → Success
   - [ ] Add child 6: "Kid Six" → Success
   - [ ] Verify all 6 children created successfully

2. **Try to Add 7th Child (Should Fail)**
   - [ ] Click "Add Another Child"
   - [ ] Fill out form
   - [ ] Click "Add Child"
   - [ ] **CRITICAL**: Backend returns 403 error
   - [ ] **CRITICAL**: Error message: "You've reached the maximum of 6 children for your achiever plan"

3. **Test Unlimited Questions**
   - [ ] Login as child (any of the 6)
   - [ ] Complete 20+ quizzes in one day
   - [ ] Verify no daily limit enforcement
   - [ ] Verify all quizzes saved successfully

4. **Test Unlocked Solutions**
   - [ ] Answer question incorrectly
   - [ ] **CRITICAL**: Solution IS displayed (no lock)
   - [ ] Verify full explanation shown
   - [ ] Verify "Explain this to me" AI button available

5. **Test Unlocked Drill-Down**
   - [ ] Login as parent (Achiever tier)
   - [ ] Go to `/progress`
   - [ ] Click to expand section
   - [ ] **CRITICAL**: Full question breakdown IS displayed (no lock)
   - [ ] Verify each question shows:
     - [ ] Question text
     - [ ] Options (A, B, C, D)
     - [ ] User's answer
     - [ ] Correct answer
     - [ ] Whether user got it correct/incorrect
     - [ ] Correct answer explanation

### Expected Results

✅ Achiever tier allows 6 children
✅ Unlimited daily questions
✅ Solutions unlocked
✅ Drill-down unlocked
✅ Full access to all features

---

## 9. Pricing Page - Current Plan Display

**Priority**: P1 (Important)
**Estimated Time**: 3 minutes

### Test Steps

1. **Free Tier User**
   - [ ] Login as free tier user
   - [ ] Navigate to `/pricing`
   - [ ] Verify "Current" badge on Explorer (Free) plan
   - [ ] Verify "Current Plan" button is disabled
   - [ ] Verify Scholar and Achiever plans show "Start Free Trial" button

2. **Scholar Tier User**
   - [ ] Login as Scholar tier user
   - [ ] Navigate to `/pricing`
   - [ ] Verify current plan info displayed: "Current plan: scholar"
   - [ ] Verify "Manage Subscription" button displayed
   - [ ] Verify "Current" badge on Scholar plan
   - [ ] Verify Scholar plan button shows "Current Plan" (disabled)
   - [ ] Verify Achiever plan shows "Start Free Trial" or "Upgrade" button

3. **Achiever Tier User**
   - [ ] Login as Achiever tier user
   - [ ] Navigate to `/pricing`
   - [ ] Verify "Current" badge on Achiever plan
   - [ ] Verify Achiever plan button shows "Current Plan" (disabled)

4. **Manage Subscription Button**
   - [ ] Login as paid tier user (Scholar or Achiever)
   - [ ] Click "Manage Subscription" button
   - [ ] **CRITICAL**: Redirected to Stripe Customer Portal
   - [ ] Verify can update payment method
   - [ ] Verify can cancel subscription
   - [ ] Verify can download invoices

### Expected Results

✅ Current plan badge displays correctly
✅ Buttons disabled for current plan
✅ Upgrade buttons work
✅ Stripe portal accessible

---

## 10. Upgrade Flow: Free → Scholar

**Priority**: P0 (Critical)
**Estimated Time**: 5 minutes

### Prerequisites

- Free tier user account

### Test Steps

1. **Navigate to Pricing**
   - [ ] Login as free tier user
   - [ ] Go to `/pricing`

2. **Initiate Upgrade**
   - [ ] Click "Start Free Trial" on Scholar plan
   - [ ] Verify API call: `POST /payments/create-checkout` with plan=scholar

3. **Stripe Checkout**
   - [ ] Redirected to Stripe Checkout
   - [ ] Verify plan: "Scholar - $5/month"
   - [ ] Verify trial: "3-day free trial"
   - [ ] Enter test card: `4242 4242 4242 4242`
   - [ ] Click "Start trial"

4. **Return to Dashboard**
   - [ ] Redirected to `/dashboard?payment=success`
   - [ ] Verify success message: "Welcome to your new plan!"

5. **Verify Upgrade in Database**
   - [ ] Admin Dashboard → Users
   - [ ] Find user by email
   - [ ] Verify tier changed: `free` → `scholar`
   - [ ] Verify status: `active`
   - [ ] Verify stripeCustomerId: now exists
   - [ ] Verify stripeSubscriptionId: now exists

6. **Test New Tier Features**
   - [ ] Try to add 2nd child → Still blocked (Scholar limit = 1)
   - [ ] Child login → Complete unlimited quizzes (no daily limit)
   - [ ] Wrong answer → Solution now unlocked

### Expected Results

✅ Upgrade flow completes successfully
✅ Database updated with new tier
✅ Features unlock immediately

---

## 11. Upgrade Flow: Scholar → Achiever

**Priority**: P0 (Critical)
**Estimated Time**: 5 minutes

### Prerequisites

- Scholar tier user account with 1 child

### Test Steps

1. **Trigger Upgrade (Add 2nd Child)**
   - [ ] Login as Scholar tier user
   - [ ] Go to `/children/add`
   - [ ] Fill out form for 2nd child
   - [ ] Click "Add Child"
   - [ ] Verify upgrade UI displayed
   - [ ] Click "Upgrade to Achiever"

2. **Pricing Page**
   - [ ] Redirected to `/pricing`
   - [ ] Verify current plan: Scholar
   - [ ] Click "Start Free Trial" on Achiever plan

3. **Stripe Checkout**
   - [ ] Redirected to Stripe Checkout
   - [ ] Verify plan: "Achiever - $12/month"
   - [ ] Verify trial: "3-day free trial"
   - [ ] **Note**: Stripe should pro-rate existing Scholar subscription
   - [ ] Click "Start trial"

4. **Return to Dashboard**
   - [ ] Redirected to `/dashboard?payment=success`
   - [ ] Verify success message

5. **Verify Upgrade in Database**
   - [ ] Admin Dashboard → Users
   - [ ] Verify tier changed: `scholar` → `achiever`
   - [ ] Verify status: `active`
   - [ ] Verify stripeSubscriptionId: updated to new subscription

6. **Test New Tier Features**
   - [ ] Go to `/children/add`
   - [ ] Add 2nd child → Success
   - [ ] Add 3rd, 4th, 5th, 6th children → All succeed
   - [ ] Go to `/progress`
   - [ ] Expand section → Drill-down now unlocked

### Expected Results

✅ Upgrade completes successfully
✅ Pro-rated billing handled by Stripe
✅ Database updated
✅ All features unlocked

---

## 12. Backward Compatibility: Old "Explorer" Users

**Priority**: P2 (Nice to have)
**Estimated Time**: 5 minutes

### Prerequisites

- Database record with tier='explorer' (old $0.99/mo tier)

### Test Steps

1. **Login as Old Explorer User**
   - [ ] Create user with tier='explorer' in database (or use existing)
   - [ ] Login to account
   - [ ] Go to `/dashboard`

2. **Verify Treated as Free Tier**
   - [ ] Check subscription status
   - [ ] Verify frontend treats as 'free' tier
   - [ ] Try to add 2nd child → Should be blocked (limit = 1)
   - [ ] Child login → Check daily question limit (should be 5)

3. **Verify Pricing Page**
   - [ ] Go to `/pricing`
   - [ ] Verify current plan shows "Explorer" or "Free"
   - [ ] Verify upgrade options work

### Expected Results

✅ Old explorer users work without migration
✅ Treated as free tier (backward compatible)
✅ Upgrade path available

---

## 13. Edge Cases & Error Handling

**Priority**: P1 (Important)
**Estimated Time**: 10 minutes

### Test Cases

1. **Email Verification Code - Invalid**
   - [ ] Register new user
   - [ ] Enter wrong verification code
   - [ ] Verify error message displayed
   - [ ] Try correct code → Should work

2. **Email Verification Code - Expired**
   - [ ] Register new user
   - [ ] Wait 30 minutes (or check code expiry)
   - [ ] Enter code
   - [ ] Verify error or prompt to resend code

3. **Stripe Checkout - Cancel**
   - [ ] Start paid tier registration
   - [ ] Complete email verification
   - [ ] Redirected to Stripe
   - [ ] Click "Cancel" or browser back
   - [ ] Verify redirected to `/dashboard?payment=cancelled`
   - [ ] Verify message: "Payment cancelled. You can try again anytime."

4. **Stripe Webhook - Failed**
   - [ ] Simulate webhook failure (stop webhook endpoint)
   - [ ] Complete Stripe checkout
   - [ ] Verify user stuck in `verified` status (not `active`)
   - [ ] Manually trigger webhook or fix
   - [ ] Verify user upgraded

5. **Child Login - Wrong PIN**
   - [ ] Navigate to `/child-login`
   - [ ] Enter parent email
   - [ ] Enter child name
   - [ ] Enter WRONG PIN
   - [ ] Verify error: "Wrong PIN. Try again!"
   - [ ] Enter correct PIN → Should work

6. **Child Login - Parent Email Not Found**
   - [ ] Enter non-existent parent email
   - [ ] Verify error: "Parent email not found. Check the email address."

7. **Child Login - Child Name Not Found**
   - [ ] Enter valid parent email
   - [ ] Enter non-existent child name
   - [ ] Verify error: "Child not found. Check the name spelling."

8. **Session Timeout**
   - [ ] Login as parent
   - [ ] Wait 1 hour (or clear token)
   - [ ] Try to access protected page
   - [ ] Verify redirected to `/login`

### Expected Results

✅ All error cases handled gracefully
✅ Error messages clear and helpful
✅ Users can recover from errors

---

## 14. Mobile Responsive Testing

**Priority**: P1 (Important)
**Estimated Time**: 10 minutes

### Test Devices

- iPhone (Safari, Chrome)
- Android (Chrome)
- Tablet (iPad, Android)

### Test Cases

1. **Registration Flow (Mobile)**
   - [ ] Complete full registration on mobile
   - [ ] Verify all forms are responsive
   - [ ] Verify buttons are tappable
   - [ ] Verify no horizontal scroll

2. **Pricing Page (Mobile)**
   - [ ] Navigate to `/pricing` on mobile
   - [ ] Verify plan cards stack vertically
   - [ ] Verify "Most popular" badge visible
   - [ ] Verify all text readable

3. **Child Login (Mobile)**
   - [ ] Complete 3-step child login on mobile
   - [ ] Verify PIN pad usable
   - [ ] Verify email/name inputs work

4. **Locked Solutions (Mobile)**
   - [ ] Trigger locked solution on mobile
   - [ ] Verify lock UI displays correctly
   - [ ] Verify upgrade button tappable

5. **Add Child Form (Mobile)**
   - [ ] Fill out add child form on mobile
   - [ ] Verify avatar selection works
   - [ ] Verify tier limit UI displays correctly

### Expected Results

✅ All flows work on mobile
✅ UI is responsive and usable
✅ No layout issues

---

## 15. Admin Dashboard Validation

**Priority**: P2 (Nice to have)
**Estimated Time**: 5 minutes

### Test Steps

1. **Access Admin Dashboard**
   - [ ] Navigate to `https://grademychild.com.au/admin`
   - [ ] Enter admin key: `[From .env]`
   - [ ] Verify dashboard loads

2. **Overview Tab**
   - [ ] Verify total users count
   - [ ] Verify total children count
   - [ ] Verify total AI calls today
   - [ ] Verify tier breakdown (free, scholar, achiever)

3. **Users Tab**
   - [ ] Verify user list displays
   - [ ] Find test users created during testing
   - [ ] Verify tier, status, stripeCustomerId displayed correctly

4. **Payments Tab (Stripe)**
   - [ ] Verify revenue summary
   - [ ] Verify active subscriptions count
   - [ ] Verify recent payments list

### Expected Results

✅ Admin dashboard shows accurate data
✅ Tier counts correct
✅ Stripe integration working

---

## Test Summary Template

After completing all tests, fill out this summary:

### Test Results Summary

**Date**: _____________
**Tester**: _____________
**Environment**: https://grademychild.com.au
**Browser**: _____________
**Test Duration**: _____________ minutes

| Test Case | Status | Issues Found |
|-----------|--------|--------------|
| 1. Free Tier Registration | ☐ Pass ☐ Fail | |
| 2. Paid Tier Registration | ☐ Pass ☐ Fail | |
| 3. Free Tier Child Limit | ☐ Pass ☐ Fail | |
| 4. Free Tier Question Limit | ☐ Pass ☐ Fail | |
| 5. Free Tier Locked Solutions | ☐ Pass ☐ Fail | |
| 6. Scholar Tier Child Limit | ☐ Pass ☐ Fail | |
| 7. Scholar Tier Locked Drill-Down | ☐ Pass ☐ Fail | |
| 8. Achiever Tier Full Access | ☐ Pass ☐ Fail | |
| 9. Pricing Page Display | ☐ Pass ☐ Fail | |
| 10. Free → Scholar Upgrade | ☐ Pass ☐ Fail | |
| 11. Scholar → Achiever Upgrade | ☐ Pass ☐ Fail | |
| 12. Backward Compatibility | ☐ Pass ☐ Fail | |
| 13. Edge Cases | ☐ Pass ☐ Fail | |
| 14. Mobile Responsive | ☐ Pass ☐ Fail | |
| 15. Admin Dashboard | ☐ Pass ☐ Fail | |

### Critical Issues Found

1. ___________________________________
2. ___________________________________
3. ___________________________________

### Minor Issues Found

1. ___________________________________
2. ___________________________________
3. ___________________________________

### Overall Assessment

☐ **Ready for Production** - All critical tests passed
☐ **Needs Fixes** - Critical issues found
☐ **Needs Retesting** - After fixes applied

### Sign-Off

**Tester**: _____________
**Date**: _____________
**Signature**: _____________

---

## Automated Testing Recommendations

For future automation, consider:

1. **E2E Tests (Playwright/Cypress)**
   - Registration flows
   - Stripe checkout (using test mode)
   - Tier limit enforcement
   - Feature locks

2. **API Tests (Postman/Newman)**
   - POST /children (tier limits)
   - POST /progress/{childId}/quiz (daily limits)
   - POST /payments/webhook (Stripe events)

3. **Visual Regression Tests**
   - Pricing page
   - Locked solution UI
   - Upgrade prompts

---

## Contact

**Issues Found**: Report to tendai@agentsform.ai
**Test Plan Updates**: Commit to `docs/TEST_PLAN_2026_PRICING.md`
**Version**: 1.0
**Last Updated**: January 6, 2026
