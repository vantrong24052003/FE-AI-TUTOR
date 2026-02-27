# FE AI TUTOR - UI Specification Chi Tiết

> Mô tả chi tiết từng màn hình UI: Elements, Fields, Data cần thiết

---

## 1. PUBLIC PAGES

### 1.1 Landing Page `/`

**Mô tả:** Trang chủ giới thiệu sản phẩm

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                        HEADER                                │
│  [Logo] [Features] [Courses] [Pricing] [Login] [Sign Up]    │
├─────────────────────────────────────────────────────────────┤
│                       HERO SECTION                           │
│                                                              │
│        "Học tập thông minh với AI Tutor"                    │
│        "Mô tả ngắn về sản phẩm..."                          │
│                    [Bắt đầu ngay]                            │
│                    [Xem khóa học]                            │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                     FEATURES SECTION                         │
│   ┌─────────┐   ┌─────────┐   ┌─────────┐                  │
│   │ Icon 1  │   │ Icon 2  │   │ Icon 3  │                  │
│   │ Title 1 │   │ Title 2 │   │ Title 3 │                  │
│   │ Desc 1  │   │ Desc 2  │   │ Desc 3  │                  │
│   └─────────┘   └─────────┘   └─────────┘                  │
├─────────────────────────────────────────────────────────────┤
│                    POPULAR COURSES                           │
│   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   │
│   │ Course1 │   │ Course2 │   │ Course3 │   │ Course4 │   │
│   └─────────┘   └─────────┘   └─────────┘   └─────────┘   │
├─────────────────────────────────────────────────────────────┤
│                     TESTIMONIALS                             │
│   "Review từ user..."                    - User Name        │
├─────────────────────────────────────────────────────────────┤
│                        CTA                                   │
│         "Sẵn sàng bắt đầu hành trình học tập?"              │
│                    [Đăng ký ngay]                            │
├─────────────────────────────────────────────────────────────┤
│                       FOOTER                                 │
│   [About] [Contact] [Privacy] [Terms]    © 2026 AI TUTOR    │
└─────────────────────────────────────────────────────────────┘
```

**UI Elements:**

| Element | Loại | Field/Data | Mô tả |
|---------|------|------------|-------|
| **Header** |
| Logo | Image/Link | - | Logo app, click về home |
| Nav Links | Links | - | Features, Courses, Pricing |
| Login | Button | - | Link đến /auth/login |
| Sign Up | Button | - | Link đến /auth/register |
| **Hero** |
| Title | Heading | `headline` | "Học tập thông minh với AI Tutor" |
| Subtitle | Text | `subheadline` | Mô tả ngắn |
| CTA Primary | Button | - | "Bắt đầu ngay" → /auth/register |
| CTA Secondary | Button | - | "Xem khóa học" → /courses |
| **Features** |
| Feature Card | Card | `features[]` | Icon + Title + Description |
| **Courses** |
| Course Card | Card | `courses[]` | Thumbnail + Title + Price |
| View All | Link | - | → /courses |
| **Testimonials** |
| Quote | Text | `quote` | Nội dung review |
| Author | Text | `author` | Tên người review |
| Avatar | Image | `avatar` | Ảnh người review |
| **Footer** |
| Links | Links | - | About, Contact, Privacy, Terms |
| Copyright | Text | - | © 2026 AI TUTOR |

**Data cần thiết:**
```typescript
// Static data (hardcode hoặc từ CMS)
{
  headline: string
  subheadline: string
  features: Array<{
    icon: string
    title: string
    description: string
  }>
  testimonials: Array<{
    quote: string
    author: string
    avatar: string
  }>
  // Popular courses từ API
  courses: Course[] // GET /courses?limit=4
}
```

---

### 1.2 Login Page `/auth/login`

**Mô tả:** Trang đăng nhập

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│   ┌─────────────────────┐   ┌─────────────────────────────┐│
│   │                     │   │                             ││
│   │                     │   │         [Logo]              ││
│   │                     │   │                             ││
│   │                     │   │    "Chào mừng trở lại"      ││
│   │                     │   │                             ││
│   │     BRANDING        │   │   ┌───────────────────┐    ││
│   │     IMAGE/TEXT      │   │   │ Email             │    ││
│   │                     │   │   └───────────────────┘    ││
│   │                     │   │   ┌───────────────────┐    ││
│   │                     │   │   │ Password          │    ││
│   │                     │   │   └───────────────────┘    ││
│   │                     │   │                             ││
│   │                     │   │   [ ] Remember me          ││
│   │                     │   │                             ││
│   │                     │   │   Quên mật khẩu?           ││
│   │                     │   │                             ││
│   │                     │   │   ┌───────────────────┐    ││
│   │                     │   │   │     Đăng nhập     │    ││
│   │                     │   │   └───────────────────┘    ││
│   │                     │   │                             ││
│   │                     │   │   ────── Hoặc ──────        ││
│   │                     │   │                             ││
│   │                     │   │   [G] [F]  Social login     ││
│   │                     │   │                             ││
│   │                     │   │   Chưa có tài khoản?       ││
│   │                     │   │   Đăng ký ngay             ││
│   └─────────────────────┘   └─────────────────────────────┘│
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**UI Elements:**

| Element | Loại | Field | Validation | Mô tả |
|---------|------|-------|------------|-------|
| Email | Input | `email` | Required, Email format | Nhập email |
| Password | Input | `password` | Required, min 8 chars | Nhập mật khẩu, có toggle hiện/ẩn |
| Remember Me | Checkbox | `rememberMe` | Optional | Ghi nhớ đăng nhập |
| Quên mật khẩu? | Link | - | - | → /auth/forgot-password |
| Đăng nhập | Button | - | - | Submit form |
| Google | Button | - | - | Social login |
| Facebook | Button | - | - | Social login |
| Đăng ký | Link | - | - | → /auth/register |

**Data gửi đi:**
```typescript
{
  email: string
  password: string
  rememberMe?: boolean
}
```

---

### 1.3 Register Page `/auth/register`

**Mô tả:** Trang đăng ký tài khoản

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│   ┌─────────────────────┐   ┌─────────────────────────────┐│
│   │                     │   │         [Logo]              ││
│   │                     │   │    "Tạo tài khoản"          ││
│   │     BRANDING        │   │                             ││
│   │                     │   │   ┌───────────────────┐    ││
│   │                     │   │   │ Họ và tên         │    ││
│   │                     │   │   └───────────────────┘    ││
│   │                     │   │   ┌───────────────────┐    ││
│   │                     │   │   │ Email             │    ││
│   │                     │   │   └───────────────────┘    ││
│   │                     │   │   ┌───────────────────┐    ││
│   │                     │   │   │ Mật khẩu          │    ││
│   │                     │   │   └───────────────────┘    ││
│   │                     │   │   ┌───────────────────┐    ││
│   │                     │   │   │ Xác nhận mật khẩu │    ││
│   │                     │   │   └───────────────────┘    ││
│   │                     │   │                             ││
│   │                     │   │   [ ] Tôi đồng ý điều khoản ││
│   │                     │   │                             ││
│   │                     │   │   ┌───────────────────┐    ││
│   │                     │   │   │     Đăng ký       │    ││
│   │                     │   │   └───────────────────┘    ││
│   │                     │   │                             ││
│   │                     │   │   Đã có tài khoản? Đăng nhập││
│   └─────────────────────┘   └─────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**UI Elements:**

| Element | Loại | Field | Validation | Mô tả |
|---------|------|-------|------------|-------|
| Họ tên | Input | `name` | Required, min 2 chars | Tên người dùng |
| Email | Input | `email` | Required, Email format | Email đăng ký |
| Mật khẩu | Input | `password` | Required, min 8 chars, có chữ + số | Password |
| Xác nhận MK | Input | `confirmPassword` | Must match password | Nhập lại password |
| Đồng ý điều khoản | Checkbox | `agreeTerms` | Required | Phải check mới được đăng ký |
| Đăng ký | Button | - | - | Submit form |
| Đăng nhập | Link | - | - | → /auth/login |

**Data gửi đi:**
```typescript
{
  name: string
  email: string
  password: string
  confirmPassword: string
}
```

---

## 2. STUDENT PAGES

### 2.1 Dashboard `/app/dashboard`

**Mô tả:** Trang chính sau khi student đăng nhập

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]     [Search...]           [🔔] [👤 Avatar ▼]        │
├────────────┬────────────────────────────────────────────────┤
│            │                                                │
│  Dashboard │   Chào [Tên],                                 │
│  Khóa học  │   Hôm nay bạn muốn học gì?                    │
│  Học tập   │                                                │
│  AI Tutor  │   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────┐│
│  Hồ sơ     │   │ Courses │ │ Hours   │ │ Done    │ │🔥7  ││
│            │   │   12    │ │  45     │ │  23     │ │days ││
│            │   └─────────┘ └─────────┘ └─────────┘ └─────┘│
│            │                                                │
│            │   Tiếp tục học                                │
│            │   ┌──────────────────────────────────────┐   │
│            │   │ [Thumb]  React Basics - Bài 5       │   │
│            │   │          ████████░░ 65%             │   │
│            │   │          [Tiếp tục]                 │   │
│            │   └──────────────────────────────────────┘   │
│            │                                                │
│            │   Khóa học đề xuất                            │
│            │   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐│
│            │   │Course 1│ │Course 2│ │Course 3│ │Course 4││
│            │   └────────┘ └────────┘ └────────┘ └────────┘│
│            │                                                │
└────────────┴────────────────────────────────────────────────┘
```

