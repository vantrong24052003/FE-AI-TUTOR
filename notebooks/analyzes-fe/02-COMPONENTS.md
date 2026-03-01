# FE AI TUTOR - Components Library

> Danh sách components cần build cho FE - Document-RAG Based
>
> **Version**: 5.1 - Document-RAG Architecture

---

## 1. COMPONENTS OVERVIEW

| STT | Category | Component | Dùng ở đâu | Mô tả |
|-----|----------|-----------|------------|-------|
| **LAYOUT (5)** |
| 1 | Layout | `Navbar` | Tất cả pages | Thanh nav trên |
| 2 | Layout | `Sidebar` | App pages | Sidebar bên trái |
| 3 | Layout | `Footer` | Landing page | Chân trang |
| 4 | Layout | `MainLayout` | App pages | Layout chính |
| 5 | Layout | `AuthLayout` | Auth pages | Layout auth |
| **COMMON (5)** |
| 6 | Common | `PageLoader` | Tất cả | Loading spinner |
| 7 | Common | `EmptyState` | List pages | Không có data |
| 8 | Common | `ErrorMessage` | Tất cả | Hiển thị lỗi |
| 9 | Common | `ConfirmDialog` | Tất cả | Dialog xác nhận |
| 10 | Common | `StatsCard` | Dashboard | Card thống kê |
| **AUTH (2)** |
| 11 | Auth | `LoginForm` | Login page | Form đăng nhập |
| 12 | Auth | `RegisterForm` | Register page | Form đăng ký |
| **DOCUMENTS (5)** |
| 13 | Document | `DocumentCard` | Document list | Card tài liệu |
| 14 | Document | `DocumentGrid` | Documents page | Grid layout |
| 15 | Document | `DocumentUploader` | Upload page | Upload với progress |
| 16 | Document | `DocumentStatus` | Document card | Status badge |
| 17 | Document | `DocumentStats` | Dashboard | Thống kê tài liệu |
| **FLASHCARDS (5)** |
| 18 | Flashcard | `FlashcardPlayer` | Review page | Container cho review |
| 19 | Flashcard | `FlashcardCard` | Review page | Card flip animation |
| 20 | Flashcard | `FlashcardRating` | Review page | Rating buttons (0-5) |
| 21 | Flashcard | `FlashcardProgress` | Progress page | Progress bar |
| 22 | Flashcard | `FlashcardDeckInfo` | Dashboard | Thống kê bộ bài |
| **QUIZ (4)** |
| 23 | Quiz | `QuizPlayer` | Quiz page | Container cho quiz |
| 24 | Quiz | `QuestionCard` | Quiz page | Câu hỏi với answers |
| 25 | Quiz | `QuizTimer` | Quiz page | Countdown timer |
| 26 | Quiz | `QuizResult` | Quiz page | Kết quả quiz |
| **AI CHAT (4)** |
| 27 | AI | `ChatWindow` | AI Tutor page | Container chat |
| 28 | AI | `ChatMessage` | AI Tutor page | Message bubble |
| 29 | AI | `ChatInput` | AI Tutor page | Input với send button |
| 30 | AI | `SuggestionChips` | AI Tutor page | Quick suggestions |
| **NOTES & BOOKMARKS (4)** |
| 31 | Note | `NoteEditor` | Document page | Tạo/sửa ghi chú |
| 32 | Note | `NoteList` | Document page | Danh sách ghi chú |
| 33 | Bookmark | `BookmarkButton` | Document page | Nút bookmark |
| 34 | Bookmark | `BookmarkList` | Bookmarks page | Danh sách bookmark |
| **AI SERVICES (4)** |
| 35 | AI | `SummarizePanel` | Document page | AI tóm tắt tài liệu |
| 36 | AI | `GenerateQuizButton` | Document page | Tạo quiz từ tài liệu |
| 37 | AI | `GenerateFlashcardsButton` | Document page | Tạo flashcard AI |
| 38 | AI | `AIFeedbackDisplay` | Quiz page | Feedback AI |
| **PROGRESS (2)** |
| 39 | Progress | `ProgressOverview` | Dashboard | Tiến độ tổng quan |
| 40 | Progress | `DocumentProgressCard` | Document detail | Tiến độ tài liệu |

**Total: 40 Components**

---

## 2. LAYOUT COMPONENTS

### 2.1 Navbar

**Vị trí:** Tất cả pages (sau login)

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Logo | Image/Link | Click về dashboard |
| Search | Input | Tìm kiếm tài liệu |
| Notification | Icon + Badge | Thông báo |
| Avatar | Image + Dropdown | Menu: Profile, Settings, Logout |

```tsx
// components/layout/Navbar.tsx
export function Navbar() {
  return (
    <header className="h-16 border-b">
      <Logo />
      <SearchBar placeholder="Tìm kiếm tài liệu..." />
      <NotificationBell />
      <UserMenu />
    </header>
  )
}
```

