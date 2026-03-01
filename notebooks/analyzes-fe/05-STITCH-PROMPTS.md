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
13. Quiz Page (/app/quiz/:quizId) - Includes result view

USER - EXERCISES (2):
14. Exercise Detail (/app/exercises/:id) - Includes submission list
15. Exercise Submit (/app/exercises/:id/submit) - Includes feedback view

USER - FLASHCARDS (3):
16. Flashcard Review (/app/flashcards)
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

Note: Các màn hình con (Notes, Quiz Result, Submission Detail, AI Summaries) được tích hợp vào màn hình Detail tương ứng để tối ưu UX.

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

NOTES PANEL (collapsible, integrated):
- Toggle button: "My Notes" with edit icon
- Notes list for current lesson:
  * Each note: content preview, timestamp (if video note), edit/delete
- Add note button
- Note editor (inline or modal):
  * Textarea
  * Timestamp picker (auto-capture current video time)
  * Save/Cancel

AI SUMMARY SECTION (collapsible):
- "AI Summary" header with sparkle icon
- "Generate Summary" button (if not generated)
- Summary content:
  * Key points list
  * Keywords tags
- "Regenerate" button

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

EXERCISES SECTION (integrated):
- Section header: "Exercises" with count badge
- Exercise cards (compact list):
  * Title, type icon, max score
  * Status: Not Started | Submitted | Graded
  * "Start" | "View" button
- "View All Exercises" link (if more than 3)

FLASHCARDS SECTION (integrated):
- Section header: "Flashcards" with count badge
- Flashcard preview (first 3):
  * Front text preview
  * Review status
- "Review Flashcards" button

AI SUMMARY SECTION (integrated):
- Section header: "AI Summary" with sparkle icon
- Collapsible summary content
- Key points list
- Keywords tags

SIDEBAR:
- Related quiz (if any)
- AI Tutor chat button
- Bookmark button

═══════════════════════════════════════════════════════════════════════════════
SCREEN 14: QUIZ PAGE (/app/quiz/:quizId)
═══════════════════════════════════════════════════════════════════════════════

TWO COLUMN LAYOUT: Main content (left) + Question Navigator (right sidebar)

═══════════════════════════════════════════════════════════════════════════════
TOP HEADER (sticky, white, shadow-sm)
═══════════════════════════════════════════════════════════════════════════════

LEFT SIDE:
- Quiz title: "React Basics Quiz"
- Breadcrumb: Course > Lesson > Quiz

CENTER:
- Progress bar (thin, Royal Blue fill): shows overall completion
- Text: "Question 3 of 10"

RIGHT SIDE:
- Timer (prominent, in card):
  * Circular countdown ring (Amber when < 2 min, Red when < 1 min)
  * Time display: "14:30"
  * Label: "remaining"
- Pause button (ghost, pause icon) - if allowed

═══════════════════════════════════════════════════════════════════════════════
LEFT COLUMN: QUESTION AREA (main content)
═══════════════════════════════════════════════════════════════════════════════

QUESTION CARD (white, rounded-xl, shadow-sm, max-width 700px):

QUESTION HEADER:
- Question number badge: "Question 3" (Royal Blue bg, white text)
- Question type badge: "Single Choice" | "Multiple Choice" (muted)
- Flag button (ghost, flag icon):
  * Unflagged: Gray outline flag
  * Flagged: Amber filled flag with pulse animation
- Points: "1 point"

QUESTION TEXT:
- Large text (18px, 600 weight, Deep Navy)
- Supports markdown (bold, italic, code inline)
- Code blocks (if any): dark background, syntax highlighting

QUESTION MEDIA (optional):
- Image: max-width 100%, rounded-lg
- Code snippet: monospace, syntax highlighted

ANSWER OPTIONS:

