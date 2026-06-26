'use client';

import { motion } from 'framer-motion';
import {
  Scan,
  Eye,
  Ruler,
  Image,
  FileDown,
  MessageSquare,
  Radar,
  TrendingUp,
  Route,
  Cpu,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const features = [
  {
    icon: Scan,
    title: 'Intelligent OCR',
    desc: 'Advanced OCR for document processing, handwriting recognition, and automated data extraction from various formats',
    tags: ['Paper correction', 'Invoice processing', 'Form digitization'],
    gradient: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Eye,
    title: 'Augmented Reality',
    desc: 'AR-powered visual merchandising audits, equipment maintenance guidance, and interactive training modules',
    tags: ['Visual merchandising', 'Remote assistance', 'Training overlays'],
    gradient: 'from-violet-400 to-purple-400',
  },
  {
    icon: Ruler,
    title: 'Computer Vision Measurement',
    desc: 'AI-based measurement and dimension extraction from photos for contactless verification and compliance',
    tags: ['Space measurement', 'Product sizing', 'Shelf compliance'],
    gradient: 'from-cyan-400 to-emerald-400',
  },
  {
    icon: Image,
    title: 'Image Comparison & Analysis',
    desc: 'Automated visual comparison against standards detecting deviations in placement, quality, and compliance',
    tags: ['Before/after', 'Standard adherence', 'Defect detection'],
    gradient: 'from-amber-400 to-orange-400',
  },
  {
    icon: FileDown,
    title: 'Intelligent Compression',
    desc: 'AI-optimized image and video compression reducing bandwidth requirements by up to 80% while maintaining quality',
    tags: ['Low bandwidth', 'Storage optimization', 'Fast uploads'],
    gradient: 'from-pink-400 to-rose-400',
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    desc: 'Smart search, automated report generation, sentiment analysis from field feedback with multi-language support',
    tags: ['Smart search', 'Auto-reports', 'Sentiment analysis'],
    gradient: 'from-indigo-400 to-blue-400',
  },
  {
    icon: Radar,
    title: 'Object Detection & Recognition',
    desc: 'Automated identification of products, equipment, safety violations, and compliance issues from field photographs',
    tags: ['Product recognition', 'Safety monitoring', 'Asset tracking'],
    gradient: 'from-teal-400 to-cyan-400',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    desc: 'ML models for task duration prediction, resource optimization, and anomaly detection in operations',
    tags: ['Task estimation', 'Resource planning', 'Anomaly detection'],
    gradient: 'from-blue-400 to-indigo-400',
  },
  {
    icon: Route,
    title: 'Intelligent Routing',
    desc: 'AI-powered task assignment and route optimization considering traffic, priority, skills, and resource availability',
    tags: ['Route optimization', 'Smart assignment', 'Load balancing'],
    gradient: 'from-green-400 to-teal-400',
  },
  {
    icon: Cpu,
    title: 'Edge AI Processing',
    desc: 'On-device machine learning for offline capability, real-time processing, and privacy-preserving computations',
    tags: ['Offline OCR', 'Real-time validation', 'Privacy protection'],
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
            AI & AR Powered
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
            Next-Generation{' '}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Advanced AI and augmented reality capabilities that transform how you measure, verify,
            and optimize field operations
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
            <p className="text-slate-400 text-sm mt-1">Real-world results from AI-powered field operations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '95%', label: 'Accuracy', sub: 'Visual Merchandising' },
              { value: '10x', label: 'Faster', sub: 'Document Processing' },
              { value: '90%', label: 'Automation', sub: 'Quality Inspection' },
              { value: '30%', label: 'Savings', sub: 'Field Optimization' },
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
              Request AI Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