---

### 2.2 Sidebar

**Vị trí:** App pages

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Dashboard | Link | → /app/dashboard |
| Documents | Link | → /app/documents |
| Flashcards | Link | → /app/flashcards |
| Quizzes | Link | → /app/quizzes |
| Bookmarks | Link | → /app/bookmarks |
| AI Tutor | Link | → /app/ai-tutor |
| Progress | Link | → /app/progress |
| Profile | Link | → /app/profile |

```tsx
// components/layout/Sidebar.tsx
export function Sidebar() {
  const navItems = [
    { icon: Home, label: "Dashboard", href: "/app/dashboard" },
    { icon: FileText, label: "Documents", href: "/app/documents" },
    { icon: Layers, label: "Flashcards", href: "/app/flashcards" },
    { icon: HelpCircle, label: "Quizzes", href: "/app/quizzes" },
    { icon: Bookmark, label: "Bookmarks", href: "/app/bookmarks" },
    { icon: Bot, label: "AI Tutor", href: "/app/ai-tutor" },
    { icon: BarChart3, label: "Progress", href: "/app/progress" },
    { icon: User, label: "Profile", href: "/app/profile" },
  ]

  return (
    <aside className="w-64 border-r">
      <nav className="space-y-1 p-4">
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </nav>
    </aside>
  )
}
```

---

## 3. DOCUMENT COMPONENTS

### 3.1 DocumentCard

**Vị trí:** Documents list page, Dashboard

**UI Elements:**
| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Thumbnail | Image | thumbnail_url | Ảnh bìa tài liệu |
| Title | Text | title | Tiêu đề |
| Description | Text | description | Mô tả ngắn |
| Status Badge | Badge | status | pending/processing/ready |
| Flashcard Count | Text | flashcards_count | Số flashcard đã tạo |
| Quiz Count | Text | quizzes_count | Số quiz đã tạo |
| Created At | Text | created_at | Ngày upload |
| Actions | Button Group | - | View, Delete |

```tsx
// features/documents/components/DocumentCard.tsx
import { Link } from 'react-router'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DocumentStatus } from './DocumentStatus'
import { DocumentStats } from './DocumentStats'
import type { Document } from '../types'

interface DocumentCardProps {
  document: Document
  onDelete?: (id: string) => void
}

export function DocumentCard({ document, onDelete }: DocumentCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-40 bg-muted">
        {document.thumbnail_url ? (
          <img
            src={document.thumbnail_url}
            alt={document.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <FileText className="w-12 h-12 text-muted-foreground" />
          </div>
        )}
        <DocumentStatus status={document.status} className="absolute top-2 right-2" />
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{document.title}</h3>
        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
          {document.description}
        </p>

        <DocumentStats
          flashcardsCount={document.flashcards_count}
          quizzesCount={document.quizzes_count}
          className="mt-3"
        />
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button asChild className="flex-1">
          <Link to={`/app/documents/${document.id}`}>
            {document.status === 'ready' ? 'Study' : 'View'}
          </Link>
        </Button>
        {onDelete && (
          <Button
            variant="destructive"
            size="icon"
            onClick={() => onDelete(document.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
```

---

### 3.2 DocumentGrid

**Vị trí:** Documents page

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Grid Container | Grid | Responsive grid layout |
| Filter Bar | Component | Lọc theo status, search |
| Sort Dropdown | Select | Sắp xếp theo thời gian, tên |
| Empty State | Component | Không có tài liệu |

```tsx
// features/documents/components/DocumentGrid.tsx
import { DocumentCard } from './DocumentCard'
import { EmptyState } from '@/components/common/EmptyState'
import type { Document } from '../types'

interface DocumentGridProps {
  documents: Document[]
  isLoading?: boolean
  onDelete?: (id: string) => void
}

export function DocumentGrid({ documents, isLoading, onDelete }: DocumentGridProps) {
  if (isLoading) {
    return <DocumentGridSkeleton count={8} />
  }

  if (documents.length === 0) {
    return (
      <EmptyState
        icon={<FileText className="w-12 h-12" />}
        title="Chưa có tài liệu nào"
        description="Tải lên tài liệu để bắt đầu học tập với AI"
        action={{
          label: "Tải tài liệu",
          href: "/app/documents/upload"
        }}
      />
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {documents.map((document) => (
        <DocumentCard
          key={document.id}
          document={document}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
```

---

### 3.3 DocumentUploader

**Vị trí:** Upload page

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Drop Zone | Area | Kéo thả file |
| File Input | Input | Chọn file |
| Progress Bar | Progress | Tiến độ upload |
| Status Text | Text | Trạng thái upload |
| Preview | Card | Xem trước file |

