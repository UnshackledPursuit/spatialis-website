"use client";

import { useState } from "react";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Layers,
  Paintbrush,
  Moon,
  Sun,
  Check,
  Box,
  Download,
  Image,
  Wand2,
  Compass,
  Grid3X3,
  Table2,
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
          <div className="flex items-center gap-3">
            <NextImage
              src="/logo-spatialis.svg"
              alt="Spatialis"
              width={32}
              height={32}
              className="dark:hidden"
            />
            <NextImage
              src="/logo-spatialis-dark.svg"
              alt="Spatialis"
              width={32}
              height={32}
              className="hidden dark:block"
            />
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

      {/* Hero Section - "The Emergence Canvas" */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 hero-gradient-light dark:hero-gradient opacity-50" />

        {/* Floating decorative elements at different depths */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float"
            style={{ top: "10%", left: "5%" }}
          />
          <div
            className="absolute w-48 h-48 rounded-full bg-accent/10 blur-2xl animate-float-delayed"
            style={{ top: "60%", right: "10%" }}
          />
          <div
            className="absolute w-32 h-32 rounded-full bg-ring/10 blur-xl animate-float-delayed-2"
            style={{ bottom: "20%", left: "15%" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Box size={16} />
                Spatial Canvas for visionOS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Create in{" "}
                <span className="gradient-text">Every Dimension</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0">
                Draw in the air. Export anywhere.
              </p>
              <p className="text-base text-muted-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
                Move beyond flat screens. Spatialis transforms your physical space into a canvas where ideas float, rotate, and live in all dimensions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <a href="#pricing">
                    Start Creating Free
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#pricing">
                    View Pricing
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Visual - Orbital Arc / Rotational Orb concept */}
            <div className="flex-1 relative">
              <div className="relative w-80 h-80 mx-auto" style={{ perspective: "1000px" }}>
                {/* Outer rotating ring */}
                <div
                  className="absolute inset-0 dimensional-ring animate-orbit"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(70deg)"
                  }}
                />

                {/* Middle rotating ring */}
                <div
                  className="absolute inset-8 dimensional-ring"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(70deg) rotateZ(45deg)",
                    animation: "orbit 25s linear infinite reverse"
                  }}
                />

                {/* Inner rotating ring */}
                <div
                  className="absolute inset-16 dimensional-ring"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(70deg) rotateZ(90deg)",
                    animation: "orbit 20s linear infinite"
                  }}
                />

                {/* Central luminous orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 orb animate-glow z-10" />

                {/* Accent orb */}
                <div
                  className="absolute w-6 h-6 orb-accent animate-float"
                  style={{ top: "20%", right: "25%" }}
                />

                {/* Floating teal orb */}
                <div
                  className="absolute w-4 h-4 orb-teal animate-float-delayed"
                  style={{ bottom: "25%", left: "20%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Layers. <span className="gradient-text">Actual Depth.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A self-contained volume you control. Everything you create floats in space alongside your other apps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 2D Traditional */}
            <div className="relative p-8 rounded-2xl border border-border bg-card/50">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                Traditional 2D
              </div>
              <div className="h-40 flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="w-32 h-24 border-2 border-muted-foreground/30 rounded" />
                  <div className="absolute top-2 left-2 w-32 h-24 border-2 border-muted-foreground/40 rounded bg-muted/20" />
                  <div className="absolute top-4 left-4 w-32 h-24 border-2 border-muted-foreground/50 rounded bg-muted/30" />
                </div>
              </div>
              <p className="text-muted-foreground text-center">
                Flat layers stacked on a screen. Limited to X and Y.
              </p>
            </div>

            {/* 3D Spatial */}
            <div className="relative p-8 rounded-2xl border-2 border-primary/50 bg-card depth-shadow">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Spatialis
              </div>
              <div className="h-40 flex items-center justify-center mb-4">
                <div className="relative w-32 h-32" style={{ perspective: "500px" }}>
                  <div
                    className="absolute inset-0 border-2 border-primary/60 rounded"
                    style={{ transform: "rotateY(-20deg) rotateX(10deg)" }}
                  />
                  <div
                    className="absolute inset-4 border-2 border-ring/80 rounded"
                    style={{ transform: "rotateY(-20deg) rotateX(10deg) translateZ(20px)" }}
                  />
                  <div
                    className="absolute inset-8 orb"
                    style={{ transform: "rotateY(-20deg) rotateX(10deg) translateZ(40px)" }}
                  />
                </div>
              </div>
              <p className="text-foreground text-center font-medium">
                True 3D space. Move in every direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section - Staggered depth cards */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Space. Your Canvas.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, annotate, and share in three dimensions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 - Spatial Canvas */}
            <Card className="bg-card border-border depth-shadow relative overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <CardContent className="pt-8 pb-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <Box className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Your Volume. Your Rules.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A self-contained space you control. Sketch ideas, annotate models, take spatial notes. Everything floats where you put it.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 - Import */}
            <Card className="bg-card border-border depth-shadow relative overflow-hidden group hover:scale-[1.02] transition-transform md:translate-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ring/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <CardContent className="pt-8 pb-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-ring/10 flex items-center justify-center mb-5">
                  <Image className="w-7 h-7 text-ring" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Bring Your World In
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Drop in images, 3D models, USDZ files. Annotate an X-ray. Mark up a prototype. Add context to any spatial object.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 - Export */}
            <Card className="bg-card border-border depth-shadow relative overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <CardContent className="pt-8 pb-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <Download className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Create Here. Share Everywhere.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Export to USDZ and share via AirDrop. Your spatial notes become portable 3D files anyone can view.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Powerful Tools Section */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mark, Shape, Transform
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Multiple brush styles from smooth strokes to particle trails. Layers with opacity, visibility, and transform controls. Symmetry modes for precision work.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Paintbrush className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Versatile Brushes</h4>
                    <p className="text-sm text-muted-foreground">
                      Round, Flat, Calligraphy, Ink Pen, Marker, and more. Each with unique character.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ring/10 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 text-ring" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Full Layer System</h4>
                    <p className="text-sm text-muted-foreground">
                      Organize with layers. Adjust opacity, visibility, locking, and transforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Wand2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Symmetry Modes</h4>
                    <p className="text-sm text-muted-foreground">
                      Horizontal, vertical, and radial symmetry for perfectly balanced designs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual placeholder for tools */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-ring/20 animate-depth" />
                <div className="absolute inset-4 rounded-2xl frosted-card flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3">
                    {[Paintbrush, Layers, Wand2, Box, Image, Download].map((Icon, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drawing Modes Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work Your Way
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Spatial mode for full 3D freedom. Canvas and Surface modes when you want constraints. Switch instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Spatial Mode */}
            <div className="text-center p-8 rounded-2xl bg-card border border-border depth-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Compass className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Spatial</h3>
              <p className="text-muted-foreground">
                Full 3D freedom in any direction. Move up, down, forward, back. Complete creative freedom.
              </p>
            </div>

            {/* Canvas Mode */}
            <div className="text-center p-8 rounded-2xl bg-card border border-border depth-shadow">
              <div className="w-16 h-16 rounded-full bg-ring/10 flex items-center justify-center mx-auto mb-5">
                <Grid3X3 className="w-8 h-8 text-ring" />
              </div>
              <h3 className="text-xl font-bold mb-3">Canvas</h3>
              <p className="text-muted-foreground">
                Vertical plane when you need it. Perfect for traditional art styles translated into 3D space.
              </p>
            </div>

            {/* Surface Mode */}
            <div className="text-center p-8 rounded-2xl bg-card border border-border depth-shadow">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <Table2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Surface</h3>
              <p className="text-muted-foreground">
                Horizontal plane for tabletop work. Great for floor plans, diagrams, or spatial notes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases / Beyond Creation */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Beyond Creation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Doctors can annotate brain scans. Designers iterate on 3D models. Teams brainstorm in shared space. Voice transcriptions coming soon. Gaussian splats and more file types on the roadmap.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["Medical Annotation", "Product Design", "Spatial Notes", "3D Sketching", "Model Review", "Creative Exploration"].map((useCase) => (
              <div
                key={useCase}
                className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium"
              >
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free. No commitment. Upgrade when you&apos;re ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Free Trial */}
            <Card className="bg-card border-border">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-lg font-semibold mb-2">Free Trial</h3>
                <div className="text-3xl font-bold mb-1">
                  7 Days
                </div>
                <p className="text-sm text-muted-foreground mb-6">Full access, no commitment</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    Full drawing experience
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    5 brushes, all colors
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    1 layer, 2 materials
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground/50">
                    <span className="w-[18px] h-[18px] flex items-center justify-center flex-shrink-0">—</span>
                    No import/export
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#">
                    Try Free for 7 Days
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Weekly */}
            <Card className="bg-card border-border">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-lg font-semibold mb-2">Weekly Pro</h3>
                <div className="text-3xl font-bold mb-1">
                  $4.99
                  <span className="text-lg font-normal text-muted-foreground">
                    /week
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">Cancel anytime</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    All brushes & materials
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    Unlimited layers
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    Import images & models
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0" />
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
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                BEST VALUE
              </div>
              <CardContent className="pt-8 pb-8">
                <h3 className="text-lg font-semibold mb-2">Lifetime Pro</h3>
                <div className="text-3xl font-bold mb-1">
                  $14.99
                  <span className="text-lg font-normal text-muted-foreground">
                    {" "}once
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">Yours forever</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    One-time purchase
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    All future updates
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Check size={18} className="text-primary flex-shrink-0" />
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

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="mx-auto mb-8">
            <NextImage
              src="/logo-spatialis.svg"
              alt="Spatialis"
              width={120}
              height={120}
              className="mx-auto dark:hidden"
            />
            <NextImage
              src="/logo-spatialis-dark.svg"
              alt="Spatialis"
              width={120}
              height={120}
              className="mx-auto hidden dark:block"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Space is Your Canvas
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Create in every dimension. Start free today.
          </p>
          <Button size="lg" asChild>
            <a href="#" className="gap-2">
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
            <div className="flex items-center gap-3">
              <NextImage
                src="/logo-spatialis.svg"
                alt="Spatialis"
                width={24}
                height={24}
                className="dark:hidden"
              />
              <NextImage
                src="/logo-spatialis-dark.svg"
                alt="Spatialis"
                width={24}
                height={24}
                className="hidden dark:block"
              />
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
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>&copy; 2026 Unshackled Pursuit. Built for visionOS.</p>
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
