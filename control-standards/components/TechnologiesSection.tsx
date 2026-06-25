'use client';

import { motion } from 'framer-motion';
import { Cpu, Cable, Monitor, Server, ArrowRight, Database, Radio } from 'lucide-react';

const technologies = [
  {
    name: 'Siemens',
    subtitle: 'PLC · HMI · Drives · SCADA',
    items: ['S7-1200 / S7-1500', 'SINAMICS G120 / S210', 'WinCC / TIA Portal', 'SIMATIC HMI Panels'],
    icon: Monitor,
    color: 'cyan',
  },
  {
    name: 'Beckhoff',
    subtitle: 'PC-Based Control · TwinCAT',
    items: ['TwinCAT 3 PLC + NC', 'CX / EK Series', 'EtherCAT Terminals', 'Drive Technology'],
    icon: Cpu,
    color: 'blue',
  },
  {
    name: 'Schneider Electric',
    subtitle: 'Modicon · Altivar · EcoStruxure',
    items: ['Modicon M221 / M241', 'Altivar Drives', 'EcoStruxure Control', 'Panel Packs'],
    icon: Server,
    color: 'cyan',
  },
  {
    name: 'Mitsubishi Electric',
    subtitle: 'MELSEC · Servo · GOT HMI',
    items: ['MELSEC iQ-F / iQ-R', 'MELSERVO-J4', 'GOT2000 HMI Series', 'FR-D700 / FR-A800'],
    icon: Database,
    color: 'blue',
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

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono text-cyan-400/80 tracking-[0.2em] uppercase">
            Certified Integration Partners
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-3">
            Technology <span className="text-gradient-cyan">Stack</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            Authorized system integrators for world-leading automation platforms.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {technologies.map((tech) => {
            const Icon = tech.icon;
            const isCyan = tech.color === 'cyan';

            return (
              <motion.div
                key={tech.name}
                variants={itemAnim}
                className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 hover:border-slate-700/80 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border ${
                      isCyan
                        ? 'bg-cyan-400/10 border-cyan-400/20'
                        : 'bg-blue-500/10 border-blue-500/20'
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${isCyan ? 'text-cyan-400' : 'text-blue-500'}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {tech.name}
                    </h3>
                    <p
                      className={`text-xs font-mono mt-0.5 ${
                        isCyan ? 'text-cyan-400/70' : 'text-blue-400/70'
                      }`}
                    >
                      {tech.subtitle}
                    </p>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center border text-xs font-bold ${
                      isCyan
                        ? 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400'
                        : 'bg-blue-500/10 border-blue-500/20 text-blue-500'
                    }`}
                  >
                    <Cpu className="w-4 h-4" />
                  </div>
                </div>

                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                  {tech.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-400"
                    >
                      <span
                        className={`w-1 h-1 rounded-full flex-shrink-0 ${
                          isCyan ? 'bg-cyan-400' : 'bg-blue-500'
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white font-semibold text-sm transition-all border border-slate-700/50"
          >
            Need a Different Platform? Let&apos;s Discuss <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
