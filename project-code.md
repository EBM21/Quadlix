# Project Codebase

## package.json

```json
{
  "name": "react-example",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "node scripts/dev.js",
    "build": "next build",
    "start": "node scripts/start.js",
    "lint": "next lint"
  },
  "dependencies": {
    "@fontsource-variable/geist": "^5.2.8",
    "@fontsource/inter": "^5.2.8",
    "@fontsource/jetbrains-mono": "^5.2.8",
    "@fontsource/space-grotesk": "^5.2.10",
    "@google/genai": "^1.29.0",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@tailwindcss/postcss": "^4.2.4",
    "@types/canvas-confetti": "^1.9.0",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "canvas-confetti": "^1.9.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "dotenv": "^17.2.3",
    "express": "^4.21.2",
    "framer-motion": "^12.38.0",
    "lucide-react": "^0.546.0",
    "next": "^16.3.0-canary.2",
    "next-themes": "^0.4.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.14.1",
    "tailwind-merge": "^3.5.0",
    "tw-animate-css": "^1.4.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^22.14.0",
    "autoprefixer": "^10.5.0",
    "tailwindcss": "^4.1.14",
    "tsx": "^4.21.0",
    "typescript": "~5.8.2"
  }
}

```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```

## tailwind.config.ts

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        aura: "var(--aura)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
      },
    },
  },
  plugins: [],
};
export default config;

```

## next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out for smoother local preview
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : '', // Placeholder for now, but I want to be careful
  images: {
    unoptimized: true, // Required for static export
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'X-Requested-With, Content-Type, Authorization' },
        ],
      },
    ];
  },
  // Ensure we don't fail build on typescript errors for now, 
  // though we will try to fix as many as possible.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

```

## src\app\apple-icon.tsx

```tsx
import { ImageResponse } from 'next/og'
 
export const dynamic = 'force-static'
 
// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: '#8b5cf6',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '40px',
        }}
      >
        <img
          src="https://quadlix.com/quadlix-logo.svg"
          width={140}
          height={140}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

```

## src\app\globals.css

```css
@import "tailwindcss";

/* Precise Font Imports */
@import "@fontsource/inter/400.css";
@import "@fontsource/inter/600.css";
@import "@fontsource/space-grotesk/500.css";
@import "@fontsource/space-grotesk/700.css";
@import "@fontsource/jetbrains-mono/400.css";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-heading: "Space Grotesk", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-aura: var(--aura);
  --color-neon-blue: #0ea5e9;
  --color-neon-purple: #8b5cf6;
  --color-neon-pink: #d946ef;
}

:root {
  --background: #f8fafc;
  --foreground: #0f172a;
  --primary: #06b6d4;
  --aura: #06b6d4;
  --radius: 1.56rem;
}

.dark {
  --background: #020205;
  --foreground: #f8fafc;
  --primary: #06b6d4;
}

@layer base {
  html {
    /* 1. ISAY REMOVE KIYA HAI: Smooth scroll native browser par lag karta hai heavy UI ke sath */
    scroll-behavior: auto !important; 
  }
  
  body {
    @apply bg-background text-foreground antialiased;
    /* 2. Performance ke liye ye lines add ki hain */
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
}

@layer utilities {
  /* 3. Noise background ko thoda optimize kiya taake GPU load kam ho */
  .noise-bg {
    position: relative;
    isolation: isolate;
  }
  
  .noise-bg::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0.02; /* Opacity mazeed kam ki */
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    transform: translateZ(0); /* Hardware acceleration */
  }

  /* 4. Glass effects ko optimize kiya */
  .glass {
    @apply backdrop-blur-lg border border-slate-200/50 dark:border-white/10; /* Blur 2xl se kam karke lg kiya */
    background: rgba(255, 255, 255, 0.05);
    transform: translateZ(0);
  }
  
  .glass-card {
    @apply backdrop-blur-xl border border-slate-200/50 dark:border-white/5 shadow-2xl;
    background: rgba(255, 255, 255, 0.02);
    transform: translateZ(0);
  }

  .aura-glow {
    /* 5. Box shadow ko thoda optimize kiya */
    box-shadow: 0 0 40px -10px var(--primary);
    will-change: transform;
  }

  .grid-pattern {
    background-image: radial-gradient(circle at center, #06b6d4 0.5px, transparent 0.5px);
    background-size: 32px 32px;
    mask-image: radial-gradient(circle at center, black 0%, transparent 80%);
    pointer-events: none;
  }
}

/* 6. Animations ko hardware accelerated banaya */
@keyframes bubble-bounce {
  0%, 100% { transform: translateY(0) translateZ(0); }
  50% { transform: translateY(-10px) translateZ(0); }
}

.animate-bubble-bounce {
  animation: bubble-bounce 3s ease-in-out infinite; /* Speed thodi slow ki taake smoother lage */
  will-change: transform;
}
```

## src\app\icon.tsx

```tsx
import { ImageResponse } from 'next/og'
 
export const dynamic = 'force-static'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: '#8b5cf6',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
        }}
      >
        <img
          src="https://quadlix.com/quadlix-logo.svg"
          width={24}
          height={24}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}

