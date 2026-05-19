"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function TrainingSimulation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [epoch, setEpoch] = useState(1);
  const [loss, setLoss] = useState(0.9644);
  const [accuracy, setAccuracy] = useState(0.4521);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far down the section is relative to viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const totalHeight = rect.height + viewportHeight;
        const scrolledAmount = viewportHeight - rect.top;
        const scrollPercent = Math.min(Math.max(scrolledAmount / totalHeight, 0), 1);
        
        // Dynamically simulate model optimization metrics matching the scroll action
        const currentEpoch = Math.floor(scrollPercent * 100) + 1;
        const simulatedLoss = Math.max(0.9644 - (scrollPercent * 0.85), 0.0421);
        const simulatedAcc = Math.min(0.4521 + (scrollPercent * 0.5123), 0.9644);

        setEpoch(currentEpoch);
        setLoss(simulatedLoss);
        setAccuracy(simulatedAcc);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-slate-950 border border-slate-900 rounded-xl p-6 font-mono text-xs relative overflow-hidden shadow-2xl">
      <div className="absolute top-2 right-4 flex gap-1.5">
        <span className="w-2 h-2 rounded-full bg-red-500/60" />
        <span className="w-2 h-2 rounded-full bg-amber-500/60" />
        <span className="w-2 h-2 rounded-full bg-green-500/60 animate-pulse" />
      </div>

      <div className="text-slate-500 mb-4 border-b border-slate-900 pb-2 flex justify-between items-center">
        <span>🤖 LIVE ENGINE OPTIMIZATION RUNTIME</span>
        <span className="text-teal-400 animate-pulse">● TRAINING</span>
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

      <div className="space-y-1.5 text-slate-400 select-none">
        <p className="text-slate-500">&gt; Initializing layers: ResNet backbone + BIGRU bidirectional pipelines...</p>
        <p className="text-slate-500">&gt; Hyperparameters loaded: learning_rate=1e-4, batch_size=32</p>
        <p className="text-emerald-400/90">&gt; Epoch {epoch}: Forward propagation cycle finished successfully.</p>
        <p className="text-cyan-400/90">&gt; Backpropagation update: Gradient step optimized via Meta-Learner.</p>
        
        {/* Animated matrix loading progress bar */}
        <div className="w-full bg-slate-900 rounded-md h-2 mt-4 relative overflow-hidden border border-slate-800">
          <div 
            className="bg-gradient-to-r from-teal-500 to-cyan-500 h-full transition-all duration-150 ease-out" 
            style={{ width: `${(epoch / 100) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-slate-500 mt-1">
          <span>Iterative Validation Sequence</span>
          <span>{Math.floor((epoch / 100) * 100)}% Complete</span>
        </div>
      </div>
    </div>
  );
}