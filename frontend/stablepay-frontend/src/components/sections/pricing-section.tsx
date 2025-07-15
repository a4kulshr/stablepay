"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Starter",
    price: "$29",
    period: "month",
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 1,000 transactions/month",
      "Basic analytics dashboard",
      "Email support",
      "Standard security features",
      "2 payment methods",
      "Basic API access",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "month",
    description: "Ideal for growing businesses",
    features: [
      "Up to 10,000 transactions/month",
      "Advanced analytics & reporting",
      "Priority support",
      "Enhanced security features",
      "All payment methods",
      "Full API access",
      "Custom integrations",
      "Multi-currency support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large-scale operations",
    features: [
      "Unlimited transactions",
      "Custom analytics dashboard",
      "24/7 dedicated support",
      "Enterprise security features",
      "White-label solutions",
      "Custom API endpoints",
      "SLA guarantees",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

export function PricingSection() {
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
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Choose the perfect plan for your business. All plans include our core security features.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <Card className={`h-full ${tier.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <CardDescription className="text-base">{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground ml-2">/{tier.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={tier.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <Button variant="link" className="text-primary">
            View detailed feature comparison →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}