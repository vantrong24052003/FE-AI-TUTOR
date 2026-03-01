# FE AI TUTOR - Routing Structure

> Cấu trúc routing cho ứng dụng
>
> **Version**: 3.0 - 31 Screens

---

## 1. ROUTE TREE

```
/                                    → Landing Page (Public)
├── /auth
│   ├── /login                         → Login
│   ├── /register                      → Register
│   └── /forgot-password                → Forgot Password
│
├── /app                               → Main App (Protected)
│   ├── /dashboard                     → Dashboard
│   │
│   ├── /courses                       → Course List
│   ├── /courses/create                 → Create Course
│   ├── /courses/:id                    → Course Detail
│   ├── /courses/:id/edit               → Edit Course
│   │
│   ├── /my-courses                     → My Enrolled Courses
│   │
│   ├── /learn/:courseId
│   │   └── /lesson/:lessonId            → Learning Page
│   │
│   ├── /lessons/:id                    → Lesson Detail
│   │
│   ├── /quiz/:quizId                   → Quiz Page
│   │
│   ├── /exercises/:id                  → Exercise Detail
│   ├── /exercises/:id/submit            → Submit Exercise
│   │
│   ├── /flashcards                     → Flashcard Review (Today)
│   ├── /flashcards/:lessonId            → Flashcards by Lesson
│   ├── /flashcards/progress             → Flashcard Progress
│   │
│   ├── /bookmarks                       → Bookmarks List
│   │
│   ├── /ai-tutor                        → AI Chat
│   ├── /ai-tutor/:conversationId        → AI Chat Conversation
│   │
│   ├── /progress                        → Learning Progress
│   │
│   └── /profile                         → Profile
│
├── /admin                              → Admin Panel (Admin only)
│   ├── /dashboard                      → Admin Dashboard
│   ├── /users                           → User Management
│   ├── /categories                      → Category Management
│   └── /courses                         → All Courses
│
└── /*                                  → 404 Not Found
```

---

## 2. ROUTE CONFIGURATION

```tsx
// app/router/index.tsx
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  // ============ PUBLIC ROUTES ============
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/auth/login',
    element: <LoginPage />,
  },
  {
    path: '/auth/register',
    element: <RegisterPage />,
  },
  {
    path: '/auth/forgot-password',
    element: <ForgotPasswordPage />,
  },

  // ============ PROTECTED USER ROUTES ============
  {
    path: '/app',
    element: <ProtectedRoute><MainLayout /></ProtectedRoute>,
    children: [
      // Dashboard
      { path: 'dashboard', element: <DashboardPage /> },

      // Courses
      { path: 'courses', element: <CoursesPage /> },
      { path: 'courses/create', element: <CreateCoursePage /> },
      { path: 'courses/:id', element: <CourseDetailPage /> },
      { path: 'courses/:id/edit', element: <EditCoursePage /> },

      // My Learning
      { path: 'my-courses', element: <MyCoursesPage /> },

      // Learning
      { path: 'learn/:courseId/lesson/:lessonId', element: <LearningPage /> },

      // Lessons
      { path: 'lessons/:id', element: <LessonDetailPage /> },

      // Quiz
      { path: 'quiz/:quizId', element: <QuizPage /> },

      // Exercises
      { path: 'exercises/:id', element: <ExerciseDetailPage /> },
      { path: 'exercises/:id/submit', element: <ExerciseSubmitPage /> },

      // Flashcards
      { path: 'flashcards', element: <FlashcardReviewPage /> },
      { path: 'flashcards/:lessonId', element: <FlashcardLessonPage /> },
      { path: 'flashcards/progress', element: <FlashcardProgressPage /> },

      // Bookmarks
      { path: 'bookmarks', element: <BookmarksPage /> },

      // AI Tutor
      { path: 'ai-tutor', element: <AITutorPage /> },
      { path: 'ai-tutor/:conversationId', element: <AITutorPage /> },

      // Progress
      { path: 'progress', element: <ProgressPage /> },

      // Profile
      { path: 'profile', element: <ProfilePage /> },
    ],
  },

  // ============ ADMIN ROUTES ============
  {
    path: '/admin',
    element: <AdminRoute><AdminLayout /></AdminRoute>,
    children: [
      { path: 'dashboard', element: <AdminDashboardPage /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'categories', element: <CategoriesPage /> },
      { path: 'courses', element: <AllCoursesPage /> },
    ],
  },

  // ============ 404 ============
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router
```

