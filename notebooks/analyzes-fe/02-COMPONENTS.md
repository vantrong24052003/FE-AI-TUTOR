# FE AI TUTOR - Components Library

> Danh sách components cần build cho FE
>
> **Version**: 3.0 - Full Feature Set

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
| **COURSES (4)** |
| 13 | Courses | `CourseCard` | Course list | Card khóa học |
| 14 | Courses | `CourseFilters` | Course list | Bộ lọc |
| 15 | Courses | `Curriculum` | Course detail | Danh sách bài |
| 16 | Courses | `CourseForm` | Create/Edit course | Form tạo/sửa course |
| **LEARNING (4)** |
| 17 | Learning | `VideoPlayer` | Learning page | Player video |
| 18 | Learning | `CourseSidebar` | Learning page | Sidebar bài học |
| 19 | Learning | `NotePanel` | Learning page | Ghi chú |
| 20 | Learning | `LessonContent` | Learning page | Nội dung bài học |
| **QUIZ (4)** |
| 21 | Quiz | `QuizPlayer` | Quiz page | Làm quiz |
| 22 | Quiz | `QuestionCard` | Quiz page | Câu hỏi |
| 23 | Quiz | `QuizResult` | Quiz page | Kết quả |
| 24 | Quiz | `QuizTimer` | Quiz page | Đếm ngược |
| **EXERCISES (4)** |
| 25 | Exercise | `ExerciseCard` | Lesson page | Card bài tập |
| 26 | Exercise | `ExerciseSubmitForm` | Exercise page | Form nộp bài |
| 27 | Exercise | `ExerciseFeedback` | Exercise page | AI feedback |
| 28 | Exercise | `ExerciseHistory` | Exercise page | Lịch sử nộp |
| **FLASHCARDS (5)** |
| 29 | Flashcard | `FlashcardCard` | Flashcard list | Card flashcard |
| 30 | Flashcard | `FlashcardReview` | Review page | Review UI (flip) |
| 31 | Flashcard | `FlashcardProgress` | Progress page | Tiến độ SRS |
| 32 | Flashcard | `FlashcardDeck` | Review page | Bộ cards |
| 33 | Flashcard | `FlashcardStats` | Dashboard | Thống kê |
| **NOTES & BOOKMARKS (4)** |
| 34 | Note | `NoteEditor` | Learning page | Tạo/sửa ghi chú |
| 35 | Note | `NoteList` | Lesson page | Danh sách ghi chú |
| 36 | Bookmark | `BookmarkButton` | Lesson page | Nút bookmark |
| 37 | Bookmark | `BookmarkList` | Bookmarks page | Danh sách bookmark |
| **AI CHAT (5)** |
| 38 | AI | `ChatWindow` | AI page | Cửa sổ chat |
| 39 | AI | `ChatMessage` | AI page | Tin nhắn |
| 40 | AI | `ChatInput` | AI page | Input chat |
| 41 | AI | `ConversationList` | AI page | Danh sách hội thoại |
| 42 | AI | `ContextSelector` | AI page | Chọn context |
| **AI SERVICES (4)** |
| 43 | AI | `SummarizePanel` | Lesson page | AI tóm tắt |
| 44 | AI | `GenerateQuizButton` | Lesson page | Tạo quiz AI |
| 45 | AI | `AIFeedbackDisplay` | Exercise page | Feedback AI |
| 46 | AI | `GenerateFlashcardsButton` | Lesson page | Tạo flashcard AI |
| **PROGRESS (2)** |
| 47 | Progress | `ProgressOverview` | Dashboard | Tiến độ tổng quan |
| 48 | Progress | `CourseProgressCard` | Course detail | Tiến độ khóa |

**Total: 48 Components**

---

## 2. LAYOUT COMPONENTS

### 2.1 Navbar

