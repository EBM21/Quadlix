'use client';
import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: "user" | "model";
  content: string;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState<Message[]>([
    { role: "model", content: "Hello! I'm Quadlix AI. How can I help you navigate our SaaS ecosystem today?" }
  ]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      let aiContent = "";
      
      if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "MY_GEMINI_API_KEY") {
        // Mock response for static builds or missing keys
        await new Promise(resolve => setTimeout(resolve, 1000));
        aiContent = `As a Quadlix AI representative, I can confirm that our services (ERP, CRM, and Site Gen) are optimized for your workflow. For deeper integration, please provide a valid Neural Key.`;
      } else {
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: [...messages, userMessage].map(m => ({
            role: m.role,
            parts: [{ text: m.content }]
          })),
          config: {
            systemInstruction: "You are Quadlix AI, the virtual assistant for 'Quadlix', a futuristic SaaS provider. Your tone is helpful, professional, and tech-forward. You know about Quadlix ERP, Digital Marketer, Web Engine X, and Client Sphere CRM. Encourage users to launch the suite or book a demo."
          }
        });
        aiContent = response.text || "I'm sorry, I couldn't process that.";
      }

      setMessages(prev => [...prev, { role: "model", content: aiContent }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: "model", content: "Apologies, my neural circuits are offline. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

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
