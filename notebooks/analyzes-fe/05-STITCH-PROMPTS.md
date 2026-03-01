# Stitch UI Prompt - AI Tutor Platform (Premium v5.1)

## 0. THE VISION: "A PROFESSIONAL LEARNING OPERATING SYSTEM"
> **CRITICAL INSTRUCTION**: The UI must NOT look like a generic AI chatbot demo. It must feel like a **sophisticated, high-fidelity Productivity/Learning OS** with a **Unique Designer Identity**.
> - **Signature Identity**: Use a unique, custom-blended color palette (Deep Ink, Washed Mint, and Warm Bone). No basic Primary-Blue-600.
> - **Animation is the Soul**: Every interaction must have a **"Signature Velocity"**. Use Stiff-Spring animations (Stiffness: 400, Damping: 40) for a tactile, industrial feel.
> - **Cascade & Flow**: Elements must not just "appear"; they must cascade with staggered delays. AI responses must "flow" into structured cards with layout-shift animations.
> - **Generic AI Tropes**: ABSOLUTELY NO neon purple/blue glows, no 'Magic Sparkles'.
> - **Backgrounds**: Instead of plain white, use high-quality architectural background patterns (Subtle Dots, Cross-hatch, or Mesh Gradients overlaid with noise). Use **Floating Textures** that drift slowly (30s loop) in the background.

## 1. GLOBAL DESIGN TOKENS (Vibrant & Premium)

═══════════════════════════════════════════════════════════════════════════════
COLOR SYSTEM - "Deep Ink & Washed Mint" (Non-Generic Palette)
═══════════════════════════════════════════════════════════════════════════════

Ink (Base): HSL(222, 47%, 11%) - The foundation of professionalism.
Mint (Primary): HSL(160, 43%, 60%) - Used for interactive elements (Buttons, Sliders).
Bone (Surface): HSL(40, 20%, 97%) - Soft, non-glaring background.
Accent: HSL(20, 90%, 65%) (Soft Coral) - For precise notifications/alerts.
Glass (Overlay): rgba(255, 255, 255, 0.4) backdrop-blur(24px).

Gradients:
  - Surface: radial-gradient(at 0% 0%, HSL(160, 43%, 95%) 0%, transparent 50%), radial-gradient(at 100% 100%, HSL(222, 47%, 95%) 0%, transparent 50%)
  - Action: linear-gradient(135deg, HSL(160, 43%, 60%) 0%, HSL(180, 43%, 50%) 100%)

═══════════════════════════════════════════════════════════════════════════════
ANIMATION GUIDELINES (Framer Motion)
═══════════════════════════════════════════════════════════════════════════════

1. **Signature Spring**: All movement uses `type: "spring", stiffness: 400, damping: 40`. It should feel snappy, not floaty.
2. **Cascading Entrance**: Use `staggerChildren` (0.05s) for all list items and grid cards.
3. **Floating Textures**: Background SVG patterns must have a subtle `animate={{ x: [-10, 10], y: [-10, 10] }}` loop (30s duration) for an "alive" atmosphere.
4. **Segmented Indicators**: Tab transitions must use `layoutId` for a fluid sliding effect between modes.
5. **AI Flow**: When AI generates content, current view must push down with `layout` prop to make room for new "Knowledge Cards".

═══════════════════════════════════════════════════════════════════════════════
Main: 'Satoshi' (Display/Headings), 'Inter' (UI/Body), 'IBM Plex Mono' (Metadata/AI snippets)
System:
- Headings: `Satoshi` (-2% letter-spacing, 500-700 weight for a "Designer" edge).
- Body: `Inter` (150% line-height for maximum readability).
- AI/Metadata: `IBM Plex Mono` (80% opacity, 12px size for technical details).
- Support: Ensure all fonts have full Latin/Vietnamese character support.

## 2. SINGLE COMPREHENSIVE PROMPT

═══════════════════════════════════════════════════════════════════════════════
COLOR PALETTE - Warm & Professional
═══════════════════════════════════════════════════════════════════════════════

