"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, DollarSign, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const featuredRates = [
  {
    name: "StablePay",
    logo: "⚡",
    fee: 0.25,
    processingTime: "1-2 mins",
    payout: 99.75,
    rating: 4.9,
    features: ["Business Focus", "Instant", "Low Fee"],
    isBest: true,
  },
  {
    name: "Coinbase",
    logo: "🔵",
    fee: 1.49,
    processingTime: "1-5 days",
    payout: 98.51,
    rating: 4.2,
    features: ["User-friendly"],
    isBest: false,
  },
  {
    name: "Kraken",
    logo: "🐙",
    fee: 0.50,
    processingTime: "1-3 days",
    payout: 99.50,
    rating: 4.4,
    features: ["Security focus"],
    isBest: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Real-Time Market Data
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            Compare Payment Rates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            See how StablePay stacks up against the competition with transparent fees and business-focused features.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {featuredRates.map((provider, index) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
                provider.isBest ? 'ring-2 ring-primary' : ''
              }`}>
                {provider.isBest && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Best for Business
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{provider.logo}</div>
                  <CardTitle className="text-xl">{provider.name}</CardTitle>
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{provider.rating}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Fee</span>
                      </div>
                      <span className="font-semibold">{provider.fee}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Processing</span>
                      </div>
                      <span className="font-semibold">{provider.processingTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-purple-600" />
                        <span className="text-sm">You Get</span>
                      </div>
                      <span className="font-semibold">${provider.payout}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-4">
                      {provider.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/rates">
            <Button size="lg" className="group mb-4">
              View Complete Rate Comparison
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <p className="text-muted-foreground">
            Compare 8+ providers with real-time market data and business features
          </p>
        </motion.div>
      </div>
    </section>
  );
}