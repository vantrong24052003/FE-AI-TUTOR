# AI TUTOR - Project Overview

## Mô tả dự án
**AI TUTOR** là nền tảng học tập trực tuyến thông minh với sự hỗ trợ của AI. Dự án cung cấp trải nghiệm học tập cá nhân hóa, theo dõi tiến độ và hệ thống quiz thông minh.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + Vite 8 |
| Language | TypeScript 5.9 (strict mode) |
| Styling | Tailwind CSS 4 + shadcn/ui |
| State | Zustand / React Query |
| Routing | React Router v7 |
| Testing | Vitest + Playwright |
| API | RESTful + MSW (mocking) |
| Workflow | OpenSpec |

## Cấu trúc thư mục

```
src/
├── components/          # Shared components
│   ├── ui/             # shadcn/ui components
│   ├── layout/         # Layout components
│   └── common/         # Common components
├── features/           # Feature-based modules
│   ├── auth/           # Authentication
│   ├── dashboard/      # Dashboard
│   ├── courses/        # Courses
│   ├── learning/       # Learning interface
│   ├── quiz/           # Quiz system
│   └── profile/        # User profile
├── hooks/              # Custom hooks
├── lib/                # Utilities
├── services/           # API services
├── stores/             # State management
├── types/              # TypeScript types
├── test/               # Test utilities
└── pages/              # Page components
```

## Features chính

### 1. Authentication
- Login / Register / Logout
- Password recovery
- Social login (Google, Facebook)
- JWT token management

### 2. Dashboard
- Learning overview
- Progress statistics
- Recent courses
- Recommendations

### 3. Courses
- Course catalog
- Course detail
- Module & Lesson structure
- Enrollment system

### 4. Learning Interface
- Video player
- Course content viewer
- Note taking
- Progress tracking
- AI Tutor chat

### 5. Quiz System
- Multiple choice questions
- Timed tests
- Instant feedback
- Score tracking

### 6. Profile
- Personal information
- Learning history
- Certificates
- Settings

### 7. Admin Panel
- Course management
- User management
- Content management
- Analytics

## API Endpoints (dự kiến)

```
AUTH
├── POST   /api/auth/login
├── POST   /api/auth/register
├── POST   /api/auth/logout
├── POST   /api/auth/refresh
└── POST   /api/auth/forgot-password

USERS
├── GET    /api/users/me
├── PUT    /api/users/me
└── GET    /api/users/me/courses

COURSES
├── GET    /api/courses
├── GET    /api/courses/:id
├── POST   /api/courses/:id/enroll
└── GET    /api/courses/:id/progress

LESSONS
├── GET    /api/courses/:courseId/lessons
├── GET    /api/lessons/:id
└── PUT    /api/lessons/:id/complete

QUIZ
├── GET    /api/quiz/:lessonId
├── POST   /api/quiz/:lessonId/submit
└── GET    /api/quiz/:lessonId/result

AI TUTOR
└── POST   /api/ai/chat
```

## Thiết kế UI/UX

### Color Palette (Primary)
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Success: Green (#22C55E)
- Warning: Yellow (#EAB308)
- Error: Red (#EF4444)

### Typography
- Font: Inter (Google Fonts)
- Headings: 600-700 weight
- Body: 400-500 weight

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
