# AI TUTOR - Component Architecture

## Component Organization

### 1. Feature-based Structure (FSD Pattern)

```
src/features/[feature]/
├── components/        # Feature-specific components
│   ├── [Component].tsx
│   └── [Component].test.tsx
├── hooks/            # Feature-specific hooks
├── api/              # API calls
├── types.ts          # TypeScript types
└── index.ts          # Public exports
```

### 2. Component Types

| Type | Description | Example |
|------|-------------|---------|
| **Page** | Route-level components | `LoginPage`, `CoursePage` |
| **Layout** | Page wrappers | `MainLayout`, `AuthLayout` |
| **Feature** | Feature-specific | `CourseCard`, `QuizPlayer` |
| **UI** | Reusable primitives | `Button`, `Input`, `Card` |
| **Common** | Shared across features | `Navbar`, `Sidebar`, `Footer` |

## Component Template

### Page Component
```tsx
// pages/CoursePage.tsx
import { useParams } from 'react-router'
import { useCourse } from '@/features/courses'
import { PageLoader, ErrorMessage } from '@/components/common'
import { CourseHeader, CourseContent } from '@/features/courses/components'

export function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>()
  const { data: course, isLoading, error } = useCourse(courseId)

  if (isLoading) return <PageLoader />
  if (error) return <ErrorMessage error={error} />
  if (!course) return null

  return (
    <div className='container py-6'>
      <CourseHeader course={course} />
      <CourseContent course={course} />
    </div>
  )
}
```

### Feature Component
```tsx
// features/courses/components/CourseCard.tsx
import { Link } from 'react-router'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import type { Course } from '@/features/courses/types'

interface CourseCardProps {
  course: Course
  showProgress?: boolean
}

export function CourseCard({ course, showProgress = false }: CourseCardProps) {
  return (
    <Card className='overflow-hidden'>
      <img src={course.thumbnail} alt={course.title} className='h-48 w-full object-cover' />
      <CardContent className='p-4'>
        <h3 className='font-semibold text-lg'>{course.title}</h3>
        <p className='text-muted-foreground text-sm mt-1 line-clamp-2'>
          {course.description}
        </p>
        {showProgress && (
          <Progress value={course.progress} className='mt-3' />
        )}
      </CardContent>
      <CardFooter className='p-4 pt-0'>
        <Button asChild className='w-full'>
          <Link to={`/courses/${course.id}`}>
            {showProgress ? 'Continue' : 'Enroll Now'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
```

## Naming Conventions

### Files
- Components: `PascalCase.tsx` (e.g., `CourseCard.tsx`)
- Hooks: `camelCase.ts` (e.g., `useCourse.ts`)
- Types: `types.ts` (feature level) or `PascalCase.types.ts`
- Tests: `Component.test.tsx` hoặc `hook.test.ts`

### Components
```tsx
// ✅ Good
export function CourseCard() {}
export function useCourse() {}
export type Course = {}

// ❌ Bad
export default CourseCard
export const CourseCard = () => {}
```

## Props Guidelines

### 1. Use TypeScript interfaces
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}
```

### 2. Destructure props with defaults
```tsx
export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
}: ButtonProps) {
  // ...
}
```

### 3. Use children for composition
```tsx
// ✅ Good - composable
<Card>
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
</Card>

// ❌ Bad - rigid
<Card title="Title" content="Content" />
```

## State Management

### Local State
- Use for UI-only state (modals, forms, toggles)
```tsx
const [isOpen, setIsOpen] = useState(false)
```

### Server State
- Use React Query for API data
```tsx
const { data, isLoading } = useQuery({
  queryKey: ['course', courseId],
  queryFn: () => fetchCourse(courseId)
})
```

### Global State
- Use Zustand for app-wide state
```tsx
const { user, setUser } = useAuthStore()
```

## Error Handling

### Component Level
```tsx
if (error) {
  return <ErrorMessage message={error.message} />
}
```

### Error Boundary
```tsx
<ErrorBoundary fallback={<ErrorFallback />}>
  <CoursePage />
</ErrorBoundary>
```

## Testing Requirements

### Unit Tests
- Test rendering
- Test user interactions
- Test edge cases

### Integration Tests
- Test with providers
- Test routing
- Test API mocking

```tsx
describe('CourseCard', () => {
  it('renders course information', () => {
    render(<CourseCard course={mockCourse} />)
    expect(screen.getByText(mockCourse.title)).toBeInTheDocument()
  })

  it('shows enroll button for new courses', () => {
    render(<CourseCard course={mockCourse} />)
    expect(screen.getByText('Enroll Now')).toBeInTheDocument()
  })

  it('shows continue button for enrolled courses', () => {
    render(<CourseCard course={mockEnrolledCourse} showProgress />)
    expect(screen.getByText('Continue')).toBeInTheDocument()
  })
})
```
