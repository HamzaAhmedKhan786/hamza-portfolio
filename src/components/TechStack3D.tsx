"use client";

import React, { useState } from "react";
import { Brain, Cpu, Database, Box, ChevronRight } from "lucide-react";
import { techStackData as data } from "../data/techStackData";

type TechKey = keyof typeof data;

const groups: {
  title: string;
  icon: React.ReactNode;
  activeBorder: string;
  titleColor: string;
  items: TechKey[];
}[] = [
  {
    title: "AI, Machine Learning & NLP",
    icon: <Brain size={12} />,
    activeBorder: "border-purple-500",
    titleColor: "text-purple-400",
    items: [
      "juraki",
      "openwebui",
      "huggingface",
      "models_llm",
      "models_bert",
      "nlp_ner",
      "supervised",
    ],
  },
  {
    title: "Architectures & Data Storage",
    icon: <Database size={12} />,
    activeBorder: "border-blue-500",
    titleColor: "text-blue-400",
    items: ["rag_pipelines", "vector_db", "relational_db"],
  },
  {
    title: "Development & Integration",
    icon: <Cpu size={12} />,
    activeBorder: "border-emerald-500",
    titleColor: "text-emerald-400",
    items: ["backend", "frontend", "realtime_media"],
  },
  {
    title: "Infrastructure & Tools",
    icon: <Box size={12} />,
    activeBorder: "border-amber-500",
    titleColor: "text-amber-500",
    items: ["devops", "management"],
  },
];

export default function TechStack3D() {
  const [selectedTech, setSelectedTech] = useState<TechKey>("openwebui");
  const selected = data[selectedTech];

  return (
    <div className="max-w-6xl w-full space-y-12 mx-auto font-mono">
      <div className="text-center space-y-2">
        <div className="text-[10px] text-cyan-400 tracking-[0.25em] uppercase">
          [ Master Core Capabilities Matrix ]
        </div>

        <h2 className="text-3xl font-black tracking-tight text-white uppercase sm:text-4xl">
          Technical Architecture
        </h2>

        <p className="max-w-2xl mx-auto text-xs text-slate-400 leading-relaxed font-sans">
          Select any technology to see how I used it in real AI, Legal Tech,
          banking, and enterprise software projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          {groups.map((group) => (
            <div
              key={group.title}
              className="space-y-3 bg-slate-900/10 border border-slate-900/60 p-4 rounded-2xl backdrop-blur-sm"
            >
              <span
                className={`text-[10px] ${group.titleColor} font-bold tracking-wider flex items-center gap-1.5 uppercase`}
              >
                {group.icon} // {group.title}
              </span>

              <div
                className={`grid grid-cols-1 gap-2.5 ${
                  group.items.length === 2
                    ? "sm:grid-cols-2"
                    : group.items.length === 3
                    ? "sm:grid-cols-3"
                    : "sm:grid-cols-2"
                }`}
              >
                {group.items.map((key) => {
                  const item = data[key];
                  const isSelected = selectedTech === key;

                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedTech(key)}
                      className={`flex flex-col p-2.5 text-left border rounded-xl bg-slate-950/40 transition-all duration-150 ${
                        isSelected
                          ? `${group.activeBorder} bg-slate-900 shadow-[0_0_12px_rgba(34,211,238,0.12)] text-white`
                          : item.color
                      }`}
                    >
                      <div className="text-[11px] font-black tracking-wide truncate">
                        {item.title}
                      </div>

                      <div className="text-[9px] text-slate-500 font-sans mt-0.5 leading-tight truncate">
                        {item.subtitle}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-5 h-full">
          <div className="bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden lg:min-h-[560px] flex flex-col">
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="text-cyan-400 p-1 rounded bg-cyan-950/30 border border-cyan-900/30">
                    {selected.icon}
                  </div>

                  <h3 className="text-xs font-black text-white uppercase tracking-wide">
                    {selected.title}
                  </h3>
                </div>

                <span className="text-[8px] px-2 py-0.5 rounded bg-slate-950 text-cyan-400 border border-slate-800 font-bold uppercase tracking-wider">
                  Resume Based
                </span>
              </div>

              <div className="space-y-5">
                <InfoBlock label="Project" value={selected.project} />

                <InfoBlock label="Category" value={selected.tag} />

                <div>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-2">
                    [ Technologies Used ]
                  </span>

                  <div className="flex flex-wrap gap-1.5">
                    {selected.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] px-2 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <InfoBlock label="Challenge" value={selected.challenge} />

                <InfoBlock label="Solution" value={selected.solution} />

                <div className="bg-slate-950/90 border border-slate-900 p-4 rounded-xl">
                  <span className="text-[8px] text-emerald-500 font-bold uppercase tracking-widest block mb-2">
                    // Result
                  </span>

                  <p className="text-[11px] text-emerald-400 font-medium leading-relaxed font-sans">
                    {selected.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1.5">
      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">
        [ {label} ]
      </span>

      <p className="text-[11px] text-slate-300 font-sans leading-relaxed flex gap-1.5">
        <ChevronRight size={12} className="text-cyan-400 shrink-0 mt-0.5" />
        <span>{value}</span>
      </p>
    </div>
  );
}