# AI TUTOR - Source Code Structure & Conventions

## 1. Cấu trúc thư mục SRC

```
src/
├── app/                          # App-level configuration
│   ├── router/                   # Routing configuration
│   │   ├── index.tsx            # Router setup
│   │   └── routes.tsx           # Route definitions
│   ├── providers/               # Context providers
│   │   ├── index.tsx            # Combined providers
│   │   ├── QueryProvider.tsx
│   │   └── ThemeProvider.tsx
│   └── App.tsx                  # Root component
│
├── components/                   # SHARED components (dùng chung)
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/                  # Layout components
│   │   ├── MainLayout.tsx
│   │   ├── AuthLayout.tsx
│   │   ├── AdminLayout.tsx
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── common/                  # Common reusable components
│   │   ├── PageLoader.tsx
│   │   ├── EmptyState.tsx
│   │   ├── ErrorMessage.tsx
│   │   ├── ConfirmDialog.tsx
│   │   └── StatsCard.tsx
│   └── index.ts                 # Barrel export
│
├── features/                     # FEATURE MODULES (quan trọng nhất)
│   ├── auth/                    # Auth feature
│   │   ├── components/          # Feature-specific components
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   └── SocialLogin.tsx
│   │   ├── hooks/               # Feature-specific hooks
│   │   │   ├── useLogin.ts
│   │   │   └── useRegister.ts
│   │   ├── api/                 # Feature-specific API calls
│   │   │   └── authApi.ts
│   │   ├── types.ts             # Feature types
│   │   ├── schemas.ts           # Zod schemas
│   │   ├── constants.ts         # Feature constants
│   │   └── index.ts             # Public API (barrel export)
│   │
│   ├── dashboard/               # Dashboard feature
│   │   ├── components/
│   │   │   ├── StatsOverview.tsx
│   │   │   ├── ContinueLearning.tsx
│   │   │   └── RecentActivity.tsx
│   │   ├── hooks/
│   │   ├── api/
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── courses/                 # Courses feature
│   │   ├── components/
│   │   │   ├── CourseCard.tsx
│   │   │   ├── CourseGrid.tsx
│   │   │   ├── CourseFilters.tsx
│   │   │   ├── CourseDetail.tsx
│   │   │   └── Curriculum.tsx
│   │   ├── hooks/
│   │   │   ├── useCourses.ts
│   │   │   ├── useCourse.ts
│   │   │   └── useEnroll.ts
│   │   ├── api/
│   │   │   └── courseApi.ts
│   │   ├── types.ts
│   │   ├── schemas.ts
│   │   └── index.ts
│   │
│   ├── learning/                # Learning feature
│   │   ├── components/
│   │   │   ├── VideoPlayer.tsx
│   │   │   ├── CourseSidebar.tsx
│   │   │   ├── LessonContent.tsx
│   │   │   ├── NotePanel.tsx
│   │   │   └── ProgressIndicator.tsx
│   │   ├── hooks/
│   │   │   ├── useLesson.ts
│   │   │   ├── useProgress.ts
│   │   │   └── useNote.ts
│   │   ├── api/
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── quiz/                    # Quiz feature
│   │   ├── components/
│   │   │   ├── QuizPlayer.tsx
│   │   │   ├── QuestionCard.tsx
│   │   │   ├── QuizTimer.tsx
│   │   │   └── QuizResult.tsx
│   │   ├── hooks/
│   │   ├── api/
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── ai-tutor/                # AI Tutor feature
│   │   ├── components/
│   │   │   ├── ChatWindow.tsx
│   │   │   ├── ChatMessage.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   └── SuggestionChips.tsx
│   │   ├── hooks/
│   │   │   └── useChat.ts
│   │   ├── api/
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   └── profile/                 # Profile feature
│       ├── components/
│       ├── hooks/
│       ├── api/
│       ├── types.ts
│       └── index.ts
│
├── pages/                       # PAGE components (route-level)
│   ├── public/                  # Public pages
│   │   ├── LandingPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── auth/
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── ForgotPasswordPage.tsx
│   ├── app/                     # Protected pages
│   │   ├── DashboardPage.tsx
│   │   ├── CoursesPage.tsx
│   │   ├── CourseDetailPage.tsx
│   │   ├── LearningPage.tsx
│   │   ├── QuizPage.tsx
│   │   ├── ProfilePage.tsx
│   │   └── AITutorPage.tsx
│   ├── admin/                   # Admin pages
│   │   ├── AdminDashboard.tsx
│   │   ├── ManageCourses.tsx
│   │   ├── ManageUsers.tsx
│   │   └── Analytics.tsx
│   └── index.ts
│
├── hooks/                       # GLOBAL custom hooks
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   ├── useMediaQuery.ts
│   ├── useClickOutside.ts
│   └── index.ts
│
├── lib/                         # UTILITIES
│   ├── utils.ts                 # General utilities (cn, etc.)
│   ├── constants.ts             # App-wide constants
│   ├── validations.ts           # Shared validation functions
│   └── api.ts                   # Axios instance
│
├── services/                    # BASE services (chỉ config)
│   └── api.ts                   # Axios instance + interceptors
│
├── stores/                      # GLOBAL state (Zustand)
│   ├── auth.store.ts
│   ├── ui.store.ts
│   └── index.ts
│
├── types/                       # GLOBAL types
│   ├── api.types.ts
│   ├── user.types.ts
│   ├── course.types.ts
│   └── index.ts
│
├── test/                        # Test utilities
│   ├── setup.ts
│   ├── mocks/
│   │   ├── handlers.ts
│   │   ├── browser.ts
│   │   ├── server.ts
│   │   └── data/
│   └── utils.tsx
│
├── assets/                      # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── styles/                      # Global styles
│   └── globals.css
│
├── main.tsx                     # Entry point
└── vite-env.d.ts
```

