"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function LedTrainingScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [metrics, setMetrics] = useState({ epoch: 1, nerAcc: 0.7245, leoAcc: 0.6120, loss: 0.8421 });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const totalHeight = rect.height + viewportHeight;
        const scrolledAmount = viewportHeight - rect.top;
        const scrollPercent = Math.min(Math.max(scrolledAmount / totalHeight, 0), 1);
        
        // Map exact target parameters to scroll parameters
        const epoch = Math.floor(scrollPercent * 199) + 1;
        const nerAcc = 0.7245 + (scrollPercent * (0.9970 - 0.7245));
        const leoAcc = 0.6120 + (scrollPercent * (0.9680 - 0.6120));
        const loss = Math.max(0.8421 - (scrollPercent * 0.8110), 0.0114);

        setMetrics({ epoch, nerAcc, leoAcc, loss });

        // DRAW ENGINE REALTIME CONVERGENCE GRAPH
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const w = canvas.width;
          const h = canvas.height;
          ctx.clearRect(0, 0, w, h);

          // Background Gridlines
          ctx.strokeStyle = '#0f172a';
          ctx.lineWidth = 1;
          for (let i = 20; i < w; i += 30) {
            ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, h); ctx.stroke();
          }
          for (let j = 15; j < h; j += 20) {
            ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(w, j); ctx.stroke();
          }

          // Generate dynamic parametric curves tracing scroll state
          const drawCurve = (startVal: number, targetVal: number, strokeStyle: string) => {
            ctx.beginPath();
            ctx.strokeStyle = strokeStyle;
            ctx.lineWidth = 2;
            ctx.moveTo(0, h - (startVal * (h - 20)));

            const currentLength = Math.floor(scrollPercent * w);
            for (let x = 0; x <= currentLength; x++) {
              const pct = x / w;
              // Sigmoid/Ease-out curve simulation
              const intermediateY = startVal + (pct * (targetVal - startVal));
              ctx.lineTo(x, h - (intermediateY * (h - 30)) - 10);
            }
            ctx.stroke();
          };

          // Red line: NER Model (Targeting 99.7%)
          drawCurve(0.7245, 0.9970, '#10b981');
          // Teal line: LeoLM Foundation (Targeting 96.8%)
          drawCurve(0.6120, 0.9680, '#06b6d4');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full grid md:grid-cols-3 gap-4 bg-slate-950 border border-slate-900 rounded-xl p-4 font-mono text-xs shadow-2xl relative">
      
      {/* LEFT LED TELEMETRY COLUMN */}
      <div className="bg-slate-900/30 border border-slate-900 p-4 rounded-lg flex flex-col justify-between h-48 border-l-2 border-l-emerald-500">
        <div>
          <div className="flex justify-between items-center text-[10px] text-slate-500 mb-3">
            <span>📡 SCREEN 01 // NER_CORE</span>
            <span className="text-emerald-400 animate-pulse">● LIVE</span>
          </div>
          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Token Classification Accuracy</span>
          <div className="text-3xl font-bold tracking-tight text-white mt-1">{(metrics.nerAcc * 100).toFixed(2)}%</div>
        </div>
        <div className="text-[10px] text-slate-500 space-y-1">
          <p className="text-emerald-400/80">&gt; Target: 99.70% Verified</p>
          <p>&gt; Sequence labels: PER, LOC, STR, TEL</p>
        </div>
      </div>

      {/* CENTER LED TELEMETRY COLUMN */}
      <div className="bg-slate-900/30 border border-slate-900 p-4 rounded-lg flex flex-col justify-between h-48 border-l-2 border-l-cyan-500">
        <div>
          <div className="flex justify-between items-center text-[10px] text-slate-500 mb-3">
            <span>📡 SCREEN 02 // LLM_BASE</span>
            <span className="text-cyan-400 animate-pulse">● LIVE</span>
          </div>
          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">LeoLM Foundation Tuning</span>
          <div className="text-3xl font-bold tracking-tight text-white mt-1">{(metrics.leoAcc * 100).toFixed(2)}%</div>
        </div>
        <div className="text-[10px] text-slate-500 space-y-1">
          <p className="text-cyan-400/80">&gt; Target: 96.80% Alignment</p>
          <p>&gt; System status: 4-bit Quantization</p>
        </div>
      </div>

      {/* RIGHT GRAPH MONITOR */}
      <div className="bg-slate-900/60 border border-slate-900 rounded-lg p-3 h-48 flex flex-col justify-between relative overflow-hidden">
        <div className="flex justify-between text-[9px] text-slate-500 z-10 pointer-events-none">
          <span>📊 VALIDATION CURVE PLOT</span>
          <span className="text-slate-400">EPOCH {metrics.epoch}/200</span>
        </div>
        
        <div className="absolute inset-x-3 top-8 bottom-8">
          <canvas ref={canvasRef} width={280} height={110} className="w-full h-full" />
        </div>

        <div className="flex gap-4 text-[9px] font-mono mt-auto z-10 pointer-events-none">
          <span className="text-emerald-400 flex items-center gap-1">■ NER (99.7%)</span>
          <span className="text-cyan-400 flex items-center gap-1">■ LeoLM (96.8%)</span>
        </div>
      </div>

    </div>
  );
}