import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spatialis - Create in Every Dimension",
  description:
    "Spatial canvas for visionOS. Draw in the air, export anywhere. Sketch ideas, annotate 3D models, take spatial notes. Then export and share with anyone.",
  keywords: [
    "spatial",
    "3D",
    "visionOS",
    "sketch",
    "notes",
    "USDZ",
    "layers",
    "creative",
    "design",
    "annotate",
    "canvas",
  ],
  authors: [{ name: "Unshackled Pursuit" }],
  openGraph: {
    title: "Spatialis - Create in Every Dimension",
    description:
      "Draw in the air. Export anywhere. Spatial canvas for visionOS.",
    type: "website",
    locale: "en_US",
    siteName: "Spatialis",
    url: "https://spatialis.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spatialis - Create in Every Dimension",
    description: "Spatial canvas for visionOS. Draw in the air. Export anywhere.",
    creator: "@spatialisapp",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://spatialis.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
