# MuscleCoach Landing Page

## Overview

MuscleCoach is a fitness application landing page built to showcase an AI-driven fitness coaching platform. The project is a modern, dark-themed landing page designed to convert visitors into app users by highlighting the platform's unique AI-powered features for personalized training and muscle growth optimization.

The application is built as a full-stack TypeScript project with a React frontend and Express backend, though currently focused on the landing page presentation layer.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18+ with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query for server state management

**UI Framework:**
- shadcn/ui component library (Radix UI primitives)
- Tailwind CSS for styling with a custom dark mode theme
- Component configuration follows the "new-york" style variant

**Design System:**
- Dark-mode first approach with a premium aesthetic
- Primary color palette: Near-black backgrounds (#121212, #1E1E1E) with red accent (#D92121)
- Inter font family from Google Fonts
- Responsive design with mobile-first principles
- Design guidelines emphasize trust, professionalism, and data-driven credibility

**Routing:**
- Simple client-side routing via Wouter
- Current routes: Home page ("/") and 404 fallback
- Minimal routing structure suitable for a landing page

**State Management:**
- React Query for asynchronous state and caching
- React hooks for local component state
- Toast notifications for user feedback

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- ESM module system (type: "module")
- Development and production build configurations

**Development Setup:**
- Vite middleware integration for HMR in development
- Custom error overlay via Replit plugins
- Source mapping for debugging

**Storage Layer:**
- In-memory storage implementation (MemStorage class)
- Interface-based design (IStorage) allowing for easy database migration
- Currently implements basic user CRUD operations

**Build Process:**
- Frontend: Vite builds to `dist/public`
- Backend: esbuild bundles server code to `dist`
- Separate development (tsx) and production (node) execution

### External Dependencies

**Database (Configured but Not Implemented):**
- Drizzle ORM configured for PostgreSQL
- Neon Database serverless driver (@neondatabase/serverless)
- Schema defined in `shared/schema.ts` with basic user model
- Migration support via drizzle-kit
- Note: Database integration is configured but storage currently uses in-memory implementation

**UI Component Libraries:**
- Radix UI primitives for accessible components (40+ component primitives)
- Embla Carousel for testimonial/content carousels
- Lucide React for icons
- class-variance-authority and clsx for conditional styling

**Form Handling:**
- React Hook Form with Zod resolvers for validation
- drizzle-zod for schema-based validation

**Utility Libraries:**
- date-fns for date manipulation
- tailwind-merge for className utilities

**Development Tools:**
- Replit-specific plugins for development banner, cartographer, and error modal
- PostCSS with Tailwind and Autoprefixer

**Asset Management:**
- Generated images stored in `attached_assets` directory
- Vite alias configuration for easy asset imports (@assets)

### Key Architectural Decisions

**Monorepo Structure:**
- Shared TypeScript code in `/shared` (schemas, types)
- Client code in `/client`
- Server code in `/server`
- Path aliases configured in tsconfig for clean imports

**Type Safety:**
- Strict TypeScript configuration across the entire codebase
- Shared schema definitions between client and server
- Zod for runtime validation

**Styling Approach:**
- CSS variables for theme customization
- Tailwind utility classes with custom design tokens
- Component-scoped styling via shadcn/ui patterns
- Dark mode as the default and primary theme

**Session Management:**
- Express session support configured (connect-pg-simple)
- Cookie-based sessions ready for authentication implementation

**Code Organization:**
- Component library follows shadcn/ui conventions
- Separation of UI components from page components
- Hooks directory for reusable React logic
- Utility functions centralized in lib directory