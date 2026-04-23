'use client';
import * as React from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card as ShadCard, 
  CardContent as ShadCardContent, 
  CardDescription as ShadCardDescription, 
  CardFooter as ShadCardFooter, 
  CardHeader as ShadCardHeader, 
  CardTitle as ShadCardTitle 
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const plans = [
  {
    name: "Starter",
    price: { monthly: 49, yearly: 39 },
    description: "Essential tools for solo innovators and small startups.",
    features: ["Global Inventory Sync", "5 Standard Databoards", "AI Copywriting (Basic)", "Email Support", "1 Admin User"],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: { monthly: 129, yearly: 99 },
    description: "The complete suite for growing digital empires.",
    features: ["Advanced ERP Modules", "Unlimited Dashboards", "AI Content Engine (Full)", "24/7 Priority Support", "10 Team Members", "Custom API Access"],
    cta: "Launch Now",
    popular: true
  },
  {
    name: "Enterprise",
    price: { monthly: 499, yearly: 399 },
    description: "Unparalleled control for large-scale operations.",
    features: ["On-premise Deployment", "Neural Training Lab", "Dedicated Account Suite", "White-labeling Options", "Unlimited Members", "SLAs & Compliance"],
    cta: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  const [billing, setBilling] = React.useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-24 bg-muted/30 relative">
      {/* Decorative radial blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
              TRANSPARENT <br />
              <span className="text-primary">SCALABILITY</span>
            </h2>
          </motion.div>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your current trajectory. 
            All plans include core AI features and a 14-day trial.
          </p>

          <div className="flex justify-center pt-8">
            <Tabs 
              defaultValue="monthly" 
              className="w-64"
              onValueChange={(v) => setBilling(v as "monthly" | "yearly")}
            >
              <TabsList className="grid w-full grid-cols-2 rounded-full h-12 p-1.5 glass border-border/50">
                <TabsTrigger value="monthly" className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background transition-all font-bold">Monthly</TabsTrigger>
                <TabsTrigger value="yearly" className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background transition-all font-bold">Yearly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
            >
              <ShadCard 
                className={`relative h-full flex flex-col glass-card transition-all duration-500 overflow-hidden gradient-border rounded-[2.5rem] p-4 ${
                  plan.popular ? "scale-105 z-10 shadow-2xl shadow-primary/10" : "border-border/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-bold py-1 px-4 transform rotate-45 translate-x-[30px] translate-y-[15px] shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <ShadCardHeader className="pt-8 px-8">
                  <ShadCardTitle className="text-2xl font-heading mb-2">{plan.name}</ShadCardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold font-heading">
                      ${billing === "monthly" ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  {billing === "yearly" && (
                     <p className="text-xs text-primary font-medium pt-1">Billed annually (${plan.price.yearly * 12}/yr)</p>
                  )}
                  <ShadCardDescription className="pt-4 text-base leading-relaxed">
                    {plan.description}
                  </ShadCardDescription>
                </ShadCardHeader>

                <ShadCardContent className="px-8 flex-grow">
                  <div className="w-full h-px bg-white/5 my-6" />
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </ShadCardContent>

                <ShadCardFooter className="p-8">
                  <Button 
                    className={`w-full h-12 rounded-xl text-lg font-bold group ${
                      plan.popular ? "bg-primary hover:neon-glow" : "bg-neutral-800 hover:bg-neutral-700 glass border-white/10"
                    }`}
                  >
                    {plan.cta}
                    <Zap className={`ml-2 w-4 h-4 transition-transform group-hover:scale-125 ${plan.popular ? "fill-primary-foreground" : ""}`} />
                  </Button>
                </ShadCardFooter>
              </ShadCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