```tsx
// features/documents/components/DocumentUploader.tsx
import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface DocumentUploaderProps {
  onUpload: (file: File) => Promise<void>
  acceptedFormats?: string[]
  maxSize?: number // in MB
}

export function DocumentUploader({
  onUpload,
  acceptedFormats = ['.pdf', '.docx', '.txt', '.md'],
  maxSize = 50
}: DocumentUploaderProps) {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt'],
      'text/markdown': ['.md'],
    },
    maxSize: maxSize * 1024 * 1024,
    multiple: false,
  })

  const handleUpload = async () => {
    if (!selectedFile) return

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate progress (real implementation would use axios onUploadProgress)
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return prev
        }
        return prev + 10
      })
    }, 200)

    try {
      await onUpload(selectedFile)
      setUploadProgress(100)
    } catch (error) {
      console.error('Upload failed:', error)
    } finally {
      setIsUploading(false)
      clearInterval(progressInterval)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        {/* Drop Zone */}
        <div
          {...getRootProps()}
          className={cn(
            "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
            isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25",
            isUploading && "pointer-events-none opacity-50"
          )}
        >
          <input {...getInputProps()} />
          <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          {isDragActive ? (
            <p className="text-lg">Thả file vào đây...</p>
          ) : (
            <div>
              <p className="text-lg font-medium">Kéo thả file hoặc click để chọn</p>
              <p className="text-sm text-muted-foreground mt-2">
                Hỗ trợ: {acceptedFormats.join(', ')} (tối đa {maxSize}MB)
              </p>
            </div>
          )}
        </div>

        {/* Selected File Preview */}
        {selectedFile && !isUploading && (
          <div className="mt-4 p-4 bg-muted rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary" />
              <div>
                <p className="font-medium">{selectedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button onClick={handleUpload}>
              <Upload className="w-4 h-4 mr-2" />
              Tải lên
            </Button>
          </div>
        )}

        {/* Upload Progress */}
        {isUploading && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Đang tải lên...</span>
              <span>{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
```

---

### 3.4 DocumentStatus

**Vị trí:** DocumentCard, Document detail

**UI Elements:**
| Status | Color | Mô tả |
|--------|-------|-------|
| pending | gray | Chờ xử lý |
| processing | blue | Đang xử lý AI |
| ready | green | Sẵn sàng học |
| error | red | Lỗi xử lý |

```tsx
// features/documents/components/DocumentStatus.tsx
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type DocumentStatusType = 'pending' | 'processing' | 'ready' | 'error'

interface DocumentStatusProps {
  status: DocumentStatusType
  className?: string
}

const statusConfig: Record<DocumentStatusType, { label: string; variant: 'secondary' | 'default' | 'destructive' | 'outline' }> = {
  pending: { label: 'Chờ xử lý', variant: 'secondary' },
  processing: { label: 'Đang xử lý', variant: 'default' },
  ready: { label: 'Sẵn sàng', variant: 'outline' },
  error: { label: 'Lỗi', variant: 'destructive' },
}

export function DocumentStatus({ status, className }: DocumentStatusProps) {
  const config = statusConfig[status]

  return (
    <Badge variant={config.variant} className={cn(className)}>
      {status === 'processing' && (
        <Loader2 className="w-3 h-3 mr-1 animate-spin" />
      )}
      {config.label}
    </Badge>
  )
}
```

---

### 3.5 DocumentStats

**Vị trí:** DocumentCard, Document detail

**UI Elements:**
| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Flashcards | Text + Icon | flashcards_count | Số flashcard |
| Quizzes | Text + Icon | quizzes_count | Số quiz |
| Notes | Text + Icon | notes_count | Số ghi chú |

```tsx
// features/documents/components/DocumentStats.tsx
import { cn } from '@/lib/utils'

interface DocumentStatsProps {
  flashcardsCount: number
  quizzesCount: number
  notesCount?: number
  className?: string
}

export function DocumentStats({
  flashcardsCount,
  quizzesCount,
  notesCount,
  className
}: DocumentStatsProps) {
  return (
    <div className={cn("flex items-center gap-4 text-sm text-muted-foreground", className)}>
      <div className="flex items-center gap-1">
        <Layers className="w-4 h-4" />
        <span>{flashcardsCount} flashcards</span>
      </div>
      <div className="flex items-center gap-1">
        <HelpCircle className="w-4 h-4" />
        <span>{quizzesCount} quizzes</span>
      </div>
      {notesCount !== undefined && (
        <div className="flex items-center gap-1">
          <StickyNote className="w-4 h-4" />
          <span>{notesCount} notes</span>
        </div>
      )}
    </div>
  )
}
```

---

## 4. FLASHCARD COMPONENTS

### 4.1 FlashcardPlayer

