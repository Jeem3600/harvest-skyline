"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Zap, Layers } from "lucide-react";

export default function Hero() {
  // Explicitly typing variants so the new Motion engine accepts them perfectly
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 60 } 
    }
  };

  const stats = [
    { value: "100%", label: "Sustainable Solutions" },
    { value: "CAC Reg", label: "Fully Registered Vendor" },
    { value: "24/7", label: "Enterprise Support" }
  ];

  return (
    <section className="relative min-h-screen bg-brand-navy flex items-center justify-center pt-24 overflow-hidden">
      
      {/* Premium Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,81,50,0.12),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Floating Abstract Shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-emerald/10 rounded-full filter blur-3xl pointer-events-none hidden md:block" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none hidden md:block" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center mt-8">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 max-w-4xl mx-auto"
        >
          {/* Subtle Enterprise Tag */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-brand-white/5 border border-brand-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span className="text-xs font-semibold text-brand-white/90 uppercase tracking-widest">CAC Registered Corporate Enterprise</span>
          </motion.div>

          {/* Epic Main Headline Text Reveal */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl font-extrabold text-brand-white tracking-tight leading-[1.1]">
            Engineering Innovative Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-emerald">
              Nigeria’s Next Horizon.
            </span>
          </motion.h1>

          {/* Descriptive Subtitle */}
          <motion.p variants={itemVariants} className="text-brand-slate text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Harvest & Skyline Ltd delivers premium corporate operations across Renewable Energy, Sustainable Agriculture, Real Estate, and Infrastructure Development.
          </motion.p>

          {/* Interactive Calls to Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-gold to-amber-500 text-brand-navy font-bold text-sm uppercase tracking-wider shadow-xl hover:shadow-brand-gold/10 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center space-x-2 group">
              <span>Explore Corporate Sectors</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-white/5 hover:bg-brand-white/10 text-brand-white border border-brand-white/10 text-sm font-semibold uppercase tracking-wider backdrop-blur-md active:scale-98 transition-all">
              Request Consultancy
            </button>
          </motion.div>

        </motion.div>

        {/* Real-time Rolling Key Metric Counters */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8 border-t border-brand-white/5"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-panel-dark p-6 rounded-2xl border border-brand-white/5 text-center shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-brand-gold mb-1">{stat.value}</h3>
              <p className="text-xs font-medium uppercase tracking-widest text-brand-white/50">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}