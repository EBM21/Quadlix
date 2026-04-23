'use client';
import * as React from "react";
import { motion } from "motion/react";
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
