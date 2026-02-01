"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Layers,
  Paintbrush,
  Moon,
  Sun,
  ExternalLink,
  Check,
  Box,
  Palette,
  Share2,
} from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <span className="font-semibold text-xl">Spatialis</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/support"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Paintbrush size={16} />
                Spatial Drawing for visionOS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Draw in{" "}
                <span className="gradient-text">Three Dimensions</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Create 3D art that floats in your physical space. Powerful brushes,
                layers, and USDZ export.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Free (7 Days)
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="#pricing"
                  >
                    View Pricing
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Visual - Animated Brush Strokes */}
            <div className="flex-1 relative">
              <div className="relative w-80 h-80 mx-auto">
                {/* Decorative strokes */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-30 z-0"
                  viewBox="0 0 320 320"
                >
                  <path
                    d="M 60 160 Q 160 80 260 160"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 80 200 Q 160 280 240 200"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Central orb (marker) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 orb animate-glow z-10" />

                {/* Floating brush strokes */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10">
                  <div
                    className="absolute w-16 h-4 rounded-full bg-cyan-500/60 animate-float"
                    style={{ top: "20%", left: "15%", transform: "rotate(-20deg)" }}
                  />
                  <div
                    className="absolute w-12 h-3 rounded-full bg-orange-500/60 animate-float-delayed"
                    style={{ top: "25%", right: "20%", transform: "rotate(15deg)" }}
                  />
                  <div
                    className="absolute w-20 h-5 rounded-full bg-purple-500/60 animate-float-delayed-2"
                    style={{ bottom: "25%", left: "20%", transform: "rotate(10deg)" }}
                  />
                  <div
                    className="absolute w-10 h-3 rounded-full bg-green-500/60 animate-float"
                    style={{ bottom: "30%", right: "15%", transform: "rotate(-10deg)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Create in Space
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to bring your 3D visions to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-card/70 border-border/70">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Paintbrush className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Powerful Brushes
                </h3>
                <p className="text-muted-foreground">
                  Round, Flat, Calligraphy, Ink Pen, Marker, and more. Each brush
                  creates unique strokes in 3D space.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-card/70 border-border/70">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Layer System
                </h3>
                <p className="text-muted-foreground">
                  Organize complex drawings with layers. Adjust opacity,
                  visibility, and lock layers to protect your work.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-card/70 border-border/70">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Box className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  USDZ Export
                </h3>
                <p className="text-muted-foreground">
                  Export your creations as USDZ files. Share via AirDrop,
                  use in other apps, or view in AR.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Drawing Modes Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Three Drawing Modes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Work the way you prefer—in full 3D or on constrained planes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Spatial */}
            <div className="text-center p-6 rounded-2xl bg-secondary/30">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Spatial</h3>
              <p className="text-muted-foreground">
                True 3D drawing. Move in any direction—up, down, forward, back.
                Complete creative freedom.
              </p>
            </div>

            {/* Canvas */}
            <div className="text-center p-6 rounded-2xl bg-secondary/30">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Canvas</h3>
              <p className="text-muted-foreground">
                Draw on a vertical plane. Perfect for traditional art styles
                translated into 3D space.
              </p>
            </div>

            {/* Surface */}
            <div className="text-center p-6 rounded-2xl bg-secondary/30">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Surface</h3>
              <p className="text-muted-foreground">
                Draw on a horizontal plane. Great for floor plans,
                diagrams, or tabletop designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free. Upgrade when you&apos;re ready to unlock everything.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Free Trial */}
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Free Trial</h3>
                <div className="text-3xl font-bold mb-4">
                  7 Days
                  <span className="text-lg font-normal text-muted-foreground">
                    {" "}free
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    Full drawing experience
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    5 brushes, all colors
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    1 layer, 2 materials
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground/50">
                    <span className="w-4 h-4 flex items-center justify-center">—</span>
                    No import/export
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#">
                    Start Free Trial
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Weekly */}
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Weekly Pro</h3>
                <div className="text-3xl font-bold mb-4">
                  $4.99
                  <span className="text-lg font-normal text-muted-foreground">
                    {" "}/week
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    All brushes & materials
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    Unlimited layers
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    Import images & models
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    Export to USDZ
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#">
                    Subscribe Weekly
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Lifetime */}
            <Card className="bg-card border-primary border-2 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                BEST VALUE
              </div>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Lifetime Pro</h3>
                <div className="text-3xl font-bold mb-4">
                  $14.99
                  <span className="text-lg font-normal text-muted-foreground">
                    {" "}once
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    One-time purchase
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    All future updates
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    Unlock forever
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="#">
                    Get Lifetime Access
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Creating Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Transform your space into a canvas. Draw freely in three dimensions.
          </p>
          <Button size="lg" asChild>
            <a
              href="#"
              className="gap-2"
            >
              Download on the App Store
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="font-semibold">Spatialis</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/support"
                className="hover:text-foreground transition-colors"
              >
                Support
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-right">
              <p>© 2026 Unshackled Pursuit. Built for visionOS.</p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                visionOS is a trademark of Apple Inc.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
