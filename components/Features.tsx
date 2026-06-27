"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Zap, Globe } from "lucide-react";

export default function Features() {
  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Corporate Integrity",
      description: "Fully CAC registered vendor adhering strictly to international corporate governance and regulatory compliance standards.",
      color: "text-brand-gold"
    },
    {
      icon: Target,
      title: "Precision Execution",
      description: "Delivering infrastructure assets and agricultural trading pipelines backed by data-driven operational strategies.",
      color: "text-brand-emerald"
    },
    {
      icon: Zap,
      title: "Sustainable Innovation",
      description: "Engineering long-term renewable energy solutions designed to empower Nigerian commercial landscapes efficiently.",
      color: "text-amber-400"
    },
    {
      icon: Globe,
      title: "Macro-Economic Scaling",
      description: "Building integrated systems that drive sustainable domestic growth while matching global export standards.",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="py-24 bg-brand-navy border-t border-brand-white/5 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Institutional Pillars</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-brand-white tracking-tight">
            Built for Scale. Engineered for Trust.
          </p>
          <p className="text-brand-slate text-sm font-light leading-relaxed">
            Harvest & Skyline Ltd operates at the intersection of critical industrial development sectors, prioritizing longevity and structural excellence.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-brand-white/5 hover:border-brand-gold/20 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className={`p-3 bg-brand-white/5 rounded-xl inline-block ${value.color}`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-white tracking-tight">{value.title}</h3>
                <p className="text-brand-slate text-xs font-light leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}