**Vị trí:** Flashcard review page

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Progress Bar | Progress | Tiến độ review |
| Card Container | Component | Container cho card hiện tại |
| Rating Buttons | Button Group | 0-5 rating |
| Navigation | Button | Previous/Next/Skip |
| Session Stats | Text | Đúng/Sai count |

```tsx
// features/flashcards/components/FlashcardPlayer.tsx
import { useState } from 'react'
import { FlashcardCard } from './FlashcardCard'
import { FlashcardRating } from './FlashcardRating'
import { FlashcardProgress } from './FlashcardProgress'
import type { Flashcard } from '../types'

interface FlashcardPlayerProps {
  flashcards: Flashcard[]
  onReview: (flashcardId: string, quality: number) => void
  onComplete?: () => void
}

export function FlashcardPlayer({ flashcards, onReview, onComplete }: FlashcardPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 })

  const currentCard = flashcards[currentIndex]
  const progress = ((currentIndex + 1) / flashcards.length) * 100
  const isComplete = currentIndex >= flashcards.length

  const handleRating = (quality: number) => {
    // Update stats
    if (quality >= 3) {
      setSessionStats((prev) => ({ ...prev, correct: prev.correct + 1 }))
    } else {
      setSessionStats((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }))
    }

    // Call onReview
    onReview(currentCard.id, quality)

    // Move to next card
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      onComplete?.()
    }
  }

  if (isComplete) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Hoàn thành!</h2>
        <div className="flex justify-center gap-8 mb-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">{sessionStats.correct}</p>
            <p className="text-muted-foreground">Đúng</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-600">{sessionStats.incorrect}</p>
            <p className="text-muted-foreground">Cần ôn lại</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto">
      {/* Progress */}
      <FlashcardProgress
        current={currentIndex + 1}
        total={flashcards.length}
        progress={progress}
      />

      {/* Card */}
      <FlashcardCard
        flashcard={currentCard}
        className="my-8"
      />

      {/* Rating */}
      <FlashcardRating onRate={handleRating} />

      {/* Session Stats */}
      <div className="mt-6 flex gap-6 text-sm text-muted-foreground">
        <span className="text-green-600">{sessionStats.correct} đúng</span>
        <span className="text-red-600">{sessionStats.incorrect} cần ôn lại</span>
      </div>
    </div>
  )
}
```

---

### 4.2 FlashcardCard

**Vị trí:** Trong FlashcardPlayer

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Card Front | Card | Mặt trước (câu hỏi) |
| Card Back | Card | Mặt sau (câu trả lời) |
| Flip Animation | Animation | Rotate Y 180deg |
| Hint | Text | Gợi ý (optional) |

```tsx
// features/flashcards/components/FlashcardCard.tsx
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { Flashcard } from '../types'

interface FlashcardCardProps {
  flashcard: Flashcard
  className?: string
}

export function FlashcardCard({ flashcard, className }: FlashcardCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className={cn("w-full max-w-lg perspective-1000", className)}>
      <div
        className={cn(
          "relative w-full h-72 transition-transform duration-500 transform-style-3d cursor-pointer",
          isFlipped && "rotate-y-180"
        )}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <Card className="absolute inset-0 backface-hidden">
          <CardContent className="flex flex-col items-center justify-center h-full p-6">
            <p className="text-xl text-center font-medium">{flashcard.front}</p>
            {flashcard.hint && (
              <p className="text-sm text-muted-foreground mt-4">
                Hint: {flashcard.hint}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-4">
              Click để xem đáp án
            </p>
          </CardContent>
        </Card>

        {/* Back */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-primary/5">
          <CardContent className="flex items-center justify-center h-full p-6">
            <p className="text-xl text-center">{flashcard.back}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
```

---

### 4.3 FlashcardRating

**Vị trí:** Trong FlashcardPlayer

**UI Elements:**
| Rating | Color | Mô tả |
|--------|-------|-------|
| 0 | red | Hoàn toàn quên |
| 1 | red | Rất khó nhớ |
| 2 | orange | Khó nhớ |
| 3 | yellow | Khó nhắc |
| 4 | green | Dễ nhớ |
| 5 | green | Rất dễ nhớ |

