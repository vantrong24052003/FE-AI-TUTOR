# FE AI TUTOR - UI Specification

> Mô tả chi tiết từng màn hình UI - Document-RAG based

**Version**: 5.1 - 20 Screens

---

## Screens Index

| **PUBLIC (2)** |
| 1 | Landing Page | `/` | Public | Trang chủ giới thiệu |
| 2 | Login | `/auth/login` | Public | Đăng nhập (Google Only) |
| **USER - CORE (2)** |
| 3 | Dashboard | `/app/dashboard` | Protected | Tổng quan tiến độ |
| 4 | Profile | `/app/profile` | Protected | Thông tin cá nhân |
| **USER - DOCUMENTS (4)** |
| 5 | Documents List | `/app/documents` | Protected | Danh sách tài liệu |
| 6 | Document Detail | `/app/documents/:id` | Protected | Chi tiết tài liệu |
| 7 | Upload Document | `/app/documents/upload` | Protected | Upload PDF/DOCX |
| 8 | Processing Status | `/app/documents/:id/processing` | Protected | Trạng thái xử lý RAG |
| **USER - LEARNING (5)** |
| 9 | Learning Path | `/app/documents/:id/path` | Protected | Lộ trình học |
| 10 | Lesson Progress | `/app/path/:id/lessons/:lessonId` | Protected | Nội dung bài học |
| 11 | Quiz Interface | `/app/quizzes/:id` | Protected | Giao diện làm quiz |
| 12 | Quiz Results | `/app/quizzes/:id/results` | Protected | Kết quả quiz |
| 13 | Flashcard Review | `/app/flashcards` | Protected | Học flashcard (SRS) |
| **USER - AI & TOOLS (3)** |
| 14 | Flashcards Doc View | `/app/documents/:id/flashcards` | Protected | Xem list flashcard tài liệu |
| 15 | AI Tutor Chat | `/app/ai-tutor` | Protected | Chat interface |
| 16 | Homework Solver | `/app/homework` | Protected | Giải bài tập AI |
| **ADMIN (4)** |
| 17 | Admin Dashboard | `/admin/dashboard` | Admin | Thống kê admin |
| 18 | User Management | `/admin/users` | Admin | Quản lý users |
| 19 | Document Management | `/admin/documents` | Admin | Quản lý tài liệu (RAG status) |
| 20 | System Audit | `/admin/audit-logs` | Admin | Nhật ký hệ thống |

---

## 1. PUBLIC PAGES

### 1.1 Landing Page

### Route
- `/`

### Mô tả
- Trang chủ giới thiệu ứng dụng AI Tutor, hiển thị features và CTA đăng ký/đăng nhập.

### UI Layout
```
+---------------------------------------------------------------+
|  [Logo]        Features    Pricing    About    [Login] [Sign Up]|
+---------------------------------------------------------------+
|                                                               |
|              Học Thông Minh Với AI Tutor                      |
|              Upload tài liệu - AI tạo flashcard, quiz         |
|              [Get Started Free]    [Watch Demo]               |
|                                                               |
+---------------------------------------------------------------+
|                                                               |
|   Features:                                                   |
|   +-------------+  +-------------+  +-------------+           |
|   |   Upload    |  |    AI       |  |   Spaced    |           |
|   |   Documents |  |  Generation |  | Repetition  |           |
|   +-------------+  +-------------+  +-------------+           |
|                                                               |
+---------------------------------------------------------------+
|                                                               |
|   How it works:                                               |
|   1. Upload PDF/DOCX  ->  2. AI Processes  ->  3. Learn!     |
|                                                               |
+---------------------------------------------------------------+
|                         Footer                                |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Logo | Image | - | Logo ứng dụng |
| Nav Links | Link | - | Features, Pricing, About |
| Login Button | Button | - | Navigate to /auth/login |
| Sign Up Button | Button | - | Navigate to /auth/register |
| Hero Title | Text | - | Headline chính |
| Hero Subtitle | Text | - | Mô tả ngắn |
| CTA Primary | Button | - | Get Started Free |
| CTA Secondary | Button | - | Watch Demo |
| Feature Cards | Card[] | - | 3-4 feature highlights |

### User Actions
- Click Login -> Navigate to Login page
- Click Sign Up -> Navigate to Register page
- Click CTA -> Navigate to Register page
- Scroll to view features

### Data Cần Thiết
- Static content (không cần API)

### API Calls
- Không có

---

### 1.2 Login Page

### Route
- `/auth/login`

### Mô tả
- Trang đăng nhập duy nhất sử dụng Google OAuth.

### UI Layout
```
+---------------------------------------------------------------+
|                         [Logo]                                |
+---------------------------------------------------------------+
|                                                               |
|                    Welcome to AI Tutor                        |
|                    Sign in with your Google account           |
|                                                               |
|   +-------------------------------------------------------+   |
|   |             [ G ]  Sign in with Google                |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   By continuing, you agree to our Terms and Conditions       |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Google Login | Button | - | Trigger Google OAuth 2.0 flow |

### User Actions
- Click Google Login -> Chuyển hướng đến trang login của Google

