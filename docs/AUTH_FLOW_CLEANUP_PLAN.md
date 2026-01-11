# Authentication Flow Fix

**Status**: APPROVED - Simple fix
**Date**: 2026-01-11
**Author**: Claude (UX Analysis)

---

## Problem

The `/register` page shows a "Continue with Google" button, but:
- OAuth users never reach `/register` organically (they go through `/get-started` or `/login`)
- If someone clicks Google on `/register`, they bypass the email flow entirely
- This is confusing and serves no purpose

---

## Solution

**Remove the Google OAuth button from `/register` page only.**

That's it. No restructuring needed.

---

## Flows After Fix

### OAuth Flow (unchanged)
```
/get-started → Click Google → /callback → /choose-tier → Stripe → /dashboard
     OR
/login → Click Google → /callback → /dashboard (returning users)
```

### Email Flow (unchanged)
```
/get-started → /choose-plan → /register → /verify → /login → Stripe → /dashboard
```

---

## Pages - No Changes Required

| Page | Status | Google OAuth Button |
|------|--------|---------------------|
| `/get-started` | KEEP | YES - entry point for OAuth |
| `/choose-plan` | KEEP | NO - already none |
| `/register` | KEEP | **REMOVE** - confusing here |
| `/verify` | KEEP | NO - already none |
| `/login` | KEEP | YES - for returning OAuth users |
| `/choose-tier` | KEEP | NO - post-auth only |
| `/callback` | KEEP | NO - handler only |

---

## Implementation

Single change: Remove Google OAuth button from `/register/page.tsx`

---

## Data Collection

No impact - `/register` still captures name, email, password via Cognito.

---

## Future Enhancement (Not Now)

**Abandoned Signup Tracking**: Capture emails from users who start but don't complete signup for remarketing and funnel analysis. Documented for future sprint.

---

*Last Updated: 2026-01-11*
*Status: APPROVED*
