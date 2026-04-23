import { 
  LayoutDashboard, 
  BarChart3, 
  Globe, 
  Bot, 
  Users, 
  Activity,
  Zap,
  Shield,
  Layers
} from "lucide-react";

export const products = [
  {
    id: "erp",
    title: "Quadlix ERP",
    description: "Architecting the next century of enterprise intelligence with neural-linked ledger synchronization and real-time kinetic processing.",
    icon: LayoutDashboard,
    color: "from-blue-600 to-indigo-500",
    feature: "Live Quadlix Sync",
    image: "https://picsum.photos/seed/erp/1200/800",
    isBento: true
  },
  {
    id: "marketing",
    title: "Digital Alpha",
    description: "Predictive campaign synthesis using deep-learning sentiment analysis and automated cross-channel kinetic placement.",
    icon: BarChart3,
    color: "from-purple-600 to-pink-500",
    feature: "Sentiment AI",
    image: "https://picsum.photos/seed/marketing/1200/800"
  },
  {
    id: "builder",
    title: "Quadlix Site Gen",
    description: "Instantaneous atomic site construction with real-time viewport optimization and autonomous asset generation.",
    icon: Globe,
    color: "from-cyan-500 to-blue-400",
    feature: "Atomic Rendering",
    image: "https://picsum.photos/seed/sites/1200/800"
  },
  {
    id: "crm",
    title: "Neural CRM",
    description: "Total visibility into the customer lifecycle with automated relationship forecasting and intent-based sorting.",
    icon: Users,
    color: "from-emerald-500 to-teal-400",
    feature: "Intent Mapping",
    image: "https://picsum.photos/seed/crm/1200/800"
  },
  {
    id: "inventory",
    title: "Kinetic Ops",
    description: "Sub-millisecond inventory synchronization across global node clusters with automated replenishment logic.",
    icon: Activity,
    color: "from-orange-500 to-yellow-400",
    feature: "Ops Velocity",
    image: "https://picsum.photos/seed/ops/1200/800"
  }
];

export const metrics = [
  { 
    label: "Neural Load", 
    value: "14.2ms", 
    description: "Latency optimized for high-frequency data synthesis.",
    color: "text-cyan-400",
    animate: "pulse"
  },
  { 
    label: "Sync Fidelity", 
    value: "99.9%", 
    description: "Real-time ledger consistency across 40+ global nodes.",
    color: "text-purple-400"
  },
  { 
    label: "Alpha Growth", 
    value: "2.4k", 
    description: "Daily automated operational baseline expansion.",
    color: "text-emerald-400",
    animate: "upward"
  }
];

export const features = [
  {
    title: "Autonomous Intelligence",
    description: "Self-healing infrastructure that predicts and prevents bottlenecks.",
    icon: Bot,
  },
  {
    title: "Kinetic Security",
    description: "Military-grade encryption layered with behavioral threat analysis.",
    icon: Shield,
  },
  {
    title: "Multi-Node Scale",
    description: "Elastic scaling across decentralized edge networks.",
    icon: Layers,
  }
];