### API Calls
- `GET /api/v1/auth/google` - Khởi tạo OAuth
- `POST /api/v1/auth/callback` - Nhận token từ Google

---

---

## 2. USER - DOCUMENTS

### 2.1 Documents List

### Route
- `/app/documents`

### Mô tả
- Hiển thị danh sách tài liệu đã upload của user với filter và search.

### UI Layout
```
+---------------------------------------------------------------+
|  [Logo]     Documents    Flashcards    Quiz    AI Chat   [Av] |
+---------------------------------------------------------------+
|                                                               |
|   My Documents                              [+ Upload New]    |
|                                                               |
|   +-------------------------------------------------------+   |
|   | [Search documents...]                     [Status v]   |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   +-------------+  +-------------+  +-------------+           |
|   | [Thumbnail] |  | [Thumbnail] |  | [Thumbnail] |           |
|   | Python 101  |  | ML Basics   |  | Data Sci    |           |
|   | PDF - 25pg  |  | DOCX - 15pg |  | PDF - 40pg  |           |
|   | 15 flashcards|  | 10 flashcards|  | 20 flashcards|          |
|   | 3 quizzes   |  | 2 quizzes   |  | 5 quizzes   |           |
|   | Status: Ready|  | Status: Proc.|  | Status: Ready|          |
|   +-------------+  +-------------+  +-------------+           |
|                                                               |
|   Showing 1-10 of 25 documents   [1] [2] [3] [>]              |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Search Input | Input | - | Tìm kiếm tài liệu |
| Status Filter | Select | - | Filter theo status |
| Upload Button | Button | - | Navigate to upload |
| Document Cards | Card[] | `documents[]` | Danh sách tài liệu |
| Card Title | Text | `title` | Tiêu đề tài liệu |
| Card Type | Badge | `file_type` | PDF/DOCX |
| Card Pages | Text | `page_count` | Số trang |
| Card Stats | Text | `flashcards_count`, `quizzes_count` | Thống kê |
| Card Status | Badge | `status` | pending/processing/ready/failed |
| Pagination | Nav | `meta` | Phân trang |

### User Actions
- Search documents
- Filter by status
- Click Upload -> Navigate to Upload page
- Click Card -> Navigate to Document Detail
- Pagination

### Data Cần Thiết
- documents: id, title, filename, file_type, file_size, page_count, status, flashcards_count, quizzes_count, created_at
- meta: total, page, limit

### API Calls
- `GET /api/v1/documents` - Lấy danh sách tài liệu

---

### 2.2 Document Detail

### Route
- `/app/documents/:id`

### Mô tả
- Chi tiết tài liệu với stats, flashcards, quizzes, notes, bookmarks.

### UI Layout
```
+---------------------------------------------------------------+
|  [<- Back]                                                    |
+---------------------------------------------------------------+
|                                                               |
|   Python Tutorial                                             |
|   PDF - 25 pages - 2.5MB                                      |
|   Uploaded: 2026-03-01                                        |
|   Status: Ready                                               |
|                                                               |
|   +-------------+ +-------------+ +-------------+ +---------+ |
|   | 15 Cards    | | 3 Quizzes   | | 5 Notes     | | 8 Books | |
|   +-------------+ +-------------+ +-------------+ +---------+ |
|                                                               |
|   [Generate Flashcards] [Generate Quiz] [Summarize] [Chat AI]|
|                                                               |
+---------------------------------------------------------------+
|   Tabs: [Overview] [Flashcards] [Quizzes] [Notes] [Bookmarks]|
+---------------------------------------------------------------+
|                                                               |
|   Overview Tab:                                               |
|   +-------------------------------------------------------+   |
|   | AI Summary                                            |   |
|   | This document covers Python basics including...       |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Recent Flashcards:                                          |
|   +-----------------------+ +-----------------------+         |
|   | What is Python?       | | Variables in Python   |         |
|   | -> Python is...       | | -> Variables are...   |         |
|   +-----------------------+ +-----------------------+         |
|                                                               |
|   Recent Quizzes:                                             |
|   - Python Basics Quiz (10 questions)                         |
|   - Variables Quiz (5 questions)                              |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Back Button | Button | - | Navigate back |
| Title | Text | `title` | Tiêu đề tài liệu |
| File Info | Text | `file_type`, `page_count`, `file_size` | Thông tin file |
| Status | Badge | `status` | Trạng thái xử lý |
| Stats Cards | Card[] | `stats.*` | Flashcards, quizzes, notes, bookmarks |
| Generate Buttons | Button[] | - | AI generation actions |
| Tabs | TabNav | - | Overview, Flashcards, Quizzes, Notes, Bookmarks |
| AI Summary | Card | `summary` | Tóm tắt AI (nếu có) |
| Recent Items | List | `recent_*` | Flashcards/quizzes gần đây |

### User Actions
- Click Back -> Navigate back
- Click Generate Flashcards -> Gọi AI generate
- Click Generate Quiz -> Gọi AI generate
- Click Summarize -> Gọi AI summarize
- Click Chat AI -> Navigate to AI Chat với context
- Switch tabs
- View/Edit/Delete flashcards, quizzes

