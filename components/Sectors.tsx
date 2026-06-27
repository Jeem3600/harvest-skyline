"use client";

import { motion } from "framer-motion";
import { Zap, Tractor, Home, Building, Briefcase, ArrowUpRight } from "lucide-react";

export default function Sectors() {
  const industries = [
    {
      icon: <Zap className="w-6 h-6 text-brand-gold" />,
      title: "Renewable Energy",
      subtitle: "Sustainable Power Solutions",
      details: ["Solar Installations & Maintenance", "Off-Grid & Hybrid Power Plants", "Energy Audits & Battery Backups"],
      color: "border-brand-gold/20 hover:border-brand-gold/50"
    },
    {
      icon: <Tractor className="w-6 h-6 text-emerald-400" />,
      title: "Agriculture",
      subtitle: "Agro-Processing & Trading",
      details: ["Farm Development & Engineering", "Agricultural Machinery Supply", "Agro-Consultancy Services"],
      color: "border-emerald-500/20 hover:border-emerald-500/50"
    },
    {
      icon: <Home className="w-6 h-6 text-amber-400" />,
      title: "Real Estate",
      subtitle: "Property & Asset Management",
      details: ["Premium Property Development", "Land Acquisition & Sales", "Strategic Investment Advising"],
      color: "border-amber-500/20 hover:border-amber-500/50"
    },
    {
      icon: <Building className="w-6 h-6 text-blue-400" />,
      title: "Infrastructure",
      subtitle: "Civil Engineering & Construction",
      details: ["Structural Project Management", "Facility Asset Development", "General Civil Contracting"],
      color: "border-blue-500/20 hover:border-blue-500/50"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-brand-slate" />,
      title: "Business Services",
      subtitle: "Procurement & Supply Chain",
      details: ["Global Procurement Logistics", "Corporate Advisory & Audits", "General Venture Contracts"],
      color: "border-brand-white/10 hover:border-brand-white/30"
    }
  ];

  return (
    <section className="relative py-24 bg-brand-navy px-4 md:px-8 border-t border-brand-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">Our Core Operations</h2>
          <p className="text-3xl md:text-5xl font-bold text-brand-white tracking-tight">
            Diversified Expertise. Clean Solutions.
          </p>
          <p className="text-brand-slate mt-4 font-light text-base md:text-lg">
            Harvest & Skyline Ltd operates across structural growth markets in Nigeria, building scalable architectures for long-term value creation.
          </p>
        </div>

        {/* Dynamic Industry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel-dark p-8 rounded-2xl border ${industry.color} transition-all duration-300 group flex flex-col justify-between cursor-pointer`}
            >
              <div>
                {/* Header Icon Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-brand-white/5 rounded-xl border border-brand-white/10 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-brand-slate opacity-0 group-hover:opacity-100 group-hover:text-brand-white transition-all duration-300" />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-brand-white mb-1 group-hover:text-brand-gold transition-colors">
                  {industry.title}
                </h3>
                <p className="text-xs text-brand-slate font-medium uppercase tracking-wider mb-6">
                  {industry.subtitle}
                </p>

                {/* Capability Bullet Details List */}
                <ul className="space-y-3 border-t border-brand-white/5 pt-4">
                  {industry.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-brand-white/70 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 mr-3 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Read More Anchor Action */}
              <div className="mt-8 pt-4 border-t border-brand-white/5 text-xs font-semibold text-brand-gold uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-flex items-center">
                Explore Solutions &rarr;
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}