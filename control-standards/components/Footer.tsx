'use client';

import { Cpu } from 'lucide-react';

const footerLinks = {
  Services: ['Industrial Automation', 'Electrical Engineering', 'Machine Modernization', 'Process Improvement'],
  Industries: ['Packaging', 'Printing', 'Film', 'Metallizing', 'Coating', 'Textile', 'Steel', 'Food'],
  Technologies: ['Siemens', 'Beckhoff', 'TwinCAT', 'SCADA', 'Motion Control', 'Drives'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-slate-950">
      <div className="absolute inset-0 aurora-subtle pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-xs font-bold">
                <span className="text-white">CONTROL</span>
                <span className="text-blue-400 ml-1">STANDARDS</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
              Est. 1999 · 25+ Years of Engineering Excellence
            </p>
            <p className="text-xs text-slate-700 mt-1">
              Global Operations: Indonesia · Turkey · South America · China
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-slate-600 hover:text-slate-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.03] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-700">
          <p>&copy; {new Date().getFullYear()} Control Standards. All rights reserved.</p>
          <p className="font-mono">Siemens · Beckhoff · Schneider · Mitsubishi — Certified Partners</p>
        </div>
      </div>
    </footer>
  );
}
