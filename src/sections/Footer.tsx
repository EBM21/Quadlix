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
              <div className="relative w-10 h-10">
                <Image 
                  src="/quadlix-logo.svg" 
                  alt="Quadlix Logo" 
                  width={40}
                  height={40}
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