---

## 2. NAMING CONVENTIONS

### 2.1 Files

| Loại | Convention | Ví dụ |
|------|------------|-------|
| Component | PascalCase.tsx | `CourseCard.tsx` |
| Hook | camelCase.ts | `useCourse.ts` |
| API | camelCase.ts | `courseApi.ts` |
| Type | camelCase.types.ts hoặc types.ts | `course.types.ts` |
| Store | camelCase.store.ts | `auth.store.ts` |
| Test | *.test.tsx hoặc *.spec.ts | `CourseCard.test.tsx` |
| Constant | camelCase.ts hoặc constants.ts | `constants.ts` |
| Schema | schemas.ts | `schemas.ts` |
| Barrel | index.ts | `index.ts` |

### 2.2 Components

```tsx
// ✅ Good - Named export
export function CourseCard({ course }: CourseCardProps) {
  return <Card>...</Card>
}

// ❌ Bad - Default export (trừ pages)
export default CourseCard

// ❌ Bad - Arrow function
const CourseCard = ({ course }: CourseCardProps) => {...}
export default CourseCard
```

### 2.3 Folders

| Loại | Convention | Ví dụ |
|------|------------|-------|
| Feature | kebab-case | `ai-tutor/` |
| Component | lowercase | `components/` |
| Page group | lowercase | `auth/`, `admin/` |

### 2.4 Variables & Functions

```tsx
// Variables - camelCase
const courseList = []
const isLoading = true
const hasError = false

// Functions - camelCase
function fetchCourses() {}
const handleSubmit = () => {}

// Boolean prefix
const isOpen = false
const canEdit = true
const shouldRender = true
const hasPermission = false

// Event handlers
const handleClick = () => {}
const handleSubmit = () => {}
const handleInputChange = () => {}

// Props
interface ButtonProps {
  onClick?: () => void    // Event
  isLoading?: boolean     // Boolean
  children: ReactNode     // React
}
```

---

## 3. IMPORT/EXPORT RULES

### 3.1 Barrel Exports (index.ts)

```tsx
// features/courses/index.ts
// ✅ Good - Export public API
export { CourseCard, CourseGrid } from './components'
export { useCourses, useCourse, useEnroll } from './hooks'
export { courseApi } from './api'
export type { Course, Module, Lesson } from './types'
```

### 3.2 Import Order

