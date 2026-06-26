'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const countries = [
  { name: 'India', mx: 54, my: 27, px: 0, py: 0 },
  { name: 'Indonesia', mx: 64, my: 36, px: 0, py: 0 },
  { name: 'China', mx: 58, my: 20, px: 0, py: 0 },
  { name: 'Turkey', mx: 42, my: 18, px: 0, py: 0 },
  { name: 'South America', mx: 26, my: 34, px: 0, py: 0 },
];

const continents = [
  {
    name: 'North America',
    d: 'M12,8 L22,6 L28,9 L30,15 L28,20 L25,22 L22,21 L20,18 L18,16 L16,14 L13,12 Z',
    color: 'rgba(68,136,255,0.15)',
  },
  {
    name: 'South America',
    d: 'M22,24 L28,24 L31,28 L30,36 L29,41 L26,44 L23,42 L21,37 L20,30 Z',
    color: 'rgba(0,221,255,0.15)',
  },
  {
    name: 'Europe',
    d: 'M40,8 L44,6 L49,8 L50,12 L48,15 L45,16 L42,14 L39,11 Z',
    color: 'rgba(99,102,241,0.15)',
  },
  {
    name: 'Africa',
    d: 'M40,18 L46,18 L48,22 L49,28 L47,33 L44,36 L41,35 L39,30 L38,24 Z',
    color: 'rgba(0,221,255,0.12)',
  },
  {
    name: 'Asia',
    d: 'M48,8 L56,6 L62,8 L66,12 L65,18 L62,22 L57,24 L52,23 L48,20 L46,15 L46,10 Z',
    color: 'rgba(68,136,255,0.12)',
  },
  {
    name: 'Australia',
    d: 'M68,32 L73,31 L76,34 L75,38 L72,40 L67,39 L65,36 Z',
    color: 'rgba(99,102,241,0.12)',
  },
];

export default function WorldMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 800, h: 400 });

  useEffect(() => {
    function update() {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      setDims({ w: r.width, h: r.height });
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const vw = dims.w;
  const vh = dims.h;

  return (
    <div ref={containerRef} className="relative w-full aspect-[2/1] rounded-2xl glass border-white/[0.03] overflow-hidden">
      <div className="absolute inset-0 aurora-subtle pointer-events-none" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-cyan-400/5 blur-[80px] pointer-events-none"
        animate={{ x: [0, vw * 0.3, 0], y: [0, vh * 0.2, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ left: vw * 0.2, top: vh * 0.15 }}
      />
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-blue-500/5 blur-[60px] pointer-events-none"
        animate={{ x: [0, -vw * 0.2, 0], y: [0, vh * 0.25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ left: vw * 0.7, top: vh * 0.3 }}
      />

      {/* Map */}
      <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Grid lines */}
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((x) => (
          <line key={`gx-${x}`} x1={x} y1={0} x2={x} y2={50} stroke="rgba(255,255,255,0.02)" strokeWidth="0.1" />
        ))}
        {[0, 10, 20, 30, 40, 50].map((y) => (
          <line key={`gy-${y}`} x1={0} y1={y} x2={100} y2={y} stroke="rgba(255,255,255,0.02)" strokeWidth="0.1" />
        ))}

        {/* Continents */}
        {continents.map((c) => (
          <motion.path
            key={c.name}
            d={c.d}
            fill={c.color}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        ))}

        {/* Connection lines from India */}
        {countries.slice(1).map((c) => (
          <motion.line
            key={`line-${c.name}`}
            x1={countries[0].mx}
            y1={countries[0].my}
            x2={c.mx}
            y2={c.my}
            stroke="rgba(0, 221, 255, 0.12)"
            strokeWidth="0.15"
            strokeDasharray="0.5 1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3 }}
          />
        ))}

        {/* Pins */}
        {countries.map((c) => (
          <g key={`pin-${c.name}`}>
            <motion.circle
              cx={c.mx}
              cy={c.my}
              r={0.6}
              fill="rgba(0,221,255,0.6)"
              initial={{ r: 0 }}
              whileInView={{ r: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <motion.circle
              cx={c.mx}
              cy={c.my}
              r={1.5}
              fill="none"
              stroke="rgba(0,221,255,0.2)"
              strokeWidth="0.15"
              animate={{ r: [1.5, 2.5, 1.5], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.text
              x={c.mx + 1.8}
              y={c.my + 0.4}
              fill="rgba(255,255,255,0.5)"
              fontSize="1.2"
              fontFamily="monospace"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {c.name}
            </motion.text>
          </g>
        ))}

        {/* India highlight glow */}
        <motion.circle
          cx={countries[0].mx}
          cy={countries[0].my}
          r={4}
          fill="rgba(0,221,255,0.04)"
          animate={{ r: [4, 6, 4], opacity: [0.04, 0.02, 0.04] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {/* Bottom label */}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-mono text-slate-500 bg-slate-950/60 px-2 py-0.5 rounded-full whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Global Operations — 18 Countries Across Asia, Europe, South America
      </motion.div>
    </div>
  );
}
