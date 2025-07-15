import { CheckoutWidget } from "@/components/checkout/checkout-widget";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Demo Checkout</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Experience our seamless payment flow with StablePay
          </p>
          
          <CheckoutWidget />
        </div>
      </div>
    </div>
  );
} 