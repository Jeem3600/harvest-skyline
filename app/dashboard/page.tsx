"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, FileClock, CheckCircle, LayoutDashboard, LogOut, ArrowUpRight } from "lucide-react";
import InvoiceModal from "@/components/InvoiceModal";

export default function Dashboard() {
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { label: "Active Project Phases", value: "3", icon: Briefcase, color: "text-brand-gold" },
    { label: "Pending Quotations", value: "1", icon: FileClock, color: "text-amber-400" },
    { label: "Cleared Invoices", value: "4", icon: CheckCircle, color: "text-brand-emerald" },
  ];

  const activities = [
    { id: "HS-REN-8291", detail: "Solar Grid Phase 1 Infrastructure Approval", type: "Quotation", status: "Approved", date: "June 24, 2026" },
    { id: "INV-9021", detail: "Procurement Clearing Ledger", type: "Invoice", status: "Unpaid", date: "June 20, 2026" },
    { id: "HS-AGR-4721", detail: "Milling Machinery Setup Estimates", type: "Quotation", status: "Pending", date: "June 18, 2026" },
  ];

  const launchDocumentView = (log: any) => {
    setSelectedInvoice(log);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-navy text-brand-white flex">
      
      {/* Sidebar Control Panel */}
      <aside className="w-64 border-r border-brand-white/10 hidden md:flex flex-col justify-between p-6 bg-brand-navy">
        <div className="space-y-8">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-brand-gold rounded-full" />
            <span className="font-bold tracking-tight text-sm uppercase">H&S Enterprise</span>
          </div>
          <nav className="space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl bg-brand-white/5 text-brand-gold text-xs font-bold uppercase tracking-wider transition-all">
              <LayoutDashboard className="w-4 h-4" />
              <span>Console Desk</span>
            </button>
          </nav>
        </div>
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer">
          <LogOut className="w-4 h-4" />
          <span>Exit Portal</span>
        </button>
      </aside>

      {/* Main Panel Workspace */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto max-w-7xl mx-auto space-y-10">
        
        {/* Welcome Block */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-white/5 pb-6">
          <div>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">Institutional Workspace</h1>
            <p className="text-brand-slate text-xs md:text-sm font-light mt-1">Manage project deployment milestones and financial procurement tracks.</p>
          </div>
          <div className="bg-brand-white/5 border border-brand-white/10 px-4 py-2 rounded-xl text-xs font-mono">
            Client ID: <span className="text-brand-emerald">HSC-2026-9921</span>
          </div>
        </header>

        {/* Analytical Metric Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-brand-white/5 flex items-center justify-between"
            >
              <div className="space-y-1">
                <p className="text-xs font-medium text-brand-slate uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-extrabold text-brand-white">{stat.value}</p>
              </div>
              <div className={`p-3 bg-brand-white/5 rounded-xl ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ledger Tracking Logs */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Operations Ledger</h2>
          <div className="glass-panel rounded-2xl border border-brand-white/5 overflow-hidden">
            <div className="divide-y divide-brand-white/5">
              {activities.map((log, index) => (
                <div key={index} className="p-4 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-brand-white/[0.01] transition-all group">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono text-brand-gold">{log.id}</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-brand-white/5 text-brand-slate">{log.type}</span>
                    </div>
                    <p className="text-sm font-medium text-brand-white/90 group-hover:text-brand-gold transition-colors">{log.detail}</p>
                    <p className="text-[11px] text-brand-slate font-light">{log.date}</p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      log.status === "Approved" ? "bg-brand-emerald/20 text-emerald-400" : 
                      log.status === "Unpaid" ? "bg-red-500/20 text-red-400" : "bg-amber-500/20 text-amber-400"
                    }`}>
                      {log.status}
                    </span>
                    <button 
                      onClick={() => launchDocumentView(log)}
                      className="p-2 bg-brand-white/5 rounded-lg border border-brand-white/10 hover:border-brand-gold transition-all text-brand-white cursor-pointer"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      {/* Floating Document Modal Context */}
      {selectedInvoice && (
        <InvoiceModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          invoiceData={selectedInvoice} 
        />
      )}
    </div>
  );
}           