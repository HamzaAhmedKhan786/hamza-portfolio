"use client";

import React, { useState } from 'react';
import { Terminal, CheckCircle, Loader2, Cpu, Shield, Database, Radio, Brain } from 'lucide-react';

// Foolproof relative imports to prevent Vercel path-alias lookup crashes
import TechStack3D from '../components/TechStack3D';
import CyberneticFace from '../components/CyberneticFace';
import LedTrainingScreen from '../components/LedTrainingScreen';

export default function Portfolio() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* HEADER BAR */}
      <header className="border-b border-slate-900 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center font-mono font-bold text-slate-950 text-sm shadow-md">
              HZ
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight block text-white">Hamza Zaidi</span>
              <span className="text-[10px] font-mono text-slate-400 block tracking-wider uppercase">AI Engineering Node // Berlin</span>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-xs font-mono text-slate-400">
            <a href="#expertise" className="hover:text-teal-400 transition-colors">/Expertise</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">/Case_Studies</a>
            <a href="#connect" className="hover:text-teal-400 transition-colors">/Uplink</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10 space-y-20">
        
        {/* HERO CONTAINERS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-[10px] font-mono text-teal-400 uppercase tracking-wider">
              <Radio size={12} className="animate-pulse" /> Core System Protocol: Active
            </div>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-none">
              Building Privacy-First <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">AI & Intelligent Systems</span>
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              AI/ML & Software Engineer specializing in high-performance RAG pipelines, custom NLP models, and secure enterprise integrations with strict compliance footprints.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#projects" className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-slate-950 text-xs font-mono tracking-wider uppercase font-bold rounded-lg hover:brightness-110 transition-all shadow-lg shadow-teal-500/10">
                View Case Studies
              </a>
              <a href="#connect" className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-mono tracking-wider uppercase rounded-lg transition-all">
                Execute Handshake
              </a>
            </div>
            
            <TechStack3D />
          </div>

          <div className="lg:col-span-7">
            <CyberneticFace />
          </div>
        </section>

        {/* CORE TECHNICAL EXPERTISE PILLARS */}
        <section id="expertise" className="space-y-6 scroll-mt-20">
          <div className="border-b border-slate-900 pb-4">
            <span className="text-[10px] font-mono text-teal-500 uppercase tracking-widest block font-bold">// Capability Parameters</span>
            <h2 className="text-xl font-bold text-white mt-0.5">Core Technical Pillars</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-900/20 border border-slate-900 rounded-xl space-y-3 hover:border-slate-800 transition-all">
              <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                <Brain size={18} />
              </div>
              <h3 className="text-sm font-bold text-white">AI & NLP Engineering</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Custom BERT models optimized for GDPR-compliant data masking loops, German LeoLM parameter fine-tuning, and robust open-source LLM local infrastructure orchestration.
              </p>
            </div>

            <div className="p-6 bg-slate-900/20 border border-slate-900 rounded-xl space-y-3 hover:border-slate-800 transition-all">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                <Database size={18} />
              </div>
              <h3 className="text-sm font-bold text-white">Advanced RAG Architectures</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                High-performance transactional vector pipelines (Qdrant, FAISS) designed to process, partition, and retrieve deep contextual trees across 8GB+ corporate file sets.
              </p>
            </div>

            <div className="p-6 bg-slate-900/20 border border-slate-900 rounded-xl space-y-3 hover:border-slate-800 transition-all">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                <Cpu size={18} />
              </div>
              <h3 className="text-sm font-bold text-white">Systems Modernization</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Assembling scalable backends, real-time audio networks (WebRTC/Whisper), and parsing legacy system syntax trees for zero-downtime migrations to .NET Core layers.
              </p>
            </div>
          </div>
        </section>

        {/* DATA MONITOR RUNTIME LOG SCREEN */}
        <section className="space-y-4">
          <h2 className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">// Neural Pipeline Monitor Relay</h2>
          <LedTrainingScreen />
        </section>

        {/* COMPREHENSIVE RECRUITER CASE STUDIES MATRIX */}
        <section id="projects" className="space-y-8 scroll-mt-20">
          <div className="border-b border-slate-900 pb-4">
            <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest block font-bold">// Architectural Vault</span>
            <h2 className="text-xl font-bold text-white mt-0.5">Featured Systems Case Studies</h2>
            <div className="mt-4 p-3 bg-slate-900/40 border border-slate-900 rounded-lg text-xs text-slate-400 flex items-start gap-3">
              <Shield size={16} className="text-cyan-500 shrink-0 mt-0.5" />
              <span>
                <strong>NDA Protection Matrix:</strong> Due to proprietary security agreements within corporate Legal Tech and FinTech nodes, specific underlying business source paths are protected. Systems are showcased via detailed structural data routing flow descriptions.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* CASE STUDY 1: JURA-KI */}
            <div className="p-6 bg-slate-900/10 border border-slate-900 rounded-xl flex flex-col justify-between space-y-6 hover:border-slate-800/80 transition-all group relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono bg-teal-500/10 border border-teal-500/20 text-teal-400 px-2 py-0.5 rounded">Legal Tech Core</span>
                  <span className="text-xs font-mono text-slate-600 group-hover:text-slate-500 transition-colors">Node_01 // Jura-KI</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-teal-400 transition-colors">
                  Privacy-First Legal AI Engine
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A high-security local desktop sandbox utilizing isolated localized LLMs and custom tailored BERT models to completely automate GDPR-compliant legal document scrubbing.
                </p>
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] text-slate-300 font-medium font-mono">&gt; Engineering Benchmarks:</div>
                  <p className="text-xs text-slate-400 pl-3 border-l border-slate-800">Built recursive semantic text chunking loops for 8GB+ deep sets and securely deployed to target endpoints via hash-verified modular delivery layouts.</p>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">BERT</span>
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">Qdrant Node</span>
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">OpenWebUI</span>
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">Turbo.net</span>
              </div>
            </div>

            {/* CASE STUDY 2: AVATAR PLATFORM */}
            <div className="p-6 bg-slate-900/10 border border-slate-900 rounded-xl flex flex-col justify-between space-y-6 hover:border-slate-800/80 transition-all group relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded">Multimedia AI</span>
                  <span className="text-xs font-mono text-slate-600 group-hover:text-slate-500 transition-colors">Node_02 // Live_Agent</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  Low-Latency Interactive Avatar Node
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Multi-persona conversational AI assistants structured to run natively inside video streaming environments with ultra-low latency text-to-speech audio rendering.
                </p>
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] text-slate-300 font-medium font-mono">&gt; Engineering Benchmarks:</div>
                  <p className="text-xs text-slate-400 pl-3 border-l border-slate-800">Designed a custom bridge architecture connecting asynchronous AI model pipelines into high-throughput live WebRTC video data streaming matrices.</p>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">Next.js</span>
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">WebRTC</span>
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">Whisper AI</span>
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">Simli Matrix</span>
              </div>
            </div>

            {/* CASE STUDY 3: ECG ARRHYTHMIA CLASSIFICATION */}
            <div className="p-6 bg-slate-900/10 border border-slate-900 rounded-xl flex flex-col justify-between space-y-6 hover:border-slate-800/80 transition-all group relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2 py-0.5 rounded">Bioinformatics</span>
                  <span className="text-xs font-mono text-slate-600 group-hover:text-slate-500 transition-colors">Node_03 // Signal_ML</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  AI-Driven ECG Arrhythmia Classifier
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deep learning consultation and network optimization engineering for processing high-fidelity continuous physiological clinical data vectors.
                </p>
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] text-slate-300 font-medium font-mono">&gt; Engineering Benchmarks:</div>
                  <p className="text-xs text-slate-400 pl-3 border-l border-slate-800">Implemented an advanced Logistic Regression meta-learner pattern to override high data imbalances, unlocking 92.86% model accuracy and a 0.9644 AUC.</p>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">ResNet</span>
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">CNN-BIGRU</span>
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">Attention Layers</span>
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">Scikit</span>
              </div>
            </div>

            {/* CASE STUDY 4: LEGACY CODE CONVERTER */}
            <div className="p-6 bg-slate-900/10 border border-slate-900 rounded-xl flex flex-col justify-between space-y-6 hover:border-slate-800/80 transition-all group relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono bg-purple-500/10 border border-purple-500/20 text-purple-400 px-2 py-0.5 rounded">Compilers / Systems</span>
                  <span className="text-xs font-mono text-slate-600 group-hover:text-slate-500 transition-colors">Node_04 // Transpiler</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-purple-400 transition-colors">
                  Automated Legacy Syntax Transpiler Engine
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A high-speed industrial compiler transformation tool designed to break down and map legacy VB/VBA scripts securely into clean, modern .NET Core.
                </p>
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] text-slate-300 font-medium font-mono">&gt; Engineering Benchmarks:</div>
                  <p className="text-xs text-slate-400 pl-3 border-l border-slate-800">Engineered a custom rule tree parser using Roslyn Abstract Syntax Trees (AST) to validate structural equivalence and data flow logic types automatically.</p>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">C#</span>
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">.NET Core</span>
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">Roslyn AST</span>
                <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800/50">Lexer Parsing</span>
              </div>
            </div>

          </div>
        </section>

        {/* SECURE CONNECTION FORMS */}
        <section id="connect" className="max-w-xl mx-auto pt-4 scroll-mt-20">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-900 rounded-xl p-6 md:p-8 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full filter blur-xl pointer-events-none" />
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest pb-2 border-b border-slate-900">
              <Terminal size={16} />
              <span>stewardship_handshake.sh</span>
            </div>
            <h3 className="text-base font-bold text-white">Initialize Endpoint Uplink</h3>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input 
                type="email" 
                placeholder="your.email@enterprise.com" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full px-4 py-3 bg-slate-900/60 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-teal-500 text-sm font-sans placeholder-slate-600" 
              />
              <textarea 
                rows={4} 
                placeholder="Specify infrastructure scale parameters or scheduling variables..." 
                required 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                className="w-full px-4 py-3 bg-slate-900/60 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-teal-500 text-sm font-sans resize-none placeholder-slate-600" 
              />
              <button 
                type="submit" 
                className="w-full py-3 px-4 bg-slate-900 border border-slate-800 hover:border-teal-500/50 text-slate-200 hover:text-white font-medium rounded-lg transition-all text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2"
              >
                {status === 'loading' ? <Loader2 size={14} className="animate-spin text-teal-400" /> : <CheckCircle size={14} />}
                {status === 'success' ? 'Connection Registered' : status === 'error' ? 'Connection Error' : 'Execute Handshake'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900 bg-slate-950/40 py-8 text-center text-[10px] font-mono text-slate-600 tracking-wider uppercase">
        &copy; {new Date().getFullYear()} Hamza Zaidi // Systems Protected. Fully GDPR Compliant — Zero Tracking Enabled.
      </footer>
    </div>
  );
}