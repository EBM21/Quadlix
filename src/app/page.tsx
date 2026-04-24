'use client';

import * as React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/sections/StatsSection";
import { Services } from "@/sections/Services";
import { ProductSuite } from "@/sections/ProductSuite";
import { Footer } from "@/sections/Footer";

// Dynamic imports for heavy content and non-critical components
const Pricing = dynamic(() => import("@/sections/Pricing").then(mod => mod.Pricing), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />
});
const Contact = dynamic(() => import("@/sections/Contact").then(mod => mod.Contact), {
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
      <WhatsAppWidget />
      
      {/* Background Elements */}
      <div className="fixed inset-0 grid-pattern opacity-10 -z-10 pointer-events-none" />
      <div className="fixed inset-0 nebula-gradient -z-20 pointer-events-none" />
      
      <div className="fixed top-[-10%] right-[-5%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] -z-20 animate-pulse" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[150px] -z-20 animate-pulse" />
      
      <Navbar />
      
      <main className="relative z-10 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
}