**UI Elements:**

| Section | Element | Field/Data | Mô tả |
|---------|---------|------------|-------|
| **Header** |
| | Search | Input | Tìm kiếm khóa học |
| | Bell | Icon | Thông báo |
| | Avatar | Image + Dropdown | Menu: Profile, Settings, Logout |
| **Stats Cards** |
| | Courses | Number | Số khóa đã đăng ký |
| | Hours | Number | Tổng giờ học |
| | Completed | Number | Bài đã hoàn thành |
| | Streak | Number + Flame Icon | Số ngày học liên tiếp |
| **Continue Learning** |
| | Thumbnail | Image | Ảnh khóa học |
| | Course Name | Text | Tên khóa đang học |
| | Lesson Name | Text | Bài tiếp theo |
| | Progress Bar | Progress | % hoàn thành |
| | Continue Button | Button | → Learning page |
| **Recommended** |
| | Course Cards | Cards | 4 khóa học đề xuất |

**Data cần thiết:**
```typescript
{
  user: {
    name: string
    avatar: string
  }
  stats: {
    totalCourses: number
    learningHours: number
    completedLessons: number
    streak: number
  }
  continueLearning: {
    courseId: string
    courseName: string
    lessonId: string
    lessonName: string
    thumbnail: string
    progress: number
  }
  recommended: Course[] // 4 items
}
```

---

### 2.2 Course List `/app/courses`

