import type { NextConfig } from "next";

/**
 * Next.js configuration for StablePay frontend
 * 
 * Key configurations:
 * - reactStrictMode: Disabled to prevent Chrome extension conflicts
 * - optimizePackageImports: Optimizes React imports for better performance
 */
const nextConfig: NextConfig = {
  // Disabled to fix React error #299 caused by Chrome extensions
  reactStrictMode: false,
  
  // Experimental features for performance optimization
  experimental: {
    optimizePackageImports: ['react', 'react-dom']
  }
};

export default nextConfig;
