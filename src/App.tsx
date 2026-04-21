import * as React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StatsSection } from "./sections/StatsSection";
import { Services } from "./sections/Services";
import { ProductSuite } from "./sections/ProductSuite";
import { Pricing } from "./sections/Pricing";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { AIAssistant } from "./components/AIAssistant";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { motion, AnimatePresence } from "motion/react";

// Simple custom ThemeProvider to fix type errors in this environment
const ThemeContext = React.createContext<{
  theme: string;
  setTheme: (theme: string) => void;
}>({
  theme: "dark",
  setTheme: () => {},
});

export const useTheme = () => React.useContext(ThemeContext);

export default function App() {
  const [theme, setTheme] = React.useState("dark");
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    containerRef.current.style.setProperty("--x", `${e.clientX - left}px`);
    containerRef.current.style.setProperty("--y", `${e.clientY - top}px`);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={{ "--radius": "500px" } as React.CSSProperties}
        className="relative min-h-screen bg-background font-sans text-foreground selection:bg-cyan-500/30 selection:text-white transition-colors duration-500 noise-bg overflow-x-hidden"
      >
        <WhatsAppWidget />
        
        {/* Background Elements */}
        <div className="fixed inset-0 grid-pattern opacity-10 -z-10 pointer-events-none" />
        <div className="fixed inset-0 nebula-gradient -z-20 pointer-events-none" />
        <div className="fixed inset-0 spotlight-container opacity-[0.03] dark:opacity-[0.05] bg-primary -z-10 pointer-events-none" />
        
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
                    {["CYBERNE", "NEURAL.INK", "AETHER", "VORTEX", "NEXUS"].map((brand) => (
                      <span key={brand} className="text-xl md:text-2xl font-heading font-black tracking-[0.2em]">{brand}</span>
                    ))}
                  </div>
                </div>
              </div>

              <Services />
              <ProductSuite />
              
              {/* Highlight Banner */}
              <div className="container mx-auto px-4 md:px-6 py-24">
                <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-center glass-card border-border/50 group gradient-border">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-colors duration-1000" />
                  <div className="relative z-10 space-y-8">
                     <h3 className="text-4xl md:text-7xl font-bold font-heading tracking-tight leading-[1.1]">
                        READY TO ARCHITECT <br />
                        YOUR <span className="text-primary italic">DIGITAL LEGACY?</span>
                     </h3>
                     <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join the 2,500+ enterprises leveraging Quadlix to redefine their operational baseline.
                        Instant deployment. Zero friction. Pure intelligence.
                     </p>
                     <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
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
    </ThemeContext.Provider>
  );
}
