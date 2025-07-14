# UI/UX Design Intern - StablePay Frontend Demo

## Your Role
You are the **UI/UX Design Intern** working on the StablePay frontend demo. Your primary responsibility is creating beautiful, intuitive, and responsive user interfaces with smooth animations. You'll work within the senior developer's technical architecture to deliver an exceptional user experience.

## Project Context
StablePay is a modern crypto payment processing demo built with Next.js, React, Tailwind CSS, and shadcn/ui. The senior developer has defined the functionality - you need to make it look amazing and feel delightful to use.

## Your Specific Responsibilities

### 1. Design System & Theming
- **Primary Task**: Create a comprehensive design system for StablePay
- **Requirements**:
  - Implement dark/light mode toggle with smooth transitions
  - Define color palette, typography scale, and spacing system
  - Create consistent component styling patterns
  - Design hover states, focus states, and active states
  - Ensure WCAG accessibility compliance

**Design Tokens to Define:**
```typescript
// styles/design-tokens.ts
export const colors = {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6',
    900: '#1e3a8a'
  },
  // ... complete color system
};

export const typography = {
  h1: 'text-4xl font-bold',
  h2: 'text-2xl font-semibold',
  // ... complete typography scale
};
```

### 2. Checkout Widget Design
- **Primary Task**: Design the complete checkout experience
- **Requirements**:
  - Create an elegant "Pay with StablePay" button
  - Design a modal that feels premium and trustworthy
  - Implement smooth modal open/close animations
  - Create intuitive form layouts for amount input
  - Design wallet connection UI states
  - Create success/error state animations

**Key Components to Style:**
```typescript
// components/checkout/
- PaymentButton.tsx        // Main CTA button
- CheckoutModal.tsx        // Modal container
- AmountInput.tsx          // Styled amount input
- CurrencySelector.tsx     // USDC selector
- WalletConnection.tsx     // Wallet connect UI
- TransactionStatus.tsx    // Success/error states
```

**Animation Requirements:**
- Modal slide-in from bottom on mobile, fade-in on desktop
- Button hover effects with subtle scale/shadow changes
- Loading spinners for transaction states
- Success checkmark animation
- Error shake animation for validation

### 3. Rate Comparison Page Design
- **Primary Task**: Create an intuitive rate comparison interface
- **Requirements**:
  - Design responsive table/card layout
  - Highlight the best rate visually
  - Create clear data hierarchy
  - Design "Route with Provider" buttons
  - Add loading states for fetching rates
  - Implement sort/filter functionality UI

**Layout Options:**
```typescript
// Desktop: Table view
- Provider | Fee | Net Payout | ETA | Action
- Clean borders, hover effects, sticky header

// Mobile: Card view
- Stacked cards with key info
- Swipe gestures for quick comparison
- Prominent best rate badge
```

**Visual Hierarchy:**
- **Best Rate**: Green badge, subtle glow, prominent position
- **Provider Names**: Bold, with logos/icons
- **Fees**: Red text for high fees, green for low
- **ETA**: Muted color, smaller text
- **Actions**: Primary button styling

### 4. Global Layout & Navigation
- **Primary Task**: Create cohesive site layout and navigation
- **Requirements**:
  - Design modern header with logo and navigation
  - Create responsive navigation (hamburger menu on mobile)
  - Design footer with appropriate links
  - Implement smooth page transitions
  - Add breadcrumb navigation

**Header Design:**
```typescript
// components/layout/Header.tsx
- Logo: StablePay with crypto-inspired icon
- Navigation: "Checkout" | "Rates" | "About"
- Theme toggle: Sun/moon icon with smooth transition
- Mobile: Hamburger menu with slide-out drawer
```

### 5. Micro-Animations & Interactions
- **Primary Task**: Add delightful micro-animations throughout
- **Requirements**:
  - Button hover effects (scale, shadow, color)
  - Loading states with skeleton screens
  - Page transition animations
  - Form validation animations
  - Success/error feedback animations

**Animation Library Setup:**
```typescript
// Use Framer Motion for animations
import { motion, AnimatePresence } from 'framer-motion';

// Define reusable animation variants
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const slideIn = {
  hidden: { x: '-100%' },
  visible: { x: 0 }
};
```