---

## 3. ROUTE GUARDS

```tsx
// components/auth/ProtectedRoute.tsx
import { Navigate, useLocation } from 'react-router'
import { useAuthStore } from '@/stores/auth.store'
import type { PropsWithChildren } from 'react'

export function ProtectedRoute({ children }: PropsWithChildren) {
  const { isAuthenticated } = useAuthStore()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}

// components/auth/AdminRoute.tsx
export function AdminRoute({ children }: PropsWithChildren) {
  const { isAuthenticated, user } = useAuthStore()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />
  }

  if (user?.role !== 'admin') {
    return <Navigate to="/app/dashboard" replace />
  }

  return <>{children}</>
}
```

---

## 4. PAGES CHECKLIST

### Public Pages (4)
- [ ] LandingPage
- [ ] LoginPage
- [ ] RegisterPage
- [ ] ForgotPasswordPage
- [ ] NotFoundPage

### User Pages (21)
- [ ] DashboardPage
- [ ] CoursesPage
- [ ] CourseDetailPage
- [ ] CreateCoursePage
- [ ] EditCoursePage
- [ ] MyCoursesPage
- [ ] LearningPage
- [ ] LessonDetailPage
- [ ] QuizPage
- [ ] ExerciseDetailPage
- [ ] ExerciseSubmitPage
- [ ] FlashcardReviewPage
- [ ] FlashcardLessonPage
- [ ] FlashcardProgressPage
- [ ] BookmarksPage
- [ ] AITutorPage
- [ ] ProgressPage
- [ ] ProfilePage

### Admin Pages (4)
- [ ] AdminDashboardPage
- [ ] UsersPage
- [ ] CategoriesPage
- [ ] AllCoursesPage

**Total: 31 Pages**

---

## 5. ROUTE-BASED CODE SPLITTING

```tsx
// Lazy load pages for better performance
import { lazy, Suspense } from 'react'

const DashboardPage = lazy(() => import('@/pages/app/DashboardPage'))
const CoursesPage = lazy(() => import('@/pages/app/CoursesPage'))
const FlashcardReviewPage = lazy(() => import('@/pages/app/FlashcardReviewPage'))
// ... etc

// In route config
{
  path: 'dashboard',
  element: (
    <Suspense fallback={<PageLoader />}>
      <DashboardPage />
    </Suspense>
  ),
}
```

---

## 6. NAVIGATION PATTERNS

### Sidebar Navigation (Main App)
```tsx
const navItems = [
  { icon: Home, label: 'Dashboard', href: '/app/dashboard' },
  { icon: Book, label: 'Courses', href: '/app/courses' },
  { icon: GraduationCap, label: 'My Learning', href: '/app/my-courses' },
  { icon: Layers, label: 'Flashcards', href: '/app/flashcards' },
  { icon: Bookmark, label: 'Bookmarks', href: '/app/bookmarks' },
  { icon: Bot, label: 'AI Tutor', href: '/app/ai-tutor' },
  { icon: BarChart3, label: 'Progress', href: '/app/progress' },
  { icon: User, label: 'Profile', href: '/app/profile' },
]
```

### Admin Sidebar Navigation
```tsx
const adminNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: Folder, label: 'Categories', href: '/admin/categories' },
  { icon: BookOpen, label: 'Courses', href: '/admin/courses' },
]
```

---

*Version: 3.0 - Updated: 2026-03-01*
*31 Screens, Full Feature Set*
