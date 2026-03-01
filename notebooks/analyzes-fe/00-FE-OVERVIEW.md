# FE AI TUTOR - Frontend Overview

> Tài liệu tổng quan cho Frontend - Nền tảng học tập thông minh với AI

---

## 📋 Mục Lục

| File | Mô tả |
|------|-------|
| [00-FE-OVERVIEW.md](./00-FE-OVERVIEW.md) | Tổng quan (file này) |
| [01-UI-SPECIFICATION.md](./01-UI-SPECIFICATION.md) | Chi tiết từng màn hình UI |
| [02-COMPONENTS.md](./02-COMPONENTS.md) | Component library |
| [03-ROUTING.md](./03-ROUTING.md) | Routing structure |
| [04-CODE-STRUCTURE.md](./04-CODE-STRUCTURE.md) | Code structure & conventions |

---

## 🎯 Vai Trò Của FE

**FE chỉ cần biết:**
1. ✅ UI trông như thế nào
2. ✅ Trên UI có những field nào
3. ✅ Data cần để hiển thị là gì
4. ✅ User tương tác như thế nào

**FE KHÔNG cần quan tâm:**
- ❌ Database schema
- ❌ API implementation
- ❌ Business logic phức tạp
- ❌ Security layers

---

## 🖥️ Tổng Quan Các Màn Hình

### Public Pages (Không cần đăng nhập)

| STT | Màn hình | Route | Mô tả |
|-----|----------|-------|-------|
| 1 | Landing Page | `/` | Trang chủ giới thiệu |
| 2 | Login | `/auth/login` | Đăng nhập |
| 3 | Register | `/auth/register` | Đăng ký |
| 4 | Forgot Password | `/auth/forgot-password` | Quên mật khẩu |

### Protected Pages - User (Cần đăng nhập)

| STT | Màn hình | Route | Mô tả |
|-----|----------|-------|-------|
| **Dashboard** |
| 5 | Dashboard | `/app/dashboard` | Trang chính sau đăng nhập |
| **Courses** |
| 6 | Course List | `/app/courses` | Danh sách khóa học |
| 7 | Course Detail | `/app/courses/:id` | Chi tiết khóa học |
| 8 | Create Course | `/app/courses/create` | Tạo khóa học mới |
| 9 | Edit Course | `/app/courses/:id/edit` | Sửa khóa học |
| 10 | My Courses | `/app/my-courses` | Khóa đã đăng ký |
| **Learning** |
| 11 | Learning | `/app/learn/:courseId/lesson/:lessonId` | Giao diện học |
| 12 | Lesson Detail | `/app/lessons/:id` | Chi tiết bài học |
| **Quiz** |
| 13 | Quiz | `/app/quiz/:quizId` | Làm bài kiểm tra |
| **Exercises** |
| 14 | Exercise Detail | `/app/exercises/:id` | Chi tiết bài tập |
| 15 | Exercise Submit | `/app/exercises/:id/submit` | Nộp bài tập |
| **Flashcards** |
| 16 | Flashcard Review | `/app/flashcards` | Học flashcard hôm nay (SRS) |
| 17 | Flashcards by Lesson | `/app/flashcards/:lessonId` | Flashcards theo bài |
| 18 | Flashcard Progress | `/app/flashcards/progress` | Tiến độ học |
| **Bookmarks** |
| 19 | Bookmarks | `/app/bookmarks` | Bài đã đánh dấu |
| **AI Services** |
| 20 | AI Chat | `/app/ai-tutor` | Chat với AI |
| 21 | AI Conversation | `/app/ai-tutor/:conversationId` | Hội thoại cụ thể |
| **Progress** |
| 22 | Progress | `/app/progress` | Tiến độ học tập |
| **Profile** |
| 23 | Profile | `/app/profile` | Thông tin cá nhân |

### Protected Pages - Admin (Admin only)

| STT | Màn hình | Route | Mô tả |
|-----|----------|-------|-------|
| 24 | Admin Dashboard | `/admin/dashboard` | Thống kê tổng quan |
| 25 | User Management | `/admin/users` | Quản lý users |
| 26 | Category Management | `/admin/categories` | Quản lý danh mục |
| 27 | All Courses | `/admin/courses` | Xem tất cả khóa học |

> **Note**: Các màn hình con (Exercise List, Flashcard List, Notes, Quiz Result, AI Summaries) được tích hợp vào màn hình Detail tương ứng để tối ưu UX.

---

## 👥 User Roles & Permissions

| Role | Quyền hạn |
|------|-----------|
| **User** | Xem/tạo khóa học, học bài, làm quiz/review flashcard/nộp bài tập, chat AI, tạo ghi chú/bookmark |
| **Admin** | Toàn quyền: quản lý users, categories, xem tất cả data |

