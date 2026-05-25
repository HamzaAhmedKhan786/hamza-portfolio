"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, CheckCircle, Loader2, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import LedTrainingScreen from '../components/LedTrainingScreen';
import TechStack3D from '../components/TechStack3D';

interface CareerEvent {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  metrics: string[];
}

export default function Portfolio() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [heroProgress, setHeroProgress] = useState(0);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive device verification listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px corresponds to Tailwind's md breakpoint
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial initialization check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const careerTracks: CareerEvent[] = [
    {
      period: "Oct 2022 – Feb 2026",
      role: "Software & AI/ML Engineer",
      company: "Jurasoft GmbH (RA-Micro)",
      location: "Berlin, Germany",
      summary: "Architected privacy-first intelligent systems for the German Legal Tech sector. Spearheaded real-time virtual avatar pipelines and production local LLM / RAG infrastructures.",
      metrics: [
        "Integrated Whisper AI, WebRTC, and Simli for low-latency lip-synced multi-persona avatar responses (AI Tilda, Peter, Mary).",
        "Built Jura-KI desktop application featuring local LLMs and a custom BERT-based NER engine for GDPR-compliant anonymization.",
        "Developed highly scalable RAG pipelines using OpenWebUI, FAISS, and Qdrant with class-based indexing for 8GB+ legal datasets.",
        "Automated legacy migrations by engineering a C# code converter to transition VB/VBA architectures to modern .NET networks."
      ]
    },
    {
      period: "Jan 2019 – Sep 2019",
      role: "Software Engineer",
      company: "Euronet Worldwide",
      location: "Karachi, Pakistan",
      summary: "Engineered secure high-volume transaction banking modules and structured low-latency backend transactional infrastructure reporting logs.",
      metrics: [
        "Developed secure transactional modules using ASP.NET MVC and C# with embedded real-time fraud prevention filters.",
        "Managed complex MsSQL environments utilizing custom stored procedures and triggers to process massive real-time analytical logs.",
        "Maintained 24/7 high availability across ATM and POS financial network operations through live monitoring tools."
      ]
    },
    {
      period: "Oct 2017 – Jan 2019",
      role: "Software Engineer",
      company: "SalTec Powerlink",
      location: "Karachi, Pakistan",
      summary: "Developed hardware/software configurations and remote systems tracking arrays for industrial electrical infrastructure deployments.",
      metrics: [
        "Built WPF configuration utilities from scratch for remote device optimization over industrial Wi-Fi, Ethernet, and REST/RPC layouts.",
        "Refactored real-time telemetry pipelines tracking heavy industrial systems (Grid, Genset, industrial UPS/Batteries).",
        "Formulated modular test configurations inside Agile workflows using JIRA tracking blocks to maintain target operational standards."
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const totalHeight = rect.height - window.innerHeight;
        if (totalHeight > 0) {
          const progress = Math.min(Math.max(-rect.top / totalHeight, 0), 1);
          setHeroProgress(progress);
        }
      }

      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const triggerOffset = window.innerHeight * 0.6;
        const totalHeight = rect.height;
        const relativeScroll = triggerOffset - rect.top;
        const progress = Math.min(Math.max(relativeScroll / totalHeight, 0), 1);
        setTimelineProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  // Dynamic Scroll Matrix Parsers - Applied exclusively on Desktop
  const getIdentityStyles = () => {
    if (isMobile) return {};
    if (heroProgress <= 0.20) {
      const factor = heroProgress / 0.20;
      return {
        position: 'fixed' as const,
        top: `${50 - factor * 32}%`,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center' as const,
        width: '100%',
        opacity: 1,
      };
    } else if (heroProgress > 0.20 && heroProgress <= 0.85) {
      return {
        position: 'fixed' as const,
        top: '18%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center' as const,
        width: '100%',
        opacity: 1,
      };
    } else {
      const factor = (heroProgress - 0.85) / 0.15;
      return {
        position: 'fixed' as const,
        top: '18%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center' as const,
        width: '100%',
        opacity: Math.max(0, 1 - factor * 2),
        pointerEvents: 'none' as const,
      };
    }
  };

  const getLeftCardStyles = () => {
    if (isMobile) return {};
    if (heroProgress < 0.20) {
      return { opacity: 0, transform: 'translate(-50%, -50%) scale(0.95)', left: '50%', top: '48%', position: 'fixed' as const };
    }
    if (heroProgress >= 0.20 && heroProgress <= 0.45) {
      const factor = (heroProgress - 0.20) / 0.25;
      return {
        opacity: 1,
        transform: 'translate(-50%, -50%)',
        left: `${50 - factor * 32}%`,
        top: '48%',
        position: 'fixed' as const,
      };
    }
    if (heroProgress > 0.45 && heroProgress <= 0.85) {
      return {
        opacity: 1,
        transform: 'translate(-50%, -50%)',
        left: '18%',
        top: '48%',
        position: 'fixed' as const,
      };
    }
    const factor = (heroProgress - 0.85) / 0.15;
    return {
      opacity: Math.max(0, 1 - factor * 2),
      transform: 'translate(-50%, -50%)',
      left: '18%',
      top: '48%',
      position: 'fixed' as const,
    };
  };

  const getRightCardStyles = () => {
    if (isMobile) return {};
    if (heroProgress < 0.45) {
      return { opacity: 0, transform: 'translate(-50%, -50%) scale(0.95)', left: '50%', top: '48%', position: 'fixed' as const };
    }
    if (heroProgress >= 0.45 && heroProgress <= 0.70) {
      const factor = (heroProgress - 0.45) / 0.25;
      return {
        opacity: 1,
        transform: 'translate(-50%, -50%)',
        left: `${50 + factor * 32}%`,
        top: '48%',
        position: 'fixed' as const,
      };
    }
    if (heroProgress > 0.70 && heroProgress <= 0.85) {
      return {
        opacity: 1,
        transform: 'translate(-50%, -50%)',
        left: '82%',
        top: '48%',
        position: 'fixed' as const,
      };
    }
    const factor = (heroProgress - 0.85) / 0.15;
    return {
      opacity: Math.max(0, 1 - factor * 2),
      transform: 'translate(-50%, -50%)',
      left: '82%',
      top: '48%',
      position: 'fixed' as const,
    };
  };

  const getInnovationCardStyles = () => {
    if (isMobile) return {};
    if (heroProgress < 0.70) {
      return { opacity: 0, transform: 'translate(-50%, -30%)', left: '50%', top: '65%', position: 'fixed' as const };
    }
    if (heroProgress >= 0.70 && heroProgress <= 0.85) {
      const factor = (heroProgress - 0.70) / 0.15;
      return {
        opacity: factor,
        transform: 'translate(-50%, -50%)',
        left: '50%',
        top: '65%',
        position: 'fixed' as const,
      };
    }
    if (heroProgress > 0.85 && heroProgress <= 0.90) {
      return { opacity: 1, transform: 'translate(-50%, -50%)', left: '50%', top: '65%', position: 'fixed' as const };
    }
    const factor = (heroProgress - 0.90) / 0.10;
    return {
      opacity: Math.max(0, 1 - factor * 3),
      transform: 'translate(-50%, -50%)',
      left: '50%',
      top: '65%',
      position: 'fixed' as const,
    };
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* HEADER */}
      <header className="border-b border-slate-900 bg-slate-950/95 backdrop-blur-md sticky top-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <div className="flex items-center gap-2.5 font-mono text-xs tracking-wider">
            <Terminal size={14} className="text-cyan-400" />
            <span className="font-bold text-white uppercase">HAMZA_AHMED_KHAN.sys</span>
          </div>
          <nav className="flex gap-6 font-mono text-[11px] text-slate-400">
            <a href="#core-story" className="hover:text-cyan-400 transition-colors">./Timeline</a>
            <a href="#career-work" className="hover:text-cyan-400 transition-colors">./Experience</a>
            <a href="#architecture-panel" className="hover:text-cyan-400 transition-colors">./Architecture</a>
          </nav>
        </div>
      </header>

      {/* HERO REGION BLOCK */}
      <div 
        ref={heroRef} 
        id="core-story" 
        className={`relative ${isMobile ? 'min-h-screen py-16 flex items-center' : 'h-[450vh]'} w-full bg-slate-950`}
      >
        <div className={`${isMobile ? 'relative w-full px-4' : 'sticky top-0 left-0 h-screen w-full overflow-hidden'} bg-slate-950`}>
          
          {/* Ambient Image Viewport Backdrop - Safely reverted to an img tag with explicit alt properties */}
          <img
            src="/USR2.png"
            alt="System Backdrop"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.5] md:opacity-[0.75] pointer-events-none mix-blend-normal z-0 transition-transform duration-75"
            style={isMobile ? {} : { transform: `scale(${1 + heroProgress * 0.04})` }}
          /> 
         
          {/* MOBILE CONTENT LAYOUT */}
          {isMobile ? (
            <div className="relative z-40 space-y-8 font-mono text-center pt-6 pb-12">
              <div>
                <span className="text-[10px] text-cyan-400 tracking-[0.3em] uppercase block mb-1.5">[ SYSTEM PROFILE CORE ]</span>
                <h1 className="text-3xl font-black tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(6,182,212,0.35)]">
                  Hamza Ahmed Khan
                </h1>
                <p className="text-xs text-slate-100 uppercase tracking-[0.25em] mt-2 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  AI / ML & Software Engineer
                </p>
                <div className="w-12 h-[2px] bg-cyan-500/60 mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
                <div className="bg-slate-900/90 border border-slate-800/80 p-5 rounded-xl shadow-2xl text-center">
                  <span className="text-[9px] text-cyan-500 tracking-[0.2em] uppercase mb-1 block">[ SYSTEM_TENURE ]</span>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-black text-white">5</span>
                    <span className="text-2xl font-black text-cyan-400 animate-pulse ml-0.5">+</span>
                    <span className="text-xs font-bold text-slate-400 ml-1.5 uppercase">Years</span>
                  </div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">AI & Development Ops</p>
                </div>

                <div className="bg-slate-900/90 border border-slate-800/80 p-5 rounded-xl shadow-2xl text-center">
                  <span className="text-[9px] text-teal-400 tracking-[0.2em] uppercase mb-2 block">[ CORE_SYSTEM ]</span>
                  <h3 className="text-xs font-extrabold text-white uppercase tracking-wider leading-tight">
                    Python, Next.js,<br />C# .NET & Node.js
                  </h3>
                  <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
                    Architecting privacy-first intelligence arrays and web nodes.
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-purple-900/40 p-5 rounded-xl shadow-2xl text-center">
                  <span className="text-[9px] text-purple-400 tracking-[0.25em] uppercase mb-1 block">[ SECTOR SPECIALIZATION ]</span>
                  <h3 className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 uppercase">
                    Innovation with AI
                  </h3>
                  <p className="text-[10px] text-slate-300 uppercase tracking-wider mt-0.5">German Legal Tech & RAG</p>
                  <p className="text-[10px] text-slate-400 mt-2 font-sans leading-relaxed">
                    GDPR document anonymization, custom BERT models, and class-based vector indexing.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* DESKTOP DESIGNS */
            <>
              <div style={getIdentityStyles()} className="z-40 px-4 font-mono transition-all duration-75 ease-out">
                <span className="text-[10px] text-cyan-400 tracking-[0.3em] uppercase block mb-1.5">[ SYSTEM PROFILE CORE ]</span>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(6,182,212,0.35)]">
                  Hamza Ahmed Khan
                </h1>
                <p className="text-xs md:text-sm text-slate-100 uppercase tracking-[0.25em] mt-2 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  AI / ML & Software Engineer
                </p>
                <div className="w-12 h-[2px] bg-cyan-500/60 mx-auto mt-4" />
              </div>

              <div style={getLeftCardStyles()} className="z-30 w-[26%] bg-slate-900/95 border border-slate-800/80 backdrop-blur-md rounded-xl p-5 shadow-2xl font-mono text-center transition-all duration-75 ease-out">
                <span className="text-[9px] text-cyan-500 tracking-[0.2em] uppercase mb-1 block">[ SYSTEM_TENURE ]</span>
                <div className="flex items-baseline justify-center">
                  <span className="text-6xl font-black text-white">5</span>
                  <span className="text-2xl font-black text-cyan-400 animate-pulse ml-0.5">+</span>
                  <span className="text-xs font-bold text-slate-400 ml-1.5 uppercase">Years</span>
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">AI & Development Ops</p>
              </div>

              <div style={getRightCardStyles()} className="z-30 w-[26%] bg-slate-900/95 border border-slate-800/80 backdrop-blur-md rounded-xl p-5 shadow-2xl font-mono text-center transition-all duration-75 ease-out">
                <span className="text-[9px] text-teal-400 tracking-[0.2em] uppercase mb-2 block">[ CORE_SYSTEM ]</span>
                <h3 className="text-sm font-extrabold text-white uppercase tracking-wider leading-tight">
                  Python, Next.js,<br />C# .NET & Node.js
                </h3>
                <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
                  Architecting privacy-first intelligence arrays and web nodes.
                </p>
              </div>

              <div style={getInnovationCardStyles()} className="z-30 w-[32%] bg-slate-900/95 border border-purple-900/40 backdrop-blur-md rounded-xl p-5 shadow-2xl font-mono text-center transition-all duration-75 ease-out">
                <span className="text-[9px] text-purple-400 tracking-[0.25em] uppercase mb-1 block">[ SECTOR SPECIALIZATION ]</span>
                <h3 className="text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 uppercase">
                  Innovation with AI
                </h3>
                <p className="text-[10px] text-slate-300 uppercase tracking-wider mt-0.5">German Legal Tech & RAG</p>
                <p className="text-[10px] text-slate-400 mt-2 font-sans leading-relaxed">
                  GDPR document anonymization, custom BERT models, and class-based vector indexing.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="relative z-50 bg-slate-950 border-t border-slate-900/60">
        
        {/* TIMELINE SECTION ELEMENT */}
        <section id="career-work" ref={timelineRef} className="max-w-5xl mx-auto px-4 py-24 relative">
          <div className="text-center mb-16 font-mono">
            <div className="text-[10px] text-cyan-400 tracking-[0.2em] uppercase mb-2">[ HISTORICAL LEDGER ]</div>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">My Career and Work</h2>
            <p className="text-xs text-slate-500 mt-1">Tracing engineering milestones & corporate history.</p>
          </div>

          <div className="relative w-full">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-900 -translate-x-1/2 z-0" />
            
            <div 
              style={{ height: `${timelineProgress * 100}%` }}
              className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-teal-400 to-emerald-400 -translate-x-1/2 z-10 origin-top shadow-[0_0_12px_#14b8a6]"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-teal-300 shadow-[0_0_15px_#22d3ee] animate-ping" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#fff]" />
            </div>

            <div className="space-y-12 relative z-20">
              {careerTracks.map((event, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className={`flex flex-col md:flex-row w-full ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                    <div className="w-full md:w-[46%] font-mono">
                      <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl backdrop-blur-sm">
                        <span className="text-[9px] text-cyan-400 bg-cyan-950/60 border border-cyan-900/60 px-2 py-0.5 rounded font-bold">
                          {event.period}
                        </span>
                        <h3 className="text-base font-black text-white uppercase mt-3">{event.role}</h3>
                        <div className="flex flex-col sm:flex-row sm:justify-between text-[11px] text-slate-400 font-medium mb-2 gap-1 sm:gap-0">
                          <span>{event.company}</span>
                          <span className="text-slate-500">{event.location}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-sans leading-relaxed mb-4">{event.summary}</p>
                        
                        <div className="border-t border-slate-900/80 pt-3 space-y-2">
                          {event.metrics.map((metric, mi) => (
                            <div key={mi} className="flex gap-2 items-start text-[10px]">
                              <ChevronRight size={12} className="text-teal-400 shrink-0 mt-0.5" />
                              <span className="font-sans text-slate-400">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block w-[8%]" />
                    <div className="w-full md:w-[46%]" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TECH STACK INTERACTIVE SECTION BLOCK */}
        <section id="architecture-panel" className="max-w-6xl mx-auto px-4 py-16">
          <TechStack3D />
        </section>

        {/* TELEMETRY SECTION BLOCK */}
        <section className="max-w-6xl mx-auto px-4 py-16 space-y-8">
          <div className="text-center font-mono">
            <div className="text-[10px] text-purple-400 tracking-[0.2em] uppercase mb-2">[ RESEARCH HUD & HARDWARE TELEMETRY ]</div>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">Enterprise Deployment Telemetry</h2>
          </div>
          <LedTrainingScreen />
        </section>

        {/* PERSONAL METADATA HUD BAR */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center font-mono text-[11px] border-t border-b border-slate-900/60 text-slate-400 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-4 bg-slate-900/20 rounded-xl">
            <MapPin size={16} className="text-cyan-400 mb-1" />
            <span className="font-bold text-white text-xs mb-0.5">Location Base</span>
            <span>Berlin, Germany</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-900/20 rounded-xl">
            <Phone size={16} className="text-teal-400 mb-1" />
            <span className="font-bold text-white text-xs mb-0.5">Telecom Node</span>
            <span>+4917661967247</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-900/20 rounded-xl">
            <Terminal size={16} className="text-purple-400 mb-1" />
            <span className="font-bold text-white text-xs mb-0.5">Languages Spoken</span>
            <span>English (C1) // German (A2/B1)</span>
          </div>
        </section>

        {/* SECURE PACKET HANDSHAKE RECEPTACLE CONTACT PANEL */}
        <section className="max-w-xl mx-auto px-4 py-20 font-mono">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase mb-4 tracking-widest">
              <Terminal size={14} />
              <span>[ SECURE SYSTEM HANDSHAKE ]</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-6 pb-5 border-b border-slate-900 text-center sm:text-left">
              <a href="mailto:hamykhan786@gmail.com" className="text-slate-400 hover:text-cyan-400 flex items-center gap-1.5 transition-colors text-xs">
                <Mail size={14} /> hamykhan786@gmail.com
              </a>
              <div className="flex gap-6">
                <a href="https://linkedin.com/in/hamy-khan-0a9b5275" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 flex items-center gap-1.5 transition-colors text-xs">
                  <Terminal size={14} className="text-blue-400" /> LinkedIn
                </a>
                <a href="https://github.com/HamzaAhmedKhan786" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 flex items-center gap-1.5 transition-colors text-xs">
                  <Terminal size={14} className="text-purple-400" /> GitHub
                </a>
              </div>
            </div>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input 
                type="email" 
                placeholder="client@enterprise.domain" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full px-4 py-3 bg-slate-950 border border-slate-900 rounded-xl text-slate-100 focus:outline-none focus:border-cyan-500 text-sm placeholder-slate-700 font-mono" 
              />
              <textarea 
                rows={4} 
                placeholder="Define project parameters, vector pipeline criteria, or handshake parameters..." 
                required 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                className="w-full px-4 py-3 bg-slate-950 border border-slate-900 rounded-xl text-slate-100 focus:outline-none focus:border-cyan-500 text-sm resize-none placeholder-slate-700 font-mono" 
              />
              <button type="submit" className="w-full py-3 px-4 bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-white font-medium rounded-xl transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg">
                {status === 'loading' ? <Loader2 size={14} className="animate-spin text-cyan-400" /> : <CheckCircle size={14} />}
                {status === 'success' ? 'Transmission Complete' : 'Transmit Packet Loop'}
              </button>
            </form>
          </div>
        </section>

        <footer className="border-t border-slate-900 py-8 text-center text-[10px] font-mono text-slate-600 tracking-wider">
          HAMZA_AHMED_KHAN © {new Date().getFullYear()} // CHANNELS RUNTIME SECURED
        </footer>
      </div>

    </div>
  );
}