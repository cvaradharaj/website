'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'The microservices architecture and Kubernetes orchestration provide exceptional scalability. We went from 100 to 1000+ branches without any performance degradation. The API-first design made integration seamless.',
    author: 'C. Ramakrishnan',
    role: 'CTO',
    company: 'Leading Financial Institution',
    tags: ['Technology'],
  },
  {
    quote: 'Their security architecture with Cloudflare WAF, DDoS protection, and end-to-end encryption gave us complete confidence. The audit trails and data isolation meet our strictest compliance requirements.',
    author: 'S. Venkatesh',
    role: 'Head of Information Security',
    company: 'Fortune 500 Manufacturing',
    tags: ['Security'],
  },
  {
    quote: 'The platform performs flawlessly even in low bandwidth environments. PostgreSQL + Redis combination with intelligent caching delivers sub-second response times. Real-time dashboards are incredibly fast.',
    author: 'M. Patel',
    role: 'VP of Operations',
    company: 'Multi-National Corporation',
    tags: ['Performance'],
  },
  {
    quote: 'Complete data sovereignty with tenant isolation and encryption at rest. The Prisma ORM ensures type-safe database operations. Their analytics infrastructure provides actionable insights without compromising security.',
    author: 'Dr. A. Kumar',
    role: 'Chief Data Officer',
    company: 'Enterprise Organization',
    tags: ['Data Infrastructure'],
  },
  {
    quote: 'Container-based deployment on Kubernetes with CI/CD pipeline enables zero-downtime updates. Their modular architecture allows us to scale specific services independently. Object storage integration is seamless.',
    author: 'R. Joshi',
    role: 'Director of Engineering',
    company: 'Technology Company',
    tags: ['DevOps'],
  },
  {
    quote: 'The tech stack is impressive — modern, proven technologies combined intelligently. CDN integration ensures fast global delivery. Their monitoring and alerting gives us complete operational visibility.',
    author: 'P. Nair',
    role: 'IT Director',
    company: 'Global Enterprise',
    tags: ['Infrastructure'],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
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
            <Star className="w-3 h-3" />
            Trusted by Industry Leaders
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
            What Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Trusted by leading enterprises across industries for automation excellence
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={itemAnim}
              className="group relative rounded-2xl glass border-white/[0.03] p-6 hover:border-cyan-400/20 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-cyan-400/20 absolute top-4 right-4" />

              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-cyan-400/30 text-cyan-400/30" />
                ))}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-2 mb-3">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400/70 border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-white/[0.04] pt-4 mt-auto">
                <div className="text-sm font-semibold text-white">{t.author}</div>
                <div className="text-xs text-slate-500">
                  {t.role}, {t.company}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl glass border-white/[0.03]">
            <span className="text-sm text-slate-400">
              <strong className="text-white text-lg">500+</strong>
              <span className="block text-xs text-slate-500">Enterprise Clients</span>
            </span>
            <div className="w-px h-8 bg-white/[0.06]" />
            <span className="text-sm text-slate-400">
              <strong className="text-white text-lg">99.9%</strong>
              <span className="block text-xs text-slate-500">Uptime SLA</span>
            </span>
            <div className="w-px h-8 bg-white/[0.06]" />
            <span className="text-sm text-slate-400">
              <strong className="text-white text-lg">24/7</strong>
              <span className="block text-xs text-slate-500">Support Available</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
