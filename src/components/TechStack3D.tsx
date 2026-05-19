"use client";

import React, { useEffect, useRef } from 'react';

interface SphereNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  name: string;
  color: string;
}

export default function TechStack3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -2000, y: -2000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const techDataset = [
      { name: 'Python', color: '#14b8a6' },
      { name: 'C# / .NET', color: '#a855f7' },
      { name: 'Qdrant', color: '#3b82f6' },
      { name: 'FAISS', color: '#6366f1' },
      { name: 'BERT NER', color: '#10b981' },
      { name: 'Next.js', color: '#f8fafc' },
      { name: 'Whisper AI', color: '#ec4899' },
      { name: 'WebRTC', color: '#f97316' },
      { name: 'Roslyn AST', color: '#06b6d4' },
      { name: 'LeoLM', color: '#059669' },
      { name: 'GDPR Rules', color: '#dc2626' }
    ];

    const balls: SphereNode[] = techDataset.map((tech, idx) => {
      const angle = (idx / techDataset.length) * Math.PI * 2;
      return {
        x: 150 + Math.cos(angle) * 100,
        y: 160 + Math.sin(angle) * 100,
        vx: (Math.random() - 0.5) * 1.6,
        vy: (Math.random() - 0.5) * 1.6,
        radius: 35,
        name: tech.name,
        color: tech.color
      };
    });

    const trackMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener('mousemove', trackMouse);

    let frameId: number;
    const renderLoop = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      balls.forEach((ball) => {
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Air damping physics friction
        ball.vx *= 0.995;
        ball.vy *= 0.995;

        // Border container bounces
        if (ball.x - ball.radius < 0) { ball.x = ball.radius; ball.vx *= -1; }
        if (ball.x + ball.radius > w) { ball.x = w - ball.radius; ball.vx *= -1; }
        if (ball.y - ball.radius < 0) { ball.y = ball.radius; ball.vy *= -1; }
        if (ball.y + ball.radius > h) { ball.y = h - ball.radius; ball.vy *= -1; }

        // Cursor avoidance magnets
        const mdx = ball.x - mouseRef.current.x;
        const mdy = ball.y - mouseRef.current.y;
        const mDist = Math.hypot(mdx, mdy);
        if (mDist < 120) {
          const force = (120 - mDist) / 120;
          ball.vx += (mdx / mDist) * force * 0.5;
          ball.vy += (mdy / mDist) * force * 0.5;
        }

        // Mutual circle-to-circle collision calculations
        balls.forEach((target) => {
          if (ball === target) return;
          const tdx = target.x - ball.x;
          const tdy = target.y - ball.y;
          const tDist = Math.hypot(tdx, tdy);
          const gap = ball.radius + target.radius;

          if (tDist < gap) {
            const overlap = gap - tDist;
            const ax = tdx / tDist;
            const ay = tdy / tDist;

            ball.x -= ax * overlap * 0.5;
            ball.y -= ay * overlap * 0.5;
            target.x += ax * overlap * 0.5;
            target.y += ay * overlap * 0.5;

            const speedDiffX = ball.vx - target.vx;
            const speedDiffY = ball.vy - target.vy;
            const velocityWeight = 2 * (ball.vx * ax + ball.vy * ay - target.vx * ax - target.vy * ay) / 2;

            ball.vx -= velocityWeight * ax;
            ball.vy -= velocityWeight * ay;
            target.vx += velocityWeight * ax;
            target.vy += velocityWeight * ay;
          }
        });

        // DRAW HIGH-GLOSS CERAMIC NODES
        ctx.save();
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#0f172a';
        ctx.fill();
        ctx.strokeStyle = ball.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Core central styling glow trace
        ctx.beginPath();
        ctx.arc(ball.x - ball.radius * 0.4, ball.y - ball.radius * 0.4, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        // Print text labels safely using local default system sans fonts
        ctx.fillStyle = '#f1f5f9';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(ball.name, ball.x, ball.y);
        ctx.restore();
      });

      frameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', trackMouse);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="w-full h-[400px] bg-slate-950/20 border border-slate-900 rounded-xl relative overflow-hidden mt-6 shadow-2xl">
      <div className="absolute top-4 left-4 text-[10px] font-mono text-slate-500 tracking-widest uppercase z-20 pointer-events-none">
        🧬 Data Infrastructure Nodes // Canvas Online
      </div>
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />
    </div>
  );
}