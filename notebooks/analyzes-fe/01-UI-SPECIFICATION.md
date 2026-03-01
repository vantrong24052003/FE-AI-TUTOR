# FE AI TUTOR - UI Specification

> Mô tả chi tiết từng màn hình UI
>
> **Version**: 3.0 - 31 Screens

---

## 📋 Screens Index

| # | Page | Route | Type | Mô tả |
|---|------|-------|------|-------|
| **PUBLIC (4)** |
| 1 | Landing | `/` | Public | Trang chủ |
| 2 | Login | `/auth/login` | Public | Đăng nhập |
| 3 | Register | `/auth/register` | Public | Đăng ký |
| 4 | Forgot Password | `/auth/forgot-password` | Public | Quên mật khẩu |
| **USER - DASHBOARD (1)** |
| 5 | Dashboard | `/app/dashboard` | Protected | Trang chính |
| **USER - COURSES (5)** |
| 6 | Course List | `/app/courses` | Protected | Danh sách khóa |
| 7 | Course Detail | `/app/courses/:id` | Protected | Chi tiết khóa |
| 8 | Create Course | `/app/courses/create` | Protected | Tạo khóa mới |
| 9 | Edit Course | `/app/courses/:id/edit` | Protected | Sửa khóa |
| 10 | My Courses | `/app/my-courses` | Protected | Khóa đã đăng ký |
| **USER - LEARNING (2)** |
| 11 | Learning | `/app/learn/:courseId/lesson/:lessonId` | Protected | Học bài |
| 12 | Lesson Detail | `/app/lessons/:id` | Protected | Chi tiết bài |
| **USER - QUIZ (1)** |
| 13 | Quiz | `/app/quiz/:quizId` | Protected | Làm quiz |
| **USER - EXERCISES (2)** |
| 14 | Exercise Detail | `/app/exercises/:id` | Protected | Chi tiết bài tập |
| 15 | Exercise Submit | `/app/exercises/:id/submit` | Protected | Nộp bài |
| **USER - FLASHCARDS (3)** |
| 16 | Flashcard Review | `/app/flashcards` | Protected | Review hôm nay |
| 17 | Flashcards by Lesson | `/app/flashcards/:lessonId` | Protected | Cards theo bài |
| 18 | Flashcard Progress | `/app/flashcards/progress` | Protected | Tiến độ SRS |
| **USER - BOOKMARKS (1)** |
| 19 | Bookmarks | `/app/bookmarks` | Protected | Danh sách bookmark |
| **USER - AI TUTOR (2)** |
| 20 | AI Chat | `/app/ai-tutor` | Protected | Chat với AI |
| 21 | AI Conversation | `/app/ai-tutor/:conversationId` | Protected | Hội thoại cụ thể |
| **USER - PROGRESS (1)** |
| 22 | Progress | `/app/progress` | Protected | Tiến độ học tập |
| **USER - PROFILE (1)** |
| 23 | Profile | `/app/profile` | Protected | Thông tin cá nhân |
| **ADMIN (4)** |
| 24 | Admin Dashboard | `/admin/dashboard` | Admin | Thống kê admin |
| 25 | User Management | `/admin/users` | Admin | Quản lý users |
| 26 | Category Management | `/admin/categories` | Admin | Quản lý danh mục |
| 27 | All Courses | `/admin/courses` | Admin | Tất cả khóa học |

---

## 1. PUBLIC PAGES

### 1.1 Landing Page `/`

**UI Elements:**

| Section | Element | Mô tả |
|---------|---------|-------|
| **Header** | Logo, Nav Links, Login, Sign Up | Navigation bar |
| **Hero** | Headline, Subheadline, CTA buttons | Main banner |
| **Features** | 3-4 feature cards | Icon + Title + Description |
| **Courses** | 4 popular course cards | Preview courses |
| **CTA** | Final call to action | "Bắt đầu ngay" |
| **Footer** | Links, Copyright | Footer info |

