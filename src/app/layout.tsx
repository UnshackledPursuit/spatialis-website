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
  title: "Spatialis - Spatial Drawing for visionOS",
  description:
    "Draw in three dimensions. Create 3D art that floats in your physical space. Powerful brushes, layers, and USDZ export for visionOS.",
  keywords: [
    "spatialis",
    "spatial drawing",
    "3D art",
    "visionos",
    "brushes",
    "layers",
    "USDZ",
    "creative",
    "design",
    "sketch",
  ],
  authors: [{ name: "Unshackled Pursuit" }],
  openGraph: {
    title: "Spatialis - Spatial Drawing for visionOS",
    description:
      "Draw in three dimensions. Create 3D art that floats in your physical space.",
    type: "website",
    locale: "en_US",
    siteName: "Spatialis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spatialis - Spatial Drawing",
    description: "Create 3D art in your physical space. Designed for visionOS.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
