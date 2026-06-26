'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const serviceLocations = [
  { name: 'India', nameSub: 'Bengaluru HQ', mx: 57, my: 26.5, labelX: 1.5, labelY: 0.3, color: '#00ddff' },
  { name: 'Indonesia', nameSub: 'Jakarta', mx: 67.5, my: 37, labelX: 1.5, labelY: 0.3, color: '#4488ff' },
  { name: 'Turkey', nameSub: 'Istanbul', mx: 43, my: 18.5, labelX: -4, labelY: 0.3, color: '#818cf8' },
  { name: 'China', nameSub: 'Shanghai', mx: 60.5, my: 20, labelX: 1.5, labelY: 0.3, color: '#4488ff' },
  { name: 'South America', nameSub: 'Sao Paulo', mx: 26, my: 37, labelX: 1.5, labelY: 0.3, color: '#00ddff' },
];

const landPaths = [
  { d: 'M14,5 Q18,3 24,4 Q28,6 30,10 Q31,15 29,18 Q27,20 22,21 Q18,20 16,18 Q14,15 12,10 Q12,7 14,5Z', color: '#4488ff' }, // NA
  { d: 'M22,23 Q25,22 28,23 Q30,25 31,29 Q30,36 29,42 Q27,46 25,47 Q22,46 21,42 Q19,36 20,30 Q21,26 22,23Z', color: '#00ddff' }, // SA
  { d: 'M39,6 Q42,4 47,5 Q50,7 51,10 Q51,14 49,16 Q46,18 42,17 Q39,15 37,12 Q37,8 39,6Z', color: '#818cf8' }, // Europe
  { d: 'M37,17 Q41,16 45,17 Q48,18 50,21 Q51,25 50,30 Q48,35 45,38 Q42,39 39,37 Q37,33 36,28 Q35,22 37,17Z', color: '#00ddff' }, // Africa
  { d: 'M50,6 Q55,4 62,5 Q67,7 70,10 Q72,14 72,18 Q70,22 67,24 Q62,26 57,25 Q53,23 50,20 Q47,16 48,10 Q48,7 50,6Z', color: '#4488ff' }, // Asia
  { d: 'M45,20 Q48,20 50,22 Q52,25 51,28 Q50,30 48,30 Q46,29 45,27 Q44,24 45,20Z', color: '#818cf8' }, // Middle East
  { d: 'M56,28 Q58,27 62,28 Q65,30 66,33 Q65,36 64,38 Q61,39 58,38 Q56,36 55,32 Q55,29 56,28Z', color: '#00ddff' }, // SE Asia
  { d: 'M71,35 Q74,34 77,36 Q78,39 77,42 Q75,44 72,43 Q70,41 69,38 Q70,36 71,35Z', color: '#4488ff' }, // Australia
  { d: 'M30,2 Q33,1 35,3 Q36,5 34,7 Q32,8 30,6 Q29,4 30,2Z', color: '#818cf8' }, // Greenland
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

      <motion.div
        className="absolute w-48 h-48 rounded-full bg-cyan-400/5 blur-[80px] pointer-events-none"
        animate={{ x: [0, vw * 0.25, 0], y: [0, vh * 0.15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ left: vw * 0.2, top: vh * 0.15 }}
      />
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-blue-500/5 blur-[60px] pointer-events-none"
        animate={{ x: [0, -vw * 0.2, 0], y: [0, vh * 0.2, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ left: vw * 0.65, top: vh * 0.3 }}
      />

      <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Latitude/Longitude grid */}
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((x) => (
          <line key={`gx-${x}`} x1={x} y1={0} x2={x} y2={60} stroke="rgba(255,255,255,0.015)" strokeWidth="0.08" />
        ))}
        {[0, 10, 20, 30, 40, 50, 60].map((y) => (
          <line key={`gy-${y}`} x1={0} y1={y} x2={100} y2={y} stroke="rgba(255,255,255,0.015)" strokeWidth="0.08" />
        ))}

        {/* Land masses */}
        {landPaths.map((land, i) => (
          <motion.path
            key={i}
            d={land.d}
            fill={`${land.color}08`}
            stroke={`${land.color}15`}
            strokeWidth="0.15"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.05 }}
          />
        ))}

        {/* Connection lines from India to all locations */}
        {serviceLocations.slice(1).map((loc) => (
          <motion.line
            key={`conn-${loc.name}`}
            x1={serviceLocations[0].mx}
            y1={serviceLocations[0].my}
            x2={loc.mx}
            y2={loc.my}
            stroke={`${loc.color}20`}
            strokeWidth="0.1"
            strokeDasharray="0.4 0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        ))}

        {/* Service location markers */}
        {serviceLocations.map((loc) => (
          <g key={`marker-${loc.name}`}>
            {/* Glow */}
            <motion.circle
              cx={loc.mx}
              cy={loc.my}
              r={3.5}
              fill={`${loc.color}08`}
              animate={{ r: [3.5, 5, 3.5], opacity: [0.08, 0.03, 0.08] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Outer ring */}
            <motion.circle
              cx={loc.mx}
              cy={loc.my}
              r={1.2}
              fill="none"
              stroke={`${loc.color}40`}
              strokeWidth="0.12"
              animate={{ r: [1.2, 1.8, 1.2], opacity: [0.4, 0.1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            />
            {/* Dot */}
            <motion.circle
              cx={loc.mx}
              cy={loc.my}
              r={0.4}
              fill={loc.color}
              initial={{ r: 0 }}
              whileInView={{ r: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            {/* Label */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <text
                x={loc.mx + loc.labelX}
                y={loc.my + loc.labelY}
                fill="rgba(255,255,255,0.6)"
                fontSize="1.1"
                fontFamily="monospace"
                fontWeight="600"
              >
                {loc.name}
              </text>
              <text
                x={loc.mx + loc.labelX}
                y={loc.my + loc.labelY + 1.4}
                fill={`${loc.color}50`}
                fontSize="0.7"
                fontFamily="monospace"
              >
                {loc.nameSub}
              </text>
            </motion.g>
          </g>
        ))}

        {/* India HQ highlight */}
        <motion.circle
          cx={serviceLocations[0].mx}
          cy={serviceLocations[0].my}
          r={6}
          fill="rgba(0,221,255,0.03)"
          animate={{ r: [6, 8, 6], opacity: [0.03, 0.01, 0.03] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-mono text-slate-500 bg-slate-950/60 px-3 py-1 rounded-full whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span className="text-cyan-400/60">●</span> Global Service Locations — 18 Countries Across Asia, Europe &amp; South America
      </motion.div>
    </div>
  );
}