```

## src\app\layout.tsx

```tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://quadlix.com"),
    title: {
      default: "Quadlix | Leading AI-Powered SaaS & ERP Solutions",
      template: "%s | Quadlix"
    },
    description: "Quadlix provides high-end AI-driven ERP software, digital marketing tools, and custom SaaS solutions to scale your business globally.",
    keywords: ["AI SaaS", "Quadlix", "ERP Software", "Digital Marketing AI", "Web Solutions", "Business Automation"],
    authors: [{ name: "Quadlix Engineering", url: "https://quadlix.com/team" }],
    creator: "Quadlix Technologies",
    publisher: "Quadlix Technologies",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: "/",
      languages: {
        'en-US': '/en-US',
      },
    },
    manifest: "/manifest.json",
    openGraph: {
      title: "Quadlix | Elite AI SaaS Stack",
      description: "Architecting the next century of enterprise intelligence. Autonomous business stack for high-frequency digital enterprises.",
      url: "https://quadlix.com",
      siteName: "Quadlix",
      images: [
        {
          url: "https://picsum.photos/seed/quadlix-og/1200/630",
          width: 1200,
          height: 630,
          alt: "Quadlix Enterprise AI Platform",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Quadlix | Leading AI-Powered SaaS",
      description: "Scale your business globally with Quadlix high-end AI-driven ERP & marketing tools.",
      creator: "@quadlix",
      images: ["https://picsum.photos/seed/quadlix-og/1200/630"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Quadlix",
    "url": "https://quadlix.com",
    "logo": "https://quadlix.com/quadlix-logo.svg",
    "sameAs": [
      "https://twitter.com/quadlix",
      "https://github.com/quadlix",
      "https://linkedin.com/company/quadlix"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-NEURAL-IX",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Quadlix Alpha Suite",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250"
    },
    "offers": {
      "@type": "Offer",
      "price": "49.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <ErrorBoundary>
          <Providers>
            {children}
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}

```

## src\app\page.tsx

```tsx
'use client';

import * as React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { StatsSection } from "@/sections/StatsSection";
import { Services } from "@/sections/Services";
import { ProductSuite } from "@/sections/ProductSuite";
import { Footer } from "@/sections/Footer";

// Dynamic imports for heavy content and non-critical components
const Hero = dynamic(() => import("@/components/Hero").then(mod => mod.Hero), {
  ssr: false,
  loading: () => <div className="h-[100vh] bg-background" />
});
const Pricing = dynamic(() => import("@/sections/Pricing").then(mod => mod.Pricing), {
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />
});
const Contact = dynamic(() => import("@/sections/Contact").then(mod => mod.Contact), {
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />
});
const AIAssistant = dynamic(() => import("@/components/AIAssistant").then(mod => mod.AIAssistant), { 
  ssr: false 
});
const WhatsAppWidget = dynamic(() => import("@/components/WhatsAppWidget").then(mod => mod.WhatsAppWidget), { 
  ssr: false 
});

import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [showWidgets, setShowWidgets] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidgets(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    containerRef.current.style.setProperty("--x", `${e.clientX - left}px`);
    containerRef.current.style.setProperty("--y", `${e.clientY - top}px`);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-background font-sans text-foreground noise-bg overflow-x-hidden"
    >
      {showWidgets && <WhatsAppWidget />}
      
      {/* Background Elements */}
      <div className="fixed inset-0 grid-pattern opacity-10 -z-10 pointer-events-none" />
      <div className="fixed inset-0 nebula-gradient -z-20 pointer-events-none" />
      
      <div className="fixed top-[-10%] right-[-5%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] -z-20 animate-pulse" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[150px] -z-20 animate-pulse" />
      
      <Navbar />
      
      <main className="relative z-10 w-full overflow-hidden">
        <div>
            <Hero />
            <StatsSection />
            
            {/* Feature Highlights / Logos Divider */}
            <div className="py-12 border-y border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden">
              <div className="container mx-auto px-6">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                  {["QUADLIX", "NEURAL.INK", "AETHER", "VORTEX", "NEXUS"].map((brand) => (
                    <span key={brand} className="text-xl md:text-2xl font-heading font-black tracking-[0.2em]">{brand}</span>
                  ))}
                </div>
              </div>
            </div>

            <Services />
            <ProductSuite />
            
            {/* Highlight Banner */}
            <div className="container mx-auto px-4 md:px-6 py-24">
              <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-center glass-card border-border/50 group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-colors duration-1000" />
                <div className="relative z-10 space-y-8">
                   <h2 className="text-4xl md:text-7xl font-bold font-heading tracking-tight leading-[1.1]">
                      READY TO ARCHITECT <br />
                      YOUR <span className="text-primary italic">DIGITAL LEGACY?</span>
                   </h2>
                   <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                      Join the 2,500+ enterprises leveraging Quadlix to redefine their operational baseline.
                      Instant deployment. Zero friction. Pure intelligence.
                   </p>
                   <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Request Beta Access to Quadlix Suite"
                      className="h-16 px-12 rounded-2xl bg-foreground text-background font-bold text-lg shadow-2xl transition-all"
                   >
                      Request Beta Access
                   </motion.button>
                </div>
              </div>
            </div>

            <Pricing />
            <Contact />
        </div>
      </main>

      <Footer />
      {showWidgets && <AIAssistant />}
    </div>
  );
}

```

## src\app\providers.tsx

```tsx
'use client';

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}

```

## src\app\robots.ts

```ts
import { MetadataRoute } from 'next'
 
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://quadlix.com/sitemap.xml',
  }
}

