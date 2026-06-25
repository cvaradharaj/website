'use client';

import { motion } from 'framer-motion';
import { Cloud, Server, Building2, Check, ArrowRight } from 'lucide-react';

const deployments = [
  {
    icon: Cloud,
    title: 'Cloud (SaaS)',
    desc: 'Fully managed on AWS, Azure, or GCP with global edge presence via Cloudflare',
    features: ['Zero infrastructure management', 'Automatic updates & patches', '99.99% SLA guarantee'],
    gradient: 'from-blue-400 to-cyan-400',
    popular: true,
  },
  {
    icon: Building2,
    title: 'Hybrid Cloud',
    desc: 'Data sovereignty with on-premise core and cloud bursting for peak loads',
    features: ['Sensitive data on-premise', 'Cloud for analytics & AI', 'Seamless synchronization'],
    gradient: 'from-violet-400 to-purple-400',
    popular: false,
  },
  {
    icon: Server,
    title: 'Self-Hosted',
    desc: 'Complete control with on-premise Kubernetes deployment and air-gapped options',
    features: ['Full data sovereignty', 'Custom security policies', 'Air-gapped environments'],
    gradient: 'from-amber-400 to-orange-400',
    popular: false,
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

export default function DeploymentSection() {
  return (
    <section id="deployment" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 aurora pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-mono text-blue-400/80 tracking-[0.15em] uppercase mb-6">
            <Server className="w-3 h-3" />
            Flexible Deployment
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 leading-tight">
            Deployment{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Models
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
            Choose the deployment model that fits your security, compliance, and operational requirements
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {deployments.map((d) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                variants={itemAnim}
                className={`group relative rounded-2xl p-6 border transition-all duration-500 ${
                  d.popular
                    ? 'border-blue-500/30 bg-blue-500/5'
                    : 'glass border-white/[0.03] hover:border-white/[0.08]'
                }`}
              >
                {d.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-[10px] font-semibold text-white uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="liquid-glass-icon w-12 h-12 rounded-xl mb-4">
                  <Icon className={`w-6 h-6 icon-inner ${d.popular ? 'text-blue-400' : 'text-white/80'}`} />
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{d.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{d.desc}</p>

                <ul className="space-y-2.5 mb-6">
                  {d.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-400">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    d.popular
                      ? 'bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/25'
                      : 'glass glass-hover text-slate-300 hover:text-white'
                  }`}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