**Mô tả:** Danh sách tất cả khóa học

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
├────────────┬────────────────────────────────────────────────┤
│            │  Khóa học                                     │
│            │                                                │
│  Filters:  │  [Search...........................] [🔍]      │
│  □ Free    │                                                │
│  □ Paid    │  Category: [All ▼]  Level: [All ▼]            │
│            │                                                │
│  Categories│  ──────────────────────────────────────────    │
│  - All     │                                                │
│  - Code    │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │
│  - Design  │  │Course 1│ │Course 2│ │Course 3│ │Course 4│ │
│  - Business│  └────────┘ └────────┘ └────────┘ └────────┘ │
│            │                                                │
│  Level:    │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │
│  - All     │  │Course 5│ │Course 6│ │Course 7│ │Course 8│ │
│  - Basic   │  └────────┘ └────────┘ └────────┘ └────────┘ │
│  - Med     │                                                │
│  - Adv     │  ──────────────────────────────────────────    │
│            │                                                │
│            │  [1] [2] [3] ... [10]  Pagination              │
└────────────┴────────────────────────────────────────────────┘
```

**UI Elements:**

| Section | Element | Field | Mô tả |
|---------|---------|-------|-------|
| **Filters** |
| | Search | Input | Tìm theo tên khóa học |
| | Category | Select | Lọc theo danh mục |
| | Level | Select | Basic/Intermediate/Advanced |
| | Price | Radio | Free/Paid |
| **Course Card** |
| | Thumbnail | Image | Ảnh đại diện khóa |
| | Title | Text | Tên khóa học |
| | Instructor | Text | Tên giảng viên |
| | Rating | Stars + Number | Đánh giá trung bình |
| | Students | Number | Số người đăng ký |
| | Price | Text | Free hoặc giá tiền |
| | Level | Badge | Basic/Intermediate/Advanced |
| **Pagination** |
| | Pages | Buttons | 1, 2, 3... |

**Data cần thiết:**
```typescript
{
  courses: Array<{
    id: string
    title: string
    thumbnail: string
    instructor: {
      name: string
      avatar: string
    }
    rating: number
    studentsCount: number
    price: number // 0 = Free
    level: 'beginner' | 'intermediate' | 'advanced'
    category: string
  }>
  pagination: {
    page: number
    totalPages: number
    total: number
  }
  categories: Array<{ id: string, name: string }>
}
```

---

### 2.3 Course Detail `/app/courses/:id`

**Mô tả:** Chi tiết một khóa học

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
├─────────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────────┐     │
│  │ [Thumbnail lớn - 16:9]                             │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  React Cơ Bản Đến Nâng Cao                                  │
│  Bởi Nguyễn Văn A  ⭐ 4.8 (256 reviews)  👥 1,234 students │
│                                                              │
│  [Đăng ký miễn phí]  [Thêm vào wishlist ❤️]                │
│                                                              │
│  ──────────────────────────────────────────────────────     │
│                                                              │
│  [Tổng quan] [Nội dung] [Giảng viên] [Đánh giá]             │
│                                                              │
│  ### Tổng quan ###                                           │
│  Mô tả chi tiết về khóa học...                              │
│  - Bạn sẽ học được gì                                       │
│  - Yêu cầu đầu vào                                          │
│                                                              │
│  ### Nội dung khóa học ###                                  │
│  ▼ Module 1: Giới thiệu (3 bài | 45p)                       │
│    ✓ 1.1 React là gì (15p)                                  │
│    ✓ 1.2 Cài đặt (20p)                                      │
│    ○ 1.3 Quiz (10p)                                         │
│  ▶ Module 2: React Basics (5 bài | 1h)                      │
│  ▶ Module 3: Hooks (8 bài | 2h)                             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**UI Elements:**

| Section | Element | Field | Mô tả |
|---------|---------|-------|-------|
| **Header** |
| | Thumbnail | Image | Ảnh khóa học |
| | Title | Heading | Tên khóa học |
| | Instructor | Text + Avatar | Tên + ảnh giảng viên |
| | Rating | Stars + Number | ⭐ 4.8 (256) |
| | Students | Number | Số học viên |
| | Enroll Button | Button | Đăng ký khóa |
| | Wishlist | Icon Button | Thêm vào yêu thích |
| **Tabs** |
| | Overview | Tab | Mô tả khóa học |
| | Content | Tab | Curriculum |
| | Instructor | Tab | Thông tin GV |
| | Reviews | Tab | Đánh giá |
| **Curriculum** |
| | Module | Accordion | Tiêu đề module + số bài |
| | Lesson | List Item | Tên bài + duration + status |

**Data cần thiết:**
```typescript
{
  id: string
  title: string
  description: string
  thumbnail: string
  instructor: {
    id: string
    name: string
    avatar: string
    bio: string
  }
  rating: number
  reviewsCount: number
  studentsCount: number
  price: number
  level: string
  duration: number // minutes
  lessonsCount: number
  isEnrolled: boolean
  curriculum: Array<{
    id: string
    title: string
    lessons: Array<{
      id: string
      title: string
      type: 'video' | 'article' | 'quiz'
      duration: number
      isCompleted: boolean
      isLocked: boolean
    }>
  }>
}
```

---

### 2.4 Learning Page `/app/learn/:courseId/lesson/:lessonId`

**Mô tả:** Giao diện học bài

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  [← Quay lại]  React Basics - Bài 5        [📖 Ghi chú] [🤖 AI]│
├────────────────────────┬────────────────────────────────────┤
│                        │                                    │
│   ┌────────────────┐   │   ▼ Module 1: Giới thiệu          │
│   │                │   │     ✓ 1.1 React là gì              │
│   │   VIDEO        │   │     ✓ 1.2 Cài đặt                  │
│   │   PLAYER       │   │     ● 1.3 JSX Basics ← Current     │
│   │                │   │   ▶ Module 2: Components           │
│   │                │   │     ○ 2.1 Functional Components    │
│   │                │   │     ○ 2.2 Class Components         │
│   └────────────────┘   │     ○ 2.3 Props                    │
│                        │   ▶ Module 3: Hooks                │
│   ████████████░░ 65%   │     ...                            │
│   [⏮] [⏯] [⏭]  12:34  │                                    │
│                        │   ─────────────────────────────    │
│   ──────────────────   │   Tiến độ: 12/45 bài (27%)        │
│                        │   ████████░░░░░░░░░░░░              │
│   ### Nội dung bài ### │                                    │
│   JSX là cú pháp...    │                                    │
│                        │                                    │
├────────────────────────┴────────────────────────────────────┤
│  [Đánh dấu hoàn thành ✓]                    [Bài sau →]     │
└─────────────────────────────────────────────────────────────┘
```