**API Calls:**
- `GET /api/courses?limit=4` - Popular courses

---

### 1.2 Login Page `/auth/login`

**UI Elements:**

| Element | Type | Validation | Mô tả |
|---------|------|------------|-------|
| Email | Input | Required, Email | Email đăng nhập |
| Password | Input | Required, min 8 | Mật khẩu |
| Remember Me | Checkbox | Optional | Ghi nhớ đăng nhập |
| Login | Button | - | Submit form |
| Forgot Password | Link | - | → /auth/forgot-password |
| Register | Link | - | → /auth/register |

**API Calls:**
- `POST /api/auth/login` - Login

---

### 1.3 Register Page `/auth/register`

**UI Elements:**

| Element | Type | Validation | Mô tả |
|---------|------|------------|-------|
| Name | Input | Required, min 2 | Họ tên |
| Email | Input | Required, Email | Email |
| Password | Input | Required, min 8 | Mật khẩu |
| Confirm Password | Input | Must match | Xác nhận mật khẩu |
| Agree Terms | Checkbox | Required | Đồng ý điều khoản |
| Register | Button | - | Submit form |
| Login | Link | - | → /auth/login |

**API Calls:**
- `POST /api/auth/register` - Register

---

## 2. DASHBOARD

### 2.1 Dashboard `/app/dashboard`

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]     [Search...]           [🔔] [👤 Avatar ▼]        │
├────────────┬────────────────────────────────────────────────┤
│            │   Chào [Tên], hôm nay bạn muốn học gì?         │
│  Dashboard │                                                │
│  Courses   │   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────┐ │
│  My Learn  │   │ Courses │ │ Hours   │ │ Done    │ │🔥7  │ │
│  Flashcards│   │   12    │ │  45     │ │  23     │ │days │ │
│  Bookmarks │   └─────────┘ └─────────┘ └─────────┘ └─────┘ │
│  AI Tutor  │                                                │
│  Progress  │   Tiếp tục học                                │
│  Profile   │   ┌──────────────────────────────────────┐    │
│            │   │ [Thumb] Course - Lesson       65%    │    │
│            │   └──────────────────────────────────────┘    │
│            │                                                │
│            │   Flashcards cần review hôm nay (5)           │
│            │   ┌──────────────────────────────────────┐    │
│            │   │ [Front] → [Back]    [0][1][2][3][4][5]│   │
│            │   └──────────────────────────────────────┘    │
└────────────┴────────────────────────────────────────────────┘
```

**UI Elements:**

| Section | Element | Data Field | Mô tả |
|---------|---------|------------|-------|
| **Stats** | Courses | `total_courses` | Số khóa đã đăng ký |
| | Hours | `total_time_spent` | Tổng giờ học |
| | Done | `completed_lessons` | Bài đã hoàn thành |
| | Streak | `streak_days` | Số ngày học liên tiếp |
| **Continue Learning** | Course Card | `continue_learning` | Khóa đang học |
| **Flashcard Review** | Quick Review | `due_flashcards` | Cards cần review |
| **Recommended** | Course Grid | `recommended_courses` | Khóa đề xuất |

**API Calls:**
- `GET /api/learning-progress` - Stats
- `GET /api/flashcards/review` - Due flashcards
- `GET /api/courses?enrolled=true&limit=4` - Continue learning

---

## 3. COURSES PAGES

### 3.1 Course List `/app/courses`

**UI Elements:**

| Section | Element | Mô tả |
|---------|---------|-------|
| **Filters** | Search, Category, Level | Bộ lọc |
| **Course Grid** | Course Cards | Danh sách khóa |
| **Pagination** | Page numbers | Phân trang |

**Course Card:**

| Element | Data Field | Mô tả |
|---------|------------|-------|
| Thumbnail | `thumbnail` | Ảnh khóa |
| Title | `title` | Tên khóa |
| Creator | `creator.name` | Người tạo |
| Category | `category.name` | Danh mục |
| Level | `level` | Badge level |
| Lessons | `lessons_count` | Số bài |
| Students | `enrolled_count` | Số HV |
| Progress | `progress` | Nếu đã enrolled |
| Button | - | Enroll/Continue/Edit |

**API Calls:**
- `GET /api/courses` - Course list with filters
- `GET /api/categories` - Category filter

---

### 3.2 Course Detail `/app/courses/:id`

**UI Elements:**

| Section | Element | Mô tả |
|---------|---------|-------|
| **Header** | Thumbnail, Title, Meta | Thông tin chính |
| **Actions** | Enroll/Continue/Edit | Nút hành động |
| **Tabs** | Overview, Curriculum, Reviews | Tab nội dung |
| **Curriculum** | Modules + Lessons | Danh sách bài |

**Curriculum Item:**

| Element | Mô tả |
|---------|-------|
| Module | Accordion header |
| Lesson | Title, Duration, Status (✓/○) |
| Quiz | Badge "Quiz" |
| Exercise | Badge "Exercise" |

**API Calls:**
- `GET /api/courses/:id` - Course detail
- `POST /api/courses/:id/enroll` - Enroll

---

## 4. LEARNING PAGE

### 4.1 Learning Page `/app/learn/:courseId/lesson/:lessonId`

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  [← Back]  Course Name - Lesson Name    [📝] [🤖 AI]       │
├────────────────────────┬────────────────────────────────────┤
│   ┌────────────────┐   │   ▼ Module 1                     │
│   │   VIDEO        │   │     ✓ 1.1 Intro                   │
│   │   PLAYER       │   │     ✓ 1.2 Setup                   │
│   │                │   │     ● 1.3 Current ←               │
│   │                │   │   ▶ Module 2                     │
│   └────────────────┘   │     ○ 2.1 Next                    │
│                        │     ○ 2.2 ...                     │
│   [Mark Complete ✓]    │                                   │
│                        │                                   │
│   Lesson Content...    │                                   │
│                        │                                   │
│   ──────────────────   │                                   │
│   📝 Ghi chú của bạn   │                                   │
│   ┌────────────────┐   │                                   │
│   │ Add note...    │   │                                   │
│   └────────────────┘   │                                   │
│                        │                                   │
│   ──────────────────   │                                   │
│   🎴 Flashcards (5)    │                                   │
│   [Review Now]         │                                   │
│                        │                                   │
│   ──────────────────   │                                   │
│   📝 Bài tập (3)       │                                   │
│   [View Exercises]     │                                   │
└────────────────────────┴────────────────────────────────────┘
```