```tsx
// features/flashcards/components/FlashcardRating.tsx
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FlashcardRatingProps {
  onRate: (quality: number) => void
  className?: string
}

const ratingConfig = [
  { value: 0, label: '0', color: 'bg-red-500 hover:bg-red-600', title: 'Hoàn toàn quên' },
  { value: 1, label: '1', color: 'bg-red-400 hover:bg-red-500', title: 'Rất khó nhớ' },
  { value: 2, label: '2', color: 'bg-orange-400 hover:bg-orange-500', title: 'Khó nhớ' },
  { value: 3, label: '3', color: 'bg-yellow-400 hover:bg-yellow-500', title: 'Khó nhắc' },
  { value: 4, label: '4', color: 'bg-green-400 hover:bg-green-500', title: 'Dễ nhớ' },
  { value: 5, label: '5', color: 'bg-green-500 hover:bg-green-600', title: 'Rất dễ nhớ' },
]

export function FlashcardRating({ onRate, className }: FlashcardRatingProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <p className="text-sm text-center text-muted-foreground">
        Bạn nhớ được bao nhiêu?
      </p>
      <div className="flex gap-2 justify-center">
        {ratingConfig.map((config) => (
          <Button
            key={config.value}
            onClick={() => onRate(config.value)}
            className={cn("w-10 h-10", config.color)}
            title={config.title}
          >
            {config.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
```

---

### 4.4 FlashcardProgress

**Vị trí:** Trong FlashcardPlayer, Dashboard

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Progress Bar | Progress | Thanh tiến độ |
| Counter | Text | X/Y cards |
| Stats | Grid | Learned/New/Due |

```tsx
// features/flashcards/components/FlashcardProgress.tsx
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

interface FlashcardProgressProps {
  current: number
  total: number
  progress: number
  className?: string
}

export function FlashcardProgress({
  current,
  total,
  progress,
  className
}: FlashcardProgressProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">
          Card {current} / {total}
        </span>
        <span className="text-sm font-medium">
          {Math.round(progress)}%
        </span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}
```

---

## 5. QUIZ COMPONENTS

### 5.1 QuizPlayer

**Vị trí:** Quiz page

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Progress Bar | Progress | Tiến độ quiz |
| Timer | Component | Đếm ngược (optional) |
| Question Card | Component | Câu hỏi hiện tại |
| Navigation | Button | Previous/Next/Submit |
| Result | Component | Kết quả sau khi submit |

```tsx
// features/quiz/components/QuizPlayer.tsx
import { useState } from 'react'
import { QuestionCard } from './QuestionCard'
import { QuizTimer } from './QuizTimer'
import { QuizResult } from './QuizResult'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import type { Quiz, QuizAnswer } from '../types'

interface QuizPlayerProps {
  quiz: Quiz
  onSubmit: (answers: QuizAnswer[]) => void
  timeLimit?: number // in seconds
}

export function QuizPlayer({ quiz, onSubmit, timeLimit }: QuizPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [result, setResult] = useState<QuizResult | null>(null)

  const currentQuestion = quiz.questions[currentIndex]
  const progress = ((currentIndex + 1) / quiz.questions.length) * 100
  const allAnswered = Object.keys(answers).length === quiz.questions.length

  const handleAnswer = (questionId: string, answerId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerId }))
  }

  const handleSubmit = () => {
    const formattedAnswers = Object.entries(answers).map(([questionId, answerId]) => ({
      questionId,
      answerId,
    }))
    onSubmit(formattedAnswers)
    setIsSubmitted(true)
  }

  const handleTimeUp = () => {
    handleSubmit()
  }

  if (isSubmitted && result) {
    return <QuizResult result={result} quiz={quiz} answers={answers} />
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">{quiz.title}</h1>
        {timeLimit && <QuizTimer duration={timeLimit} onTimeUp={handleTimeUp} />}
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            Câu {currentIndex + 1} / {quiz.questions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <QuestionCard
        question={currentQuestion}
        selectedAnswer={answers[currentQuestion.id]}
        onAnswer={(answerId) => handleAnswer(currentQuestion.id, answerId)}
      />

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          onClick={() => setCurrentIndex((prev) => prev - 1)}
          disabled={currentIndex === 0}
        >
          Câu trước
        </Button>

        {currentIndex < quiz.questions.length - 1 ? (
          <Button onClick={() => setCurrentIndex((prev) => prev + 1)}>
            Câu tiếp
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!allAnswered}>
            Nộp bài
          </Button>
        )}
      </div>
    </div>
  )
}
```

---

### 5.2 QuestionCard

**Vị trí:** Trong QuizPlayer

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Question Text | Text | Nội dung câu hỏi |
| Options | Radio Group | Các đáp án |
| Selected State | Style | Highlight đáp án đã chọn |

```tsx
// features/quiz/components/QuestionCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import type { Question } from '../types'

interface QuestionCardProps {
  question: Question
  selectedAnswer?: string
  onAnswer: (answerId: string) => void
  showCorrect?: boolean
}

export function QuestionCard({
  question,
  selectedAnswer,
  onAnswer,
  showCorrect = false
}: QuestionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          {question.text}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedAnswer} onValueChange={onAnswer}>
          {question.answers.map((answer) => {
            const isSelected = selectedAnswer === answer.id
            const isCorrect = answer.is_correct

            let itemClass = ''
            if (showCorrect) {
              if (isCorrect) itemClass = 'border-green-500 bg-green-50'
              else if (isSelected && !isCorrect) itemClass = 'border-red-500 bg-red-50'
            }

            return (
              <div
                key={answer.id}
                className={`flex items-center space-x-2 p-3 rounded-lg border ${itemClass}`}
              >
                <RadioGroupItem value={answer.id} id={answer.id} />
                <Label htmlFor={answer.id} className="flex-1 cursor-pointer">
                  {answer.text}
                </Label>
              </div>
            )
          })}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
```

