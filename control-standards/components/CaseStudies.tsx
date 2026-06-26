'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Factory, RefreshCw, Gauge, Wifi, CheckCircle } from 'lucide-react';

const cases = [
  {
    id: 'film-line',
    icon: Factory,
    title: 'Film Line Modernization',
    subtitle: 'PLC Upgrade · Drive Replacement',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e0b?w=800&q=80',
    color: 'cyan',
    challenge: 'Legacy proprietary PLC system causing frequent downtime and limiting production to 70% capacity on a BOPP film line.',
    solution: 'Replaced legacy system with Siemens S7-1500, upgraded DC drives to SINAMICS G120, integrated HMI with recipe management for 50+ film grades.',
    technologies: ['Siemens S7-1500', 'SINAMICS G120', 'WinCC HMI', 'TIA Portal'],
    results: [
      { label: 'Production Increase', value: '22%' },
      { label: 'Energy Reduction', value: '15%' },
      { label: 'Downtime Reduction', value: '40%' },
    ],
  },
  {
    id: 'printing',
    icon: RefreshCw,
    title: 'Printing Machine Upgrade',
    subtitle: 'Legacy Migration · Remote Diagnostics',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    color: 'blue',
    challenge: '12-station gravure press running on obsolete controller with no spare parts availability and rising fault-finding times.',
    solution: 'Migrated to Siemens S7-1500 with Beckhoff I/O for registration control, implemented secure VPN remote diagnostics, new HMI with job recipe storage.',
    technologies: ['Siemens S7-1500', 'Beckhoff I/O', 'Industrial VPN', 'HMI'],
    results: [
      { label: 'Fault-Finding Time', value: '-40%' },
      { label: 'Job Changeover', value: '-25%' },
      { label: 'Production Uptime', value: '+18%' },
    ],
  },
  {
    id: 'metallizing',
    icon: Gauge,
    title: 'Metallizing Plant Automation',
    subtitle: 'Process Control · Data Logging',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    color: 'cyan',
    challenge: 'Vacuum metallizing line with inconsistent coating quality due to manual tension adjustments and no production data capture.',
    solution: 'Full automation with precision tension control, real-time data logging, web-based production reporting dashboard, alarm management system.',
    technologies: ['Siemens S7-1200', 'SCADA', 'SQL Database', 'Web Dashboard'],
    results: [
      { label: 'Scrap Reduction', value: '18%' },
      { label: 'Quality Consistency', value: '+35%' },
      { label: 'Data Availability', value: '100%' },
    ],
  },
  {
    id: 'coating',
    icon: Wifi,
    title: 'Coating Line Control System',
    subtitle: 'Motion Sync · Tension Control',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    color: 'blue',
    challenge: 'Multi-zone coating line with poor tension synchronization across 8 zones, causing frequent web breaks and material waste.',
    solution: 'Multi-axis motion synchronization with closed-loop tension control across all zones, recipe management for 120+ formulations, automated changeover sequence.',
    technologies: ['Beckhoff TwinCAT', 'EtherCAT', 'Servo Drives', 'Recipe Manager'],
    results: [
      { label: 'Changeover Time', value: '-35%' },
      { label: 'Web Break Rate', value: '-60%' },
      { label: 'Material Yield', value: '+22%' },
    ],
  },
];

export default function CaseStudies() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="case-studies" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
        style={{ backgroundImage: "url('/Slitting.png')" }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-cyan-400/60 tracking-[0.2em] uppercase">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Case <span className="text-gradient-cyan">Studies</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Real projects delivering measurable production gains for global manufacturers.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {cases.map((c, idx) => {
            const isOpen = openId === c.id;
            const Icon = c.icon;
            const isCyan = c.color === 'cyan';

            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="rounded-2xl glass border-white/[0.03] overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : c.id)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border ${
                      isCyan
                        ? 'bg-cyan-400/10 border-cyan-400/20'
                        : 'bg-blue-500/10 border-blue-500/20'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${isCyan ? 'text-cyan-400' : 'text-blue-400'}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white">{c.title}</h3>
                    <p
                      className={`text-xs font-mono mt-0.5 ${
                        isCyan ? 'text-cyan-400/60' : 'text-blue-400/60'
                      }`}
                    >
                      {c.subtitle}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/[0.04]">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-5">
                          {/* Image */}
                          <div className="md:col-span-2">
                            <div
                              className="w-full aspect-[4/3] rounded-xl bg-cover bg-center"
                              style={{ backgroundImage: `url(${c.image})` }}
                            />
                          </div>

                          {/* Content */}
                          <div className="md:col-span-3 space-y-5">
                            <div>
                              <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                                Challenge
                              </h4>
                              <p className="text-sm text-slate-400 leading-relaxed">
                                {c.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                                Solution
                              </h4>
                              <p className="text-sm text-slate-400 leading-relaxed">
                                {c.solution}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                                Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {c.technologies.map((t) => (
                                  <span
                                    key={t}
                                    className={`text-xs font-mono px-3 py-1 rounded-full border ${
                                      isCyan
                                        ? 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400/80'
                                        : 'bg-blue-500/10 border-blue-500/20 text-blue-400/80'
                                    }`}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              {c.results.map((r) => (
                                <div
                                  key={r.label}
                                  className="glass rounded-xl p-3 text-center"
                                >
                                  <div
                                    className={`text-lg font-bold ${
                                      isCyan ? 'text-cyan-400' : 'text-blue-400'
                                    }`}
                                  >
                                    {r.value}
                                  </div>
                                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                                    {r.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass glass-hover text-sm text-slate-300 hover:text-white transition-all"
          >
            Discuss Your Project <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