### Data Cần Thiết
- document: id, title, filename, file_type, file_size, page_count, status, created_at
- stats: flashcards_count, quizzes_count, notes_count, bookmarks_count
- summary: AI summary (optional)
- recent_flashcards: flashcard[]
- recent_quizzes: quiz[]

### API Calls
- `GET /api/v1/documents/:id` - Chi tiết tài liệu
- `GET /api/v1/documents/:id/flashcards` - Flashcards của tài liệu
- `GET /api/v1/documents/:id/quizzes` - Quizzes của tài liệu
- `POST /api/v1/ai/generate-flashcards` - AI tạo flashcards
- `POST /api/v1/ai/generate-quiz` - AI tạo quiz
- `POST /api/v1/ai/summarize` - AI tóm tắt

---

### 2.3 Upload Document

### Route
- `/app/documents/upload`

### Mô tả
- Form upload tài liệu PDF/DOCX với progress tracking.

### UI Layout
```
+---------------------------------------------------------------+
|  [<- Back]                                    Upload Document |
+---------------------------------------------------------------+
|                                                               |
|   +-------------------------------------------------------+   |
|   |                                                       |   |
|   |              Drag & Drop your file here               |   |
|   |                                                       |   |
|   |              or click to browse                       |   |
|   |                                                       |   |
|   |              Supported: PDF, DOCX                     |   |
|   |              Max size: 10MB                           |   |
|   |                                                       |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Title (optional):                                           |
|   +-------------------------------------------------------+   |
|   |                                                       |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   +-------------------------------------------------------+   |
|   |                      Upload                           |   |
|   +-------------------------------------------------------+   |
|                                                               |
+---------------------------------------------------------------+

After selecting file:
+---------------------------------------------------------------+
|                                                               |
|   Uploading...                                                |
|   +-------------------------------------------------------+   |
|   | python_tutorial.pdf                     [X]            |   |
|   | [=============================>              ] 75%     |   |
|   +-------------------------------------------------------+   |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Drop Zone | DropZone | - | Khu vực drag-drop file |
| File Input | Input | `file` | Input file ẩn |
| Title Input | Input | `title` | Tiêu đề (optional) |
| Upload Button | Button | - | Submit upload |
| Progress Bar | Progress | `progress` | Tiến độ upload |
| File Preview | Card | `file.name`, `file.size` | Thông tin file đã chọn |
| Cancel Button | Button | - | Hủy upload |

### User Actions
- Drag & drop file
- Click to browse file
- Enter title (optional)
- Click Upload -> Upload file
- Cancel upload

### Data Cần Thiết
- Form data: file, title

### API Calls
- `POST /api/v1/documents` - Upload tài liệu
- `GET /api/v1/documents/:id/status` - Kiểm tra trạng thái xử lý

---

## 3. USER - LEARNING

### 3.1 Flashcard Review

### Route
- `/app/flashcards`

### Mô tả
- Giao diện học flashcard hôm nay theo thuật toán Spaced Repetition (SM-2).

### UI Layout
```
+---------------------------------------------------------------+
|  [Logo]     Documents    Flashcards    Quiz    AI Chat   [Av] |
+---------------------------------------------------------------+
|                                                               |
|   Flashcard Review - Today                        5 cards    |
|                                                               |
|   +-------------------------------------------------------+   |
|   |                                                       |   |
|   |                                                       |   |
|   |              What is Python?                          |   |
|   |                                                       |   |
|   |              (Click to flip)                          |   |
|   |                                                       |   |
|   |                                                       |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Progress: 2/5 (40%)  [=========>                   ]        |
|                                                               |
|   Document: Python Tutorial                                  |
|                                                               |
+---------------------------------------------------------------+

After flipping:
+---------------------------------------------------------------+
|                                                               |
|   +-------------------------------------------------------+   |
|   |                                                       |   |
|   |                                                       |   |
|   |              Python is a high-level                   |   |
|   |              programming language...                  |   |
|   |                                                       |   |
|   |              Hint: Created by Guido van Rossum        |   |
|   |                                                       |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   How well did you know?                                      |
|                                                               |
|   [0]   [1]   [2]   [3]   [4]   [5]                          |
|   😵    😕    🤔    🙂    😊    🎉                            |
|   Again Hard  Good   Easy                                    |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Card Count | Badge | `total_due` | Số cards cần review |
| Card Front | Card | `front` | Mặt trước (câu hỏi) |
| Card Back | Card | `back` | Mặt sau (đáp án) |
| Hint | Text | `hint` | Gợi ý (optional) |
| Document Info | Text | `document.title` | Tài liệu gốc |
| Progress Bar | Progress | `current/total` | Tiến độ review |
| Rating Buttons | Button[] | 0-5 | Đánh giá mức độ nhớ |

### User Actions
- Click card -> Flip card
- Click rating (0-5) -> Submit review, next card
- Review complete -> Show summary

### Data Cần Thiết
- flashcards: id, front, back, hint, document_id
- document: id, title
- meta: total_due, current_index

### API Calls
- `GET /api/v1/flashcards/due` - Lấy cards cần review
- `POST /api/v1/flashcards/:id/review` - Submit rating

---

### 3.2 Flashcard Progress

### Route
- `/app/flashcards/progress`

