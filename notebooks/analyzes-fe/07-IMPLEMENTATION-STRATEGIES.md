# FE AI TUTOR - Implementation Strategies

> Chiến lược kỹ thuật cho Error Boundaries, Loading State và Token Refresh (v5.1)

---

## 1. Error Boundary Strategy

Hệ thống sử dụng chiến lược **Granular Error Capture** (bắt lỗi theo từng phân vùng) để đảm bảo trải nghiệm người dùng không bị gián đoạn hoàn toàn.

### 1.1 App-Level Boundary
- **Vị trí**: Bao bọc toàn bộ App trong `src/app/router/index.tsx`.
- **Hành vi**: Hiển thị trang lỗi 500 tổng quan, fallback về Landing Page.

### 1.2 Module-Level Boundary
- **Vị trí**: `DocumentList`, `QuizPlayer`, `AIChat`.
- **Hành vi**: Hiển thị Error Card cục bộ với nút "Try Again".

### 1.3 Implementation Pseudocode (React)
```tsx
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="p-4 border border-red-500 rounded-lg">
      <h3 className="text-red-500 font-bold">Oops! Có lỗi xảy ra</h3>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Thử lại</button>
    </div>
  )
}
```

---

## 2. Loading State Strategies

Tránh sử dụng "Global Spinner" xuyên suốt. Sử dụng **Skeleton Screens** và **Suspense** để tạo cảm giác ứng dụng phản hồi ngay lập tức.

### 2.1 Skeleton Patterns
- **Document List**: Hiển thị 6-8 cards skeleton mờ ảo (shimmer effect).
- **AI Chat**: Hiển thị pulsating bubble cho tin nhắn đang chờ.
- **Learning Path**: Vẽ các line mờ trước khi data fetch xong.

### 2.2 Suspense Layers
- Bao bọc các route lazy-loaded.
- Vị trí: `app/router/index.tsx` và `app/MainLayout.tsx`.

---

## 3. Token Refresh Flow

Sử dụng **Silent Token Refresh** với Axios Interceptor để đảm bảo user không bị đăng xuất khi đang làm bài.

### 3.1 Flow Overview
1.  **FE** nhận `access_token` qua Google Login.
2.  **BE** lưu `refresh_token` trong **HttpOnly Cookie** (Secure & SameSite).
3.  Khi `access_token` hết hạn (401), **FE** gọi `POST /api/v1/auth/refresh`.
4.  **BE** kiểm tra cookie, trả về `access_token` mới.
5.  **FE** retry request bị lỗi ban đầu.

---

## 4. Accessibility (A11y) & Analytics

### 4.1 A11y Standards
- **Keyboard Navigation**: Tất cả interactive elements (Buttons, Inputs) phải focus được.
- **Aria Labels**: Sử dụng `aria-label` cho các icon buttons (Upload, Delete, Close).
- **Color Contrast**: Đảm bảo text (White/Navy) đạt chuẩn AA trên nền primary blue.

### 4.2 Analytics Events
- **Document Activity**: `upload_document`, `delete_document`.
- **Learning Activity**: `quiz_start`, `quiz_complete`, `flashcard_review`.
- **AI Usage**: `ai_chat_query`, `ai_generate_quiz`.

---

*Version: 5.1 - Updated: 2026-03-01*
*Technical Strategies Documented.*
