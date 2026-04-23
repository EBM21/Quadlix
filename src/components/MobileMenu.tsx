'use client';
import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
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
