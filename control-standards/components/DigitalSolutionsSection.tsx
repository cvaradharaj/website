'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Users, Cpu, Link, Layout, Target, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Lightbulb,
    title: 'Next-Gen Manufacturing',
    gradient: 'from-cyan-400 to-blue-400',
    desc: 'We architect the future through continuous innovation. Every solution we build today lays the groundwork for tomorrow&apos;s breakthroughs. By constantly analyzing and reimagining possibilities, we push beyond familiar territory into digital and data-driven frontiers — creating next-generation production for a new era of value.',
  },
  {
    icon: Users,
    title: 'Solution-Driven Engineers',
    gradient: 'from-blue-400 to-violet-400',
    desc: 'Curiosity fuels us. Ambition defines us. Persistence keeps us moving forward. We believe in the power of creativity and progress, constantly testing, learning, and adapting to technological evolution with agility. Because innovation isn&apos;t just what we do — it&apos;s who we are.',
  },
  {
    icon: Cpu,
    title: 'Industry 4.0 for Web Processing',
    gradient: 'from-cyan-400 to-emerald-400',
    desc: 'A comprehensive digital integration platform purpose-built for networking slitting, winding, and web-shaped material processing systems across the entire value chain. Digitally efficient, intelligently future-oriented.',
  },
  {
    icon: Link,
    title: 'Connected Operations',
    gradient: 'from-blue-400 to-cyan-400',
    desc: 'One unified platform delivering real-time machine data, practical process knowledge, intuitive spare parts identification, and an integrated online shop. Everything your team needs — all in one place, always accessible.',
  },
  {
    icon: Layout,
    title: 'One Platform — Five Modules',
    gradient: 'from-violet-400 to-blue-400',
    desc: 'An integrated digitalization solution for slitting and winding processes. Start with Essential for basic monitoring and remote service, then scale up with three additional packages. You decide where and how to deploy digital transformation across your operation.',
  },
  {
    icon: Target,
    title: 'Essential in a Nutshell',
    gradient: 'from-cyan-400 to-blue-400',
    desc: 'The entry point into digital production — minimize downtime and cut costs with live machine monitoring, remote diagnostics, and direct access to service specialists.',
    features: [
      'Overview of all connected machines with live status',
      'Real-time machine data transmission',
      'Log messages & diagnostic insights',
      'Remote service support & direct specialist line',
      'R-Cycle ready for circular economy compliance',
    ],
  },
];

const outcomes = [
  { icon: Rocket, label: 'Remote Service Access', desc: 'Direct line to experienced service specialists' },
  { icon: CheckCircle, label: 'Machine Intelligence', desc: 'Comprehensive records & live status of all equipment' },
  { icon: Cpu, label: 'Advanced Diagnostics', desc: 'Online analysis & predictive insights' },
  { icon: Link, label: 'Future-Ready', desc: 'Digital R-Cycle product passport preparation' },
  { icon: Target, label: 'Maximal Availability', desc: 'Network-automated production plants monitored 24/7' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DigitalSolutionsSection() {
  return (
    <section id="digital-solutions" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 aurora pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-mono text-cyan-400/80 tracking-[0.15em] uppercase mb-6">
            <Cpu className="w-3 h-3" />
            Industry 4.0 Platform
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
            Digital Solutions for{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Web Processing
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            A unified digital ecosystem for slitting and winding — connecting people, machines, and data
            across your entire manufacturing value chain.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={itemAnim}
                className="group relative rounded-2xl glass border-white/[0.03] p-6 hover:border-cyan-400/20 transition-all duration-500"
              >
                <div className="liquid-glass-icon w-11 h-11 rounded-xl mb-4">
                  <Icon className="w-5.5 h-5.5 icon-inner text-cyan-400" />
                </div>

                <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">{p.desc}</p>

                {p.features && (
                  <ul className="space-y-1.5 mt-3 pt-3 border-t border-white/[0.04]">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[11px] text-slate-500">
                        <span className="w-1 h-1 rounded-full bg-cyan-400/60 flex-shrink-0 mt-1.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-lg font-bold text-white mb-8">
            Key Outcomes with{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Control Standards
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {outcomes.map((o) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={o.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="glass rounded-xl p-4 text-center hover:border-cyan-400/20 transition-all"
                >
                  <div className="liquid-glass-icon w-9 h-9 rounded-lg mx-auto mb-2">
                    <Icon className="w-4.5 h-4.5 icon-inner text-cyan-400" />
                  </div>
                  <h4 className="text-xs font-bold text-white mb-0.5">{o.label}</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{o.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-sm font-semibold transition-all shadow-lg shadow-cyan-500/25"
          >
            Discuss Your Digital Transformation <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
