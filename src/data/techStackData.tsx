import React from "react";
import {
  Terminal,
  Brain,
  Cpu,
  Database,
  Layout,
  Sparkles,
  Box,
  HardDrive,
  CpuIcon,
} from "lucide-react";

export interface TechStackItem {
  title: string;
  subtitle: string;
  tag: string;
  icon: React.ReactNode;
  color: string;
  project: string;
  technologies: string[];
  challenge: string;
  solution: string;
  result: string;
}

export const techStackData: Record<string, TechStackItem> = {
  juraki: {
    title: "Jura-KI Assistant",
    subtitle: "Flask, OpenAI API, NER, Summarization, Turbo.net",
    tag: "Legal AI Solution",
    icon: <Brain size={16} />,
    color: "text-green-400 bg-green-950/40 border-green-500/20 hover:border-green-500/60",

    project: "Jura-KI Legal Assistant",

    technologies: [
      "Flask",
      "OpenAI API",
      "NER",
      "Document Summarization",
      "Prompt Engineering",
      "Turbo.net",
    ],

    challenge:
      "Legal professionals required AI-assisted document analysis while protecting sensitive client information and adapting prompts to different legal domains.",

    solution:
      "Built a Flask-based legal AI application with NER-based anonymization, document summarization, legal-domain prompt templates, OpenAI integration, and document deanonymization workflows.",

    result:
      "Enabled users to anonymize documents, select legal domains, generate tailored prompts, query AI systems, and restore original entities after processing. The application was packaged as a native Windows executable using Turbo.net.",
  },

  openwebui: {
    title: "OpenWebUI & Ollama",
    subtitle: "OpenWebUI, Ollama, Docker, FAISS, Qdrant",
    tag: "Local LLM + RAG Platform",
    icon: <CpuIcon size={16} />,
    color: "text-purple-400 bg-purple-950/40 border-purple-500/20 hover:border-purple-500/60",
    project: "Local LLM Research Platform",
    technologies: [
      "OpenWebUI",
      "Ollama",
      "Docker",
      "LeoLM",
      "Llama 3.2",
      "FAISS",
      "Qdrant",
      "PEFT",
      "LoRA"
    ],
    challenge:
      "Needed a local environment for experimenting with German LLMs, vector databases, and retrieval pipelines without relying on cloud-hosted AI services.",
    solution:
      "Deployed OpenWebUI and Ollama using Docker, integrated LeoLM and Llama models, and connected FAISS/Qdrant vector databases for local retrieval-augmented generation experiments.",
    result:
      "Created a private AI research environment for testing local LLMs, vector search, prompt engineering, and RAG architectures."
  },

  huggingface: {
    title: "Hugging Face (PEFT/LoRA)",
    subtitle: "HuggingFace, PEFT, LoRA, 4-bit Quantization",
    tag: "Fine-Tuning & Optimization",
    icon: <Sparkles size={16} />,
    color: "text-purple-400 bg-purple-950/40 border-purple-500/20 hover:border-purple-500/60",
    project: "German Legal LLM Optimization",
    technologies: ["Hugging Face", "PEFT", "LoRA", "4-bit Quantization", "LeoLM", "Llama 3.2"],
    challenge: "Large German legal models needed to run more efficiently on limited local hardware.",
    solution: "Fine-tuned LeoLM and Llama 3.2 using PEFT, LoRA, and 4-bit quantization for local experimentation.",
    result: "Reduced hardware requirements while enabling domain-specific German legal AI model customization.",
  },

  models_llm: {
    title: "GPT-4, Llama 3.2 & LeoLM",
    subtitle: "OpenAI APIs, local LLMs, LeoLM, Llama 3.2",
    tag: "Hybrid LLM Systems",
    icon: <Sparkles size={16} />,
    color: "text-indigo-400 bg-indigo-950/40 border-indigo-500/20 hover:border-indigo-500/60",
    project: "Jura-KI Hybrid Legal Assistant",
    technologies: ["OpenAI API", "GPT-4", "LeoLM", "Llama 3.2", "Ollama", "Prompt Templates"],
    challenge:
      "Users needed both enterprise-grade OpenAI API access and local/free model options depending on privacy, cost, and legal workflow requirements.",
    solution:
      "Integrated bought enterprise-level OpenAI API keys together with local/free model options, allowing users to select legal domains and reform generic prompts for their cases.",
    result:
      "Created a flexible legal AI assistant where users could choose the model path, legal domain, and prompt style based on their workflow.",
  },

  models_bert: {
    title: "BERT & Carmen NER",
    subtitle: "BERT, Carmen NER, anonymization, deanonymization",
    tag: "Legal NER & Privacy Layer",
    icon: <Brain size={16} />,
    color: "text-indigo-400 bg-indigo-950/40 border-indigo-500/20 hover:border-indigo-500/60",
    project: "Jura-KI Anonymization Pipeline",
    technologies: ["BERT", "Carmen NER", "NER", "Anonymization", "Deanonymization"],
    challenge:
      "Legal users needed to query AI with confidential documents without exposing personal or case-sensitive information.",
    solution:
      "Integrated a BERT-based NER model to anonymize uploaded legal documents before AI processing, with deanonymization after receiving the AI response.",
    result:
      "Supported privacy-preserving legal document analysis while allowing users to restore original entities after AI-assisted processing.",
  },

  nlp_ner: {
    title: "NER, Summarization & Legal Prompts",
    subtitle: "NER, anonymization, summarization, legal-domain prompts",
    tag: "Legal Document Intelligence",
    icon: <Terminal size={16} />,
    color: "text-pink-400 bg-pink-950/40 border-pink-500/20 hover:border-pink-500/60",
    project: "Jura-KI Document Workflow",
    technologies: ["NER", "Document Summarization", "Prompt Templates", "Legal Domain Dropdowns"],
    challenge:
      "Users needed to summarize, anonymize, and query legal documents based on different legal domains and case requirements.",
    solution:
      "Built a workflow where users select legal-domain dropdown options, receive a generic prompt, reform it to their needs, attach an anonymized document, and query the AI.",
    result:
      "Improved legal AI usability by combining document summarization, anonymization, domain-aware prompting, and AI-assisted legal analysis.",
  },

  supervised: {
    title: "Scikit-Learn & Advanced ML",
    subtitle: "Scikit-learn, XGBoost, NumPy, Pandas",
    tag: "Classical ML",
    icon: <Cpu size={16} />,
    color: "text-fuchsia-400 bg-fuchsia-950/40 border-fuchsia-500/20 hover:border-fuchsia-500/60",
    project: "Document Classification & ECG Research",
    technologies: ["Scikit-learn", "GridSearchCV", "XGBoost", "LightGBM", "Pandas", "NumPy"],
    challenge: "Documents and research datasets needed reliable classification with explainable ML workflows.",
    solution: "Built document classifiers and contributed to ECG classification pipelines using ensemble ML methods.",
    result: "Supported automated email filing and ECG research reaching 92.86% accuracy and 0.9644 AUC.",
  },

  rag_pipelines: {
    title: "RAG Pipelines (8GB+)",
    subtitle: "8GB+ RAG Networks",
    tag: "LLM & RAG Architecture",
    icon: <Database size={16} />,
    color: "text-blue-400 bg-blue-950/40 border-blue-500/20 hover:border-blue-500/60",
    project: "Legal Knowledge Retrieval",
    technologies: ["RAG", "Recursive Chunking", "FAISS", "Qdrant", "OpenWebUI"],
    challenge: "Large German legal datasets needed searchable AI access without exposing private data.",
    solution: "Designed RAG pipelines with recursive chunking, class-based indexing, FAISS, and Qdrant over 8GB+ datasets.",
    result: "Enabled semantic legal search and contextual answer generation across private legal document collections.",
  },

  vector_db: {
    title: "Qdrant & FAISS",
    subtitle: "Qdrant & FAISS",
    tag: "Vector Databases",
    icon: <HardDrive size={16} />,
    color: "text-blue-400 bg-blue-950/40 border-blue-500/20 hover:border-blue-500/60",
    project: "Multi-Class Vector Stores",
    technologies: ["Qdrant", "FAISS", "Embeddings", "Similarity Search", "Class-Based Indexing"],
    challenge: "Legal knowledge needed to be organized by document type, class, and semantic similarity.",
    solution: "Used Qdrant for class-based vector storage and FAISS for fast similarity search experiments.",
    result: "Improved retrieval performance and organization of legal knowledge bases.",
  },

  relational_db: {
    title: "MsSQL, MySQL & PostgreSQL",
    subtitle: "MsSQL, MySQL, PostgreSQL",
    tag: "Relational Databases",
    icon: <Database size={16} />,
    color: "text-cyan-400 bg-cyan-950/40 border-cyan-500/20 hover:border-cyan-500/60",
    project: "Banking & Enterprise Data Systems",
    technologies: ["MsSQL", "MySQL", "PostgreSQL", "Stored Procedures", "Triggers"],
    challenge: "Banking and enterprise systems required reliable transaction logging and reporting.",
    solution: "Worked with relational databases, stored procedures, triggers, and reporting logs across backend systems.",
    result: "Supported high-volume transaction processing, reporting, and data integrity.",
  },

  backend: {
    title: "Python, Node.js, C# & Java",
    subtitle: "Python, Node, C#, Java",
    tag: "Backend Engineering",
    icon: <Cpu size={16} />,
    color: "text-emerald-400 bg-emerald-950/40 border-emerald-500/20 hover:border-emerald-500/60",
    project: "AI, Banking & Enterprise Backends",
    technologies: ["Python", "FastAPI", "Flask", "Node.js", "C#", ".NET", "Java"],
    challenge: "AI tools, banking systems, and enterprise integrations needed stable backend services.",
    solution: "Built APIs, desktop AI tools, transaction modules, and integration layers using Python, Node.js, C#, and Java.",
    result: "Delivered production-oriented backend systems across Legal Tech, banking, and industrial software.",
  },

  frontend: {
    title: "Next.js, TypeScript & Vue",
    subtitle: "Next.js, TS, React, Vue",
    tag: "Frontend Systems",
    icon: <Layout size={16} />,
    color: "text-sky-400 bg-sky-950/40 border-sky-500/20 hover:border-sky-500/60",
    project: "vOffice & Portfolio Interfaces",
    technologies: ["Next.js", "React", "TypeScript", "Vue.js", "Vuex", "Vuetify"],
    challenge: "AI backends needed usable interfaces for real-time virtual platforms and internal tools.",
    solution: "Built frontend interfaces using Next.js, React, TypeScript, Vue.js, Vuex, and Vuetify.",
    result: "Connected AI backends with interactive dashboards, virtual interfaces, and recruiter-facing portfolio UI.",
  },

  realtime_media: {
    title: "WebRTC, Whisper & Simli",
    subtitle: "WebRTC, Whisper, Simli",
    tag: "Real-Time AI Avatars",
    icon: <Sparkles size={16} />,
    color: "text-teal-400 bg-teal-950/40 border-teal-500/20 hover:border-teal-500/60",
    project: "vOffice AI Avatar Platform",
    technologies: ["WebRTC", "Whisper AI", "Simli", "SambaCall", "Node.js", "Next.js"],
    challenge: "Virtual meetings needed low-latency speech recognition and lip-synced AI avatar responses.",
    solution: "Integrated Whisper AI, WebRTC, Simli, and SambaCall for real-time audio/video AI avatar flows.",
    result: "Built live multi-persona avatar workflows for AI Tilda, AI Peter, and AI Mary.",
  },

  devops: {
    title: "Docker, Jenkins & CI/CD",
    subtitle: "Deployment & Automation",
    tag: "DevOps & Infrastructure",
    icon: <Box size={16} />,
    color: "text-amber-500 bg-amber-950/30 border-amber-600/20 hover:border-amber-500/60",

    project: "AI & Enterprise Software Deployments",

    technologies: ["Docker", "Jenkins", "GitHub", "Linux", "CI/CD"],

    challenge:
      "Projects required reproducible environments, automated deployment, and simplified infrastructure management.",

    solution:
      "Used Docker containers, Linux servers, GitHub workflows, and Jenkins pipelines to standardize development and deployment processes.",

    result:
      "Improved deployment consistency, environment reproducibility, and delivery speed across multiple projects.",
  },

  management: {
    title: "Linux & JIRA Management",
    subtitle: "Linux Server, JIRA Boards",
    tag: "Engineering Workflow",
    icon: <Terminal size={16} />,
    color: "text-orange-400 bg-orange-950/40 border-orange-500/20 hover:border-orange-500/60",
    project: "Agile Delivery & QA",
    technologies: ["Linux", "GitHub", "JIRA", "Agile", "QA Tracking"],
    challenge: "Software delivery required clear issue tracking, debugging, and testing workflows.",
    solution: "Used Linux environments, GitHub version control, JIRA boards, Agile workflows, and QA tracking.",
    result: "Improved debugging, sprint tracking, and production-focused delivery.",
  },
};