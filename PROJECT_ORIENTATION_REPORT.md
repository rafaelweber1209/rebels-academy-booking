# MuscleCoach Landing Page - Project Orientation Report

**Date:** October 18, 2025  
**Project:** MuscleCoach Landing Page  
**Tech Stack:** TypeScript, React 18, Express.js, Vite, Tailwind CSS, shadcn/ui  
**Environment:** Replit  

---

## 1. PROJECT OVERVIEW

### 1.1 What is MuscleCoach?
MuscleCoach is an AI-powered fitness coaching application designed to help users optimize their training through personalized, adaptive workout programs. The current phase focuses on a modern, dark-themed landing page that converts visitors to app downloads (iOS via App Store, Android via Google Play).

### 1.2 Project Goals
- Showcase AI-driven fitness features to potential users
- Convert landing page visitors to app downloads
- Build trust through design and credibility
- Support multi-language interface (Dutch primary language with international design patterns)

### 1.3 Key Success Metrics (Implied)
- High conversion rate to app downloads
- Mobile responsiveness across all devices
- Fast load times and smooth animations
- Clear communication of product value propositions

---

## 2. TECHNOLOGY STACK & ARCHITECTURE

### 2.1 Frontend Stack
```
Framework: React 18.3.1 with TypeScript 5.6.3
Build Tool: Vite 5.4.20
Routing: Wouter 3.3.5 (lightweight, minimal SPA router)
State Management: React Query (TanStack) 5.60.5 + local React state
UI Library: shadcn/ui (Radix UI primitives + Tailwind CSS)
CSS: Tailwind CSS 3.4.17 with custom dark-mode configuration
Icon Library: Lucide React 0.453.0
```

### 2.2 Backend Stack
```
Framework: Express.js 4.21.2 with TypeScript
Module System: ESM (type: "module")
Development: tsx 4.20.5 for local development with hot reload
Build: esbuild 0.25.0 for production bundling
```

### 2.3 Database (Configured but Not Actively Used)
```
ORM: Drizzle ORM 0.39.1
Driver: @neondatabase/serverless 0.10.4 (PostgreSQL)
Schema Management: drizzle-kit 0.31.4
Validation: drizzle-zod 0.7.0
Current Storage: In-memory implementation (MemStorage class)
Note: Database infrastructure is ready but not yet integrated
```

### 2.4 AI Integration
```
API: OpenAI API (gpt-5-nano model planned/referenced)
Feature: Customer support chatbot with file search via vector stores
Vector Stores: Two configured stores (IDs in routes.ts)
Rate Limiting: 20 requests/hour per IP address
```

### 2.5 UI Component Framework
- **Radix UI Primitives** (40+ component types):
  - Accordion, Alert Dialog, Avatar, Badge, Breadcrumb, Button, Calendar, Card
  - Carousel, Checkbox, Collapsible, Command, Context Menu, Dialog, Drawer
  - Dropdown Menu, Form, Hover Card, Input, Label, Navigation Menu, Popover
  - Progress, Radio Group, Scroll Area, Select, Separator, Sheet, Sidebar
  - Skeleton, Slider, Switch, Table, Tabs, Textarea, Toast, Toggle, Tooltip
- Custom styling via Tailwind CSS utility classes
- Accessibility-first design patterns (focus states, ARIA attributes)

---

## 3. PROJECT STRUCTURE

