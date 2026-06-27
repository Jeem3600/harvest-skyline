"use client";

import { motion } from "framer-motion";
import { Award, Shield, Eye, Target, Sparkles, CheckCircle2 } from "lucide-react";

export default function About() {
  const values = [
    { name: "Innovation", desc: "Pioneering disruptive industry breakthroughs." },
    { name: "Integrity", desc: "Absolute institutional transparency and ethics." },
    { name: "Excellence", desc: "Uncompromised execution in global delivery standards." },
    { name: "Sustainability", desc: "Eco-centric methodologies driving long-term value." },
    { name: "Professionalism", desc: "Strict elite alignment to timelines and governance." },
    { name: "Transparency", desc: "Open architecture communication across stakeholder channels." }
  ];

  return (
    <section className="relative py-24 bg-brand-lightGray px-4 md:px-8 overflow-hidden">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-emerald/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Corporate Briefing Panel */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-navy/5 border border-brand-navy/10 px-4 py-1 rounded-full">
            <Award className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-xs font-bold text-brand-navy/80 uppercase tracking-widest">Institutional Portfolio</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            Committed to <br />
            <span className="text-brand-emerald">Sustainable</span> Value Creation.
          </h2>

          <p className="text-brand-slate text-base md:text-lg font-light leading-relaxed">
            Harvest & Skyline Ltd is a premier Nigerian corporate enterprise incorporated under the Corporate Affairs Commission (CAC). We are engineered to design, build, and deploy elite solutions across infrastructural segments.
          </p>

          {/* Quick Credential Highlights Box */}
          <div className="glass-panel p-6 rounded-2xl border border-brand-navy/10 shadow-sm space-y-4">
            <div className="flex items-start space-x-3">
              <Eye className="w-5 h-5 text-brand-gold mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-brand-navy text-sm">Corporate Vision</h4>
                <p className="text-xs text-brand-slate font-light">To be the sovereign benchmark of high-performance engineering in Sub-Saharan Africa.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Target className="w-5 h-5 text-brand-emerald mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-brand-navy text-sm">Strategic Mission</h4>
                <p className="text-xs text-brand-slate font-light">Optimizing operational workflows through premium technological execution and sustainable procurement.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Interactive Executive Core Values Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 10px 30px -15px rgba(10,25,47,0.1)" }}
              className="bg-brand-white p-6 rounded-2xl border border-brand-navy/5 shadow-sm transition-all flex items-start space-x-4 group"
            >
              <div className="p-2.5 bg-brand-lightGray rounded-xl text-brand-emerald group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                <CheckCircle2 className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy text-base mb-1 group-hover:text-brand-emerald transition-colors">
                  {value.name}
                </h3>
                <p className="text-xs text-brand-slate font-light leading-normal">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}