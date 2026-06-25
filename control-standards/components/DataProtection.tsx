'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Timer,
  Lock,
  Users,
  Cloud,
 Radio,
  Globe,
  Zap,
} from 'lucide-react';

const protections = [
  {
    icon: Shield,
    title: 'Automated Backups',
    desc: 'Point-in-time recovery with continuous backups every 15 minutes',
    items: ['Continuous data protection', '30-day retention policy', 'Encrypted at rest & transit'],
    gradient: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Timer,
    title: 'Rapid Recovery',
    desc: 'Industry-leading RTO (&lt; 1 hour) and RPO (&lt; 15 min) guarantees',
    items: ['One-click restore operations', 'Disaster recovery drills', 'Cross-region failover'],
    gradient: 'from-cyan-400 to-emerald-400',
  },
  {
    icon: Lock,
    title: 'Data Privacy',
    desc: 'GDPR, SOC 2, ISO 27001 compliant with field-level encryption',
    items: ['End-to-end encryption AES-256', 'Data residency controls', 'Right to be forgotten'],
    gradient: 'from-violet-400 to-purple-400',
  },
  {
    icon: Users,
    title: 'Multi-Tenancy',
    desc: 'Complete data isolation with tenant-specific encryption keys',
    items: ['Database-level isolation', 'Per-tenant access controls', 'Independent scaling'],
    gradient: 'from-amber-400 to-orange-400',
  },
];

const infrastructures = [
  { icon: Cloud, label: 'Multi-Cloud Native', desc: 'Deploy across AWS, Azure, GCP or private cloud with unified management' },
  { icon: Radio, label: 'Event-Driven Architecture', desc: 'Apache Kafka for reliable event streaming with exactly-once delivery' },
  { icon: Globe, label: 'Global CDN & Edge', desc: 'Cloudflare CDN with 330+ PoPs and sub-50ms latency globally' },
  { icon: Zap, label: 'High Availability', desc: '99.99% uptime SLA with active-active failover across geo-replicated regions' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DataProtection() {
  return (
    <section id="data-protection" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 aurora-subtle pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-blue-400/60 tracking-[0.2em] uppercase">
            Enterprise-Grade Architecture
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 leading-tight">
            Enterprise Data Protection{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              &amp; Resilience
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm">
            Cloud-native, infinitely scalable, and cryptographically secure &mdash; engineered for
            mission-critical enterprise operations
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {protections.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={itemAnim}
                className="group relative rounded-2xl glass border-white/[0.03] p-6 overflow-hidden hover:border-white/[0.08] transition-all duration-500"
              >
                <div className="liquid-glass-icon w-11 h-11 rounded-xl mb-4">
                  <Icon className="w-5.5 h-5.5 icon-inner text-white/80" />
                </div>

                <h3 className="text-base font-bold text-white mb-1">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{p.desc}</p>

                <ul className="space-y-1.5">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1 h-1 rounded-full bg-blue-400/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Infrastructure pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-sm font-mono text-slate-500 uppercase tracking-wider mb-8">
            Infrastructure Pillars
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {infrastructures.map((infra) => {
              const Icon = infra.icon;
              return (
                <div
                  key={infra.label}
                  className="glass rounded-xl p-5 text-center hover:border-cyan-400/20 transition-all duration-300"
                >
                  <div className="liquid-glass-icon w-10 h-10 rounded-lg mx-auto mb-3">
                    <Icon className="w-5 h-5 icon-inner text-cyan-400/80" />
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1">{infra.label}</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{infra.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