### Mô tả
- Biểu đồ tiến độ học flashcard và thống kê SRS.

### UI Layout
```
+---------------------------------------------------------------+
|  [Logo]     Documents    Flashcards    Quiz    AI Chat   [Av] |
+---------------------------------------------------------------+
|                                                               |
|   Flashcard Progress                                          |
|                                                               |
|   +-------------+ +-------------+ +-------------+ +---------+ |
|   | 100 Total   | | 45 Learned  | | 30 New      | | 15 Due  | |
|   +-------------+ +-------------+ +-------------+ +---------+ |
|                                                               |
|   Mastery Rate: 45%                                           |
|                                                               |
|   Filter: [All Documents v]   Period: [Week v]               |
|                                                               |
|   +-------------------------------------------------------+   |
|   |                  Review Activity Chart                |   |
|   |                                                       |   |
|   |     |                                                 |   |
|   |  20 |        *                                         |   |
|   |   15 |    *       *                                    |   |
|   |   10 | *               *                               |   |
|   |    5 |                    *                            |   |
|   |     +----------------------------------------------    |   |
|   |       Mon  Tue  Wed  Thu  Fri  Sat  Sun              |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Retention Rate: 85.5%                                       |
|   Average Ease Factor: 2.4                                    |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Stats Cards | Card[] | `summary.*` | Total, Learned, New, Due |
| Mastery Rate | Text | `mastery_rate` | Tỷ lệ nhớ tốt |
| Document Filter | Select | - | Filter theo tài liệu |
| Period Filter | Select | - | Day/Week/Month |
| Activity Chart | Chart | `chart_data[]` | Biểu đồ review activity |
| Retention Rate | Text | `retention_rate` | Tỷ lệ ghi nhớ |
| Ease Factor | Text | `average_ease_factor` | Hệ số dễ trung bình |

### User Actions
- Filter by document
- Change period
- View chart

### Data Cần Thiết
- summary: total_cards, new_cards, learning_cards, mastered_cards, due_today
- chart_data: date, reviews, correct
- retention_rate: float
- average_ease_factor: float

### API Calls
- `GET /api/v1/flashcards/progress` - Lấy progress stats

---

### 3.3 Quiz

### Route
- `/app/quiz/:quizId`

### Mô tả
- Giao diện làm quiz với timer và progress tracking.

### UI Layout
```
+---------------------------------------------------------------+
|  Python Basics Quiz                    Timer: 12:35    5/10   |
+---------------------------------------------------------------+
|                                                               |
|   Question 5:                                                 |
|                                                               |
|   What is a variable in Python?                               |
|                                                               |
|   +-------------------------------------------------------+   |
|   |  A. A named storage location for data                 |   |
|   +-------------------------------------------------------+   |
|   |  B. A type of function                                |   |
|   +-------------------------------------------------------+   |
|   |  C. A Python keyword                                  |   |
|   +-------------------------------------------------------+   |
|   |  D. A built-in module                                 |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Progress:                                                   |
|   [O] [O] [O] [O] [X] [ ] [ ] [ ] [ ] [ ]                    |
|                                                               |
|   +-----------------------+       +-----------------------+   |
|   |      Previous         |       |         Next          |   |
|   +-----------------------+       +-----------------------+   |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Quiz Title | Text | `quiz.title` | Tiêu đề quiz |
| Timer | Text | `time_remaining` | Thời gian còn lại |
| Progress | Text | `current/total` | Câu hiện tại/tổng |
| Question | Text | `question.content` | Nội dung câu hỏi |
| Options | Radio[] | `answers[]` | Các đáp án |
| Progress Dots | Indicator | - | Trạng thái từng câu |
| Previous Button | Button | - | Câu trước |
| Next Button | Button | - | Câu tiếp |
| Submit Button | Button | - | Nộp bài (hiện khi cuối) |

### User Actions
- Select answer
- Click Previous -> Câu trước
- Click Next -> Câu tiếp
- Click Submit -> Nộp bài

### Data Cần Thiết
- attempt: id, started_at, expires_at
- questions: id, content, points, answers[]
- answers: id, content

### API Calls
- `POST /api/v1/quizzes/:id/start` - Bắt đầu làm quiz
- `POST /api/v1/attempts/:id/answer` - Lưu câu trả lời
- `POST /api/v1/attempts/:id/submit` - Nộp bài

---

### 3.4 Quiz Result

### Route
- `/app/quiz/:quizId/result/:attemptId`

### Mô tả
- Hiển thị kết quả quiz với điểm số và review câu hỏi.

