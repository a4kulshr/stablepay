"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { X, Wallet, CheckCircle, XCircle, Loader2 } from "lucide-react";

type PaymentStep = "amount" | "wallet" | "processing" | "success" | "error";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<PaymentStep>("amount");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USDC");
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const handleAmountSubmit = () => {
    if (amount && parseFloat(amount) > 0) {
      setStep("wallet");
    }
  };

  const handleWalletConnect = (walletType: string) => {
    setSelectedWallet(walletType);
    setStep("processing");
    
    // Simulate processing
    setTimeout(() => {
      // Randomly succeed or fail for demo
      const success = Math.random() > 0.3;
      setStep(success ? "success" : "error");
    }, 2000);
  };

  const handleClose = () => {
    setStep("amount");
    setAmount("");
    setSelectedWallet(null);
    onClose();
  };

  const handleRetry = () => {
    setStep("wallet");
  };

  const stepVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Pay with StablePay</span>
            <Button variant="ghost" size="sm" onClick={handleClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Step Indicator */}
          <div className="flex items-center justify-center space-x-2">
            {["amount", "wallet", "processing"].map((s, index) => (
              <div
                key={s}
                className={`w-2 h-2 rounded-full transition-colors ${
                  step === s || (step === "success" && index < 3) || (step === "error" && index < 3)
                    ? "bg-primary"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === "amount" && (
              <motion.div
                key="amount"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="flex-1"
                    />
                    <Select value={currency} onValueChange={setCurrency}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USDC">USDC</SelectItem>
                        <SelectItem value="USDT">USDT</SelectItem>
                        <SelectItem value="DAI">DAI</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span>Amount:</span>
                    <span>{amount || "0.00"} {currency}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Fee:</span>
                    <span>0.10 {currency}</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold pt-2 border-t border-border mt-2">
                    <span>Total:</span>
                    <span>{(parseFloat(amount || "0") + 0.10).toFixed(2)} {currency}</span>
                  </div>
                </div>

                <Button
                  onClick={handleAmountSubmit}
                  className="w-full"
                  disabled={!amount || parseFloat(amount) <= 0}
                >
                  Continue
                </Button>
              </motion.div>
            )}

            {step === "wallet" && (
              <motion.div
                key="wallet"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-4"
              >
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Connect Your Wallet</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose a wallet to complete your payment
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "MetaMask", icon: "🦊" },
                    { name: "WalletConnect", icon: "🔗" },
                    { name: "Coinbase Wallet", icon: "🔵" }
                  ].map((wallet) => (
                    <Card
                      key={wallet.name}
                      className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => handleWalletConnect(wallet.name)}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{wallet.icon}</span>
                        <div>
                          <p className="font-medium">{wallet.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Connect with {wallet.name}
                          </p>
                        </div>
                        <Wallet className="w-5 h-5 ml-auto text-muted-foreground" />
                      </div>
                    </Card>
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => setStep("amount")}
                  className="w-full"
                >
                  Back
                </Button>
              </motion.div>
            )}

            {step === "processing" && (
              <motion.div
                key="processing"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-center py-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  <Loader2 className="w-12 h-12 text-primary" />
                </motion.div>
                <h3 className="font-semibold mt-4 mb-2">Processing Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Connecting to {selectedWallet}...
                </p>
              </motion.div>
            )}

            {step === "success" && (
              <motion.div
                key="success"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                </motion.div>
                <h3 className="font-semibold text-green-600 mb-2">Payment Successful!</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Your payment of {amount} {currency} has been processed successfully.
                </p>
                <Button onClick={handleClose} className="w-full">
                  Done
                </Button>
              </motion.div>
            )}

            {step === "error" && (
              <motion.div
                key="error"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                </motion.div>
                <h3 className="font-semibold text-red-600 mb-2">Payment Failed</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Something went wrong. Please try again.
                </p>
                <div className="space-y-2">
                  <Button onClick={handleRetry} className="w-full">
                    Try Again
                  </Button>
                  <Button variant="outline" onClick={handleClose} className="w-full">
                    Cancel
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
} 