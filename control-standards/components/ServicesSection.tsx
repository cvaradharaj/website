'use client';

import { motion } from 'framer-motion';
import { Cpu, Cable, RefreshCw, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Industrial Automation',
    tag: 'PLC · HMI · SCADA · Motion',
    items: [
      'Siemens S7-1200/1500 Programming',
      'Beckhoff TwinCAT Development',
      'HMI/SCADA Visualization & Reporting',
      'Multi-Axis Motion Control Systems',
    ],
  },
  {
    icon: Cable,
    title: 'Electrical Engineering',
    tag: 'Panels · Drives · MCC',
    items: [
      'PLC Control Panel Design & Fabrication',
      'MCC/PCC Panel Engineering',
      'Drive & Servo Panel Integration',
      'Panel Wiring, Testing & Commissioning',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Machine Modernization',
    tag: 'Migration · Upgrades · Retrofits',
    items: [
      'Legacy PLC to Siemens Migration',
      'Drive System Modernization',
      'SCADA & HMI Platform Upgrades',
      'Control Panel Retrofits & Rewiring',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Process Improvement',
    tag: 'Optimization · Analytics · OEE',
    items: [
      'Tension & Registration Control',
      'Recipe Management Systems',
      'Throughput & OEE Optimization',
      'Data Logging & Production Analytics',
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 aurora pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-blue-400/60 tracking-[0.2em] uppercase">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Engineering <span className="text-gradient-blue">Services</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            25+ years of delivering precision control systems to machine builders across converting, printing, and packaging industries.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={itemAnim}
                className="group relative overflow-hidden rounded-2xl glass glass-hover border-white/[0.03] p-7"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-400/60 mt-0.5">{s.tag}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-blue-500/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 mt-5 text-xs font-medium text-blue-400 hover:text-cyan-400 transition-colors group/link"
                >
                  Inquire About This Service
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
