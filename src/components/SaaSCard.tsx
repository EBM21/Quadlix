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
