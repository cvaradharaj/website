'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const locations = [
  { name: 'India', mx: 0.55, my: 0.54 },
  { name: 'Indonesia', mx: 0.66, my: 0.74 },
  { name: 'China', mx: 0.62, my: 0.36 },
  { name: 'Turkey', mx: 0.44, my: 0.34 },
  { name: 'South America', mx: 0.28, my: 0.70 },
];

// Simplified continent outlines as normalized polygons (x: 0-1, y: 0-1)
const continents = [
  // North America
  { points: [[0.10,0.06],[0.14,0.04],[0.18,0.04],[0.22,0.05],[0.26,0.07],[0.28,0.10],[0.30,0.14],[0.30,0.18],[0.28,0.22],[0.26,0.26],[0.24,0.28],[0.22,0.30],[0.20,0.32],[0.18,0.30],[0.16,0.28],[0.14,0.26],[0.12,0.24],[0.10,0.20],[0.08,0.16],[0.08,0.12],[0.08,0.08]], color: '#4488ff' },
  // South America
  { points: [[0.24,0.48],[0.28,0.48],[0.30,0.52],[0.32,0.56],[0.32,0.64],[0.30,0.72],[0.28,0.80],[0.26,0.86],[0.24,0.88],[0.22,0.86],[0.20,0.80],[0.18,0.72],[0.18,0.64],[0.20,0.56],[0.22,0.50]], color: '#00ddff' },
  // Europe
  { points: [[0.40,0.08],[0.44,0.06],[0.48,0.08],[0.50,0.12],[0.50,0.16],[0.48,0.20],[0.46,0.24],[0.44,0.26],[0.42,0.26],[0.40,0.24],[0.38,0.20],[0.38,0.16],[0.38,0.12]], color: '#818cf8' },
  // Africa
  { points: [[0.38,0.34],[0.42,0.34],[0.46,0.36],[0.48,0.40],[0.50,0.46],[0.50,0.52],[0.48,0.58],[0.46,0.64],[0.44,0.68],[0.42,0.70],[0.40,0.68],[0.38,0.64],[0.36,0.58],[0.34,0.50],[0.34,0.44],[0.36,0.38]], color: '#00ddff' },
  // Asia
  { points: [[0.48,0.06],[0.54,0.04],[0.60,0.04],[0.66,0.06],[0.70,0.10],[0.72,0.16],[0.72,0.22],[0.70,0.28],[0.66,0.34],[0.62,0.38],[0.58,0.40],[0.54,0.40],[0.50,0.38],[0.46,0.34],[0.44,0.28],[0.44,0.20],[0.44,0.14],[0.46,0.10]], color: '#4488ff' },
  // Middle East
  { points: [[0.46,0.36],[0.50,0.36],[0.52,0.38],[0.54,0.42],[0.54,0.46],[0.52,0.50],[0.50,0.52],[0.48,0.52],[0.46,0.50],[0.44,0.46],[0.44,0.42]], color: '#818cf8' },
  // Australia
  { points: [[0.73,0.62],[0.77,0.62],[0.80,0.66],[0.80,0.72],[0.78,0.78],[0.74,0.80],[0.70,0.78],[0.68,0.74],[0.68,0.68],[0.70,0.64]], color: '#4488ff' },
];

export default function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cvs = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;

    function draw() {
      if (!ctx) return;
      const rect = cvs.parentElement!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const w = rect.width;
      const h = rect.height;
      cvs.width = w * dpr;
      cvs.height = h * dpr;
      cvs.style.width = `${w}px`;
      cvs.style.height = `${h}px`;
      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, w, h);

      // Draw grid
      ctx.strokeStyle = 'rgba(255,255,255,0.015)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= w; x += w * 0.1) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y <= h; y += h * 0.1) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // Draw continents
      continents.forEach((c) => {
        ctx.beginPath();
        const first = c.points[0];
        ctx.moveTo(first[0] * w, first[1] * h);
        for (let i = 1; i < c.points.length; i++) {
          const p = c.points[i];
          const prev = c.points[i - 1];
          const cpx = (prev[0] + p[0]) / 2 * w;
          const cpy = (prev[1] + p[1]) / 2 * h;
          ctx.quadraticCurveTo(prev[0] * w, prev[1] * h, cpx, cpy);
        }
        ctx.closePath();
        ctx.fillStyle = c.color + '15';
        ctx.fill();
        ctx.strokeStyle = c.color + '30';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Connection lines
      locations.slice(1).forEach((loc) => {
        ctx.beginPath();
        ctx.moveTo(locations[0].mx * w, locations[0].my * h);
        ctx.lineTo(loc.mx * w, loc.my * h);
        ctx.strokeStyle = 'rgba(0,221,255,0.1)';
        ctx.lineWidth = 0.5;
        ctx.setLineDash([3, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Location markers
      locations.forEach((loc) => {
        const x = loc.mx * w;
        const y = loc.my * h;
        const t = Date.now() / 1000;

        // Glow
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 20);
        grad.addColorStop(0, 'rgba(0,221,255,0.1)');
        grad.addColorStop(1, 'rgba(0,221,255,0)');
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(x, y, 20, 0, Math.PI * 2); ctx.fill();

        // Pulse ring
        const pulse = 8 + Math.sin(t * 2) * 4;
        ctx.strokeStyle = 'rgba(0,221,255,0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(x, y, pulse, 0, Math.PI * 2); ctx.stroke();

        // Dot
        ctx.fillStyle = '#00ddff';
        ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();

        // Label
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = '10px monospace';
        ctx.textAlign = 'left';
        ctx.fillText(loc.name, x + 8, y + 4);
      });

      animId = requestAnimationFrame(draw);
    }

    draw();
    const handleResize = () => {};
    window.addEventListener('resize', handleResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', handleResize); };
  }, []);

  return (
    <div className="relative w-full aspect-[2/1] rounded-2xl glass border-white/[0.03] overflow-hidden">
      <div className="absolute inset-0 aurora-subtle pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

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
