'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '25+', label: 'Years of Excellence', suffix: '' },
  { value: '1200', label: 'Projects Delivered', suffix: '+' },
  { value: '18', label: 'Countries Served', suffix: '' },
  { value: '99.8', label: 'System Uptime', suffix: '%' },
];

function AnimatedStat({ value, label, suffix }: { value: string; label: string; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-6 text-center border-white/[0.03]"
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-cyan">
        {inView ? value : '0'}
        {suffix}
      </div>
      <div className="text-xs font-mono text-slate-500 mt-2 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 aurora-subtle pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