```tsx
// 1. React & External libraries
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'

// 2. Internal - alias imports (theo thứ tự: components → hooks → lib → types)
import { Button, Card } from '@/components/ui'
import { useAuth } from '@/stores'
import { cn } from '@/lib/utils'
import type { Course } from '@/types'

// 3. Feature imports (relative)
import { CourseCard } from './components/CourseCard'
import { useCourse } from './hooks/useCourse'

// 4. Types (cuối cùng)
import type { PropsWithChildren } from 'react'
```

### 3.3 Import Rules

```tsx
// ✅ Good - Barrel import
import { Button, Card, Input } from '@/components/ui'

// ❌ Bad - Multiple imports from same location
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

// ✅ Good - Type import separate
import { Course } from '@/features/courses'
import type { CourseProgress } from '@/features/courses'

// ❌ Bad - Mixed import
import { Course, type CourseProgress } from '@/features/courses'
```

---

## 4. COMPONENT STRUCTURE

### 4.1 Component Template

```tsx
// features/courses/components/CourseCard.tsx
import { Link } from 'react-router'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import type { Course } from '../types'

// ============================================
// Types
// ============================================
interface CourseCardProps {
  course: Course
  variant?: 'default' | 'compact'
  showProgress?: boolean
  className?: string
}

// ============================================
// Component
// ============================================
export function CourseCard({
  course,
  variant = 'default',
  showProgress = false,
  className,
}: CourseCardProps) {
  // Hooks
  const { t } = useTranslation()

  // Derived state
  const progressPercent = course.progress ? Math.round(course.progress) : 0

  // Early returns
  if (!course) return null

  // Render
  return (
    <Card className={cn('overflow-hidden', className)}>
      <img
        src={course.thumbnail}
        alt={course.title}
        className="h-48 w-full object-cover"
      />

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">
          {course.title}
        </h3>
        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
          {course.description}
        </p>

        {showProgress && (
          <Progress value={progressPercent} className="mt-3" />
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link to={`/courses/${course.id}`}>
            {showProgress ? 'Continue' : 'Enroll'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
```

### 4.2 Hook Template

```tsx
// features/courses/hooks/useCourse.ts
import { useQuery } from '@tanstack/react-query'
import { courseApi } from '../api/courseApi'

interface UseCourseOptions {
  courseId: string
  enabled?: boolean
}

export function useCourse({ courseId, enabled = true }: UseCourseOptions) {
  return useQuery({
    queryKey: ['course', courseId],
    queryFn: () => courseApi.getById(courseId),
    enabled: enabled && !!courseId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
```

### 4.3 API Service Template

```tsx
// features/courses/api/courseApi.ts
import api from '@/services/api'
import type { Course, CourseProgress } from '../types'

export const courseApi = {
  getAll: (params?: CourseQueryParams) =>
    api.get<Course[]>('/courses', { params }),

  getById: (id: string) =>
    api.get<Course>(`/courses/${id}`),

  enroll: (id: string) =>
    api.post<void>(`/courses/${id}/enroll`),

  getProgress: (id: string) =>
    api.get<CourseProgress>(`/courses/${id}/progress`),
}
```

---

## 5. CODE ORGANIZATION RULES

### 5.1 Single Responsibility

```tsx
// ❌ Bad - Component làm quá nhiều việc
export function CoursePage() {
  // Fetching logic
  // Business logic
  // UI rendering
  // Form handling
}

// ✅ Good - Tách riêng
// CoursePage.tsx - Chỉ orchestrate
// CourseContent.tsx - UI rendering
// useCourseData.ts - Data fetching
// useCourseForm.ts - Form handling
```

### 5.2 Feature Isolation

```tsx
// ✅ Good - Feature tự chứa
// features/courses/
//   - components/    → Chỉ dùng trong courses
//   - hooks/         → Chỉ dùng trong courses
//   - api/           → Chỉ courses API
//   - types.ts       → Chỉ courses types

// ❌ Bad - Cross-feature dependencies
// features/courses/hooks/useAuth.ts  → Sai chỗ!
```

### 5.3 Shared vs Feature

```
components/          → Dùng ở 3+ nơi
features/*/components/ → Dùng trong 1-2 nơi

Ví dụ:
- Button → components/ui/ (dùng mọi nơi)
- CourseCard → features/courses/components/ (chỉ courses dùng)
- Navbar → components/layout/ (dùng mọi nơi)
- CourseSidebar → features/learning/components/ (chỉ learning dùng)
```

