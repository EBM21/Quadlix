'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { cn } from "@/lib/utils";
import * as React from "react";

export function Hero() {
  const { scrollY } = useScroll();
  
  // Throttle parallax or disable on mobile logic would go here, 
  // but we'll stick to basic optimizations first.
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-10"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl border border-primary/30 bg-primary/5 mb-2 backdrop-blur-sm shadow-xl">
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
                aria-label="Deploy your Quadlix environment"
                className="px-10 h-16 bg-primary text-primary-foreground rounded-2xl font-black text-sm aura-glow hover:scale-[1.05] transition-all uppercase tracking-widest border-glow"
              >
                Deploy Environment
              </Button>
            </Magnetic>
            <Magnetic>
              <Button 
                size="lg" 
                variant="outline" 
                aria-label="Audit our SaaS suite"
                className="px-10 h-16 border-border/50 rounded-2xl font-black text-sm bg-card transition-all uppercase tracking-widest hover:bg-muted"
              >
                Audit Suite
              </Button>
            </Magnetic>
          </div>
        </motion.div>

        {/* Visual SaaS Dashboard Preview */}
        <div className="lg:col-span-7 relative w-full h-auto md:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
            className="relative w-full bg-card/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-[0_0_100px_rgba(6,182,212,0.15)] overflow-hidden aspect-auto md:aspect-[4/3] group border-glow noise-bg"
          >
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <div className="flex gap-2 md:gap-3">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500/20 border border-red-500/40"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500/20 border border-green-500/40"></div>
              </div>
              <div className="text-[9px] md:text-[11px] text-muted-foreground font-mono tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                QUADLIX-X // NEURAL SYNC
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-10 w-full">
              {[
                { label: "Neural Load", val: "14.2ms", color: "text-cyan-400", animate: "pulse" },
                { label: "Sync Fidelity", val: "99.9%", color: "text-purple-400" },
                { label: "Alpha Growth", val: "2.4k", color: "text-emerald-400", animate: "upward" }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl md:rounded-3xl p-4 md:p-6 border-white/5 shadow-xl flex flex-col items-center md:items-start text-center md:text-left"
                >
                  <div className="text-[9px] md:text-[10px] uppercase font-black tracking-widest text-muted-foreground/60 mb-1 md:mb-2">
                    {stat.label}
                  </div>
                  <motion.div 
                    animate={stat.animate === "pulse" ? { 
                      scale: [1, 1.05, 1],
                      opacity: [0.8, 1, 0.8]
                    } : {}}
                    transition={stat.animate === "pulse" ? {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    } : {}}
                    className={cn("text-xl md:text-4xl font-black font-heading", stat.color)}
                  >
                    {stat.val}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div className="h-64 glass rounded-[2.5rem] relative overflow-hidden border-white/5">
              <svg viewBox="0 0 400 100" className="absolute bottom-0 w-full opacity-50">
                <path d="M0,80 C50,70 80,30 120,40 C160,50 200,10 240,20 C280,30 320,60 400,10 L400,100 L0,100 Z" fill="url(#grad)" />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "rgba(6, 182, 212, 0.4)" }} />
                    <stop offset="100%" style={{ stopColor: "rgba(6, 182, 212, 0)" }} />
                  </linearGradient>
                </defs>
                <path d="M0,80 C50,70 80,30 120,40 C160,50 200,10 240,20 C280,30 320,60 400,10" fill="none" stroke="#06b6d4" strokeWidth="3" />
              </svg>
              <div className="absolute top-6 left-8 text-xs font-black uppercase tracking-[0.3em] opacity-40">Kinetic Flow Optimization</div>
            </div>

            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [-2, 1, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 left-12 w-64 glass p-6 rounded-3xl shadow-3xl transform border-glow aura-glow"
            >
              <div className="text-[10px] font-black uppercase mb-1 text-primary tracking-widest">Architectural Node</div>
              <div className="text-lg font-bold">Neural Engine v8.2</div>
              <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Parallax Background Blobs */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[20%] left-[-10%] w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[200px] -z-10"
      />
    </section>
  );
}
