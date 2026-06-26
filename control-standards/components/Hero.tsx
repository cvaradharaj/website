'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileDown, Cpu, CircuitBoard, Gauge, Wifi } from 'lucide-react';

const floatingIcons = [Cpu, CircuitBoard, Gauge, Wifi];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent pointer-events-none" />

      <div className="absolute top-1/4 right-[15%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-xs font-mono text-blue-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              EST. 1999 — BENGALURU, INDIA
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight"
            >
              <span className="text-white">25+ Years of Global</span>{' '}
              <span className="text-gradient-cyan">Industrial Automation</span>{' '}
              <span className="text-white">Engineering Excellence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg"
            >
              Engineering precision control systems for printing, packaging, and film line
              automation. Trusted by global machine builders across 12 countries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all hover:gap-3"
              >
                Explore Case Studies
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-semibold text-sm transition-all"
              >
                <FileDown className="w-4 h-4" />
                Download Company Profile (PDF)
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 pt-4"
            >
              {['Siemens', 'Beckhoff', 'Schneider', 'Mitsubishi'].map((brand) => (
                <span
                  key={brand}
                  className="text-xs font-mono text-slate-500 tracking-widest uppercase"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Animated Visual Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px] rounded-2xl border border-slate-800/80 overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950">
              <div className="absolute inset-0 bg-grid-cyan opacity-30" />

              {/* Floating tech icons */}
              {floatingIcons.map((Icon, i) => (
                <div
                  key={i}
                  className="absolute text-slate-700/30 animate-float"
                  style={{
                    top: `${15 + i * 22}%`,
                    left: `${10 + (i % 2) * 60}%`,
                    animationDelay: `${i * 1.5}s`,
                    animationDuration: `${5 + i * 1}s`,
                  }}
                >
                  <Icon className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
              ))}

              {/* Central stat cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-6 w-full max-w-md">
                  {[
                    { label: 'Years', value: '25+' },
                    { label: 'Countries', value: '12' },
                    { label: 'Projects', value: '500+' },
                    { label: 'Partners', value: '12+' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="glass-panel rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-gradient-cyan">
                        {stat.value}
                      </div>
                      <div className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Animated pulse rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border border-blue-500/10 animate-ping"
                    style={{ animationDelay: `${i * 2}s`, animationDuration: '6s' }}
                  />
                ))}
              </div>

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* HUD overlay */}
              <div className="absolute top-3 left-3 pointer-events-none font-mono text-[10px] text-cyan-400/50 bg-slate-950/80 px-2 py-1 rounded border border-slate-800/50 backdrop-blur-sm">
                SYSTEM: ACTIVE // 13.03° N, 77.59° E (BENGALURU HUB)
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