```

## src\app\robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://quadlix.com/sitemap.xml

```

## src\app\sitemap.ts

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://quadlix.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://quadlix.com#services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://quadlix.com#pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quadlix.com#contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}

```

## src\components\AIAssistant.tsx

```tsx
'use client';
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "model";
  content: string;
}

export function AIAssistant() {
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState<Message[]>([
    { role: "model", content: "Hello! I'm Quadlix AI. How can I help you navigate our SaaS ecosystem today?" }
  ]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input.toLowerCase();
    setInput("");
    setIsLoading(true);

    // Mock AI Simulation
    setTimeout(() => {
      let aiContent = "";
      
      if (currentInput.includes("pricing") || currentInput.includes("cost")) {
        aiContent = "Our pricing is structured for maximum scalability. We have 'Starter' for solo innovators ($49/mo), 'Professional' for growing teams ($129/mo), and customized 'Enterprise' solutions. All plans include neural-core access.";
      } else if (currentInput.includes("service") || currentInput.includes("feature")) {
        aiContent = "The Quadlix suite includes Neural Automation, Quantum Security, and Modular Scaling. Our ERP and CRM modules are integrated via our proprietary neural-linked ledger system.";
      } else if (currentInput.includes("hello") || currentInput.includes("hi")) {
        aiContent = "Greetings. I am Quadlix-X Neural Core. How can I assist your operational deployment today?";
      } else {
        aiContent = "That's an interesting query. At Quadlix, we focus on eliminating operational entropy. For a detailed technical whitepaper or a personal walkthrough, I recommend establishing a direct connection via our Contact portal.";
      }

      setMessages(prev => [...prev, { role: "model", content: aiContent }]);
      setIsLoading(false);
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[60] flex items-center gap-3">
        {!isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-2xl animate-bubble-bounce hidden md:block"
            >
              <div className="text-[10px] text-blue-400 font-bold uppercase mb-0.5 tracking-widest">Quadlix AI</div>
              <div className="text-xs text-white">How can I assist your workflow today?</div>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 border border-white/10"
            >
              <MessageSquare className="text-white h-6 w-6" />
            </motion.button>
          </>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
            className="fixed bottom-24 right-8 w-[400px] max-w-[calc(100vw-48px)] h-[550px] max-h-[calc(100vh-120px)] glass-card rounded-[32px] overflow-hidden z-[60] flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
          >
            {/* Header */}
            <div className="p-6 bg-primary/10 border-b border-primary/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Bot className="text-primary-foreground h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">Quadlix AI</h3>
                  <div className="flex items-center gap-1.5 opacity-60">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <ScrollArea className="flex-grow p-6">
              <div className="space-y-4">
                {messages.map((message, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex gap-3 max-w-[85%]",
                      message.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1",
                      message.role === "model" ? "bg-primary/20 text-primary" : "bg-white/10 text-white"
                    )}>
                      {message.role === "model" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    <div className={cn(
                      "p-4 rounded-2xl text-sm leading-relaxed",
                      message.role === "model" 
                        ? "bg-white/5 border border-white/10 rounded-tl-none" 
                        : "bg-primary text-primary-foreground rounded-tr-none"
                    )}>
                      {message.content}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 mr-auto max-w-[85%]">
                     <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                        <Loader2 className="w-4 h-4 animate-spin" />
                     </div>
                     <div className="p-4 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none italic text-sm text-muted-foreground">
                        Neural circuits firing...
                     </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Footer / Input */}
            <div className="p-4 bg-black/20 border-t border-white/5">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <Input 
                  placeholder="Ask about our suite..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="rounded-xl border-white/10 bg-white/5 h-11 focus-visible:ring-primary focus-visible:ring-offset-0"
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={!input.trim() || isLoading}
                  className="rounded-xl w-11 h-11 bg-primary hover:bg-primary/90 shrink-0"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </form>
              <p className="text-[10px] text-center mt-3 text-muted-foreground/60 uppercase tracking-widest font-bold">
                Powered by Quadlix-X Neural Core
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

```

## src\components\ErrorBoundary.tsx

```tsx
'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-background p-6 text-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-heading">System Error</h2>
              <p className="text-muted-foreground">A critical failure occurred in the neural link. Attempting recovery.</p>
              <button 
                onClick={() => window.location.reload()}
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold"
              >
                Re-initialize System
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

```

## src\components\Hero.tsx

```tsx
'use client';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { cn } from "@/lib/utils";
import * as React from "react";

export function Hero() {
  const { scrollY } = useScroll();
  
  // 1. useSpring add kiya hai taake scroll values makkhan ki tarhan smooth hon
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const y1 = useTransform(smoothY, [0, 500], [0, 100]);
  const y2 = useTransform(smoothY, [0, 500], [0, -40]); // Parallax intensity thodi kam ki hai speed ke liye

  return (
    <section id="home" className="relative min-h-[100vh] flex flex-col items-center justify-center pt-32 md:pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-5 space-y-10"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl border border-primary/30 bg-primary/5 mb-2 backdrop-blur-md shadow-xl">
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-black text-primary uppercase tracking-[0.2em] whitespace-nowrap">Neural Protocol v4.0 Active</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold font-heading leading-[0.85] tracking-tighter text-foreground uppercase">
            Architect <br/>
            <span className="text-aura italic">Absolute</span> <br />
            Efficiency.
          </h1>

          <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
            Eliminate operational entropy. The world's first autonomous business stack 
            for high-frequency digital enterprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <Magnetic>
              <Button 
                size="lg" 
                className="px-10 h-16 bg-primary text-primary-foreground rounded-2xl font-black text-sm aura-glow hover:scale-[1.05] transition-all uppercase tracking-widest border-glow"
              >
                Deploy Environment
              </Button>
            </Magnetic>
            <Magnetic>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-10 h-16 border-border/50 rounded-2xl font-black text-sm bg-card transition-all uppercase tracking-widest hover:bg-muted"
              >
                Audit Suite
              </Button>
            </Magnetic>
          </div>
        </motion.div>

        {/* Visual Dashboard - Main Fix Here */}
        <div className="lg:col-span-7 relative w-full h-auto md:h-[600px] flex items-center justify-center mt-12 lg:mt-0 [perspective:1000px]">
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            // will-change: transform browser ko hardware acceleration ke liye force karta hai
            className="relative w-full bg-card/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl overflow-hidden aspect-auto md:aspect-[4/3] border-glow noise-bg will-change-transform transform-gpu"
          >
            {/* Header section of dashboard */}
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <div className="flex gap-2 md:gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
              </div>
              <div className="text-[9px] md:text-[11px] text-muted-foreground font-mono tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                QUADLIX-X // NEURAL SYNC
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-10 w-full">
              {[
                { label: "Neural Load", val: "14.2ms", color: "text-cyan-400" },
                { label: "Sync Fidelity", val: "99.9%", color: "text-purple-400" },
                { label: "Alpha Growth", val: "2.4k", color: "text-emerald-400" }
              ].map((stat, i) => (
                <div key={i} className="glass rounded-2xl p-4 md:p-6 border-white/5 flex flex-col">
                  <div className="text-[9px] uppercase font-black tracking-widest text-muted-foreground/60 mb-1">
                    {stat.label}
                  </div>
                  <div className={cn("text-xl md:text-3xl font-black font-heading", stat.color)}>
                    {stat.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Graph Area - Static stroke for performance */}
            <div className="h-48 md:h-64 glass rounded-[2.5rem] relative overflow-hidden border-white/5">
              <svg viewBox="0 0 400 100" className="absolute bottom-0 w-full opacity-50" preserveAspectRatio="none">
                <path d="M0,80 C50,70 80,30 120,40 C160,50 200,10 240,20 C280,30 320,60 400,10 L400,100 L0,100 Z" fill="url(#grad-hero)" />
                <defs>
                  <linearGradient id="grad-hero" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "rgba(6, 182, 212, 0.4)" }} />
                    <stop offset="100%" style={{ stopColor: "rgba(6, 182, 212, 0)" }} />
                  </linearGradient>
                </defs>
                <path d="M0,80 C50,70 80,30 120,40 C160,50 200,10 240,20 C280,30 320,60 400,10" fill="none" stroke="#06b6d4" strokeWidth="2" />
              </svg>
            </div>

            {/* Floating Card - Simplified animation */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 right-6 md:bottom-12 md:left-12 w-48 md:w-64 glass p-4 md:p-6 rounded-3xl shadow-3xl border-glow transform-gpu"
            >
              <div className="text-[10px] font-black uppercase mb-1 text-primary tracking-widest">Architectural Node</div>
              <div className="text-base md:text-lg font-bold">Neural Engine v8.2</div>
              <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="h-full bg-cyan-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Optimized Background Blob */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"
      />
    </section>
  );
}
```

## src\components\Magnetic.tsx

```tsx
'use client';
import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Magnetic({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * 0.4);
    y.set(distanceY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}

```

## src\components\MobileMenu.tsx

```tsx
'use client';
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, Github, Twitter, Linkedin, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[100] bg-background md:hidden flex flex-col pt-24 px-8"
        >
          {/* Background Gradient Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] -z-10" />

          {/* Close Button Header */}
          <div className="absolute top-6 right-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full w-12 h-12 hover:bg-muted"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white/20 rounded-sm rotate-45 border border-white/40"></div>
            </div>
            <span className="text-2xl font-bold font-heading tracking-tight uppercase">
              QUADLIX
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center justify-between py-4 border-b border-border/50 text-xl font-medium tracking-tight group"
              >
                <span className="group-hover:text-primary transition-colors">{link.name}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
              </motion.a>
            ))}
          </nav>

          {/* Footer of Menu */}
          <div className="mt-auto pb-12 space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Operational Access</p>
              <Button className="w-full h-14 rounded-2xl bg-primary text-lg font-bold shadow-lg shadow-primary/20">
                GET STARTED
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            
            <p className="text-[10px] text-center uppercase tracking-[0.2em] font-bold text-muted-foreground opacity-60">
              © 2026 QUADLIX TECH
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

```

## src\components\Navbar.tsx

```tsx
'use client';
import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { Magnetic } from "./Magnetic";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("Home");
  const { scrollY } = useScroll();
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 80],
    ["blur(0px)", "blur(12px)"]
  );

  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(var(--background), 0)", "rgba(var(--background), 0.8)"]
  );

  return (
    <>
      <motion.header
        style={{ 
          backdropFilter: backdropBlur,
          backgroundColor: headerBg
        }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "h-20 flex items-center border-b border-white/5"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* Logo Container: Size badha kar w-14 h-14 kiya gaya hai */}
            <div className="relative w-25 h-25 group-hover:aura-glow transition-all flex items-center justify-center">
              <Image 
                src="/navbar-logo.svg" 
                alt="Logo" 
                width={95} // Actual image size increase
                height={95}
                className="object-contain scale-110" // scale-110 se thoda aur impact aayega
                priority
              />
            </div>
            
            <span className="text-2xl font-bold font-heading tracking-tighter uppercase text-foreground group-hover:text-primary transition-colors">
              QUADLIX
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 p-1 glass rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={cn(
                  "relative px-5 py-2 text-xs font-bold transition-all tracking-[0.15em] uppercase z-10",
                  activeTab === link.name ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeTab === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary aura-glow rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <ThemeToggle />
            <Magnetic>
              <Button className="px-8 h-12 bg-foreground text-background text-[11px] font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-[0.2em] shadow-2xl border-glow">
                LAUNCH SUITE
              </Button>
            </Magnetic>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Open navigation menu"
              onClick={() => setIsOpen(true)} 
              className="rounded-full w-10 h-10"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.header>

      <MobileMenu 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        links={navLinks} 
      />
    </>
  );
}
```

## src\components\SaaSCard.tsx

```tsx
'use client';
import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SaaSCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  feature: string;
  color: string;
  className?: string;
  isBento?: boolean;
}

export function SaaSCard({ title, description, icon: Icon, image, feature, color, className, isBento }: SaaSCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${title}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "group relative p-8 rounded-[2.5rem] glass-card border-glow transition-all duration-500 overflow-hidden noise-bg saas-card cursor-pointer",
        isBento ? "col-span-2 row-span-1" : "col-span-1 row-span-1",
        className
      )}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center justify-between mb-8" style={{ transform: "translateZ(50px)" }}>
          <div className={cn("w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg", color)}>
            <Icon className="text-white w-7 h-7" />
          </div>
          <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-primary">
            {feature}
          </div>
        </div>

        <div style={{ transform: "translateZ(75px)" }}>
          <h3 className="text-3xl font-bold font-heading mb-3 tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-[90%]">
            {description}
          </p>
        </div>

        <div className="mt-auto relative rounded-3xl overflow-hidden aspect-[16/9] border border-white/5" style={{ transform: "translateZ(30px)" }}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-4 right-4 animate-float">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center border-glow">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Aura */}
      <div className={cn("absolute -bottom-10 -right-10 w-64 h-64 blur-[100px] opacity-20 pointer-events-none transition-all group-hover:opacity-40", color)} />
    </motion.div>
  );
}

