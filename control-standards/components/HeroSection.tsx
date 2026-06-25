'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, CircuitBoard, Gauge, Wifi, Activity } from 'lucide-react';

const particles = Array.from({ length: 20 }).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1 + Math.random() * 2,
  duration: 3 + Math.random() * 4,
  delay: Math.random() * 2,
}));

const floatingIcons = [Cpu, CircuitBoard, Gauge, Wifi, Activity];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Aurora background */}
      <div className="absolute inset-0 aurora pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Animated glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-cyan-400/15 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/40 rounded-full pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              EST. 1999 — BENGALURU, INDIA
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
            >
              <span className="text-white">Precision Automation for</span>{' '}
              <span className="text-gradient-cyan">Global Manufacturing.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl"
            >
              25+ Years of Engineering Excellence from Bengaluru. Trusted by machine builders across 12 countries for PLC programming, drive systems, and control panels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#case-studies"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-blue-400/40"
              >
                Explore Case Studies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl glass glass-hover text-slate-200 hover:text-white font-medium text-sm transition-all duration-300"
              >
                Request Technical Consultation
              </a>
            </motion.div>

            {/* Brand bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-6 pt-4"
            >
              {['Siemens', 'Beckhoff', 'Schneider', 'Mitsubishi'].map((brand) => (
                <span
                  key={brand}
                  className="text-xs font-mono text-slate-600 tracking-widest uppercase"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Glass visual panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden glass-strong glow-cyan">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              <div className="absolute inset-0 aurora-subtle" />

              {/* Floating icons */}
              {floatingIcons.map((Icon, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${15 + i * 18}%`,
                    left: `${10 + (i % 2) * 55}%`,
                  }}
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0.15, 0.35, 0.15],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeInOut',
                  }}
                >
                  <Icon className="w-10 h-10 sm:w-14 sm:h-14 text-white/20" />
                </motion.div>
              ))}

              {/* Metric cards */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                  {[
                    { value: '25+', label: 'Years' },
                    { value: '500+', label: 'Projects' },
                    { value: '18', label: 'Countries' },
                    { value: '99.8%', label: 'Uptime' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                      className="glass rounded-2xl p-4 text-center"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-gradient-cyan">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 mt-1 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* HUD overlay */}
              <div className="absolute top-3 left-3 pointer-events-none font-mono text-[10px] text-cyan-400/40 bg-slate-950/60 backdrop-blur-xl px-2 py-1 rounded-lg border border-white/[0.04]">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3 h-3" /> SYSTEM: ACTIVE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-slate-600 tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
