# FE AI TUTOR - Frontend Overview

> Tai lieu tong quan cho Frontend - Nen tang hoc tap thong minh voi AI (Document-RAG based)

---

## Muc Luc

| File | Mo ta |
|------|-------|
| [00-FE-OVERVIEW.md](./00-FE-OVERVIEW.md) | Tổng quan (file này) |
| [01-UI-SPECIFICATION.md](./01-UI-SPECIFICATION.md) | Chi tiết từng màn hình UI (20 screens) |
| [02-COMPONENTS.md](./02-COMPONENTS.md) | Thư viện Component & Design Tokens |
| [03-ROUTING.md](./03-ROUTING.md) | Bản đồ Routing (v5.1) |
| [04-CODE-STRUCTURE.md](./04-CODE-STRUCTURE.md) | Cấu trúc code & Quy ước |
| [05-STITCH-PROMPTS.md](./05-STITCH-PROMPTS.md) | Prompt Premium cho FE Agent |

---

## Vai Tro Cua FE

**FE chi can biet:**
1. UI tron nhu the nao
2. Tren UI co nhung field nao
3. Data can de hien thi la gi
4. User tuong tac nhu the nao

**FE KHONG can quan tam:**
- Database schema
- API implementation
- Business logic phuc tap
- Security layers

---

## Tong Quan He Thong (Document-RAG Based)

### Core Workflow

```
+------------------------------------------------------------------+
|                     AI TUTOR WORKFLOW                             |
+------------------------------------------------------------------+
|                                                                   |
|  1. UPLOAD TAI LIEU                                               |
|     +----------+    +----------+    +----------+                  |
|     |  PDF/    |--->|  Extract |--->|  Store   |                  |
|     |  DOCX    |    |  Text    |    |  in RAG  |                  |
|     +----------+    +----------+    +-----+----+                  |
|                                          |                        |
|  2. AI GENERATION                         v                        |
|     +--------------------------------------------------+          |
|     |  +---------+  +-----------+  +-------------+    |          |
|     |  | Summary |  | Flashcards|  |    Quiz     |    |          |
|     |  +---------+  +-----------+  +-------------+    |          |
|     +--------------------------------------------------+          |
|                          |                                        |
|  3. STUDY                 v                                        |
|     +----------+    +----------+    +----------+                  |
|     |  Review  |    |   Chat   |    |   Take   |                  |
|     | Flashcard|    | with AI  |    |   Quiz   |                  |
|     +----------+    +----------+    +----------+                  |
|                                                                   |
+------------------------------------------------------------------+
```

### RAG Pipeline

```
+------------------------------------------------------------------+
|                        RAG PIPELINE                               |
+------------------------------------------------------------------+
|                                                                   |
|  1. DOCUMENT INGESTION                                           |
|     +----------+    +----------+    +----------+                  |
|     |  PDF/    |--->|  Chunk   |--->| Embedding|                  |
|     |  DOCX    |    |  Split   |    |  Model   |                  |
|     +----------+    +----------+    +-----+----+                  |
|                                          |                        |
|  2. STORAGE                              v                        |
|     +--------------------------------------------------+          |
|     |           VECTOR DATABASE (ChromaDB)              |          |
|     |  - document_chunks                               |          |
|     |  - embeddings (768 dims)                         |          |
|     |  - metadata (document_id, page, etc.)            |          |
|     +--------------------------------------------------+          |
|                          |                                        |
|  3. RETRIEVAL            v                                        |
|     +----------+    +----------+    +----------+                  |
|     |  Query   |--->| Embed    |--->| Semantic |                  |
|     |          |    |  Query   |    |  Search  |                  |
|     +----------+    +----------+    +-----+----+                  |
|                                          |                        |
|  4. GENERATION                           v                        |
|     +--------------------------------------------------+          |
|     |              LLM (Claude)                        |          |
|     |  Context: Retrieved chunks + User query         |          |
|     +--------------------------------------------------+          |
|                                                                   |
+------------------------------------------------------------------+
```

---

## Tong Quan Cac Man Hinh

### Public Pages (Không cần đăng nhập) - 2 screens

| STT | Màn hình | Route | Mô tả |
|-----|----------|-------|-------|
| 1 | Landing Page | `/` | Trang chủ giới thiệu - Hero, Features, CTA |
| 2 | Login | `/auth/login` | Đăng nhập duy nhất qua Google OAuth |

### Protected Pages - User (Cần đăng nhập) - 14 screens

#### Dashboard & Profile (2 screens)
| STT | Màn hình | Route | Mô tả |
|-----|----------|-------|-------|
| 3 | Dashboard | `/app/dashboard` | Tổng quan tiến độ và hành động nhanh |
| 4 | Profile | `/app/profile` | Thông tin cá nhân và cài đặt |

