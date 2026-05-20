"use client";

import React, { useState } from 'react';
import { Terminal, Brain, Cpu, Database, Layout, Sparkles, Box, HardDrive, CpuIcon } from 'lucide-react';

interface RationaleData {
  title: string;
  tag: string;
  icon: React.ReactNode;
  color: string;
  why: string;
  impact: string;
}

export default function TechStack3D() {
  const [selectedTech, setSelectedTech] = useState<string>("openwebui");

  const data: Record<string, RationaleData> = {
    // === CATEGORY 1: AI, MACHINE LEARNING & NLP ===
    // Frameworks & Platforms
    openwebui: {
      title: "OpenWebUI & Ollama",
      tag: "Frameworks & Platforms",
      icon: <CpuIcon size={16} />,
      color: "text-purple-400 bg-purple-950/40 border-purple-500/20 hover:border-purple-500/60",
      why: "Orchestrated local interactive UI interfaces for internal company use, linking private LLM infrastructures securely to client workspaces.",
      impact: "⚡ Result: Allowed non-technical legal departments to chat with on-premises data without public leakage."
    },
    langchain: {
      title: "LangChain & LlamaIndex",
      tag: "Frameworks & Platforms",
      icon: <Brain size={16} />,
      color: "text-purple-400 bg-purple-950/40 border-purple-500/20 hover:border-purple-500/60",
      why: "Built multi-agent autonomous chains, structured schema extractors, and efficient data injection managers to connect external storage clusters.",
      impact: "⚡ Result: Streamlined the end-to-end processing of heavy, unformatted document parsing loops."
    },
    huggingface: {
      title: "Hugging Face (PEFT/LoRA)",
      tag: "Frameworks & Platforms",
      icon: <Sparkles size={16} />,
      color: "text-purple-400 bg-purple-950/40 border-purple-500/20 hover:border-purple-500/60",
      why: "Utilized Parameter-Efficient Fine-Tuning (PEFT) and LoRA weights mapping with 4-bit Quantization to compress model architectures onto local memory.",
      impact: "⚡ Result: Enabled hosting of multi-billion parameter models directly on standard local consumer workstation GPUs."
    },
    // Models
    models_llm: {
      title: "GPT-4, Llama 3.2 & LeoLM",
      tag: "LLM Model Topologies",
      icon: <Sparkles size={16} />,
      color: "text-indigo-400 bg-indigo-950/40 border-indigo-500/20 hover:border-indigo-500/60",
      why: "Integrated top-tier generic reasoning engines alongside domain-specific German models (LeoLM) to capture delicate European syntax nuances.",
      impact: "⚡ Result: Automated precision classification of intricate localized German legal documentation."
    },
    models_bert: {
      title: "BERT & Sentence Transformers",
      tag: "Embedding & Token Models",
      icon: <Brain size={16} />,
      color: "text-indigo-400 bg-indigo-950/40 border-indigo-500/20 hover:border-indigo-500/60",
      why: "Configured BertForTokenClassification layouts and sentence-level vectorizers to generate highly precise token embeddings.",
      impact: "⚡ Result: Powered high-accuracy semantic clustering and contextual document indexing blocks."
    },
    // NLP & NER
    nlp_ner: {
      title: "spaCy, Flair & Carmen NER",
      tag: "NLP & NER Extraction",
      icon: <Terminal size={16} />,
      color: "text-pink-400 bg-pink-950/40 border-pink-500/20 hover:border-pink-500/60",
      why: "Engineered strict Name Entity Recognition setups using Seqeval validation to redact sensitive identifiers (PER, LOC, STR, TEL) for GDPR enforcement.",
      impact: "⚡ Result: Achieved military-grade structural anonymity parameters over legal documentation pipelines."
    },
    // Supervised Learning
    supervised: {
      title: "Scikit-Learn & Advanced ML",
      tag: "Supervised Learning",
      icon: <Cpu size={16} />,
      color: "text-fuchsia-400 bg-fuchsia-950/40 border-fuchsia-500/20 hover:border-fuchsia-500/60",
      why: "Implemented classical ML ensembles (Logistic Regression, Random Forest, XGBoost, LightGBM) optimized via structured GridSearchCV pipelines.",
      impact: "⚡ Result: Resolved complex clinical class imbalances, pushing model diagnostic precision parameters up to 92.86% accuracy."
    },

    // === CATEGORY 2: ARCHITECTURES & DATA STORAGE ===
    rag_pipelines: {
      title: "RAG Pipelines (8GB+)",
      tag: "LLM & RAG Architectures",
      icon: <Database size={16} />,
      color: "text-blue-400 bg-blue-950/40 border-blue-500/20 hover:border-blue-500/60",
      why: "Designed complex on-premises multi-class retrieval architectures utilizing recursive recursive chunking layers over localized file segments.",
      impact: "⚡ Result: Discovered zero-latency contextual retrieval markers over extensive enterprise database pools."
    },
    vector_db: {
      title: "Qdrant & FAISS",
      tag: "Vector Databases & Search",
      icon: <HardDrive size={16} />,
      color: "text-blue-400 bg-blue-950/40 border-blue-500/20 hover:border-blue-500/60",
      why: "Configured advanced class-based payload indexing layouts inside Qdrant and paired them with FAISS similarity indices for spatial comparison operations.",
      impact: "⚡ Result: Scaled raw computational matching arrays while processing massive multi-tenant database clusters."
    },
    relational_db: {
      title: "MsSQL, MySQL & PostgreSQL",
      tag: "Relational Databases",
      icon: <Database size={16} />,
      color: "text-cyan-400 bg-cyan-950/40 border-cyan-500/20 hover:border-cyan-500/60",
      why: "Maintained critical relational models, developing query triggers, optimized execution plans, and transaction boundaries to log high-volume logs.",
      impact: "⚡ Result: Sustained data auditing compliance standards under aggressive peak system workloads."
    },

    // === CATEGORY 3: DEVELOPMENT & INTEGRATION ===
    backend: {
      title: "Python, Node.js, C# & Java",
      tag: "Backend Runtime Engines",
      icon: <Cpu size={16} />,
      color: "text-emerald-400 bg-emerald-950/40 border-emerald-500/20 hover:border-emerald-500/60",
      why: "Engineered scalable microservice wrappers (FastAPI, .NET Core, Express), and custom cross-compilation scripts converting legacy systems to .NET networks.",
      impact: "⚡ Result: Completely eliminated performance regressions across heavily fragmented corporate logic patterns."
    },
    frontend: {
      title: "Next.js, TypeScript & Vue",
      tag: "Frontend Architecture",
      icon: <Layout size={16} />,
      color: "text-sky-400 bg-sky-950/40 border-sky-500/20 hover:border-sky-500/60",
      why: "Compiled rigid type-safe layouts and reactive state engines (Vuex, Vuetify, React Hooks) to provide high-fidelity systems management screens.",
      impact: "⚡ Result: Dropped client UI operational latency while enforcing strict build-time type verification checks."
    },
    realtime_media: {
      title: "WebRTC, Whisper & Simli",
      tag: "Real-Time & Media Node",
      icon: <Sparkles size={16} />,
      color: "text-teal-400 bg-teal-950/40 border-teal-500/20 hover:border-teal-500/60",
      why: "Linked low-latency real-time communications (WebRTC, SambaCall) to speech-to-text models and live digital avatar generative frames.",
      impact: "⚡ Result: Constructed fully responsive, lip-synced multi-persona avatar interactions in active audio-visual channels."
    },

    // === CATEGORY 4: INFRASTRUCTURE & TOOLS ===
    devops: {
      title: "Docker & Turbo.net",
      tag: "DevOps & Deployment",
      icon: <Box size={16} />,
      color: "text-amber-500 bg-amber-950/30 border-amber-600/20 hover:border-amber-500/60",
      why: "Isolated local computing nodes using complex container assemblies (Docker Compose) and shipped cross-platform apps with Turbo.net packaging arrays.",
      impact: "⚡ Result: Reached absolute configuration uniformity spanning Linux systems and local native client endpoints."
    },
    management: {
      title: "Linux & JIRA Management",
      tag: "OS & Management Systems",
      icon: <Terminal size={16} />,
      color: "text-orange-400 bg-orange-950/40 border-orange-500/20 hover:border-orange-500/60",
      why: "Managed secure local Linux server environments, managing deployment lifecycles within fast-paced Agile sprint schedules.",
      impact: "⚡ Result: Systematically identified configuration leaks, tracking velocity metrics via JIRA dashboards."
    }
  };

  return (
    <div className="max-w-6xl w-full space-y-12 mx-auto font-mono">
      
      {/* HUD DASHBOARD HEADER */}
      <div className="text-center space-y-2">
        <div className="text-[10px] text-cyan-400 tracking-[0.25em] uppercase">[ MASTER CORE CAPABILITIES MATRIX ]</div>
        <h2 className="text-3xl font-black tracking-tight text-white uppercase sm:text-4xl">
          Technical Architecture
        </h2>
        <p className="max-w-2xl mx-auto text-xs text-slate-400 leading-relaxed font-sans">
          An interactive telemetry network tracking deployment stacks, engine frameworks, and architectural models integrated across corporate legal tech and financial domains.
        </p>
      </div>

      {/* DASHBOARD GRID CONFIGURATION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: SCANNABLE RESUME STACK GRID (7 COLUMNS WIDE) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* CATEGORY 1: AI, MACHINE LEARNING & NLP */}
          <div className="space-y-3 bg-slate-900/10 border border-slate-900/60 p-4 rounded-2xl backdrop-blur-sm">
            <span className="text-[10px] text-purple-400 font-bold tracking-wider flex items-center gap-1.5 uppercase">
              <Brain size={12} /> // AI, Machine Learning & NLP
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { k: 'openwebui', sub: 'OpenWebUI, Ollama, LangChain, LlamaIndex' },
                { k: 'huggingface', sub: 'HuggingFace (PEFT, LoRA, Quantization)' },
                { k: 'models_llm', sub: 'GPT-4, Llama 3.2, LeoLM (German)' },
                { k: 'models_bert', sub: 'BERT, Sentence Transformers, Classification' },
                { k: 'nlp_ner', sub: 'spaCy, Flair, Seqeval, Carmen NER' },
                { k: 'supervised', sub: 'Scikit-learn, XGBoost, NumPy, Pandas' }
              ].map(({ k, sub }) => (
                <button
                  key={k}
                  onClick={() => setSelectedTech(k)}
                  className={`flex flex-col p-2.5 text-left border rounded-xl bg-slate-950/40 transition-all duration-150 ${
                    selectedTech === k ? 'border-purple-500 bg-slate-900 shadow-[0_0_12px_rgba(168,85,247,0.1)] text-white' : data[k].color
                  }`}
                >
                  <div className="text-[11px] font-black tracking-wide truncate">{data[k].title}</div>
                  <div className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight truncate">{sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* CATEGORY 2: ARCHITECTURES & DATA STORAGE */}
          <div className="space-y-3 bg-slate-900/10 border border-slate-900/60 p-4 rounded-2xl backdrop-blur-sm">
            <span className="text-[10px] text-blue-400 font-bold tracking-wider flex items-center gap-1.5 uppercase">
              <Database size={12} /> // Architectures & Data Storage
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { k: 'rag_pipelines', sub: '8GB+ RAG Networks' },
                { k: 'vector_db', sub: 'Qdrant & FAISS' },
                { k: 'relational_db', sub: 'MsSQL, MySQL, Postgre' }
              ].map(({ k, sub }) => (
                <button
                  key={k}
                  onClick={() => setSelectedTech(k)}
                  className={`flex flex-col p-2.5 text-left border rounded-xl bg-slate-950/40 transition-all duration-150 ${
                    selectedTech === k ? 'border-blue-500 bg-slate-900 shadow-[0_0_12px_rgba(59,130,246,0.1)] text-white' : data[k].color
                  }`}
                >
                  <div className="text-[11px] font-black tracking-wide truncate">{data[k].title}</div>
                  <div className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight truncate">{sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* CATEGORY 3: DEVELOPMENT & INTEGRATION */}
          <div className="space-y-3 bg-slate-900/10 border border-slate-900/60 p-4 rounded-2xl backdrop-blur-sm">
            <span className="text-[10px] text-emerald-400 font-bold tracking-wider flex items-center gap-1.5 uppercase">
              <Cpu size={12} /> // Development & Integration
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { k: 'backend', sub: 'Python, Node, C#, Java' },
                { k: 'frontend', sub: 'Next.js, TS, React, Vue' },
                { k: 'realtime_media', sub: 'WebRTC, Whisper, Simli' }
              ].map(({ k, sub }) => (
                <button
                  key={k}
                  onClick={() => setSelectedTech(k)}
                  className={`flex flex-col p-2.5 text-left border rounded-xl bg-slate-950/40 transition-all duration-150 ${
                    selectedTech === k ? 'border-emerald-500 bg-slate-900 shadow-[0_0_12px_rgba(16,185,129,0.1)] text-white' : data[k].color
                  }`}
                >
                  <div className="text-[11px] font-black tracking-wide truncate">{data[k].title}</div>
                  <div className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight truncate">{sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* CATEGORY 4: INFRASTRUCTURE & TOOLS */}
          <div className="space-y-3 bg-slate-900/10 border border-slate-900/60 p-4 rounded-2xl backdrop-blur-sm">
            <span className="text-[10px] text-amber-500 font-bold tracking-wider flex items-center gap-1.5 uppercase">
              <Box size={12} /> // Infrastructure & Tools
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { k: 'devops', sub: 'Docker, CI/CD, Turbo.net' },
                { k: 'management', sub: 'Linux Server, JIRA Boards' }
              ].map(({ k, sub }) => (
                <button
                  key={k}
                  onClick={() => setSelectedTech(k)}
                  className={`flex flex-col p-2.5 text-left border rounded-xl bg-slate-950/40 transition-all duration-150 ${
                    selectedTech === k ? 'border-amber-500 bg-slate-900 shadow-[0_0_12px_rgba(245,158,11,0.1)] text-white' : data[k].color
                  }`}
                >
                  <div className="text-[11px] font-black tracking-wide truncate">{data[k].title}</div>
                  <div className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight truncate">{sub}</div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: DYNAMIC METRICS AUDITING PANEL (5 COLUMNS WIDE) */}
        <div className="lg:col-span-5 h-full">
          <div className="bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden lg:min-h-[510px] flex flex-col justify-between">
            
            {/* Visual Design Glowing Corner Background Effect */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-5 h-full flex flex-col justify-between">
              
              {/* Inspection Box Header */}
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="text-cyan-400 p-1 rounded bg-cyan-950/30 border border-cyan-900/30">
                      {data[selectedTech].icon}
                    </div>
                    <h3 className="text-xs font-black text-white uppercase tracking-wide">
                      {data[selectedTech].title}
                    </h3>
                  </div>
                  <span className="text-[8px] px-2 py-0.5 rounded bg-slate-950 text-cyan-400 border border-slate-800 font-bold uppercase tracking-wider">
                    Inspect Node
                  </span>
                </div>

                {/* Technical Integration Rationale Block */}
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">
                      [ GROUP CLASSIFICATION ]
                    </span>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wide">
                      // {data[selectedTech].tag}
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">
                      [ ARCHITECTURAL FUNCTION ]
                    </span>
                    <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                      {data[selectedTech].why}
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Performance Metric Box */}
              <div className="bg-slate-950/90 border border-slate-900 p-4 rounded-xl mt-6">
                <span className="text-[8px] text-emerald-500 font-bold uppercase tracking-widest block mb-1">
                  // PRODUCTION VERIFICATION RECORD
                </span>
                <p className="text-[11px] text-emerald-400 font-medium leading-relaxed font-sans">
                  {data[selectedTech].impact}
                </p>
              </div>

            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}