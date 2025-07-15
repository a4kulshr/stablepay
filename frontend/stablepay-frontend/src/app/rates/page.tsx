import { RateComparison } from "@/components/rates/rate-comparison";

export default function RatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Why Businesses Choose StablePay</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Compare real market rates, fees, and business features across top crypto payment providers
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-green-800 dark:text-green-400">Fastest Processing</h3>
                <p className="text-sm text-green-600 dark:text-green-300">1-2 minutes vs industry average of 1-5 days</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-400">Competitive Rates</h3>
                <p className="text-sm text-blue-600 dark:text-blue-300">0.25% fee - lower than most competitors</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="text-2xl mb-2">🏢</div>
                <h3 className="font-semibold text-purple-800 dark:text-purple-400">Business First</h3>
                <p className="text-sm text-purple-600 dark:text-purple-300">Built specifically for business needs</p>
              </div>
            </div>
          </div>
          
          <RateComparison />
          
          {/* Business CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border">
              <h2 className="text-2xl font-bold mb-4">Ready to Give Your Business the StablePay Advantage?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of businesses that have switched to StablePay for faster, cheaper, and more reliable crypto payments. 
                No setup fees, no hidden costs - just transparent pricing built for business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/checkout"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Try StablePay Now
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-colors font-medium"
                >
                  Contact Sales
                </a>
              </div>
              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <span>✓ No setup fees</span>
                <span>✓ 24/7 business support</span>
                <span>✓ Enterprise-grade security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 