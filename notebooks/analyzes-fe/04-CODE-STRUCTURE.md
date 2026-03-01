# FE AI TUTOR - Code Structure (Document-RAG Based)

> Cấu trúc code và conventions cho hệ thống Document-RAG based AI Tutor (Version 5.1)

---

## 1. FOLDER STRUCTURE

```
src/
├── app/                    # App-level
│   ├── router/            # Routing config
│   └── providers/         # Context providers
│
├── components/            # Shared components
│   ├── ui/               # shadcn/ui
│   ├── layout/           # Navbar, Sidebar, Footer
│   └── common/           # PageLoader, EmptyState, etc.
│
├── features/             # Feature modules (Document-RAG based)
│   ├── auth/             # Authentication
│   ├── documents/        # Document management (MỚI)
│   ├── flashcards/       # Spaced repetition flashcards
│   ├── quiz/             # Quiz system
│   ├── ai-tutor/         # AI Tutor chat
│   ├── notes/            # Document-based notes
│   ├── bookmarks/        # Document bookmarks
│   └── profile/          # User profile
│
├── pages/                # Page components
│   ├── public/
│   ├── auth/
│   └── app/
│
├── hooks/                # Global hooks
├── lib/                  # Utilities
├── services/             # API config
├── stores/               # Zustand stores
├── types/                # Global types
└── test/                 # Test utilities
```

---

## 2. FEATURE MODULES (Document-RAG Based)

### 2.1 Feature Structure Overview

```
src/features/
├── auth/               # Authentication (giữ nguyên)
├── documents/          # MỚI - Thay thế courses
├── flashcards/         # CẬP NHẬT - Spaced repetition
├── quiz/               # CẬP NHẬT - Document-based quiz
├── ai-tutor/           # GIỮ NGUYÊN - AI chat
├── notes/              # CẬP NHẬT - Document-based notes
├── bookmarks/          # CẬP NHẬT - Document bookmarks
└── profile/            # GIỮ NGUYÊN - User profile
```

### 2.2 Documents Feature (MỚI)

```
features/documents/
├── components/
│   ├── DocumentCard.tsx           # Card hiển thị document
│   ├── DocumentGrid.tsx           # Grid layout cho documents
│   ├── DocumentUploader.tsx       # Upload component (drag & drop)
│   ├── DocumentDetail.tsx         # Chi tiết document
│   ├── DocumentViewer.tsx         # PDF/Content viewer
│   ├── DocumentFilters.tsx        # Filter & search
│   └── DocumentSummary.tsx        # AI-generated summary
│
├── hooks/
│   ├── useDocuments.ts            # Fetch documents list
│   ├── useDocument.ts             # Fetch single document
│   ├── useUploadDocument.ts       # Upload mutation
│   ├── useDeleteDocument.ts       # Delete mutation
│   └── useDocumentSummary.ts      # AI summary generation
│
├── api/
│   └── documentApi.ts             # Document API endpoints
│
├── types.ts                       # Document types
├── schemas.ts                     # Zod validation schemas
├── constants.ts                   # File types, size limits
└── index.ts                       # Barrel export
```

#### Document Types

```typescript
// features/documents/types.ts

export type DocumentStatus = 'processing' | 'ready' | 'error'
export type DocumentType = 'pdf' | 'docx' | 'txt' | 'md' | 'pptx'

export interface Document {
  id: string
  title: string
  description?: string
  type: DocumentType
  status: DocumentStatus
  fileSize: number
  pageCount?: number
  thumbnailUrl?: string
  fileUrl: string
  summary?: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface DocumentUploadInput {
  file: File
  title?: string
  description?: string
  tags?: string[]
}

export interface DocumentQueryParams {
  search?: string
  type?: DocumentType
  status?: DocumentStatus
  tags?: string[]
  page?: number
  limit?: number
  sortBy?: 'createdAt' | 'title' | 'fileSize'
  sortOrder?: 'asc' | 'desc'
}
```

