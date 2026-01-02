# Initial Users Backup - 2026-01-03

This file contains a human-readable backup of all users and children registered as of January 3rd, 2026.

## Users (Parents)

### 1. Tendai Mudavanhu (Admin/Test User)
- **Email**: tmudavanhu@gmail.com
- **User ID**: 198e94a8-4021-7046-dc39-0f89f839d1ac
- **Tier**: scholar
- **Status**: CONFIRMED
- **Stripe Customer**: cus_TiUtc8bVezPOBF
- **Subscription**: sub_1Sl3tLFqL65Zilf9Tr3cKl2v
- **Created**: 2026-01-01T06:18:19.127Z

**Children**:
| Name | Username | Year | PIN | Child ID |
|------|----------|------|-----|----------|
| Lee | lee | 8 | 2580 | 0f7b9592-78dc-4665-9c1d-942c6ba323c0 |
| Dee | dee | 5 | 2580 | 3f411637-fa18-4189-8da1-3e55284ce469 |
| Josh M | joshm | 5 | 2580 | e6ca336e-aa7f-4196-bbe4-a2b143541964 |

---

### 2. Kapil Saluja
- **Email**: kapilsaluja.ne@gmail.com
- **User ID**: 39be34d8-d0f1-701e-c1be-a5c07cd33a75
- **Tier**: free
- **Status**: CONFIRMED
- **Created**: 2026-01-02T10:58:56.683Z

**Children**:
| Name | Username | Year | PIN | Child ID |
|------|----------|------|-----|----------|
| Kavya | kavya | 9 | 0907 | 0db230f1-6107-4cca-80a7-fea6cbdf9e8e |

---

### 3. C Sibanda
- **Email**: csibanda@yahoo.com
- **User ID**: d90ee428-8031-70ae-c577-95ae02b4df11
- **Tier**: free
- **Status**: CONFIRMED
- **Created**: 2026-01-02T12:38:30.301Z

**Children**:
| Name | Username | Year | PIN | Child ID |
|------|----------|------|-----|----------|
| Eugene | eugene | 6 | 5511 | 631bc927-dced-44ad-b8ac-f54f21673aea |

---

### 4. Katharina Attana
- **Email**: katharina.attana@googlemail.com
- **User ID**: b95ec4d8-c0a1-7070-6dab-cf78d8a9e7ba
- **Tier**: free
- **Status**: CONFIRMED
- **Created**: 2026-01-02T13:36:23.144Z

**Children**:
| Name | Username | Year | PIN | Child ID |
|------|----------|------|-----|----------|
| Bayley | bayley | 5 | 1601 | de1dd223-608b-44d2-954a-ab1500dc35a0 |

---

### 5. Bug Test User
- **Email**: bug@gmail.com
- **User ID**: 295ed418-10a1-70f6-8b5d-b39bd8da4e1e
- **Tier**: free
- **Status**: UNCONFIRMED (email not verified)
- **Created**: 2026-01-01T09:01:23.833Z

**Children**: None

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total Users | 5 |
| Confirmed Users | 4 |
| Unconfirmed Users | 1 |
| Paying Users (Scholar) | 1 |
| Free Users | 4 |
| Total Children | 6 |

## Recovery Instructions

If you need to restore this data:

### 1. Restore Cognito Users
Cognito users cannot be directly restored. Users would need to re-register.
However, you can use the AWS Console to manually create users if needed.

### 2. Restore DynamoDB Profiles
```bash
# Use the JSON backup files in this directory
aws dynamodb batch-write-item --request-items file://dynamodb-user-profiles-2026-01-03.json
```

### 3. Re-link Stripe Subscriptions
For the paying user (tmudavanhu@gmail.com):
1. Stripe Customer ID: `cus_TiUtc8bVezPOBF`
2. Subscription ID: `sub_1Sl3tLFqL65Zilf9Tr3cKl2v`

Update DynamoDB:
```bash
aws dynamodb update-item \
  --table-name agentsform-main \
  --key '{"PK":{"S":"USER#198e94a8-4021-7046-dc39-0f89f839d1ac"},"SK":{"S":"PROFILE"}}' \
  --update-expression "SET tier = :tier, stripeCustomerId = :cust, stripeSubscriptionId = :sub" \
  --expression-attribute-values '{
    ":tier":{"S":"scholar"},
    ":cust":{"S":"cus_TiUtc8bVezPOBF"},
    ":sub":{"S":"sub_1Sl3tLFqL65Zilf9Tr3cKl2v"}
  }' \
  --region ap-southeast-2
```

## Backup Files in This Directory

- `cognito-users-2026-01-03.json` - Raw Cognito user export
- `dynamodb-user-profiles-2026-01-03.json` - DynamoDB USER# PROFILE records
- `dynamodb-child-profiles-2026-01-03.json` - DynamoDB CHILD# PROFILE records
