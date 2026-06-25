'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, type MouseEvent } from 'react';
import { Cpu, Cable, RefreshCw, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Industrial Automation',
    tag: 'PLC · HMI · SCADA · Motion',
    gradient: 'from-blue-500 to-cyan-400',
    glow: 'rgba(68,136,255,0.2)',
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
    gradient: 'from-cyan-400 to-emerald-400',
    glow: 'rgba(0,221,255,0.2)',
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
    gradient: 'from-violet-500 to-blue-500',
    glow: 'rgba(139,92,246,0.2)',
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
    gradient: 'from-amber-400 to-orange-500',
    glow: 'rgba(251,191,36,0.2)',
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
  show: { transition: { staggerChildren: 0.12 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-500/8 blur-[150px]"
        />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
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
            Core Capabilities
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
            Solution{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Modules
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            25+ years of delivering precision control systems to machine builders across converting,
            printing, and packaging industries.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <TiltCard key={s.title}>
                <motion.div
                  variants={itemAnim}
                  className="group relative overflow-hidden rounded-2xl bg-slate-900/60 border border-slate-800/60 p-7 transition-all duration-500 hover:border-transparent"
                  style={{
                    boxShadow: `0 0 0px ${s.glow}`,
                  }}
                  whileHover={{
                    boxShadow: `0 0 40px ${s.glow}, 0 0 80px ${s.glow}`,
                    y: -4,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Gradient border on hover */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      padding: '1px',
                      background: `linear-gradient(135deg, ${s.glow}, transparent 50%, ${s.glow})`,
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />

                  {/* Glow background */}
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: s.glow }}
                  />

                  <div className="flex items-start gap-4 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                      className="relative w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${s.glow}33, transparent)`,
                        border: `1px solid ${s.glow}44`,
                      }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 rounded-xl opacity-30"
                        style={{
                          background: `conic-gradient(from 0deg, transparent, ${s.glow}, transparent, ${s.glow}, transparent)`,
                        }}
                      />
                      <Icon
                        className="w-5 h-5 relative z-10"
                        style={{ color: s.glow.replace('0.2', '1') }}
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                        style={{ backgroundImage: `linear-gradient(135deg, ${s.glow.replace('0.2', '1')}, white)` }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-xs font-mono mt-0.5 opacity-60"
                        style={{ color: s.glow.replace('0.2', '1') }}>
                        {s.tag}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5 relative z-10">
                    {s.items.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"
                          style={{ background: s.glow.replace('0.2', '0.8') }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.a
                    href="#contact"
                    whileHover={{ gap: '12px' }}
                    className="inline-flex items-center gap-2 mt-5 text-xs font-medium relative z-10 transition-colors duration-300"
                    style={{ color: s.glow.replace('0.2', '0.8') }}
                  >
                    Inquire About This Service
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight className="w-3 h-3" />
                    </motion.span>
                  </motion.a>
                </motion.div>
              </TiltCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
