# MuscleCoach Landing Page Design Guidelines

## Design Approach: Reference-Based
**Primary Inspiration:** Modern fitness app aesthetics (similar to Strava, Nike Training Club) combined with dark-mode SaaS landing pages (Linear, Stripe). The design emphasizes professionalism, data-driven credibility, and AI sophistication through a bold dark theme with strategic red accents.

## Core Design Principles
- **Trust through darkness:** Premium dark interface (#121212) establishes sophistication and focus
- **Strategic boldness:** Red accent (#D92121) reserved for CTAs and critical highlights only
- **Data-driven credibility:** Clean layouts that let features and social proof speak
- **Action-oriented:** Every section drives toward app download conversion

## Color Palette

**Dark Mode (Primary):**
- Background Primary: 0 0% 7% (near-black base)
- Background Secondary: 0 0% 12% (elevated cards/sections)
- Accent Red: 0 84% 49% (primary CTA color - matches logo)
- Text Primary: 0 0% 100% (pure white for headers/important text)
- Text Secondary: 0 0% 66% (muted gray for descriptions)

## Typography
**Font Family:** Inter (Google Fonts - weights 400, 600, 700)

**Hierarchy:**
- H1 (Hero Title): 64px / font-bold - commanding presence
- H2 (Section Headers): 48px / font-bold - clear visual breaks
- Body Text: 18px / font-normal - comfortable reading
- Button Text: 16px / font-semibold - clear actionability

## Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 (py-4, px-6, gap-8, etc.)
- Section Padding: py-20 md:py-24 (generous vertical rhythm)
- Container: max-w-7xl mx-auto px-6
- Card Spacing: p-8 with gap-6 between elements
- Content Max Width: max-w-4xl for text-heavy sections

## Component Library

### Navigation Header
- Dark background with subtle border-bottom
- Logo left, navigation links center, primary CTA button right
- Sticky positioning on scroll with slight backdrop blur
- Links: Features | Waarom MuscleCoach? (minimal, focused)

### Buttons
**Primary (.btn-primary):**
- Red background (#D92121), white text
- py-3 px-8 rounded-lg
- Grow on hover (scale-105 transform)
- Shadow: shadow-lg shadow-red-500/20

**Secondary (.btn-secondary):**
- Transparent background, 1px white border
- White text, transitions to red fill on hover
- Same padding/border-radius as primary

### Hero Section (Two-Column)
- Split: 60% text / 40% visual on desktop
- Text (left): Large H1, supporting paragraph, dual CTAs stacked vertically on mobile
- Visual (right): Smartphone mockup frame with app screenshot
- Background: Subtle gradient from #121212 to #1E1E1E (top to bottom)

### Problem-Cause Section
- Centered H2 + explanatory paragraph
- Three-column grid (stacks to 1 column mobile): md:grid-cols-3
- Each card: icon/emoji top, bold title, description text
- Cards: secondary background (#1E1E1E), subtle border, p-6

### Features Grid (2x2)
- H2 header with supporting text
- Grid: grid-cols-1 md:grid-cols-2 with gap-8
- Each feature card contains:
  - Screenshot/visual (top or left side)
  - Title (h3 text-2xl)
  - Description paragraph
  - Optional "Learn more" link in accent red

### Testimonials Carousel
- H2 section header
- Horizontal scrollable cards (3 visible on desktop, 1 on mobile)
- Each testimonial: quote text, user name, optional avatar placeholder
- Navigation arrows (left/right) with subtle hover states

### Final CTA Section
- Full-width centered content
- Large H2, supporting text
- Download badges (App Store + Play Store) displayed horizontally
- Background: subtle gradient or pattern for visual interest

### Footer (Four-Column)
- Column 1: Logo + tagline + social icons
- Column 2: Product links
- Column 3: Support/legal links  
- Column 4: Contact info
- Stacks to single column on mobile
- Copyright bar at bottom: text-sm text-secondary

## Images

**Hero Visual:** 
- Smartphone mockup (right side of hero) showing app interface
- Use mock screenshot of workout tracking screen with red accent highlights

**Feature Screenshots (4 total):**
1. AI Program Generator: Show questionnaire/analysis interface
2. Recovery Tracking: Display recovery metrics dashboard with graphs
3. Progressive Overload Advices: Workout screen with weight/rep recommendations
4. AI Coach Dashboard: Overview screen with insights and suggestions

**Store Badges:**
- App Store and Google Play download badges (standard assets)
- Placed in final CTA section, horizontally aligned

## Animations
- Minimal, purposeful motion only
- Button hover: subtle scale (1.05) and shadow increase
- Scroll-triggered fade-in for feature cards (stagger 100ms)
- Testimonial carousel: smooth slide transition (300ms ease)
- Hero elements: slight fade-up on page load

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked CTAs)
- Tablet: 768px - 1024px (adjusted grid cols, reduced spacing)
- Desktop: > 1024px (full multi-column layouts)

## Accessibility
- Maintain dark mode throughout (no sudden white sections)
- High contrast: white text on dark backgrounds
- Focus states: 2px red outline on interactive elements
- Alt text for all images and badges
- Semantic HTML structure (<header>, <main>, <section>, <footer>)