### UI Layout
```
+---------------------------------------------------------------+
|  Quiz Complete!                                               |
+---------------------------------------------------------------+
|                                                               |
|                    +-------------+                            |
|                    |    80%      |                            |
|                    |   PASSED    |                            |
|                    +-------------+                            |
|                                                               |
|   +-------------+ +-------------+ +-------------+             |
|   | 8/10 Correct| | 8/10 Points | | 7:30 Time   |             |
|   +-------------+ +-------------+ +-------------+             |
|                                                               |
|   [Review Answers]              [Try Again]                   |
|                                                               |
+---------------------------------------------------------------+
|   Question Review:                                            |
|                                                               |
|   +-------------------------------------------------------+   |
|   | [V] 1. What is Python?                                |   |
|   |     Your answer: A. Programming language (Correct)     |   |
|   +-------------------------------------------------------+   |
|   | [X] 2. What is a variable?                            |   |
|   |     Your answer: B. A type of function                |   |
|   |     Correct: A. A named storage location              |   |
|   |     Explanation: Variables store data...              |   |
|   +-------------------------------------------------------+   |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Score | Text | `score` | Điểm số (%) |
| Status | Badge | `passed` | PASSED/FAILED |
| Stats Cards | Card[] | `results.*` | Correct, Points, Time |
| Review Button | Button | - | Xem lại đáp án |
| Retry Button | Button | - | Làm lại quiz |
| Question List | List | `questions[]` | Review từng câu |
| Correct Icon | Icon | `is_correct` | Check/X icon |
| User Answer | Text | `user_answer` | Đáp án đã chọn |
| Correct Answer | Text | `correct_answer` | Đáp án đúng |
| Explanation | Text | `explanation` | Giải thích |

### User Actions
- Click Review -> Expand/collapse question detail
- Click Retry -> Làm lại quiz
- Navigate back

### Data Cần Thiết
- attempt: id, score, passed, time_spent_seconds
- results: correct_count, total_count, points_earned, total_points
- questions: id, content, user_answer_id, correct_answer_id, is_correct, explanation

### API Calls
- `GET /api/v1/attempts/:id` - Lấy kết quả quiz

---

### 3.5 Bookmarks

### Route
- `/app/bookmarks`

### Mô tả
- Danh sách các bookmark đã lưu từ tài liệu.

### UI Layout
```
+---------------------------------------------------------------+
|  [Logo]     Documents    Flashcards    Quiz    AI Chat   [Av] |
+---------------------------------------------------------------+
|                                                               |
|   Bookmarks                                                   |
|                                                               |
|   +-------------------------------------------------------+   |
|   | [Search bookmarks...]                                 |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   +-------------------------------------------------------+   |
|   | Document: Python Tutorial                             |   |
|   | Note: Important concept about variables               |   |
|   | Created: 2026-03-01                         [Delete]  |   |
|   +-------------------------------------------------------+   |
|   | Document: ML Basics                                   |   |
|   | Note: Review this section again                       |   |
|   | Created: 2026-02-28                         [Delete]  |   |
|   +-------------------------------------------------------+   |
|   | Document: Data Science                                |   |
|   | Note: Good explanation of pandas                      |   |
|   | Created: 2026-02-27                         [Delete]  |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Showing 1-10 of 25 bookmarks   [1] [2] [3] [>]             |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Search | Input | - | Tìm kiếm bookmark |
| Bookmark Cards | Card[] | `bookmarks[]` | Danh sách bookmark |
| Document Title | Text | `document.title` | Tên tài liệu |
| Note | Text | `note` | Ghi chú bookmark |
| Created At | Text | `created_at` | Thời gian tạo |
| Delete Button | Button | - | Xóa bookmark |
| Pagination | Nav | `meta` | Phân trang |

### User Actions
- Search bookmarks
- Click card -> Navigate to document
- Delete bookmark

### Data Cần Thiết
- bookmarks: id, document_id, note, created_at
- document: id, title

### API Calls
- `GET /api/v1/bookmarks` - Lấy danh sách bookmark
- `DELETE /api/v1/bookmarks/:id` - Xóa bookmark

---

## 4. USER - AI

### 4.1 AI Chat

### Route
- `/app/ai-tutor`

### Mô tả
- Chat interface với AI tutor, hiển thị danh sách sessions.

