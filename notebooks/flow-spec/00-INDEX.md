# FE AI TUTOR - Flow Specifications Index

> Tổng hợp chi tiết API integration và state management cho từng tính năng

---

## 📋 Danh Sách Specifications

Frontend flow-spec tập trung vào:
- **API Integration**: Service calls, React Query hooks
- **State Management**: Zustand stores, form state
- **Data Flow**: Component data flow, event handling

Chi tiết UI/Components đã có trong [analyzes-fe/](../analyzes-fe/).

---

## 📁 Cấu Trúc

| Feature | API Service | React Query Hooks | Zustand Store |
|---------|-------------|-------------------|---------------|
| Auth | `auth.service.ts` | `useLogin`, `useRegister` | `auth.store.ts` |
| Courses | `course.service.ts` | `useCourses`, `useCourse` | - |
| Lessons | `lesson.service.ts` | `useLesson`, `useProgress` | - |
| Quiz | `quiz.service.ts` | `useQuiz`, `useAttempt` | `quiz.store.ts` |
| Flashcards | `flashcard.service.ts` | `useFlashcards`, `useReview` | - |
| Exercises | `exercise.service.ts` | `useExercises`, `useSubmit` | - |
| AI Chat | `chat.service.ts` | `useConversations` | `chat.store.ts` |
| Notes | `note.service.ts` | `useNotes` | - |
| Bookmarks | `bookmark.service.ts` | `useBookmarks` | - |
| Progress | `progress.service.ts` | `useProgress` | - |

---

## 📚 Tham Khảo

- [UI Specification](../analyzes-fe/01-UI-SPECIFICATION.md)
- [Components](../analyzes-fe/02-COMPONENTS.md)
- [Routing](../analyzes-fe/03-ROUTING.md)
- [BE Flow Specs](../../BE-AI-TUTOR/notebooks/flow-spec/)

---

## 🔄 API Service Pattern

```typescript
// services/course.service.ts
import api from './api'

export const courseService = {
  getAll: (params?) => api.get('/courses', { params }),
  getById: (id) => api.get(`/courses/${id}`),
  enroll: (id) => api.post(`/courses/${id}/enroll`),
}
```

## 🎣 React Query Pattern

```typescript
// hooks/useCourse.ts
export function useCourse(id: string) {
  return useQuery({
    queryKey: ['course', id],
    queryFn: () => courseService.getById(id),
  })
}
```

## 📦 Zustand Pattern

```typescript
// stores/auth.store.ts
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}))
```

---

*Version: 1.0 - Updated: 2026-03-01*
