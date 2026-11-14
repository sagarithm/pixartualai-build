'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  Code,
  ArrowLeft,
  Copy,
  Check,
  Terminal,
  Key,
} from '@phosphor-icons/react';

export default function APIDocsPage() {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const curlExample = `curl -X POST https://api.pixartual.ai/v1/projects/generate \\
  -H "Authorization: Bearer px_live_8f93..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Modern SaaS landing page with dark theme and pricing table",
    "theme": "dark",
    "framework": "nextjs"
  }'`;

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
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Code size={24} weight="bold" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">
              REST API Reference
            </h1>
            <p className="text-xs text-neutral-500 mt-0.5">
              Programmatic endpoints for automated site generation, deployment, and data synchronization.
            </p>
          </div>
        </div>

        {/* Authentication Note */}
        <div className="my-6 p-4 rounded-xl border border-neutral-200/90 bg-stone-50/60 flex items-start gap-3">
          <Key size={18} className="text-accent shrink-0 mt-0.5" />
          <div className="text-xs text-neutral-700 leading-relaxed">
            <span className="font-semibold text-neutral-900">Authentication:</span> All API requests require an API token passed in the <code>Authorization: Bearer &lt;TOKEN&gt;</code> header. Tokens can be generated in your <Link href="/dashboard/account/tokens" className="text-accent underline font-medium">Account Tokens</Link> dashboard.
          </div>
        </div>

        {/* Endpoint 1: Generate */}
        <div className="mt-8 border border-neutral-200/90 rounded-2xl p-6 bg-white shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded font-mono text-[11px] font-bold bg-blue-100 text-blue-700">POST</span>
            <span className="font-mono text-xs font-semibold text-neutral-900">/v1/projects/generate</span>
          </div>
          <p className="text-xs text-neutral-600 mb-4">
            Generates a brand new responsive website based on a natural language prompt specification.
          </p>

          <div className="rounded-xl bg-neutral-950 text-white overflow-hidden shadow-sm">
            <div className="flex items-center justify-between px-3.5 py-2 bg-neutral-900 text-xs">
              <span className="font-mono text-[11px] text-neutral-400">cURL Example</span>
              <button
                onClick={() => handleCopy('curl', curlExample)}
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white"
              >
                {copiedSnippet === 'curl' ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span className="text-[11px]">{copiedSnippet === 'curl' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-3.5 font-mono text-xs text-neutral-200 overflow-x-auto leading-relaxed">
              {curlExample}
            </pre>
          </div>
        </div>

        {/* Endpoint 2: List Projects */}
        <div className="mt-6 border border-neutral-200/90 rounded-2xl p-6 bg-white shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded font-mono text-[11px] font-bold bg-emerald-100 text-emerald-700">GET</span>
            <span className="font-mono text-xs font-semibold text-neutral-900">/v1/projects</span>
          </div>
          <p className="text-xs text-neutral-600">
            Returns all web application projects in your workspace with deployment status and live URLs.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