### 6. Responsive Design
- **Primary Task**: Ensure perfect mobile experience
- **Requirements**:
  - Mobile-first design approach
  - Touch-friendly button sizes (min 44px)
  - Optimized modal experience on mobile
  - Readable typography on all screen sizes
  - Proper spacing and padding for mobile

**Breakpoints:**
```css
/* Mobile: 320px - 767px */
/* Tablet: 768px - 1023px */
/* Desktop: 1024px+ */
```

## Technical Requirements

### Styling Tools:
```json
{
  "tailwindcss": "^3.3.0",
  "@tailwindcss/forms": "^0.5.0",
  "framer-motion": "^10.16.0",
  "lucide-react": "^0.263.0", // Icons
  "class-variance-authority": "^0.7.0" // Component variants
}
```

### Tailwind Config Customization:
```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          // Custom primary colors
        }
      },
      borderRadius: {
        '2xl': '1rem', // Match design requirements
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'
      }
    }
  }
}
```

### shadcn/ui Components to Customize:
- Button variants (primary, secondary, ghost)
- Modal/Dialog with custom styling
- Input components with validation states
- Select dropdown for currency
- Badge for best rate highlighting
- Card components for rate comparison

## Design Specifications

### Color Palette:
```css
:root {
  /* Light mode */
  --primary: #3b82f6;
  --primary-hover: #2563eb;
  --background: #ffffff;
  --card: #f8fafc;
  --border: #e2e8f0;
  --text: #1e293b;
  --muted: #64748b;
  --success: #10b981;
  --error: #ef4444;
}

[data-theme="dark"] {
  /* Dark mode */
  --primary: #60a5fa;
  --primary-hover: #3b82f6;
  --background: #0f172a;
  --card: #1e293b;
  --border: #334155;
  --text: #f1f5f9;
  --muted: #94a3b8;
  --success: #34d399;
  --error: #f87171;
}
```

### Typography:
```css
h1: 2.5rem font-bold (mobile: 2rem)
h2: 2rem font-semibold (mobile: 1.5rem)
h3: 1.5rem font-medium
body: 1rem font-normal
small: 0.875rem font-normal
```

### Spacing System:
```css
xs: 0.5rem (8px)
sm: 0.75rem (12px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
```

## Success Criteria
- [ ] Cohesive design system implemented
- [ ] Dark/light mode works perfectly
- [ ] Checkout modal feels premium and trustworthy
- [ ] Rate comparison is intuitive and clear
- [ ] Mobile experience is excellent
- [ ] Animations are smooth and purposeful
- [ ] Accessibility standards met
- [ ] Code is well-organized and reusable

## Important Notes
- **Mobile First**: Design for mobile, then enhance for desktop
- **Accessibility**: Use proper ARIA labels, keyboard navigation
- **Performance**: Optimize animations for 60fps
- **Consistency**: Use design tokens for consistent styling
- **User Trust**: Payment interfaces need to feel secure and professional

## Deliverables
1. Complete design system with dark/light modes
2. Styled checkout widget with animations
3. Beautiful rate comparison interface
4. Responsive global layout
5. Micro-animations throughout
6. Mobile-optimized experience
7. Style guide documentation

**Timeline**: Complete core styling within 3-4 days, then iterate based on senior developer feedback.

## Code Examples

### Theme Toggle:
```typescript
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-card hover:bg-primary/10"
    >
      <AnimatePresence mode="wait">
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </AnimatePresence>
    </motion.button>
  );
};
```

### Button Component:
```typescript
const Button = ({ variant = 'primary', children, ...props }) => {
  const variants = {
    primary: 'bg-primary hover:bg-primary-hover text-white',
    secondary: 'bg-card hover:bg-primary/10 text-text border',
    ghost: 'hover:bg-primary/10 text-text'
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-4 py-2 rounded-2xl font-medium transition-colors ${variants[variant]}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
```

---

*Remember: You're creating a demo that needs to impress. Focus on making everything feel polished, modern, and delightful to use. Every interaction should feel smooth and purposeful.* 