**Vị trí:** Tất cả pages (sau login)

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Logo | Image/Link | Click về dashboard |
| Search | Input | Tìm kiếm khóa học |
| Notification | Icon + Badge | Thông báo |
| Avatar | Image + Dropdown | Menu: Profile, Settings, Logout |

```tsx
// components/layout/Navbar.tsx
export function Navbar() {
  return (
    <header className="h-16 border-b">
      <Logo />
      <SearchBar />
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
| Courses | Link | → /app/courses |
| My Learning | Link | → /app/my-courses |
| Flashcards | Link | → /app/flashcards |
| Bookmarks | Link | → /app/bookmarks |
| AI Tutor | Link | → /app/ai-tutor |
| Progress | Link | → /app/progress |
| Profile | Link | → /app/profile |

```tsx
// components/layout/Sidebar.tsx
export function Sidebar() {
  return (
    <aside className="w-64 border-r">
      <NavItem icon={Home} label="Dashboard" href="/app/dashboard" />
      <NavItem icon={Book} label="Courses" href="/app/courses" />
      <NavItem icon={GraduationCap} label="My Learning" href="/app/my-courses" />
      <NavItem icon={Layers} label="Flashcards" href="/app/flashcards" />
      <NavItem icon={Bookmark} label="Bookmarks" href="/app/bookmarks" />
      <NavItem icon={Bot} label="AI Tutor" href="/app/ai-tutor" />
      <NavItem icon={BarChart3} label="Progress" href="/app/progress" />
      <NavItem icon={User} label="Profile" href="/app/profile" />
    </aside>
  )
}
```

---

## 3. FLASHCARD COMPONENTS

### 3.1 FlashcardReview

**Vị trí:** Flashcard review page

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Card Front | Card | Mặt trước (câu hỏi) |
| Card Back | Card | Mặt sau (câu trả lời) - hidden initially |
| Flip Button | Button | Lật card |
| Quality Buttons | Button Group | 0-5 rating |
| Progress | Text | X/Y cards |

```tsx
// features/flashcards/components/FlashcardReview.tsx
interface FlashcardReviewProps {
  flashcard: {
    id: number
    front: string
    back: string
    hint?: string
  }
  onReview: (quality: number) => void
  currentIndex: number
  totalCards: number
}

