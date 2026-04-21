import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col items-start gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-72 glass-card rounded-3xl p-5 border-border shadow-2xl relative"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Quadlix Support</h4>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Always Online</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Greetings. Need immediate assistance with your Quadlix infrastructure or suite?
              </p>
              <a 
                href="https://wa.me/1234567890?text=Hello%20Quadlix%20Support%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20SaaS%20solutions." 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-green-500/20"
              >
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white shadow-2xl hover:shadow-green-500/30 transition-all border-4 border-background"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background animate-pulse" />
      </motion.button>
    </div>
  );
}