#### Documents Module (4 screens)
| STT | Màn hình | Route | Mô tả |
|-----|----------|-------|-------|
| 5 | Documents List | `/app/documents` | Danh sách tài liệu đã upload |
| 6 | Document Detail | `/app/documents/:id` | Chi tiết tài liệu, AI action buttons |
| 7 | Upload Document | `/app/documents/upload` | Form upload tài liệu mới |
| 8 | Processing Status | `/app/documents/:id/processing` | Theo dõi tiến độ RAG processing |

#### Learning Module (5 screens)
| STT | Màn hình | Route | Mô tả |
|-----|----------|-------|-------|
| 9 | Learning Path View | `/app/documents/:id/path` | Lộ trình học tập Bloom's Taxonomy |
| 10 | Lesson Progress | `/app/path/:id/lessons/:lessonId` | Nội dung bài học chi tiết |
| 11 | Quiz Interface | `/app/quizzes/:id` | Giao diện làm bài kiểm tra |
| 12 | Quiz Results | `/app/quizzes/:id/results` | Kết quả và giải thích đáp án |
| 13 | Flashcard Review | `/app/flashcards` | Ôn tập Flashcard SRS (Daily) |

#### Specialized Tools (3 screens)
| STT | Màn hình | Route | Mô tả |
|-----|----------|-------|-------|
| 14 | Flashcards Doc View | `/app/documents/:id/flashcards` | Danh sách cards của 1 tài liệu |
| 15 | AI Tutor Chat | `/app/ai-tutor` | Chat hỏi đáp RAG với AI |
| 16 | Homework Solver | `/app/homework` | Giải bài tập chi tiết với CoT |

### Protected Pages - Admin (Admin only) - 4 screens

| STT | Màn hình | Route | Mô tả |
|-----|----------|-------|-------|
| 17 | Admin Dashboard | `/admin/dashboard` | Thống kê hệ thống cho Admin |
| 18 | User Management | `/admin/users` | Quản lý người dùng và quyền hạn |
| 19 | Document Management | `/admin/documents` | Quản lý tài liệu RAG toàn hệ thống |
| 20 | System Audit | `/admin/audit-logs` | Nhật ký hoạt động & Bảo mật |

---

## User Roles & Permissions

| Role | Quyen han |
|------|-----------|
| **User** | Upload tai lieu, xem/hoi thao AI, hoc flashcard (SRS), lam quiz, tao ghi chu/bookmark |
| **Admin** | Toan quyen: quan ly users, xem tat ca data, thong ke AI usage |

---

## Tech Stack FE

| Cong nghe | Version | Muc dich |
|-----------|---------|----------|
| React | 19.x | UI Framework |
| Vite | 8.x | Build tool |
| TypeScript | 5.9 | Type safety |
| Tailwind CSS | 4.x | Styling |
| shadcn/ui | Latest | Components |
| React Router | 7.x | Routing |
| React Query | 5.x | Server state |
| Zustand | 4.x | Client state |
| MSW | 2.x | API mocking |
| Vitest | 4.x | Unit testing |
| Playwright | Latest | E2E testing |

---