#### Document API

```typescript
// features/documents/api/documentApi.ts

import api from '@/services/api'
import type { Document, DocumentUploadInput, DocumentQueryParams } from '../types'

export const documentApi = {
  getAll: (params?: DocumentQueryParams) =>
    api.get<{ documents: Document[]; total: number }>('/documents', { params }),

  getById: (id: string) =>
    api.get<Document>(`/documents/${id}`),

  upload: (data: DocumentUploadInput) => {
    const formData = new FormData()
    formData.append('file', data.file)
    if (data.title) formData.append('title', data.title)
    if (data.description) formData.append('description', data.description)
    if (data.tags) formData.append('tags', JSON.stringify(data.tags))

    return api.post<Document>('/documents', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },

  delete: (id: string) =>
    api.delete<void>(`/documents/${id}`),

  generateSummary: (id: string) =>
    api.post<{ summary: string }>(`/documents/${id}/summary`),
}
```

#### Document Hooks

```typescript
// features/documents/hooks/useDocuments.ts

import { useQuery } from '@tanstack/react-query'
import { documentApi } from '../api/documentApi'
import type { DocumentQueryParams } from '../types'

export function useDocuments(params?: DocumentQueryParams) {
  return useQuery({
    queryKey: ['documents', params],
    queryFn: () => documentApi.getAll(params),
    staleTime: 2 * 60 * 1000, // 2 minutes
  })
}

// features/documents/hooks/useDocument.ts

export function useDocument(documentId: string, enabled = true) {
  return useQuery({
    queryKey: ['document', documentId],
    queryFn: () => documentApi.getById(documentId),
    enabled: enabled && !!documentId,
  })
}

// features/documents/hooks/useUploadDocument.ts

export function useUploadDocument() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: documentApi.upload,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] })
      toast.success('Document uploaded successfully!')
    },
    onError: (error) => {
      toast.error(getErrorMessage(error))
    },
  })
}
```

#### Document Components

```tsx
// features/documents/components/DocumentCard.tsx

import { Link } from 'react-router'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FileText, Clock, Tag } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Document } from '../types'

interface DocumentCardProps {
  document: Document
  variant?: 'default' | 'compact'
  className?: string
}

export function DocumentCard({
  document,
  variant = 'default',
  className,
}: DocumentCardProps) {
  const statusColor = {
    processing: 'bg-yellow-500/20 text-yellow-400',
    ready: 'bg-green-500/20 text-green-400',
    error: 'bg-red-500/20 text-red-400',
  }

  return (
    <Card className={cn('overflow-hidden hover:border-violet-500/50 transition-all', className)}>
      {document.thumbnailUrl && (
        <img
          src={document.thumbnailUrl}
          alt={document.title}
          className="h-40 w-full object-cover"
        />
      )}

      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="h-4 w-4 text-muted-foreground" />
          <Badge variant="secondary" className={statusColor[document.status]}>
            {document.status}
          </Badge>
        </div>

        <h3 className="font-semibold text-lg line-clamp-1">
          {document.title}
        </h3>

        {document.description && (
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
            {document.description}
          </p>
        )}

        {variant === 'default' && document.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {document.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link to={`/documents/${document.id}`}>
            View Document
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
```

### 2.3 Flashcards Feature (CẬP NHẬT)

```
features/flashcards/
├── components/
│   ├── FlashcardPlayer.tsx        # Main player với spaced repetition
│   ├── FlashcardCard.tsx          # Card flip animation
│   ├── FlashcardRating.tsx        # Rating buttons (Again/Hard/Good/Easy)
│   ├── FlashcardProgress.tsx      # Progress indicator
│   ├── FlashcardDeck.tsx          # Deck display
│   └── FlashcardGenerator.tsx     # AI-generated from document
│
├── hooks/
│   ├── useFlashcards.ts           # Fetch flashcards
│   ├── useDueFlashcards.ts        # Fetch due cards (spaced repetition)
│   ├── useReviewFlashcard.ts      # Submit review mutation
│   ├── useGenerateFlashcards.ts   # AI generate from document
│   └── useFlashcardStats.ts       # Learning statistics
│
├── api/
│   └── flashcardApi.ts
│
├── utils/
│   └── spacedRepetition.ts        # SM-2 algorithm
│
├── types.ts
└── index.ts
```

