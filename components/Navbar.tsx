"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Cpu, Tractor, Home as HomeIcon, Building } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8">
      {/* Main Glassmorphic Wrapper */}
      <div className="max-w-7xl mx-auto glass-panel-dark rounded-full px-6 py-3 flex items-center justify-between border border-brand-gold/10 shadow-lg">
        
        {/* Brand Logo Identity */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="h-9 w-9 bg-gradient-to-br from-brand-gold to-brand-emerald rounded-xl flex items-center justify-center shadow-md">
            <Cpu className="text-brand-navy w-5 h-5 stroke-[2]" />
          </div>
          <span className="text-brand-white font-bold tracking-tight text-lg">
            HARVEST & <span className="text-brand-gold font-medium">SKYLINE</span>
          </span>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-white/80 hover:text-brand-gold text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button CTA */}
        <div className="hidden md:flex items-center">
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-brand-gold to-amber-500 text-brand-navy font-semibold text-xs tracking-wider uppercase shadow-md hover:brightness-110 active:scale-95 transition-all">
            Client Portal
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-white hover:text-brand-gold focus:outline-none transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-brand-navy/95 backdrop-blur-xl border border-brand-gold/20 rounded-2xl p-6 flex flex-col space-y-4 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-brand-white/90 hover:text-brand-gold text-base font-medium py-2 border-b border-brand-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-2 py-3 rounded-xl bg-brand-gold text-brand-navy font-bold text-sm tracking-wider uppercase text-center shadow-lg">
              Client Portal
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}