---

## 6. STATE MANAGEMENT RULES

### 6.1 State Location

| State Type | Location | Tool |
|------------|----------|------|
| Server state | React Query | Query/Mutation |
| Global UI state | stores/ | Zustand |
| Auth state | stores/auth.store.ts | Zustand (persist) |
| Feature state | Feature hooks | useState/useReducer |
| Form state | Form component | React Hook Form |

### 6.2 When to Use What

```tsx
// ✅ Server state → React Query
const { data: courses } = useQuery(['courses'], fetchCourses)

// ✅ Global UI state → Zustand
const { sidebarOpen, toggleSidebar } = useUIStore()

// ✅ Auth state → Zustand (persisted)
const { user, isAuthenticated } = useAuthStore()

// ✅ Local component state → useState
const [isOpen, setIsOpen] = useState(false)

// ✅ Form state → React Hook Form
const { register, handleSubmit } = useForm()
```

---

## 7. TYPESCRIPT RULES

### 7.1 Type Definitions

```tsx
// ✅ Good - Interface cho objects
interface Course {
  id: string
  title: string
  description: string
}

// ✅ Good - Type cho unions, primitives
type Status = 'pending' | 'active' | 'completed'
type CourseId = string

// ✅ Good - Props interface
interface CourseCardProps {
  course: Course
  variant?: 'default' | 'compact'
}

// ❌ Bad - Type cho object shapes
type Course = {
  id: string
  title: string
}
```

### 7.2 Strict Typing

```tsx
// ✅ Good - Explicit return type
function useCourse(id: string): UseCourseReturn {
  // ...
}

// ✅ Good - Generic constraints
function getItems<T extends { id: string }>(items: T[]): T[] {
  return items
}

// ❌ Bad - any type (đã bị cấm trong tsconfig)
function process(data: any) {
  // ...
}
```

---

## 8. TESTING RULES

### 8.1 Test File Location

```
src/
├── components/
│   └── ui/
│       └── button.test.tsx    → Same folder
├── features/
│   └── courses/
│       ├── components/
│       │   └── CourseCard.test.tsx
│       └── hooks/
│           └── useCourse.test.ts
└── e2e/
    └── app.spec.ts            → E2E tests
```

### 8.2 Test Structure

```tsx
describe('CourseCard', () => {
  // Setup
  const mockCourse: Course = { ... }

  // Render tests
  it('renders course title', () => {
    render(<CourseCard course={mockCourse} />)
    expect(screen.getByText(mockCourse.title)).toBeInTheDocument()
  })

  // Interaction tests
  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    render(<CourseCard course={mockCourse} onClick={handleClick} />)

    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })

  // Edge cases
  it('handles missing thumbnail', () => {
    render(<CourseCard course={{ ...mockCourse, thumbnail: null }} />)
    // ...
  })
})
```

---

## 9. FOLDER DECISION MATRIX

```
Question: Component/hook/type này nên đặt ở đâu?

1. Dùng ở bao nhiêu features?
   - 1 feature → features/[feature]/
   - 2 features → features/[main-feature]/ + import
   - 3+ features → components/ hoặc hooks/ hoặc types/

2. Là gì?
   - Page → pages/
   - Layout → components/layout/
   - UI component → components/ui/
   - Feature component → features/[feature]/components/
   - Hook → hooks/ (global) hoặc features/[feature]/hooks/ (local)
   - API call → services/ (base) hoặc features/[feature]/api/
   - Type → types/ (global) hoặc features/[feature]/types.ts (local)
   - Store → stores/
   - Util → lib/
```

---

## 10. CHECKLIST TRƯỚC KHI COMMIT

```markdown
- [ ] File đặt đúng vị trí theo cấu trúc
- [ ] Named export (không default export trừ pages)
- [ ] Types được định nghĩa rõ ràng
- [ ] Không có any type
- [ ] Import từ barrel (index.ts) khi có thể
- [ ] Component cóProps interface
- [ ] Test file cùng thư mục
- [ ] ESLint và Prettier pass
```