#### Flashcard Types

```typescript
// features/flashcards/types.ts

export type Rating = 'again' | 'hard' | 'good' | 'easy'

export interface Flashcard {
  id: string
  documentId: string
  front: string
  back: string
  deckId: string

  // Spaced repetition fields
  dueDate: string
  interval: number      // Days until next review
  easeFactor: number    // Difficulty multiplier
  repetitions: number   // Consecutive successful reviews

  createdAt: string
  updatedAt: string
}

export interface FlashcardDeck {
  id: string
  documentId: string
  name: string
  description?: string
  cardCount: number
  dueCount: number
  createdAt: string
}

export interface ReviewInput {
  flashcardId: string
  rating: Rating
}

export interface FlashcardStats {
  totalCards: number
  dueCards: number
  newCards: number
  learnedCards: number
  averageEase: number
}
```

#### Spaced Repetition Algorithm

```typescript
// features/flashcards/utils/spacedRepetition.ts

import type { Flashcard, Rating } from '../types'

interface ReviewResult {
  interval: number
  easeFactor: number
  repetitions: number
  dueDate: Date
}

/**
 * SM-2 Algorithm (SuperMemo 2)
 * Reference: https://www.supermemo.com/en/archives1990-2015/english/ol/sm2
 */
export function calculateNextReview(
  card: Pick<Flashcard, 'interval' | 'easeFactor' | 'repetitions'>,
  rating: Rating
): ReviewResult {
  let { interval, easeFactor, repetitions } = card

  // Quality mapping (0-5 scale for SM-2)
  const qualityMap: Record<Rating, number> = {
    again: 0,
    hard: 3,
    good: 4,
    easy: 5,
  }

  const quality = qualityMap[rating]

  if (quality < 3) {
    // Failed - reset repetitions
    repetitions = 0
    interval = 1
  } else {
    // Success - increase interval
    repetitions += 1

    if (repetitions === 1) {
      interval = 1
    } else if (repetitions === 2) {
      interval = 6
    } else {
      interval = Math.round(interval * easeFactor)
    }
  }

  // Update ease factor
  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  )

  // Calculate next due date
  const dueDate = new Date()
  dueDate.setDate(dueDate.getDate() + interval)

  return { interval, easeFactor, repetitions, dueDate }
}
```

#### Flashcard Player Component

```tsx
// features/flashcards/components/FlashcardPlayer.tsx

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FlashcardCard } from './FlashcardCard'
import { FlashcardRating } from './FlashcardRating'
import { FlashcardProgress } from './FlashcardProgress'
import { useDueFlashcards } from '../hooks/useDueFlashcards'
import { useReviewFlashcard } from '../hooks/useReviewFlashcard'

interface FlashcardPlayerProps {
  deckId: string
  onComplete?: () => void
}

export function FlashcardPlayer({ deckId, onComplete }: FlashcardPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const { data: flashcards, isLoading } = useDueFlashcards(deckId)
  const reviewMutation = useReviewFlashcard()

  if (isLoading) return <FlashcardSkeleton />
  if (!flashcards || flashcards.length === 0) {
    return <EmptyState message="No cards due for review!" />
  }

  const currentCard = flashcards[currentIndex]
  const isLastCard = currentIndex === flashcards.length - 1

  const handleRate = (rating: Rating) => {
    reviewMutation.mutate({
      flashcardId: currentCard.id,
      rating,
    })

    setIsFlipped(false)

    if (isLastCard) {
      onComplete?.()
    } else {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <FlashcardProgress
        current={currentIndex + 1}
        total={flashcards.length}
      />

      <AnimatePresence mode="wait">
        <FlashcardCard
          key={currentCard.id}
          flashcard={currentCard}
          isFlipped={isFlipped}
          onFlip={() => setIsFlipped(!isFlipped)}
        />
      </AnimatePresence>

      {isFlipped && (
        <FlashcardRating
          onRate={handleRate}
          isSubmitting={reviewMutation.isPending}
        />
      )}
    </div>
  )
}
```

