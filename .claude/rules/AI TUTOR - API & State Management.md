# AI TUTOR - API & State Management

## API Architecture

### Service Layer Pattern

```
src/services/
├── api.ts              # Axios instance & interceptors
├── auth.service.ts     # Auth endpoints
├── course.service.ts   # Course endpoints
├── user.service.ts     # User endpoints
├── quiz.service.ts     # Quiz endpoints
└── ai.service.ts       # AI Tutor endpoints
```

### API Instance Setup
```tsx
// services/api.ts
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor - add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor - handle errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expired - try refresh
      // If refresh fails, redirect to login
    }
    return Promise.reject(error)
  }
)

export default api
```

### Service Template
```tsx
// services/course.service.ts
import api from './api'
import type { Course, CourseProgress } from '@/types'

export const courseService = {
  getAll: () => api.get<Course[]>('/courses'),

  getById: (id: string) => api.get<Course>(`/courses/${id}`),

  enroll: (id: string) => api.post(`/courses/${id}/enroll`),

  getProgress: (id: string) => api.get<CourseProgress>(`/courses/${id}/progress`),

  getLessons: (courseId: string) => api.get<Lesson[]>(`/courses/${courseId}/lessons`),
}
```

## React Query Setup

### Query Client
```tsx
// lib/query-client.ts
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000,   // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})
```

### Custom Hooks Pattern
```tsx
// features/courses/hooks/useCourse.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { courseService } from '@/services/course.service'

export function useCourse(courseId: string) {
  return useQuery({
    queryKey: ['course', courseId],
    queryFn: () => courseService.getById(courseId),
    enabled: !!courseId,
  })
}

export function useCourses() {
  return useQuery({
    queryKey: ['courses'],
    queryFn: courseService.getAll,
  })
}

export function useEnrollCourse() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (courseId: string) => courseService.enroll(courseId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] })
    },
  })
}
```

## State Management (Zustand)

### Store Structure
```
src/stores/
├── auth.store.ts       # Auth state
├── ui.store.ts         # UI state (sidebar, theme)
└── course.store.ts     # Course learning state
```

### Auth Store Example
```tsx
// stores/auth.store.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@/types'

interface AuthState {
  user: User | null
  accessToken: string | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  setTokens: (accessToken: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,

      setUser: (user) =>
        set({ user, isAuthenticated: !!user }),

      setTokens: (accessToken) =>
        set({ accessToken }),

      logout: () =>
        set({ user: null, accessToken: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        accessToken: state.accessToken,
      }),
    }
  )
)
```

### UI Store Example
```tsx
// stores/ui.store.ts
import { create } from 'zustand'

interface UIState {
  sidebarOpen: boolean
  theme: 'light' | 'dark'
  toggleSidebar: () => void
  setTheme: (theme: 'light' | 'dark') => void
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  theme: 'light',

  toggleSidebar: () =>
    set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  setTheme: (theme) => set({ theme }),
}))
```

## Data Flow

```
Component → Hook → Service → API
    ↓
  Zustand (local/UI state)
    ↓
React Query (server state)
```

### When to use what?

| Data Type | Solution |
|-----------|----------|
| Server data (courses, users) | React Query |
| Auth state | Zustand (persisted) |
| UI state (sidebar, modals) | Zustand |
| Form state | React Hook Form |
| Local component state | useState |

## Error Handling

### API Error Types
```tsx
// types/api.ts
export interface APIError {
  message: string
  code: string
  status: number
}

export interface APIResponse<T> {
  data: T
  message: string
}
```

### Error Handling in Components
```tsx
function CoursePage() {
  const { data, isLoading, error } = useCourse(courseId)

  if (isLoading) return <PageLoader />
  if (error) {
    if (error.response?.status === 404) {
      return <NotFound message='Course not found' />
    }
    return <ErrorMessage error={error} />
  }

  return <CourseContent course={data} />
}
```

## MSW Setup (Mock Service Worker)

### Handlers
```tsx
// src/test/mocks/handlers.ts
import { http, HttpResponse, delay } from 'msw'
import { mockCourses, mockUser } from './data'

export const handlers = [
  // Auth
  http.post('/api/auth/login', async () => {
    await delay(500)
    return HttpResponse.json({
      user: mockUser,
      accessToken: 'mock-token',
    })
  }),

  // Courses
  http.get('/api/courses', () => {
    return HttpResponse.json(mockCourses)
  }),

  http.get('/api/courses/:id', ({ params }) => {
    const course = mockCourses.find((c) => c.id === params.id)
    if (!course) {
      return new HttpResponse(null, { status: 404 })
    }
    return HttpResponse.json(course)
  }),
]
```

### Browser Setup
```tsx
// src/test/mocks/browser.ts
import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)
```

### Enable in Development
```tsx
// src/main.tsx
async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./test/mocks/browser')
    return worker.start()
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
})
```
