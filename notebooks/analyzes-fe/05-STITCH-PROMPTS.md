# Stitch UI Prompt - AI Tutor E-Learning Platform

## SINGLE COMPREHENSIVE PROMPT

```
Design a complete E-learning platform called "AI Tutor" with 27 screens. Premium, modern design with warm, approachable feel - NOT cold corporate or generic AI aesthetics.

═══════════════════════════════════════════════════════════════════════════════
COLOR PALETTE - Warm & Professional
═══════════════════════════════════════════════════════════════════════════════

Primary: #2563EB (Royal Blue) - trustworthy, educational
Secondary: #0891B2 (Teal) - fresh, modern
Accent: #F59E0B (Amber) - warm, encouraging, used for highlights & CTAs
Success: #059669 (Emerald) - achievements, completions
Error: #DC2626 (Red) - errors, warnings
Dark: #0F172A (Deep Navy) - text, headers
Light: #F8FAFC (Off-White) - backgrounds
Card: #FFFFFF (Pure White) - cards, elevated surfaces
Muted: #64748B (Slate Gray) - secondary text, placeholders
Border: #E2E8F0 (Light Gray) - subtle borders

Backgrounds: Clean white/light gray with subtle texture or very light geometric patterns
NO neon gradients, NO purple-pink-blue AI art style, NO dark mode as default

═══════════════════════════════════════════════════════════════════════════════
TYPOGRAPHY
═══════════════════════════════════════════════════════════════════════════════

Font: Inter or Plus Jakarta Sans
Headings: 600-700 weight, Deep Navy color
Body: 400-500 weight, Dark Slate color
Small: 400 weight, Muted Gray color

═══════════════════════════════════════════════════════════════════════════════
SCREEN INVENTORY (27 Screens)
═══════════════════════════════════════════════════════════════════════════════

PUBLIC (4):
1. Landing Page (/)
2. Login (/auth/login)
3. Register (/auth/register)
4. Forgot Password (/auth/forgot-password)

USER - DASHBOARD (1):
5. Dashboard (/app/dashboard)

USER - COURSES (5):
6. Course List (/app/courses)
7. Course Detail (/app/courses/:id)
8. Create Course (/app/courses/create)
9. Edit Course (/app/courses/:id/edit)
10. My Courses (/app/my-courses)

USER - LEARNING (2):
11. Learning Page (/app/learn/:courseId/lesson/:lessonId)
12. Lesson Detail (/app/lessons/:id)

USER - QUIZ (1):
13. Quiz Page (/app/quiz/:quizId)

USER - EXERCISES (2):
14. Exercise Detail (/app/exercises/:id)
15. Exercise Submit (/app/exercises/:id/submit)

USER - FLASHCARDS (3):
16. Flashcard Review (/app/flashcards) - Today's due cards
17. Flashcards by Lesson (/app/flashcards/:lessonId)
18. Flashcard Progress (/app/flashcards/progress)

USER - BOOKMARKS (1):
19. Bookmarks (/app/bookmarks)

USER - AI TUTOR (2):
20. AI Chat (/app/ai-tutor)
21. AI Conversation (/app/ai-tutor/:conversationId)

USER - PROGRESS (1):
22. Progress (/app/progress)

USER - PROFILE (1):
23. Profile (/app/profile)

ADMIN (4):
24. Admin Dashboard (/admin/dashboard)
25. User Management (/admin/users)
26. Category Management (/admin/categories)
27. All Courses (/admin/courses)

═══════════════════════════════════════════════════════════════════════════════
SCREEN 1: LANDING PAGE (/)
═══════════════════════════════════════════════════════════════════════════════

Layout: Single page scroll with sections

HEADER (sticky, white background, subtle shadow):
- Left: Logo "AI Tutor" with book + AI sparkle icon, Royal Blue
- Center: Navigation links (Features, Courses, Pricing) - clean hover underline
- Right: "Log in" text link, "Sign up" button (Royal Blue solid, rounded-full)

HERO SECTION:
- Background: Light cream (#FFFBF5) with subtle dot pattern
- Left column: Large heading "Learn Smarter, Not Harder" (Deep Navy), subheading "Personalized AI-powered learning that adapts to your pace", two CTAs: Primary "Get Started Free" (Amber, rounded-full), Secondary "Watch Demo" (outline)
- Right column: Illustration of student at laptop with friendly AI assistant character, soft shadows, modern flat illustration style
- Small trust badges below: "Trusted by 50,000+ learners" with avatar stack

FEATURES SECTION (white background):
- Section title "Why Choose AI Tutor?" centered
- 3 feature cards in row:
  * Card 1: Brain icon (Royal Blue), "AI-Powered Tutoring", "24/7 personalized help"
  * Card 2: Play icon (Teal), "Interactive Lessons", "Learn by doing, not just watching"
  * Card 3: Certificate icon (Amber), "Earn Certificates", "Industry-recognized credentials"
- Cards: White with soft shadow, rounded-xl (16px), hover lift effect

POPULAR COURSES SECTION (light gray background #F1F5F9):
- Section title "Popular Courses" with "View all →" link
- 4 course cards in grid (2 rows on desktop):
  * Card: White, rounded-xl, overflow hidden, shadow-sm
  * Top: Course thumbnail image (16:9), subtle gradient overlay at bottom
  * Content: Category pill (small, Royal Blue bg), Title (600 weight), Instructor name with avatar (small), Rating stars + count, Price (700 weight, Royal Blue or "Free" in Emerald)
  * Hover: Subtle scale (1.02), shadow increase

CTA SECTION (Royal Blue background):
- "Ready to Start Learning?" heading (white)
- "Join thousands of learners today" subtext
- "Create Free Account" button (Amber, rounded-full)

FOOTER (Deep Navy background):
- 4 columns: Brand + social icons, Learn links, Company links, Legal links
- Copyright at bottom
- All text in light colors

═══════════════════════════════════════════════════════════════════════════════
SCREEN 2: LOGIN PAGE (/auth/login)
═══════════════════════════════════════════════════════════════════════════════

Layout: Split screen 50/50

LEFT PANEL (Royal Blue background):
- Large "AI Tutor" logo (white)
- Abstract illustration of learning journey (dots connected by lines, books, graduation cap)
- "Welcome back!" text (white, large)
- "Continue your learning journey" subtext (light blue)

RIGHT PANEL (white):
- Centered form card (max-width 400px)
- "Log in" heading (Deep Navy)
- Email input (rounded-lg, border Gray, focus Royal Blue border)
- Password input with show/hide toggle
- "Remember me" checkbox + "Forgot password?" link (Royal Blue)
- "Log in" button (full width, Royal Blue, rounded-lg)
- Divider: "or continue with"
- Google button (outline, with Google icon)
- "Don't have an account? Sign up" link

═══════════════════════════════════════════════════════════════════════════════
SCREEN 3: REGISTER PAGE (/auth/register)
═══════════════════════════════════════════════════════════════════════════════

Same split layout as Login

LEFT PANEL: Same aesthetic, different illustration (person celebrating)
- "Join AI Tutor today!"

RIGHT PANEL:
- "Create account" heading
- Full name input
- Email input
- Password input with strength indicator (colored bar: red → yellow → green)
- Terms checkbox "I agree to Terms and Privacy Policy"
- "Create account" button (Royal Blue)
- Google signup option
- "Already have an account? Log in"

═══════════════════════════════════════════════════════════════════════════════
SCREEN 4: FORGOT PASSWORD (/auth/forgot-password)
═══════════════════════════════════════════════════════════════════════════════

Same split layout, smaller form

LEFT PANEL: Illustration of envelope with letter

RIGHT PANEL:
- "Reset your password" heading
- "Enter your email and we'll send you a reset link" subtext (Muted)
- Email input
- "Send reset link" button (Royal Blue)
- "← Back to login" link

SUCCESS STATE:
- Green checkmark icon (animated)
- "Check your email" heading
- "We sent a reset link to email@example.com"
- "Didn't receive it? Resend" link

═══════════════════════════════════════════════════════════════════════════════
SCREEN 5: APP SHELL - MAIN LAYOUT
═══════════════════════════════════════════════════════════════════════════════

SIDEBAR (fixed, 240px width, white background, right border):
- Top: Logo "AI Tutor" smaller version
- Navigation items (with icons, left aligned, 40px height each):
  * Dashboard (home icon) - active state: Royal Blue bg, white text
  * Courses (book icon)
  * My Learning (graduation cap icon)
  * Flashcards (layers icon)
  * Bookmarks (bookmark icon)
  * AI Tutor (sparkle icon)
  * Progress (bar-chart icon)
  * Profile (user icon)
- Bottom: Help & Support link, Logout button

TOP NAVBAR (sticky, white, subtle shadow):
- Left: Breadcrumb "Dashboard"
- Center: Search bar (rounded-full, gray background, search icon, placeholder "Search courses...")
- Right:
  * Notification bell icon with red dot badge
  * User avatar (circle, 36px) with dropdown arrow
  * Dropdown (on hover): Profile, Settings, Logout

MAIN CONTENT AREA:
- Background: Light gray (#F8FAFC)
- Padding: 24px
- Content varies by page

═══════════════════════════════════════════════════════════════════════════════
SCREEN 6: DASHBOARD (/app/dashboard)
═══════════════════════════════════════════════════════════════════════════════

WELCOME SECTION:
- "Good morning, Alex!" heading (time-based greeting)
- "You're making great progress. Keep it up!" subtext

STATS ROW (4 cards):
Card 1 - Courses in Progress:
- Book icon in Royal Blue circle
- "3" large number
- "Courses in progress" label

Card 2 - Lessons Completed:
- Check icon in Emerald circle
- "24" large number
- "Lessons completed" label

Card 3 - Hours Learned:
- Clock icon in Teal circle
- "12.5h" large number
- "Hours this week" label

Card 4 - Current Streak:
- Flame icon in Amber circle
- "7 days" large number
- "Learning streak 🔥" label

All cards: White, rounded-xl, shadow-sm, hover lift

CONTINUE LEARNING SECTION:
- Section title "Continue Learning"
- Horizontal scroll of 3 course cards:
  * Thumbnail (small, rounded-lg)
  * Course title
  * Progress bar (Royal Blue fill, gray track)
  * "Continue" button (outline, small)

RECOMMENDED COURSES:
- Section title "Recommended for You"
- Grid of 4 course cards (same style as landing page)

═══════════════════════════════════════════════════════════════════════════════
SCREEN 7: COURSE LIST (/app/courses)
═══════════════════════════════════════════════════════════════════════════════

PAGE HEADER:
- "All Courses" heading
- Breadcrumb: Home / Courses

FILTER BAR (sticky below navbar):
- Left: Category dropdown (All Categories, Programming, Design, Business...)
- Level dropdown (All Levels, Beginner, Intermediate, Advanced)
- Search input
- Right: Sort dropdown (Most Popular, Newest, Highest Rated)
- Active filters shown as removable pills

COURSE GRID:
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Course card:
  * Thumbnail (16:9 ratio)
  * Category pill (top left overlay)
  * Favorite heart icon (top right)
  * Title (truncates to 2 lines)
  * Instructor: avatar + name
  * Rating: stars + "(123)"
  * Students: user icon + "1.2k students"
  * Duration: clock icon + "10 hours"
  * Level badge: Beginner/Intermediate/Advanced

PAGINATION:
- Centered, numbered pages with prev/next arrows

═══════════════════════════════════════════════════════════════════════════════
SCREEN 8: COURSE DETAIL (/app/courses/:id)
═══════════════════════════════════════════════════════════════════════════════

HERO SECTION (gradient background based on category):
- Course title (large, white)
- Instructor info: avatar, name, "Instructor"
- Rating, students, duration, last updated
- Breadcrumb

TWO COLUMN LAYOUT:

LEFT COLUMN (2/3 width):

What you'll learn:
- Grid of 6 items with check icons

Course content:
- Accordion of modules:
  * Module header: "Module 1: Introduction" + lesson count + duration
  * Expanded: List of lessons with play icon, title, duration, preview badge
  * Completed lessons show checkmark

Description:
- Rich text with images

RIGHT COLUMN (1/3 width, sticky):
- Course card:
  * Thumbnail
  * Price (large): "$49.99" or "Free"
  * "Enroll Now" button (Amber, full width, rounded-lg)
  * "Add to Wishlist" button (outline)
- Course includes list:
  * 10 hours of video
  * 5 articles
  * 20 downloadable resources
  * Certificate of completion
  * Full lifetime access

═══════════════════════════════════════════════════════════════════════════════
SCREEN 9-10: CREATE/EDIT COURSE (/app/courses/create, /app/courses/:id/edit)
═══════════════════════════════════════════════════════════════════════════════

PAGE HEADER:
- "Create New Course" or "Edit Course" heading
- Breadcrumb

FORM (two columns):

LEFT COLUMN:
- Title input (required)
- Description textarea (required, markdown support)
- Category dropdown (required)
- Level dropdown: Beginner/Intermediate/Advanced
- Duration input (hours)

RIGHT COLUMN:
- Thumbnail upload area (drag & drop, image preview)
- Price input (or "Free" toggle)
- Publish toggle (draft by default)

ACTIONS:
- "Save as Draft" button (outline)
- "Publish" button (Royal Blue, primary)

═══════════════════════════════════════════════════════════════════════════════
SCREEN 11: MY COURSES (/app/my-courses)
═══════════════════════════════════════════════════════════════════════════════

PAGE HEADER:
- "My Learning" heading
- Stats: "3 in progress • 5 completed"

TABS:
- All | In Progress | Completed
- Active tab: Royal Blue underline

COURSE LIST:
Card style (horizontal):
- Left: Thumbnail (120x80px, rounded-lg)
- Middle:
  * Course title
  * Instructor name
  * Progress bar with percentage
  * "12 of 24 lessons completed"
- Right:
  * "Continue" button (primary) OR "View Certificate" (if completed)
  * Completed: Green checkmark badge

EMPTY STATE:
- Illustration of empty box
- "No courses yet"
- "Browse courses" button

═══════════════════════════════════════════════════════════════════════════════
SCREEN 12: LEARNING PAGE (/app/learn/:courseId/lesson/:lessonId)
═══════════════════════════════════════════════════════════════════════════════

TWO COLUMN LAYOUT:

LEFT COLUMN (Video + Content):

VIDEO PLAYER:
- 16:9 aspect ratio, black background
- Custom controls (appear on hover):
  * Play/Pause (center large)
  * Progress bar with preview thumbnail
  * Volume slider
  * Settings (quality, speed)
  * Fullscreen
  * Picture-in-picture
- Lesson title below player

LESSON CONTENT:
- Description text (markdown)
- Resources download links
- Notes section (expandable)
- AI Summarize button (sparkle icon)

NAVIGATION:
- "Previous Lesson" "Mark Complete" "Next Lesson" buttons

RIGHT COLUMN (Course Sidebar, 320px):

COURSE INFO:
- Course title
- Progress: "45% complete" with progress bar

MODULE ACCORDION:
- Module 1 (expanded):
  * Lesson 1: Introduction ✓ (completed, green check)
  * Lesson 2: Getting Started ▶ (current, Royal Blue highlight)
  * Lesson 3: Basics (locked or unlocked)
- Module 2 (collapsed):
  * 5 lessons • 45 min

═══════════════════════════════════════════════════════════════════════════════
SCREEN 13: LESSON DETAIL (/app/lessons/:id)
═══════════════════════════════════════════════════════════════════════════════

PAGE HEADER:
- Lesson title
- Breadcrumb: Course > Module > Lesson
- Duration, status badge

CONTENT AREA:
- Video embed (if available)
- Rich text content (markdown)
- Attachments section

SIDEBAR:
- Related exercises count
- Related flashcards count
- Related quiz (if any)
- AI Tutor chat button

═══════════════════════════════════════════════════════════════════════════════
SCREEN 14: QUIZ PAGE (/app/quiz/:quizId)
═══════════════════════════════════════════════════════════════════════════════

QUIZ HEADER:
- Quiz title
- Timer (circular progress): "14:30 remaining"
- Question indicator: "Question 3 of 10"

QUESTION CARD (centered, max-width 700px):
- Question text (large, bold)
- "Select one answer" or "Select all that apply"
- 4 option cards:
  * Letter badge (A, B, C, D)
  * Answer text
  * Hover: light blue background
  * Selected: Royal Blue border, checkmark

NAVIGATION:
- Progress dots (10 dots, answered = filled, current = ring)
- "Previous" "Next" "Submit Quiz" buttons

RESULT VIEW (after submit):
- Score display: "85%" in large circle
- Pass/Fail message
- Correct/Wrong breakdown
- "Review Answers" "Retry Quiz" "Continue" buttons

═══════════════════════════════════════════════════════════════════════════════
SCREEN 15-16: EXERCISE DETAIL & SUBMIT (/app/exercises/:id)
═══════════════════════════════════════════════════════════════════════════════

EXERCISE DETAIL:

PAGE HEADER:
- Exercise title
- Lesson breadcrumb
- Max score, attempts used

CONTENT:
- Description (markdown)
- Requirements list
- Rubric/criteria table

SUBMISSION AREA (tabbed):
- Text answer tab (for text exercises)
- Code editor tab (for code exercises, with syntax highlighting)
- File upload tab (for file exercises)

MY SUBMISSIONS:
- List of previous submissions with scores
- Click to view feedback

SUBMIT PAGE:

FORM:
- Code editor (Monaco-style) or text area
- File upload drag & drop
- "Submit" button

AFTER SUBMIT:
- "Grading..." status with spinner
- AI feedback card when complete:
  * Score: 8.5/10
  * Overall comment
  * Strengths list
  * Improvements list
  * Suggested solution (collapsible)

═══════════════════════════════════════════════════════════════════════════════
SCREEN 17-19: FLASHCARD PAGES
═══════════════════════════════════════════════════════════════════════════════

FLASHCARD REVIEW (/app/flashcards) - Today's Due Cards:

HEADER:
- "Today's Review" title
- Due count badge: "15 cards due"
- Lesson filter dropdown

CARD AREA (centered, swipeable):
- Large flip card (300x200px)
- Front: Question/prompt text
- Back: Answer (revealed on click/flip)
- Hint button (small, below card)
- Navigation: Previous | Flip | Next

RATING BUTTONS (after revealing answer):
- 😵 0 - Complete blackout
- 😕 1 - Incorrect, recognized
- 😔 2 - Incorrect, easy recall
- 🤔 3 - Correct, difficult
- 😊 4 - Correct, hesitated
- 😎 5 - Perfect response

PROGRESS INDICATOR:
- "Card 5 of 15"
- Circular progress

FLASHCARDS BY LESSON (/app/flashcards/:lessonId):

HEADER:
- Lesson title
- Total cards count
- "Start Review" button (primary)

CARD LIST:
- Table with columns: Front (preview), Status, Next Review
- Click row to edit/view
- Bulk select for review

FLASHCARD PROGRESS (/app/flashcards/progress):

STATS CARDS:
- Total Cards: 150
- Mastered: 45 (Emerald)
- Learning: 75 (Amber)
- New: 30 (Gray)

CHART:
- Line chart: Reviews over time (7 days)
- Bar chart: Cards by interval

RETENTION STATS:
- Average retention rate: 85%
- Average ease factor: 2.4

═══════════════════════════════════════════════════════════════════════════════
SCREEN 20: BOOKMARKS (/app/bookmarks)
═══════════════════════════════════════════════════════════════════════════════

PAGE HEADER:
- "My Bookmarks" title
- Count: "12 lessons saved"
- Filter by course dropdown

BOOKMARK LIST:
Card style (horizontal):
- Left: Lesson icon or thumbnail
- Middle:
  * Lesson title
  * Course title (muted)
  * Date bookmarked
  * Note preview (if any)
- Right:
  * "Go to Lesson" button
  * Remove bookmark (trash icon)

EMPTY STATE:
- Bookmark icon (large, muted)
- "No bookmarks yet"
- "Save lessons for quick access"

═══════════════════════════════════════════════════════════════════════════════
SCREEN 21-22: AI TUTOR CHAT (/app/ai-tutor)
═══════════════════════════════════════════════════════════════════════════════

CONVERSATION LIST (left sidebar, 280px):

HEADER:
- "AI Tutor" title
- "New Chat" button (primary, small)

SEARCH:
- Search conversations input

CONVERSATION LIST:
- Each item:
  * Title (truncated)
  * Preview message
  * Timestamp
  * Active: Royal Blue background

CHAT AREA (main content):

CHAT HEADER:
- "AI Tutor" title with sparkle icon
- Course context dropdown: "React Basics" (optional context)
- Model indicator: "Claude Sonnet"
- Clear chat button

CHAT MESSAGES (scrollable, light gray background):

AI MESSAGE (left-aligned):
- Avatar: AI icon in Royal Blue circle
- Message bubble: white, rounded-2xl, left-aligned tail
- Content: Markdown supported (code blocks, lists, bold)
- Timestamp: "2:30 PM"
- Copy button (appears on hover)

USER MESSAGE (right-aligned):
- Avatar: User photo
- Message bubble: Royal Blue, rounded-2xl, right-aligned tail, white text
- Timestamp

TYPING INDICATOR:
- Three animated dots in AI bubble

QUICK SUGGESTIONS (below chat, when new):
- Horizontal pills: "Explain this concept" "Give me an example" "Quiz me" "Summarize"

INPUT AREA (sticky bottom):
- Text input (auto-grow, rounded-2xl)
- Attachment icon (left) - for code snippets
- Send button (right, Royal Blue, appears when text entered)

═══════════════════════════════════════════════════════════════════════════════
SCREEN 23: PROGRESS (/app/progress)
═══════════════════════════════════════════════════════════════════════════════

PAGE HEADER:
- "My Progress" title
- Period filter: Week | Month | Year

OVERVIEW CARDS (4 in row):
- Courses Completed: 5
- Lessons Completed: 45
- Hours Learned: 25.5
- Current Streak: 7 days 🔥

CHARTS SECTION:

Activity Chart:
- Bar chart: Daily activity (lessons completed)
- X-axis: Days of week
- Y-axis: Count

Progress Over Time:
- Line chart: Cumulative progress
- Multiple lines: Lessons, Quizzes, Flashcards

CATEGORY BREAKDOWN:
- Pie chart: Time by category
- Programming: 40%
- Design: 30%
- Business: 20%
- Other: 10%

ACHIEVEMENTS:
- Badge grid with earned/locked states
- "First Course" ✓
- "7-Day Streak" ✓
- "Quiz Master" (locked)
- "Flashcard Pro" (locked)

═══════════════════════════════════════════════════════════════════════════════
SCREEN 24: PROFILE (/app/profile)
═══════════════════════════════════════════════════════════════════════════════

TWO COLUMN LAYOUT:

LEFT COLUMN (Sidebar navigation):
- Profile (active)
- Settings
- Security
- Help

RIGHT COLUMN:

PROFILE HEADER:
- Large avatar (120px) with "Change photo" button overlay
- Name (large)
- Email (muted)
- Member since date

STATS ROW:
- 3 stat cards: Courses enrolled, Hours learned, Certificates earned

EDIT PROFILE FORM:
- Full name input
- Email input (readonly, with "Change email" link)
- Bio textarea
- "Save Changes" button

═══════════════════════════════════════════════════════════════════════════════
SCREENS 25-27: ADMIN PAGES
═══════════════════════════════════════════════════════════════════════════════

ADMIN LAYOUT:
- Separate sidebar (darker theme)
- Admin-specific navigation
- Back to App link

ADMIN DASHBOARD (/admin/dashboard):

STATS CARDS:
- Total Users: 1,250 (+15 today)
- Total Courses: 45 (32 published)
- Total Enrollments: 3,500
- Active Now: 45

CHARTS:
- User growth line chart
- Enrollment growth bar chart

RECENT ACTIVITY FEED:
- User registered
- Course published
- New enrollment

USER MANAGEMENT (/admin/users):

SEARCH & FILTER:
- Search input
- Role filter: All | User | Admin
- Status filter: Active | Inactive

USER TABLE:
| Avatar | Name | Email | Role | Courses | Joined | Actions |
- Actions: View | Edit Role | Deactivate

CATEGORY MANAGEMENT (/admin/categories):

CATEGORY LIST:
- Table: Name | Slug | Courses Count | Actions
- Add Category button (top right)
- Edit/Delete actions

ALL COURSES (/admin/courses):

FILTER:
- Status: All | Published | Draft
- Category filter

COURSE TABLE:
| Thumbnail | Title | Creator | Category | Status | Enrolled | Actions |
- Actions: View | Publish/Unpublish | Delete

═══════════════════════════════════════════════════════════════════════════════
COMPONENT SPECIFICATIONS
═══════════════════════════════════════════════════════════════════════════════

BUTTONS:
- Primary: Royal Blue bg, white text, rounded-lg, hover: darker blue
- Secondary: Amber bg, Deep Navy text, rounded-lg
- Outline: White bg, Royal Blue border and text, rounded-lg
- Ghost: Transparent, Royal Blue text, hover: light blue bg
- Danger: Red bg, white text
- Sizes: sm (32px h), md (40px h), lg (48px h)
- All buttons: 8px horizontal padding minimum, transition 150ms

INPUTS:
- Border: 1px Gray
- Border radius: lg (8px)
- Height: 40px default
- Focus: Royal Blue border 2px, subtle shadow
- Error: Red border, error message below
- Labels above input, 500 weight, small

CARDS:
- Background: White
- Border radius: xl (16px)
- Shadow: sm (subtle)
- Padding: 16-24px
- Hover: shadow md, slight lift

AVATARS:
- Circle
- Sizes: xs (24px), sm (32px), md (40px), lg (48px), xl (64px)
- Default: Initials on colored background

BADGES/PILLS:
- Rounded-full
- Small padding: 4px 8px
- Font size: xs (12px)
- Colors match context

PROGRESS BARS:
- Height: 8px
- Track: Light Gray
- Fill: Royal Blue (or context color)
- Border radius: full (rounded)
- Animated fill on load

TOAST NOTIFICATIONS:
- Top-right position
- Icons: success (green check), error (red x), warning (amber !), info (blue i)
- Auto-dismiss after 5 seconds
- Slide-in animation

MODALS:
- Centered
- Backdrop: semi-transparent black
- Card: white, rounded-xl, shadow-xl
- Close button (x) top right
- Slide-up animation

═══════════════════════════════════════════════════════════════════════════════
INTERACTIONS & ANIMATIONS
═══════════════════════════════════════════════════════════════════════════════

- Hover states: 150ms ease transition
- Button press: scale(0.98)
- Page transitions: fade 200ms
- Loading: skeleton screens with shimmer
- Success actions: subtle checkmark pop animation
- Card hover: translateY(-2px), shadow increase
- Dropdown: slide down 150ms
- Modal: fade in + slide up 200ms
- Toast: slide in from right 200ms
- Flashcard flip: 3D rotate animation

═══════════════════════════════════════════════════════════════════════════════
RESPONSIVE BREAKPOINTS
═══════════════════════════════════════════════════════════════════════════════

Mobile (<640px):
- Sidebar: Hidden, hamburger menu
- Bottom navigation bar (Dashboard, Courses, AI Tutor, Profile)
- Cards: Full width
- Forms: Full width
- Chat: Full screen

Tablet (640px-1024px):
- Sidebar: Collapsed (icons only, 64px)
- Hover to expand
- Cards: 2 columns

Desktop (>1024px):
- Full sidebar (240px)
- Cards: 3-4 columns

═══════════════════════════════════════════════════════════════════════════════
TECH STACK NOTES
═══════════════════════════════════════════════════════════════════════════════

- React 19 with TypeScript
- Tailwind CSS 4 for styling
- shadcn/ui components
- React Router 7 for navigation
- React Query 5 for data fetching
- Zustand for client state
- Code editor: Monaco Editor for code exercises
- Charts: Recharts for progress visualization
- Markdown: react-markdown for content rendering

═══════════════════════════════════════════════════════════════════════════════

Design with attention to detail. Every element should feel intentional and polished. Use consistent spacing (8px grid system). Prioritize readability and usability. Make it feel like a premium product worth paying for.
```

---

*Version: 4.0 - Updated: 2026-03-01*
*27 Screens - Synced with 00-FE-OVERVIEW.md, 01-UI-SPECIFICATION.md, 03-ROUTING.md*