### 2.4 Quiz Feature (CẬP NHẬT)

```
features/quiz/
├── components/
│   ├── QuizPlayer.tsx             # Main quiz interface
│   ├── QuestionCard.tsx           # Question display
│   ├── QuizResult.tsx             # Results summary
│   ├── QuizTimer.tsx              # Timer component
│   ├── QuizProgress.tsx           # Progress bar
│   ├── QuizGenerator.tsx          # AI generate from document
│   └── QuizHistory.tsx            # Past quiz attempts
│
├── hooks/
│   ├── useQuiz.ts                 # Fetch quiz
│   ├── useSubmitQuiz.ts           # Submit answers
│   ├── useQuizHistory.ts          # Fetch history
│   └── useGenerateQuiz.ts         # AI generate quiz
│
├── api/
│   └── quizApi.ts
│
├── types.ts
└── index.ts
```

#### Quiz Types

```typescript
// features/quiz/types.ts

export type QuestionType = 'multiple_choice' | 'true_false' | 'short_answer'

export interface Quiz {
  id: string
  documentId: string
  title: string
  description?: string
  questions: Question[]
  timeLimit?: number  // seconds, optional
  passingScore: number
  createdAt: string
}

export interface Question {
  id: string
  type: QuestionType
  question: string
  options?: string[]      // For multiple choice
  correctAnswer: string
  explanation?: string
  points: number
}

export interface QuizAttempt {
  id: string
  quizId: string
  score: number
  totalPoints: number
  percentage: number
  passed: boolean
  answers: AnswerResult[]
  completedAt: string
}

export interface AnswerInput {
  questionId: string
  answer: string
}

export interface AnswerResult {
  questionId: string
  userAnswer: string
  correctAnswer: string
  isCorrect: boolean
  explanation?: string
}
```

### 2.5 AI Tutor Feature (GIỮ NGUYÊN)

```
features/ai-tutor/
├── components/
│   ├── ChatWindow.tsx             # Main chat interface
│   ├── ChatMessage.tsx            # Message bubble
│   ├── ChatInput.tsx              # Input with suggestions
│   ├── SuggestionChips.tsx        # Quick suggestion buttons
│   ├── DocumentContext.tsx        # Show active document context
│   └── SourceReferences.tsx       # RAG source citations
│
├── hooks/
│   ├── useChat.ts                 # Chat messages
│   ├── useSendMessage.ts          # Send message mutation
│   └── useChatHistory.ts          # Fetch history
│
├── api/
│   └── aiTutorApi.ts
│
├── types.ts
└── index.ts
```

### 2.6 Notes Feature (CẬP NHẬT)

```
features/notes/
├── components/
│   ├── NoteEditor.tsx             # Rich text editor
│   ├── NoteCard.tsx               # Note preview card
│   ├── NoteList.tsx               # Notes list
│   ├── NoteDetail.tsx             # Full note view
│   └── DocumentNotes.tsx          # Notes for a document
│
├── hooks/
│   ├── useNotes.ts                # Fetch notes (document-scoped)
│   ├── useNote.ts                 # Single note
│   ├── useCreateNote.ts           # Create mutation
│   ├── useUpdateNote.ts           # Update mutation
│   └── useDeleteNote.ts           # Delete mutation
│
├── api/
│   └── noteApi.ts
│
├── types.ts
└── index.ts
```

