"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, FileText, Send, CheckCircle } from "lucide-react";
import { submitInquiryAction } from "@/app/lib/actions";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sector: "Renewable Energy",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Fire transaction securely into the Next.js server engine background
    const outcome = await submitInquiryAction(formData);
    
    setIsSubmitting(false);
    if (outcome.success) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", sector: "Renewable Energy", message: "" });
      }, 4000);
    } else {
      alert("Transmission failed. Please verify configurations.");
    }
  };

  return (
    <section className="relative py-24 bg-brand-lightGray px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Official Institutional Registry */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8"
        >
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-3">Get in Touch</h2>
            <p className="text-3xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
              Let's Build.
            </p>
            <p className="text-brand-slate mt-4 font-light leading-relaxed">
              Connect with our corporate office channels to structure your custom infrastructure, procurement schedules, or clean energy assets.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-brand-white rounded-xl border border-brand-navy/5 shadow-sm">
              <div className="p-3 bg-brand-navy/5 text-brand-gold rounded-xl">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-slate">Corporate Registry</p>
                <p className="text-sm font-semibold text-brand-navy">CAC RC Number: <span className="text-brand-emerald">RC-1983421</span></p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-brand-white rounded-xl border border-brand-navy/5 shadow-sm">
              <div className="p-3 bg-brand-navy/5 text-brand-emerald rounded-xl">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-slate">Headquarters</p>
                <p className="text-sm font-medium text-brand-navy">Federal Capital Territory, Abuja, Nigeria</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-brand-white rounded-xl border border-brand-navy/5 shadow-sm">
              <div className="p-3 bg-brand-navy/5 text-brand-emerald rounded-xl">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-slate">Institutional Email</p>
                <p className="text-sm font-medium text-brand-navy">communications@harvestskyline.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Dynamic Inquiry Routing Console */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-brand-white p-8 md:p-10 rounded-3xl border border-brand-navy/5 shadow-xl relative overflow-hidden"
        >
          {formSubmitted && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 bg-brand-white flex flex-col items-center justify-center p-6 text-center z-10"
            >
              <CheckCircle className="w-16 h-16 text-brand-emerald mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Inquiry Logged Securely</h3>
              <p className="text-sm text-brand-slate max-w-sm">
                Thank you. Your message has been processed via our direct server channels. An institutional partner will reply shortly.
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe" 
                  className="w-full bg-brand-lightGray border border-brand-navy/10 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy">Corporate Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="j.doe@company.com" 
                  className="w-full bg-brand-lightGray border border-brand-navy/10 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-navy">Target Sector Routing</label>
              <select 
                value={formData.sector}
                onChange={(e) => setFormData({...formData, sector: e.target.value})}
                className="w-full bg-brand-lightGray border border-brand-navy/10 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer"
              >
                <option value="Renewable Energy">Renewable Energy Solutions</option>
                <option value="Agriculture">Sustainable Agriculture & Trading</option>
                <option value="Real Estate">Premium Real Estate & Sales</option>
                <option value="Infrastructure">Infrastructure Development & Civil Eng.</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-navy">Project ParametersBrief</label>
              <textarea 
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Outline project requirements..."
                className="w-full bg-brand-lightGray border border-brand-navy/10 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-gold transition-colors resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-brand-navy text-brand-gold hover:text-brand-white font-bold text-xs uppercase tracking-widest shadow-xl disabled:opacity-50 transition-all flex items-center justify-center space-x-2 cursor-pointer group"
            >
              <span>{isSubmitting ? "Transmitting..." : "Transmit Secure Inquiry"}</span>
              {!isSubmitting && <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}