```

## src\components\ThemeToggle.tsx

```tsx
'use client';

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full w-9 h-9 nav-pill"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

```

## src\components\WhatsAppWidget.tsx

```tsx
'use client';
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col items-start gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-72 glass-card rounded-3xl p-5 border-border shadow-2xl relative"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Quadlix Support</h4>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Always Online</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Greetings. Need immediate assistance with your Quadlix infrastructure or suite?
              </p>
              <a 
                href="https://wa.me/1234567890?text=Hello%20Quadlix%20Support%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20SaaS%20solutions." 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-green-500/20"
              >
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white shadow-2xl hover:shadow-green-500/30 transition-all border-4 border-background"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background animate-pulse" />
      </motion.button>
    </div>
  );
}

```

## src\lib\mockData.ts

```ts
import { 
  LayoutDashboard, 
  BarChart3, 
  Globe, 
  Bot, 
  Users, 
  Activity,
  Zap,
  Shield,
  Layers,
  ShoppingBag
} from "lucide-react";

export const products = [
  {
    id: "quadlify",
    title: "Quadlify",
    description: "Create, manage, and scale your online store with Quadlify. The smartest AI-driven alternative to Shopify for modern ecommerce businesses. Launch in minutes.",
    icon: ShoppingBag,
    color: "from-indigo-600 to-cyan-500",
    feature: "AI E-commerce",
    image: "/quadlify_dashboard.jpg",
    link: "https://quadlify.quadlix.com",
    isBento: true
  },
  {
    id: "erp",
    title: "Quadlix ERP",
    description: "Architecting the next century of enterprise intelligence with neural-linked ledger synchronization and real-time kinetic processing.",
    icon: LayoutDashboard,
    color: "from-blue-600 to-indigo-500",
    feature: "Live Quadlix Sync",
    image: "https://picsum.photos/seed/erp/1200/800"
  },
  {
    id: "builder",
    title: "Quadlix Site Gen",
    description: "Instantaneous atomic site construction with real-time viewport optimization and autonomous asset generation.",
    icon: Globe,
    color: "from-cyan-500 to-blue-400",
    feature: "Atomic Rendering",
    image: "https://picsum.photos/seed/sites/1200/800"
  },
  {
    id: "crm",
    title: "Neural CRM",
    description: "Total visibility into the customer lifecycle with automated relationship forecasting and intent-based sorting.",
    icon: Users,
    color: "from-emerald-500 to-teal-400",
    feature: "Intent Mapping",
    image: "https://picsum.photos/seed/crm/1200/800"
  },
  {
    id: "inventory",
    title: "Kinetic Ops",
    description: "Sub-millisecond inventory synchronization across global node clusters with automated replenishment logic.",
    icon: Activity,
    color: "from-orange-500 to-yellow-400",
    feature: "Ops Velocity",
    image: "https://picsum.photos/seed/ops/1200/800"
  }
];

