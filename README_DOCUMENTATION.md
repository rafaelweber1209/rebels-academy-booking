# 📚 MuscleCoach Project Documentation Index

Welcome to the MuscleCoach project! This directory contains comprehensive documentation to help you understand and work with the codebase.

## 📖 Documentation Files

### 1. **ARCHITECTURE_OVERVIEW.txt** ⭐ START HERE
**Best for:** Quick project understanding  
**Length:** ~5 minutes read  
**Contains:**
- Quick facts about the project
- Technology stack summary
- Folder structure at a glance
- Key components explained
- Design system colors & typography
- Development workflow
- Quick start checklist

👉 **Start with this file if you have 5 minutes**

---

### 2. **DEVELOPER_ONBOARDING.md** ⭐ START HERE NEXT
**Best for:** Getting started as a developer  
**Length:** ~10 minutes read  
**Contains:**
- Pre-flight checklist (first 10 minutes)
- How to run the project locally
- Files to explore first
- Common first tasks (with step-by-step instructions)
- Development workflow tips
- Git workflow
- Debugging guidance
- First week milestones
- Common issues & solutions

👉 **Follow this after ARCHITECTURE_OVERVIEW.txt**

---

### 3. **PROJECT_ORIENTATION_REPORT.md** (COMPREHENSIVE)
**Best for:** Deep understanding of every component  
**Length:** ~30-40 minutes read  
**Contains:**
- Complete project overview
- Full technology stack details (with versions)
- Detailed project structure
- Core components & functionality breakdown
- Backend API documentation
- Design system specifications
- Build & deployment process
- Asset management
- Development workflow
- Testing & QA strategy
- Known limitations & future work
- Common development tasks
- Debugging & troubleshooting guide
- Quick start checklist for new developers
- Contact info & resources

👉 **Read this for comprehensive technical understanding**

---

### 4. **design_guidelines.md** (DESIGN SYSTEM)
**Best for:** UI/UX understanding and consistency  
**Length:** ~15 minutes read  
**Contains:**
- Design approach & philosophy
- Core design principles
- Complete color palette (with CSS values)
- Typography scale & hierarchy
- Layout system & spacing
- Component library specifications
  - Navigation header
  - Buttons (primary, secondary)
  - Hero section
  - Problem-cause section
  - Features grid
  - Testimonials carousel
  - Final CTA section
  - Footer
- Images specifications
- Animation guidelines
- Responsive breakpoints
- Accessibility features

👉 **Read before making UI changes**

---

### 5. **replit.md** (DEPLOYMENT & ENVIRONMENT)
**Best for:** Replit-specific setup and deployment  
**Length:** ~10 minutes read  
**Contains:**
- Replit project setup
- Environment configuration
- Build and deployment process
- Development server setup
- Production deployment steps
- Environment variables
- Troubleshooting Replit-specific issues

👉 **Read for deployment and Replit questions**

---

## 🚀 QUICK START PATH

Follow this path based on your time available:

### ⏱️ I have 5 minutes
1. Read: **ARCHITECTURE_OVERVIEW.txt** (start to finish)

### ⏱️ I have 15 minutes
1. Read: **ARCHITECTURE_OVERVIEW.txt**
2. Read: **DEVELOPER_ONBOARDING.md** (start to "What to Explore First")

### ⏱️ I have 30 minutes
1. Read: **ARCHITECTURE_OVERVIEW.txt**
2. Read: **DEVELOPER_ONBOARDING.md** (complete)
3. Start: **PROJECT_ORIENTATION_REPORT.md** (sections 1-5)

### ⏱️ I have 1+ hour
1. Read: **ARCHITECTURE_OVERVIEW.txt**
2. Read: **DEVELOPER_ONBOARDING.md** (complete)
3. Read: **PROJECT_ORIENTATION_REPORT.md** (complete)
4. Read: **design_guidelines.md** (sections 1-5)

### ⏱️ I'm ready to code (comprehensive)
1. Read all documents above
2. Read: **design_guidelines.md** (complete)
3. Follow: **DEVELOPER_ONBOARDING.md** checklist
4. Start: Modify landing page copy or images

---

## 🎯 FIND INFORMATION BY TASK

### "I want to understand the project structure"
→ Read: ARCHITECTURE_OVERVIEW.txt + PROJECT_ORIENTATION_REPORT.md (section 3)

### "I want to run the project locally"
→ Read: DEVELOPER_ONBOARDING.md (section "🚀 Running the Project")

### "I want to modify the landing page"
→ Read: DEVELOPER_ONBOARDING.md (section "Common First Tasks #1") + design_guidelines.md

### "I want to understand the ChatBot"
→ Read: PROJECT_ORIENTATION_REPORT.md (section 4.2) + ARCHITECTURE_OVERVIEW.txt

### "I want to deploy to production"
→ Read: replit.md + DEVELOPER_ONBOARDING.md (Git Workflow section)

### "I want to change colors/styling"
→ Read: design_guidelines.md + DEVELOPER_ONBOARDING.md ("Change Colors or Spacing")

### "I want to understand the API"
→ Read: PROJECT_ORIENTATION_REPORT.md (section 5.1)

### "I'm stuck on a problem"
→ Read: DEVELOPER_ONBOARDING.md (section "🚨 Common Issues & Solutions")