For Single Choice:
- Radio-style selection
- Each option card:
  * Left: Circular radio indicator (empty circle or filled Royal Blue)
  * Letter badge: A, B, C, D (rounded-full, 32px)
  * Answer text (500 weight)
  * Hover: Light blue background (#EFF6FF)
  * Selected: Royal Blue border (2px), light blue bg, checkmark in radio

For Multiple Choice:
- Checkbox-style selection
- Each option card:
  * Left: Square checkbox indicator
  * Letter badge: A, B, C, D
  * Answer text
  * Selected: Royal Blue border, checkmark in checkbox
- Note text: "Select all that apply"

═══════════════════════════════════════════════════════════════════════════════
BOTTOM NAVIGATION BAR (sticky, white, shadow-top)
═══════════════════════════════════════════════════════════════════════════════

LEFT:
- "Previous" button (outline, chevron-left icon)
- Disabled on first question

CENTER:
- Question indicator pills (scrollable on mobile):
  * Dot for each question
  * States:
    - Unanswered: Gray outline
    - Answered: Royal Blue filled
    - Flagged: Amber filled with flag icon
    - Current: Royal Blue ring (thicker border)

RIGHT:
- "Flag for Review" button (ghost, flag icon, Amber when active)
- "Next" button (primary, chevron-right icon)
- "Submit Quiz" button (primary, appears when all answered or on last question)

═══════════════════════════════════════════════════════════════════════════════
RIGHT SIDEBAR: QUESTION NAVIGATOR (280px, sticky)
═══════════════════════════════════════════════════════════════════════════════

HEADER:
- "Questions" title
- Stats badges:
  * Answered: "5/10" (Royal Blue)
  * Flagged: "2" (Amber)
  * Remaining: "5" (Gray)

QUESTION GRID (5 columns):
- Each cell is a button (40x40px, rounded-lg):
  * Number: 1, 2, 3, 4, 5...
  * States:
    - Unanswered: White bg, Gray border, Gray text
    - Answered: Royal Blue bg, white text
    - Flagged: Amber bg, flag icon, white text
    - Current: Royal Blue border (3px), white bg, Royal Blue text
    - Answered + Flagged: Royal Blue bg, Amber flag icon corner
  * Hover: Slight scale, shadow
  * Click: Jump to question

LEGEND (bottom of sidebar):
- Mini legend showing states:
  * Circle (Gray): Not answered
  * Circle (Blue): Answered
  * Circle (Amber) + Flag: Flagged

SUBMIT SECTION:
- "Submit Quiz" button (full width, primary, Amber)
- Confirmation modal on click:
  * Title: "Submit Quiz?"
  * Message: "You have answered 8/10 questions. 2 questions are flagged."
  * Warning if unanswered: "⚠️ You have 2 unanswered questions"
  * Buttons: "Continue Editing" (ghost) | "Submit" (primary)

═══════════════════════════════════════════════════════════════════════════════
QUIZ RESULT VIEW (shown after submit, same page)
═══════════════════════════════════════════════════════════════════════════════

RESULT HEADER:
- Quiz title
- Completion date

SCORE DISPLAY (centered):
- Large circular progress: "85%" in center
- Pass/Fail badge (Emerald for pass, Red for fail)
- "You passed!" or "Keep practicing!" message

STATS ROW:
- Correct: 8/10 (Emerald)
- Wrong: 2/10 (Red)
- Time taken: "5:30"
- Average time per question: "33s"

ANSWER REVIEW (accordion):
- Each question card:
  * Question number and text
  * Your answer (with correct/wrong indicator)
  * Correct answer (shown if wrong)
  * Explanation (expandable)

ACTIONS:
- "Retry Quiz" button (outline)
- "Continue Course" button (primary)
- "Review Lesson" button (ghost)

═══════════════════════════════════════════════════════════════════════════════
MODAL: TIME'S UP WARNING
═══════════════════════════════════════════════════════════════════════════════

Triggered when 1 minute remaining:
- Modal overlay (can be dismissed)
- Warning icon (Amber)
- "1 minute remaining!" heading
- "Please complete your answers soon."
- "Continue" button

Triggered when time's up:
- Modal overlay (cannot be dismissed)
- Stop icon (Red)
- "Time's up!" heading
- "Your quiz has been automatically submitted."
- "View Results" button

═══════════════════════════════════════════════════════════════════════════════
MODAL: QUIT QUIZ CONFIRMATION
═══════════════════════════════════════════════════════════════════════════════

Triggered when user tries to navigate away:
- Warning icon (Amber)
- "Leave Quiz?" heading
- "Your progress will be lost if you leave now."
- Buttons: "Stay" (primary) | "Leave" (outline, Red text)

═══════════════════════════════════════════════════════════════════════════════
MOBILE LAYOUT (<640px)
═══════════════════════════════════════════════════════════════════════════════

- Right sidebar: Hidden by default
- "Questions" floating button (bottom-right, FAB):
  * Shows count: "5/10"
  * Tap to open question navigator as bottom sheet
- Bottom navigation: Full width, stacked buttons
- Question indicator: Horizontal scroll dots

═══════════════════════════════════════════════════════════════════════════════
SCREEN 15: EXERCISE DETAIL (/app/exercises/:id)
═══════════════════════════════════════════════════════════════════════════════

PAGE HEADER:
- Exercise title
- Lesson breadcrumb
- Type badge: Text | Code | File | Multiple Choice
- Max score, attempts used

TWO COLUMN LAYOUT:

LEFT COLUMN (2/3):
DESCRIPTION:
- Rich text description (markdown)
- Requirements list with check icons
- Rubric/criteria table

INSTRUCTIONS:
- Step-by-step guide
- Code examples (if code exercise)
- File format requirements (if file upload)

RIGHT COLUMN (1/3, sticky):
SUBMISSION STATUS CARD:
- Status: Not Started | In Progress | Submitted | Graded
- Score (if graded): "8.5/10"
- Attempts remaining

ACTIONS:
- "Start Exercise" button (primary)
- "View My Submissions" button (outline)

MY SUBMISSIONS SECTION (integrated, collapsible):
- Section header: "My Submissions" with count
- List of submissions:
  * Attempt number
  * Submitted date
  * Status badge
  * Score (if graded)
  * Click to expand details
- Submission detail expansion:
  * Your answer (code viewer / text / file link)
  * AI Feedback (if graded):
    - Overall comment
    - Strengths list (Emerald icons)
    - Improvements list (Amber icons)
    - Suggestions
  * Actions: "Try Again" (if attempts remaining)

═══════════════════════════════════════════════════════════════════════════════
SCREEN 16: EXERCISE SUBMIT (/app/exercises/:id/submit)
═══════════════════════════════════════════════════════════════════════════════

PAGE HEADER:
- Exercise title
- Attempt number: "Attempt 2 of 3"

SUBMISSION FORM:

TEXT EXERCISE:
- Large textarea (auto-grow)
- Character count
- Formatting toolbar (bold, italic, lists)

CODE EXERCISE:
- Monaco-style code editor
- Language selector dropdown
- Line numbers
- Syntax highlighting
- Run/Preview button (optional)

FILE UPLOAD:
- Drag & drop zone (dashed border)
- Accepted formats list
- Max file size: "10MB"
- Uploaded file preview with remove button

MULTIPLE CHOICE:
- Question cards with radio/checkbox
- Navigation between questions

ACTIONS BAR (sticky bottom):
- Left: "Save Draft" button (ghost)
- Right: "Submit" button (primary, Amber)

AFTER SUBMIT (same page):
- Loading state: "Submitting..." with spinner
- Grading state: "AI is grading your submission..." with progress
- Result displayed inline:
  * Score card: "8.5/10" with circular progress
  * AI Feedback card:
    - Overall comment section
    - Strengths list (with thumbs up icons, Emerald)
    - Improvements list (with lightbulb icons, Amber)
    - Suggested solution (expandable)
  * Actions: "Try Again" | "Continue Course"

═══════════════════════════════════════════════════════════════════════════════
SCREENS 17-19: FLASHCARD PAGES
═══════════════════════════════════════════════════════════════════════════════

SCREEN 17: FLASHCARD REVIEW (/app/flashcards) - Today's Due Cards

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

SCREEN 18: FLASHCARDS BY LESSON (/app/flashcards/:lessonId)

HEADER:
- Lesson title
- Total cards count
- "Start Review" button (primary)

CARD LIST:
- Table with columns: Front (preview), Status, Next Review
- Click row to edit/view
- Bulk select for review

SCREEN 19: FLASHCARD PROGRESS (/app/flashcards/progress)

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
SCREEN 21-22: AI TUTOR PAGES
═══════════════════════════════════════════════════════════════════════════════

SCREEN 21: AI CHAT - CONVERSATION LIST (/app/ai-tutor)

CONVERSATION LIST (left sidebar, 280px):

HEADER:
- "AI Tutor" title with sparkle icon
- "New Chat" button (primary, small)

SEARCH:
- Search conversations input

CONVERSATION LIST:
- Each item:
  * Title (truncated)
  * Preview message
  * Timestamp
  * Active: Royal Blue background

CHAT AREA (main content - new chat):

WELCOME SCREEN:
- Large AI Tutor logo with sparkle
- "How can I help you learn today?" heading
- Quick suggestion pills:
  * "Explain a concept"
  * "Help me practice"
  * "Quiz me on a topic"
  * "Summarize my notes"

COURSE CONTEXT SELECTOR:
- Dropdown: "Select a course for context (optional)"
- Shows enrolled courses

SCREEN 22: AI CONVERSATION (/app/ai-tutor/:conversationId)

CHAT HEADER:
- Conversation title (editable)
- Course context badge (if set): "React Basics"
- Model indicator: "Claude Sonnet"
- More options menu (rename, delete, clear)

CHAT MESSAGES (scrollable, light gray background):

AI MESSAGE (left-aligned):
- Avatar: AI icon in Royal Blue circle
- Message bubble: white, rounded-2xl, left-aligned tail
- Content: Markdown supported (code blocks, lists, bold)
- Timestamp: "2:30 PM"
- Copy button (appears on hover)
- Thumbs up/down buttons (for feedback)

USER MESSAGE (right-aligned):
- Avatar: User photo
- Message bubble: Royal Blue, rounded-2xl, right-aligned tail, white text
- Timestamp

TYPING INDICATOR:
- Three animated dots in AI bubble

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
- Separate sidebar (darker theme: Deep Navy background)
- Admin-specific navigation
- Back to App link

SCREEN 25: ADMIN DASHBOARD (/admin/dashboard)

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

SCREEN 26: USER MANAGEMENT (/admin/users)

SEARCH & FILTER:
- Search input
- Role filter: All | User | Admin
- Status filter: Active | Inactive

USER TABLE:
| Avatar | Name | Email | Role | Courses | Joined | Actions |
- Actions: View | Edit Role | Deactivate

SCREEN 27: CATEGORY MANAGEMENT (/admin/categories)

CATEGORY LIST:
- Table: Name | Slug | Courses Count | Actions
- Add Category button (top right)
- Edit/Delete actions

SCREEN 28: ALL COURSES (/admin/courses)

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

## SCREEN SUMMARY TABLE

| # | Screen | Route | Type | Notes |
|---|--------|-------|------|-------|
| 1 | Landing Page | `/` | Public | |
| 2 | Login | `/auth/login` | Public | |
| 3 | Register | `/auth/register` | Public | |
| 4 | Forgot Password | `/auth/forgot-password` | Public | |
| 5 | Dashboard | `/app/dashboard` | Protected | |
| 6 | Course List | `/app/courses` | Protected | |
| 7 | Course Detail | `/app/courses/:id` | Protected | |
| 8 | Create Course | `/app/courses/create` | Protected | |
| 9 | Edit Course | `/app/courses/:id/edit` | Protected | |
| 10 | My Courses | `/app/my-courses` | Protected | |
| 11 | Learning Page | `/app/learn/:courseId/lesson/:lessonId` | Protected | Includes Notes panel, AI Summary |
| 12 | Lesson Detail | `/app/lessons/:id` | Protected | Includes Exercises, Flashcards, AI Summary |
| 13 | Quiz Page | `/app/quiz/:quizId` | Protected | Includes Result view, Question Navigator, Flag |
| 14 | Exercise Detail | `/app/exercises/:id` | Protected | Includes Submission list with feedback |
| 15 | Exercise Submit | `/app/exercises/:id/submit` | Protected | Includes inline feedback |
| 16 | Flashcard Review | `/app/flashcards` | Protected | |
| 17 | Flashcards by Lesson | `/app/flashcards/:lessonId` | Protected | |
| 18 | Flashcard Progress | `/app/flashcards/progress` | Protected | |
| 19 | Bookmarks | `/app/bookmarks` | Protected | |
| 20 | AI Chat | `/app/ai-tutor` | Protected | |
| 21 | AI Conversation | `/app/ai-tutor/:conversationId` | Protected | |
| 22 | Progress | `/app/progress` | Protected | |
| 23 | Profile | `/app/profile` | Protected | |
| 24 | Admin Dashboard | `/admin/dashboard` | Admin | |
| 25 | User Management | `/admin/users` | Admin | |
| 26 | Category Management | `/admin/categories` | Admin | |
| 27 | All Courses | `/admin/courses` | Admin | |

---

*Version: 6.0 - Updated: 2026-03-01*
*27 Screens - Synced with 00-FE-OVERVIEW.md*
*Integrated: Quiz Result → Quiz Page, Notes → Learning Page, Submissions → Exercise Detail*
