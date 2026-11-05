'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { Check, X, ArrowRight } from '@phosphor-icons/react';

export default function ComparePage() {
  const [selectedCompetitor, setSelectedCompetitor] = useState<'framer' | 'webflow' | 'lovable'>('webflow');

  const competitors = [
    {
      id: 'webflow',
      name: 'Webflow',
      title: 'PixartualAI vs Webflow',
      desc: 'Webflow requires complex CSS box-model knowledge and manual styling for every breakpoint. PixartualAI allows you to describe what you want in plain language while maintaining visual precision and instantly generating stateful apps.',
      features: [
        { name: 'AI prompt-to-experience generation', pixartual: true, competitor: false },
        { name: 'Conversational chat refinement', pixartual: true, competitor: false },
        { name: 'Built-in interactive state (calculators/quizzes)', pixartual: true, competitor: false },
        { name: 'Visual canvas customization', pixartual: true, competitor: true },
        { name: 'Production hosting & SSL', pixartual: true, competitor: true },
        { name: 'Zero coding requirement', pixartual: true, competitor: false },
        { name: '1:1 Webflow site import', pixartual: true, competitor: false },
        { name: 'Fast learning curve (< 5 minutes)', pixartual: true, competitor: false },
      ],
    },
    {
      id: 'framer',
      name: 'Framer',
      title: 'PixartualAI vs Framer',
      desc: 'Framer is great for simple static marketing pages, but falls short when you need full-stack databases, dynamic stateful calculation tools, or complex user flows. PixartualAI bridges the gap between design and functional software.',
      features: [
        { name: 'Stateful interactive calculations', pixartual: true, competitor: false },
        { name: 'Conversational design refactoring', pixartual: true, competitor: false },
        { name: 'Full-stack database collections', pixartual: true, competitor: false },
        { name: 'Visual canvas & layout editing', pixartual: true, competitor: true },
        { name: 'Instant edge deployment', pixartual: true, competitor: true },
        { name: 'Self-contained code export (React/HTML)', pixartual: true, competitor: false },
        { name: 'Enterprise client portal workflows', pixartual: true, competitor: false },
        { name: 'No proprietary component lock-in', pixartual: true, competitor: false },
      ],
    },
    {
      id: 'lovable',
      name: 'Lovable / v0',
      title: 'PixartualAI vs Lovable & v0',
      desc: 'First-generation AI code generators spit out raw code that requires developers to inspect, deploy, and fix. PixartualAI is a complete visual design studio where anyone can edit typography, styles, and layouts visually without touching a terminal.',
      features: [
        { name: 'Visual direct canvas manipulation', pixartual: true, competitor: false },
        { name: 'Curated design system & NeutralSans typography', pixartual: true, competitor: false },
        { name: 'Ready-to-use template catalog', pixartual: true, competitor: false },
        { name: 'AI code generation', pixartual: true, competitor: true },
        { name: 'Zero terminal / zero dev setup required', pixartual: true, competitor: false },
        { name: 'Instant public share links (300ms edge)', pixartual: true, competitor: false },
        { name: 'Client portals & CMS built-in', pixartual: true, competitor: false },
        { name: '1:1 Webflow site migration', pixartual: true, competitor: false },
      ],
    },
  ];

  const current = competitors.find((c) => c.id === selectedCompetitor)!;

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center px-5 max-w-[1240px] mx-auto">
          <h1 className="text-[clamp(36px,6vw,56px)] font-medium leading-[1.15] text-neutral-900 font-['Neutralsans']">
            How PixartualAI compares
          </h1>
          <p className="mt-4 max-w-[620px] mx-auto text-[clamp(1rem,1.2vw,1.12rem)] leading-relaxed text-gray-500">
            Compare PixartualAI with traditional visual web design tools, manual website builders, and developer-first AI code generators.
          </p>

          {/* Competitor Switcher */}
          <div className="mt-9 inline-flex items-center gap-2 p-1.5 rounded-full bg-stone-100 border border-neutral-200">
            {competitors.map((comp) => (
              <button
                key={comp.id}
                type="button"
                onClick={() => setSelectedCompetitor(comp.id as any)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCompetitor === comp.id
                    ? 'bg-neutral-950 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                vs {comp.name}
              </button>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section className="pb-20 px-5 max-w-[1000px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-medium font-['Neutralsans'] text-neutral-900 mb-3">
              {current.title}
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-[700px] mx-auto leading-relaxed">
              {current.desc}
            </p>
          </div>

          {/* Feature Matrix Table */}
          <div className="rounded-[22px] border border-neutral-200 bg-white overflow-hidden shadow-lg">
            <div className="grid grid-cols-[1fr_120px_120px] sm:grid-cols-[1fr_180px_180px] bg-stone-50 border-b border-neutral-200 p-4 sm:p-5 font-medium text-xs sm:text-sm text-neutral-700">
              <div>Capability</div>
              <div className="text-center font-bold text-neutral-950 font-['Neutralsans']">PixartualAI</div>
              <div className="text-center text-neutral-500">{current.name}</div>
            </div>

            <div className="divide-y divide-neutral-100">
              {current.features.map((f, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_120px_120px] sm:grid-cols-[1fr_180px_180px] items-center p-4 sm:p-5 text-xs sm:text-sm hover:bg-stone-50/60 transition-colors"
                >
                  <div className="font-medium text-neutral-800">{f.name}</div>
                  <div className="flex justify-center">
                    {f.pixartual ? (
                      <div className="size-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Check size={14} weight="bold" />
                      </div>
                    ) : (
                      <div className="size-6 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
                        <X size={14} weight="bold" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {f.competitor ? (
                      <div className="size-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Check size={14} weight="bold" />
                      </div>
                    ) : (
                      <div className="size-6 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center">
                        <X size={14} weight="bold" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Action below table */}
          <div className="mt-10 text-center">
            <Link href="/dashboard" className="mfy-btn mfy-btn--primary">
              Try PixartualAI for free <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* CTA Banner */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
