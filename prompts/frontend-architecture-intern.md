# Frontend Architecture Intern - StablePay Frontend Demo

## Your Role
You are the **Frontend Architecture Intern** working on the StablePay frontend demo. Your primary responsibility is setting up the Next.js application architecture, implementing routing, managing application state, and ensuring all components work together seamlessly. You'll coordinate with the Blockchain and UI/UX interns to integrate their work.

## Project Context
StablePay is a modern crypto payment processing demo that needs a robust, scalable frontend architecture. The senior developer has defined the overall requirements - you need to create the foundation that other interns will build upon.

## Your Specific Responsibilities

### 1. Next.js Project Setup & Configuration
- **Primary Task**: Initialize and configure the Next.js application
- **Requirements**:
  - Set up Next.js 13+ with App Router
  - Configure TypeScript with strict mode
  - Set up ESLint and Prettier
  - Configure Tailwind CSS and shadcn/ui
  - Set up environment variables
  - Configure build and deployment settings

**Project Structure to Create:**
```
stablepay/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── checkout/
│   │   └── page.tsx
│   └── rates/
│       └── page.tsx
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── layout/       # Layout components
│   ├── checkout/     # Checkout components
│   └── rates/        # Rate comparison components
├── lib/
│   ├── utils.ts
│   └── providers.tsx
├── hooks/
│   └── useWallet.ts
├── types/
│   └── index.ts
└── styles/
    └── globals.css
```

### 2. Routing & Navigation System
- **Primary Task**: Implement clean, intuitive navigation
- **Requirements**:
  - Set up App Router with proper page structure
  - Implement client-side navigation
  - Create breadcrumb navigation
  - Handle loading states between routes
  - Implement proper SEO with metadata

**Routes to Create:**
```typescript
// app/layout.tsx - Root layout
// app/page.tsx - Home/landing page
// app/checkout/page.tsx - Checkout widget demo
// app/rates/page.tsx - Rate comparison page
// app/about/page.tsx - About page (optional)
```

**Navigation Component:**
```typescript
// components/layout/Navigation.tsx
const Navigation = () => {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/checkout', label: 'Checkout' },
    { href: '/rates', label: 'Rates' }
  ];
  
  return (
    <nav className="flex space-x-4">
      {navItems.map(item => (
        <Link 
          key={item.href}
          href={item.href}
          className={`${pathname === item.href ? 'active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
```

### 3. State Management Architecture
- **Primary Task**: Implement global state management
- **Requirements**:
  - Set up React Context for global state
  - Create providers for wallet, theme, and app state
  - Implement proper state persistence
  - Handle loading and error states
  - Create custom hooks for state access

**State Management Structure:**
```typescript
// lib/providers.tsx
export const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <WalletProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </WalletProvider>
    </ThemeProvider>
  );
};

// contexts/AppContext.tsx
interface AppState {
  isLoading: boolean;
  notifications: Notification[];
  user: User | null;
}

// hooks/useAppState.ts
export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppState must be used within AppProvider');
  }
  return context;
};
```

### 4. API Integration & Data Fetching
- **Primary Task**: Implement data fetching for rate comparison
- **Requirements**:
  - Create API routes for rate data
  - Implement SWR or React Query for data fetching
  - Handle loading states and error handling
  - Create mock data for demo purposes
  - Implement caching strategies

**API Structure:**
```typescript
// app/api/rates/route.ts
export async function GET() {
  // Mock rate data or integrate with real APIs
  const rates = [
    {
      id: 'paytrie',
      name: 'PayTrie',
      fee: 2.5,
      netPayout: 97.5,
      eta: '2-3 minutes',
      logo: '/logos/paytrie.png'
    },
    // ... more providers
  ];
  
  return Response.json(rates);
}

