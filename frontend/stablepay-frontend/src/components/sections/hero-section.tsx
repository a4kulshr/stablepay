"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">StablePay</span>
              </motion.div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Dashboard
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Secure Payment
            <br />
            <span className="text-primary">Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Modern payment processing platform with advanced security features
            and seamless integration for businesses of all sizes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </motion.div>
        </div>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center items-center gap-8 sm:gap-12 text-muted-foreground"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-2">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-sm">Secure</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-2">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-sm">Fast</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-2">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-sm">Reliable</span>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}