"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Globe, CreditCard, BarChart3, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Advanced encryption and fraud detection to protect every transaction with military-grade security protocols.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process payments in milliseconds with our optimized infrastructure and global network coverage.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Accept payments from anywhere in the world with support for 100+ currencies and payment methods.",
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Methods",
    description: "Support for cards, digital wallets, bank transfers, and emerging payment technologies.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and detailed reporting to help you understand your payment patterns.",
  },
  {
    icon: Lock,
    title: "PCI Compliant",
    description: "Fully certified and compliant with industry standards for secure payment processing.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            Why Choose StablePay?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Built for modern businesses that need reliable, secure, and scalable payment solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}