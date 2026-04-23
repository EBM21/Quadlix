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
                  <Button className="h-16 px-10 rounded-2xl bg-primary text-primary-foreground font-black text-lg shadow-2xl hover:scale-105 transition-all">
                    Initialize System
                  </Button>
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