### "I want to see the design specifications"
→ Read: design_guidelines.md (complete)

---

## 📋 PROJECT AT A GLANCE

| Aspect | Details |
|--------|---------|
| **Name** | MuscleCoach Landing Page |
| **Type** | Full-stack web application |
| **Primary Purpose** | High-converting landing page for fitness AI app |
| **Tech Stack** | React 18 + TypeScript + Express.js + Tailwind CSS + shadcn/ui |
| **Environment** | Replit |
| **Language** | Dutch (nl-NL) primary, but international design patterns |
| **Status** | Active Development |
| **Owner** | rafael@xxlnutrition.nl |
| **Main File** | `client/src/pages/home.tsx` |
| **API Endpoint** | `POST /api/chat` (OpenAI streaming) |
| **Build Tool** | Vite + esbuild |
| **Database** | PostgreSQL (Drizzle ORM - configured, not yet active) |
| **Current Storage** | In-memory (MemStorage) |
| **AI Chatbot** | OpenAI gpt-5-nano with file search |
| **Rate Limit** | 20 requests/hour per IP |
| **Test IDs** | Comprehensive (40+ elements) |

---

## 🔧 ESSENTIAL COMMANDS

```bash
npm install           # Install dependencies
npm run dev           # Start development server (HMR enabled)
npm run build         # Build for production
npm start             # Run production build
npm run check         # Type check (no build artifacts)
npm run db:push       # Apply database migrations
```

---

## 📁 KEY FILES TO EDIT

| File | Purpose | Edit When |
|------|---------|-----------|
| `client/src/pages/home.tsx` | Landing page | Changing copy, sections, images |
| `client/src/components/ChatBot.tsx` | Chat widget | Modifying bot behavior |
| `server/routes.ts` | API endpoints | Adding routes or changing AI prompt |
| `design_guidelines.md` | Design specs | Understanding brand guidelines |
| `tailwind.config.ts` | Tailwind theme | Changing colors globally |

---

## 🎓 RECOMMENDED READING ORDER

**For Backend Developers:**
1. ARCHITECTURE_OVERVIEW.txt
2. PROJECT_ORIENTATION_REPORT.md (sections 2, 5, 7)
3. replit.md

**For Frontend Developers:**
1. ARCHITECTURE_OVERVIEW.txt
2. DEVELOPER_ONBOARDING.md
3. design_guidelines.md
4. PROJECT_ORIENTATION_REPORT.md (sections 3, 4.1, 6)

**For DevOps/Deployment:**
1. replit.md
2. ARCHITECTURE_OVERVIEW.txt (section "DEPLOYMENT")
3. DEVELOPER_ONBOARDING.md (Git Workflow)

**For Full Stack:**
1. All documents (in order listed in "QUICK START PATH")

---

## 🆘 TROUBLESHOOTING

### "I can't find information about X"
1. Check the "FIND INFORMATION BY TASK" section above
2. Use Ctrl+F to search within documentation
3. Check related sections in PROJECT_ORIENTATION_REPORT.md

### "The documentation is out of date"
Contact: rafael@xxlnutrition.nl

### "I have a question not covered here"
Check:
1. PROJECT_ORIENTATION_REPORT.md (Sections 14-16)
2. DEVELOPER_ONBOARDING.md (Section "Getting Help")

---

## 🌟 KEY CONCEPTS TO UNDERSTAND

### Monorepo Structure
- `/client/` = React frontend
- `/server/` = Express backend
- `/shared/` = Shared types & schemas
- TypeScript path aliases: `@/*` and `@shared/*`

### Streaming Architecture
- Frontend ChatBot sends message to `/api/chat`
- Backend streams OpenAI responses as Server-Sent Events (SSE)
- Frontend displays response character-by-character in real-time

### Dark Mode First
- All styling uses dark mode as primary theme
- Tailwind CSS dark mode enabled globally
- Colors designed for contrast and accessibility (WCAG AA+)

### Type Safety
- 100% TypeScript (strict mode)
- Shared schemas between frontend & backend
- Zod for runtime validation

### Component Library
- shadcn/ui built on Radix UI primitives
- 40+ accessible components ready to use
- Tailwind CSS for styling
- Component registry in `components.json`

---

## 📞 CONTACT & RESOURCES

**Project Owner:** rafael@xxlnutrition.nl

**External Resources:**
- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com
- shadcn/ui: https://ui.shadcn.com
- Express: https://expressjs.com
- TypeScript: https://www.typescriptlang.org
- OpenAI API: https://platform.openai.com

---

## ✅ DOCUMENTATION CHECKLIST FOR NEW DEVELOPERS

- [ ] Read ARCHITECTURE_OVERVIEW.txt
- [ ] Read DEVELOPER_ONBOARDING.md
- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` successfully
- [ ] Open landing page in browser
- [ ] Test ChatBot widget
- [ ] Read design_guidelines.md
- [ ] Read PROJECT_ORIENTATION_REPORT.md (at least sections 1-5)
- [ ] Make a small UI change and test locally
- [ ] Verify TypeScript: `npm run check`
- [ ] Deploy and test in production environment

---

**Documentation Last Updated:** October 18, 2025  
**Project Status:** Active Development  
**Total Documentation:** ~50KB across 5 files

For the most up-to-date information, refer to the specific documentation files listed above.