#### Notes Types

```typescript
// features/notes/types.ts

export interface Note {
  id: string
  documentId: string
  title: string
  content: string      // Rich text (HTML or Markdown)
  highlights?: Highlight[]
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface Highlight {
  id: string
  text: string
  startOffset: number
  endOffset: number
  color: string
  note?: string
}

export interface NoteInput {
  documentId: string
  title: string
  content: string
  tags?: string[]
}

export interface NoteQueryParams {
  documentId?: string
  search?: string
  tags?: string[]
  page?: number
  limit?: number
}
```

### 2.7 Bookmarks Feature (CẬP NHẬT)

```
features/bookmarks/
├── components/
│   ├── BookmarkButton.tsx         # Toggle bookmark
│   ├── BookmarkList.tsx           # List of bookmarks
│   └── BookmarkCard.tsx           # Bookmark preview
│
├── hooks/
│   ├── useBookmarks.ts            # Fetch bookmarks
│   ├── useAddBookmark.ts          # Add mutation
│   └── useRemoveBookmark.ts       # Remove mutation
│
├── api/
│   └── bookmarkApi.ts
│
├── types.ts
└── index.ts
```

---

## 3. GLOBAL TYPES (Updated)

```typescript
// types/index.ts

// Document types (replacing Course types)
export * from './document.types'

// Auth types
export * from './auth.types'

// User types
export * from './user.types'

// API types
export * from './api.types'
```

```typescript
// types/document.types.ts

export type DocumentStatus = 'processing' | 'ready' | 'error'
export type DocumentType = 'pdf' | 'docx' | 'txt' | 'md' | 'pptx'

export interface Document {
  id: string
  title: string
  description?: string
  type: DocumentType
  status: DocumentStatus
  fileSize: number
  pageCount?: number
  thumbnailUrl?: string
  fileUrl: string
  summary?: string
  tags: string[]
  createdAt: string
  updatedAt: string
  userId: string
}

export interface DocumentSummary {
  id: string
  documentId: string
  summary: string
  keyPoints: string[]
  generatedAt: string
}
```

---

## 4. STORES (Document-Based)

```typescript
// stores/document.store.ts

import { create } from 'zustand'

interface DocumentState {
  selectedDocumentId: string | null
  recentDocuments: string[]
  setSelectedDocument: (id: string | null) => void
  addRecentDocument: (id: string) => void
}

export const useDocumentStore = create<DocumentState>((set) => ({
  selectedDocumentId: null,
  recentDocuments: [],

  setSelectedDocument: (id) =>
    set({ selectedDocumentId: id }),

  addRecentDocument: (id) =>
    set((state) => ({
      recentDocuments: [
        id,
        ...state.recentDocuments.filter((d) => d !== id),
      ].slice(0, 10),
    })),
}))
```

```typescript
// stores/learning.store.ts

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LearningState {
  currentDeckId: string | null
  studySessionActive: boolean
  cardsReviewedToday: number
  startStudySession: (deckId: string) => void
  endStudySession: () => void
  incrementCardsReviewed: () => void
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      currentDeckId: null,
      studySessionActive: false,
      cardsReviewedToday: 0,

      startStudySession: (deckId) =>
        set({ currentDeckId: deckId, studySessionActive: true }),

      endStudySession: () =>
        set({ studySessionActive: false }),

      incrementCardsReviewed: () =>
        set((state) => ({
          cardsReviewedToday: state.cardsReviewedToday + 1,
        })),
    }),
    {
      name: 'learning-storage',
      partialize: (state) => ({
        cardsReviewedToday: state.cardsReviewedToday,
      }),
    }
  )
)
```

---

## 5. API ENDPOINTS (Document-RAG Based)

