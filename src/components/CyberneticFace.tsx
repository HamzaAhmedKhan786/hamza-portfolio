"use client";

import React, { useState } from 'react';

export default function CyberneticFace() {
  const [imageError, setImageError] = useState(false);

  const statsPoints = [
    { label: "BERT Anonymizer Matrix", value: "99.37% Accuracy", top: "14%", left: "6%", theme: "border-cyan-500/40 text-cyan-400" },
    { label: "German LeoLM Platform", value: "96.82% Alignment", top: "28%", right: "8%", theme: "border-blue-500/40 text-blue-400" },
    { label: "ECG Classification Node", value: "92.86% Validation", top: "78%", left: "8%", theme: "border-purple-500/40 text-purple-400" }
  ];

  return (
    <div className="w-full h-full relative flex items-center justify-center bg-slate-950">
      {/* Structural Tracking HUD Header */}
      <div className="absolute top-4 left-5 text-[10px] font-mono text-slate-500 tracking-widest uppercase z-30 pointer-events-none flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
        Neural Core Telemetry Window // Connected
      </div>

      {/* FLOATING PERFORMANCE DATA CALLOUTS */}
      {statsPoints.map((node, idx) => (
        <div
          key={idx}
          style={{ position: 'absolute', top: node.top, left: node.left, right: node.right, zIndex: 25 }}
          className="pointer-events-none font-mono text-[10px] tracking-wider select-none"
        >
          <div className={`bg-slate-950/95 backdrop-blur-md p-2 border ${node.theme.split(' ')[0]} rounded-md shadow-xl max-w-[190px]`}>
            <div className="text-slate-400 text-[9px] block uppercase opacity-75">{node.label}</div>
            <div className={`font-bold mt-0.5 ${node.theme.split(' ')[1]}`}>{node.value}</div>
          </div>
        </div>
      ))}

      {/* GRADIENT SHIELD: BLENDS WHITE ROBOT INTO THE DARK THEME HOVER MATRIX */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30 opacity-100 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-100 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-cyan-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

      {/* SEAMLESS 3D STYLE BACKDROP IMAGE ENGINE */}
      {!imageError ? (
        <img 
          src="/AI-robot.jpg" 
          alt="Optimized AI Cybernetic Core Asset Viewport" 
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center absolute inset-0 scale-100 group-hover:scale-103 transition-transform duration-1000 ease-out z-0"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 font-mono text-xs p-6 text-center space-y-2 bg-slate-900/40 border border-dashed border-slate-900 m-4 rounded-xl">
          <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500">🤖</div>
          <p className="text-slate-300 font-bold">Image Resolution Path Redirect</p>
          <p className="text-[10px] text-slate-500 max-w-xs">Drop your custom white robot image file inside your project path at:<br/><span className="text-cyan-500">public/AI-robot.jpg</span></p>
        </div>
      )}
    </div>
  );
}