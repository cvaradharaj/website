'use client';

import { motion } from 'framer-motion';

// Hub: Bengaluru, India (headquarters). Every customer location below is
// connected back to the hub to visualize global customer engagement.
// Coordinates are pixel-calibrated against /public/Worldmap.png (not a
// standard equirectangular projection), so each point sits precisely on its
// country's landmass in this specific artwork rather than by raw lat/long.
const hub = { name: 'Bengaluru, India (HQ)', left: 64.5, top: 53.5 };

const locations = [
  { name: 'Kenya', left: 55, top: 60 },
  { name: 'Nigeria', left: 44, top: 57 },
  { name: 'Bahrain', left: 57, top: 50 },
  { name: 'Bangladesh', left: 70, top: 51 },
  { name: 'China', left: 80, top: 28 },
  { name: 'Colombia', left: 23, top: 55 },
  { name: 'Egypt', left: 50, top: 48 },
  { name: 'France', left: 44, top: 29 },
  { name: 'Germany', left: 46, top: 25 },
  { name: 'Hungary', left: 49, top: 27 },
  { name: 'Indonesia', left: 76, top: 60 },
  { name: 'Iran', left: 57, top: 43 },
  { name: 'Italy', left: 48, top: 37 },
  { name: 'South Korea', left: 80.5, top: 40 },
  { name: 'Malaysia', left: 73, top: 58 },
  { name: 'Pakistan', left: 60, top: 46 },
  { name: 'Peru', left: 20, top: 63 },
  { name: 'Philippines', left: 80, top: 53 },
  { name: 'Poland', left: 48, top: 22 },
  { name: 'Portugal', left: 39, top: 37 },
  { name: 'Russia', left: 62, top: 16 },
  { name: 'Singapore', left: 73, top: 60 },
  { name: 'South Africa', left: 50, top: 74 },
  { name: 'Sri Lanka', left: 65, top: 59 },
  { name: 'Taiwan', left: 79, top: 44 },
  { name: 'Thailand', left: 74, top: 54 },
  { name: 'Turkey', left: 53, top: 37 },
  { name: 'UAE', left: 60, top: 52 },
  { name: 'UK', left: 42, top: 23 },
  { name: 'USA', left: 22, top: 33 },
  { name: 'Vietnam', left: 76, top: 52 },
];

// Quadratic bezier control point, arced upward from the straight midpoint so
// routes read clearly on a flat map instead of overlapping in straight lines.
function arcPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const lift = Math.min(18, Math.hypot(x2 - x1, y2 - y1) * 0.22);
  return `M ${x1} ${y1} Q ${mx} ${my - lift} ${x2} ${y2}`;
}

export default function WorldMap() {
  return (
    <div>
      <div className="relative w-full rounded-2xl glass border-white/[0.03] overflow-hidden">
        <img src="/Worldmap.png" alt="World map showing Control Standards' global customer engagement" className="w-full h-auto" />

        {/* Connector routes, all originating from the Bengaluru hub */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.85" />
            </linearGradient>
            <filter id="routeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {locations.map((loc, i) => {
            const d = arcPath(hub.left, hub.top, loc.left, loc.top);
            return (
              <g key={loc.name}>
                {/* soft glow base line, drawn in on first view */}
                <motion.path
                  d={d}
                  fill="none"
                  stroke="url(#routeGradient)"
                  strokeWidth="0.45"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  filter="url(#routeGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.55 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.04, ease: 'easeOut' }}
                />
                {/* animated flowing pulse traveling from hub to destination */}
                <motion.path
                  d={d}
                  fill="none"
                  stroke="#e0f7ff"
                  strokeWidth="0.55"
                  strokeLinecap="round"
                  strokeDasharray="2.2 9"
                  vectorEffect="non-scaling-stroke"
                  filter="url(#routeGlow)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1, 1], strokeDashoffset: [0, -220] }}
                  viewport={{ once: true }}
                  transition={{
                    opacity: { duration: 0.6, delay: 1.2 + i * 0.04 },
                    strokeDashoffset: {
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: 1.2 + i * 0.04,
                    },
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Customer location markers with always-visible country labels */}
        {locations.map((loc, i) => (
          <div
            key={loc.name}
            className="absolute"
            style={{ left: `${loc.left}%`, top: `${loc.top}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-2 rounded-full border border-cyan-400/30"
                animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
              />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,221,255,0.6)]" />
            </div>
            <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-2 whitespace-nowrap rounded bg-slate-950/70 px-1 py-px text-[7px] sm:text-[8px] font-mono leading-none text-cyan-200/90">
              {loc.name}
            </span>
          </div>
        ))}

        {/* Hub marker — always labeled */}
        <div
          className="absolute"
          style={{ left: `${hub.left}%`, top: `${hub.top}%`, transform: 'translate(-50%, -50%)' }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-full border border-blue-400/40"
              animate={{ scale: [1, 2.6, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(59,130,246,0.8)]" />
          </div>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-mono font-semibold text-blue-300 whitespace-nowrap drop-shadow-lg">
            {hub.name}
          </span>
        </div>

        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-mono text-slate-500 bg-slate-950/60 px-3 py-1 rounded-full whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400/60">●</span> Global Customer Engagement — 35+ Countries, All Connected to Bengaluru
        </motion.div>
      </div>

      {/* Text list kept for readability and to work without JS */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {locations.map((loc) => (
          <span
            key={loc.name}
            className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-slate-400"
          >
            {loc.name}
          </span>
        ))}
      </div>
    </div>
  );
}