### UI Layout
```
+---------------------------------------------------------------+
|  [Logo]     Documents    Flashcards    Quiz    AI Chat   [Av] |
+---------------------------------------------------------------+
|                        |                                      |
|   Sessions             |   +-------------+                    |
|                        |   | AI Tutor    |   [+ New Chat]     |
|   +----------------+   |   +-------------+                    |
|   | Python Help    |   |                                      |
|   | 2 messages     |   |   Select a session or start new     |
|   | Today          |   |                                      |
|   +----------------+   |   Quick Actions:                     |
|   | ML Concepts    |   |   [Generate Flashcards]              |
|   | 5 messages     |   |   [Create Quiz]                      |
|   | Yesterday      |   |   [Summarize Document]               |
|   +----------------+   |                                      |
|   | Data Analysis  |   |                                      |
|   | 3 messages     |   |                                      |
|   | Last week      |   |                                      |
|   +----------------+   |                                      |
|                        |                                      |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Session List | List | `sessions[]` | Danh sách chat sessions |
| Session Title | Text | `title` | Tiêu đề session |
| Message Count | Text | `message_count` | Số tin nhắn |
| Last Activity | Text | `updated_at` | Hoạt động cuối |
| New Chat Button | Button | - | Tạo session mới |
| Quick Actions | Button[] | - | Các action nhanh |

### User Actions
- Click session -> Navigate to session
- Click New Chat -> Tạo session mới
- Click Quick Action -> Navigate với action

### Data Cần Thiết
- sessions: id, title, document_id, message_count, created_at, updated_at

### API Calls
- `GET /api/v1/chat/sessions` - Lấy danh sách sessions
- `POST /api/v1/chat/sessions` - Tạo session mới

---

### 4.2 AI Chat Session

### Route
- `/app/ai-tutor/:sessionId`

### Mô tả
- Hội thoại cụ thể với AI tutor.

### UI Layout
```
+---------------------------------------------------------------+
|  [<- Back]   Chat with AI Tutor - Python Help                 |
+---------------------------------------------------------------+
|                                                               |
|   +-------------------------------------------------------+   |
|   |                                                       |   |
|   |  USER: What is Python?                                |   |
|   |                                                       |   |
|   |  AI: Python is a high-level programming language...   |   |
|   |      ```python                                        |   |
|   |      print("Hello, World!")                           |   |
|   |      ```                                              |   |
|   |                                                       |   |
|   |  USER: How do I declare a variable?                   |   |
|   |                                                       |   |
|   |  AI: In Python, you can declare a variable by...      |   |
|   |                                                       |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Suggestions: [Explain more] [Show examples] [Create quiz]  |
|                                                               |
|   +-------------------------------------------------------+   |
|   | [Type your message...]                          [Send] |   |
|   +-------------------------------------------------------+   |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Back Button | Button | - | Navigate back |
| Session Title | Text | `title` | Tiêu đề session |
| Messages | List | `messages[]` | Danh sách tin nhắn |
| Message Role | Badge | `role` | user/assistant |
| Message Content | Text | `content` | Nội dung tin nhắn |
| Code Blocks | Code | - | Code snippets |
| Suggestions | Chip[] | - | Gợi ý quick actions |
| Input | Input | - | Nhập tin nhắn |
| Send Button | Button | - | Gửi tin nhắn |

### User Actions
- Type message
- Click Send -> Gửi tin nhắn
- Click Suggestion -> Quick action
- Scroll messages

### Data Cần Thiết
- session: id, title, document_id
- messages: id, role, content, created_at

### API Calls
- `GET /api/v1/chat/sessions/:id` - Lấy session với messages
- `POST /api/v1/chat/sessions/:id/messages` - Gửi tin nhắn

---

## 5. USER - OTHER

### 5.1 Progress

### Route
- `/app/progress`

### Mô tả
- Tổng quan tiến độ học tập của user.

### UI Layout
```
+---------------------------------------------------------------+
|  [Logo]     Documents    Flashcards    Quiz    AI Chat   [Av] |
+---------------------------------------------------------------+
|                                                               |
|   Learning Progress                                           |
|                                                               |
|   +-------------+ +-------------+ +-------------+ +---------+ |
|   | 5 Documents | | 100 Cards   | | 25 Quizzes  | | 7 Streak| |
|   +-------------+ +-------------+ +-------------+ +---------+ |
|                                                               |
|   Flashcard Progress                                          |
|   +-------------------------------------------------------+   |
|   |                  Mastery Distribution                 |   |
|   |                                                       |   |
|   |   New: 30      Learning: 25      Mastered: 45        |   |
|   |   [=======>                    ]  45% mastery         |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Quiz Performance                                            |
|   +-------------------------------------------------------+   |
|   | Average Score: 78%                                    |   |
|   | Quizzes Passed: 20/25                                 |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Recent Activity                                             |
|   - Reviewed 15 flashcards (2 hours ago)                      |
|   - Completed Python Quiz with 85% (yesterday)                |
|   - Uploaded "ML Basics" document (2 days ago)                |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Stats Cards | Card[] | `stats.*` | Documents, Cards, Quizzes, Streak |
| Mastery Distribution | Progress | `mastery.*` | New, Learning, Mastered |
| Quiz Stats | Card | `quiz_stats.*` | Average score, passed |
| Activity List | List | `recent_activity[]` | Hoạt động gần đây |

### User Actions
- View stats
- Click document -> Navigate to document
- View activity history

### Data Cần Thiết
- stats: total_documents, total_flashcards, total_quizzes, streak_days
- mastery: new, learning, mastered, mastery_rate
- quiz_stats: average_score, quizzes_passed, total_quizzes
- recent_activity: action, description, timestamp

### API Calls
- `GET /api/v1/progress` - Lấy tổng quan tiến độ

---

### 5.2 Profile

### Route
- `/app/profile`

### Mô tả
- Thông tin cá nhân và cài đặt tài khoản.

### UI Layout
```
+---------------------------------------------------------------+
|  [Logo]     Documents    Flashcards    Quiz    AI Chat   [Av] |
+---------------------------------------------------------------+
|                                                               |
|   Profile                                                     |
|                                                               |
|   +-------------+                                             |
|   |   [Avatar]  |   Name: John Doe                           |
|   |   [Change]  |   Email: john@example.com                  |
|   +-------------+   Joined: January 2026                     |
|                                                               |
|   +-------------------------------------------------------+   |
|   | Personal Information                                  |   |
|   |                                                       |   |
|   | Name:     +-----------------------------------------+ |   |
|   |           | John Doe                                | |   |
|   |           +-----------------------------------------+ |   |
|   |                                                       |   |
|   | Email:    john@example.com (cannot change)           |   |
|   |                                                       |   |
|   |           +-----------------------+                   |   |
|   |           |    Save Changes       |                   |   |
|   |           +-----------------------+                   |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   +-------------------------------------------------------+   |
|   | Change Password                                       |   |
|   |                                                       |   |
|   | Current:  +-----------------------------------------+ |   |
|   |           |                                         | |   |
|   |           +-----------------------------------------+ |   |
|   |                                                       |   |
|   | New:      +-----------------------------------------+ |   |
|   |           |                                         | |   |
|   |           +-----------------------------------------+ |   |
|   |                                                       |   |
|   |           +-----------------------+                   |   |
|   |           |   Change Password     |                   |   |
|   |           +-----------------------+                   |   |
|   +-------------------------------------------------------+   |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Avatar | Image | `avatar` | Ảnh đại diện |
| Change Avatar | Button | - | Đổi ảnh |
| Name | Input | `name` | Tên hiển thị |
| Email | Text | `email` | Email (read-only) |
| Joined | Text | `created_at` | Ngày đăng ký |
| Save Button | Button | - | Lưu thay đổi |
| Current Password | Input | `current_password` | Mật khẩu hiện tại |
| New Password | Input | `new_password` | Mật khẩu mới |
| Change Password | Button | - | Đổi mật khẩu |