## Design System Quick Reference

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Success**: Green (#22C55E)
- **Warning**: Yellow (#EAB308)
- **Error**: Red (#EF4444)

### Typography
- **Font**: Inter
- **Heading**: 600-700 weight
- **Body**: 400-500 weight

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## Data Flow (FE Perspective)

```
+-------------+     +-------------+     +-------------+
|    USER     |---->|  UI/COMP    |---->|  API CALL   |
|  (Clicks)   |     |  (Render)   |     | (React Qry) |
+-------------+     +-------------+     +------+------+
                                               |
                                               v
                                        +-------------+
                                        |   BACKEND   |
                                        |   (REST)    |
                                        +-------------+
```

---

## Key Data Types

### User
```typescript
interface User {
  id: string // UUID
  email: string
  name: string
  avatar?: string
  role: 'user' | 'admin'
  created_at: string
}
```

### Document
```typescript
interface Document {
  id: string // UUID
  title: string
  description?: string
  file_url: string
  file_type: 'pdf' | 'docx'
  file_size: number
  status: 'processing' | 'ready' | 'error'
  summary?: string
  page_count?: number
  flashcards_count: number
  quizzes_count: number
  created_at: string
}
```

### Flashcard
```typescript
interface Flashcard {
  id: string // UUID
  document_id: string 
  front: string
  back: string
  hint?: string
  review_state?: {
    interval: number
    next_review_at: string
  }
}
```

---

## API Endpoints Summary (v5.1)

### Auth (4 APIs)
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/v1/auth/google` | Khởi tạo Google Login |
| POST | `/api/v1/auth/callback` | Callback & Exchange Token |
| GET | `/api/v1/auth/me` | Lấy thông tin User hiện tại |
| POST | `/api/v1/auth/logout` | Đăng xuất |

### Documents (6 APIs)
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/v1/documents` | Lấy danh sách tài liệu |
| POST | `/api/v1/documents` | Upload tài liệu (Multipart) |
| GET | `/api/v1/documents/:id` | Chi tiết tài liệu |
| GET | `/api/v1/documents/:id/status` | Trạng thái xử lý RAG |
| DELETE | `/api/v1/documents/:id` | Xóa tài liệu |
| GET | `/api/v1/documents/:id/download` | Download tài liệu |

### Flashcards (7 APIs)
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/v1/flashcards/due` | Flashcard cần review hôm nay |
| POST | `/api/v1/flashcards/:id/review` | Submit review (SRS) |
| GET | `/api/v1/flashcards/progress` | Tiến độ học tập |
| GET | `/api/v1/documents/:id/flashcards` | Flashcard theo tài liệu |
| POST | `/api/v1/documents/:id/flashcards` | Tạo flashcard mới |
| PUT | `/api/v1/flashcards/:id` | Cập nhật flashcard |
| DELETE | `/api/v1/flashcards/:id` | Xóa flashcard |

### Quiz (6 APIs)
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/v1/documents/:id/quiz` | Lấy quiz của tài liệu |
| POST | `/api/v1/quizzes` | Tạo quiz mới |
| GET | `/api/v1/quizzes/:id` | Chi tiết quiz |
| POST | `/api/v1/quizzes/:id/submit` | Nộp bài làm |
| GET | `/api/v1/quizzes/:id/attempts` | Lịch sử làm bài |
| DELETE | `/api/v1/quizzes/:id` | Xóa quiz |

### AI Chat (5 APIs)
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/v1/chat/sessions` | Danh sách phiên chat |
| POST | `/api/v1/chat/sessions` | Tạo phiên chat mới |
| GET | `/api/v1/chat/sessions/:id` | Chi tiết phiên chat |
| POST | `/api/v1/chat/sessions/:id/messages` | Gửi tin nhắn |
| DELETE | `/api/v1/chat/sessions/:id` | Xóa phiên chat |

### Learning Path (8 APIs)
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/api/v1/ai/generate-learning-path` | AI tạo lộ trình |
| GET | `/api/v1/documents/:id/learning-path` | Lấy lộ trình |
| PUT | `/api/v1/learning-paths/:id` | Cập nhật lộ trình |
| GET | `/api/v1/learning-paths/:id/progress` | Tiến độ lộ trình |
| PATCH | `/api/v1/lessons/:id/progress` | Cập nhật bài học |
| GET | `/api/v1/stages/:id/lessons` | Danh sách bài học |
| DELETE | `/api/v1/learning-paths/:id` | Xóa lộ trình |
| POST | `/api/v1/learning-paths/:id/reset` | Reset tiến độ |

### Bookmarks (4 APIs)
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/v1/bookmarks` | Danh sách bookmark |
| POST | `/api/v1/documents/:id/bookmark` | Đánh dấu |
| PUT | `/api/v1/bookmarks/:id` | Cập nhật ghi chú |
| DELETE | `/api/v1/bookmarks/:id` | Xóa bookmark |

### Notes (5 APIs)
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/v1/documents/:id/notes` | Ghi chú theo tài liệu |
| POST | `/api/v1/documents/:id/notes` | Tạo ghi chú |
| GET | `/api/v1/notes/:id` | Chi tiết ghi chú |
| PUT | `/api/v1/notes/:id` | Cập nhật |
| DELETE | `/api/v1/notes/:id` | Xóa |

### AI Services (3 APIs)
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/api/v1/ai/generate-quiz` | AI tạo quiz |
| POST | `/api/v1/ai/generate-flashcards` | AI tạo flashcard |
| POST | `/api/v1/ai/summarize` | AI tóm tắt |

### Homework (3 APIs)
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/api/v1/ai/solve-homework` | AI giải bài tập |
| GET | `/api/v1/homework/history` | Lịch sử |
| DELETE | `/api/v1/homework/:id` | Xóa |

### Admin (6 APIs)
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/v1/admin/statistics` | Thống kê hệ thống |
| GET | `/api/v1/admin/users` | Danh sách users |
| PUT | `/api/v1/admin/users/:id` | Cập nhật user |
| DELETE | `/api/v1/admin/users/:id` | Xóa user |
| GET | `/api/v1/admin/documents` | Danh sách tài liệu |
| DELETE | `/api/v1/admin/documents/:id` | Xóa tài liệu |

### Test Matrix (5 APIs)
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/api/v1/test-matrices` | Tạo ma trận đề mới |
| GET | `/api/v1/documents/:id/test-matrices` | Danh sách ma trận |
| GET | `/api/v1/test-matrices/:id` | Chi tiết ma trận |
| POST | `/api/v1/ai/generate-test-matrix` | AI tự tạo ma trận từ tài liệu |
| POST | `/api/v1/test-matrices/:id/generate-quiz` | Sinh đề từ ma trận |

---

*Version: 5.1 - Updated: 2026-03-01*
*20 Screens (Document-RAG based)*
*Standardized on UUID (string) and Google OAuth Only.*