export function FlashcardReview({
  flashcard,
  onReview,
  currentIndex,
  totalCards
}: FlashcardReviewProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <div className="text-sm text-muted-foreground mb-4">
        {currentIndex + 1} / {totalCards}
      </div>

      <div
        className={cn(
          "w-full max-w-lg h-64 cursor-pointer transition-transform duration-500",
          isFlipped && "[transform:rotateY(180deg)]"
        )}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <Card className="w-full h-full">
          <CardContent className="flex items-center justify-center h-full">
            {!isFlipped ? (
              <p className="text-xl text-center">{flashcard.front}</p>
            ) : (
              <p className="text-xl text-center">{flashcard.back}</p>
            )}
          </CardContent>
        </Card>
      </div>

      {flashcard.hint && (
        <p className="text-sm text-muted-foreground mt-2">
          Hint: {flashcard.hint}
        </p>
      )}

      {isFlipped && (
        <div className="mt-6">
          <p className="text-sm text-center mb-2">How well did you remember?</p>
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4, 5].map((q) => (
              <Button
                key={q}
                variant={q < 3 ? "destructive" : q < 4 ? "secondary" : "default"}
                onClick={() => onReview(q)}
              >
                {q}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
```

---

### 3.2 FlashcardProgress

**Vị trí:** Flashcard progress page, Dashboard

**UI Elements:**
| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Total Cards | Text | total_cards | Tổng số flashcard |
| Learned | Text | learned | Đã học |
| New | Text | new | Chưa học |
| Due Today | Text | due_today | Cần review hôm nay |
| Mastery Rate | Progress | mastery_rate | % đã thuộc |

```tsx
// features/flashcards/components/FlashcardProgress.tsx
interface FlashcardProgressProps {
  stats: {
    total_cards: number
    learned: number
    new: number
    due_today: number
    mastery_rate: number
  }
}

export function FlashcardProgress({ stats }: FlashcardProgressProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Flashcard Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-2xl font-bold">{stats.total_cards}</p>
            <p className="text-sm text-muted-foreground">Total Cards</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">{stats.learned}</p>
            <p className="text-sm text-muted-foreground">Learned</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600">{stats.new}</p>
            <p className="text-sm text-muted-foreground">New</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-600">{stats.due_today}</p>
            <p className="text-sm text-muted-foreground">Due Today</p>
          </div>
        </div>
        <div className="mt-4">
          <Progress value={stats.mastery_rate * 100} />
          <p className="text-sm text-muted-foreground mt-1">
            Mastery: {Math.round(stats.mastery_rate * 100)}%
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
```

---

## 4. EXERCISE COMPONENTS

### 4.1 ExerciseCard

**Vị trí:** Lesson page

**UI Elements:**
| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Title | Text | title | Tiêu đề bài tập |
| Type Badge | Badge | type | Loại: text/code/file |
| Max Score | Text | max_score | Điểm tối đa |
| Status | Badge | status | pending/submitted/graded |
| Best Score | Text | best_score | Điểm cao nhất |

```tsx
// features/exercises/components/ExerciseCard.tsx
interface ExerciseCardProps {
  exercise: {
    id: number
    title: string
    type: 'text' | 'code' | 'file'
    max_score: number
    has_submitted: boolean
    best_score?: number
  }
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <Badge variant="outline">{exercise.type}</Badge>
            <h3 className="font-semibold mt-2">{exercise.title}</h3>
            <p className="text-sm text-muted-foreground">
              Max score: {exercise.max_score}
            </p>
          </div>
          {exercise.has_submitted && (
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Best Score</p>
              <p className="text-xl font-bold text-green-600">
                {exercise.best_score}/{exercise.max_score}
              </p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link to={`/app/exercises/${exercise.id}`}>
            {exercise.has_submitted ? 'View / Resubmit' : 'Start'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
```

---

### 4.2 ExerciseFeedback

**Vị trí:** Exercise detail page

**UI Elements:**
| Element | Loại | Data Field | Mô tả |
|---------|------|------------|-------|
| Score | Text | score | Điểm AI chấm |
| Overall Comment | Text | overall_comment | Nhận xét chung |
| Strengths | List | strengths | Điểm tốt |
| Improvements | List | improvements | Cần cải thiện |
| Suggestions | List | suggestions | Gợi ý |

```tsx
// features/exercises/components/ExerciseFeedback.tsx
interface ExerciseFeedbackProps {
  feedback: {
    score: number
    overall_comment: string
    strengths: string[]
    improvements: string[]
    suggestions: string[]
  }
  maxScore: number
}

export function ExerciseFeedback({ feedback, maxScore }: ExerciseFeedbackProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Feedback</CardTitle>
        <div className="text-3xl font-bold">
          {feedback.score}/{maxScore}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="font-medium">Overall</p>
          <p className="text-muted-foreground">{feedback.overall_comment}</p>
        </div>

        {feedback.strengths.length > 0 && (
          <div>
            <p className="font-medium text-green-600">Strengths</p>
            <ul className="list-disc list-inside">
              {feedback.strengths.map((s, i) => (
                <li key={i} className="text-sm">{s}</li>
              ))}
            </ul>
          </div>
        )}

        {feedback.improvements.length > 0 && (
          <div>
            <p className="font-medium text-orange-600">Improvements</p>
            <ul className="list-disc list-inside">
              {feedback.improvements.map((i, idx) => (
                <li key={idx} className="text-sm">{i}</li>
              ))}
            </ul>
          </div>
        )}

        {feedback.suggestions.length > 0 && (
          <div>
            <p className="font-medium text-blue-600">Suggestions</p>
            <ul className="list-disc list-inside">
              {feedback.suggestions.map((s, i) => (
                <li key={i} className="text-sm">{s}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
```

---

## 5. AI CHAT COMPONENTS

### 5.1 ChatWindow

**Vị trí:** AI Tutor page

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Header | Bar | Title + New chat |
| Context | Select | Chọn khóa học context |
| Messages | List | Danh sách tin nhắn |
| Input | Input | Nhập tin nhắn |
| Suggestions | Chips | Gợi ý nhanh |

```tsx
// features/ai-tutor/components/ChatWindow.tsx
interface ChatWindowProps {
  messages: ChatMessage[]
  onSend: (message: string) => void
  isLoading?: boolean
  contextOptions?: { id: number; title: string }[]
  selectedContext?: number
  onSelectContext?: (id: number) => void
}

export function ChatWindow({
  messages,
  onSend,
  isLoading,
  contextOptions,
  selectedContext,
  onSelectContext
}: ChatWindowProps) {
  const [input, setInput] = useState('')

  return (
    <div className="flex h-full flex-col">
      <ChatHeader />

      {contextOptions && (
        <ContextSelector
          options={contextOptions}
          selected={selectedContext}
          onSelect={onSelectContext}
        />
      )}

      <ScrollArea className="flex-1">
        {messages.map(msg => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isLoading && <TypingIndicator />}
      </ScrollArea>

      <SuggestionChips onSelect={setInput} />
      <ChatInput
        value={input}
        onChange={setInput}
        onSend={() => {
          onSend(input)
          setInput('')
        }}
        disabled={isLoading}
      />
    </div>
  )
}
```

---

### 5.2 ChatMessage

**Vị trí:** Trong ChatWindow

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Avatar | Image | User hoặc AI avatar |
| Content | Text/Markdown | Nội dung tin nhắn |
| Timestamp | Text | Thời gian |

```tsx
// features/ai-tutor/components/ChatMessage.tsx
interface ChatMessageProps {
  message: {
    id: number
    role: 'user' | 'assistant'
    content: string
    created_at: string
  }
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={cn('flex gap-3 p-4', isUser && 'flex-row-reverse')}>
      <Avatar>
        {isUser ? <UserAvatar /> : <AIAvatar />}
      </Avatar>
      <div className={cn('rounded-lg p-3 max-w-[70%]', isUser ? 'bg-primary text-white' : 'bg-muted')}>
        <Markdown content={message.content} />
      </div>
      <span className="text-xs text-muted-foreground">
        {formatTime(message.created_at)}
      </span>
    </div>
  )
}
```

---

## 6. AI SERVICES COMPONENTS

### 6.1 SummarizePanel

**Vị trí:** Lesson page

**UI Elements:**
| Element | Loại | Mô tả |
|---------|------|-------|
| Length Select | Select | short/medium/long |
| Summarize Button | Button | Gọi AI |
| Summary | Card | Kết quả tóm tắt |
| Key Points | List | Các ý chính |
| Keywords | Chips | Từ khóa |

```tsx
// features/ai-services/components/SummarizePanel.tsx
interface SummarizePanelProps {
  lessonId: number
}

export function SummarizePanel({ lessonId }: SummarizePanelProps) {
  const [length, setLength] = useState<'short' | 'medium' | 'long'>('medium')
  const [summary, setSummary] = useState<SummaryResult | null>(null)

  const { mutate: summarize, isPending } = useSummarize()

  const handleSummarize = () => {
    summarize({ lesson_id: lessonId, length }, {
      onSuccess: (data) => setSummary(data)
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select value={length} onValueChange={setLength}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="short">Short (~100 words)</SelectItem>
            <SelectItem value="medium">Medium (~200 words)</SelectItem>
            <SelectItem value="long">Long (~400 words)</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={handleSummarize} disabled={isPending}>
          {isPending ? 'Summarizing...' : 'Generate Summary'}
        </Button>

        {summary && (
          <div className="space-y-4">
            <div>
              <p className="font-medium">Summary</p>
              <p className="text-muted-foreground">{summary.summary}</p>
            </div>

            <div>
              <p className="font-medium">Key Points</p>
              <ul className="list-disc list-inside">
                {summary.key_points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium">Keywords</p>
              <div className="flex flex-wrap gap-2">
                {summary.keywords.map((keyword, i) => (
                  <Badge key={i} variant="secondary">{keyword}</Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
```

---

## 7. FILE STRUCTURE

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
│   ├── courses/components/
│   │   ├── CourseCard.tsx
│   │   ├── CourseFilters.tsx
│   │   ├── CourseForm.tsx
│   │   └── Curriculum.tsx
│   │
│   ├── learning/components/
│   │   ├── VideoPlayer.tsx
│   │   ├── CourseSidebar.tsx
│   │   ├── LessonContent.tsx
│   │   └── NotePanel.tsx
│   │
│   ├── quiz/components/
│   │   ├── QuizPlayer.tsx
│   │   ├── QuestionCard.tsx
│   │   ├── QuizResult.tsx
│   │   └── QuizTimer.tsx
│   │
│   ├── exercises/components/
│   │   ├── ExerciseCard.tsx
│   │   ├── ExerciseSubmitForm.tsx
│   │   ├── ExerciseFeedback.tsx
│   │   └── ExerciseHistory.tsx
│   │
│   ├── flashcards/components/
│   │   ├── FlashcardCard.tsx
│   │   ├── FlashcardReview.tsx
│   │   ├── FlashcardProgress.tsx
│   │   ├── FlashcardDeck.tsx
│   │   └── FlashcardStats.tsx
│   │
│   ├── notes/components/
│   │   ├── NoteEditor.tsx
│   │   └── NoteList.tsx
│   │
│   ├── bookmarks/components/
│   │   ├── BookmarkButton.tsx
│   │   └── BookmarkList.tsx
│   │
│   ├── ai-tutor/components/
│   │   ├── ChatWindow.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── ChatInput.tsx
│   │   ├── ConversationList.tsx
│   │   └── ContextSelector.tsx
│   │
│   ├── ai-services/components/
│   │   ├── SummarizePanel.tsx
│   │   ├── GenerateQuizButton.tsx
│   │   ├── AIFeedbackDisplay.tsx
│   │   └── GenerateFlashcardsButton.tsx
│   │
│   └── progress/components/
│       ├── ProgressOverview.tsx
│       └── CourseProgressCard.tsx
│
├── pages/
│   ├── public/
│   │   ├── LandingPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── auth/
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── ForgotPasswordPage.tsx
│   ├── app/
│   │   ├── DashboardPage.tsx
│   │   ├── CoursesPage.tsx
│   │   ├── CourseDetailPage.tsx
│   │   ├── CreateCoursePage.tsx
│   │   ├── EditCoursePage.tsx
│   │   ├── MyCoursesPage.tsx
│   │   ├── LearningPage.tsx
│   │   ├── LessonDetailPage.tsx
│   │   ├── QuizPage.tsx
│   │   ├── ExerciseDetailPage.tsx
│   │   ├── FlashcardReviewPage.tsx
│   │   ├── FlashcardsByLessonPage.tsx
│   │   ├── FlashcardProgressPage.tsx
│   │   ├── BookmarksPage.tsx
│   │   ├── AITutorPage.tsx
│   │   ├── ProgressPage.tsx
│   │   └── ProfilePage.tsx
│   └── admin/
│       ├── AdminDashboardPage.tsx
│       ├── UsersPage.tsx
│       ├── CategoriesPage.tsx
│       └── AllCoursesPage.tsx
```

---

*Version: 3.0 - Updated: 2026-03-01*
*48 Components, 31 Pages, Full Feature Set*
