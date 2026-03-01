# FE AI TUTOR - Master Types Specification

> Tài liệu chuẩn hóa Data Types và Naming Conventions cho toàn bộ hệ thống (FE & BE)

---

## 1. Naming Conventions

Để đảm bảo tính nhất quán giữa Frontend (React/TS) và Backend (Ruby/Rails/FastAPI):

| Layer | Convention | Ví dụ |
|-------|------------|-------|
| **Backend (DB/API)** | `snake_case` | `document_id`, `created_at`, `user_name` |
| **Frontend (Code/Store)** | `camelCase` | `documentId`, `createdAt`, `userName` |
| **URL Parameters** | `kebab-case` | `/app/learning-paths/` |
| **Constants/Enums** | `UPPER_SNAKE_CASE` | `STATUS_READY`, `FILE_TYPE_PDF` |

**Quy tắc mapping:** 
API Response từ Backend (snake_case) nên được transform sang camelCase khi vào Frontend layer (sử dụng interceptor hoặc manual mapping).

---

## 2. Core Base Types

### Identifiers (UUID)
Tất cả các thực thể (Users, Documents, Quizzes, v.v.) đều sử dụng **UUID v4** dạng `string`.
- **FE Type**: `string`
- **BE Type**: `UUID`

### Timestamps
Sử dụng định dạng ISO 8601 UTC.
- **Dạng**: `YYYY-MM-DDTHH:mm:ss.sssZ`
- **FE Type**: `string` (Date object khi xử lý logic)

---

## 3. Entity Schemas (v5.1 Standards)

### 3.1 User
```typescript
interface User {
  id: string
  email: string
  fullName: string
  avatarUrl?: string
  role: 'admin' | 'user'
  createdAt: string
  lastLogin?: string
}
```

### 3.2 Document
```typescript
interface Document {
  id: string
  title: string
  description?: string
  fileUrl: string
  fileType: 'pdf' | 'docx' | 'txt' | 'md'
  fileSize: number // tính bằng bytes
  status: 'processing' | 'ready' | 'error'
  errorLog?: string // dùng khi status = 'error'
  summary?: string
  pageCount?: number
  ownerId: string
  createdAt: string
  updatedAt: string
}
```

### 3.3 Flashcard
```typescript
interface Flashcard {
  id: string
  documentId: string
  frontContent: string // Markdown support
  backContent: string  // Markdown support
  hint?: string
  
  // Spaced Repetition (SRS)
  quality?: number     // 0-5
  easeFactor: number   // Mặc định 2.5
  interval: number     // Số ngày
  repetitions: number
  nextReviewAt: string
  
  createdAt: string
}
```

### 3.4 Quiz & Question
```typescript
interface Quiz {
  id: string
  documentId: string
  title: string
  description?: string
  passingScore: number // 0-100
  questions: QuizQuestion[]
  createdAt: string
}

interface QuizQuestion {
  id: string
  quizId: string
  questionText: string
  isMultipleSelection: boolean 
  options: QuizOption[]        // Updated to use objects with IDs
  correctAnswerId?: string     // UUID of the correct option
  correctAnswerIds?: string[]  // UUIDs if multiple correct
  explanation?: string
  points: number
}

interface QuizOption {
  id: string                   // UUID
  content: string              // Text/Markdown
}

interface QuizAttempt {
  id: string
  quizId: string
  userId: string
  score: number
  passed: boolean
  responses: Record<string, string | string[]> // questionId -> answerId(s)
  answeredStatus: Record<string, boolean>      // questionId -> isAnswered
  startedAt: string
  completedAt: string
}
```

### 3.5 AI Chat
```typescript
interface ChatSession {
  id: string
  userId: string
  documentId?: string // Context RAG
  title: string
  createdAt: string
}

interface ChatMessage {
  id: string
  sessionId: string
  role: 'user' | 'assistant' | 'system'
  content: string
  references?: SourceReference[]
  createdAt: string
}

interface SourceReference {
  documentId: string
  documentTitle: string
  pageNumber?: number
  snippet: string
}
```

---

## 4. API Response Wrapper

Tất cả API responses phải tuân theo cấu trúc chuẩn:

### Success Response
```typescript
interface ApiResponse<T> {
  success: true
  data: T
  meta?: {
    total?: number
    page?: number
    limit?: number
  }
}
```

### Error Response
```typescript
interface ApiError {
  success: false
  error: {
    code: string // e.g., "UNAUTHORIZED", "VALIDATION_FAILED"
    message: string // User-friendly message
    details?: any // Validation errors, etc.
  }
}
```

---

*Version: 5.1 - Final Standardization*
*Alignment: FE camelCase / BE snake_case / IDs UUIDs*
