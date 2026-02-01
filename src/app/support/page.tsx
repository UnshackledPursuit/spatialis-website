import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Support() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Spatialis"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="font-semibold">Spatialis</span>
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">Support</h1>

        {/* Contact Section */}
        <section className="mb-12">
          <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
                <p className="text-muted-foreground mb-4">
                  Have a question or need help? We&apos;d love to hear from you. We&apos;re actively improving Spatialis and your feedback helps shape what comes next.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="mailto:info@unshackledpursuit.com">
                    <Button>Email Support</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

          {/* Getting Started */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-muted-foreground mb-3">Getting Started</h3>
            <div className="space-y-3">
              <FAQItem
                question="How do I start drawing?"
                answer="Simply pinch and drag in space to draw. Your strokes appear in 3D exactly where you gesture. Use the toolbar to select brushes, colors, and adjust settings."
              />
              <FAQItem
                question="What are the drawing modes?"
                answer="Spatialis offers three modes: Spatial (true 3D drawing in any direction), Canvas (draw on a vertical plane), and Surface (draw on a horizontal plane). Switch modes in the toolbar."
              />
              <FAQItem
                question="How do I change brush size and color?"
                answer="Use the toolbar to access brush settings. Adjust the slider for size and tap the color picker to choose from the full color palette."
              />
            </div>
          </div>

          {/* Purchases & Subscriptions */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-muted-foreground mb-3">Purchases & Subscriptions</h3>
            <div className="space-y-3">
              <FAQItem
                question="What's included in the free trial?"
                answer="The 7-day free trial includes drawing capabilities with 5 brushes, all colors, 2 materials, and 1 layer. Import and export are not available during the trial."
              />
              <FAQItem
                question="What's the difference between Weekly and Lifetime?"
                answer="Weekly ($4.99/week) offers flexibility to cancel anytime. Lifetime ($14.99 one-time) unlocks everything forever. Both include all brushes, unlimited layers, all materials, plus import and export features."
              />
              <FAQItem
                question="How do I restore my purchases?"
                answer="Go to Settings and tap 'Restore Purchases'. Make sure you're signed in with the same Apple ID used for the original purchase."
              />
              <FAQItem
                question="How do I cancel my subscription?"
                answer="Go to your device Settings → [Your Name] → Subscriptions → Spatialis → Cancel. You'll have access until the end of your billing period."
              />
            </div>
          </div>

          {/* Drawing & Tools */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-muted-foreground mb-3">Drawing & Tools</h3>
            <div className="space-y-3">
              <FAQItem
                question="What brush types are available?"
                answer="Spatialis includes Round (smooth strokes), Flat (ribbon-like marks), Calligraphy (pressure-sensitive), Ink Pen (tapered strokes), Marker (chisel-tip), and more with Pro."
              />
              <FAQItem
                question="How do layers work?"
                answer="Create multiple layers to organize your drawing. Adjust opacity, toggle visibility, and lock layers to prevent changes. Reorder layers by dragging them in the layer panel."
              />
              <FAQItem
                question="How does symmetry work?"
                answer="Enable symmetry to create mirrored strokes. Choose horizontal, vertical, or radial symmetry (4, 6, or 8-way) for perfectly balanced designs."
              />
            </div>
          </div>

          {/* Export & Import */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-muted-foreground mb-3">Export & Import (Pro)</h3>
            <div className="space-y-3">
              <FAQItem
                question="How do I export my drawing?"
                answer="With Pro, tap the export button to save your creation as a USDZ file. You can then share it via AirDrop or use it in other apps that support 3D models."
              />
              <FAQItem
                question="What formats can I import?"
                answer="Pro users can import images and 3D models as reference objects to draw around or trace in 3D space."
              />
              <FAQItem
                question="Why can't I export my drawing?"
                answer="Export is a Pro feature. Subscribe to Weekly or purchase Lifetime to unlock USDZ export and import capabilities."
              />
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-muted-foreground mb-3">Troubleshooting</h3>
            <div className="space-y-3">
              <FAQItem
                question="My strokes are appearing in the wrong place"
                answer="Make sure you're in the correct drawing mode. Spatial mode draws in true 3D, while Canvas and Surface modes constrain to planes. Try adjusting your position relative to your drawing."
              />
              <FAQItem
                question="The app feels slow or laggy"
                answer="Complex drawings with many strokes can affect performance. Try creating a new layer for additional details, or export and start a fresh canvas."
              />
              <FAQItem
                question="I lost my drawing"
                answer="Drawings are saved locally on your device. If you deleted the app, the drawings are removed as well. We recommend exporting important work as USDZ files."
              />
            </div>
          </div>
        </section>

        {/* Additional Help */}
        <section className="mb-12">
          <p className="text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? Email us at{" "}
            <a
              href="mailto:info@unshackledpursuit.com"
              className="text-primary hover:underline"
            >
              info@unshackledpursuit.com
            </a>
          </p>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground/60">
            visionOS is a trademark of Apple Inc. Spatialis is not affiliated with Apple.
          </p>
        </section>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border border-border rounded-lg">
      <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
        <span className="font-medium">{question}</span>
        <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-4 pb-4">
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </details>
  );
}
