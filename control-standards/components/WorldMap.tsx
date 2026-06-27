'use client';

import { motion } from 'framer-motion';

const locations = [
  { name: 'India (HQ)', x: 685, y: 280 },
  { name: 'Indonesia', x: 735, y: 340 },
  { name: 'China', x: 700, y: 200 },
  { name: 'Turkey', x: 550, y: 215 },
  { name: 'South America', x: 310, y: 420 },
];

export default function WorldMap() {
  return (
    <div className="relative w-full aspect-[950/620] rounded-2xl glass border-white/[0.03] overflow-hidden">
      <div className="absolute inset-0 aurora-subtle pointer-events-none" />

      <img
        src="/world-map.svg"
        alt="World map"
        className="absolute inset-0 w-full h-full"
      />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 950 620" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="g" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ddff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00ddff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {locations.slice(1).map((loc, i) => (
          <line key={i}
            x1={locations[0].x} y1={locations[0].y}
            x2={loc.x} y2={loc.y}
            stroke="rgba(0,221,255,0.12)" strokeWidth="1" strokeDasharray="4,5"
          />
        ))}

        {locations.map((loc, i) => (
          <g key={i}>
            <motion.circle
              cx={loc.x} cy={loc.y} r={6}
              fill="none" stroke="rgba(0,221,255,0.25)" strokeWidth="1"
              animate={{ r: [6, 18, 6], opacity: [0.25, 0, 0.25] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
            <circle cx={loc.x} cy={loc.y} r={16} fill="url(#g)" />
            <circle cx={loc.x} cy={loc.y} r={3} fill="#00ddff" />
            <text x={loc.x + 8} y={loc.y + 1}
              fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="monospace"
              dominantBaseline="middle"
            >
              {loc.name}
            </text>
          </g>
        ))}
      </svg>

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
