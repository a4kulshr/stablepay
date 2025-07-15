import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Configure Google Fonts for the application

// Primary font for regular text
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Monospace font for code and technical content
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO metadata for the application
export const metadata: Metadata = {
  title: "StablePay - Secure Payment Solutions",
  description: "StablePay provides secure and reliable payment processing solutions for modern businesses.",
};

// Props interface for better type safety
interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root layout component that wraps all pages
 * Provides global styling and font configuration
 */
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