### User Actions
- Change avatar
- Edit name
- Save changes
- Change password

### Data Cần Thiết
- user: id, name, email, avatar, created_at

### API Calls
- `GET /api/v1/auth/me` - Lấy thông tin user
- `PUT /api/v1/auth/profile` - Cập nhật profile
- `PUT /api/v1/auth/change-password` - Đổi mật khẩu

---

## 6. ADMIN PAGES

### 6.1 Admin Dashboard

### Route
- `/admin/dashboard`

### Mô tả
- Thống kê tổng quan cho admin.

### UI Layout
```
+---------------------------------------------------------------+
|  Admin Dashboard                    [Users] [Documents] [AI]  |
+---------------------------------------------------------------+
|                                                               |
|   +-------------+ +-------------+ +-------------+ +---------+ |
|   | 150 Users   | | 500 Docs    | | 5000 Cards  | | 1000 Ch | |
|   +-------------+ +-------------+ +-------------+ +---------+ |
|                                                               |
|   User Growth                                                 |
|   +-------------------------------------------------------+   |
|   |                  Line Chart                           |   |
|   |                                                       |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Document Uploads                                            |
|   +-------------------------------------------------------+   |
|   |                  Bar Chart                            |   |
|   |                                                       |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Recent Activity                                             |
|   - New user: john@example.com (5 min ago)                    |
|   - Document uploaded: "Python 101" (10 min ago)              |
|   - Quiz completed by user #42 (15 min ago)                   |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Stats Cards | Card[] | `stats.*` | Users, Documents, Cards, Chats |
| User Growth Chart | Chart | `user_growth[]` | Biểu đồ user growth |
| Uploads Chart | Chart | `uploads[]` | Biểu đồ uploads |
| Activity List | List | `recent_activity[]` | Hoạt động gần đây |

### User Actions
- View stats
- View charts
- Navigate to management pages

### Data Cần Thiết
- stats: total_users, total_documents, total_flashcards, total_chats
- user_growth: date, count
- uploads: date, count
- recent_activity: action, entity, timestamp

### API Calls
- `GET /api/v1/admin/statistics` - Lấy thống kê admin

---

### 6.2 User Management

### Route
- `/admin/users`

### Mô tả
- Quản lý users của hệ thống.

### UI Layout
```
+---------------------------------------------------------------+
|  User Management                                              |
+---------------------------------------------------------------+
|                                                               |
|   +-------------------------------------------------------+   |
|   | [Search users...]                      [Role v]        |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   +-------------------------------------------------------+   |
|   | ID | Name    | Email           | Role  | Joined | Act |   |
|   |----|---------|-----------------|-------|--------|-----|   |
|   | 1  | John    | john@ex.com     | user  | Jan 26 | [X] |   |
|   | 2  | Jane    | jane@ex.com     | user  | Feb 26 | [X] |   |
|   | 3  | Admin   | admin@ex.com    | admin | Dec 25 | [X] |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Showing 1-10 of 150 users    [1] [2] [3] [>]               |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Search | Input | - | Tìm kiếm user |
| Role Filter | Select | - | Filter theo role |
| User Table | Table | `users[]` | Bảng users |
| ID | Text | `id` | User ID |
| Name | Text | `name` | Tên user |
| Email | Text | `email` | Email |
| Role | Badge | `role` | user/admin |
| Joined | Text | `created_at` | Ngày đăng ký |
| Actions | Button[] | - | Edit, Delete |

### User Actions
- Search users
- Filter by role
- Edit user role
- Delete user

### Data Cần Thiết
- users: id, name, email, role, created_at
- meta: total, page, limit

### API Calls
- `GET /api/v1/admin/users` - Lấy danh sách users
- `PUT /api/v1/admin/users/:id` - Cập nhật user
- `DELETE /api/v1/admin/users/:id` - Xóa user

