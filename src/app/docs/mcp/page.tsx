'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  Cpu,
  Terminal,
  Copy,
  Check,
  ArrowLeft,
  Sparkle,
  CheckCircle,
  Lightning,
} from '@phosphor-icons/react';

export default function MCPDocsPage() {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const mcpConfig = `{
  "mcpServers": {
    "pixartual": {
      "command": "npx",
      "args": ["-y", "@pixartual/mcp-server"],
      "env": {
        "PIXARTUAL_API_KEY": "px_live_your_api_token"
      }
    }
  }
}`;

  return (
    <div className="min-h-screen bg-white text-ink-strong flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-[900px] w-full mx-auto px-5 md:px-12 py-12">
        <Link
          href="/docs"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          <span>Back to Documentation</span>
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-accent flex items-center justify-center">
            <Cpu size={24} weight="bold" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Model Context Protocol (MCP) Server
            </h1>
            <p className="text-xs text-neutral-500 mt-0.5">
              Connect external AI agents (Claude Desktop, Cursor, Antigravity) to your PixartualAI canvas.
            </p>
          </div>
        </div>

        {/* Overview */}
        <section className="mt-8 prose prose-neutral max-w-none text-sm leading-relaxed text-neutral-700">
          <p>
            The PixartualAI Model Context Protocol (MCP) server exposes real-time design tree tools, layout inspectors, and instant hot-reloading endpoints to compliant AI agent runtimes. This allows agents to programmatically assemble, style, and publish web pages inside your workspace without leaving your favorite IDE or chat interface.
          </p>

          <h2 className="text-lg font-bold text-neutral-900 mt-8 mb-3">Installation & Configuration</h2>
          <p>Add the following server configuration to your agent’s settings file (e.g., <code>claude_desktop_config.json</code>):</p>
        </section>

        {/* Code Box */}
        <div className="my-6 rounded-2xl bg-neutral-950 text-white overflow-hidden shadow-lg border border-neutral-800">
          <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/80 border-b border-neutral-800 text-xs">
            <span className="font-mono text-neutral-400">claude_desktop_config.json</span>
            <button
              onClick={() => handleCopy('config', mcpConfig)}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              {copiedSnippet === 'config' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedSnippet === 'config' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="p-4 font-mono text-xs text-neutral-200 overflow-x-auto">
            {mcpConfig}
          </pre>
        </div>

        {/* Tools Reference */}
        <h2 className="text-lg font-bold text-neutral-900 mt-10 mb-4">Exposed MCP Tools</h2>
        <div className="space-y-4">
          {[
            {
              name: 'pixartual_create_project',
              desc: 'Creates a new empty or prompt-seeded workspace canvas with responsive breakpoints.',
            },
            {
              name: 'pixartual_update_element',
              desc: 'Edits styling, copy, imagery, and layout attributes on selected AST nodes in realtime.',
            },
            {
              name: 'pixartual_export_code',
              desc: 'Returns self-contained React/Tailwind/TypeScript bundles ready for git push or Vercel deployment.',
            },
            {
              name: 'pixartual_bind_domain',
              desc: 'Attaches custom apex and subdomains with automatic Let’s Encrypt SSL verification.',
            },
          ].map((tool) => (
            <div key={tool.name} className="p-4 rounded-xl border border-neutral-200/90 bg-stone-50/50">
              <div className="font-mono text-xs font-semibold text-accent">{tool.name}</div>
              <p className="text-xs text-neutral-600 mt-1">{tool.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
