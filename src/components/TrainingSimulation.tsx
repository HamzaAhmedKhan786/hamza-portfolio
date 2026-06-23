"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function TrainingSimulation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [epoch, setEpoch] = useState(1);
  const [scrollPct, setScrollPct] = useState(0);
  const [loss, setLoss] = useState(0.9644);
  const [accuracy, setAccuracy] = useState(0.4521);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const totalHeight = rect.height + viewportHeight;
        const scrolledAmount = viewportHeight - rect.top;
        const scrollPercent = Math.min(Math.max(scrolledAmount / totalHeight, 0), 1);
        
        const currentEpoch = Math.floor(scrollPercent * 99) + 1;
        const simulatedLoss = Math.max(0.9644 - (scrollPercent * 0.85), 0.0421);
        const simulatedAcc = Math.min(0.4521 + (scrollPercent * 0.5123), 0.9644);

        setScrollPct(scrollPercent);
        setEpoch(currentEpoch);
        setLoss(simulatedLoss);
        setAccuracy(simulatedAcc);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const generateSvgPath = (type: 'loss' | 'eval' | 'f1') => {
    const totalPoints = 50;
    let points = [];
    
    for (let i = 0; i <= totalPoints; i++) {
      const x = (i / totalPoints) * 300;
      const currentProgress = i / totalPoints;
      
      if (currentProgress > scrollPct) break;

      let y = 0;
      if (type === 'loss') {
        const valLoss = Math.max(0.96 - (currentProgress * 0.82) + Math.sin(i * 0.4) * 0.02, 0.05);
        y = 100 - (valLoss * 90);
      } else if (type === 'eval') {
        const valEval = Math.min(0.35 + (currentProgress * 0.58) + Math.cos(i * 0.3) * 0.015, 0.98);
        y = 100 - (valEval * 90);
      } else {
        const valF1 = Math.min(0.42 + (currentProgress * 0.53) + Math.sin(i * 0.5) * 0.02, 0.96);
        y = 100 - (valF1 * 90);
      }
      points.push(`${x},${y}`);
    }
    return points.length > 0 ? `M ${points.join(' L ')}` : 'M 0,100';
  };

  return (
    <div ref={containerRef} className="w-full bg-slate-950 border border-slate-900 rounded-xl p-6 font-mono text-xs relative overflow-hidden shadow-2xl">
      <div className="absolute top-2 right-4 flex gap-1.5">
        <span className="w-2 h-2 rounded-full bg-red-500/60" />
        <span className="w-2 h-2 rounded-full bg-amber-500/60" />
        <span className="w-2 h-2 rounded-full bg-green-500/60 animate-pulse" />
      </div>

      <div className="text-slate-500 mb-4 border-b border-slate-900 pb-2 flex justify-between items-center">
        <span>🤖 LIVE PERFORMANCE TRACKING OVERVIEW</span>
        <span className="text-teal-400 animate-pulse">● STABLE_RUN</span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6 bg-slate-900/40 p-4 rounded-lg border border-slate-900">
        <div>
          <span className="text-slate-500 block text-[10px] uppercase tracking-wider">Current Epoch</span>
          <span className="text-base font-bold text-white">{epoch} / 100</span>
        </div>
        <div>
          <span className="text-slate-500 block text-[10px] uppercase tracking-wider">Validation Loss</span>
          <span className="text-base font-bold text-rose-400">{loss.toFixed(4)}</span>
        </div>
        <div>
          <span className="text-slate-500 block text-[10px] uppercase tracking-wider">Target Metrics</span>
          <span className="text-base font-bold text-teal-400">{(accuracy * 100).toFixed(2)}%</span>
        </div>
      </div>

      {/* GRAPH CHANNELS CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-900/60 border border-slate-900 rounded-lg p-3">
          <div className="flex justify-between text-[9px] text-slate-400 mb-2 uppercase tracking-wider">
            <span>Graph 01 // Validation Loss</span>
            <span className="text-rose-400 font-bold">{loss.toFixed(4)}</span>
          </div>
          <div className="w-full h-24 bg-slate-950 rounded border border-slate-900/80 relative overflow-hidden">
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 300 100" preserveAspectRatio="none">
              <path d={generateSvgPath('loss')} fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-900 rounded-lg p-3">
          <div className="flex justify-between text-[9px] text-slate-400 mb-2 uppercase tracking-wider">
            <span>Graph 02 // Evaluation Metric</span>
            <span className="text-cyan-400 font-bold">{(accuracy * 0.98).toFixed(4)}</span>
          </div>
          <div className="w-full h-24 bg-slate-950 rounded border border-slate-900/80 relative overflow-hidden">
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 300 100" preserveAspectRatio="none">
              <path d={generateSvgPath('eval')} fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-900 rounded-lg p-3">
          <div className="flex justify-between text-[9px] text-slate-400 mb-2 uppercase tracking-wider">
            <span>Graph 03 // F1 Accuracy Matrix</span>
            <span className="text-teal-400 font-bold">{(accuracy * 0.96).toFixed(4)}</span>
          </div>
          <div className="w-full h-24 bg-slate-950 rounded border border-slate-900/80 relative overflow-hidden">
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 300 100" preserveAspectRatio="none">
              <path d={generateSvgPath('f1')} fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-1.5 text-slate-400 select-none">
        <div className="w-full bg-slate-900 rounded-md h-2 mt-4 relative overflow-hidden border border-slate-800">
          <div 
            className="bg-gradient-to-r from-teal-500 to-cyan-500 h-full transition-all duration-150 ease-out" 
            style={{ width: `${Math.min(scrollPct * 100, 100)}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-slate-500 mt-1">
          <span>Active Data Stream Cycle</span>
          <span>{Math.floor(scrollPct * 100)}% Completed</span>
        </div>
      </div>
    </div>
  );
}