**UI Elements:**

| Section | Element | Field | Mô tả |
|---------|---------|-------|-------|
| **Header** |
| | Back | Button | Quay lại course detail |
| | Course Name | Text | Tên khóa học |
| | Notes | Button | Mở panel ghi chú |
| | AI Chat | Button | Mở chat với AI |
| **Video** |
| | Player | Video | Player video bài học |
| | Progress | Bar | Tiến độ video |
| | Controls | Buttons | Play, Pause, Next, Prev |
| **Content** |
| | Lesson Content | Markdown/HTML | Nội dung bài học |
| **Sidebar** |
| | Modules | Accordion List | Danh sách modules/bài |
| | Current | Highlight | Bài đang học |
| | Completed | Checkmark | Bài đã xong |
| | Progress | Bar + Text | Tiến độ tổng |
| **Footer** |
| | Complete | Button | Đánh dấu hoàn thành |
| | Next | Button | Bài tiếp theo |

**Data cần thiết:**
```typescript
{
  lesson: {
    id: string
    title: string
    type: 'video' | 'article' | 'quiz'
    videoUrl: string
    content: string // Markdown/HTML
    duration: number
    isCompleted: boolean
  }
  course: {
    id: string
    title: string
    progress: number
    modules: Array<{
      id: string
      title: string
      lessons: Array<{
        id: string
        title: string
        type: string
        duration: number
        isCompleted: boolean
      }>
    }>
  }
  navigation: {
    prevLessonId: string | null
    nextLessonId: string | null
  }
}
```

---

### 2.5 Quiz Page `/app/quiz/:quizId`

**Mô tả:** Làm bài kiểm tra

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  Quiz: React Basics              ⏱️ Thời gian: 12:35       │
│  Câu 3/10                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ──────────────────────────────────────────────────────     │
│                                                              │
│  JSX là viết tắt của什么?                                   │
│                                                              │
│  ○ A. JavaScript XML                                        │
│  ○ B. Java Syntax Extension                                 │
│  ○ C. JavaScript Extension                                  │
│  ○ D. JSON XML                                              │
│                                                              │
│  ──────────────────────────────────────────────────────     │
│                                                              │
│  [⏮ Câu trước]                              [Câu sau ⏭]    │
│                                                              │
│  Progress: ●●●○○○○○○○                                       │
│                                                              │
│  ──────────────────────────────────────────────────────     │
│                                                              │
│                    [NỘP BÀI]                                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**UI Elements:**

| Section | Element | Field | Mô tả |
|---------|---------|-------|-------|
| **Header** |
| | Quiz Title | Text | Tên bài kiểm tra |
| | Timer | Text | Đếm ngược thời gian |
| | Progress | Text | Câu 3/10 |
| **Question** |
| | Question Text | Text | Nội dung câu hỏi |
| | Options | Radio/Checkbox | A, B, C, D |
| **Navigation** |
| | Prev | Button | Câu trước |
| | Next | Button | Câu sau |
| | Progress Dots | Dots | Trạng thái từng câu |
| **Submit** |
| | Submit | Button | Nộp bài |

**Data cần thiết:**
```typescript
{
  quiz: {
    id: string
    title: string
    timeLimit: number // minutes, 0 = unlimited
    questions: Array<{
      id: string
      text: string
      type: 'single' | 'multiple' // radio or checkbox
      options: Array<{
        id: string
        text: string
      }>
    }>
  }
}
```

---

### 2.6 AI Chat `/app/ai-tutor`

**Mô tả:** Chat với AI Tutor

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  🤖 AI Tutor                                    [New Chat]  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Context: [React Basics ▼]                                  │
│                                                              │
│  ──────────────────────────────────────────────────────     │
│                                                              │
│  👤 React hooks là gì?                                      │
│                                                              │
│  🤖 React Hooks là các hàm đặc biệt cho phép bạn           │
│     sử dụng state và các tính năng khác của React          │
│     mà không cần viết class components...                   │
│                                                              │
│     Các hooks phổ biến:                                     │
│     - useState: quản lý state                               │
│     - useEffect: side effects                               │
│     - useContext: chia sẻ data                              │
│                                                              │
│  👤 Cho ví dụ về useState                                   │
│                                                              │
│  🤖 Đây là ví dụ về useState:                               │
│     ```javascript                                           │
│     const [count, setCount] = useState(0)                   │
│     ```                                                     │
│                                                              │
│  ──────────────────────────────────────────────────────     │
│                                                              │
│  Gợi ý: [Hooks là gì?] [Ví dụ] [Best practices]            │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Nhập tin nhắn...                           [Send ➤] │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**UI Elements:**

