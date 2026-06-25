'use client';

import { motion } from 'framer-motion';
import { FileText, Shield, Monitor, Calendar, ArrowRight, BookOpen, Download } from 'lucide-react';

const resources = [
  {
    icon: FileText,
    title: 'ManOps ERP Brochure',
    desc: '8-page overview of ERP, MES, and eQMS capabilities',
    href: '#contact',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Monitor,
    title: 'FieldPro AI Product Brochure',
    desc: '8-page overview of field operations platform',
    href: '#contact',
    color: 'from-violet-400 to-purple-400',
  },
  {
    icon: Shield,
    title: 'Security Whitepaper',
    desc: 'Enterprise security architecture, encryption & compliance',
    href: '#contact',
    color: 'from-cyan-400 to-emerald-400',
  },
  {
    icon: FileText,
    title: 'AuditTrak Brochure',
    desc: 'Compliance and audit management platform overview',
    href: '#contact',
    color: 'from-amber-400 to-orange-400',
  },
  {
    icon: BookOpen,
    title: 'EduEvent Brochure',
    desc: 'Educational event management solution overview',
    href: '#contact',
    color: 'from-pink-400 to-rose-400',
  },
  {
    icon: Calendar,
    title: 'Product Demo',
    desc: 'Schedule a personalized demo walkthrough',
    href: '#contact',
    color: 'from-indigo-400 to-blue-400',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SalesResourceCenter() {
  return (
    <section id="resources" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 aurora-subtle pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-mono text-blue-400/80 tracking-[0.15em] uppercase mb-6">
            <BookOpen className="w-3 h-3" />
            Resource Center
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 leading-tight">
            Sales &amp;{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Resource Center
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
            Everything you need to evaluate our solutions for your manufacturing operations
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
        >
          {resources.map((r) => {
            const Icon = r.icon;
            return (
              <motion.a
                key={r.title}
                href={r.href}
                variants={itemAnim}
                className="group relative rounded-2xl glass border-white/[0.03] p-6 hover:border-white/[0.08] transition-all duration-500 block"
              >
                <div className="liquid-glass-icon w-12 h-12 rounded-xl mb-4">
                  <Icon className="w-6 h-6 icon-inner text-white/80" />
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                  style={{ backgroundImage: `linear-gradient(135deg, ${r.color.replace('from-', '').split(' ')[0]}, ${r.color.replace('to-', '').split(' ')[1]})` } as React.CSSProperties}
                >
                  {r.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{r.desc}</p>

                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 group-hover:text-cyan-400 transition-colors">
                  {r.title === 'Product Demo' ? 'Request Demo' : 'View PDF'}
                  <Download className="w-3 h-3" />
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block glass rounded-2xl p-8 border-white/[0.03] max-w-lg">
            <h3 className="text-lg font-bold text-white mb-2">Need a Custom Demo?</h3>
            <p className="text-sm text-slate-400 mb-5">
              Get a personalized walkthrough tailored to your manufacturing environment
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white text-sm font-semibold transition-all shadow-lg shadow-blue-500/25"
            >
              Schedule Demo Call <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
