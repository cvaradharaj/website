'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number; vx: number; vy: number; life: number; maxLife: number;
  size: number; alpha: number;
}

interface DataLine {
  label: string; value: number; target: number; y: number;
}

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;
    const particles: Particle[] = [];
    const dataLines: DataLine[] = [
      { label: 'PROD', value: 0, target: 94, y: 0 },
      { label: 'OEE', value: 0, target: 87, y: 0 },
      { label: 'QUAL', value: 0, target: 99, y: 0 },
      { label: 'SPEED', value: 0, target: 92, y: 0 },
    ];

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx!.scale(dpr, dpr);
      const w = rect.width;
      const h = rect.height;
      dataLines.forEach((dl, i) => {
        dl.y = h * (0.12 + i * 0.08);
      });
    }

    function drawRoller(cx: number, cy: number, r: number, angle: number) {
      ctx!.beginPath();
      ctx!.arc(cx, cy, r, 0, Math.PI * 2);
      ctx!.strokeStyle = 'rgba(0, 221, 255, 0.25)';
      ctx!.lineWidth = 2;
      ctx!.stroke();

      ctx!.beginPath();
      ctx!.arc(cx, cy, r * 0.7, 0, Math.PI * 2);
      ctx!.strokeStyle = 'rgba(0, 221, 255, 0.1)';
      ctx!.lineWidth = 1;
      ctx!.stroke();

      const spokeCount = 6;
      for (let i = 0; i < spokeCount; i++) {
        const a = angle + (i * Math.PI * 2) / spokeCount;
        ctx!.beginPath();
        ctx!.moveTo(cx, cy);
        ctx!.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
        ctx!.strokeStyle = 'rgba(0, 221, 255, 0.08)';
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }
    }

    function drawWeb(points: { x: number; y: number }[], offset: number) {
      if (points.length < 2) return;
      ctx!.beginPath();
      ctx!.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx!.lineTo(points[i].x, points[i].y);
      }
      ctx!.strokeStyle = 'rgba(0, 221, 255, 0.12)';
      ctx!.lineWidth = 2;
      ctx!.setLineDash([6, 8]);
      ctx!.lineDashOffset = -offset;
      ctx!.stroke();
      ctx!.setLineDash([]);

      for (let i = 0; i < points.length - 1; i++) {
        const t = (offset / 20) % 1;
        const idx = i + t;
        if (idx < points.length - 1) {
          const p = points[Math.floor(idx)];
          const n = points[Math.min(Math.floor(idx) + 1, points.length - 1)];
          const frac = idx - Math.floor(idx);
          const px = p.x + (n.x - p.x) * frac;
          const py = p.y + (n.y - p.y) * frac;
          ctx!.beginPath();
          ctx!.arc(px, py, 2, 0, Math.PI * 2);
          ctx!.fillStyle = 'rgba(0, 221, 255, 0.4)';
          ctx!.fill();
        }
      }
    }

    function drawGauge(cx: number, cy: number, r: number, value: number, label: string) {
      const startAngle = -Math.PI * 0.75;
      const endAngle = Math.PI * 0.75;
      const range = endAngle - startAngle;
      const valAngle = startAngle + range * (value / 100);

      ctx!.beginPath();
      ctx!.arc(cx, cy, r, startAngle, endAngle);
      ctx!.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx!.lineWidth = 4;
      ctx!.stroke();

      ctx!.beginPath();
      ctx!.arc(cx, cy, r, startAngle, valAngle);
      ctx!.strokeStyle = 'rgba(0, 221, 255, 0.3)';
      ctx!.lineWidth = 4;
      ctx!.lineCap = 'round';
      ctx!.stroke();
      ctx!.lineCap = 'butt';

      ctx!.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx!.font = 'bold 11px monospace';
      ctx!.textAlign = 'center';
      ctx!.fillText(`${Math.round(value)}%`, cx, cy + 4);
    }

    function spawnParticle(w: number, h: number) {
      particles.push({
        x: Math.random() * w,
        y: -5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: 0.2 + Math.random() * 0.4,
        life: 0,
        maxLife: 120 + Math.random() * 80,
        size: 1 + Math.random() * 2,
        alpha: 0.1 + Math.random() * 0.2,
      });
    }

    function drawDataStream(w: number, h: number, time: number) {
      const x = w * 0.55;
      const bw = w * 0.38;

      ctx!.fillStyle = 'rgba(0, 221, 255, 0.06)';
      ctx!.fillRect(x, h * 0.06, bw, h * 0.38);

      ctx!.strokeStyle = 'rgba(0, 221, 255, 0.08)';
      ctx!.lineWidth = 1;
      ctx!.strokeRect(x, h * 0.06, bw, h * 0.38);

      ctx!.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx!.font = '7px monospace';
      ctx!.textAlign = 'left';
      ctx!.fillText('REAL-TIME MONITORING', x + 6, h * 0.06 + 12);

      dataLines.forEach((dl, i) => {
        const bx = x + 8;
        const by = h * 0.06 + 20 + i * 22;
        const barW = bw - 16;

        ctx!.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx!.fillRect(bx, by, barW, 12);

        const val = (dl.value / 100) * barW;
        ctx!.fillStyle = 'rgba(0, 221, 255, 0.2)';
        ctx!.fillRect(bx, by, val, 12);

        ctx!.fillStyle = 'rgba(255, 255, 255, 0.35)';
        ctx!.font = '7px monospace';
        ctx!.textAlign = 'left';
        ctx!.fillText(dl.label, bx + 2, by + 9);

        ctx!.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx!.font = 'bold 7px monospace';
        ctx!.textAlign = 'right';
        ctx!.fillText(`${Math.round(dl.value)}%`, bx + barW - 2, by + 9);
      });
    }

    function drawProductivityMeter(w: number, h: number, time: number) {
      const cx = w * 0.3;
      const cy = h * 0.55;
      const val = 78 + Math.sin(time * 0.005) * 4;

      drawGauge(cx, cy, 28, val, '');

      ctx!.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx!.font = '6px monospace';
      ctx!.textAlign = 'center';
      ctx!.fillText('PRODUCTIVITY', cx, cy + 42);
    }

    function animate() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx!.clearRect(0, 0, w, h);

      time++;

      const drawW = w;
      const drawH = h;

      // Slitting line area (left side)
      const rollerY = drawH * 0.7;
      const rollerPositions = [
        drawW * 0.08, drawW * 0.22, drawW * 0.36,
        drawW * 0.5, drawW * 0.64, drawW * 0.78, drawW * 0.92,
      ];
      const rollerR = Math.min(14, drawW * 0.035);

      const webPoints = rollerPositions.map((rx) => ({
        x: rx,
        y: rollerY + Math.sin(rx * 0.05 + time * 0.01) * 6,
      }));

      // Draw web path
      drawWeb(webPoints, time * 0.5);

      // Draw rollers
      rollerPositions.forEach((rx, i) => {
        drawRoller(rx, rollerY + Math.sin(rx * 0.05 + time * 0.01) * 6, rollerR, time * 0.02 + i * 0.5);
      });

      // Draw web line across rollers
      ctx!.beginPath();
      ctx!.moveTo(webPoints[0].x, webPoints[0].y - rollerR - 2);
      for (let i = 1; i < webPoints.length; i++) {
        ctx!.lineTo(webPoints[i].x, webPoints[i].y - rollerR - 2);
      }
      ctx!.strokeStyle = 'rgba(0, 221, 255, 0.06)';
      ctx!.lineWidth = 3;
      ctx!.stroke();

      ctx!.beginPath();
      ctx!.moveTo(webPoints[0].x, webPoints[0].y + rollerR + 2);
      for (let i = 1; i < webPoints.length; i++) {
        ctx!.lineTo(webPoints[i].x, webPoints[i].y + rollerR + 2);
      }
      ctx!.strokeStyle = 'rgba(0, 221, 255, 0.06)';
      ctx!.lineWidth = 3;
      ctx!.stroke();

      // Draw film material between top two rollers
      if (rollerPositions.length >= 2) {
        const topY = rollerPositions[0];
        const filmX = rollerPositions[0] + 4;
        const filmW = rollerPositions[rollerPositions.length - 1] - rollerPositions[0] - 8;

        ctx!.fillStyle = 'rgba(0, 221, 255, 0.03)';
        ctx!.fillRect(filmX, 0, filmW, rollerY);

        // Draw film web with wavy edges
        ctx!.beginPath();
        ctx!.moveTo(filmX, 0);
        for (let x = filmX; x <= filmX + filmW; x += 2) {
          ctx!.lineTo(x, Math.sin(x * 0.08 + time * 0.02) * 8 + rollerY - rollerR - 15);
        }
        ctx!.strokeStyle = 'rgba(0, 221, 255, 0.08)';
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }

      // Data monitoring panel
      drawDataStream(w, h, time);

      // Productivity gauge
      drawProductivityMeter(w, h, time);

      // Particles
      if (particles.length < 25 && Math.random() < 0.05) {
        spawnParticle(w, h);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        const alpha = p.alpha * (1 - p.life / p.maxLife);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 221, 255, ${alpha})`;
        ctx!.fill();

        if (p.life >= p.maxLife || p.y > h) {
          particles.splice(i, 1);
        }
      }

      // Animate data lines
      dataLines.forEach((dl) => {
        dl.value += (dl.target - dl.value) * 0.008;
        if (Math.abs(dl.value - dl.target) < 0.5) {
          dl.target = 70 + Math.random() * 28;
        }
      });

      animId = requestAnimationFrame(animate);
    }

    resize();
    animate();

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.5 }}
    />
  );
}
