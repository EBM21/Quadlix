import { motion } from "motion/react";
import { 
  Cpu, 
  ShieldAlert, 
  Zap, 
  Workflow, 
  Fingerprint, 
  Layers 
} from "lucide-react";

const services = [
  {
    title: "Neural Automation",
    description: "Self-evolving workflows that adapt to your business velocity in real-time.",
    icon: Cpu,
    border: "border-neon-blue/30"
  },
  {
    title: "Quantum Security",
    description: "Zero-knowledge encryption protocols as standard across the entire suite.",
    icon: ShieldAlert,
    border: "border-neon-purple/30"
  },
  {
    title: "Hyper-Latency Ops",
    description: "Distributed edge processing ensuring your tools are always at peak performance.",
    icon: Zap,
    border: "border-neon-pink/30"
  },
  {
    title: "Cross-Link Sync",
    description: "Seamless data mobility between ERP, CRM, and Marketing modules.",
    icon: Workflow,
    border: "border-neon-blue/30"
  },
  {
    title: "Biometric Identity",
    description: "Next-gen authentication for secure team management and client access.",
    icon: Fingerprint,
    border: "border-neon-purple/30"
  },
  {
    title: "Modular Scaling",
    description: "Infinite room to grow with our hot-swappable enterprise architecture.",
    icon: Layers,
    border: "border-neon-pink/30"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-primary mb-4 text-glow">Superior Capabilities</h2>
            <h3 className="text-4xl md:text-6xl font-bold font-heading tracking-tight max-w-4xl mx-auto leading-[1.1]">
               ENGINEERED FOR THE <br />
               <span className="text-muted-foreground italic">AUTONOMOUS ERA</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 border border-border/50 bg-card/40 rounded-2xl hover:bg-card/60 transition-all cursor-default gradient-border"
            >
              <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm mb-2 uppercase tracking-wide">{service.title}</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
