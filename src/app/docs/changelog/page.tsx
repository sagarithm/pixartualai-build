'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  ClockCounterClockwise,
  ArrowLeft,
  Sparkle,
  Lightning,
  GitCommit,
  CheckCircle,
} from '@phosphor-icons/react';

export default function ChangelogPage() {
  const releases = [
    {
      version: 'v2.8.0',
      date: 'November 12, 2026',
      badge: 'Latest',
      highlights: [
        'Enhanced Visual Studio with real-time AST inspector and code-level synchronization.',
        'Zero-latency Copilot natural language prompt refiner with mode switching (Build, Edit, Enhance).',
        'Direct Google Drive, Slack, Supabase, and GitHub connector integrations.',
        'Production grade Let’s Encrypt automated SSL for apex and subdomains.',
      ],
    },
    {
      version: 'v2.7.2',
      date: 'November 4, 2026',
      badge: 'Major',
      highlights: [
        'Added personal API tokens and MCP server integration for cursor and agentic workflows.',
        'Expanded template library with modern high-converting layouts (Nova, Galway, Orvane, Atelier).',
        'Instant zip export for self-contained Next.js / Tailwind CSS / TypeScript codebases.',
      ],
    },
    {
      version: 'v2.6.0',
      date: 'October 21, 2026',
      badge: 'Release',
      highlights: [
        'Multi-member workspace support with granular role permissions (Owner, Editor, Viewer).',
        'Custom spending limits and usage credit metrics dashboard.',
        'Interactive preview sidecar with instant tablet and mobile viewport toggles.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-ink-strong flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-[850px] w-full mx-auto px-5 md:px-12 py-12">
        <Link
          href="/docs"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          <span>Back to Documentation</span>
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ClockCounterClockwise size={24} weight="bold" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Product Changelog
            </h1>
            <p className="text-xs text-neutral-500 mt-0.5">
              Weekly improvements, new features, and model upgrades shipped to PixartualAI.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12 space-y-12 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-neutral-200">
          {releases.map((rel) => (
            <div key={rel.version} className="relative pl-10">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-accent flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>

              <div className="flex items-center gap-2.5 mb-2">
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-stone-100 text-neutral-900">
                  {rel.version}
                </span>
                <span className="text-xs text-neutral-400">{rel.date}</span>
                {rel.badge === 'Latest' && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                    Latest
                  </span>
                )}
              </div>

              <div className="p-6 rounded-2xl border border-neutral-200/90 bg-white shadow-2xs">
                <ul className="space-y-2.5 text-xs text-neutral-700 leading-relaxed">
                  {rel.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle size={15} weight="fill" className="text-accent shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
