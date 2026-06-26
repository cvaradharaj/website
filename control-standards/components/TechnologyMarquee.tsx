'use client';

import { motion } from 'framer-motion';
import { Cpu, Monitor, Wifi, Gauge, Server, Cable, CircuitBoard, HardDrive } from 'lucide-react';

const techItems = [
  { name: 'SIEMENS', icon: Monitor },
  { name: 'BECKHOFF', icon: Cpu },
  { name: 'TWINCAT', icon: CircuitBoard },
  { name: 'SCADA', icon: Wifi },
  { name: 'MOTION CONTROL', icon: Gauge },
  { name: 'DRIVES', icon: Server },
  { name: 'SERVO SYSTEMS', icon: Cable },
  { name: 'PLC PANELS', icon: HardDrive },
  { name: 'TIA PORTAL', icon: Cpu },
  { name: 'ETHERCAT', icon: Wifi },
];

function TechPill({ name, icon: Icon, index }: { name: string; icon: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative"
    >
      <div className="flex items-center gap-3 px-5 py-3 rounded-full glass glass-hover border-white/[0.04] transition-all duration-300 cursor-default">
        <Icon className="w-4 h-4 text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
        <span className="text-sm font-medium text-slate-300 group-hover:text-white tracking-wider transition-colors">
          {name}
        </span>
      </div>
      <div className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors pointer-events-none" />
    </motion.div>
  );
}

export default function TechnologyMarquee() {
  return (
    <section id="technologies" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 aurora-subtle pointer-events-none" />
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/HealthDashboard.png')" }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono text-blue-400/60 tracking-[0.2em] uppercase">
            Technology Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Platforms We <span className="text-gradient-cyan">Engineer</span>
          </h2>
        </motion.div>

        {/* Floating pills grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {techItems.map((item, i) => (
            <TechPill key={item.name} {...item} index={i} />
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-sm text-slate-600 mt-10 font-mono"
        >
          Certified system integrators for world-leading automation platforms
        </motion.p>
      </div>
    </section>
  );
}
