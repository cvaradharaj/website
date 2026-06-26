'use client';

import { motion } from 'framer-motion';

const countries = [
  { name: 'India', x: 50.5, y: 52, cx: 48, cy: 58 },
  { name: 'Indonesia', x: 58, y: 64, cx: 57, cy: 67 },
  { name: 'China', x: 55, y: 43, cx: 54, cy: 45 },
  { name: 'Turkey', x: 43, y: 41, cx: 42, cy: 43 },
  { name: 'South America', x: 28, y: 62, cx: 28, cy: 65 },
];

export default function WorldMap() {
  return (
    <div className="relative w-full aspect-[2/1] rounded-2xl glass border-white/[0.03] overflow-hidden">
      <div className="absolute inset-0 aurora-subtle pointer-events-none" />

      <svg viewBox="0 0 100 50" className="w-full h-full opacity-30" preserveAspectRatio="xMidYMid meet">
        {/* Simplified world map paths */}
        {/* North America */}
        <path d="M10,10 L18,8 L22,12 L24,18 L22,22 L20,24 L18,26 L16,25 L15,22 L13,20 L12,16 L10,14 Z" fill="rgba(0,221,255,0.3)" stroke="rgba(0,221,255,0.2)" strokeWidth="0.3" />
        {/* South America */}
        <path d="M20,28 L24,28 L26,32 L25,38 L24,42 L22,44 L20,42 L19,38 L18,32 Z" fill="rgba(0,221,255,0.3)" stroke="rgba(0,221,255,0.2)" strokeWidth="0.3" />
        {/* Europe */}
        <path d="M40,12 L44,10 L48,12 L48,16 L46,18 L44,18 L42,16 L40,14 Z" fill="rgba(0,221,255,0.3)" stroke="rgba(0,221,255,0.2)" strokeWidth="0.3" />
        {/* Africa */}
        <path d="M40,20 L44,20 L46,24 L46,30 L44,34 L42,36 L40,34 L38,30 L38,24 Z" fill="rgba(0,221,255,0.3)" stroke="rgba(0,221,255,0.2)" strokeWidth="0.3" />
        {/* Asia */}
        <path d="M46,10 L52,8 L58,10 L60,14 L60,20 L58,24 L54,26 L50,26 L46,24 L44,20 L44,14 Z" fill="rgba(0,221,255,0.3)" stroke="rgba(0,221,255,0.2)" strokeWidth="0.3" />
        {/* Australia */}
        <path d="M62,34 L66,33 L68,35 L68,38 L66,40 L63,40 L61,38 Z" fill="rgba(0,221,255,0.3)" stroke="rgba(0,221,255,0.2)" strokeWidth="0.3" />
        {/* Greenland */}
        <path d="M28,4 L32,3 L34,6 L32,8 L29,7 Z" fill="rgba(0,221,255,0.3)" stroke="rgba(0,221,255,0.2)" strokeWidth="0.3" />
        {/* Middle East extension */}
        <path d="M46,18 L50,18 L52,20 L50,22 L48,22 L46,20 Z" fill="rgba(0,221,255,0.3)" stroke="rgba(0,221,255,0.2)" strokeWidth="0.3" />
        {/* Southeast Asia */}
        <path d="M55,24 L58,24 L60,26 L58,28 L56,28 L54,26 Z" fill="rgba(0,221,255,0.3)" stroke="rgba(0,221,255,0.2)" strokeWidth="0.3" />
      </svg>

      {/* Country pins */}
      {countries.map((c) => (
        <div
          key={c.name}
          className="absolute"
          style={{ left: `${c.x}%`, top: `${c.y}%` }}
        >
          {/* Pulse ring */}
          <motion.div
            className="absolute -inset-3 rounded-full border border-cyan-400/40"
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Pin dot */}
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 relative z-10" />
          {/* Label */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[8px] font-mono text-cyan-400/70 bg-slate-950/60 px-1.5 py-0.5 rounded">
            {c.name}
          </span>
        </div>
      ))}

      {/* Glow connection lines between India and other countries */}
      <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid meet">
        {countries.slice(1).map((c) => (
          <motion.line
            key={`line-${c.name}`}
            x1={countries[0].cx}
            y1={countries[0].cy}
            x2={c.cx}
            y2={c.cy}
            stroke="rgba(0, 221, 255, 0.08)"
            strokeWidth="0.3"
            strokeDasharray="1 2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        ))}
      </svg>

      {/* Bottom label */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-mono text-slate-500 bg-slate-950/60 px-2 py-0.5 rounded-full">
        Global Operations — 18 Countries Across Asia, Europe, South America
      </div>
    </div>
  );
}
