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
