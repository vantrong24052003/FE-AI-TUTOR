# FE AI TUTOR - Routing Structure

> Cấu trúc routing cho ứng dụng

---

## 1. ROUTE TREE

```
/                              → Landing Page (Public)
├── /auth
│   ├── /login                 → Login
│   ├── /register              → Register
│   └── /forgot-password       → Forgot Password
│
├── /app                       → Main App (Protected)
│   ├── /dashboard             → Dashboard
│   ├── /courses               → Course List
│   ├── /courses/:id           → Course Detail
│   ├── /my-courses            → Enrolled Courses
│   ├── /learn/:courseId
│   │   └── /lesson/:lessonId  → Learning
│   ├── /quiz/:quizId          → Quiz
│   ├── /ai-tutor              → AI Chat
│   └── /profile               → Profile
│
├── /teacher                   → Teacher (Protected + Teacher Role)
│   ├── /dashboard             → Teacher Dashboard
│   ├── /courses               → My Courses
│   ├── /courses/create        → Create Course
│   └── /courses/:id           → Edit Course
│
└── /admin                     → Admin (Protected + Admin Role)
    ├── /                      → Admin Dashboard
    ├── /users                 → User Management
    └── /courses               → Course Management
```

---

## 2. ROUTE CONFIGURATION

```tsx
// app/router/index.tsx
const routes = [
  // Public
  { path: '/', element: <LandingPage /> },

  // Auth
  { path: '/auth/login', element: <LoginPage /> },
  { path: '/auth/register', element: <RegisterPage /> },
  { path: '/auth/forgot-password', element: <ForgotPasswordPage /> },

  // Protected - Student
  {
    path: '/app',
    element: <ProtectedRoute><MainLayout /></ProtectedRoute>,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'courses', element: <CoursesPage /> },
      { path: 'courses/:id', element: <CourseDetailPage /> },
      { path: 'my-courses', element: <MyCoursesPage /> },
      { path: 'learn/:courseId/lesson/:lessonId', element: <LearningPage /> },
      { path: 'quiz/:quizId', element: <QuizPage /> },
      { path: 'ai-tutor', element: <AITutorPage /> },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },

  // Protected - Teacher
  {
    path: '/teacher',
    element: <ProtectedRoute requiredRole="teacher"><MainLayout /></ProtectedRoute>,
    children: [
      { path: 'dashboard', element: <TeacherDashboard /> },
      { path: 'courses', element: <TeacherCourses /> },
      { path: 'courses/create', element: <CreateCourse /> },
      { path: 'courses/:id', element: <EditCourse /> },
    ],
  },

  // Protected - Admin
  {
    path: '/admin',
    element: <ProtectedRoute requiredRole="admin"><AdminLayout /></ProtectedRoute>,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: 'users', element: <UserManagement /> },
      { path: 'courses', element: <CourseManagement /> },
    ],
  },

  // 404
  { path: '*', element: <NotFoundPage /> },
]
```

---

## 3. ROUTE GUARDS

```tsx
// components/auth/ProtectedRoute.tsx
interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: 'student' | 'teacher' | 'admin'
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuthStore()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} />
  }

  if (requiredRole) {
    const roleHierarchy = { student: 1, teacher: 2, admin: 3 }
    if (roleHierarchy[user.role] < roleHierarchy[requiredRole]) {
      return <Navigate to="/app/dashboard" />
    }
  }

  return <>{children}</>
}
```

---

## 4. PAGES CHECKLIST

### Public Pages
- [ ] LandingPage
- [ ] LoginPage
- [ ] RegisterPage
- [ ] ForgotPasswordPage
- [ ] NotFoundPage

### Student Pages
- [ ] DashboardPage
- [ ] CoursesPage
- [ ] CourseDetailPage
- [ ] MyCoursesPage
- [ ] LearningPage
- [ ] QuizPage
- [ ] AITutorPage
- [ ] ProfilePage

### Teacher Pages
- [ ] TeacherDashboard
- [ ] TeacherCourses
- [ ] CreateCourse
- [ ] EditCourse

### Admin Pages
- [ ] AdminDashboard
- [ ] UserManagement
- [ ] CourseManagement

---

*Version: 1.0 - Updated: 2026-02-27*