---

### 5.3 QuizTimer

**Vị trí:** Trong QuizPlayer

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Timer Display | Text | MM:SS format |
| Warning State | Style | Đỏ khi < 30s |

```tsx
// features/quiz/components/QuizTimer.tsx
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface QuizTimerProps {
  duration: number // in seconds
  onTimeUp: () => void
  className?: string
}

export function QuizTimer({ duration, onTimeUp, className }: QuizTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, onTimeUp])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const isWarning = timeLeft < 30

  return (
    <div
      className={cn(
        "px-4 py-2 rounded-lg font-mono text-lg font-bold",
        isWarning ? "bg-red-100 text-red-600" : "bg-muted",
        className
      )}
    >
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  )
}
```

---

### 5.4 QuizResult

**Vị trí:** Trong QuizPlayer (sau khi submit)

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Score | Text | Điểm số |
| Correct/Wrong | Text | Số đúng/sai |
| Time Taken | Text | Thời gian làm |
| Review Button | Button | Xem lại đáp án |

```tsx
// features/quiz/components/QuizResult.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { Quiz, QuizResult as QuizResultType } from '../types'

interface QuizResultProps {
  result: QuizResultType
  quiz: Quiz
  answers: Record<string, string>
  onRetry?: () => void
}

export function QuizResult({ result, quiz, answers, onRetry }: QuizResultProps) {
  const percentage = Math.round((result.correct_count / quiz.questions.length) * 100)

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Kết quả Quiz</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        {/* Score Circle */}
        <div className="w-32 h-32 mx-auto rounded-full border-4 border-primary flex items-center justify-center">
          <div>
            <p className="text-3xl font-bold">{percentage}%</p>
            <p className="text-sm text-muted-foreground">{result.score} điểm</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">{result.correct_count}</p>
            <p className="text-sm text-muted-foreground">Đúng</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-2xl font-bold text-red-600">{result.incorrect_count}</p>
            <p className="text-sm text-muted-foreground">Sai</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">{result.time_taken}s</p>
            <p className="text-sm text-muted-foreground">Thời gian</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={() => {/* Show review */}}>
            Xem lại đáp án
          </Button>
          {onRetry && (
            <Button onClick={onRetry}>
              Làm lại
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
```

---

## 6. AI CHAT COMPONENTS

### 6.1 ChatWindow

**Vị trí:** AI Tutor page

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Header | Bar | Title + Context selector |
| Messages | List | Danh sách tin nhắn |
| Input | Component | Chat input |
| Suggestions | Component | Quick suggestions |

```tsx
// features/ai-tutor/components/ChatWindow.tsx
import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'
import { SuggestionChips } from './SuggestionChips'
import type { Message } from '../types'

interface ChatWindowProps {
  messages: Message[]
  onSend: (message: string) => void
  isLoading?: boolean
  suggestions?: string[]
  onSuggestionClick?: (suggestion: string) => void
}

export function ChatWindow({
  messages,
  onSend,
  isLoading,
  suggestions,
  onSuggestionClick
}: ChatWindowProps) {
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim())
      setInput('')
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b">
        <h2 className="font-semibold">AI Tutor</h2>
        <p className="text-sm text-muted-foreground">Hỏi đáp về tài liệu của bạn</p>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        {messages.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            <Bot className="w-12 h-12 mx-auto mb-4" />
            <p>Chào bạn! Tôi có thể giúp gì cho bạn hôm nay?</p>
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))
        )}
        {isLoading && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Đang trả lời...</span>
          </div>
        )}
      </ScrollArea>

      {/* Suggestions */}
      {suggestions && suggestions.length > 0 && (
        <SuggestionChips
          suggestions={suggestions}
          onSelect={onSuggestionClick || (() => {})}
        />
      )}

      {/* Input */}
      <ChatInput
        value={input}
        onChange={setInput}
        onSend={handleSend}
        disabled={isLoading}
      />
    </div>
  )
}
```

---

### 6.2 ChatMessage

**Vị trí:** Trong ChatWindow

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Avatar | Image | User hoặc AI avatar |
| Content | Text/Markdown | Nội dung tin nhắn |
| Timestamp | Text | Thời gian |

