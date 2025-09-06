import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PerformanceProvider } from "@/components/optimizations/performance-provider";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter", 
  display: "swap" 
});

const mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono", 
  display: "swap" 
});

export const metadata: Metadata = {
  title: { 
    default: "Mario Araya - Software Engineer", 
    template: "%s | Mario Araya" 
  },
  description: "Mario Araya - Software Engineer from Costa Rica architecting digital experiences that blend performance with elegance. Crafting scalable web applications with React, Next.js, TypeScript, and Node.js.",
  keywords: ["Mario Araya", "Software Engineer", "Costa Rica", "full-stack", "web development", "React", "Next.js", "TypeScript", "Node.js", "JavaScript", "API development"],
  authors: [{ name: "Mario Araya" }],
  creator: "Mario Araya",
  robots: { 
    index: true, 
    follow: true 
  },
  openGraph: { 
    type: "website", 
    locale: "en_US",
    title: "Mario Araya - Software Engineer",
    description: "Software Engineer architecting digital experiences that blend performance with elegance. Crafting scalable applications that evolve gracefully.",
    siteName: "Mario Araya Portfolio",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Developer Portfolio"
      }
    ]
  },
  twitter: { 
    card: "summary_large_image",
    title: "Mario Araya - Software Engineer",
    description: "Software Engineer architecting digital experiences that blend performance with elegance. Crafting scalable applications that evolve gracefully.",
    images: ["/images/og.jpg"]
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(0 0% 100%)" },
    { media: "(prefers-color-scheme: dark)", color: "hsl(224 71% 4%)" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <PerformanceProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </PerformanceProvider>
      </body>
    </html>
  );
}