```
AUTH
├── POST   /api/auth/login
├── POST   /api/auth/register
├── POST   /api/auth/logout
├── POST   /api/auth/refresh
└── POST   /api/auth/forgot-password

DOCUMENTS
├── GET    /api/documents
├── POST   /api/documents
├── GET    /api/documents/:id
├── PUT    /api/documents/:id
├── DELETE /api/documents/:id
├── POST   /api/documents/:id/summary
└── GET    /api/documents/:id/content

FLASHCARDS
├── GET    /api/documents/:documentId/flashcards
├── POST   /api/documents/:documentId/flashcards/generate
├── GET    /api/flashcards/decks
├── GET    /api/flashcards/decks/:deckId/due
├── POST   /api/flashcards/:id/review
└── GET    /api/flashcards/stats

QUIZ
├── GET    /api/documents/:documentId/quizzes
├── POST   /api/documents/:documentId/quizzes/generate
├── GET    /api/quizzes/:id
├── POST   /api/quizzes/:id/submit
└── GET    /api/quizzes/:id/attempts

AI TUTOR
├── POST   /api/ai/chat
├── POST   /api/ai/chat/stream
└── GET    /api/ai/chat/history

NOTES
├── GET    /api/documents/:documentId/notes
├── POST   /api/documents/:documentId/notes
├── GET    /api/notes/:id
├── PUT    /api/notes/:id
└── DELETE /api/notes/:id

BOOKMARKS
├── GET    /api/bookmarks
├── POST   /api/bookmarks
├── DELETE /api/bookmarks/:id
└── GET    /api/documents/:documentId/bookmark

USERS
├── GET    /api/users/me
├── PUT    /api/users/me
└── GET    /api/users/me/stats
```

---

## 6. NAMING CONVENTIONS

| Loại | Convention | Ví dụ |
|------|------------|-------|
| Component file | PascalCase.tsx | `DocumentCard.tsx` |
| Hook file | camelCase.ts | `useDocument.ts` |
| API file | camelCase.ts | `documentApi.ts` |
| Type file | types.ts | `types.ts` |
| Test file | *.test.tsx | `DocumentCard.test.tsx` |
| Feature folder | kebab-case | `ai-tutor/` |

---

## 7. COMPONENT TEMPLATE

```tsx
// components/common/Example.tsx
import { cn } from '@/lib/utils'

interface ExampleProps {
  title: string
  className?: string
}

export function Example({ title, className }: ExampleProps) {
  return (
    <div className={cn('base-class', className)}>
      {title}
    </div>
  )
}
```

---

## 8. HOOK TEMPLATE

```tsx
// features/documents/hooks/useDocument.ts
import { useQuery } from '@tanstack/react-query'
import { documentApi } from '../api/documentApi'

export function useDocument(documentId: string) {
  return useQuery({
    queryKey: ['document', documentId],
    queryFn: () => documentApi.getById(documentId),
    enabled: !!documentId,
  })
}
```

---

## 9. STATE MANAGEMENT

| State Type | Tool | Location |
|------------|------|----------|
| Server data | React Query | Feature hooks |
| Auth state | Zustand | `stores/auth.store.ts` |
| UI state | Zustand | `stores/ui.store.ts` |
| Document state | Zustand | `stores/document.store.ts` |
| Learning state | Zustand | `stores/learning.store.ts` |
| Form state | React Hook Form | Component |

---

## 10. FEATURES REMOVED

The following features have been removed as part of the Document-RAG migration:

- `features/courses/` - Replaced by `features/documents/`
- `features/lessons/` - Content now embedded in documents
- `features/exercises/` - Replaced by quiz and flashcard features
- `features/enrollments/` - No longer needed (document-based access)

---

## 11. CHECKLIST BEFORE COMMIT

- [ ] File đúng vị trí theo feature structure
- [ ] Named export (không default)
- [ ] Types defined
- [ ] No `any` type
- [ ] ESLint pass
- [ ] Prettier pass
- [ ] Tests pass
- [ ] Document-based endpoints used

---

*Version: 2.0 - Updated: 2026-03-01 - Document-RAG Based*
