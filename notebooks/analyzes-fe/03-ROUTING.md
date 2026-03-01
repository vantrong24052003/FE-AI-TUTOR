# FE AI TUTOR - Routing Structure

> Cấu trúc routing chi tiết cho ứng dụng - Document-RAG Based

**Version**: 5.1 - 20 Screens
**ID Type**: string (UUID)

---

## 1. ROUTE TREE

```
/                                    → Landing Page (Public)
├── /auth
│   └── /login                       → Login (Google Only)
│
├── /app                             → Main App (Protected)
│   ├── /dashboard                   → Dashboard Summary
│   ├── /profile                     → User Profile & Settings
│   │
│   ├── /documents                   → Documents List
│   │   ├── /upload                  → Upload New Document
│   │   └── /:id                     → Document Detail
│   │       ├── /processing          → Processing Status
│   │       ├── /path                → Learning Path (Roadmap)
│   │       └── /flashcards          → Flashcards by Document
│   │
│   ├── /path/:id/lessons/:lessonId  → Lesson Progress Content
│   │
│   ├── /quizzes/:id                 → Quiz Interface
│   │   └── /results                 → Quiz Results & Review
│   │
│   ├── /flashcards                  → Daily SRS Review
│   ├── /homework                    → Homework Solver
│   └── /ai-tutor                    → AI Tutor Chat
│
└── /admin                           → Admin Panel (Admin Only)
    ├── /dashboard                   → Admin Statistics
    ├── /users                       → User Management
    ├── /documents                   → Document Management
    └── /audit-logs                  → System Audit Logs
```

Note: Bookmarks, Notes, and Flashcards by Document are integrated as sub-tabs/overlays in the Document Detail view to keep the UI clean.

---

## 2. ROUTE CONFIGURATION (React Router v7)

```tsx
// app/router/index.tsx
import { createBrowserRouter } from 'react-router'
import { lazy, Suspense } from 'react'

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

  // ============ PROTECTED USER ROUTES ============
  {
    path: '/app',
    element: <ProtectedRoute><MainLayout /></ProtectedRoute>,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
      
      // Document Module
      { path: 'documents', element: <DocumentsPage /> },
      { path: 'documents/upload', element: <UploadDocumentPage /> },
      { path: 'documents/:id', element: <DocumentDetailPage /> },
      { path: 'documents/:id/processing', element: <ProcessingStatusPage /> },
      { path: 'documents/:id/path', element: <LearningPathPage /> },
      { path: 'documents/:id/flashcards', element: <FlashcardsDocPage /> },

      // Learning Module
      { path: 'path/:id/lessons/:lessonId', element: <LessonPage /> },
      { path: 'quizzes/:id', element: <QuizPage /> },
      { path: 'quizzes/:id/results', element: <QuizResultPage /> },
      { path: 'flashcards', element: <FlashcardReviewPage /> },
      
      // Specialized Features
      { path: 'homework', element: <HomeworkSolverPage /> },
      { path: 'ai-tutor', element: <AITutorChatPage /> },
      
      // User Profile
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

## 3. PAGE CHECKLIST (20 SCREENS)

### PUBLIC (2)
- [x] Landing Page (`/`)
- [x] Login (`/auth/login`)

### USER CORE (2)
- [x] Dashboard (`/app/dashboard`)
- [x] Profile (`/app/profile`)

### USER DOCUMENTS (4)
- [x] Documents List (`/app/documents`)
- [x] Document Detail (`/app/documents/:id`)
- [x] Upload Document (`/app/documents/upload`)
- [x] Processing Status (`/app/documents/:id/processing`)

### USER LEARNING (5)
- [x] Learning Path (`/app/documents/:id/path`)
- [x] Lesson Progress (`/app/path/:id/lessons/:lessonId`)
- [x] Quiz Interface (`/app/quizzes/:id`)
- [x] Quiz Results (`/app/quizzes/:id/results`)
- [x] Flashcard Review (`/app/flashcards`)

### USER TOOLS & AI (3)
- [x] Flashcards Doc View (`/app/documents/:id/flashcards`)
- [x] AI Tutor Chat (`/app/ai-tutor`)
- [x] Homework Solver (`/app/homework`)

### ADMIN (4)
- [x] Admin Dashboard (`/admin/dashboard`)
- [x] User Management (`/admin/users`)
- [x] Document Management (`/admin/documents`)
- [x] System Audit (`/admin/audit-logs`)

---

## 4. NAVIGATION RULES

| Source | Item | Destination |
|--------|------|-------------|
| Dashboard | Start Review | `/app/flashcards` |
| Dashboard | Upload New | `/app/documents/upload` |
| Doc List | Click Card | `/app/documents/:id` |
| Doc Detail | Generate Quiz | Redirect to Quiz loading |
| Doc Detail | Start Path | `/app/documents/:id/path` |
| Admin | Manage Users | `/admin/users` |

---

*Version: 5.1 - Final Document-RAG Architecture Mapping*
*18 Screens, UUID based.*
