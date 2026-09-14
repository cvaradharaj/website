'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Leaflet reads `window`/`document` at import time, so the actual map view
// must be loaded client-only — this keeps Next.js static export happy.
const MapView = dynamic(() => import('./MapView'), {
  ssr: false,
  loading: () => (
    <div className="h-[560px] w-full flex items-center justify-center rounded-2xl bg-slate-900/60 border border-white/[0.06]">
      <span className="text-xs font-mono text-slate-500">Loading map…</span>
    </div>
  ),
});

const countryNames = [
  'Kenya', 'Nigeria', 'Bahrain', 'Bangladesh', 'China', 'Colombia', 'Egypt', 'France',
  'Germany', 'Hungary', 'Indonesia', 'Iran', 'Italy', 'South Korea', 'Malaysia', 'Pakistan',
  'Peru', 'Philippines', 'Poland', 'Portugal', 'Russia', 'Singapore', 'South Africa',
  'Sri Lanka', 'Taiwan', 'Thailand', 'Turkey', 'UAE', 'UK', 'USA', 'Vietnam',
];

export default function WorldMap() {
  return (
    <div>
      <div className="relative w-full rounded-2xl glass border-white/[0.03] overflow-hidden">
        <MapView />
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-[500] text-[8px] font-mono text-slate-300 bg-slate-950/70 px-3 py-1 rounded-full whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400/80">●</span> Global Customer Engagement — 35+ Countries, All Connected to Bengaluru
        </motion.div>
      </div>

      {/* Text list kept for readability and to work without JS */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {countryNames.map((name) => (
          <span
            key={name}
            className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-slate-400"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
