'use client';

import { motion } from 'framer-motion';

// Hub: Bengaluru, India (headquarters). Every customer location below is
// connected back to the hub to visualize global customer engagement.
const hub = { name: 'Bengaluru, India (HQ)', left: 72, top: 45 };

// Approximate positions (equirectangular projection) for each country served.
const locations = [
  { name: 'Kenya', left: 60.2, top: 56.5 },
  { name: 'Nigeria', left: 52.1, top: 48.8 },
  { name: 'Bahrain', left: 64.1, top: 36.1 },
  { name: 'Bangladesh', left: 75.1, top: 37.9 },
  { name: 'China', left: 82.3, top: 26.0 },
  { name: 'Colombia', left: 29.4, top: 52.1 },
  { name: 'Egypt', left: 58.7, top: 33.3 },
  { name: 'France', left: 50.7, top: 19.4 },
  { name: 'Germany', left: 53.7, top: 16.7 },
  { name: 'Hungary', left: 55.3, top: 20.4 },
  { name: 'Indonesia', left: 79.7, top: 60.2 },
  { name: 'Iran', left: 64.3, top: 29.1 },
  { name: 'Italy', left: 53.5, top: 24.5 },
  { name: 'South Korea', left: 85.3, top: 27.7 },
  { name: 'Malaysia', left: 78.3, top: 53.2 },
  { name: 'Pakistan', left: 70.3, top: 30.6 },
  { name: 'Peru', left: 28.6, top: 64.5 },
  { name: 'Philippines', left: 83.6, top: 44.7 },
  { name: 'Poland', left: 55.8, top: 16.9 },
  { name: 'Portugal', left: 47.5, top: 26.9 },
  { name: 'Russia', left: 60.5, top: 14.3 },
  { name: 'Singapore', left: 78.8, top: 54.6 },
  { name: 'South Africa', left: 56.2, top: 74.6 },
  { name: 'Sri Lanka', left: 72.2, top: 50.4 },
  { name: 'Taiwan', left: 83.8, top: 37.0 },
  { name: 'Thailand', left: 77.9, top: 45.4 },
  { name: 'Turkey', left: 59.1, top: 26.0 },
  { name: 'UAE', left: 65.4, top: 36.9 },
  { name: 'UK', left: 50.0, top: 17.4 },
  { name: 'USA', left: 28.6, top: 26.7 },
  { name: 'Vietnam', left: 79.4, top: 40.0 },
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
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          {locations.map((loc, i) => (
            <motion.path
              key={loc.name}
              d={arcPath(hub.left, hub.top, loc.left, loc.top)}
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="0.25"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.04, ease: 'easeOut' }}
            />
          ))}
        </svg>

        {/* Customer location markers */}
        {locations.map((loc, i) => (
          <div
            key={loc.name}
            className="group absolute"
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
            <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 whitespace-nowrap rounded-md bg-slate-900/90 border border-white/[0.06] px-2 py-0.5 text-[9px] font-mono text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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

      {/* Text list kept for readability, accessibility, and to work without JS/hover */}
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