---

## 📦 Tech Stack FE

| Công nghệ | Version | Mục đích |
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

## 🎨 Design System Quick Reference

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

## 🔄 Data Flow (FE Perspective)

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│    USER     │────▶│  UI/COMP    │────▶│  API CALL   │
│  (Clicks)   │     │  (Render)   │     │ (React Qry) │
└─────────────┘     └─────────────┘     └──────┬──────┘
                                               │
                                               ▼
                                        ┌─────────────┐
                                        │   BACKEND   │
                                        │   (REST)    │
                                        └─────────────┘
```

---

## 📝 Key Data Types

### User
```typescript
interface User {
  id: number
  email: string
  name: string
  avatar?: string
  role: 'user' | 'admin'
  created_at: string
}
```

### Course
```typescript
interface Course {
  id: number
  title: string
  description: string
  thumbnail: string
  creator: { id: number; name: string; avatar?: string }
  category: { id: number; name: string; slug: string }
  level: 'beginner' | 'intermediate' | 'advanced'
  duration_hours: number
  is_published: boolean
  is_enrolled?: boolean
  progress?: number
  lessons_count: number
  enrolled_count: number
}
```

### Flashcard
```typescript
interface Flashcard {
  id: number
  lesson_id: number
  front: string
  back: string
  hint?: string
  order: number
  // Review state (for current user)
  review_state?: {
    quality: number
    ease_factor: number
    interval: number
    next_review_at: string
  }
}
```

### Exercise
```typescript
interface Exercise {
  id: number
  lesson_id: number
  title: string
  description: string
  type: 'text' | 'code' | 'file' | 'multiple'
  max_score: number
  max_attempts: number
  order: number
  has_submitted?: boolean
  best_score?: number
}
```

### Submission
```typescript
interface Submission {
  id: number
  exercise_id: number
  user_id: number
  answer: string
  file_url?: string
  score?: number
  feedback?: string
  ai_feedback?: {
    score: number
    overall_comment: string
    strengths: string[]
    improvements: string[]
    suggestions: string[]
  }
  status: 'pending' | 'grading' | 'graded' | 'needs_review'
  submitted_at: string
  graded_at?: string
}
```

### Note
```typescript
interface Note {
  id: number
  user_id: number
  lesson_id: number
  content: string
  timestamp_seconds?: number
  created_at: string
  updated_at?: string
}
```

### Bookmark
```typescript
interface Bookmark {
  id: number
  user_id: number
  lesson_id: number
  lesson?: {
    id: number
    title: string
    course: { id: number; title: string }
  }
  note?: string
  created_at: string
}
```

### Chat Message
```typescript
interface ChatMessage {
  id: number
  conversation_id: number
  role: 'user' | 'assistant' | 'system'
  content: string
  tokens_used?: number
  created_at: string
}
```

---

## 📊 API Endpoints Summary

| Module | Endpoints | Mô tả |
|--------|-----------|-------|
| Auth | 8 | Đăng ký, đăng nhập, refresh token |
| Categories | 4 | CRUD danh mục (Admin) |
| Users | 4 | Quản lý users |
| Courses | 6 | CRUD khóa học, đăng ký |
| Lessons | 5 | CRUD bài học |
| Quizzes | 7 | Quiz, câu hỏi, nộp bài |
| Exercises | 8 | Bài tập, nộp bài, feedback |
| Flashcards | 7 | Flashcard, review SRS |
| Notes | 4 | Ghi chú cá nhân |
| Bookmarks | 3 | Đánh dấu bài học |
| Chat AI | 6 | Hội thoại, tin nhắn |
| AI Services | 5 | Generate Quiz, Summarize, Grade... |
| Progress | 3 | Tiến độ học tập |
| Documents | 4 | Tài liệu khóa học |
| Admin | 1 | Thống kê |

**Total: 75 endpoints**

---

## 📝 Quy Tắc Viết Tài Liệu UI

Mỗi màn hình sẽ có format:

```markdown
## [Tên Màn hình]

### Mô tả
- Màn hình này dùng để làm gì

### UI Layout
- [ASCII mockup]

### UI Elements
| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| ... | ... | ... | ... |

### User Actions
- User có thể làm gì trên màn hình này

### Data Cần Thiết
- Data gì cần để render màn hình này

### API Calls
- API nào được gọi
```

---

*Version: 4.0 - Updated: 2026-03-01*
*27 Screens (simplified), 75 APIs, Full Feature Set*
*Synced with BE specs and 01-UI-SPECIFICATION.md, 03-ROUTING.md*
