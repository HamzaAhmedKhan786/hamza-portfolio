"use client";

import React, { useEffect, useRef } from 'react';

interface TechNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  name: string;
  color: string;
}

export default function TechPhysicsSandbox() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Clean data configuration for interactive ball clusters
    const technologies = [
      { name: 'Python', color: '#14b8a6' },
      { name: 'C# / .NET', color: '#a855f7' },
      { name: 'Qdrant', color: '#3b82f6' },
      { name: 'FAISS', color: '#6366f1' },
      { name: 'BERT NER', color: '#10b981' },
      { name: 'Next.js', color: '#f1f5f9' },
      { name: 'Whisper AI', color: '#ec4899' },
      { name: 'WebRTC', color: '#f97316' },
      { name: 'Roslyn AST', color: '#06b6d4' },
      { name: 'LeoLM', color: '#059669' },
      { name: 'GDPR Rules', color: '#dc2626' }
    ];

    const balls: TechNode[] = technologies.map((tech, i) => {
      const angle = (i / technologies.length) * Math.PI * 2;
      return {
        x: 180 + Math.cos(angle) * 110,
        y: 200 + Math.sin(angle) * 110,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: 36,
        name: tech.name,
        color: tech.color
      };
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;

    const updatePhysics = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // ================= DRAW CINEMATIC ANDROID SILHOUETTE (BACKGROUND LAYER) =================
      ctx.save();
      ctx.beginPath();
      
      // Outer fluid cranium curve profile derived from reference film asset
      ctx.moveTo(w - 60, h / 2 - 130);
      ctx.bezierCurveTo(w - 40, h / 2 - 250, w - 240, h / 2 - 240, w - 280, h / 2 - 120);
      ctx.bezierCurveTo(w - 290, h / 2 - 70, w - 285, h / 2 - 30, w - 305, h / 2 + 10);
      ctx.bezierCurveTo(w - 325, h / 2 + 40, w - 310, h / 2 + 75, w - 295, h / 2 + 90);
      ctx.bezierCurveTo(w - 280, h / 2 + 105, w - 235, h / 2 + 155, w - 200, h / 2 + 165);
      ctx.bezierCurveTo(w - 150, h / 2 + 180, w - 100, h / 2 + 110, w - 90, h / 2 + 60);
      ctx.bezierCurveTo(w - 85, h / 2 + 30, w - 80, h / 2 - 50, w - 60, h / 2 - 130);
      ctx.closePath();

      // Translucent high-gloss dark cybernetic tint filling the continuous mask shape
      ctx.fillStyle = 'rgba(15, 23, 42, 0.45)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(38, 79, 104, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Deep glowing blue internal optics focus node
      ctx.beginPath();
      ctx.arc(w - 245, h / 2 - 35, 11, 0, Math.PI * 2);
      ctx.fillStyle = '#22d3ee';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#06b6d4';
      ctx.fill();
      ctx.restore();

      // Subtle mechanical internal wiring lines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
      ctx.lineWidth = 1;
      ctx.moveTo(w - 245, h / 2 - 35);
      ctx.lineTo(w - 160, h / 2 - 90);
      ctx.lineTo(w - 80, h / 2 - 20);
      ctx.stroke();

      // ================= UPDATE & RENDER THE INTERACTIVE LOOPS =================
      balls.forEach((ball) => {
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Friction dampener
        ball.vx *= 0.99;
        ball.vy *= 0.99;

        // Bounding container physics walls collision calculations
        if (ball.x - ball.radius < 0) { ball.x = ball.radius; ball.vx *= -1; }
        if (ball.x + ball.radius > w) { ball.x = w - ball.radius; ball.vx *= -1; }
        if (ball.y - ball.radius < 0) { ball.y = ball.radius; ball.vy *= -1; }
        if (ball.y + ball.radius > h) { ball.y = h - ball.radius; ball.vy *= -1; }

        // Core Android Silhouette Surface Boundary Physics Constraints
        const testX = ball.x - (w - 200);
        const testY = ball.y - (h / 2);
        const distanceToFaceCenter = Math.hypot(testX, testY);
        
        if (distanceToFaceCenter < 155) {
          const forceAngle = Math.atan2(testY, testX);
          ball.x = (w - 200) + Math.cos(forceAngle) * 155;
          ball.y = (h / 2) + Math.sin(forceAngle) * 155;
          ball.vx += Math.cos(forceAngle) * 0.4;
          ball.vy += Math.sin(forceAngle) * 0.4;
        }

        // Mouse avoidance magnetism loop
        const mdx = ball.x - mouseRef.current.x;
        const mdy = ball.y - mouseRef.current.y;
        const mouseDist = Math.hypot(mdx, mdy);
        if (mouseDist < 130) {
          const force = (130 - mouseDist) / 130;
          ball.vx += (mdx / mouseDist) * force * 0.6;
          ball.vy += (mdy / mouseDist) * force * 0.6;
        }

        // Ball-to-ball elastic impact processing loop
        balls.forEach((otherBall) => {
          if (ball === otherBall) return;
          const bdx = otherBall.x - ball.x;
          const bdy = otherBall.y - ball.y;
          const ballDist = Math.hypot(bdx, bdy);
          const minDist = ball.radius + otherBall.radius;

          if (ballDist < minDist) {
            const overlap = minDist - ballDist;
            const nx = bdx / ballDist;
            const ny = bdy / ballDist;

            ball.x -= nx * overlap * 0.5;
            ball.y -= ny * overlap * 0.5;
            otherBall.x += nx * overlap * 0.5;
            otherBall.y += ny * overlap * 0.5;

            const kx = ball.vx - otherBall.vx;
            const ky = ball.vy - otherBall.vy;
            const p = 2 * (ball.vx * nx + ball.vy * ny - otherBall.vx * nx - otherBall.vy * ny) / 2;

            ball.vx -= p * nx;
            ball.vy -= p * ny;
            otherBall.vx += p * nx;
            otherBall.vy += p * ny;
          }
        });

        // DRAW HIGH-GLOSS BRANDING SPHERES
        ctx.save();
        
        // Shadow base
        ctx.beginPath();
        ctx.arc(ball.x, ball.y + 4, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(2, 6, 23, 0.4)';
        ctx.fill();

        // Solid porcelain node body
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        // Edge branding ring line
        ctx.strokeStyle = ball.color;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Specular 3D glossy highlight mark
        ctx.beginPath();
        ctx.arc(ball.x - ball.radius * 0.35, ball.y - ball.radius * 0.35, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();

        // Stamp flat corporate font labels inside nodes cleanly
        ctx.fillStyle = '#0f172a';
        ctx.font = 'black 10px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(ball.name.toUpperCase(), ball.x, ball.y + 1);

        ctx.restore();
      });

      animationId = requestAnimationFrame(updatePhysics);
    };

    updatePhysics();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full h-[510px] bg-slate-950/40 border border-slate-900 rounded-2xl relative overflow-hidden shadow-2xl">
      <div className="absolute top-4 left-5 text-[10px] font-mono text-slate-500 tracking-widest uppercase z-20 pointer-events-none flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
        Neural Cluster Sandbox // Active Physics Mapping
      </div>
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair z-10 relative" />
    </div>
  );
}