export const metrics = [
  { 
    label: "Neural Load", 
    value: "14.2ms", 
    description: "Latency optimized for high-frequency data synthesis.",
    color: "text-cyan-400",
    animate: "pulse"
  },
  { 
    label: "Sync Fidelity", 
    value: "99.9%", 
    description: "Real-time ledger consistency across 40+ global nodes.",
    color: "text-purple-400"
  },
  { 
    label: "Alpha Growth", 
    value: "2.4k", 
    description: "Daily automated operational baseline expansion.",
    color: "text-emerald-400",
    animate: "upward"
  }
];

export const features = [
  {
    title: "Autonomous Intelligence",
    description: "Self-healing infrastructure that predicts and prevents bottlenecks.",
    icon: Bot,
  },
  {
    title: "Kinetic Security",
    description: "Military-grade encryption layered with behavioral threat analysis.",
    icon: Shield,
  },
  {
    title: "Multi-Node Scale",
    description: "Elastic scaling across decentralized edge networks.",
    icon: Layers,
  }
];

```

## src\lib\utils.ts

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

## src\sections\Contact.tsx

```tsx
'use client';
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-neon-purple/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
                ESTABLISH <br />
                <span className="text-primary">CONNECTION</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Ready to upgrade your operational intelligence? 
                Reach out to our architects for a specialized strategy.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Quadlix Node", value: "Silicon Nebula 404, San Francisco, CA" },
                { icon: Mail, label: "Sublink", value: "comms@quadlix.tech" },
                { icon: Phone, label: "Frequency", value: "+1 (555) NEURAL-IX" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all shadow-sm">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-border/50 p-8 sm:p-10 rounded-[40px] gradient-border">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold opacity-60 ml-1">Identity</label>
                    <Input placeholder="Full Name" className="h-12 rounded-xl bg-white/5 border-white/10 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold opacity-60 ml-1">Frequency</label>
                    <Input placeholder="Email Address" className="h-12 rounded-xl bg-white/5 border-white/10 focus-visible:ring-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60 ml-1">Objective</label>
                  <select className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none">
                    <option className="bg-neutral-900">General Inquiry</option>
                    <option className="bg-neutral-900">Product Demo</option>
                    <option className="bg-neutral-900">Enterprise Solution</option>
                    <option className="bg-neutral-900">Partnership</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60 ml-1">Transmission</label>
                  <textarea 
                    placeholder="Enter your message here..."
                    className="flex min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Button className="w-full h-14 rounded-xl text-lg font-bold group bg-primary hover:neon-glow transition-all">
                  Send Transmission 
                  <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

```

## src\sections\Footer.tsx

```tsx
'use client';
import { Cpu, Github, Twitter, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 border-t border-white/5 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-20 h-20">
                <Image 
                  src="/quadlix-logo.svg" 
                  alt="Quadlix Logo" 
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold font-heading tracking-tight uppercase">
                QUADLIX
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Architecting the next century of enterprise intelligence. 
              Software that doesn't just work—it thinks.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-muted hover:text-primary transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-6 uppercase tracking-widest text-xs">The Suite</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Quadlix ERP</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Digital Marketer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Web Engine X</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Client Sphere CRM</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Neural Assets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ecosystem Status</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security Whitepaper</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dev Community</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-6 uppercase tracking-widest text-xs">Sublink</h4>
            <p className="text-sm text-muted-foreground mb-4">Join our orbital transmission list.</p>
            <div className="flex gap-2">
              <input 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-lg px-3 text-sm flex-grow focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button size="sm" className="rounded-lg px-4 bg-primary text-xs font-bold">JOIN</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground opacity-60">
            © 2026 QUADLIX TECHNOLOGIES INC. ALL CIRCUITS RESERVED.
          </p>
          <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 hover:text-primary transition-colors"
            >
              Back to Apex <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

```

## src\sections\Pricing.tsx

```tsx
'use client';
import * as React from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card as ShadCard, 
  CardContent as ShadCardContent, 
  CardDescription as ShadCardDescription, 
  CardFooter as ShadCardFooter, 
  CardHeader as ShadCardHeader, 
  CardTitle as ShadCardTitle 
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const plans = [
  {
    name: "Starter",
    price: { monthly: 49, yearly: 39 },
    description: "Essential tools for solo innovators and small startups.",
    features: ["Global Inventory Sync", "5 Standard Databoards", "AI Copywriting (Basic)", "Email Support", "1 Admin User"],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: { monthly: 129, yearly: 99 },
    description: "The complete suite for growing digital empires.",
    features: ["Advanced ERP Modules", "Unlimited Dashboards", "AI Content Engine (Full)", "24/7 Priority Support", "10 Team Members", "Custom API Access"],
    cta: "Launch Now",
    popular: true
  },
  {
    name: "Enterprise",
    price: { monthly: 499, yearly: 399 },
    description: "Unparalleled control for large-scale operations.",
    features: ["On-premise Deployment", "Neural Training Lab", "Dedicated Account Suite", "White-labeling Options", "Unlimited Members", "SLAs & Compliance"],
    cta: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  const [billing, setBilling] = React.useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-24 bg-muted/30 relative">
      {/* Decorative radial blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
              TRANSPARENT <br />
              <span className="text-primary">SCALABILITY</span>
            </h2>
          </motion.div>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your current trajectory. 
            All plans include core AI features and a 14-day trial.
          </p>

          <div className="flex justify-center pt-8">
            <Tabs 
              defaultValue="monthly" 
              className="w-64"
              onValueChange={(v) => setBilling(v as "monthly" | "yearly")}
            >
              <TabsList className="grid w-full grid-cols-2 rounded-full h-12 p-1.5 glass border-border/50">
                <TabsTrigger value="monthly" className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background transition-all font-bold">Monthly</TabsTrigger>
                <TabsTrigger value="yearly" className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background transition-all font-bold">Yearly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ShadCard 
                className={`relative h-full flex flex-col glass-card transition-all duration-500 overflow-hidden gradient-border rounded-[2.5rem] p-4 ${
                  plan.popular ? "scale-105 z-10 shadow-2xl shadow-primary/10" : "border-border/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-bold py-1 px-4 transform rotate-45 translate-x-[30px] translate-y-[15px] shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <ShadCardHeader className="pt-8 px-8">
                  <ShadCardTitle className="text-2xl font-heading mb-2">{plan.name}</ShadCardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold font-heading">
                      ${billing === "monthly" ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  {billing === "yearly" && (
                     <p className="text-xs text-primary font-medium pt-1">Billed annually (${plan.price.yearly * 12}/yr)</p>
                  )}
                  <ShadCardDescription className="pt-4 text-base leading-relaxed">
                    {plan.description}
                  </ShadCardDescription>
                </ShadCardHeader>

                <ShadCardContent className="px-8 flex-grow">
                  <div className="w-full h-px bg-white/5 my-6" />
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </ShadCardContent>

                <ShadCardFooter className="p-8">
                  <Button 
                    className={`w-full h-12 rounded-xl text-lg font-bold group ${
                      plan.popular ? "bg-primary hover:neon-glow" : "bg-neutral-800 hover:bg-neutral-700 glass border-white/10"
                    }`}
                  >
                    {plan.cta}
                    <Zap className={`ml-2 w-4 h-4 transition-transform group-hover:scale-125 ${plan.popular ? "fill-primary-foreground" : ""}`} />
                  </Button>
                </ShadCardFooter>
              </ShadCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

```

## src\sections\ProductSuite.tsx

```tsx
'use client';
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Globe, 
  Code2, 
  Bot, 
  Users, 
  LayoutDashboard,
  ArrowUpRight,
  X
} from "lucide-react";
import {
  Card as ShadCard,
  CardContent as ShadCardContent,
  CardDescription as ShadCardDescription,
  CardFooter as ShadCardFooter,
  CardHeader as ShadCardHeader,
  CardTitle as ShadCardTitle,
} from "@/components/ui/card";
import { SaaSCard } from "../components/SaaSCard";
import { Magnetic } from "../components/Magnetic";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { products } from "@/lib/mockData";

export function ProductSuite() {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selectedProduct = products.find(p => p.id === selectedId);

  return (
    <section id="products" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-8xl font-bold font-heading tracking-tight leading-[0.85] uppercase">
              THE <span className="text-aura">ELITE</span> STACK <br />
              <span className="text-muted-foreground opacity-30">FOR THE BOLD</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Eliminating friction between ambition and execution. A cohesive ecosystem 
              of tools architected to amplify your operational baseline.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {products.map((product, i) => (
            <motion.div
              layoutId={`card-${product.id}`}
              key={product.id}
              onClick={() => setSelectedId(product.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(product.isBento ? "md:col-span-2" : "md:col-span-1")}
            >
              <SaaSCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-2xl"
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-4xl glass-card rounded-[3rem] p-8 md:p-16 border-glow noise-bg overflow-hidden"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl", selectedProduct.color)}>
                    <selectedProduct.icon className="text-white w-10 h-10" />
                  </div>
                  <div className="space-y-4">
                    <div className="text-sm font-bold text-primary uppercase tracking-[0.3em]">{selectedProduct.feature}</div>
                    <h3 className="text-4xl md:text-6xl font-black font-heading tracking-tighter leading-none">{selectedProduct.title}</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">{selectedProduct.description}</p>
                  </div>
                  {selectedProduct.link ? (
                    <a href={selectedProduct.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button className="h-16 px-10 rounded-2xl bg-primary text-primary-foreground font-black text-lg shadow-2xl hover:scale-105 transition-all">
                        Initialize System
                      </Button>
                    </a>
                  ) : (
                    <Button className="h-16 px-10 rounded-2xl bg-primary text-primary-foreground font-black text-lg shadow-2xl hover:scale-105 transition-all">
                      Initialize System
                    </Button>
                  )}
                </div>
                <div className="relative rounded-[2rem] overflow-hidden aspect-square border border-white/5">
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

```

## src\sections\Services.tsx

```tsx
'use client';
import { motion } from "framer-motion";
import { 
  Cpu, 
  ShieldAlert, 
  Zap, 
  Workflow, 
  Fingerprint, 
  Layers 
} from "lucide-react";

const services = [
  {
    title: "Neural Automation",
    description: "Self-evolving workflows that adapt to your business velocity in real-time.",
    icon: Cpu,
    border: "border-neon-blue/30"
  },
  {
    title: "Quantum Security",
    description: "Zero-knowledge encryption protocols as standard across the entire suite.",
    icon: ShieldAlert,
    border: "border-neon-purple/30"
  },
  {
    title: "Hyper-Latency Ops",
    description: "Distributed edge processing ensuring your tools are always at peak performance.",
    icon: Zap,
    border: "border-neon-pink/30"
  },
  {
    title: "Cross-Link Sync",
    description: "Seamless data mobility between ERP, CRM, and Marketing modules.",
    icon: Workflow,
    border: "border-neon-blue/30"
  },
  {
    title: "Biometric Identity",
    description: "Next-gen authentication for secure team management and client access.",
    icon: Fingerprint,
    border: "border-neon-purple/30"
  },
  {
    title: "Modular Scaling",
    description: "Infinite room to grow with our hot-swappable enterprise architecture.",
    icon: Layers,
    border: "border-neon-pink/30"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm uppercase tracking-[0.4em] font-bold text-primary mb-4 text-glow">Superior Capabilities</div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight max-w-4xl mx-auto leading-[1.1]">
               ENGINEERED FOR THE <br />
               <span className="text-muted-foreground italic">AUTONOMOUS ERA</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 border border-border/50 bg-card/40 rounded-2xl hover:bg-card/60 transition-all cursor-default gradient-border"
            >
              <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm mb-2 uppercase tracking-wide">{service.title}</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

```

## src\sections\StatsSection.tsx

```tsx
'use client';
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { metrics } from "@/lib/mockData";

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[3rem] p-8 md:p-16 border-white/5 shadow-2xl relative overflow-hidden noise-bg border-glow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 py-8 md:py-0 first:pt-0 last:pb-0 md:first:pl-0 md:last:pr-0"
              >
                <span className="text-xs uppercase font-black tracking-[0.3em] text-muted-foreground/40 mb-3">
                  {metric.label}
                </span>
                
                <motion.div
                  animate={metric.animate === "pulse" ? {
                    scale: [1, 1.02, 1],
                    opacity: [0.9, 1, 0.9]
                  } : {}}
                  transition={metric.animate === "pulse" ? {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  } : {}}
                  className={cn("text-5xl md:text-7xl font-black font-heading tracking-tighter mb-4", metric.color)}
                >
                  {metric.value}
                </motion.div>
                
                <p className="text-sm text-muted-foreground/60 leading-relaxed max-w-[200px]">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Background Highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] -z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

```

