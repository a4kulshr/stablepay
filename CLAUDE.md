🟢 **ROLE**  
You are an experienced senior front-end engineer.

🟢 **GOAL**  
Create a *UI-only* prototype that looks production-ready, using the tech stack below.  
No external database or server-side language is required for now (all state may live in localStorage or in-memory).

🟢 **TECH STACK (lock these in)**
• React 19 (stable) – functional components, hooks, Suspense, Actions API.  
• Next.js 15 (App Router) – “static export” mode (`output: 'export'`).  
• TypeScript strict mode.  
• Tailwind CSS 4.0 (JIT) for styling + theming.  
• shadcn/ui component library (Radix under the hood).  
• Lucide-react icon set.  
• Framer-Motion for micro-animations.  
• Deployed on Vercel (assume the free tier).  

🟢 **VISUAL DIRECTION**  
A modern, minimal SaaS aesthetic: soft neutrals, ample white space, rounded-xl corners, subtle shadows.  
Dark/light theme toggle built with CSS variables in Tailwind 4.  

🟢 **FEATURE SCOPE**  
Implement the pages/components below – *static JSON data is fine*:

1. **Landing page**  
   - Hero section with headline, call-to-action button, responsive illustration.  
   - Feature grid (3-4 cards with icon, title, blurb).  
   - Testimonial slider (auto + manual).  
   - Pricing section (3 tier cards).  
   - Footer with links + social icons.

2. **Dashboard mock**  
   - Sidebar navigation (collapsible on mobile).  
   - Data-table demo using TanStack Table (filter, sort, pagination) fed by `/data/mock.json`.  
   - Settings drawer with dark/light toggle.

3. **Form wizard**  
   - Multi-step form (3 steps) using React 19 *Actions* for optimistic UX.  
   - Progress indicator, client-side validation, success screen with confetti animation.

4. **Style guide / Storybook**  
   - Expose all core components (Button, Card, Modal, Tooltip, Skeleton) with props controls.

5. **404 page**  
   - Fun illustration + “Go home” link.

🟢 **NON-NEGOTIABLE QUALITY CHECKS**  
• Fully responsive (mobile-first).  
• a11y: semantic HTML, aria-labels for interactive elements.  
• ESLint (airbnb-typescript) + Prettier, CI fails on lint errors.  
• Husky pre-commit: `lint`, `type-check`, `test` (use Vitest + React Testing Library for 2 smoke tests).  
• README with setup, commands, and screenshot GIF.

🟢 **OUTPUT**  
Return a zipped Next.js repo or a GitHub Gist link containing:  