**UI Elements:**

| Section | Element | Mô tả |
|---------|---------|-------|
| **Video** | Player | Video bài học |
| **Actions** | Mark Complete | Đánh dấu hoàn thành |
| **Content** | Text/Markdown | Nội dung bài |
| **Notes** | Note Editor | Ghi chú cá nhân |
| **Flashcards** | Quick link | → Flashcard review |
| **Exercises** | Quick link | → Exercise list |
| **Sidebar** | Course Navigation | Danh sách bài |

**API Calls:**
- `GET /api/lessons/:id` - Lesson detail
- `POST /api/lesson-completions` - Mark complete
- `GET /api/lessons/:id/notes` - Notes
- `POST /api/lessons/:id/notes` - Create note
- `POST /api/lessons/:id/bookmark` - Toggle bookmark

---

## 5. QUIZ PAGE

### 5.1 Quiz Page `/app/quiz/:quizId`

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  Quiz Title                          ⏱ 15:00    5/10       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Câu 5: Python là gì?                                     │
│                                                             │
│   ○ A. Ngôn ngữ lập trình                                  │
│   ○ B. Hệ điều hành                                        │
│   ○ C. Phần mềm                                            │
│   ○ D. Cơ sở dữ liệu                                       │
│                                                             │
│   ─────────────────────────────────────────────────────     │
│                                                             │
│   ● ● ● ○ ○ ○ ○ ○ ○ ○    Question progress                │
│                                                             │
│   [← Previous]                        [Next →]  [Submit]   │
└─────────────────────────────────────────────────────────────┘
```

**UI Elements:**

| Element | Mô tả |
|---------|-------|
| Timer | Đếm ngược thời gian |
| Progress | Số câu đã trả lời |
| Question | Nội dung câu hỏi |
| Options | Radio/Checkbox |
| Navigation | Prev/Next/Submit |
| Progress Dots | Trạng thái từng câu |

**API Calls:**
- `GET /api/quizzes/:id` - Quiz detail
- `POST /api/quizzes/:id/submit` - Submit answers

---

## 6. EXERCISE PAGES

### 6.1 Exercise Detail `/app/exercises/:id`

**UI Elements:**

| Section | Element | Mô tả |
|---------|---------|-------|
| **Header** | Title, Type, Max Score | Thông tin bài tập |
| **Description** | Markdown | Mô tả yêu cầu |
| **Submission Form** | Textarea/File | Form nộp bài |
| **History** | List | Lịch sử nộp bài |
| **AI Feedback** | Card | Feedback từ AI (nếu đã chấm) |

**AI Feedback Display:**

| Element | Data Field | Mô tả |
|---------|------------|-------|
| Score | `score` | Điểm số |
| Overall Comment | `overall_comment` | Nhận xét chung |
| Strengths | `strengths[]` | Điểm tốt |
| Improvements | `improvements[]` | Cần cải thiện |
| Suggestions | `suggestions[]` | Gợi ý |

**API Calls:**
- `GET /api/exercises/:id` - Exercise detail
- `POST /api/exercises/:id/submit` - Submit
- `GET /api/exercises/:id/submissions` - History
- `POST /api/ai/solve-exercise` - AI hints

---

## 7. FLASHCARD PAGES

### 7.1 Flashcard Review `/app/flashcards`

**Mô tả:** Trang review flashcard theo Spaced Repetition (SRS)

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  Flashcard Review - Hôm nay                    🔥 5 cards   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │                                                     │   │
│   │              [Front] Variable là gì?                │   │
│   │                                                     │   │
│   │         👆 Click để lật thẻ                         │   │
│   │                                                     │   │
│   └─────────────────────────────────────────────────────┘   │
│                         ↓ Sau khi lật ↓                     │
│   ┌─────────────────────────────────────────────────────┐   │
│   │                                                     │   │
│   │              [Back] Nơi lưu trữ dữ liệu...          │   │
│   │                                                     │   │
│   │              💡 Hint: Think of a box                │   │
│   │                                                     │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
│   Đánh giá mức độ nhớ:                                     │
│   [0]  [1]  [2]  [3]  [4]  [5]                             │
│   😵   😕   🤔   🙂   😊   🎉                               │
│   Quên  Sai  Khó   Đúng Dễ  Hoàn hảo                       │
│                                                             │
│   Progress: 2/5 (40%)  ████████░░░░░░░░                    │
│   Lesson: Python Cơ bản - Bài 1                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**UI Elements:**

| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Card Front | Card | `front` | Mặt trước (câu hỏi) |
| Card Back | Card | `back` | Mặt sau (câu trả lời) - hiện sau khi lật |
| Hint | Text | `hint` | Gợi ý (optional) |
| Lesson Info | Text | `lesson.title` | Bài học thuộc về |
| Quality Rating | Buttons | 0-5 | Đánh giá mức độ nhớ |
| Progress Bar | Progress | - | Tiến độ review |
| Stats | Badges | `total_due`, `total_new`, `total_review` | Thống kê |

**Quality Rating (SM-2 Algorithm):**

| Rating | Label | Meaning | Effect on Interval |
|--------|-------|---------|-------------------|
| 0 | 😵 Quên hoàn toàn | Complete blackout | Reset to 1 day |
| 1 | 😕 Sai nhưng nhớ | Incorrect, recognized | Reset to 1 day |
| 2 | 🤔 Sai nhưng dễ nhớ | Incorrect, easy recall | Reset to 1 day |
| 3 | 🙂 Đúng nhưng khó | Correct with difficulty | Increase |
| 4 | 😊 Đúng sau suy nghĩ | Correct after hesitation | Increase |
| 5 | 🎉 Hoàn hảo | Perfect response | Increase more |

**API Calls:**
- `GET /api/flashcards/review` - Lấy cards cần review hôm nay
- `POST /api/flashcards/:id/review` - Submit rating (quality: 0-5)

**Response sau review:**
```json
{
  "flashcard_id": 1,
  "next_review_at": "2026-03-03T10:00:00Z",
  "interval": 2,
  "ease_factor": 2.5,
  "cards_due_today": 4
}
```

---

### 7.2 Flashcards by Lesson `/app/flashcards/:lessonId`

**Mô tả:** Xem/tạo flashcard theo bài học

**UI Elements:**

| Element | Loại | Mô tả |
|---------|------|-------|
| Flashcard List | Cards | Danh sách flashcard của bài |
| Create Button | Button | Tạo flashcard mới |
| AI Generate | Button | AI tạo flashcard từ nội dung |
| Edit/Delete | Actions | Sửa/xóa flashcard |

**API Calls:**
- `GET /api/lessons/:id/flashcards` - Danh sách flashcard
- `POST /api/lessons/:id/flashcards` - Tạo flashcard mới
- `PUT /api/flashcards/:id` - Cập nhật
- `DELETE /api/flashcards/:id` - Xóa
- `POST /api/ai/generate-flashcards` - AI tạo flashcard

---

### 7.3 Flashcard Progress `/app/flashcards/progress`

**Mô tả:** Thống kê tiến độ học flashcard

**UI Elements:**

| Element | Data Field | Mô tả |
|---------|------------|-------|
| Total Cards | `total` | Tổng số cards |
| Learned | `learned` | Đã học |
| New | `new` | Chưa học |
| Due Today | `due_today` | Cần review hôm nay |
| Mastery Rate | `mastery_rate` | Tỷ lệ nhớ tốt (0-100%) |
| Chart | - | Biểu đồ tiến độ theo thời gian |

**API Calls:**
- `GET /api/flashcards/progress` - Progress stats

**Response:**
```json
{
  "total_cards": 100,
  "learned": 45,
  "new": 30,
  "due_today": 15,
  "mastery_rate": 0.45
}
```

---

## 8. BOOKMARKS PAGE

### 8.1 Bookmarks `/app/bookmarks`

**UI Elements:**

| Element | Data Field | Mô tả |
|---------|------------|-------|
| Lesson Title | `lesson.title` | Tên bài |
| Course Title | `lesson.course.title` | Tên khóa |
| Note | `note` | Ghi chú bookmark |
| Created At | `created_at` | Thời gian tạo |
| Remove | Button | Xóa bookmark |

**API Calls:**
- `GET /api/bookmarks` - List bookmarks
- `DELETE /api/bookmarks/:id` - Remove

---

## 9. AI TUTOR PAGES

### 9.1 AI Chat `/app/ai-tutor`

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  AI Tutor                    [+ New Chat]                   │
├─────────────────────────────────────────────────────────────┤
│  Context: [Python Cơ bản ▼]                                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 👤 Variable trong Python là gì?                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 🤖 Variable là nơi lưu trữ dữ liệu...               │   │
│  │                                                     │   │
│  │ Ví dụ: x = 5                                       │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ─────────────────────────────────────────────────────     │
│                                                             │
│  Gợi ý: [Giải thích thêm] [Ví dụ code] [Quiz me]           │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ [Type your message...                        ] [Send]│   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**UI Elements:**

| Element | Mô tả |
|---------|-------|
| Context Selector | Chọn khóa học context |
| Messages | User + AI messages |
| Suggestions | Quick action chips |
| Input | Text input |
| New Chat | Button tạo hội thoại mới |

**API Calls:**
- `GET /api/chat/ai/conversations` - List conversations
- `POST /api/chat/ai/conversations` - Create conversation
- `GET /api/chat/ai/conversations/:id/messages` - Messages
- `POST /api/chat/ai/conversations/:id/messages` - Send message

---

## 10. PROGRESS PAGE

### 10.1 Learning Progress `/app/progress`

**UI Elements:**

| Section | Element | Data Field | Mô tả |
|---------|---------|------------|-------|
| **Overview Stats** | Courses | `total_courses` | Khóa đã đăng ký |
| | Completed | `completed_courses` | Khóa hoàn thành |
| | Lessons | `total_lessons` / `completed_lessons` | Bài học |
| | Time | `total_time_spent` | Giờ học |
| | Avg Score | `average_score` | Điểm TB |
| **Flashcards** | Stats | `flashcards.*` | Tiến độ SRS |
| **Exercises** | Stats | `exercises.*` | Bài tập |
| **Courses** | Progress Cards | `courses[]` | Tiến độ từng khóa |

**API Calls:**
- `GET /api/learning-progress` - Overall progress
- `GET /api/learning-progress/courses/:id` - Per-course progress

---

## 11. PROFILE PAGE

### 11.1 Profile `/app/profile`

**UI Elements:**

| Section | Element | Mô tả |
|---------|---------|-------|
| **Avatar** | Image + Upload | Ảnh đại diện |
| **Info** | Name, Email, Created | Thông tin cơ bản |
| **Settings** | Change Password | Đổi mật khẩu |
| | Preferences | Cài đặt cá nhân |

**API Calls:**
- `GET /api/auth/me` - Current user
- `PUT /api/auth/me` - Update profile
- `PUT /api/auth/change-password` - Change password

---

## 12. ADMIN PAGES

### 12.1 Admin Dashboard `/admin/dashboard`

**UI Elements:**

| Section | Element | Mô tả |
|---------|---------|-------|
| **Stats** | Users, Courses, Enrollments | Thống kê tổng quan |
| **Charts** | Activity, Popular courses | Biểu đồ |
| **Recent** | Users, Courses | Hoạt động gần đây |

**API Calls:**
- `GET /api/admin/statistics` - Admin stats

---

### 12.2 User Management `/admin/users`

**UI Elements:**

| Element | Mô tả |
|---------|-------|
| User Table | ID, Name, Email, Role, Status, Actions |
| Search | Tìm user |
| Actions | Edit role, Deactivate, Delete |

**API Calls:**
- `GET /api/users` - List users
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

---

### 12.3 Category Management `/admin/categories`

**UI Elements:**

| Element | Mô tả |
|---------|-------|
| Category List | Name, Slug, Course count |
| Add/Edit Form | Name, Description, Icon, Color |
| Actions | Edit, Delete |

**API Calls:**
- `GET /api/categories` - List
- `POST /api/categories` - Create
- `PUT /api/categories/:id` - Update
- `DELETE /api/categories/:id` - Delete

---

## 13. AI SERVICES INTEGRATION

### Các chỗ tích hợp AI trên UI:

| Page | Feature | Trigger | Result |
|------|---------|---------|--------|
| Lesson | Summarize | Button click | AI summary panel |
| Lesson | Generate Quiz | Button click | Quiz created |
| Lesson | Generate Flashcards | Button click | Flashcards created |
| Exercise | Hints | "Get Hint" button | AI hints |
| Exercise | Grade | Submit | AI feedback |
| Learning | Chat | Context menu | AI Tutor popup |

---

*Version: 3.0 - Updated: 2026-03-01*
*31 Screens, Full Feature Set*
