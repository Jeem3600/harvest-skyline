"use client";

import { useRef } from "react";
import { X, Printer, Shield, Receipt } from "lucide-react";

interface InvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  invoiceData: {
    id: string;
    detail: string;
    type: string;
    status: string;
    date: string;
  };
}

export default function InvoiceModal({ isOpen, onClose, invoiceData }: InvoiceModalProps) {
  const printAreaRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  // Uses native system layout controllers to execute a localized A4 doc grab
  const handlePrint = () => {
    const printContent = printAreaRef.current?.innerHTML;
    const originalContent = document.body.innerHTML;

    if (printContent) {
      document.body.innerHTML = printContent;
      window.print();
      // Restore dynamic virtual environment safely
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy/80 backdrop-blur-sm p-4">
      <div className="bg-brand-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-brand-navy/10 flex flex-col max-h-[90vh]">
        
        {/* Interactive Modal Controller Bar */}
        <div className="bg-brand-navy p-4 flex items-center justify-between text-brand-white px-6">
          <div className="flex items-center space-x-2">
            <Receipt className="w-4 h-4 text-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-wider">Document Management Center</span>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={handlePrint}
              className="px-4 py-2 bg-brand-white/10 hover:bg-brand-white/20 text-brand-gold font-bold text-xs rounded-xl uppercase tracking-wider transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button onClick={onClose} className="p-2 hover:bg-brand-white/10 rounded-xl transition-all cursor-pointer text-brand-white/70 hover:text-brand-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas Area */}
        <div className="p-8 overflow-y-auto flex-1 bg-white text-slate-900" ref={printAreaRef}>
          <div className="space-y-8 p-4 border border-slate-200 rounded-xl bg-white">
            
            {/* Header Block */}
            <div className="flex justify-between items-start border-b border-slate-100 pb-6">
              <div>
                <h1 className="text-xl font-black tracking-tight text-slate-900 uppercase">Harvest & Skyline Ltd</h1>
                <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">Corporate Operations & Infrastructure</p>
                <p className="text-[11px] text-slate-400 mt-2 font-light">Abuja, Federal Capital Territory, Nigeria</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-800 rounded-full uppercase tracking-wider">
                  {invoiceData.status}
                </span>
                <p className="text-xs font-mono font-bold mt-3 text-slate-700">{invoiceData.id}</p>
                <p className="text-[11px] text-slate-400 font-light mt-0.5">{invoiceData.date}</p>
              </div>
            </div>

            {/* Entity Assignment Mapping */}
            <div className="grid grid-cols-2 gap-6 text-xs border-b border-slate-100 pb-6">
              <div>
                <p className="font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-1">Issued From:</p>
                <p className="font-bold text-slate-800">Harvest & Skyline Vendor Desk</p>
                <p className="text-slate-500 font-light mt-0.5">CAC Reg: RC-1983421</p>
                <p className="text-slate-500 font-light">billing@harvestskyline.com</p>
              </div>
              <div>
                <p className="font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-1">Prepared For:</p>
                <p className="font-bold text-slate-800">Authorized Institutional Partner</p>
                <p className="text-slate-500 font-light mt-0.5">Account ID: HSC-2026-9921</p>
                <p className="text-slate-500 font-light">Secure Portal Delivery</p>
              </div>
            </div>

            {/* Financial Ledger Item Table */}
            <div className="space-y-4">
              <p className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Transaction Parameters Overview</p>
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 font-bold">
                    <th className="p-3">Specification Detail</th>
                    <th className="p-3 text-center">Type</th>
                    <th className="p-3 text-right">Tax Framework (VAT)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 text-slate-700">
                    <td className="p-3 font-medium max-w-sm">{invoiceData.detail}</td>
                    <td className="p-3 text-center font-mono text-slate-500">{invoiceData.type}</td>
                    <td className="p-3 text-right text-slate-600 font-medium">7.5% Standard Incorporated</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Formal Institutional Footer Signoff */}
            <div className="pt-12 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
              <div className="flex items-center space-x-1.5">
                <Shield className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-medium tracking-tight">Verified Institutional Certificate Registry System</span>
              </div>
              <p className="font-mono">Page 1 of 1</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}