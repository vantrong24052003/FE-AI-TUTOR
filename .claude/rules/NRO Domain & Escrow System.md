# NRO Domain & Escrow System

## 1. Business Context

**NRO Marketplace** là sàn giao dịch tài khoản game (Ngọc Rồng Online, Liên Quân Mobile) với cơ chế Escrow.

### User Roles
| Role | Permissions |
|------|-------------|
| `member` | Mua, bán, nạp tiền, rút tiền, khiếu nại |
| `admin` | Duyệt bài, xử lý dispute, quản lý users |

> **Lưu ý**: Một user có thể VỪA mua VỪA bán. Role chỉ phân biệt `member` vs `admin`.

## 2. Escrow Flow (Core Business)

```
┌─────────┐      ┌─────────┐      ┌─────────┐
│  BUYER  │      │ PLATFORM│      │ SELLER  │
│         │      │ (ESCROW)│      │         │
└────┬────┘      └────┬────┘      └────┬────┘
     │                │                │
     │  1. Pay        │                │
     │ ──────────────▶│                │
     │                │ 2. Hold $      │
     │                │                │
     │  3. Deliver    │                │
     │ ◀──────────────│                │
     │                │                │
     │  4. Confirm    │                │
     │ ──────────────▶│                │
     │                │ 5. Release $   │
     │                │ ──────────────▶│
     │                │                │
```

### Purchase Status Machine
```
pending → paid → delivered → completed
                    │
                    └──→ disputed → (refund/release/reject)
```

| Status | Money Location | Next Action |
|--------|----------------|-------------|
| `pending` | Buyer wallet | Payment |
| `paid` | Platform escrow | Auto-deliver |
| `delivered` | Platform escrow | Buyer confirm / Dispute |
| `completed` | Seller wallet | Done |
| `disputed` | Platform escrow (held) | Admin resolve |

## 3. Timing Rules

| Event | Duration | Action |
|-------|----------|--------|
| Warranty Period | 3 days | Buyer có thể mở dispute |
| Auto-Complete | 7 days | System auto-complete nếu không dispute |
| Session Timeout | 7 days | User cần re-login |

## 4. Marketplace Post Status

```
draft → pending → active → sold
   │        │        │
   │        │        └──→ hidden (admin hide)
   │        └──→ hidden (rejected)
   └──→ pending (seller submit for approval)
```

## 5. Dispute Resolution Decisions

| Decision | Use When | Money Goes To |
|----------|----------|---------------|
| `refund` | Seller admits fault / Fraud evidence | Buyer |
| `release` | Buyer lying / Nick correct | Seller |
| `reject` | Insufficient evidence | Stays in escrow |

## 6. Game Profile Types

### Ngọc Rồng Online
```json
{
  "game_title": "ngoc_rong",
  "server": "saophale",
  "game_attributes": {
    "planet": "namec",
    "disciple": true,
    "skins": ["ssj4", "super_saiyan"],
    "power_score": 50000000
  }
}
```

### Liên Quân Mobile
```json
{
  "game_title": "lien_quan",
  "server": "asia",
  "game_attributes": {
    "rank": "kim",
    "heroes_count": 80,
    "skins_count": 45
  }
}
```

## 7. Credentials Security

### Storage
- **Encrypted** với AES-256-GCM
- Lưu trong `secured_credentials` table
- Chỉ decrypt khi buyer purchase thành công

### Access Rules
| User | Access |
|------|--------|
| Seller | View/Update own profiles |
| Buyer | View ONLY after `delivered` status |
| Admin | View for verification |

## 8. Implementation Priority

### Phase 1: Foundation
1. Database migrations (theo specs)
2. Models với associations & validations
3. Base Operations & Forms
4. Seeds data

### Phase 2: Core APIs
1. Authentication (Google OAuth)
2. Marketplace CRUD
3. Purchase flow

### Phase 3: Escrow
1. Wallet system
2. Purchase with escrow
3. Auto-complete job

### Phase 4: Admin
1. Post approval
2. Dispute resolution
3. Activity logs

## 9. Key Constraints

- **Google OAuth Only**: Không có form đăng ký truyền thống
- **Admin Moderation**: Mọi bài đăng phải được duyệt
- **Escrow Mandatory**: Tất cả giao dịch qua escrow
- **Platform Fee**: 0% (Phase 1), có thể adjust sau
