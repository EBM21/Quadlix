'use client';
import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
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
    ["blur(0px)", "blur(32px)"]
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
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:aura-glow transition-all">
              <div className="w-5 h-5 bg-white/20 rounded-sm rotate-45 border border-white/40 shadow-inner"></div>
            </div>
            <span className="text-2xl font-bold font-heading tracking-tighter uppercase text-aura">
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
