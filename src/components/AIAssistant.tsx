'use client';
import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "model";
  content: string;
}

export function AIAssistant() {
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState<Message[]>([
    { role: "model", content: "Hello! I'm Quadlix AI. How can I help you navigate our SaaS ecosystem today?" }
  ]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input.toLowerCase();
    setInput("");
    setIsLoading(true);

    // Mock AI Simulation
    setTimeout(() => {
      let aiContent = "";
      
      if (currentInput.includes("pricing") || currentInput.includes("cost")) {
        aiContent = "Our pricing is structured for maximum scalability. We have 'Starter' for solo innovators ($49/mo), 'Professional' for growing teams ($129/mo), and customized 'Enterprise' solutions. All plans include neural-core access.";
      } else if (currentInput.includes("service") || currentInput.includes("feature")) {
        aiContent = "The Quadlix suite includes Neural Automation, Quantum Security, and Modular Scaling. Our ERP and CRM modules are integrated via our proprietary neural-linked ledger system.";
      } else if (currentInput.includes("hello") || currentInput.includes("hi")) {
        aiContent = "Greetings. I am Quadlix-X Neural Core. How can I assist your operational deployment today?";
      } else {
        aiContent = "That's an interesting query. At Quadlix, we focus on eliminating operational entropy. For a detailed technical whitepaper or a personal walkthrough, I recommend establishing a direct connection via our Contact portal.";
      }

      setMessages(prev => [...prev, { role: "model", content: aiContent }]);
      setIsLoading(false);
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[60] flex items-center gap-3">
        {!isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-2xl animate-bubble-bounce hidden md:block"
            >
              <div className="text-[10px] text-blue-400 font-bold uppercase mb-0.5 tracking-widest">Quadlix AI</div>
              <div className="text-xs text-white">How can I assist your workflow today?</div>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 border border-white/10"
            >
              <MessageSquare className="text-white h-6 w-6" />
            </motion.button>
          </>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
            className="fixed bottom-24 right-8 w-[400px] max-w-[calc(100vw-48px)] h-[550px] max-h-[calc(100vh-120px)] glass-card rounded-[32px] overflow-hidden z-[60] flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
          >
            {/* Header */}
            <div className="p-6 bg-primary/10 border-b border-primary/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Bot className="text-primary-foreground h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">Quadlix AI</h3>
                  <div className="flex items-center gap-1.5 opacity-60">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <ScrollArea className="flex-grow p-6">
              <div className="space-y-4">
                {messages.map((message, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex gap-3 max-w-[85%]",
                      message.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1",
                      message.role === "model" ? "bg-primary/20 text-primary" : "bg-white/10 text-white"
                    )}>
                      {message.role === "model" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    <div className={cn(
                      "p-4 rounded-2xl text-sm leading-relaxed",
                      message.role === "model" 
                        ? "bg-white/5 border border-white/10 rounded-tl-none" 
                        : "bg-primary text-primary-foreground rounded-tr-none"
                    )}>
                      {message.content}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 mr-auto max-w-[85%]">
                     <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                        <Loader2 className="w-4 h-4 animate-spin" />
                     </div>
                     <div className="p-4 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none italic text-sm text-muted-foreground">
                        Neural circuits firing...
                     </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Footer / Input */}
            <div className="p-4 bg-black/20 border-t border-white/5">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <Input 
                  placeholder="Ask about our suite..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="rounded-xl border-white/10 bg-white/5 h-11 focus-visible:ring-primary focus-visible:ring-offset-0"
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={!input.trim() || isLoading}
                  className="rounded-xl w-11 h-11 bg-primary hover:bg-primary/90 shrink-0"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </form>
              <p className="text-[10px] text-center mt-3 text-muted-foreground/60 uppercase tracking-widest font-bold">
                Powered by Quadlix-X Neural Core
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
