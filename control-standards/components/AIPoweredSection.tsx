'use client';

import { motion } from 'framer-motion';
import {
  Radio,
  Boxes,
  Wrench,
  Network,
  Gauge,
  Cpu,
  ShieldCheck,
  Zap,
  CloudCog,
  Bot,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const features = [
  {
    icon: Radio,
    title: 'IIoT & Remote Monitoring',
    desc: 'Sensors and connected controllers stream live machine data so plant health can be tracked from anywhere, on any shift',
    tags: ['Live telemetry', 'Remote diagnostics', 'Alerting'],
    gradient: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Boxes,
    title: 'Digital Twin & Simulation',
    desc: 'Virtual commissioning and process simulation validate PLC logic and mechanical behavior before machines are built',
    tags: ['Virtual commissioning', 'Process modeling', 'Risk reduction'],
    gradient: 'from-violet-400 to-purple-400',
  },
  {
    icon: Wrench,
    title: 'Predictive Maintenance',
    desc: 'Condition monitoring and drive/motor diagnostics flag wear before it causes unplanned downtime',
    tags: ['Vibration analysis', 'Condition monitoring', 'Downtime avoidance'],
    gradient: 'from-cyan-400 to-emerald-400',
  },
  {
    icon: Network,
    title: 'SCADA, MES & ERP Integration',
    desc: 'Shop-floor controllers connected to SCADA, MES, and ERP systems for a single source of production truth',
    tags: ['SCADA', 'MES connectivity', 'ERP data sync'],
    gradient: 'from-amber-400 to-orange-400',
  },
  {
    icon: Gauge,
    title: 'OEE & Production Analytics',
    desc: 'Real-time OEE, downtime, and quality dashboards turn machine data into actionable production decisions',
    tags: ['OEE tracking', 'Downtime analytics', 'Quality metrics'],
    gradient: 'from-pink-400 to-rose-400',
  },
  {
    icon: Cpu,
    title: 'Edge Computing on the Plant Floor',
    desc: 'Local processing at the controller level for deterministic control, faster response, and reduced cloud dependency',
    tags: ['Edge PLC logic', 'Low latency', 'Offline resilience'],
    gradient: 'from-indigo-400 to-blue-400',
  },
  {
    icon: ShieldCheck,
    title: 'OT Cybersecurity',
    desc: 'Network segmentation, secure remote access, and hardened architectures protect control systems from threats',
    tags: ['Network segmentation', 'Secure remote access', 'OT hardening'],
    gradient: 'from-teal-400 to-cyan-400',
  },
  {
    icon: Zap,
    title: 'Energy Monitoring & Optimization',
    desc: 'Power and energy consumption tracking at the machine level to cut costs and support sustainability targets',
    tags: ['Energy metering', 'Load optimization', 'Sustainability'],
    gradient: 'from-blue-400 to-indigo-400',
  },
  {
    icon: CloudCog,
    title: 'Cloud-Connected Dashboards',
    desc: 'Secure cloud connectivity brings production, quality, and maintenance data to managers wherever they are',
    tags: ['Remote visibility', 'Multi-site dashboards', 'Mobile access'],
    gradient: 'from-green-400 to-teal-400',
  },
  {
    icon: Bot,
    title: 'Robotics & Motion Integration',
    desc: 'Servo motion, robotics, and synchronized multi-axis control integrated with line PLCs for coordinated automation',
    tags: ['Multi-axis motion', 'Robot integration', 'Synchronized control'],
    gradient: 'from-orange-400 to-red-400',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AIPoweredSection() {
  return (
    <section id="ai-powered" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-[100px]" />
      </div>
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/HealthDashboard.png')" }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-mono text-blue-400/80 tracking-[0.15em] uppercase mb-6"
          >
            <Sparkles className="w-3 h-3" />
            Industry 4.0 Ready
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
            Next-Generation{' '}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Connected, data-driven automation — IIoT, digital twins, and predictive analytics that turn
            the plant floor into a smarter, self-monitoring operation
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={itemAnim}
                className="group relative rounded-xl glass border-white/[0.03] p-5 hover:border-white/[0.08] transition-all duration-300"
              >
                <div className="liquid-glass-icon w-10 h-10 rounded-xl mb-3">
                  <Icon className="w-5 h-5 icon-inner text-white/80" />
                </div>

                <h3 className="text-sm font-bold text-white mb-1.5">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">{f.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-white/[0.04] text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Impact stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-wider">
              Proven Impact
            </h3>
            <p className="text-slate-400 text-sm mt-1">Real-world results from connected, Industry 4.0-ready automation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '40%', label: 'Downtime Cut', sub: 'Predictive Maintenance' },
              { value: '99.8%', label: 'Uptime', sub: 'Remote Monitoring' },
              { value: '35%', label: 'Efficiency Gain', sub: 'OEE Analytics' },
              { value: '20%', label: 'Energy Savings', sub: 'Load Optimization' },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-5 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-xs font-semibold text-white mt-1">{s.label}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white text-sm font-semibold transition-all shadow-lg shadow-blue-500/25"
            >
              Request Industry 4.0 Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
