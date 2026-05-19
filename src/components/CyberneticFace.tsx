"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CyberneticFace() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize values between -15 and 15 for a subtle parallax movement
      const x = ((e.clientX / innerWidth) - 0.5) * 30;
      const y = ((e.clientY / innerHeight) - 0.5) * 30;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isClient) {
    return <div className="w-full h-[540px] bg-slate-950/50 rounded-2xl border border-slate-900" />;
  }

  // Floating technology labels with specific absolute vector positions
  const customLabels = [
    { text: "BERT Anonymization", top: "12%", left: "8%", color: "text-teal-400", delay: 0 },
    { text: "German LeoLM Tuning", top: "22%", right: "12%", color: "text-cyan-400", delay: 0.2 },
    { text: "Whisper AI Avatar", top: "72%", left: "10%", color: "text-blue-400", delay: 0.4 },
    { text: "ECG Classification", top: "82%", right: "15%", color: "text-indigo-400", delay: 0.6 }
  ];

  return (
    <div className="w-full h-[540px] bg-slate-950/40 border border-slate-900 rounded-2xl relative overflow-hidden shadow-2xl flex items-center justify-center group">
      {/* HUD System Overlay Status Line */}
      <div className="absolute top-4 left-5 text-[10px] font-mono text-slate-500 tracking-widest uppercase z-30 pointer-events-none flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        Vector Profile Node // Rendering Mode Stabilized
      </div>

      {/* BACKGROUND DECORATIVE RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.06),transparent_65%)] pointer-events-none" />

      {/* ================= DATA INTERACTIVE FLOATING LABELS ================= */}
      {customLabels.map((label, idx) => (
        <motion.div
          key={idx}
          style={{ 
            position: 'absolute',
            top: label.top,
            left: label.left,
            right: label.right,
            zIndex: 20
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: label.delay }}
          className="pointer-events-none font-mono text-xs font-bold tracking-wider"
        >
          <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 border border-slate-800/80 rounded-md shadow-lg">
            <span className={`w-1 h-1 rounded-full ${label.color === 'text-teal-400' ? 'bg-teal-400' : 'bg-cyan-400'}`} />
            <span className={label.color}>{label.text}</span>
          </div>
        </motion.div>
      ))}

      {/* ================= VECTOR ROBOT CORE DISPLAY ENGINE ================= */}
      <motion.div
        animate={{ 
          x: mousePos.x, 
          y: mousePos.y,
          rotateY: mousePos.x * 0.2,
          rotateX: -mousePos.y * 0.2
        }}
        transition={{ type: "spring", damping: 15, stiffness: 120 }}
        className="w-72 h-96 relative flex items-center justify-center select-none"
        style={{ perspective: 1000 }}
      >
        {/* Sleek Cinematic Robot Profile Outline Face Overlay */}
        <svg 
          viewBox="0 0 200 260" 
          className="w-full h-full drop-shadow-[0_0_35px_rgba(6,182,212,0.15)]"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Solid Translucent Skull Structure Platelayer */}
          <path 
            d="M 170 60 
               C 185 10, 100 8, 70 30 
               C 45 50, 42 90, 35 120 
               C 28 150, 20 165, 15 180
               C 10 195, 25 215, 45 225
               C 65 235, 105 240, 125 200
               C 135 180, 140 120, 170 60 Z" 
            fill="url(#porcelainGradient)" 
            stroke="rgba(6, 182, 212, 0.4)"
            strokeWidth="1.5"
          />

          {/* Contrasting Inner Jaw Plate Segment Split Line */}
          <path 
            d="M 45 225 C 60 210, 95 210, 110 205 C 115 215, 120 220, 105 233 C 90 240, 65 235, 45 225 Z" 
            fill="#0f172a" 
            stroke="rgba(6, 182, 212, 0.3)" 
            strokeWidth="1"
          />

          {/* Deep cybernetic mechanical neck pillar segment support */}
          <path 
            d="M 90 225 L 85 260 L 125 260 L 115 205 Z" 
            fill="#1e293b" 
            stroke="rgba(51, 65, 85, 0.8)" 
            strokeWidth="1"
          />

          {/* Distinct Deep Sci-Fi Glowing Cyan Eye Ring */}
          <circle 
            cx="62" 
            cy="110" 
            r="8" 
            fill="#22d3ee" 
            className="animate-pulse"
            style={{ filter: 'drop-shadow(0px 0px 8px #06b6d4)' }}
          />

          {/* Internal Matrix Node Circuit Wire traces */}
          <path 
            d="M 62 110 L 110 75 L 145 115" 
            stroke="rgba(34, 211, 238, 0.25)" 
            strokeWidth="1.5" 
            strokeDasharray="4 3"
          />
          <path 
            d="M 110 75 L 125 155" 
            stroke="rgba(34, 211, 238, 0.15)" 
            strokeWidth="1" 
          />

          {/* Color Gradients Definition Space */}
          <defs>
            <linearGradient id="porcelainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#0f172a" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#020617" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Outer ambient light ray ring surrounding the mask plate */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/10 scale-95 pointer-events-none group-hover:scale-105 transition-transform duration-700" />
      </motion.div>
    </div>
  );
}