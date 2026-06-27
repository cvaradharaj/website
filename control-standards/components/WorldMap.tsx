'use client';

import { motion } from 'framer-motion';

const locations = [
  { name: 'India (HQ)', mx: 0.55, my: 0.54 },
  { name: 'Indonesia', mx: 0.66, my: 0.74 },
  { name: 'China', mx: 0.62, my: 0.36 },
  { name: 'Turkey', mx: 0.44, my: 0.34 },
  { name: 'South America', mx: 0.28, my: 0.70 },
];

export default function WorldMap() {
  return (
    <div className="relative w-full aspect-[2/1] rounded-2xl glass border-white/[0.03] overflow-hidden">
      <div className="absolute inset-0 aurora-subtle pointer-events-none" />

      <img
        src="/world-map.svg"
        alt="World map"
        className="absolute inset-0 w-full h-full object-contain p-1"
      />

      {/* Connection lines from India */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 50" preserveAspectRatio="xMidYMid meet">
        {locations.slice(1).map((loc, i) => (
          <line key={i}
            x1={locations[0].mx * 100} y1={locations[0].my * 50}
            x2={loc.mx * 100} y2={loc.my * 50}
            stroke="rgba(0,221,255,0.15)" strokeWidth="0.3" strokeDasharray="2,3"
          />
        ))}
      </svg>

      {/* Location markers */}
      {locations.map((loc, i) => (
        <div
          key={i}
          className="absolute"
          style={{ left: `${loc.mx * 100}%`, top: `${loc.my * 100}%`, transform: 'translate(-50%, -50%)' }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-full border border-cyan-400/30"
              animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,221,255,0.5)]" />
          </div>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[9px] font-mono text-cyan-400/60 whitespace-nowrap">
            {loc.name}
          </span>
        </div>
      ))}

      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-mono text-slate-500 bg-slate-950/60 px-3 py-1 rounded-full whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-cyan-400/60">●</span> Global Service Locations — 18 Countries
      </motion.div>
    </div>
  );
}
