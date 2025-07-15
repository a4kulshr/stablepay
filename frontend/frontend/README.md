# StablePay Frontend

A modern, secure payment processing platform built with Next.js 15 and React 19.

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19 (functional components, hooks)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4.0
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Homepage component
│   └── globals.css     # Global styles & theme
├── components/         # Reusable components (add as needed)
└── lib/               # Utility functions (add as needed)
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Styling

- Uses Tailwind CSS 4.0 with custom CSS variables
- Dark/light theme support built-in
- Responsive design (mobile-first approach)
- Custom fonts: Geist Sans & Geist Mono

## 🔍 Development Notes

- React Strict Mode is currently disabled to prevent Chrome extension conflicts
- Package imports are optimized for better performance
- All components use TypeScript for type safety
- Comments explain temporary vs permanent code sections

## 🚧 Current Status

This is a starter template with Next.js default content. The actual StablePay features will be built on top of this foundation.

## 📝 Next Steps

1. Replace placeholder content with actual StablePay components
2. Add payment processing components
3. Implement user authentication
4. Add dashboard functionality
5. Set up API integration
