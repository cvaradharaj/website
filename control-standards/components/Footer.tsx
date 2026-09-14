'use client';

const footerLinks = {
  Services: ['Industrial Automation', 'Electrical Engineering', 'Machine Modernization', 'Process Improvement'],
  Industries: ['Packaging', 'Printing', 'Film', 'Metallizing', 'Coating', 'Textile', 'Steel', 'Food'],
  Technologies: ['Siemens', 'Beckhoff', 'TwinCAT', 'SCADA', 'Motion Control', 'Drives'],
};

const companyLinks = [
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Case Studies', href: '/#case-studies' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-slate-950">
      <div className="absolute inset-0 aurora-subtle pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img
                src="/logo-sm.png"
                alt="Control Standards"
                className="h-10 w-auto opacity-90"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Est. 2020 · Quality, Precision & Customer Satisfaction
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Based in Bengaluru, India · Serving Customers in 35+ Countries
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
                      className="text-xs text-slate-400 hover:text-slate-300 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.03] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>&copy; {new Date().getFullYear()} Control Standards. All rights reserved.</p>
          <p className="font-mono">Siemens · Beckhoff · Schneider · Mitsubishi — Certified Partners</p>
        </div>
      </div>
    </footer>
  );
}
