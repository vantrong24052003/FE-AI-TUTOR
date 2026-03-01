# FE AI TUTOR - Flow Specifications Index

> Tổng hợp chi tiết API integration và state management cho từng tính năng - Document-RAG

---

## 📋 Danh Sách Specifications (v5.1)

Frontend flow-spec tập trung vào:
- **API Integration**: Service calls, React Query hooks
- **State Management**: Zustand stores (Auth, Quiz, AI Chat)
- **Data Flow**: Luồng dữ liệu giữa các components

Chi tiết UI/Components đã có trong [analyzes-fe/](../analyzes-fe/).

---

## 📁 Cấu Trúc Modules & Services

| Module | API Service | React Query Hooks | Zustand Store |
|---------|-------------|-------------------|---------------|
| **Auth** | `auth.service.ts` | `useLogin`, `useGoogleAuth` | `auth.store.ts` |
| **Documents** | `document.service.ts` | `useDocuments`, `useDocDetail`, `useUpload` | - |
| **Learning Path** | `path.service.ts` | `usePath`, `useLesson` | `learning.store.ts` |
| **Quiz & Result** | `quiz.service.ts` | `useQuiz`, `useAttempt`, `useSubmit` | `quiz.store.ts` |
| **Flashcards** | `flashcard.service.ts` | `useTodayReview`, `useDocFlashcards` | - |
| **Homework** | `homework.service.ts` | `useSolve`, `useStepByStep` | - |
| **AI Tutor** | `ai.service.ts` | `useChatSessions`, `useAskQuestion` | `chat.store.ts` |
| **Notes** | `note.service.ts` | `useNotes`, `useDocNotes` | - |
| **Bookmarks** | `bookmark.service.ts` | `useBookmarks`, `useCheckStatus` | - |
| **Stats/Profile** | `user.service.ts` | `useProfileStats`, `useActivity` | - |

---

## 📚 Tham Khảo Specs FE

- [00. Tổng quan](../analyzes-fe/00-FE-OVERVIEW.md)
- [01. UI/UX Spec](../analyzes-fe/01-UI-SPECIFICATION.md)
- [02. Components](../analyzes-fe/02-COMPONENTS.md)
- [03. Routing Map](../analyzes-fe/03-ROUTING.md)
- [04. Code Architecture](../analyzes-fe/04-CODE-STRUCTURE.md)
- [05. Premium Prompts](../analyzes-fe/05-STITCH-PROMPTS.md)

---

## 🔄 API Service Pattern (v5.1)

```typescript
// services/document.service.ts
import api from './api'

export const documentService = {
  getAll: (params?) => api.get('/documents', { params }),
  getById: (id: string) => api.get(`/documents/${id}`),
  upload: (data: FormData) => api.post(`/documents`, data),
  getStatus: (id: string) => api.get(`/documents/${id}/status`),
}
```

## 🎣 React Query Pattern

```typescript
// hooks/useDocument.ts
export function useDocumentDetail(id: string) {
  return useQuery({
    queryKey: ['document', id],
    queryFn: () => documentService.getById(id),
    enabled: !!id,
  })
}
```

## 📦 Zustand State Pattern

```typescript
// stores/learning.store.ts
export const useLearningStore = create<LearningState>((set) => ({
  currentLessonId: null,
  setLesson: (id) => set({ currentLessonId: id }),
  reset: () => set({ currentLessonId: null }),
}))
```

---

*Version: 5.1 - Updated: 2026-03-01*
*Document-RAG Alignment Finalized*
