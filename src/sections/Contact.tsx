import { motion } from "motion/react";
import { Send, MapPin, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-neon-purple/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
                ESTABLISH <br />
                <span className="text-primary">CONNECTION</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Ready to upgrade your operational intelligence? 
                Reach out to our architects for a specialized strategy.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Quadlix Node", value: "Silicon Nebula 404, San Francisco, CA" },
                { icon: Mail, label: "Sublink", value: "comms@quadlix.tech" },
                { icon: Phone, label: "Frequency", value: "+1 (555) NEURAL-IX" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all shadow-sm">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-border/50 p-8 sm:p-10 rounded-[40px] gradient-border">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold opacity-60 ml-1">Identity</label>
                    <Input placeholder="Full Name" className="h-12 rounded-xl bg-white/5 border-white/10 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold opacity-60 ml-1">Frequency</label>
                    <Input placeholder="Email Address" className="h-12 rounded-xl bg-white/5 border-white/10 focus-visible:ring-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60 ml-1">Objective</label>
                  <select className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none">
                    <option className="bg-neutral-900">General Inquiry</option>
                    <option className="bg-neutral-900">Product Demo</option>
                    <option className="bg-neutral-900">Enterprise Solution</option>
                    <option className="bg-neutral-900">Partnership</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-60 ml-1">Transmission</label>
                  <textarea 
                    placeholder="Enter your message here..."
                    className="flex min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Button className="w-full h-14 rounded-xl text-lg font-bold group bg-primary hover:neon-glow transition-all">
                  Send Transmission 
                  <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
