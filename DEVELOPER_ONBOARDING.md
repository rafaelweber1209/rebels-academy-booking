# Developer Onboarding - Quick Start Guide

Welcome to the MuscleCoach project! This guide complements the detailed `PROJECT_ORIENTATION_REPORT.md` with practical next steps.

## 📋 Pre-flight Checklist (First 10 minutes)

- [ ] Read this file (you're doing it!)
- [ ] Install dependencies: `npm install`
- [ ] Set environment variable: `OPENAI_API_KEY=your_api_key` (ask team for this)
- [ ] Run development server: `npm run dev`
- [ ] Verify no TypeScript errors: `npm run check`
- [ ] Open the app in browser and test navigation

## 🚀 Running the Project

### Development
```bash
npm run dev
# Opens at: https://workspace.projectname.replit.dev
# Changes auto-reload with HMR (Hot Module Replacement)
```

### Production Build & Test
```bash
npm run build      # Builds frontend + backend
npm start          # Runs production server
```

### Type Checking
```bash
npm run check      # Validates TypeScript, no build artifacts
```

## 📁 What to Explore First

### Understanding the Architecture
1. **Read these files in order:**
   - `design_guidelines.md` - Get familiar with the design system
   - `replit.md` - Understand deployment and environment
   - `PROJECT_ORIENTATION_REPORT.md` - Deep dive into architecture

2. **Walk through the code:**
   - `client/src/App.tsx` (5 min) - App root structure
   - `client/src/pages/home.tsx` (15 min) - Main landing page
   - `server/index.ts` (5 min) - Backend entry point
   - `server/routes.ts` (10 min) - ChatBot API endpoint

3. **Explore UI Components:**
   - `client/src/components/ChatBot.tsx` - Streaming implementation
   - `client/src/components/ui/` - Use any of 40+ components

## 🎯 Common First Tasks

### 1. Modify Landing Page Copy
- **File:** `client/src/pages/home.tsx`
- **Search for:** "Stop met gokken" (hero title)
- **Change:** Any text, CTA buttons, section headers
- **Test:** Save and reload - HMR updates instantly

### 2. Update Hero Image
- **File:** `client/src/pages/home.tsx` (line 9)
- **Current:** `heroImage` import
- **Action:** Replace with new PNG from `attached_assets/`
- **Example:** `import heroImage from "@assets/your-image.png"`

### 3. Test ChatBot Locally
- **Prerequisite:** OPENAI_API_KEY env var set
- **Action:** Click floating chat button (bottom-right)
- **Test:** Send a message, should stream response
- **Debug:** Check browser DevTools Network/Console

### 4. Change Colors or Spacing
- **Files:** 
  - `tailwind.config.ts` - Theme colors
  - `client/src/pages/home.tsx` - Inline Tailwind classes
- **Example:** Change `bg-primary` to `bg-blue-600`
- **How:** Search and replace Tailwind class names

## 🔧 Development Workflow Tips

### Git Workflow
```bash
git status                    # See what changed
git add .                     # Stage all changes
git commit -m "Brief message" # Commit
git push                      # Deploy to Replit
```

### Debugging
```bash
# Terminal: View server logs in real-time
npm run dev

# Browser: Open DevTools (F12)
# - Console tab: React/JS errors
# - Network tab: API calls (/api/chat)
# - React DevTools: Component state/props
```

### Type Safety
```bash
# Before committing, always check:
npm run check

# This catches TypeScript errors early
```

## 🎨 Design System at a Glance

**Colors:**
- Background: `#121212` (near-black)
- Accent: `#D92121` (red - use for CTAs)
- Text: `#FFFFFF` (white), `#A8A8A8` (gray)

**Typography:**
- Font: Inter (imported from Google Fonts)
- Hero: `text-7xl font-bold` (desktop)
- Body: `text-lg` or `text-base`
- All via Tailwind utilities

**Responsive:**
- Mobile-first approach
- `md:` prefix for tablet (768px+)
- `lg:` prefix for desktop (1024px+)

## 📚 Key Files Reference

| File | Purpose | Edit When |
|------|---------|-----------|
| `client/src/pages/home.tsx` | Landing page | Changing copy, sections, images |
| `client/src/components/ChatBot.tsx` | Chat widget | Modifying bot behavior |
| `server/routes.ts` | API endpoints | Adding new endpoints or changing AI prompt |
| `design_guidelines.md` | Design spec | Understanding brand & patterns |
| `tailwind.config.ts` | Tailwind theme | Changing colors/spacing globally |

## 🚨 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Images not showing | Check `attached_assets/` folder, verify filename in import |
| Styling not updating | Save file, check console for build errors |
| ChatBot not responding | Check OPENAI_API_KEY env var is set, check browser console |
| TypeScript errors | Run `npm run check`, hover over red squiggly lines |
| Build fails | Delete `node_modules/`, run `npm install`, try again |

## 🔐 Environment Variables

Create `.env` file in project root:
```env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
PORT=3000  # Usually auto-set by Replit
```

**Never commit `.env` to git!** (Already in `.gitignore`)

## 🧪 Testing Locally

### Test Responsiveness
1. Open browser DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test at: 375px (mobile), 768px (tablet), 1440px (desktop)

### Test Navigation Links
- Header nav links should scroll to sections
- "Features" button → scrolls to #features
- "Waarom MuscleCoach?" → scrolls to #problem-cause

### Test ChatBot
1. Click floating button (bottom-right)
2. Type a question: "Wat is MuscleCoach?"
3. Should see streaming response
4. Message history persists in localStorage

## 📞 Getting Help

1. **Check the documentation:**
   - `PROJECT_ORIENTATION_REPORT.md` (comprehensive reference)
   - `design_guidelines.md` (design patterns)
   - `replit.md` (deployment)

2. **Look at test IDs:**
   - All elements have `data-testid` attributes
   - Search file for `testid` to find specific elements

3. **Contact project owner:**
   - Email: rafael@xxlnutrition.nl

## ✅ First Week Milestones

- **Day 1:** Understand project structure, run locally, explore code
- **Day 2:** Make small UI change (copy text, button color), test locally
- **Day 3:** Understand ChatBot implementation, test streaming
- **Day 4:** Add a feature or fix a bug
- **Day 5:** Deploy to Replit, verify in production

## 🎓 Learning Resources

**Tech Stack Docs:**
- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com
- shadcn/ui: https://ui.shadcn.com
- Express: https://expressjs.com

**Patterns Used:**
- Monorepo structure (client + server in one repo)
- Server-Sent Events (SSE) for streaming responses
- TypeScript path aliases for clean imports

---

**Last Updated:** October 18, 2025  
**For detailed info:** See `PROJECT_ORIENTATION_REPORT.md`