```tsx
// features/ai-tutor/components/ChatMessage.tsx
import { cn } from '@/lib/utils'
import type { Message } from '../types'

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div
      className={cn(
        "flex gap-3 mb-4",
        isUser && "flex-row-reverse"
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
          isUser ? "bg-primary text-white" : "bg-muted"
        )}
      >
        {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
      </div>

      {/* Content */}
      <div
        className={cn(
          "rounded-lg p-3 max-w-[70%]",
          isUser ? "bg-primary text-white" : "bg-muted"
        )}
      >
        <div className="prose prose-sm dark:prose-invert">
          {message.content}
        </div>
        <span className="text-xs opacity-70 mt-1 block">
          {formatTime(message.created_at)}
        </span>
      </div>
    </div>
  )
}
```

---

### 6.3 ChatInput

**Vị trí:** Trong ChatWindow

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Text Input | Input | Nhập tin nhắn |
| Send Button | Button | Gửi tin nhắn |
| Keyboard Hint | Text | Enter để gửi |

```tsx
// features/ai-tutor/components/ChatInput.tsx
import { useState, KeyboardEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  disabled?: boolean
}

export function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSend()
    }
  }

  return (
    <div className="p-4 border-t flex gap-2">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Nhập câu hỏi của bạn..."
        disabled={disabled}
        className="flex-1"
      />
      <Button onClick={onSend} disabled={disabled || !value.trim()}>
        <Send className="w-4 h-4" />
      </Button>
    </div>
  )
}
```

---

### 6.4 SuggestionChips

**Vị trí:** Trong ChatWindow

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Chips | Button Group | Các gợi ý nhanh |
| Scrollable | Container | Scroll nếu nhiều |

```tsx
// features/ai-tutor/components/SuggestionChips.tsx
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

interface SuggestionChipsProps {
  suggestions: string[]
  onSelect: (suggestion: string) => void
}

export function SuggestionChips({ suggestions, onSelect }: SuggestionChipsProps) {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-2 p-2">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => onSelect(suggestion)}
            className="shrink-0"
          >
            {suggestion}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
```

---

## 7. COMMON COMPONENTS

### 7.1 StatsCard (Updated)

**Vị trí:** Dashboard

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Icon | Icon | Icon đại diện |
| Title | Text | Tiêu đề stat |
| Value | Text | Giá trị |
| Trend | Text | Xu hướng tăng/giảm |

```tsx
// components/common/StatsCard.tsx
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  description?: string
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  className
}: StatsCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
            {trend && (
              <p
                className={cn(
                  "text-xs mt-1",
                  trend.isPositive ? "text-green-600" : "text-red-600"
                )}
              >
                {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
              </p>
            )}
            {description && (
              <p className="text-xs text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          <div className="p-3 bg-primary/10 rounded-full">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
```

---

## 8. FILE STRUCTURE

```
src/
├── components/
│   ├── ui/              # shadcn components
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   ├── MainLayout.tsx
│   │   └── AuthLayout.tsx
│   └── common/
│       ├── PageLoader.tsx
│       ├── EmptyState.tsx
│       ├── ErrorMessage.tsx
│       ├── ConfirmDialog.tsx
│       └── StatsCard.tsx
│
├── features/
│   ├── auth/components/
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   │
│   ├── documents/components/
│   │   ├── DocumentCard.tsx
│   │   ├── DocumentGrid.tsx
│   │   ├── DocumentUploader.tsx
│   │   ├── DocumentStatus.tsx
│   │   └── DocumentStats.tsx
│   │
│   ├── flashcards/components/
│   │   ├── FlashcardPlayer.tsx
│   │   ├── FlashcardCard.tsx
│   │   ├── FlashcardRating.tsx
│   │   ├── FlashcardProgress.tsx
│   │   └── FlashcardDeckInfo.tsx
│   │
│   ├── quiz/components/
│   │   ├── QuizPlayer.tsx
│   │   ├── QuestionCard.tsx
│   │   ├── QuizTimer.tsx
│   │   └── QuizResult.tsx
│   │
│   ├── ai-tutor/components/
│   │   ├── ChatWindow.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── ChatInput.tsx
│   │   └── SuggestionChips.tsx
│   │
│   ├── notes/components/
│   │   ├── NoteEditor.tsx
│   │   └── NoteList.tsx
│   │
│   ├── bookmarks/components/
│   │   ├── BookmarkButton.tsx
│   │   └── BookmarkList.tsx
│   │
│   ├── ai-services/components/
│   │   ├── SummarizePanel.tsx
│   │   ├── GenerateQuizButton.tsx
│   │   ├── GenerateFlashcardsButton.tsx
│   │   └── AIFeedbackDisplay.tsx
│   │
│   └── progress/components/
│       ├── ProgressOverview.tsx
│       └── DocumentProgressCard.tsx
│
├── pages/
│   ├── public/
│   │   ├── LandingPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── auth/
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── ForgotPasswordPage.tsx
│   └── app/
│       ├── DashboardPage.tsx
│       ├── DocumentsPage.tsx
│       ├── DocumentDetailPage.tsx
│       ├── DocumentUploadPage.tsx
│       ├── FlashcardReviewPage.tsx
│       ├── QuizPage.tsx
│       ├── BookmarksPage.tsx
│       ├── AITutorPage.tsx
│       ├── ProgressPage.tsx
│       └── ProfilePage.tsx
```

