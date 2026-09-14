'use client';

import { motion } from 'framer-motion';
import { Factory, Globe, ShieldCheck, Users, Cpu, TrendingUp, Award, HeadphonesIcon } from 'lucide-react';
import WorldMap from './WorldMap';

const whatPoints = [
  {
    icon: Factory,
    title: 'Industrial Automation Engineers',
    desc: 'We design, program, and commission control systems for printing, packaging, film, and converting machinery. From PLC programming to complete control panel fabrication.',
  },
  {
    icon: Globe,
    title: 'Based in Bengaluru, Serving the World',
    desc: 'Headquartered in Bengaluru, India, with a customer base spread across the world — 500+ projects delivered across 35+ countries including Germany, USA, UK, UAE, Singapore, South Africa, and Southeast Asia.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified System Integrators',
    desc: 'Siemens Solution Partner and Beckhoff Certified System Integrator with deep expertise in TIA Portal, TwinCAT, SCADA, and motion control.',
  },
  {
    icon: Users,
    title: 'Built on Quality and Precision',
    desc: 'Founded in 2020 with a vision of quality, precision, and the highest engineering standards — trusted by machine builders worldwide for control systems, drive upgrades, and machine modernization.',
  },
];

const whyPoints = [
  {
    icon: Cpu,
    title: 'Deep Technical Expertise',
    desc: 'Specialized in Siemens S7-1200/1500, Beckhoff TwinCAT, servo drives, motion control, and industrial networking.',
  },
  {
    icon: TrendingUp,
    title: 'Proven ROI for Customers',
    desc: 'Our automation solutions consistently deliver 15-40% efficiency gains, reduced downtime, and measurable production improvements.',
  },
  {
    icon: Award,
    title: 'End-to-End Capability',
    desc: 'From concept and panel design to wiring, programming, commissioning, and ongoing support — we handle it all.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Lifecycle Management of Delivered Services',
    desc: 'Every project is backed by full lifecycle management — remote diagnostics, spares planning, upgrades, and rapid on-site response for as long as the system runs.',
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

export default function WhatWhySection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
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
            <Factory className="w-3 h-3" />
            About Control Standards
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
            What &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Why
            </span>{' '}
            Control Standards
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Since 2020, industrial automation engineering built on quality, precision, and customer
            satisfaction — understanding what we do and why global machine builders trust us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* What We Are */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-sm font-bold">W</span>
              What We Are
            </motion.h3>
            <div className="space-y-4">
              {whatPoints.map((p) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    variants={itemAnim}
                    className="group flex items-start gap-4 p-5 rounded-2xl glass border-white/[0.03] hover:border-cyan-400/20 transition-all duration-500"
                  >
                    <div className="liquid-glass-icon w-10 h-10 rounded-xl flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 icon-inner text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{p.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white text-sm font-bold">W</span>
              Why Choose Us
            </motion.h3>
            <div className="space-y-4">
              {whyPoints.map((p) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    variants={itemAnim}
                    className="group flex items-start gap-4 p-5 rounded-2xl glass border-white/[0.03] hover:border-blue-400/20 transition-all duration-500"
                  >
                    <div className="liquid-glass-icon w-10 h-10 rounded-xl flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 icon-inner text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{p.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Global Customer Engagement Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Global Customer{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Engagement
              </span>
            </h3>
            <p className="text-slate-400 mt-2 max-w-2xl mx-auto text-sm">
              One team in Bengaluru, India, engaging customers across 35+ countries worldwide.
            </p>
          </div>
          <WorldMap />
        </motion.div>
      </div>
    </section>
  );
}
