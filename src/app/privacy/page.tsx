import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
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

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-muted-foreground text-lg mb-8">
            Last updated: February 1, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground">
              Spatialis is designed with privacy as a core principle. Your drawings,
              layers, and creative work are personal, and the app is built to
              respect that.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Spatialis does not collect any personal data.</strong>
            </p>
            <p className="text-muted-foreground">
              All drawings, layers, and preferences are stored locally on your
              device. We do not have access to your artwork, creative process, or
              personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Local Storage</h2>
            <p className="text-muted-foreground">
              Spatialis stores all data locally on your device. Your drawings and
              settings never leave your device unless you explicitly export them
              using the USDZ export feature. We do not operate servers that store
              or process your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
            <p className="text-muted-foreground">
              Spatialis does not use analytics, tracking tools, or third-party
              analytics services. We do not track how you use the app, what you
              draw, or how often you create.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground">
              Spatialis does not connect to any third-party services. All drawing
              and creation happens entirely on your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Deletion</h2>
            <p className="text-muted-foreground">
              All data is stored locally on your device. You may delete all app
              data at any time by removing the app from your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-muted-foreground">
              Questions? Contact us at{" "}
              <a
                href="mailto:info@unshackledpursuit.com"
                className="text-primary hover:underline"
              >
                info@unshackledpursuit.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes</h2>
            <p className="text-muted-foreground">
              This privacy policy may be updated from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
