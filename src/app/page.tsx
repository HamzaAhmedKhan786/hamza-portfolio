"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Terminal, CheckCircle, Loader2, ChevronRight, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
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

interface Project {
  period: string;
  title: string;
  description: string;
  stack: string[];
  href?: string;
  result?: string;
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const backgroundPanels = [
  "/panel-ai-core.webp",
  "/panel-model-training.webp",
  "/panel-rag-agents.webp",
  "/panel-computer-vision.webp",
  "/panel-system-architecture.webp",
];

export default function Portfolio() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const timelineRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const telemetryRef = useRef<HTMLElement>(null);
  const architectureRef = useRef<HTMLElement>(null);
  const [backgroundStage, setBackgroundStage] = useState(0);
  const [timelineProgress, setTimelineProgress] = useState(0);

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
        "Fine-tuned LeoLM and Llama 3.2 with PEFT, LoRA, and quantization; built structured legal information extraction and document classification workflows.",
        "Developed Outlook add-ins with MAUI and Blazor, and packaged on-device AI for secure offline inference.",
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

  const projects: Project[] = [
    {
      period: "Jul 2026 - Present",
      title: "Legal AI Pattern Drafting Studio",
      description: "Actively developed full-stack drafting system that learns reusable patterns from approved legal documents, retrieves scoped grounding material, generates and critiques drafts, validates official sources, and routes results to lawyer review.",
      stack: ["Python", "FastAPI", "React", "PostgreSQL", "RAG", "Agent Security"],
      href: "https://github.com/HamzaAhmedKhan786/legal-pattern-learning-agent",
      result: "Active development · approximately 80% production-ready",
      screenshot: {
        src: "/projects/legal-ai-workspace.png",
        alt: "Legal AI Pattern Drafting Studio workspace with source learning and structured case facts",
        width: 1265,
        height: 1957,
      },
    },
    {
      period: "Jun 2026 - Present",
      title: "AgentForge OS",
      description: "Continuously developed and tested full-stack platform for governed software-development workflows with specialized architect, frontend, backend, database, security, QA, DevOps, auditor, and judge agents.",
      stack: ["Next.js", "FastAPI", "PostgreSQL", "Ollama", "Redis", "Kubernetes"],
      result: "Ongoing development and continuous testing",
      screenshot: {
        src: "/projects/agentforge-dashboard.png",
        alt: "AgentForge OS dashboard showing its project creation and agent selection workflow",
        width: 1913,
        height: 942,
      },
    },
    {
      period: "2025 - 2026",
      title: "ECG Arrhythmia Classification",
      description: "Volunteer research contribution optimizing a multi-layer ensemble of ResNet, CNN-BiGRU-Attention, and XGBoost for clinical ECG classification.",
      stack: ["PyTorch", "XGBoost", "Ensemble ML", "PTB-XL"],
      result: "92.86% accuracy · 0.9644 AUC",
    },
    {
      period: "Open source",
      title: "Enterprise Cortex RAG Platform",
      description: "Enterprise knowledge platform for grounded retrieval, document intelligence, and local-first AI workflows.",
      stack: ["RAG", "Local LLMs", "Vector Search", "Knowledge Management"],
      href: "https://github.com/HamzaAhmedKhan786/enterprise-cortex-rag-platform",
    },
    {
      period: "Open source",
      title: "EchoLearn AI",
      description: "Educational AI assistant built around local models, retrieval-augmented generation, and intelligent learning workflows.",
      stack: ["Educational AI", "Local AI", "RAG", "Learning Systems"],
      href: "https://github.com/HamzaAhmedKhan786/echolearn-ai",
    },
    {
      period: "2019 · Euronet Worldwide · Financial Technology / Fraud Prevention",
      title: "FACE – Fraud Detection & Card Protection",
      description: "Card transactions needed rapid detection of suspicious activity while limiting risk to customers and banks. Worked on FACE, a deterministic rule-based fraud detection and card protection system that checked transactions against predefined rules and previous cardholder activity. Suspicious behavior could trigger an alert, automatic card blocking when required, and escalation to the bank. An authorized bank representative reviewed the case with the customer before a blocked card could be restored.",
      stack: ["C#", "ASP.NET MVC", "MS SQL", "Stored Procedures", "Database Triggers", "Rule-Based Fraud Detection", "Transaction Monitoring", "Card Security", "ATM/POS Systems"],
      result: "Automated fraud response with human verification before unblocking; not an LLM or generative-AI system.",
    },
    {
      period: "2024 - 2025",
      title: "Autonomous Formula F1 Perception",
      description: "Real-time computer-vision pipeline for cone, boundary, and trajectory detection in autonomous racing applications.",
      stack: ["YOLOv8", "OpenCV", "Object Detection", "Autonomous Systems"],
    },
    {
      period: "2023 - 2024",
      title: "Automated License Plate Recognition",
      description: "Localized vehicle license-plate recognition system engineered and deployed for Pakistani registration plates.",
      stack: ["YOLOv5", "Computer Vision", "ALPR", "Model Deployment"],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const careerTop = timelineRef.current?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const projectsTop = projectsRef.current?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const telemetryTop = telemetryRef.current?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const architectureTop = architectureRef.current?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const trigger = window.innerHeight * 0.55;
      setBackgroundStage(
        architectureTop <= trigger
          ? 4
          : telemetryTop <= trigger
            ? 3
            : projectsTop <= trigger
              ? 2
              : careerTop <= trigger
                ? 1
                : 0
      );

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
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">

      <div className="fixed inset-0 z-0 overflow-hidden bg-slate-950" aria-hidden="true">
        {backgroundPanels.map((panel, index) => (
          <div
            key={panel}
            className="portfolio-background-panel absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${panel})`,
              opacity: backgroundStage === index ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-950/25 to-slate-950/90" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 px-4 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 font-mono text-xs tracking-wider">
            <Terminal size={14} className="text-cyan-400" />
            <span className="font-bold uppercase text-white">Hamza Ahmed Khan</span>
          </div>
          <nav aria-label="Main navigation" className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs text-slate-300 sm:w-auto">
            <a href="#career-work" className="transition-colors hover:text-cyan-300">Experience</a>
            <a href="#selected-projects" className="transition-colors hover:text-cyan-300">Projects</a>
            <a href="#architecture-panel" className="transition-colors hover:text-cyan-300">Skills</a>
            <a href="#contact" className="transition-colors hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </header>

      <main>
      <section id="core-story" className="relative z-20 flex min-h-[calc(100svh-7rem)] items-center justify-center px-4 py-16 sm:min-h-[calc(100svh-4rem)]">
        <div className="w-full max-w-4xl rounded-3xl border border-cyan-300/20 bg-slate-950/75 p-7 text-center shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-12">
          <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300">Berlin-based AI & software engineer</span>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">Hamza Ahmed Khan</h1>
          <p className="mt-4 text-base font-semibold text-cyan-100 md:text-xl">Building trustworthy AI systems from prototype to production.</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">I work across legal AI, retrieval-augmented generation, agentic workflows, and full-stack engineering—with a focus on privacy, reliability, and useful outcomes.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#selected-projects" className="rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200">Explore projects</a>
            <a href="#contact" className="rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:bg-white/10">Get in touch</a>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
              <strong className="block text-2xl text-cyan-300">5+</strong>
              <span className="font-mono text-xs uppercase tracking-wider text-slate-300">Years engineering</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
              <strong className="block text-sm text-white">Python · Next.js · .NET</strong>
              <span className="mt-2 block font-mono text-xs uppercase tracking-wider text-slate-300">Production systems</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
              <strong className="block text-sm text-purple-300">Legal AI · RAG</strong>
              <span className="mt-2 block font-mono text-xs uppercase tracking-wider text-slate-300">Privacy-first AI</span>
            </div>
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-slate-400">Scroll to see the work</p>
        </div>
      </section>

      <div className="relative z-20 border-t border-white/5 bg-slate-950/15">
        
        {/* TIMELINE SECTION ELEMENT */}
        <section id="career-work" ref={timelineRef} className="max-w-5xl mx-auto px-4 py-24 relative">
          <div className="mx-auto mb-16 max-w-2xl rounded-2xl border border-white/10 bg-slate-950/40 p-6 text-center font-mono shadow-2xl backdrop-blur-xl">
            <div className="text-[10px] text-cyan-400 tracking-[0.2em] uppercase mb-2">[ HISTORICAL LEDGER ]</div>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">My Career and Work</h2>
            <p className="mt-2 text-sm text-slate-300">Engineering experience across legal technology, fintech, and industrial systems.</p>
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
                      <div className="rounded-xl border border-white/10 bg-slate-950/80 p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40">
                        <span className="rounded border border-cyan-900/60 bg-cyan-950/60 px-2 py-0.5 text-xs font-bold text-cyan-300">
                          {event.period}
                        </span>
                        <h3 className="text-base font-black text-white uppercase mt-3">{event.role}</h3>
                        <div className="mb-2 flex flex-col gap-1 text-xs font-medium text-slate-300 sm:flex-row sm:justify-between sm:gap-0">
                          <span>{event.company}</span>
                          <span className="text-slate-500">{event.location}</span>
                        </div>
                        <p className="mb-4 font-sans text-sm leading-relaxed text-slate-300">{event.summary}</p>
                        
                        <div className="border-t border-slate-900/80 pt-3 space-y-2">
                          {event.metrics.map((metric, mi) => (
                            <div key={mi} className="flex items-start gap-2 text-xs leading-relaxed">
                              <ChevronRight size={12} className="text-teal-400 shrink-0 mt-0.5" />
                              <span className="font-sans text-slate-300">{metric}</span>
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

        {/* SELECTED PROJECTS */}
        <section id="selected-projects" ref={projectsRef} className="max-w-6xl mx-auto px-4 py-20">
          <div className="mx-auto mb-12 max-w-2xl rounded-2xl border border-white/10 bg-slate-950/40 p-6 text-center font-mono shadow-2xl backdrop-blur-xl">
            <div className="text-[10px] text-cyan-400 tracking-[0.2em] uppercase mb-2">[ SELECTED BUILDS & RESEARCH ]</div>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">Projects with measurable depth</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
              Applied AI work spanning grounded knowledge systems, clinical ML research, and real-time computer vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <article key={project.title} className="group rounded-2xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl backdrop-blur-xl transition-all hover:border-cyan-400/40">
                {project.screenshot && (
                  <a
                    href={project.screenshot.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open full ${project.title} screenshot`}
                    className="relative -mx-6 -mt-6 mb-5 block overflow-hidden rounded-t-2xl border-b border-white/10 bg-slate-900 focus-visible:outline-offset-[-4px]"
                  >
                    <Image
                      src={project.screenshot.src}
                      alt={project.screenshot.alt}
                      width={project.screenshot.width}
                      height={project.screenshot.height}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="h-48 w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] sm:h-56"
                    />
                    <span className="absolute bottom-3 right-3 rounded-md border border-white/20 bg-slate-950/90 px-2.5 py-1 text-xs font-medium text-white shadow-lg">
                      View full screenshot ↗
                    </span>
                  </a>
                )}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-cyan-300">{project.period}</span>
                    <h3 className="text-lg font-black text-white mt-1">{project.title}</h3>
                  </div>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="shrink-0 text-slate-500 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
                {project.result && (
                  <p className="mt-4 font-mono text-xs font-bold text-emerald-400">{project.result}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1 font-mono text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TELEMETRY SECTION BLOCK */}
        <section ref={telemetryRef} className="max-w-6xl mx-auto px-4 py-16 space-y-8">
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-slate-950/40 p-6 text-center font-mono shadow-2xl backdrop-blur-xl">
            <div className="text-[10px] text-purple-400 tracking-[0.2em] uppercase mb-2">[ RESEARCH HUD & HARDWARE TELEMETRY ]</div>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">Computer Vision & Model Telemetry</h2>
          </div>
          <LedTrainingScreen />
        </section>

        {/* TECH STACK INTERACTIVE SECTION BLOCK */}
        <section id="architecture-panel" ref={architectureRef} className="max-w-6xl mx-auto px-4 py-16">
          <TechStack3D />
        </section>

        {/* PERSONAL METADATA HUD BAR */}
        <section className="mx-auto max-w-4xl px-4 py-10 text-center">
          <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6 backdrop-blur-xl">
            <h2 className="text-xl font-bold text-white">Education</h2>
            <p className="mt-2 text-sm text-slate-300">Bachelor of Science in Computer Science · Hamdard University, Karachi · 2017</p>
          </div>
        </section>
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
            <span>English (C1) // German (A1/A2, pursuing B1)</span>
          </div>
        </section>

        {/* SECURE PACKET HANDSHAKE RECEPTACLE CONTACT PANEL */}
        <section id="contact" className="max-w-xl mx-auto px-4 py-20 font-mono">
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
                <a href="https://www.linkedin.com/in/hamza-ahmed-khan-0a9b5275/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 flex items-center gap-1.5 transition-colors text-xs">
                  <Terminal size={14} className="text-blue-400" /> LinkedIn
                </a>
                <a href="https://github.com/HamzaAhmedKhan786" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 flex items-center gap-1.5 transition-colors text-xs">
                  <Terminal size={14} className="text-purple-400" /> GitHub
                </a>
              </div>
            </div>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <label htmlFor="contact-email" className="block text-xs font-medium text-slate-200">Your email</label>
              <input
                id="contact-email"
                type="email" 
                placeholder="client@enterprise.domain" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full px-4 py-3 bg-slate-950 border border-slate-900 rounded-xl text-slate-100 focus:outline-none focus:border-cyan-500 text-sm placeholder-slate-700 font-mono" 
              />
              <label htmlFor="contact-message" className="block text-xs font-medium text-slate-200">Your message</label>
              <textarea
                id="contact-message"
                rows={4} 
                placeholder="Define project parameters, vector pipeline criteria, or handshake parameters..." 
                required 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                className="w-full px-4 py-3 bg-slate-950 border border-slate-900 rounded-xl text-slate-100 focus:outline-none focus:border-cyan-500 text-sm resize-none placeholder-slate-700 font-mono" 
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 px-4 bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-white font-medium rounded-xl transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <Loader2 size={14} className="animate-spin text-cyan-400" />
                ) : (
                  <CheckCircle size={14} />
                )}

                {status === "loading"
                  ? "Transmitting..."
                  : status === "success"
                  ? "Transmission Complete"
                  : "Transmit Packet Loop"}
              </button>

              {status === "success" && (
                <p role="status" className="text-emerald-400 text-xs text-center">
                  Message sent successfully.
                </p>
              )}

              {status === "error" && (
                <p role="alert" className="text-red-400 text-xs text-center">
                  Message failed. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </section>

        <footer className="border-t border-slate-900 py-8 text-center text-[10px] font-mono text-slate-600 tracking-wider">
          HAMZA_AHMED_KHAN © {new Date().getFullYear()} · CHANNELS RUNTIME SECURED
        </footer>
      </div>
      </main>

    </div>
  );
}
