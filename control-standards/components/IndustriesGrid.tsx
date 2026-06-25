'use client';

import { motion } from 'framer-motion';

const sectors = [
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function IndustriesGrid() {
  return (
    <section id="industries" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-mono text-cyan-400/80 tracking-[0.2em] uppercase">
            Industries Served
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-3">
            Global Sector Expertise
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Delivering automation solutions across 8 core industrial sectors in 12+ countries.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {sectors.map((s) => (
            <motion.div
              key={s.name}
              variants={itemAnim}
              className="group relative p-5 rounded-lg border border-slate-800/60 bg-slate-900/30 hover:border-slate-700/80 hover:bg-slate-900/50 transition-all cursor-default overflow-hidden"
            >
              {/* Blueprint-style corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-400/20" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-400/20" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-400/20" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-400/20" />

              <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                {s.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{s.desc}</p>

              <div className="mt-3 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