Primary: #60c9a6 (Washed Mint) - interactive elements, progress, main action.
Secondary: #1a2333 (Deep Ink) - foundation, headers, professional depth.
Accent: #f48c71 (Soft Coral) - precise alerts, focus points.
Surface: #fdfaf3 (Warm Bone) - the background "paper" layer.
Muted: #6b7280 (Slate Gray) - subtle metadata, supportive text.
Border: #e5e7eb - discrete boundaries.

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
SCREEN INVENTORY (20 Screens)
═══════════════════════════════════════════════════════════════════════════════

### 1. AUTHENTICATION & PUBLIC (2)
- **Landing Page**: Premium hero with mesh gradient, floating document 3D assets, and "Sign in with Google" as the primary entry.
- **Login Page**: Ultra-clean glassmorphism card. Single button: "Continue with Google".

### 2. CORE DASHBOARD & PROFILE (2)
- **User Dashboard**: Overview of recent docs, SRS due count, and quick upload dropzone.
- **Profile & Settings**: User profile, learning stats, and account preferences.

### 3. DOCUMENTS MODULE (4)
- **Documents List**: Grid of document cards with 3D tilt hover and status badges.
- **Document Detail (Main)**: The hub for a document. Tabs for Summary, Flashcards, Quizzes, and Notes.
- **Upload Document**: Drag-and-drop zone with fluid file-selection animations.
- **Processing Status**: Dynamic state-machine visualization (Extracting -> Chunking -> Embedding -> Ready).

### 4. LEARNING MODULE (5)
- **Learning Path View**: Interactive roadmap, visualizing connections between documents and concepts.
- **Lesson Progress**: Detailed lesson content view with AI-generated explanations.
- **Quiz Interface**: Gamified and flexible question-by-question UI.
- **Quiz Results**: Detailed score breakdown and explanation review.
- **Flashcard Review**: Spaced Repetition System (SRS) powered, 3D flip interface.

### 5. AI & SPECIALIZED TOOLS (3)
- **Flashcards Doc View**: Manage and generate flashcards for a specific document.
- **AI Tutor Chat**: RAG-enabled chat interface for asking questions about documents.
- **Homework Solver**: Progressive AI solving UI, showing step-by-step solutions (CoT).

### 6. ADMIN (4)
- **Admin Dashboard**: Overview of platform health, user activity, and system metrics.
- **User Management**: CRUD operations for user accounts and roles.
- **Document Management**: Admin view of all RAG documents and their processing status.
- **System Audit**: Security logs and platform activity history.

Note: Các màn hình con (Quiz Result, Document Summary, AI Summary) được tích hợp vào màn hình Detail tương ứng để tối ưu UX.

═══════════════════════════════════════════════════════════════════════════════
SCREEN 1: LANDING PAGE (/)
═══════════════════════════════════════════════════════════════════════════════

Layout: Single page scroll with sections

HEADER (sticky, white background, subtle shadow):
- Left: Logo "AI Tutor" with book + AI sparkle icon, Royal Blue
- Center: Navigation links (Features, How It Works, Pricing) - clean hover underline
- Right: "Log in" text link, "Sign up with Google" button (white bg, Google icon, border)

