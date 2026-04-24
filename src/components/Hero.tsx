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