### 3.1 Directory Layout
```
/home/runner/workspace/
├── client/                           # React frontend application
│   ├── src/
│   │   ├── App.tsx                  # Main app component with routing
│   │   ├── main.tsx                 # React entry point
│   │   ├── index.css                # Global styles
│   │   ├── components/
│   │   │   ├── ChatBot.tsx          # AI customer support chatbot
│   │   │   └── ui/                  # shadcn/ui component library (40+ components)
│   │   ├── pages/
│   │   │   ├── home.tsx             # Landing page (main business logic)
│   │   │   └── not-found.tsx        # 404 page
│   │   ├── lib/
│   │   │   ├── queryClient.ts       # React Query configuration
│   │   │   └── utils.ts             # Utility functions (likely cn() classname merge)
│   │   └── hooks/
│   │       ├── use-mobile.tsx       # Mobile breakpoint detection hook
│   │       └── use-toast.ts         # Toast notification hook
│   └── index.html                    # HTML template
│
├── server/                           # Express backend
│   ├── index.ts                     # Server bootstrap & middleware setup
│   ├── routes.ts                    # API route definitions (ChatBot endpoint)
│   ├── storage.ts                   # Storage interface & in-memory implementation
│   └── vite.ts                      # Vite HMR integration for development
│
├── shared/                           # Shared code between client & server
│   └── schema.ts                    # Database schema (Drizzle ORM + Zod)
│
├── attached_assets/                  # Project images & marketing materials
│   ├── logo-red.png
│   ├── logo-watermark.png
│   ├── dashboard hero PNG_1760336604698.png
│   ├── program-generator-new.png
│   ├── soreness-tracking-new.png
│   ├── overload-new.png
│   ├── feedback-proactive-new.png
│   └── generated_images/             # AI-generated mockups & screenshots
│
├── Configuration Files
│   ├── package.json                 # Dependencies & scripts
│   ├── tsconfig.json               # TypeScript configuration with path aliases
│   ├── vite.config.ts              # Vite build & dev server config
│   ├── tailwind.config.ts          # Tailwind CSS theme customization
│   ├── postcss.config.js           # PostCSS pipeline for Tailwind
│   ├── drizzle.config.ts           # Drizzle ORM configuration
│   └── components.json             # shadcn/ui component registry
│
├── Documentation
│   ├── replit.md                   # Replit environment & deployment guide
│   ├── design_guidelines.md        # Design system & UI patterns
│   └── PROJECT_ORIENTATION_REPORT.md (this file)
│
└── Root Config
    ├── .replit                      # Replit run/build configuration
    └── .gitignore                   # Git ignore patterns
```

### 3.2 TypeScript Path Aliases
Defined in `tsconfig.json`:
```typescript
"@/*": ["./client/src/*"]      // Import as: import X from "@/components/..."
"@shared/*": ["./shared/*"]    // Import as: import X from "@shared/schema"
```

---

## 4. CORE COMPONENTS & FUNCTIONALITY

### 4.1 Landing Page (client/src/pages/home.tsx)
**Purpose:** Main business-focused page showcasing MuscleCoach features

**Sections:**
1. **Header/Navigation** (Sticky)
   - Logo + brand name (left)
   - Navigation links: "Features", "Waarom MuscleCoach?" (center, desktop only)
   - "Download App" CTA button (right)
   - Backdrop blur effect, auto-hides/shows on scroll

2. **Hero Section**
   - Large headline: "Stop met gokken. Begin met groeien." (Stop guessing. Start growing.)
   - Supporting paragraph explaining unique value
   - Two CTAs: "Download de App", "Bekijk de Features"
   - Phone mockup image with floating animation (parallax scroll effects)

3. **Problem & Cause Section** ("Waarom je progressie stagneert")
   - Explains why muscle growth plateaus
   - 3-card grid showing common fitness pitfalls:
     - Statische Schema's (Static Programs)
     - Program-hopping (Constant Program Switching)
     - Simpele Tracking Apps (Basic Logging Apps)

4. **Features Section** (2x2 Feature Grid)
   - AI Program Generator: Personalized workout programs
   - Adaptief Herstel: Adaptive recovery tracking
   - Automatische Progressive Overload: Automatic weight progression
   - Proactieve AI Coach: Intelligent coaching feedback

5. **Testimonials Section** (Carousel)
   - 3 customer testimonials with prev/next navigation
   - Displays one testimonial at a time

6. **Final CTA Section**
   - "Klaar om je training serieus te nemen?"
   - Download badges: App Store + Google Play store links

7. **Footer**
   - 3-column layout: Brand info, Product links, Contact info
   - Copyright notice

