import { RateComparison } from "@/components/rates/rate-comparison";
import { Header } from "@/components/layout/header";

export default function RatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Why Businesses Choose StablePay</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Compare real market rates, fees, and business features across top crypto payment providers
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-muted/30 p-6 rounded-lg border">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Fastest Processing</h3>
                <p className="text-sm text-muted-foreground">1-2 minutes vs industry average of 1-5 days</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg border">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Competitive Rates</h3>
                <p className="text-sm text-muted-foreground">0.25% fee - lower than most competitors</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg border">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Business First</h3>
                <p className="text-sm text-muted-foreground">Built specifically for business needs</p>
              </div>
            </div>
          </div>
          
          <RateComparison />
          
          {/* Business CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
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