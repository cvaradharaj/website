'use client';

import { motion } from 'framer-motion';

const industries = [
  { name: 'Flexible Packaging', desc: 'Printing, laminating, slitting lines' },
  { name: 'Printing & Converting', desc: 'Gravure, flexo, rotogravure presses' },
  { name: 'Film Manufacturing', desc: 'BOPP, CPP, PET film lines' },
  { name: 'Metallizing Plants', desc: 'Vacuum deposition & coating' },
  { name: 'Coating Lines', desc: 'Solventless, water-based, extrusion' },
  { name: 'Textile', desc: 'Weaving, dyeing, finishing machinery' },
  { name: 'Steel', desc: 'Cold rolling, galvanizing, slitting' },
  { name: 'Food Processing', desc: 'Filling, packaging, inspection' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function IndustriesMarquee() {
  return (
    <section id="industries" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono text-cyan-400/60 tracking-[0.2em] uppercase">
            Industries Served
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Global Sector <span className="text-gradient-cyan">Expertise</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Delivering automation solutions across 8 core industrial sectors in 18 countries.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.name}
              variants={itemAnim}
              className="group relative p-6 rounded-2xl glass glass-hover border-white/[0.03] overflow-hidden"
            >
              {/* Blueprint corner marks */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-cyan-400/15" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-cyan-400/15" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-cyan-400/15" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-cyan-400/15" />

              <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {ind.name}
              </h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">{ind.desc}</p>

              <div className="mt-4 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/15 to-cyan-400/0" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