**Key Features:**
- Smooth scroll navigation using `scrollIntoView()`
- Animations: fade-in-up, float, fade-in (CSS keyframes)
- Responsive design: Mobile-first with breakpoints at 768px (md) and 1024px (lg)
- Test IDs on all major elements (data-testid attributes)
- Dark theme: Primary dark background (#121212), red accent (#D92121)

### 4.2 ChatBot Component (client/src/components/ChatBot.tsx)
**Purpose:** Floating AI support chatbot for customer inquiries

**Features:**
- Fixed position floating button (bottom-right corner)
- Expandable chat interface (responsive: full mobile width, 384px desktop)
- Message history persisted to localStorage
- Real-time streaming responses from OpenAI API
- Previous response tracking for conversational context
- Abort functionality (stop generating button)
- Error handling with user-friendly messages

**Data Flow:**
1. User types message in textarea
2. Click Send or press Enter (Shift+Enter for newline)
3. Message streamed to `/api/chat` endpoint
4. Response streamed back as Server-Sent Events (SSE)
5. Bot message displayed character-by-character
6. Response ID captured for multi-turn conversations

**Key Implementation Details:**
- Uses ReadableStream API for efficient streaming
- AbortController for cancellable requests
- Local state for messages, streaming status, errors
- localStorage persistence with JSON serialization
- Auto-scroll to latest message on new content

### 4.3 Main App Component (client/src/App.tsx)
**Purpose:** Root application wrapper

**Structure:**
- Route provider (Wouter Switch/Route)
- React Query provider for server state
- Toast notification system
- Tooltip provider for UI hints
- Two routes: "/" → Home page, fallback → 404 page

---

## 5. BACKEND API

### 5.1 Chat Endpoint (`POST /api/chat`)
**Purpose:** Stream AI responses for customer support chatbot

**Request Body:**
```typescript
{
  message: string;           // User's question
  previousResponseId?: string; // Optional ID for conversation context
}
```

**Response:**
- Content-Type: text/event-stream
- Streams JSON events with format: `data: {json}\n\n`
- Event types:
  - `response.output_text.delta`: Streamed text content
  - `response.done`: Indicates completion with response ID

**Rate Limiting:**
- 20 requests per hour per client IP
- Returns 429 status if exceeded

**OpenAI Configuration:**
- Model: gpt-5-nano (likely a custom fine-tuned model)
- Reasoning effort: "medium"
- Tool: file_search via two configured vector stores
- System prompt: Customer support chatbot for MuscleCoach with fitness knowledge

**Error Handling:**
- 400: Missing/invalid message parameter
- 429: Rate limit exceeded
- 500: OpenAI API key not configured or API errors
- Client-side error messages in Dutch

### 5.2 Storage Layer (server/storage.ts)
**Interface-Based Design:**
```typescript
interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}
```

**Current Implementation:**
- MemStorage class: In-memory Map-based storage
- No persistence between server restarts
- Ready for database migration (structure allows easy swapping)

**Database Schema (shared/schema.ts):**
```typescript
users table:
  - id: UUID (primary key, auto-generated)
  - username: text (unique, required)
  - password: text (required)
```

---

## 6. DESIGN SYSTEM & STYLING

### 6.1 Color Palette
```css
Primary Dark Background: #121212 (0 0% 7%)
Secondary Background: #1E1E1E (0 0% 12%)
Accent Red: #D92121 (0 84% 49%) - Primary CTA color
Text Primary: #FFFFFF (0 0% 100%) - Headers, important text
Text Secondary: #A8A8A8 (0 0% 66%) - Descriptions
Border: Subtle dark borders for card separation
```

### 6.2 Typography
**Font Family:** Inter (Google Fonts, weights: 400, 600, 700)

**Scale:**
- H1 (Hero): 64px / font-bold → 3xl (mobile), 7xl (desktop)
- H2 (Sections): 48px / font-bold → 2xl (mobile), 5xl (desktop)
- H3 (Cards): 24px / font-bold
- Body: 18px / font-normal
- Button: 16px / font-semibold

### 6.3 Responsive Breakpoints (Tailwind)
- Mobile: < 768px (default, single column)
- Tablet: 768px - 1024px (md breakpoint)
- Desktop: > 1024px (lg breakpoint)
- Extra Large: > 1280px (xl breakpoint)

### 6.4 Component Patterns
**Button States:**
- Default: Red background, white text, shadow
- Hover: scale-105 transform, increased shadow
- Outline: Transparent bg, white border, hover fill with red

**Card Hover Effects:**
- `hover-elevate`: Subtle elevation on hover (via CSS)
- `active-elevate-2`: Enhanced elevation when clicked/focused

**Animations:**
- fadeInUp: 0.8s ease-out (slide up + fade)
- fadeIn: 0.6s ease-out
- float: 6s infinite Y-axis oscillation
- Staggered intro: Elements animate in sequence

### 6.5 Accessibility Features
- High contrast: White text on dark backgrounds (WCAG AA+)
- Focus states: 2px red outline on interactive elements
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`
- Alt text on all images
- ARIA attributes on interactive components (Radix UI provides these)

---

## 7. BUILD & DEPLOYMENT PROCESS

### 7.1 Development Mode
**Command:** `npm run dev`
```bash
NODE_ENV=development tsx server/index.ts
```
- Runs Express server with TypeScript via tsx
- Vite middleware handles frontend HMR (Hot Module Replacement)
- Replit plugins: dev banner, cartographer, runtime error modal
- Access at: Replit dev server (usually https://workspace.projectname.replit.dev)

### 7.2 Production Build
**Command:** `npm run build`
```bash
vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
```

**Process:**
1. **Frontend Build (Vite):**
   - Bundle React app and assets
   - Output: `/dist/public/` (served as static files)
   - Minifies, tree-shakes, optimizes imports

2. **Backend Build (esbuild):**
   - Bundle server code into single ESM file
   - External packages kept as imports (not bundled)
   - Output: `/dist/index.js`

### 7.3 Production Execution
**Command:** `npm start`
```bash
NODE_ENV=production node dist/index.js
```
- Runs pre-built backend server
- Serves static frontend from `/dist/public/`
- Listens on PORT environment variable (Replit auto-assigns)

### 7.4 Type Checking
**Command:** `npm run check`
```bash
tsc
```
- Validates TypeScript without emitting files
- Runs in strict mode across all source files

### 7.5 Database Migrations
**Command:** `npm run db:push`
```bash
drizzle-kit push
```
- Applies pending schema migrations to PostgreSQL
- Not currently active (using in-memory storage)

---

## 8. FILE ENCODING & ASSETS

### 8.1 Asset Organization
- **Hero Image:** Dashboard screenshot (PNG, ~200KB)
- **Feature Screenshots:** 4 images for feature showcase
- **Logo Files:** 
  - `logo-red.png` (primary app logo)
  - `logo-watermark.png` (background watermark)
- **Generated Images:** AI-generated mockups for feature cards

### 8.2 Vite Asset Handling
- Images imported as ES modules (returns URL string)
- Alias configuration: `@assets` → `attached_assets/` directory
- Automatic hash-based cache busting for production builds

---

## 9. DEVELOPMENT WORKFLOW

### 9.1 Local Development Loop
1. **Start dev server:** `npm run dev`
2. **Edit files:** Changes automatically reload in browser
3. **Test chatbot:** Requires OPENAI_API_KEY environment variable
4. **Check types:** `npm run check` (catches TS errors)
5. **Build for production:** `npm run build`

### 9.2 Environment Variables Required
```bash
OPENAI_API_KEY=sk-...     # For chatbot functionality
DATABASE_URL=             # (Optional, currently unused)
PORT=3000                 # (Auto-set by Replit)
```

### 9.3 Git Workflow
- Repository initialized (`.git` directory present)
- `.gitignore` configured for node_modules, dist, .env
- Main branch is live deployment target

---

## 10. TESTING & QUALITY ASSURANCE

### 10.1 Test IDs (data-testid)
The codebase includes comprehensive test IDs for automated testing:

**Header/Navigation:**
- `img-logo`, `link-features`, `link-waarom`, `button-download-header`

**Hero Section:**
- `text-hero-title`, `text-hero-subtitle`, `button-download-hero`
- `button-features`, `container-hero-image`, `img-hero-phone`

**Problem & Cause:**
- `text-problem-title`, `text-problem-subtitle`, `text-valkuilen-intro`
- `card-valkuil-1`, `card-valkuil-2`, `card-valkuil-3`

**Features:**
- `text-features-title`, `text-features-subtitle`
- `card-feature-generator`, `card-feature-recovery`, etc.

**Testimonials:**
- `text-testimonials-title`, `card-testimonial-${index}`
- `button-testimonial-prev`, `button-testimonial-next`

**CTA Section:**
- `text-cta-title`, `text-cta-subtitle`
- `link-appstore`, `link-playstore`

**Footer:**
- `link-footer-features`, `link-footer-waarom`
- `text-footer-email`, `text-copyright`

**ChatBot:**
- `button-open-chat`, `button-close-chat`, `button-new-conversation`
- `input-chat-message`, `button-send-message`, `button-stop-generating`
- `message-user-${index}`, `message-bot-${index}`

### 10.2 No Existing Tests
Currently, no test suite is implemented (no Jest, Vitest, or Cypress configuration). Test IDs are in place for future automation.

---

## 11. KEY DEPENDENCIES & VERSIONS

### Frontend
- react@18.3.1, react-dom@18.3.1
- @tanstack/react-query@5.60.5
- tailwindcss@3.4.17
- shadcn/ui (via Radix UI + class-variance-authority)
- framer-motion@11.13.1 (animation library, available but minimally used)
- wouter@3.3.5 (lightweight routing)
- zod@3.24.2 (schema validation)
- lucide-react@0.453.0 (icons)

### Backend
- express@4.21.2
- express-session@1.18.1 (configured but not implemented)
- drizzle-orm@0.39.1
- zod@3.24.2
- passport@0.7.0, passport-local@1.0.0 (configured but not implemented)

### Build & Development
- vite@5.4.20
- esbuild@0.25.0
- tsx@4.20.5
- typescript@5.6.3
- tailwindcss plugins: @tailwindcss/typography, @tailwindcss/vite

### Replit Integration
- @replit/vite-plugin-cartographer
- @replit/vite-plugin-dev-banner
- @replit/vite-plugin-runtime-error-modal

---

## 12. KNOWN LIMITATIONS & FUTURE WORK

### 12.1 Current Limitations
1. **No Database Integration:** Schema defined but in-memory storage used
2. **No Authentication:** Session support configured but not implemented
3. **No Tests:** Test IDs present but no actual test suite
4. **Limited Backend Routes:** Only `/api/chat` endpoint implemented
5. **No User Analytics:** No tracking or analytics integration

### 12.2 Potential Enhancements
- [ ] Implement PostgreSQL via Drizzle ORM (replace MemStorage)
- [ ] Add user authentication (Passport.js integration)
- [ ] Create automated test suite (Jest + React Testing Library)
- [ ] Add analytics integration (Mixpanel, Plausible)
- [ ] Implement server-side rendering or static generation
- [ ] Add email capture for waitlist/newsletter
- [ ] Implement A/B testing framework
- [ ] Add multi-language support (i18n)

---

## 13. COMMON DEVELOPMENT TASKS

### 13.1 Modifying the Landing Page
**File:** `client/src/pages/home.tsx`

**Sections to edit:**
- **Headlines/Copy:** Search for text in JSX
- **Images:** Change imports in `attached_assets` paths
- **CTAs & Links:** Update href, onClick handlers
- **Colors/Spacing:** Modify Tailwind classes
- **Testimonials:** Edit testimonials array (lines 31-41)

### 13.2 Adding UI Components
1. View available components in `client/src/components/ui/`
2. Import: `import { ComponentName } from "@/components/ui/component-name"`
3. Use in JSX with Tailwind styling

### 13.3 Updating Chat System Prompt
**File:** `server/routes.ts` (lines 74-76)
- Modify system prompt text
- Change vector store IDs for different knowledge bases
- Adjust model parameters (reasoning effort, verbosity)

### 13.4 Connecting Database
1. Set DATABASE_URL in environment
2. Replace MemStorage with Drizzle client in `server/storage.ts`
3. Run `npm run db:push` to apply migrations
4. Update routes to use database methods

---

## 14. DEBUGGING & TROUBLESHOOTING

### 14.1 Common Issues
**Issue:** Chatbot not working
- Check OPENAI_API_KEY environment variable
- Verify vector store IDs are valid
- Check browser console for fetch errors

**Issue:** Styling not applying
- Ensure Tailwind CSS build completed
- Check class names are valid Tailwind utilities
- Dark mode class on html element: `<html class="dark">`

**Issue:** Images not loading
- Verify asset file exists in `attached_assets/`
- Check import path uses correct filename
- Rebuild if added new assets

### 14.2 Development Tools
- Browser DevTools: React, Network, Console tabs
- Vite error overlay: Runtime errors displayed in-app
- Terminal logs: Server-side errors and API calls

---

## 15. QUICK START CHECKLIST FOR NEW DEVELOPERS

- [ ] Clone repository and run `npm install`
- [ ] Set OPENAI_API_KEY environment variable
- [ ] Run `npm run dev` to start development server
- [ ] Open browser to Replit dev URL
- [ ] Test page navigation and scrolling
- [ ] Open ChatBot and test message sending
- [ ] Run `npm run check` to verify no TypeScript errors
- [ ] Read `design_guidelines.md` for design system details
- [ ] Review `home.tsx` to understand page structure
- [ ] Explore `ChatBot.tsx` for streaming implementation

---

## 16. CONTACT & RESOURCES

**Project Owner:** rafael@xxlnutrition.nl

**Key Documentation:**
- `design_guidelines.md` - Design system, colors, typography
- `replit.md` - Replit-specific setup and deployment
- TypeScript Config: `tsconfig.json` (path aliases)
- Tailwind Config: `tailwind.config.ts` (theme customization)

---

**Report Generated:** October 18, 2025  
**Project Status:** Active Development