| Section | Element | Field | Mô tả |
|---------|---------|-------|-------|
| **Header** |
| | Title | Text | AI Tutor |
| | New Chat | Button | Tạo chat mới |
| **Context** |
| | Course Select | Select | Chọn ngữ cảnh khóa học |
| **Messages** |
| | User Message | Bubble | Tin nhắn của user |
| | AI Message | Bubble | Tin nhắn của AI, có code highlight |
| **Suggestions** |
| | Chips | Buttons | Gợi ý câu hỏi nhanh |
| **Input** |
| | Text Input | Input | Nhập tin nhắn |
| | Send | Button | Gửi tin nhắn |

**Data cần thiết:**
```typescript
{
  context: {
    courseId: string | null
    courseName: string
  }
  messages: Array<{
    id: string
    role: 'user' | 'assistant'
    content: string
    createdAt: string
  }>
  suggestions: string[]
}
```

---

### 2.7 Profile `/app/profile`

**Mô tả:** Thông tin cá nhân

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
├────────────┬────────────────────────────────────────────────┤
│            │                                                │
│  Dashboard │   [Avatar lớn]                                 │
│  Khóa học  │   Nguyễn Văn A                                 │
│  Học tập   │   student@email.com                            │
│  AI Tutor  │   [Chỉnh sửa profile]                          │
│  Hồ sơ     │                                                │
│            │   ─────────────────────────────────────────    │
│            │                                                │
│            │   [Thông tin] [Khóa học] [Chứng chỉ] [Cài đặt]│
│            │                                                │
│            │   ### Thông tin cá nhân ###                    │
│            │   Họ tên:     Nguyễn Văn A                     │
│            │   Email:      student@email.com                │
│            │   Ngày tham gia: 01/01/2026                    │
│            │                                                │
│            │   ### Thống kê học tập ###                     │
│            │   ┌─────────┐ ┌─────────┐ ┌─────────┐         │
│            │   │ Courses │ │ Hours   │ │Certificates│       │
│            │   │   12    │ │  45     │ │    3     │         │
│            │   └─────────┘ └─────────┘ └─────────┘         │
│            │                                                │
└────────────┴────────────────────────────────────────────────┘
```

**UI Elements:**

| Section | Element | Field | Mô tả |
|---------|---------|-------|-------|
| **Profile Card** |
| | Avatar | Image | Ảnh đại diện |
| | Name | Text | Tên user |
| | Email | Text | Email |
| | Edit | Button | Chỉnh sửa profile |
| **Tabs** |
| | Info | Tab | Thông tin cá nhân |
| | Courses | Tab | Khóa đã đăng ký |
| | Certificates | Tab | Chứng chỉ |
| | Settings | Tab | Cài đặt tài khoản |
| **Info Tab** |
| | Name | Text | Họ tên |
| | Email | Text | Email |
| | Joined | Text | Ngày tham gia |
| **Stats** |
| | Courses | Number | Số khóa học |
| | Hours | Number | Giờ học |
| | Certificates | Number | Số chứng chỉ |

**Data cần thiết:**
```typescript
{
  user: {
    id: string
    name: string
    email: string
    avatar: string
    createdAt: string
  }
  stats: {
    totalCourses: number
    learningHours: number
    certificates: number
  }
}
```

---

## 3. TEACHER PAGES

### 3.1 Teacher Dashboard `/teacher/dashboard`

**Mô tả:** Dashboard của giảng viên

**UI Elements:**

| Section | Element | Field | Mô tả |
|---------|---------|-------|-------|
| **Stats** |
| | Total Courses | Number | Số khóa đã tạo |
| | Total Students | Number | Tổng học viên |
| | Revenue | Number | Doanh thu |
| | Rating | Number | Đánh giá TB |
| **My Courses** |
| | Course List | Table | Danh sách khóa |
| | Actions | Buttons | Edit, Delete, View |

---

### 3.2 Create/Edit Course `/teacher/courses/create`

**Mô tả:** Form tạo/sửa khóa học

**UI Elements:**

| Element | Field | Type | Mô tả |
|---------|-------|------|-------|
| Title | `title` | Input | Tên khóa học |
| Description | `description` | Textarea | Mô tả |
| Thumbnail | `thumbnail` | File Upload | Ảnh đại diện |
| Category | `categoryId` | Select | Danh mục |
| Level | `level` | Select | Basic/Intermediate/Advanced |
| Price | `price` | Input | Giá (0 = Free) |
| Modules | `modules` | Dynamic List | Danh sách modules |
| Lessons | `lessons` | Dynamic List | Bài học trong mỗi module |

---

## 4. ADMIN PAGES

### 4.1 Admin Dashboard `/admin`

**Mô tả:** Dashboard quản trị

**UI Elements:**

| Section | Element | Field | Mô tả |
|---------|---------|-------|-------|
| **Stats** |
| | Users | Number | Tổng users |
| | Courses | Number | Tổng khóa |
| | Revenue | Number | Doanh thu |
| | Active Users | Number | User hoạt động |
| **Charts** |
| | User Growth | Chart | Biểu đồ user mới |
| | Revenue | Chart | Biểu đồ doanh thu |

---

### 4.2 User Management `/admin/users`

**Mô tả:** Quản lý người dùng

**UI Elements:**

| Element | Field | Mô tả |
|---------|-------|-------|
| Search | - | Tìm user theo tên/email |
| Filter | Role | Student/Teacher/Admin |
| User Table | id, name, email, role, status, createdAt | Danh sách users |
| Actions | Edit, Delete, Ban | Thao tác |

---

## 5. MISSING PAGES (Cần bổ sung)

### 5.1 Forgot Password `/auth/forgot-password`

**Mô tả:** Trang yêu cầu reset mật khẩu

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│   ┌─────────────────────┐   ┌─────────────────────────────┐│
│   │                     │   │         [Logo]              ││
│   │                     │   │   "Quên mật khẩu?"          ││
│   │     BRANDING        │   │                             ││
│   │     IMAGE           │   │   Nhập email để nhận link   ││
│   │                     │   │   reset mật khẩu            ││
│   │                     │   │                             ││
│   │                     │   │   ┌───────────────────┐    ││
│   │                     │   │   │ Email             │    ││
│   │                     │   │   └───────────────────┘    ││
│   │                     │   │                             ││
│   │                     │   │   ┌───────────────────┐    ││
│   │                     │   │   │   Gửi link reset  │    ││
│   │                     │   │   └───────────────────┘    ││
│   │                     │   │                             ││
│   │                     │   │   ← Quay lại đăng nhập     ││
│   └─────────────────────┘   └─────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**UI Elements:**

| Element | Loại | Field | Validation | Mô tả |
|---------|------|-------|------------|-------|
| Email | Input | `email` | Required, Email | Email đã đăng ký |
| Submit | Button | - | - | Gửi link reset |
| Back | Link | - | - | → /auth/login |

**Success State:**
```
┌─────────────────────────────────────┐
│  ✅ Email đã được gửi!              │
│                                     │
│  Kiểm tra hộp thư của bạn để        │
│  nhận link đặt lại mật khẩu         │
│                                     │
│  [Gửi lại email] (sau 60s)          │
└─────────────────────────────────────┘
```

---

### 5.2 My Courses `/app/my-courses`

**Mô tả:** Danh sách khóa học đã đăng ký

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
├────────────┬────────────────────────────────────────────────┤
│            │                                                │
│  Dashboard │   Khóa học của tôi                            │
│  Khóa học  │                                                │
│  Học tập   │   [Tất cả] [Đang học] [Hoàn thành]            │
│  AI Tutor  │                                                │
│  Hồ sơ     │   ┌──────────────────────────────────────────┐│
│            │   │ [Thumb]  React Basics                    ││
│            │   │          ████████████░░ 65%              ││
│            │   │          23/45 bài | Tiếp tục học        ││
│            │   └──────────────────────────────────────────┘│
│            │                                                │
│            │   ┌──────────────────────────────────────────┐│
│            │   │ [Thumb]  TypeScript Advanced             ││
│            │   │          ██████████████████ 100% ✓       ││
│            │   │          Đã hoàn thành | Xem chứng chỉ   ││
│            │   └──────────────────────────────────────────┘│
│            │                                                │
│            │   ┌──────────────────────────────────────────┐│
│            │   │ [Thumb]  Node.js Backend                 ││
│            │   │          ████░░░░░░░░░░░░ 20%            ││
│            │   │          5/30 bài | Tiếp tục học         ││
│            │   └──────────────────────────────────────────┘│
│            │                                                │
└────────────┴────────────────────────────────────────────────┘
```

