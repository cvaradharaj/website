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
      'HMI/SCADA Visualization',
      'Multi-Axis Motion Control',
    ],
    accent: 'blue',
  },
  {
    icon: Cable,
    title: 'Electrical Engineering',
    tag: 'Panels · Drives · MCC',
    items: [
      'PLC Control Panel Fabrication',
      'MCC/PCC Panel Design',
      'Drive & Servo Panels',
      'Panel Wiring & Testing (Bengaluru)',
    ],
    accent: 'cyan',
  },
  {
    icon: RefreshCw,
    title: 'Machine Modernization',
    tag: 'Migration · Upgrades · Retrofits',
    items: [
      'Legacy PLC to Siemens Migration',
      'Drive System Upgrades',
      'SCADA Modernization',
      'Control Panel Retrofits',
    ],
    accent: 'blue',
  },
  {
    icon: TrendingUp,
    title: 'Process Improvement',
    tag: 'Optimization · Analytics · OEE',
    items: [
      'Tension Control Optimization',
      'Recipe Management Systems',
      'Throughput & OEE Improvement',
      'Data Logging & Reporting',
    ],
    accent: 'cyan',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesHub() {
  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-blue-400/80 tracking-[0.2em] uppercase">
            Core Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-3">
            Engineering Services
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            25+ years of delivering precision control systems to global machine builders across
            printing, packaging, film, and converting industries.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {services.map((s) => {
            const Icon = s.icon;
            const isCyan = s.accent === 'cyan';

            return (
              <motion.div
                key={s.title}
                variants={itemAnim}
                className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 hover:border-slate-700/80 transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border ${
                      isCyan
                        ? 'bg-cyan-400/10 border-cyan-400/20'
                        : 'bg-blue-500/10 border-blue-500/20'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${isCyan ? 'text-cyan-400' : 'text-blue-500'}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {s.title}
                    </h3>
                    <p
                      className={`text-xs font-mono mt-0.5 ${
                        isCyan ? 'text-cyan-400/70' : 'text-blue-400/70'
                      }`}
                    >
                      {s.tag}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                      <span
                        className={`w-1 h-1 rounded-full flex-shrink-0 ${
                          isCyan ? 'bg-cyan-400' : 'bg-blue-500'
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 mt-5 text-xs font-semibold transition-all hover:gap-2.5 ${
                    isCyan ? 'text-cyan-400' : 'text-blue-500'
                  }`}
                >
                  Inquire About This Service <ArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
