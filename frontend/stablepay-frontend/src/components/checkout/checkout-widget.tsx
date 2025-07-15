"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckoutModal } from "./checkout-modal";
import { CreditCard, Shield, Zap } from "lucide-react";

export function CheckoutWidget() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center p-6 rounded-2xl bg-card border"
        >
          <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="font-semibold mb-2">Secure</h3>
          <p className="text-sm text-muted-foreground">
            End-to-end encryption protects your transaction
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center p-6 rounded-2xl bg-card border"
        >
          <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="font-semibold mb-2">Fast</h3>
          <p className="text-sm text-muted-foreground">
            Instant transactions with minimal fees
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center p-6 rounded-2xl bg-card border"
        >
          <CreditCard className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="font-semibold mb-2">Simple</h3>
          <p className="text-sm text-muted-foreground">
            No complex setup, works with any wallet
          </p>
        </motion.div>
      </div>

      {/* Main Payment Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center"
      >
        <Button
          size="lg"
          onClick={() => setIsModalOpen(true)}
          className="px-12 py-6 text-lg font-semibold rounded-2xl bg-primary hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
        >
          Pay with StablePay
        </Button>
      </motion.div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
} 