**UI Elements:**

| Section | Element | Field | Mô tả |
|---------|---------|-------|-------|
| **Tabs** |
| | All | Tab | Tất cả khóa |
| | In Progress | Tab | Đang học |
| | Completed | Tab | Hoàn thành |
| **Course Card** |
| | Thumbnail | Image | Ảnh khóa |
| | Title | Text | Tên khóa |
| | Progress Bar | Progress | % hoàn thành |
| | Stats | Text | X/Y bài |
| | Action | Button | Tiếp tục / Xem chứng chỉ |

**Data cần thiết:**
```typescript
{
  courses: Array<{
    id: string
    title: string
    thumbnail: string
    progress: number
    completedLessons: number
    totalLessons: number
    status: 'in_progress' | 'completed'
    certificateId?: string
  }>
}
```

---

### 5.3 Search Results `/app/search`

**Mô tả:** Kết quả tìm kiếm khóa học

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
├────────────┬────────────────────────────────────────────────┤
│            │                                                │
│  ...       │   Kết quả tìm kiếm: "react hooks"             │
│            │   Tìm thấy 15 khóa học                         │
│            │                                                │
│            │   Sắp xếp: [Relevance ▼] [Newest] [Popular]   │
│            │                                                │
│            │   ┌─────────────────────────────────────────┐ │
│            │   │ [Thumb] React Hooks Complete Guide      │ │
│            │   │ ⭐ 4.8 | 👥 1,234 | $49                  │ │
│            │   └─────────────────────────────────────────┘ │
│            │                                                │
│            │   ┌─────────────────────────────────────────┐ │
│            │   │ [Thumb] Advanced Hooks Patterns         │ │
│            │   │ ⭐ 4.6 | 👥 856 | $39                    │ │
│            │   └─────────────────────────────────────────┘ │
│            │                                                │
│            │   [1] [2] [3] ...                             │
│            │                                                │
└────────────┴────────────────────────────────────────────────┘
```

**UI Elements:**

| Element | Field | Mô tả |
|---------|-------|-------|
| Search Query | `q` | Từ khóa tìm kiếm |
| Result Count | `total` | Số kết quả |
| Sort | Select | Relevance/Newest/Popular |
| Course Card | Course | Card khóa học |

---

### 5.4 Notifications Panel

**Mô tả:** Panel thông báo (dropdown từ navbar)

**UI Layout:**
```
┌─────────────────────────────┐
│  Thông báo        [Đọc tất cả] │
├─────────────────────────────┤
│  ● Khóa học mới: React 19   │
│    2 phút trước             │
├─────────────────────────────┤
│  ● Bạn đã hoàn thành bài 5  │
│    1 giờ trước              │
├─────────────────────────────┤
│  ○ Nhắc nhở học bài hôm nay │
│    3 giờ trước              │
├─────────────────────────────┤
│  ○ Certificate đã sẵn sàng  │
│    Hôm qua                  │
├─────────────────────────────┤
│        [Xem tất cả →]       │
└─────────────────────────────┘
```

**UI Elements:**

| Element | Field | Mô tả |
|---------|-------|-------|
| Unread Dot | `isRead` | Chấm xanh = chưa đọc |
| Title | `title` | Tiêu đề thông báo |
| Message | `message` | Nội dung |
| Time | `createdAt` | Thời gian |
| Type Icon | `type` | Icon theo loại |

**Notification Types:**
- `new_course`: Khóa học mới
- `lesson_complete`: Hoàn thành bài
- `reminder`: Nhắc nhở
- `certificate`: Chứng chỉ
- `promotion`: Khuyến mãi

---

### 5.5 Settings Page `/app/profile/settings`

**Mô tả:** Cài đặt tài khoản

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
├────────────┬────────────────────────────────────────────────┤
│            │                                                │
│  Profile   │   Cài đặt                                     │
│  Settings  │                                                │
│            │   [Tài khoản] [Thông báo] [Bảo mật] [Giao diện]│
│            │                                                │
│            │   ### Đổi mật khẩu ###                         │
│            │   ┌───────────────────────────────┐           │
│            │   │ Mật khẩu hiện tại             │           │
│            │   └───────────────────────────────┘           │
│            │   ┌───────────────────────────────┐           │
│            │   │ Mật khẩu mới                  │           │
│            │   └───────────────────────────────┘           │
│            │   ┌───────────────────────────────┐           │
│            │   │ Xác nhận mật khẩu mới         │           │
│            │   └───────────────────────────────┘           │
│            │                                    [Cập nhật]  │
│            │                                                │
│            │   ### Phiên đăng nhập ###                      │
│            │   🖥️ Chrome on Windows - Active now           │
│            │   📱 Mobile App - 2 days ago    [Đăng xuất]    │
│            │                                                │
└────────────┴────────────────────────────────────────────────┘
```

