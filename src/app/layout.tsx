import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamza Ahmed Khan | AI/ML & Software Engineer",
  description:
    "Berlin-based AI/ML and software engineer building privacy-first Legal AI, RAG systems, agentic workflows, local LLM applications, and production software.",
  keywords: [
    "Hamza Ahmed Khan",
    "AI Engineer Berlin",
    "Machine Learning Engineer",
    "RAG Engineer",
    "Legal AI",
    "Local LLM",
    "Software Engineer",
  ],
  authors: [{ name: "Hamza Ahmed Khan" }],
  creator: "Hamza Ahmed Khan",
  openGraph: {
    title: "Hamza Ahmed Khan | AI/ML & Software Engineer",
    description:
      "Privacy-first Legal AI, RAG, agentic workflows, local LLMs, and production software.",
    type: "website",
    locale: "en_US",
    siteName: "Hamza Ahmed Khan Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Hamza Ahmed Khan | AI/ML & Software Engineer",
    description:
      "Privacy-first Legal AI, RAG, agentic workflows, local LLMs, and production software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