---

## 9. COMPONENTS SUMMARY TABLE

### Document Components

| Name | Type | Props | Description |
|------|------|-------|-------------|
| `DocumentCard` | Feature | `document, onDelete?` | Card hiển thị tài liệu với status, stats |
| `DocumentGrid` | Feature | `documents, isLoading?, onDelete?` | Grid layout responsive cho documents |
| `DocumentUploader` | Feature | `onUpload, acceptedFormats?, maxSize?` | Upload component với drag-drop, progress |
| `DocumentStatus` | UI | `status` | Badge hiển thị trạng thái xử lý |
| `DocumentStats` | UI | `flashcardsCount, quizzesCount, notesCount?` | Hiển thị số lượng flashcards, quizzes |

### Flashcard Components

| Name | Type | Props | Description |
|------|------|-------|-------------|
| `FlashcardPlayer` | Feature | `flashcards, onReview, onComplete?` | Container chính cho review session |
| `FlashcardCard` | Feature | `flashcard` | Card với flip animation |
| `FlashcardRating` | UI | `onRate` | Rating buttons 0-5 cho SRS algorithm |
| `FlashcardProgress` | UI | `current, total, progress` | Progress bar và counter |
| `FlashcardDeckInfo` | Feature | `deck` | Thông tin bộ bài (due, new, learned) |

### Quiz Components

| Name | Type | Props | Description |
|------|------|-------|-------------|
| `QuizPlayer` | Feature | `quiz, onSubmit, timeLimit?` | Container cho quiz với navigation |
| `QuestionCard` | Feature | `question, selectedAnswer?, onAnswer, showCorrect?` | Câu hỏi với radio options |
| `QuizTimer` | UI | `duration, onTimeUp` | Countdown timer với warning state |
| `QuizResult` | Feature | `result, quiz, answers, onRetry?` | Kết quả với score, stats |

### AI Chat Components

| Name | Type | Props | Description |
|------|------|-------|-------------|
| `ChatWindow` | Feature | `messages, onSend, isLoading?, suggestions?, onSuggestionClick?` | Container cho AI chat |
| `ChatMessage` | UI | `message` | Message bubble với avatar |
| `ChatInput` | UI | `value, onChange, onSend, disabled?` | Input với send button |
| `SuggestionChips` | UI | `suggestions, onSelect` | Quick suggestion buttons |

---

## 10. USAGE EXAMPLES

### Document List Page

```tsx
// pages/app/DocumentsPage.tsx
import { DocumentGrid } from '@/features/documents'
import { useDocuments } from '@/features/documents/hooks/useDocuments'

export function DocumentsPage() {
  const { documents, isLoading, deleteDocument } = useDocuments()

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Tài liệu của tôi</h1>
        <Button asChild>
          <Link to="/app/documents/upload">Tải tài liệu</Link>
        </Button>
      </div>

      <DocumentGrid
        documents={documents}
        isLoading={isLoading}
        onDelete={deleteDocument}
      />
    </div>
  )
}
```

### Flashcard Review Page

```tsx
// pages/app/FlashcardReviewPage.tsx
import { FlashcardPlayer } from '@/features/flashcards'
import { useFlashcardReview } from '@/features/flashcards/hooks/useFlashcardReview'

export function FlashcardReviewPage() {
  const { flashcards, reviewCard, completeSession } = useFlashcardReview(documentId)

  return (
    <div className="container py-6">
      <FlashcardPlayer
        flashcards={flashcards}
        onReview={reviewCard}
        onComplete={completeSession}
      />
    </div>
  )
}
```

### AI Tutor Page

```tsx
// pages/app/AITutorPage.tsx
import { ChatWindow } from '@/features/ai-tutor'
import { useChat } from '@/features/ai-tutor/hooks/useChat'

export function AITutorPage() {
  const { messages, sendMessage, isLoading, suggestions } = useChat()

  return (
    <div className="container py-6 h-[calc(100vh-8rem)]">
      <ChatWindow
        messages={messages}
        onSend={sendMessage}
        isLoading={isLoading}
        suggestions={suggestions}
        onSuggestionClick={sendMessage}
      />
    </div>
  )
}
```

---

*Version: 4.0 - Updated: 2026-03-01*
*40 Components, Document-RAG Architecture*
