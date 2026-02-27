// App constants
export const APP_NAME = 'AI TUTOR'
export const APP_DESCRIPTION = 'Nền tảng học tập trực tuyến thông minh'

// API
export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'
export const API_TIMEOUT = 10000

// Pagination
export const DEFAULT_PAGE_SIZE = 10
export const MAX_PAGE_SIZE = 100

// Storage keys
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  USER: 'user',
  THEME: 'theme',
  SIDEBAR_COLLAPSED: 'sidebarCollapsed',
} as const

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  DASHBOARD: '/app/dashboard',
  COURSES: '/app/courses',
  COURSE_DETAIL: '/app/courses/:courseId',
  LEARNING: '/app/learn/:courseId',
  QUIZ: '/app/quiz/:quizId',
  PROFILE: '/app/profile',
  AI_TUTOR: '/app/ai-tutor',
} as const

// Course levels
export const COURSE_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
} as const

// Lesson types
export const LESSON_TYPES = {
  VIDEO: 'video',
  ARTICLE: 'article',
  QUIZ: 'quiz',
} as const

// User roles
export const USER_ROLES = {
  STUDENT: 'student',
} as const

// Quiz
export const QUIZ_PASSING_SCORE = 70
export const QUIZ_MAX_ATTEMPTS = 3
