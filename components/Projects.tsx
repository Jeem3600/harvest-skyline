"use client";

import { motion } from "framer-motion";
import { FolderGit2, MapPin, Calendar, DollarSign, Activity } from "lucide-react";

export default function Projects() {
  const caseStudies = [
    {
      title: "Sovereign Solar Grid Phase 1",
      sector: "Renewable Energy",
      location: "Abuja, FCT",
      duration: "12 Months",
      progress: 100,
      status: "Completed",
      metric: "500kWp Capacity Peak"
    },
    {
      title: "Automated Rice Milling Center",
      sector: "Agriculture",
      location: "Kano State",
      duration: "18 Months",
      progress: 85,
      status: "Ongoing",
      metric: "40 Tons/Day Throughput"
    },
    {
      title: "Skyline Horizons Estate Layout",
      sector: "Real Estate",
      location: "Lekki, Lagos",
      duration: "24 Months",
      progress: 40,
      status: "Under Construction",
      metric: "150 Luxury Units Planned"
    }
  ];

  return (
    <section className="relative py-24 bg-brand-navy px-4 md:px-8 overflow-hidden border-t border-brand-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">Enterprise Portfolio</h2>
            <p className="text-3xl md:text-5xl font-bold text-brand-white tracking-tight">
              Flagship Operations
            </p>
            <p className="text-brand-slate mt-4 font-light text-base">
              A comprehensive tracking record of our large-scale civil engineering, sustainable power implementations, and localized asset infrastructures within Nigeria.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="inline-flex items-center space-x-2 bg-brand-white/5 border border-brand-white/10 px-4 py-2 rounded-xl text-xs font-medium text-brand-white">
              <Activity className="w-4 h-4 text-brand-emerald animate-pulse" />
              <span>Real-Time Tracker Active</span>
            </span>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel-dark rounded-2xl border border-brand-white/10 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-brand-gold/30 transition-all duration-300"
            >
              {/* Card Banner Body */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                    {project.sector}
                  </span>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    project.status === "Completed" ? "bg-brand-emerald/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brand-white mb-4 group-hover:text-brand-gold transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Tracking Parameters Metadata */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 pt-4 border-t border-brand-white/5 text-sm text-brand-slate">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-brand-slate/60 shrink-0" />
                    <span className="text-brand-white/80 font-light truncate">{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-brand-slate/60 shrink-0" />
                    <span className="text-brand-white/80 font-light truncate">{project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Completion Progress Tracker Panel */}
              <div className="p-6 bg-brand-white/[0.02] border-t border-brand-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-brand-slate uppercase tracking-wider">Project Metric: <span className="text-brand-white font-normal lowercase">{project.metric}</span></span>
                  <span className="text-brand-gold font-bold">{project.progress}%</span>
                </div>
                {/* Visual Progress Bar Component */}
                <div className="w-full bg-brand-white/10 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-gradient-to-r from-brand-gold to-brand-emerald h-full rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}