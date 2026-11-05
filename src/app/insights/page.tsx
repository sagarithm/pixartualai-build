'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { ArrowUpRight, BookOpen } from '@phosphor-icons/react';

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
        {/* Header with hero-bg.jpg */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div aria-hidden="true" className="pointer-events-none absolute top-0 inset-x-3 bottom-3 z-0 overflow-hidden rounded-b-[24px] md:inset-x-5 md:bottom-5 md:rounded-b-[48px] xl:inset-x-8 xl:bottom-8 2xl:inset-x-[50px] 2xl:bottom-[50px] 2xl:rounded-b-[64px]">
            <img alt="" className="h-full w-full object-cover object-bottom" src="/images/kit/hero-bg.jpg" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1000px] text-center px-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
              <BookOpen size={14} weight="fill" />
              Insights & Architecture
            </div>
            <h1 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-['Neutralsans']">
              Everything about AI Web Design
            </h1>
            <p className="mx-auto mt-4 max-w-[620px] text-lg leading-relaxed text-neutral-600">
              Thoughts, frameworks, and engineering breakdowns on building the next generation of visual software with AI.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <Link href="/insights" className="px-5 py-2 rounded-full text-xs font-semibold bg-neutral-950 text-white shadow-sm">
                All Articles
              </Link>
              <Link href="/insights/use-cases" className="px-5 py-2 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors">
                Use Cases & Stories
              </Link>
            </div>
          </div>
        </section>

        {/* Articles List */}
        <section className="pb-20 px-5 max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="group flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-7 shadow-xs hover:border-orange-500 hover:shadow-md transition-all cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                      {art.tag}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {art.date} · {art.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900 group-hover:text-orange-600 transition-colors font-['Neutralsans']">
                    {art.title}
                  </h2>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-orange-600 group-hover:translate-x-1 transition-transform">
                  Read article <ArrowUpRight size={14} />
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
