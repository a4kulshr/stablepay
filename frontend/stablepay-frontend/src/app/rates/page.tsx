import { RateComparison } from "@/components/rates/rate-comparison";

export default function RatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Payment Route Comparison</h1>
            <p className="text-lg text-muted-foreground">
              Compare fees, processing times, and payouts across different providers
            </p>
          </div>
          
          <RateComparison />
        </div>
      </div>
    </div>
  );
} 