HERO SECTION:
- Background: Light cream (#FFFBF5) with subtle dot pattern, creating a soft, inviting aesthetic.
- Left column: Large heading "Learn Smarter with AI" (Deep Navy), subheading "Upload your documents and let AI create flashcards, quizzes, and summaries automatically", two CTAs: Primary "Get Started Free" (Amber, rounded-full, with a subtle hover glow), Secondary "Watch Demo" (outline, with a smooth transition on hover)
- Right column: Illustration of student at laptop with friendly AI assistant character, documents transforming into flashcards and quizzes, soft shadows, modern flat illustration style, conveying a sense of effortless learning.
- Small trust badges below: "Trusted by 10,000+ students" with avatar stack, building credibility.

FEATURES SECTION (white background):
- Section title "How AI Tutor Helps You Learn" centered
- 4 feature cards in row:
  * Card 1: Upload icon (Royal Blue), "Upload Documents", "PDF, DOCX supported"
  * Card 2: Brain icon (Teal), "AI Flashcards", "Auto-generated from your materials"
  * Card 3: Clipboard icon (Amber), "Smart Quizzes", "Test your knowledge instantly"
  * Card 4: Chat icon (Royal Blue), "Ask AI Tutor", "Ask questions about your documents"
- Cards: White with soft shadow, rounded-xl (16px), hover lift effect with a subtle 3D tilt, making them feel interactive and premium.

HOW IT WORKS SECTION (light gray background #F1F5F9):
- Section title "Simple 3-Step Process"
- 3 steps with numbers:
  * Step 1: "Upload" - Drag & drop your study materials, with an animated upload icon.
  * Step 2: "Process" - AI analyzes and creates learning content, with a subtle AI sparkle animation.
  * Step 3: "Learn" - Review flashcards, take quizzes, chat with AI, emphasizing active engagement.

CTA SECTION (Royal Blue background):
- "Ready to Start Learning?" heading (white)
- "Create your free account with Google" subtext
- "Sign up with Google" button (white, Google icon, rounded-full, with a satisfying click animation)

FOOTER (Deep Navy background):
- 4 columns: Brand + social icons, Features links, Company links, Legal links
- Copyright at bottom
- All text in light colors, maintaining a sophisticated and clean aesthetic.

═══════════════════════════════════════════════════════════════════════════════
SCREEN 2: LOGIN PAGE (/auth/login)
═══════════════════════════════════════════════════════════════════════════════

Layout: Split screen 50/50

LEFT PANEL (Royal Blue background):
- Large "AI Tutor" logo (white)
- Abstract illustration of learning journey (dots connected by lines, documents, AI brain), with subtle animated elements to convey dynamism.
- "Welcome back!" text (white, large)
- "Continue your learning journey" subtext (light blue)

RIGHT PANEL (white):
- Centered form card (max-width 400px), with soft shadows and rounded corners.
- "Log in" heading (Deep Navy)
- "Sign in with Google" button (full width, white bg, Google icon, border, rounded-lg, with a subtle hover effect) - Google OAuth 2.0 only. No email/password fields.

Note: Primary method is Google OAuth.

═══════════════════════════════════════════════════════════════════════════════
SCREEN 3: REGISTER PAGE (/auth/register)
═══════════════════════════════════════════════════════════════════════════════

Same split layout as Login

LEFT PANEL: Same aesthetic, different illustration (person celebrating with documents), conveying a sense of achievement and potential.
- "Join AI Tutor today!"

RIGHT PANEL:
- "Create account" heading
- "Sign up with Google" button (full width, white bg, Google icon, border, rounded-lg, with a subtle hover effect) - PRIMARY
- "Already have an account? Log in"

═══════════════════════════════════════════════════════════════════════════════
SCREEN 4: APP SHELL - MAIN LAYOUT
═══════════════════════════════════════════════════════════════════════════════

SIDEBAR (fixed, 240px width, white background, right border, with a subtle glassmorphism effect):
- Top: Logo "AI Tutor" smaller version
- Navigation items (with icons, left aligned, 40px height each):
  * Dashboard (home icon) - active state: Royal Blue bg, white text, with a smooth background transition.
  * Documents (file-text icon)
  * Flashcards (layers icon)
  * Bookmarks (bookmark icon)
  * AI Tutor (sparkle icon)
  * Notes (sticky-note icon)
  * Profile (user icon)
- Bottom: Help & Support link, Logout button

TOP NAVBAR (sticky, white, subtle shadow, with a slight glassmorphism blur):
- Left: Breadcrumb "Dashboard"
- Center: Search bar (rounded-full, gray background, search icon, placeholder "Search documents...", with a smooth expand on focus)
- Right:
  * Notification bell icon with red dot badge, animating on new notifications.
  * User avatar (circle, 36px) with dropdown arrow
  * Dropdown (on hover): Profile, Settings, Logout, with a subtle fade-in animation.

MAIN CONTENT AREA:
- Background: Light gray (#F8FAFC), providing a clean canvas.
- Padding: 24px
- Content varies by page, with smooth transitions between views.

═══════════════════════════════════════════════════════════════════════════════
SCREEN 5: DASHBOARD (/app/dashboard)
═══════════════════════════════════════════════════════════════════════════════

WELCOME SECTION:
- "Good morning, Alex!" heading (time-based greeting)
- "Ready to learn something new today?" subtext, with a subtle encouraging tone.

STATS ROW (4 cards):
Card 1 - Documents:
- File icon in Royal Blue circle
- "12" large number
- "Documents uploaded" label

Card 2 - Flashcards Due:
- Layers icon in Amber circle
- "25" large number
- "Flashcards to review" label

Card 3 - Quizzes Taken:
- Clipboard icon in Teal circle
- "8" large number
- "Quizzes completed" label

Card 4 - Study Streak:
- Flame icon in Emerald circle, subtly animating.
- "5 days" large number
- "Study streak 🔥" label

All cards: White, rounded-xl, shadow-sm, hover lift with a gentle scale, making them feel responsive and engaging.

RECENT DOCUMENTS SECTION:
- Section title "Recent Documents" with "View all →" link
- Horizontal scroll of 4 document cards:
  * Document icon (based on type: PDF/DOCX)
  * Document title
  * Processing status badge
  * "Continue" button (outline, small)
  * Cards feature a subtle hover effect and smooth scrolling.

FLASHCARDS DUE SECTION:
- Section title "Today's Review" with due count badge
- Flashcard preview card:
  * Front text preview
  * "25 cards due" indicator
  * "Start Review" button (primary, with a subtle pulse animation)

QUICK ACTIONS:
- 4 action buttons in a row:
  * "Upload Document" (Royal Blue)
  * "Review Flashcards" (outline)
  * "Take Quiz" (outline)
  * "Ask AI Tutor" (outline)
  * Buttons feature smooth hover and click animations.

═══════════════════════════════════════════════════════════════════════════════
SCREEN 6: DOCUMENT LIST (/app/documents)
═══════════════════════════════════════════════════════════════════════════════

PAGE HEADER:
- "My Documents" heading
- Breadcrumb: Home / Documents
- "Upload New" button (primary, Royal Blue, with upload icon, featuring a subtle hover animation)

FILTER BAR (sticky below navbar):
- Left: Status dropdown (All | Processing | Ready | Error)
- File type dropdown (All | PDF | DOCX)
- Search input, with a smooth focus animation.
- Right: Sort dropdown (Newest, Oldest, Name A-Z)

DOCUMENT GRID:
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Document card:
  * File type icon (PDF = red, DOCX = blue) - large, 48px
  * Title (truncates to 2 lines)
  * File size: "2.5 MB"
  * Upload date: "2 days ago"
  * Status badge: Processing (Amber, animated pulse) | Ready (Emerald) | Error (Red)
  * Quick stats (if ready):
    - Flashcards: 45
    - Quiz: 10 questions
  * Actions menu (three dots):
    - View Details
    - Generate Quiz
    - Generate Flashcards
    - Delete
  * Cards feature a subtle hover lift and shadow effect.

EMPTY STATE:
- Upload icon (large, muted)
- "No documents yet"
- "Upload your first document to get started"
- "Upload Document" button (primary, with a gentle bounce animation)

═══════════════════════════════════════════════════════════════════════════════
SCREEN 7: DOCUMENT DETAIL (/app/documents/:id)
═══════════════════════════════════════════════════════════════════════════════

PAGE HEADER:
- Document title (large)
- Breadcrumb: Home / Documents / [Document Name]
- File info: Type badge, Size, Upload date
- Status badge: Ready (Emerald)

TWO COLUMN LAYOUT:

LEFT COLUMN (2/3 width):

DOCUMENT INFO CARD:
- Original filename
- File type and size
- Upload date
- Processing completed date
- Card features a clean, minimalist aesthetic.

AI SUMMARY SECTION (collapsible):
- Section header: "AI Summary" with sparkle icon, animating when summary is generated.
- "Generate Summary" button (if not generated, with a subtle loading animation when clicked)
- Summary content:
  * Key points list (3-5 bullet points)
  * Keywords/tags
- "Regenerate" button, with a smooth animation on click.

CONTENT PREVIEW:
- Section header: "Document Content"
- Text preview (first 500 characters)
- "View Full Content" expand button, with a smooth accordion animation.

RIGHT COLUMN (1/3 width, sticky):

ACTIONS CARD:
- "Generate Flashcards" button (primary, full width, with a subtle AI generation animation)
  * Shows count if already generated: "45 Flashcards"
- "Take Quiz" button (secondary, full width, with a smooth hover effect)
  * Shows count if quiz available: "10 Questions"
- "Ask AI About This Document" button (outline, full width, with a subtle sparkle icon)
- "Bookmark" toggle button, with a satisfying click animation.
- "Delete Document" button (ghost, red text)
- Card features a clean, actionable aesthetic.

STATS CARD:
- Total Flashcards: 45
- Quiz Questions: 10
- Times Reviewed: 5
- Last Reviewed: "2 hours ago"
- Stats are presented clearly with subtle icons.

═══════════════════════════════════════════════════════════════════════════════
SCREEN 8: UPLOAD DOCUMENT (/app/documents/upload)
═══════════════════════════════════════════════════════════════════════════════

PAGE HEADER:
- "Upload Document" heading
- Breadcrumb: Home / Documents / Upload

UPLOAD AREA (centered, max-width 600px):

DRAG & DROP ZONE:
- Dashed border (2px, gray), animating on drag-over.
- Large upload icon (64px, Royal Blue)
- "Drag and drop your file here" heading
- "or click to browse" subtext
- Accepted formats: "PDF, DOCX (max 10MB)"
- Hidden file input
- Zone features a subtle glow on hover.

SELECTED FILE PREVIEW (after selection):
- File icon (based on type)
- Filename
- File size
- Remove button (X icon, with a smooth fade-out animation for the file)

OPTIONS:
- Auto-generate flashcards checkbox (checked by default)
- Auto-generate quiz checkbox (checked by default)
- Number of flashcards input (default: 20)
- Number of quiz questions input (default: 10)
- Options are clearly laid out with toggle animations.

ACTIONS:
- "Upload" button (primary, full width) - enabled only when file selected, with a loading spinner on click.
- "Cancel" button (ghost)

UPLOADING STATE:
- Progress bar (Royal Blue fill, animated smoothly)
- Percentage: "45%"
- Filename
- "Uploading..." text, with subtle pulsating dots.

═══════════════════════════════════════════════════════════════════════════════
SCREEN 9: DOCUMENT PROCESSING (/app/documents/:id/processing)
═══════════════════════════════════════════════════════════════════════════════

PAGE HEADER:
- "Processing Document" heading
- Document name

PROCESSING STATUS (centered card):
- Animated processing icon (spinning, with a subtle glow)
- "Analyzing your document..." text
- Progress steps:
  * ✓ Uploaded (completed, green check, with a satisfying pop-in)
  * ✓ Extracted text (completed, green check)
  * ◷ Creating embeddings (in progress, animated, with a subtle shimmer)
  * ○ Generating flashcards (pending, gray)
  * ○ Generating quiz (pending, gray)
- Each step transitions smoothly from pending to complete.

PROGRESS BAR:
- Overall progress: "60%"
- Royal Blue fill, animated with a fluid motion.

ESTIMATED TIME:
- "About 30 seconds remaining..."

AUTO-REDIRECT:
- Automatically redirects to document detail page when complete, with a smooth fade-out.
- "We'll redirect you when ready" text

ERROR STATE:
- Error icon (red, with a subtle shake animation)
- "Processing failed" heading
- Error message
- "Try Again" button
- "Contact Support" link

═══════════════════════════════════════════════════════════════════════════════
SCREEN 10: QUIZ PAGE (/app/documents/:documentId/quiz)
═══════════════════════════════════════════════════════════════════════════════

TWO COLUMN LAYOUT: Main content (left) + Question Navigator (right sidebar)

═══════════════════════════════════════════════════════════════════════════════
TOP HEADER (sticky, white, shadow-sm)
═══════════════════════════════════════════════════════════════════════════════

LEFT SIDE:
- Quiz title: "Quiz: [Document Name]"
- Breadcrumb: Documents > [Document] > Quiz

CENTER:
- Progress bar (thin, Royal Blue fill): shows overall completion, with a smooth fill animation.
- Text: "Question 3 of 10"

RIGHT SIDE:
- Timer (prominent, in card):
  * Circular countdown ring (Amber when < 2 min, Red when < 1 min, animating smoothly)
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
- Points: "1 point"

QUESTION TEXT:
- Large text (18px, 600 weight, Deep Navy)
- Supports markdown (bold, italic, code inline)
- Code blocks (if any): Glassmorphism style, dark tint, syntax highlighting
- Animation: When showing correct/incorrect answer, use subtle screen shake (wrong) or bounce (correct).
ANSWER OPTIONS:

For Single Choice:
- Radio-style selection
- Each option card:
  * Left: Circular radio indicator (empty circle or filled Royal Blue)
  * Letter badge: A, B, C, D (rounded-full, 32px)
  * Answer text (500 weight)
  * Hover: Light blue background (#EFF6FF), with a smooth transition.
  * Selected: Royal Blue border (2px), light blue bg, checkmark in radio, with a satisfying click animation.

For Multiple Choice:
- Checkbox-style selection
- Each option card:
  * Left: Square checkbox indicator
  * Letter badge: A, B, C, D
  * Answer text
  * Selected: Royal Blue border, checkmark in checkbox, with a satisfying click animation.
- Note text: "Select all that apply"

═══════════════════════════════════════════════════════════════════════════════
BOTTOM NAVIGATION BAR (sticky, white, shadow-top)
═══════════════════════════════════════════════════════════════════════════════

LEFT:
- "Previous" button (outline, chevron-left icon)
- Disabled on first question, with a subtle grayed-out animation.

CENTER:
- Question indicator pills (scrollable on mobile):
  * Dot for each question
  * States:
    - Unanswered: Gray outline
    - Answered: Royal Blue filled
    - Current: Royal Blue ring (thicker border)
  * Dots animate smoothly between states.

RIGHT:
- "Next" button (primary, chevron-right icon)
- "Submit Quiz" button (primary, appears when all answered or on last question, with a subtle fade-in animation)

═══════════════════════════════════════════════════════════════════════════════
RIGHT SIDEBAR: QUESTION NAVIGATOR (280px, sticky)
═══════════════════════════════════════════════════════════════════════════════

HEADER:
- "Questions" title
- Stats badges:
  * Answered: "5/10" (Royal Blue)
  * Remaining: "5" (Gray)

QUESTION GRID (5 columns):
- Each cell is a button (40x40px, rounded-lg):
  * Number: 1, 2, 3, 4, 5...
  * States:
    - Unanswered: White bg, Gray border, Gray text
    - Answered: Royal Blue bg, white text
    - Current: Royal Blue border (3px), white bg, Royal Blue text
  * Hover: Slight scale, shadow, with a smooth animation.
  * Click: Jump to question, with a smooth scroll.

SUBMIT SECTION:
- "Submit Quiz" button (full width, primary, Amber)
- Confirmation modal on click:
  * Title: "Submit Quiz?"
  * Message: "You have answered 8/10 questions."
  * Warning if unanswered: "⚠️ You have 2 unanswered questions"
  * Buttons: "Continue Editing" (ghost) | "Submit" (primary)
  * Modal appears with a subtle fade-in and scale animation.

═══════════════════════════════════════════════════════════════════════════════
QUIZ RESULT VIEW (shown after submit, same page)
═══════════════════════════════════════════════════════════════════════════════

RESULT HEADER:
- Quiz title
- Document name
- Completion date

SCORE DISPLAY (centered):
- Large circular progress: "85%" in center, with a dynamic fill animation.
- Pass/Fail badge (Emerald for pass >= 70%, Red for fail, with a subtle pop-in)
- "Great job!" or "Keep practicing!" message, with encouraging animations.

STATS ROW:
- Correct: 8/10 (Emerald)
- Wrong: 2/10 (Red)
- Time taken: "5:30"
- Stats animate into view.

ANSWER REVIEW (accordion):
- Each question card:
  * Question number and text
  * Your answer (with correct/wrong indicator)
  * Correct answer (shown if wrong)
  * Explanation (AI-generated, expandable)
  * Accordion sections expand smoothly.

ACTIONS:
- "Retry Quiz" button (outline)
- "Review Document" button (primary)
- "Back to Documents" button (ghost)
- Buttons feature smooth hover and click animations.

═══════════════════════════════════════════════════════════════════════════════
SCREENS 11-12: FLASHCARD PAGES
═══════════════════════════════════════════════════════════════════════════════

SCREEN 11: FLASHCARD REVIEW (/app/flashcards) - Today's Due Cards

HEADER:
- "Today's Review" title
- Due count badge: "25 cards due"
- Document filter dropdown

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
- "Card 5 of 25"
- Animation: Realistic 3D card flip when clicking 'Flip'. Slide out left/right on rating submission.
- Confetti effect when finishing the whole deck.
EMPTY STATE:
- Check icon (Emerald)
- "All caught up!"
- "No flashcards due for review"
- "Review specific document" link

SCREEN 12: FLASHCARDS BY DOCUMENT (/app/documents/:documentId/flashcards)

HEADER:
- Document title
- Total cards count
- "Start Review" button (primary)
- "Generate More" button (outline)

CARD LIST:
- Table with columns: Front (preview), Status, Next Review, Ease Factor
- Click row to edit/view
- Bulk select for review
- Delete individual cards

FLASHCARD STATS:
- Total: 45 cards
- New: 15 (Gray)
- Learning: 20 (Amber)
- Mastered: 10 (Emerald)

═══════════════════════════════════════════════════════════════════════════════
SCREEN 13: BOOKMARKS (/app/bookmarks)
═══════════════════════════════════════════════════════════════════════════════

PAGE HEADER:
- "My Bookmarks" title
- Count: "8 items saved"
- Filter by type dropdown: All | Documents | Quiz Results | Notes

BOOKMARK LIST:
Card style (horizontal):
- Left: Icon based on type (document/quiz/note)
- Middle:
  * Item title
  * Document name (muted)
  * Type badge
  * Date bookmarked
  * Note preview (if any)
- Right:
  * "Go to Item" button
  * Remove bookmark (trash icon)

EMPTY STATE:
- Bookmark icon (large, muted)
- "No bookmarks yet"
- "Save documents and quiz results for quick access"

═══════════════════════════════════════════════════════════════════════════════
SCREENS 14-15: AI TUTOR PAGES
═══════════════════════════════════════════════════════════════════════════════

SCREEN 14: AI CHAT - SESSION LIST (/app/ai-tutor)

SESSION LIST (left sidebar, 280px):

HEADER:
- "AI Tutor" title with sparkle icon
- "New Chat" button (primary, small)

SEARCH:
- Search sessions input

SESSION LIST:
- Each item:
  * Title (truncated)
  * Preview message
  * Document context badge (if linked)
  * Timestamp
  * Active: Royal Blue background

CHAT AREA (main content - new chat):

WELCOME SCREEN:
- Large AI Tutor logo with sparkle
- "How can I help you learn today?" heading
- Quick suggestion pills:
  * "Explain a concept from my document"
  * "Quiz me on a topic"
  * "Summarize my notes"
  * "Help me understand this"

DOCUMENT CONTEXT SELECTOR:
- Dropdown: "Select a document for context (optional)"
- Shows uploaded documents
- When selected: Document badge appears in chat header

SCREEN 15: AI SESSION (/app/ai-tutor/:sessionId)

CHAT HEADER:
- Session title (editable)
- Document context badge (if set): "[Document Name]"
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
- Document context indicator (if linked)
- Send button (right, Royal Blue, appears when text entered)

═══════════════════════════════════════════════════════════════════════════════
SCREEN 16: NOTES (/app/notes)
═══════════════════════════════════════════════════════════════════════════════

PAGE HEADER:
- "My Notes" title
- Count: "15 notes"
- Filter by document dropdown
- Search input

NOTES LIST:
Card style:
- Document badge (source document)
- Note content preview (first 100 chars)
- Created/updated date
- Quick actions: Edit, Delete

EMPTY STATE:
- Note icon (large, muted)
- "No notes yet"
- "Add notes while viewing documents"

NOTE EDITOR (modal or inline):
- Document selector (optional)
- Note content textarea
- Save/Cancel buttons

═══════════════════════════════════════════════════════════════════════════════
SCREEN 17: PROFILE (/app/profile)
═══════════════════════════════════════════════════════════════════════════════

TWO COLUMN LAYOUT:

LEFT COLUMN (Sidebar navigation):
- Profile (active)
- Settings
- Help

RIGHT COLUMN:

PROFILE HEADER:
- Large avatar (120px) with "Change photo" button overlay
- Name (large)
- Email (muted)
- Member since date
- Google account badge (if signed up with Google)

STATS ROW:
- 3 stat cards:
  * Documents: 12
  * Flashcards Mastered: 45
  * Quizzes Passed: 8

EDIT PROFILE FORM:
- Full name input
- Email input (readonly, shows "Managed by Google" if applicable)
- Bio textarea
- "Save Changes" button

DANGER ZONE:
- "Delete Account" button (red, ghost)
- Warning text about data loss

═══════════════════════════════════════════════════════════════════════════════
SCREENS 18-19: ADMIN PAGES
═══════════════════════════════════════════════════════════════════════════════

ADMIN LAYOUT:
- Separate sidebar (darker theme: Deep Navy background)
- Admin-specific navigation
- Back to App link

SCREEN 18: ADMIN DASHBOARD (/admin/dashboard)

STATS CARDS:
- Total Users: 1,250 (+15 today)
- Total Documents: 5,500
- Total Flashcards: 25,000
- Active Now: 45

CHARTS:
- User growth line chart
- Document uploads bar chart

RECENT ACTIVITY FEED:
- User registered
- Document uploaded
- Quiz completed

SCREEN 19: USER MANAGEMENT (/admin/users)

SEARCH & FILTER:
- Search input
- Status filter: Active | Inactive

USER TABLE:
| Avatar | Name | Email | Documents | Quizzes | Joined | Actions |
- Actions: View Details | Deactivate

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
- Bottom navigation bar (Dashboard, Documents, AI Tutor, Profile)
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
- Charts: Recharts for progress visualization
- Markdown: react-markdown for content rendering

═══════════════════════════════════════════════════════════════════════════════

Design with attention to detail. Every element should feel intentional and polished. Use consistent spacing (8px grid system). Prioritize readability and usability. Make it feel like a premium product worth paying for.

## SCREEN SUMMARY TABLE

| # | Screen | Route | Type | Notes |
|---|--------|-------|------|-------|
| 1 | Landing Page | `/` | Public | |
| 2 | Login | `/auth/login` | Public | Google OAuth 2.0 only |
| 3 | Dashboard | `/app/dashboard` | Protected | |
| 4 | Document List | `/app/documents` | Protected | |
| 5 | Document Detail | `/app/documents/:id` | Protected | Includes AI Summary |
| 6 | Upload Document | `/app/documents/upload` | Protected | Drag & drop |
| 7 | Document Processing | `/app/documents/:id/processing` | Protected | Progress tracking |
| 8 | Learning Path Explorer | `/app/documents/:id/path` | Protected | Interactive roadmap |
| 9 | Lesson Progress | `/app/path/:id/lessons/:lessonId` | Protected | Detailed lesson view |
| 10 | Quiz Page | `/app/documents/:documentId/quiz` | Protected | Includes Result view |
| 11 | Flashcard Review | `/app/flashcards` | Protected | SM-2 algorithm |
| 12 | Flashcards by Document | `/app/documents/:documentId/flashcards` | Protected | |
| 13 | AI Chat | `/app/ai-tutor` | Protected | Session list |
| 14 | AI Session | `/app/ai-tutor/:sessionId` | Protected | Document context |
| 15 | Notes | `/app/notes` | Protected | |
| 16 | Profile | `/app/profile` | Protected | |
| 17 | Admin Dashboard | `/admin/dashboard` | Admin | |
| 18 | User Management | `/admin/users` | Admin | |
---
Total Screens: 18 (Public: 2, User: 12, Admin: 4)
---

*Version: 7.0 - Updated: 2026-03-01*
*18 Screens - Document-based AI Tutor Platform*
*Authentication: Google OAuth Only*