---

### 6.3 Document Management

### Route
- `/admin/documents`

### Mô tả
- Quản lý tất cả tài liệu trong hệ thống.

### UI Layout
```
+---------------------------------------------------------------+
|  Document Management                                          |
+---------------------------------------------------------------+
|                                                               |
|   +-------------------------------------------------------+   |
|   | [Search documents...]                  [Status v]      |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   +-------------------------------------------------------+   |
|   | ID | Title       | Owner   | Type | Status   | Act    |   |
|   |----|-------------|---------|------|----------|--------|   |
|   | 1  | Python 101  | John    | pdf  | ready    | [View] |   |
|   | 2  | ML Basics   | Jane    | docx | ready    | [View] |   |
|   | 3  | Data Sci    | Bob     | pdf  | pending  | [View] |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Showing 1-10 of 500 documents   [1] [2] [3] [>]            |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Search | Input | - | Tìm kiếm tài liệu |
| Status Filter | Select | - | Filter theo status |
| Document Table | Table | `documents[]` | Bảng tài liệu |
| ID | Text | `id` | Document ID |
| Title | Text | `title` | Tiêu đề |
| Owner | Text | `owner.name` | Chủ sở hữu |
| Type | Badge | `file_type` | PDF/DOCX |
| Status | Badge | `status` | pending/processing/ready/failed |
| Actions | Button[] | - | View, Delete |

### User Actions
- Search documents
- Filter by status
- View document details
- Delete document

### Data Cần Thiết
- documents: id, title, file_type, status, owner_id, created_at
- owner: id, name
- meta: total, page, limit

### API Calls
- `GET /api/v1/admin/documents` - Lấy danh sách tài liệu
- `GET /api/v1/admin/documents/:id` - Chi tiết tài liệu
- `DELETE /api/v1/admin/documents/:id` - Xóa tài liệu

---

### 6.4 AI Usage Stats

### Route
- `/admin/ai-usage`

### Mô tả
- Thống kê sử dụng AI services.

### UI Layout
```
+---------------------------------------------------------------+
|  AI Usage Statistics                                          |
+---------------------------------------------------------------+
|                                                               |
|   +-------------+ +-------------+ +-------------+             |
|   | 50K Tokens  | | 1K Gen Req  | | 500 Chats   |             |
|   | This Month  | | This Month  | | This Month  |             |
|   +-------------+ +-------------+ +-------------+             |
|                                                               |
|   Token Usage Over Time                                       |
|   +-------------------------------------------------------+   |
|   |                  Line Chart                           |   |
|   |                                                       |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Generation Breakdown                                        |
|   +-------------------------------------------------------+   |
|   | Flashcards: 500 requests (50%)                        |   |
|   | Quizzes: 300 requests (30%)                           |   |
|   | Summaries: 200 requests (20%)                         |   |
|   +-------------------------------------------------------+   |
|                                                               |
|   Top Users by AI Usage                                       |
|   +-------------------------------------------------------+   |
|   | 1. John Doe - 5,000 tokens                            |   |
|   | 2. Jane Smith - 3,500 tokens                          |   |
|   | 3. Bob Wilson - 2,000 tokens                          |   |
|   +-------------------------------------------------------+   |
|                                                               |
+---------------------------------------------------------------+
```

### UI Elements

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Stats Cards | Card[] | `stats.*` | Tokens, Requests, Chats |
| Token Chart | Chart | `token_usage[]` | Biểu đồ token usage |
| Breakdown | List | `breakdown[]` | Phân bố theo loại |
| Top Users | List | `top_users[]` | Users dùng nhiều nhất |

### User Actions
- View stats
- View charts
- Filter by period

### Data Cần Thiết
- stats: total_tokens, total_requests, total_chats
- token_usage: date, tokens
- breakdown: type, count, percentage
- top_users: user_id, name, tokens

### API Calls
- `GET /api/v1/admin/ai-usage` - Lấy thống kê AI usage

---

## 7. SUMMARY

### Total Screens: 20

| Category | Count | Screens |
|----------|-------|---------|
| Public | 4 | Landing, Login, Register, Forgot Password |
| User - Documents | 3 | List, Detail, Upload |
| User - Learning | 5 | Flashcard Review, Progress, Quiz, Result, Bookmarks |
| User - AI | 2 | AI Chat, Session |
| User - Other | 2 | Progress, Profile |
| Admin | 4 | Dashboard, Users, Documents, AI Usage |

### Removed Screens (from previous version)
- Course List, Course Detail, Create Course, Edit Course, My Courses
- Lesson Detail, Learning Page
- Exercise Detail, Exercise Submit

### Key Changes
1. Document-centric: Tất cả features xoay quanh Documents (PDF/DOCX)
2. RAG-based: AI sử dụng RAG để trả lời dựa trên nội dung tài liệu
3. Simplified: Loại bỏ Course/Lesson/Exercise, thay bằng Document trực tiếp
4. AI Integration: Flashcard, Quiz, Summary đều được AI generate từ tài liệu

---

*Version: 4.0 - Updated: 2026-03-01*
*20 Screens - Document-RAG Based*
*Synced with BE flow-spec v3.0*
