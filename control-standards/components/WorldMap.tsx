'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const locations = [
  { name: 'India', mx: 0.55, my: 0.54 },
  { name: 'Indonesia', mx: 0.66, my: 0.74 },
  { name: 'China', mx: 0.62, my: 0.36 },
  { name: 'Turkey', mx: 0.44, my: 0.34 },
  { name: 'South America', mx: 0.28, my: 0.70 },
];

export default function WorldMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [gridOffset, setGridOffset] = useState(0);

  useEffect(() => {
    let animId: number;
    function tick() {
      setGridOffset((prev) => prev + 0.1);
      animId = requestAnimationFrame(tick);
    }
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-full aspect-[2/1] rounded-2xl glass border-white/[0.03] overflow-hidden">
      <div className="absolute inset-0 aurora-subtle pointer-events-none" />
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 50"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Grid */}
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform={`translate(${gridOffset % 10}, ${(gridOffset * 0.6) % 10})`}>
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.015)" strokeWidth="0.3"/>
          </pattern>
        </defs>
        <rect width="100" height="50" fill="url(#grid)" />

        {/* North America */}
        <path d="M10,3 L14,2 L18,2 L22,2.5 L26,3.5 L28,5 L30,7 L30,9 L28,11 L26,13 L24,14 L22,15 L20,16 L18,15 L16,14 L14,13 L12,12 L10,10 L8,8 L8,6 L8,4 Z"
          fill="rgba(68,136,255,0.08)" stroke="rgba(68,136,255,0.2)" strokeWidth="0.3" />
        {/* Central America */}
        <path d="M22,15 L23,17 L22.5,19 L22,21 L21,22 L20,23 L19,22 L18,20 L18,18 L20,16 Z"
          fill="rgba(68,136,255,0.08)" stroke="rgba(68,136,255,0.2)" strokeWidth="0.3" />
        {/* South America */}
        <path d="M24,24 L28,24 L30,26 L32,28 L32,32 L30,36 L28,40 L26,43 L24,44 L22,43 L20,40 L18,36 L18,32 L20,28 L22,25 Z"
          fill="rgba(0,221,255,0.08)" stroke="rgba(0,221,255,0.2)" strokeWidth="0.3" />
        {/* Europe */}
        <path d="M40,4 L44,3 L48,4 L50,6 L50,8 L48,10 L46,12 L44,13 L42,13 L40,12 L38,10 L38,8 L38,6 Z"
          fill="rgba(129,140,248,0.08)" stroke="rgba(129,140,248,0.2)" strokeWidth="0.3" />
        {/* UK/Ireland */}
        <path d="M37,3 L38.5,3 L39,4 L38.5,5 L37,5 L36.5,4 Z"
          fill="rgba(129,140,248,0.08)" stroke="rgba(129,140,248,0.2)" strokeWidth="0.3" />
        {/* Africa */}
        <path d="M38,17 L42,17 L46,18 L48,20 L50,23 L50,26 L48,29 L46,32 L44,34 L42,35 L40,34 L38,32 L36,29 L34,25 L34,22 L36,19 Z"
          fill="rgba(0,221,255,0.08)" stroke="rgba(0,221,255,0.2)" strokeWidth="0.3" />
        {/* Asia */}
        <path d="M48,3 L54,2 L60,2 L66,3 L70,5 L72,8 L72,11 L70,14 L66,17 L62,19 L58,20 L54,20 L50,19 L46,17 L44,14 L44,10 L44,7 L46,5 Z"
          fill="rgba(68,136,255,0.08)" stroke="rgba(68,136,255,0.2)" strokeWidth="0.3" />
        {/* Arabia */}
        <path d="M46,18 L50,18 L52,19 L54,21 L54,23 L52,25 L50,26 L48,26 L46,25 L44,23 L44,21 Z"
          fill="rgba(129,140,248,0.08)" stroke="rgba(129,140,248,0.2)" strokeWidth="0.3" />
        {/* India subcontinent */}
        <path d="M52,23 L55,23 L56,25 L55.5,28 L54,30 L52.5,30 L51,28.5 L50.5,26 Z"
          fill="rgba(68,136,255,0.08)" stroke="rgba(68,136,255,0.2)" strokeWidth="0.3" />
        {/* Southeast Asia */}
        <path d="M62,22 L66,22 L68,24 L68,27 L66,30 L64,32 L62,32 L60,30 L58,27 L58,24 Z"
          fill="rgba(68,136,255,0.08)" stroke="rgba(68,136,255,0.2)" strokeWidth="0.3" />
        {/* Japan/Korea */}
        <path d="M72,7 L73.5,6 L74,8 L73.5,10 L72,11 L71,10 Z"
          fill="rgba(68,136,255,0.08)" stroke="rgba(68,136,255,0.2)" strokeWidth="0.3" />
        {/* Australia */}
        <path d="M73,31 L77,31 L80,33 L80,36 L78,39 L74,40 L70,39 L68,37 L68,34 L70,32 Z"
          fill="rgba(68,136,255,0.08)" stroke="rgba(68,136,255,0.2)" strokeWidth="0.3" />
        {/* Greenland */}
        <path d="M28,1 L32,0.5 L34,1 L34,3 L32,4 L29,4 L28,3 Z"
          fill="rgba(68,136,255,0.08)" stroke="rgba(68,136,255,0.2)" strokeWidth="0.3" />

        {/* Connection lines from India */}
        {locations.slice(1).map((loc, i) => (
          <path key={i}
            d={`M${locations[0].mx*100},${locations[0].my*50} L${loc.mx*100},${loc.my*50}`}
            stroke="rgba(0,221,255,0.1)" strokeWidth="0.4" strokeDasharray="3,4" fill="none"
          />
        ))}

        {/* Location markers */}
        {locations.map((loc, i) => (
          <g key={i}>
            {/* Pulse ring */}
            <motion.circle
              cx={loc.mx * 100} cy={loc.my * 50} r={4}
              fill="none" stroke="rgba(0,221,255,0.2)" strokeWidth="0.5"
              animate={{ r: [4, 12, 4], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
            {/* Glow */}
            <circle cx={loc.mx * 100} cy={loc.my * 50} r={10}
              fill="url(#glowGrad)" opacity={0.3}
            />
            {/* Dot */}
            <circle cx={loc.mx * 100} cy={loc.my * 50} r={1.5} fill="#00ddff" />
            {/* Label */}
            <text x={loc.mx * 100 + 4} y={loc.my * 50 + 1}
              fill="rgba(255,255,255,0.5)" fontSize="4" fontFamily="monospace"
              alignmentBaseline="middle"
            >
              {loc.name}
            </text>
          </g>
        ))}

        <defs>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ddff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00ddff" stopOpacity="0" />
          </radialGradient>
        </defs>
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
