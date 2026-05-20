"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import TrainingSimulation from './TrainingSimulation';

function MatrixGridPoints({ speedMultiplier = 1.0 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const total = 1000;

  const particleCoordinates = React.useMemo(() => {
    const coords = new Float32Array(total * 3);
    for (let i = 0; i < total; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 4.5;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 2.5;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
    }
    return coords;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05 * speedMultiplier;
    pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.02 * speedMultiplier;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particleCoordinates, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#14b8a6" transparent opacity={0.5} blending={THREE.AdditiveBlending} />
    </points>
  );
}

export default function LedTrainingScreen() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      
      {/* SCREENS 1, 2, 3: Dynamic Multi-Line Graph Performance Cluster */}
      <div className="md:col-span-2 lg:col-span-3">
        <TrainingSimulation />
      </div>

      {/* MONITOR 4: BERT ANONYMIZER COMPUTE ENGINE */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 h-60 flex flex-col justify-between shadow-xl">
        <div className="w-full h-32 bg-slate-950 rounded-lg overflow-hidden">
          <Canvas camera={{ position: [0, 0, 1.8] }}>
            <MatrixGridPoints speedMultiplier={1.3} />
          </Canvas>
        </div>
        <div className="font-mono text-[10px] space-y-0.5">
          <div className="text-cyan-400 font-bold flex items-center justify-between">
            <span>[MONITOR_NODE_04]</span>
            <span className="text-emerald-400 animate-pulse">● ACTIVE</span>
          </div>
          <p className="text-slate-400">&gt; Core Model: Custom BERT-NER Pipeline</p>
          <p className="text-slate-500">&gt; Status: 99.37% Target Precision</p>
        </div>
      </div>

      {/* MONITOR 5: GERMAN LEOLM FOUNDATION NODE */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 h-60 flex flex-col justify-between shadow-xl">
        <div className="w-full h-32 bg-slate-950 rounded-lg overflow-hidden">
          <Canvas camera={{ position: [0, 0, 1.8] }}>
            <MatrixGridPoints speedMultiplier={0.7} />
          </Canvas>
        </div>
        <div className="font-mono text-[10px] space-y-0.5">
          <div className="text-blue-400 font-bold flex items-center justify-between">
            <span>[MONITOR_NODE_05]</span>
            <span className="text-cyan-400">READY</span>
          </div>
          <p className="text-slate-400">&gt; Model Alignment: German LeoLM Base</p>
          <p className="text-slate-500">&gt; Parameter Status: Strict Validation Passed</p>
        </div>
      </div>

      {/* MONITOR 6: METRICS MATRIX AGGREGATOR */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 h-60 flex flex-col justify-between shadow-xl">
        <div className="w-full h-32 bg-slate-950 rounded-lg overflow-hidden">
          <Canvas camera={{ position: [0, 0, 1.8] }}>
            <MatrixGridPoints speedMultiplier={2.0} />
          </Canvas>
        </div>
        <div className="font-mono text-[10px] space-y-0.5">
          <div className="text-purple-400 font-bold flex items-center justify-between">
            <span>[MONITOR_NODE_06]</span>
            <span className="text-purple-400 animate-pulse">POLLING</span>
          </div>
          <p className="text-slate-400">&gt; Process Task: ECG Pattern Classifier</p>
          <p className="text-slate-500">&gt; Sync Array: 92.86% Metric Accuracy</p>
        </div>
      </div>

      {/* MONITOR 7: SECURITY LOG NODE */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 h-52 flex flex-col justify-between font-mono text-[11px] shadow-xl">
        <div className="text-emerald-400 font-bold flex justify-between border-b border-slate-800 pb-1.5">
          <span>[MONITOR_NODE_07] // CRYPTO</span>
          <span className="text-emerald-400">ENFORCED</span>
        </div>
        <div className="space-y-1 text-slate-400 my-2">
          <p>&gt; Data Loop Policy: Redact PII Metrics</p>
          <p>&gt; Compliance Engine: Active Secure Guard</p>
          <div className="w-full bg-slate-950 h-2 rounded overflow-hidden mt-3 border border-slate-800">
            <div className="w-[94%] h-full bg-emerald-500" />
          </div>
        </div>
        <div className="text-[9px] text-slate-500 text-right">GDPR_COMPLIANCE // LOCKED</div>
      </div>

      {/* MONITOR 8: HIGH-SPEED VECTOR DATASTORE */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 h-52 flex flex-col justify-between font-mono text-[11px] shadow-xl">
        <div className="text-cyan-400 font-bold flex justify-between border-b border-slate-800 pb-1.5">
          <span>[MONITOR_NODE_08] // QDRANT</span>
          <span className="text-emerald-400">ONLINE</span>
        </div>
        <div className="space-y-1 text-slate-400 my-2">
          <p>&gt; Dimension Layout Matrix: 1536 Index</p>
          <p>&gt; Similarity Space Rules: Cosine Delta</p>
          <div className="w-full bg-slate-950 h-2 rounded overflow-hidden mt-3 border border-slate-800">
            <div className="w-[85%] h-full bg-cyan-500" />
          </div>
        </div>
        <div className="text-[9px] text-slate-500 text-right">VECTOR_ENGINE // STATUS_OK</div>
      </div>

      {/* MONITOR 9: API ROUTER RELAY GATEWAY */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 h-52 flex flex-col justify-between font-mono text-[11px] shadow-xl">
        <div className="text-purple-400 font-bold flex justify-between border-b border-slate-800 pb-1.5">
          <span>[MONITOR_NODE_09] // WEB_RTC</span>
          <span className="text-amber-400">STREAMING</span>
        </div>
        <div className="space-y-1 text-slate-400 my-2">
          <p>&gt; Audio Pipeline: Whisper Live Node</p>
          <p>&gt; Outbound Frame Relays: Stable Loop</p>
          <div className="w-full bg-slate-950 h-2 rounded overflow-hidden mt-3 border border-slate-800">
            <div className="w-[73%] h-full bg-purple-500" />
          </div>
        </div>
        <div className="text-[9px] text-slate-500 text-right">TRAFFIC_GATEWAY // 200_OK</div>
      </div>

    </div>
  );
}