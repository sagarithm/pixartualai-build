'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  BookOpen,
  Cpu,
  Code,
  ClockCounterClockwise,
  MagnifyingGlass,
  ArrowRight,
  Terminal,
  Sparkle,
  Lightning,
  CheckCircle,
  Copy,
  Check,
} from '@phosphor-icons/react';

export default function DocsPage() {
  const [search, setSearch] = useState('');
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const sections = [
    {
      title: 'Getting Started',
      items: [
        { title: 'Platform Overview', desc: 'Introduction to prompt-driven visual website building', href: '#overview' },
        { title: 'Quickstart Guide', desc: 'Create and publish your first web application in 2 minutes', href: '#quickstart' },
        { title: 'The Visual Studio', desc: 'Deep dive into the 3-panel AST canvas, layers, and copilot', href: '#studio' },
      ],
    },
    {
      title: 'Core Capabilities',
      items: [
        { title: 'Prompt Engineering', desc: 'How to structure high-fidelity generative prompts', href: '#prompts' },
        { title: 'Connectors & Data Sources', desc: 'Connecting Google Drive, GitHub, Notion, Supabase, and Stripe', href: '#connectors' },
        { title: 'Custom Domains & SSL', desc: 'Configuring CNAME, A-Records, and auto-provisioned SSL', href: '#domains' },
      ],
    },
    {
      title: 'Developer Integration',
      items: [
        { title: 'MCP (Model Context Protocol)', desc: 'Connect Claude Desktop, Cursor, or Antigravity to PixartualAI', href: '/docs/mcp' },
        { title: 'REST & GraphQL APIs', desc: 'Programmatic project cloning, building, and publishing', href: '/docs/api' },
        { title: 'Code Export (React/Next.js)', desc: 'Export clean Tailwind CSS and TypeScript components', href: '#export' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-ink-strong flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <section className="border-b border-neutral-100 bg-stone-50/50 py-16 px-5 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
            <BookOpen size={14} weight="bold" />
            <span>Documentation & Guides</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Build with PixartualAI
          </h1>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Everything you need to turn conversational natural language into production-grade, highly-responsive web applications.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-xl relative">
            <MagnifyingGlass size={18} className="absolute left-4 top-3.5 text-neutral-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search docs, APIs, guides, and components..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-neutral-200/90 bg-white shadow-xs text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
          </div>
        </div>
      </section>

      {/* Documentation Grid */}
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-5 md:px-12 py-12">
        {/* Quick Nav Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          <Link
            href="/docs/mcp"
            className="p-5 rounded-2xl border border-neutral-200/90 bg-white hover:border-neutral-400 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-accent flex items-center justify-center mb-3">
              <Cpu size={22} weight="bold" />
            </div>
            <h3 className="font-semibold text-neutral-900 text-sm group-hover:text-accent transition-colors flex items-center justify-between">
              <span>MCP Server</span>
              <ArrowRight size={14} className="text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Connect external AI agents to manipulate PixartualAI canvases in realtime.
            </p>
          </Link>

          <Link
            href="/docs/api"
            className="p-5 rounded-2xl border border-neutral-200/90 bg-white hover:border-neutral-400 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Code size={22} weight="bold" />
            </div>
            <h3 className="font-semibold text-neutral-900 text-sm group-hover:text-blue-600 transition-colors flex items-center justify-between">
              <span>API Reference</span>
              <ArrowRight size={14} className="text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Automate site creation, updates, and custom domain bindings via REST.
            </p>
          </Link>

          <Link
            href="/docs/changelog"
            className="p-5 rounded-2xl border border-neutral-200/90 bg-white hover:border-neutral-400 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <ClockCounterClockwise size={22} weight="bold" />
            </div>
            <h3 className="font-semibold text-neutral-900 text-sm group-hover:text-emerald-600 transition-colors flex items-center justify-between">
              <span>Changelog</span>
              <ArrowRight size={14} className="text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Read about new capabilities, models, and platform enhancements.
            </p>
          </Link>
        </div>

        {/* Section Groups */}
        <div className="space-y-12">
          {sections.map((sec) => (
            <div key={sec.title}>
              <h2 className="text-lg font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-100">
                {sec.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sec.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="p-4 rounded-xl border border-neutral-100 hover:border-neutral-300 hover:bg-stone-50/50 transition-all block group"
                  >
                    <div className="font-semibold text-sm text-neutral-900 group-hover:text-accent transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowRight size={13} className="text-neutral-300 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quickstart Code Example */}
        <div id="quickstart" className="mt-16 p-6 sm:p-8 rounded-3xl bg-neutral-950 text-white">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <Terminal size={18} className="text-accent" />
              <span className="text-xs font-mono font-semibold text-neutral-300">Quickstart CLI</span>
            </div>
            <button
              onClick={() => handleCopy('cli', 'npx pixartual-cli init my-landing-page')}
              className="text-xs flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              {copiedSnippet === 'cli' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedSnippet === 'cli' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <div className="py-4 font-mono text-xs sm:text-sm text-neutral-200 overflow-x-auto">
            <p className="text-neutral-500"># Install the Pixartual CLI and start building from terminal</p>
            <p className="mt-1 text-emerald-400">$ npx pixartual-cli init my-landing-page</p>
            <p className="mt-2 text-neutral-400">✓ Generating AST design schema...</p>
            <p className="text-neutral-400">✓ Connecting assets and responsive CSS breakpoints...</p>
            <p className="text-neutral-400">✓ Local studio running at http://localhost:3000</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
