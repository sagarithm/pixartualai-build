'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { Check, X, ArrowRight, Sparkle, ShieldCheck, Lightning, Cube } from '@phosphor-icons/react';

export interface ComparisonFeature {
  name: string;
  pixartual: boolean | string;
  competitor: boolean | string;
}

export interface CompareDetailProps {
  competitorName: string;
  competitorSlug: string;
  title: string;
  subtitle: string;
  bottleneckTitle: string;
  bottleneckDesc: string;
  aheadTitle: string;
  aheadPoints: Array<{ title: string; desc: string }>;
  competitorBetterTitle: string;
  competitorBetterPoints: Array<{ title: string; desc: string }>;
  features: ComparisonFeature[];
}

export const CompareDetailTemplate: React.FC<CompareDetailProps> = ({
  competitorName,
  competitorSlug,
  title,
  subtitle,
  bottleneckTitle,
  bottleneckDesc,
  aheadTitle,
  aheadPoints,
  competitorBetterTitle,
  competitorBetterPoints,
  features,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/50 via-white to-white px-5 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="mx-auto max-w-[1000px] text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
              <Sparkle size={14} weight="fill" />
              Direct Comparison
            </div>
            <h1 className="text-[clamp(36px,5.5vw,64px)] font-bold tracking-tight text-neutral-900 font-['Neutralsans']">
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-neutral-600">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/dashboard" className="mfy-btn mfy-btn--primary">
                Build with PixartualAI
              </Link>
              <Link href="/compare" className="mfy-btn mfy-btn--outline">
                All Comparisons
              </Link>
            </div>
          </div>
        </section>

        {/* Side by Side Comparison Matrix */}
        <section className="border-t border-neutral-100 bg-stone-50/50 py-16 md:py-24">
          <div className="mx-auto max-w-[1100px] px-5">
            <div className="mb-12 text-center">
              <h2 className="text-[clamp(28px,3.8vw,42px)] font-bold tracking-tight text-neutral-900 font-['Neutralsans']">
                PixartualAI and {competitorName}, side by side
              </h2>
              <p className="mt-3 text-neutral-600">
                A factual, feature-by-feature evaluation of capabilities, speed, and workflow.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <div className="grid grid-cols-3 border-b border-neutral-200 bg-neutral-100/70 p-4 sm:p-6 text-sm font-semibold text-neutral-900">
                <div>Capability</div>
                <div className="text-center font-bold text-orange-600">PixartualAI</div>
                <div className="text-center text-neutral-600">{competitorName}</div>
              </div>

              <div className="divide-y divide-neutral-100">
                {features.map((feat, idx) => (
                  <div key={idx} className="grid grid-cols-3 items-center p-4 sm:p-5 text-sm hover:bg-neutral-50/60 transition-colors">
                    <div className="font-medium text-neutral-800">{feat.name}</div>
                    
                    {/* PixartualAI status */}
                    <div className="flex justify-center">
                      {typeof feat.pixartual === 'boolean' ? (
                        feat.pixartual ? (
                          <div className="flex size-7 items-center justify-center rounded-full bg-orange-100 text-[#fe3200]">
                            <Check size={16} weight="bold" />
                          </div>
                        ) : (
                          <div className="flex size-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
                            <X size={16} weight="bold" />
                          </div>
                        )
                      ) : (
                        <span className="font-semibold text-orange-600">{feat.pixartual}</span>
                      )}
                    </div>

                    {/* Competitor status */}
                    <div className="flex justify-center">
                      {typeof feat.competitor === 'boolean' ? (
                        feat.competitor ? (
                          <div className="flex size-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                            <Check size={16} weight="bold" />
                          </div>
                        ) : (
                          <div className="flex size-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
                            <X size={16} weight="bold" />
                          </div>
                        )
                      ) : (
                        <span className="text-neutral-600">{feat.competitor}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottleneck deep dive */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-[900px] px-5 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              The Fundamental Difference
            </span>
            <h2 className="mt-3 text-[clamp(28px,4vw,44px)] font-bold text-neutral-900 font-['Neutralsans']">
              {bottleneckTitle}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              {bottleneckDesc}
            </p>
          </div>
        </section>

        {/* Where PixartualAI pulls ahead */}
        <section className="bg-neutral-900 py-20 text-white md:py-28">
          <div className="mx-auto max-w-[1100px] px-5">
            <div className="mb-14 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                Core Advantages
              </span>
              <h2 className="mt-3 text-[clamp(28px,4vw,44px)] font-bold text-white font-['Neutralsans']">
                {aheadTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {aheadPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8 hover:border-orange-500/50 transition-colors"
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{pt.title}</h3>
                  <p className="mt-3 text-neutral-400 leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where Competitor is the better choice */}
        <section className="py-20 bg-stone-50 md:py-28">
          <div className="mx-auto max-w-[1000px] px-5">
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                Fair & Balanced
              </span>
              <h2 className="mt-3 text-[clamp(26px,3.5vw,38px)] font-bold text-neutral-900 font-['Neutralsans']">
                {competitorBetterTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {competitorBetterPoints.map((pt, idx) => (
                <div key={idx} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-neutral-900">{pt.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What comes with PixartualAI */}
        <section className="py-20 bg-white md:py-28">
          <div className="mx-auto max-w-[1100px] px-5">
            <div className="mb-14 text-center">
              <h2 className="text-[clamp(28px,3.8vw,42px)] font-bold text-neutral-900 font-['Neutralsans']">
                What comes with every PixartualAI project
              </h2>
              <p className="mt-3 text-neutral-600">
                Everything required to ship, scale, and manage your digital experience.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition-shadow">
                <Lightning size={32} className="text-orange-500 mb-4" weight="fill" />
                <h4 className="text-base font-semibold text-neutral-900">Instant AI Generation</h4>
                <p className="mt-2 text-sm text-neutral-600">Turn prompts into functional responsive designs and interactive widgets in seconds.</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition-shadow">
                <Cube size={32} className="text-orange-500 mb-4" weight="fill" />
                <h4 className="text-base font-semibold text-neutral-900">Visual Drag & Drop Studio</h4>
                <p className="mt-2 text-sm text-neutral-600">Fine-tune copy, geometry, colors, typography, and layout on an interactive canvas.</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition-shadow">
                <ShieldCheck size={32} className="text-orange-500 mb-4" weight="fill" />
                <h4 className="text-base font-semibold text-neutral-900">Global Edge Hosting</h4>
                <p className="mt-2 text-sm text-neutral-600">Custom domain linking, auto SSL, and fast worldwide edge distribution with 99.99% uptime.</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition-shadow">
                <Sparkle size={32} className="text-orange-500 mb-4" weight="fill" />
                <h4 className="text-base font-semibold text-neutral-900">Zero Code Lock-in</h4>
                <p className="mt-2 text-sm text-neutral-600">Export clean, standard React + Tailwind code anytime to host anywhere you want.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
};

