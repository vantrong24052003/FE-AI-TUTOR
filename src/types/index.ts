// ============================================
// API Types
// ============================================
export interface APIResponse<T> {
  data: T
  message: string
  meta?: {
    page?: number
    limit?: number
    total?: number
  }
}

export interface APIError {
  message: string
  code: string
  status: number
  errors?: Record<string, string[]>
}

export interface PaginationParams {
  page?: number
  limit?: number
}

// ============================================
// User Types
// ============================================
export type UserRole = 'student'

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: UserRole
  createdAt: string
  updatedAt: string
}

// ============================================
// Course Types
// ============================================
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced'

export interface Course {
  id: string
  title: string
  description: string
  thumbnail: string
  instructor: Instructor
  category: Category
  level: CourseLevel
  duration: number
  lessonsCount: number
  enrollmentsCount: number
  rating: number
  reviewsCount: number
  price: number
  isEnrolled?: boolean
  progress?: number
}

export interface CourseDetail extends Course {
  curriculum: Module[]
}

export interface Instructor {
  id: string
  name: string
  avatar?: string
  bio?: string
}

export interface Category {
  id: string
  name: string
  slug: string
}

export interface Module {
  id: string
  title: string
  order: number
  lessons: Lesson[]
}

// ============================================
// Lesson Types
// ============================================
export type LessonType = 'video' | 'article' | 'quiz'

export interface Lesson {
  id: string
  title: string
  type: LessonType
  duration: number
  isCompleted?: boolean
  order: number
}

export interface LessonDetail extends Lesson {
  description: string
  videoUrl?: string
  content?: string
  moduleId: string
  prevLessonId?: string
  nextLessonId?: string
}

// ============================================
// Quiz Types
// ============================================
export interface Quiz {
  id: string
  title: string
  description: string
  timeLimit: number
  passingScore: number
  questions: Question[]
}

export type QuestionType = 'single' | 'multiple'

export interface Question {
  id: string
  text: string
  type: QuestionType
  options: QuestionOption[]
}

export interface QuestionOption {
  id: string
  text: string
}

export interface QuizAnswer {
  questionId: string
  selectedOptions: string[]
}

export interface QuizResult {
  id: string
  quizId: string
  score: number
  passed: boolean
  correctAnswers: number
  totalQuestions: number
  timeSpent: number
  completedAt: string
}

// ============================================
// Progress Types
// ============================================
export interface CourseProgress {
  courseId: string
  completedLessons: number
  totalLessons: number
  percentage: number
  lastAccessedAt: string
}

// ============================================
// Chat Types (AI Tutor)
// ============================================
export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  createdAt: string
}

export interface ChatSession {
  id: string
  messages: ChatMessage[]
}