**UI Elements:**

| Tab | Element | Field | Mô tả |
|-----|---------|-------|-------|
| **Security** |
| | Current Password | `currentPassword` | Mật khẩu hiện tại |
| | New Password | `newPassword` | Mật khẩu mới |
| | Confirm Password | `confirmPassword` | Xác nhận |
| | Sessions | `sessions[]` | Danh sách phiên đăng nhập |
| **Notifications** |
| | Email Notifications | Toggle | Bật/tắt email |
| | Push Notifications | Toggle | Bật/tắt push |
| | Learning Reminders | Toggle | Nhắc nhở học |
| **Appearance** |
| | Theme | Select | Light/Dark/System |
| | Language | Select | Ngôn ngữ |

---

### 5.6 Certificates `/app/profile/certificates`

**Mô tả:** Danh sách chứng chỉ

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
├────────────┬────────────────────────────────────────────────┤
│            │                                                │
│  Profile   │   Chứng chỉ của tôi                           │
│  ...       │                                                │
│            │   ┌─────────────────────────────────────────┐ │
│            │   │  📜 CERTIFICATE                         │ │
│            │   │  React Basics                           │ │
│            │   │  Hoàn thành: 15/02/2026                 │ │
│            │   │  [Xem] [Tải PDF] [Chia sẻ]              │ │
│            │   └─────────────────────────────────────────┘ │
│            │                                                │
│            │   ┌─────────────────────────────────────────┐ │
│            │   │  📜 CERTIFICATE                         │ │
│            │   │  TypeScript Advanced                    │ │
│            │   │  Hoàn thành: 20/02/2026                 │ │
│            │   │  [Xem] [Tải PDF] [Chia sẻ]              │ │
│            │   └─────────────────────────────────────────┘ │
│            │                                                │
└────────────┴────────────────────────────────────────────────┘
```

**UI Elements:**

| Element | Field | Mô tả |
|---------|-------|-------|
| Certificate Icon | - | Icon chứng chỉ |
| Course Name | `courseName` | Tên khóa |
| Completed Date | `completedAt` | Ngày hoàn thành |
| View | Button | Xem chứng chỉ |
| Download | Button | Tải PDF |
| Share | Button | Chia sẻ (LinkedIn, etc.) |

---

### 5.7 Review/Rating Modal

**Mô tả:** Modal đánh giá khóa học

**UI Layout:**
```
┌─────────────────────────────────────┐
│  Đánh giá khóa học            [✕]  │
├─────────────────────────────────────┤
│                                     │
│  React Cơ Bản Đến Nâng Cao         │
│                                     │
│  Đánh giá của bạn:                  │
│  ⭐ ⭐ ⭐ ⭐ ⭐                       │
│                                     │
│  Tiêu đề đánh giá:                  │
│  ┌─────────────────────────────┐   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
│  Nhận xét chi tiết:                 │
│  ┌─────────────────────────────┐   │
│  │                             │   │
│  │                             │   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
│           [Hủy]  [Gửi đánh giá]    │
│                                     │
└─────────────────────────────────────┘
```

**UI Elements:**

| Element | Field | Mô tả |
|---------|-------|-------|
| Star Rating | `rating` | 1-5 sao |
| Title | `title` | Tiêu đề review |
| Comment | `comment` | Nội dung review |
| Submit | Button | Gửi đánh giá |

---

### 5.8 Quiz Result (Enhanced)

**Mô tả:** Kết quả quiz chi tiết

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  🎉 Chúc mừng! Bạn đã PASS                                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│           ┌───────────────────────────┐                     │
│           │      Điểm: 85/100        │                     │
│           │   ████████████████░░░░   │                     │
│           └───────────────────────────┘                     │
│                                                              │
│   ┌─────────────────────────────────────────────────────┐  │
│   │ Thống kê:                                           │  │
│   │ ✅ Correct: 8                                        │  │
│   │ ❌ Wrong: 2                                          │  │
│   │ ⏱️ Time: 8:45 / 15:00                               │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                              │
│   [Xem đáp án] [Làm lại] [Bài tiếp theo]                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**UI Elements:**

| Element | Field | Mô tả |
|---------|-------|-------|
| Pass/Fail | `passed` | Trạng thái |
| Score | `score` | Điểm số |
| Correct | `correctAnswers` | Số câu đúng |
| Wrong | `wrongAnswers` | Số câu sai |
| Time | `timeSpent` | Thời gian làm |
| View Answers | Button | Xem đáp án chi tiết |
| Retry | Button | Làm lại |
| Next | Button | Bài tiếp |

---

### 5.9 Payment Page `/app/checkout/:courseId`

**Mô tả:** Thanh toán khóa học

**UI Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   Thanh toán                                                │
│                                                              │
│   ┌─────────────────────────────────────────────────────┐  │
│   │ [Thumb] React Cơ Bản Đến Nâng Cao                   │  │
│   │                                                      │  │
│   │ Giá: $49.00                                         │  │
│   │ Giảm giá: -$10.00 (Code: NEWYEAR)                   │  │
│   │ ────────────────────────────                        │  │
│   │ Tổng: $39.00                                        │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                              │
│   Phương thức thanh toán:                                   │
│   ┌─────────────────────────────────────────────────────┐  │
│   │ ○ 💳 Credit Card                                    │  │
│   │ ○ 🏦 Bank Transfer                                   │  │
│   │ ○ 📱 Momo/ZaloPay                                    │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                              │
│   Mã giảm giá: [________] [Áp dụng]                        │
│                                                              │
│   [Hủy]                          [Thanh toán $39.00]       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**UI Elements:**

| Element | Field | Mô tả |
|---------|-------|-------|
| Course Info | `course` | Thông tin khóa |
| Original Price | `originalPrice` | Giá gốc |
| Discount | `discount` | Giảm giá |
| Total | `totalPrice` | Tổng tiền |
| Payment Method | `paymentMethod` | card/bank/momo |
| Coupon | `couponCode` | Mã giảm giá |
| Pay Button | - | Thanh toán |

---

### 5.10 Error Pages

#### 404 Not Found
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                         404                                 │
│                                                              │
│              Trang không tồn tại                            │
│                                                              │
│         Xin lỗi, trang bạn tìm không tồn tại               │
│                                                              │
│                    [Về trang chủ]                           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

#### 500 Server Error
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                         500                                 │
│                                                              │
│              Lỗi máy chủ                                    │
│                                                              │
│         Đã có lỗi xảy ra, vui lòng thử lại sau             │
│                                                              │
│                    [Thử lại] [Về trang chủ]                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. ENHANCEMENTS (Cải tiến)

### 6.1 Video Player Controls

| Control | Mô tả |
|---------|-------|
| Play/Pause | Phát/dừng video |
| Volume | Điều chỉnh âm lượng |
| Progress Bar | Tua video |
| Fullscreen | Toàn màn hình |
| Speed | 0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x |
| Quality | 360p, 480p, 720p, 1080p |
| Captions | Phụ đề (nếu có) |
| Picture-in-Picture | Xem trong cửa sổ nhỏ |

### 6.2 AI Chat Enhancements

| Feature | Mô tả |
|---------|-------|
| Multi-line Input | Shift+Enter để xuống dòng |
| Code Block | Hỗ trợ paste code với syntax highlight |
| File Upload | Upload ảnh/screenshot để hỏi |
| Voice Input | Nhập bằng giọng nói (optional) |
| History | Xem lại lịch sử chat cũ |

### 6.3 Progress Tracking

| Feature | Mô tả |
|---------|-------|
| Learning Path | Biểu đồ đường học |
| Achievement Badges | Huy hiệu thành tích |
| Weekly Goals | Mục tiêu hàng tuần |
| Streak Calendar | Lịch học liên tiếp |
| Time Tracking | Thống kê thời gian học |

---

## 7. RESPONSIVE BREAKPOINTS

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | < 640px | Single column, bottom nav |
| Tablet | 640px - 1024px | Collapsed sidebar |
| Desktop | > 1024px | Full sidebar |

### Mobile Adaptations
- Sidebar → Drawer/Bottom Sheet
- Course Grid → 1 column
- Video Player → Full width
- Tabs → Scrollable pills

---

*Version: 1.1 - Updated: 2026-02-27*
