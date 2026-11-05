'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { ArrowUpRight } from '@phosphor-icons/react';

const articles = [
  {
    slug: 'future-of-ai-web-design',
    title: 'The Future of AI Web Design: Beyond Static Generators',
    summary: 'Why early prompt-to-HTML tools failed, and how conversational design systems are changing how modern software is built.',
    tag: 'Analysis',
    date: 'Nov 2026',
    readTime: '5 min read',
  },
  {
    slug: 'webflow-migration-guide',
    title: 'Migrating from Webflow to AI-Native Platforms: A Technical Deep Dive',
    summary: 'How 1:1 DOM translation preserves your CSS classes and responsive breakpoints while unlocking chat-based refactoring.',
    tag: 'Engineering',
    date: 'Oct 2026',
    readTime: '7 min read',
  },
  {
    slug: 'interactive-micro-tools',
    title: 'Why Every SaaS Landing Page Needs an Interactive Calculator',
    summary: 'Conversion case studies showing a 3.4x boost in lead qualification when replacing static copy with stateful estimators.',
    tag: 'Growth',
    date: 'Oct 2026',
    readTime: '4 min read',
  },
  {
    slug: 'design-systems-tokens',
    title: 'Constraining AI with Design Tokens: Zero Visual Drift',
    summary: 'How PixartualAI enforces typography scales, stone color palettes, and Phosphor icon sets across every generation.',
    tag: 'Design',
    date: 'Sep 2026',
    readTime: '6 min read',
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center px-5 max-w-[1240px] mx-auto">
          <h1 className="text-[clamp(36px,6vw,56px)] font-medium leading-[1.15] text-neutral-900 font-['Neutralsans']">
            Everything about AI Web Design
          </h1>
          <p className="mt-4 max-w-[580px] mx-auto text-[clamp(1rem,1.2vw,1.12rem)] leading-relaxed text-gray-500">
            Thoughts, frameworks, and engineering breakdowns on building the next generation of visual software with AI.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/insights" className="px-4 py-1.5 rounded-full text-xs font-semibold bg-neutral-950 text-white">
              All Articles
            </Link>
            <Link href="/insights/use-cases" className="px-4 py-1.5 rounded-full text-xs font-medium bg-stone-100 text-neutral-600 hover:bg-stone-200">
              Use Cases & Case Studies
            </Link>
          </div>
        </section>

        <section className="pb-20 px-5 max-w-[1000px] mx-auto">
          <div className="space-y-6">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="p-7 rounded-[22px] border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-lg transition-all group flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer"
              >
                <div className="max-w-[650px]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#fc8c04] bg-orange-50 px-2.5 py-0.5 rounded-full">
                      {art.tag}
                    </span>
                    <span className="text-xs text-neutral-400">{art.date} · {art.readTime}</span>
                  </div>
                  <h2 className="text-xl font-medium font-['Neutralsans'] text-neutral-900 group-hover:text-[#fc8c04] transition-colors mb-2">
                    {art.title}
                  </h2>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="size-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 group-hover:border-neutral-950 group-hover:text-neutral-950 transition-colors">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
