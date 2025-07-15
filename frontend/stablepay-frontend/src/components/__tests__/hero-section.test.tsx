import { render, screen } from '@testing-library/react'
import { HeroSection } from '../sections/hero-section'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: React.ComponentProps<'h1'>) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: React.ComponentProps<'p'>) => <p {...props}>{children}</p>,
  },
}))

// Mock theme toggle component
jest.mock('../theme-toggle', () => ({
  ThemeToggle: () => <button>Theme Toggle</button>,
}))

describe('HeroSection', () => {
  it('renders the main heading', () => {
    render(<HeroSection />)
    expect(screen.getByText('Secure Payment')).toBeInTheDocument()
    expect(screen.getByText('Solutions')).toBeInTheDocument()
  })

  it('renders the call-to-action buttons', () => {
    render(<HeroSection />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders the navigation with StablePay logo', () => {
    render(<HeroSection />)
    expect(screen.getByText('StablePay')).toBeInTheDocument()
  })
})