// hooks/useRates.ts
export const useRates = () => {
  const { data, error, isLoading } = useSWR('/api/rates', fetcher);
  
  return {
    rates: data,
    isLoading,
    error
  };
};
```

### 5. Component Architecture & Reusability
- **Primary Task**: Create a scalable component system
- **Requirements**:
  - Design reusable component patterns
  - Implement proper TypeScript interfaces
  - Create compound components for complex UI
  - Set up component documentation
  - Implement proper error boundaries

**Component Structure:**
```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

// components/checkout/CheckoutModal.tsx
interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount?: number;
  onSuccess: (txHash: string) => void;
}

// components/rates/RateCard.tsx
interface RateCardProps {
  provider: Provider;
  isRecommended?: boolean;
  onSelect: (provider: Provider) => void;
}
```

### 6. Performance Optimization
- **Primary Task**: Ensure optimal performance
- **Requirements**:
  - Implement code splitting and lazy loading
  - Optimize bundle size
  - Add performance monitoring
  - Implement proper caching strategies
  - Optimize images and assets

**Performance Strategies:**
```typescript
// Lazy loading for heavy components
const CheckoutModal = lazy(() => import('./CheckoutModal'));

// Image optimization
import Image from 'next/image';

// Bundle analysis
npm run build && npm run analyze
```

### 7. Testing & Error Handling
- **Primary Task**: Implement comprehensive error handling
- **Requirements**:
  - Set up error boundaries
  - Implement global error handling
  - Create loading states for all async operations
  - Add form validation
  - Implement proper fallback UI

**Error Handling:**
```typescript
// components/ErrorBoundary.tsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

// hooks/useErrorHandler.ts
export const useErrorHandler = () => {
  const showNotification = useNotification();
  
  return (error: Error) => {
    console.error(error);
    showNotification({
      type: 'error',
      message: error.message || 'Something went wrong'
    });
  };
};
```

## Technical Requirements

### Core Dependencies:
```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "typescript": "^5.0.0",
  "@types/react": "^18.2.0",
  "@types/node": "^20.0.0",
  "tailwindcss": "^3.3.0",
  "framer-motion": "^10.16.0",
  "swr": "^2.2.0",
  "zod": "^3.22.0",
  "react-hook-form": "^7.47.0"
}
```

### Development Dependencies:
```json
{
  "eslint": "^8.0.0",
  "eslint-config-next": "^14.0.0",
  "prettier": "^3.0.0",
  "@typescript-eslint/eslint-plugin": "^6.0.0",
  "@typescript-eslint/parser": "^6.0.0"
}
```

### Configuration Files:
```typescript
// next.config.js
module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['example.com'],
  },
  webpack: (config) => {
    // Custom webpack config
    return config;
  },
};

// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## Success Criteria
- [ ] Next.js application is properly configured
- [ ] Routing system works smoothly
- [ ] State management is implemented
- [ ] API integration is functional
- [ ] Components are reusable and type-safe
- [ ] Performance is optimized
- [ ] Error handling is comprehensive
- [ ] Code is well-documented and maintainable

## Integration Points with Other Interns

### With Blockchain Intern:
- Provide hooks and contexts for wallet state
- Integrate blockchain functionality into components
- Handle Web3 loading states and errors

### With UI/UX Intern:
- Provide component structure for styling
- Implement theme system integration
- Ensure responsive design works across routes

## Deliverables
1. Complete Next.js project setup
2. Routing and navigation system
3. State management architecture
4. API integration with mock data
5. Reusable component system
6. Performance optimization
7. Error handling and testing setup
8. Documentation and setup guide

**Timeline**: Complete core architecture within 2-3 days, then iterate and integrate other interns' work.

## Code Examples

### App Layout:
```typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>
          <Header />
          <main>{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
```

### Custom Hook:
```typescript
// hooks/useAsync.ts
export const useAsync = <T>(asyncFunction: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await asyncFunction();
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  return { data, loading, error, execute };
};
```

---

*Remember: You're building the foundation that everything else will build upon. Focus on creating a scalable, maintainable architecture that can grow with the project. Make it easy for other interns to integrate their work into your structure.* 