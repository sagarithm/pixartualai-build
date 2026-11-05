'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { MfyFaqAccordion, FaqItem } from '@/components/landing/MfyFaqAccordion';
import { Check, X, ArrowRight, Sparkle, ShieldCheck, Lightning, Cube, Desktop } from '@phosphor-icons/react';

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
  faqs?: FaqItem[];
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
  faqs = [
    {
      q: `Can I migrate from ${competitorName} to PixartualAI?`,
      a: `Yes. If you have existing layouts, copy, or CMS schemas in ${competitorName}, you can import them into PixartualAI or paste your URLs to generate 1:1 responsive equivalents with AI editing unlocked.`,
    },
    {
      q: 'Do I need a separate hosting account like Vercel or Netlify?',
      a: 'No. Every PixartualAI project includes enterprise edge hosting, custom domain linking, and free wildcard SSL certificates out of the box.',
    },
    {
      q: 'Can I export clean source code?',
      a: 'Yes. You can export complete, standard Next.js / React and Tailwind CSS source code anytime without proprietary runtime fees or platform lock-in.',
    },
  ],
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Section 0: Authentic Compare Hero with hero-bg.jpg */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div aria-hidden="true" className="pointer-events-none absolute top-0 inset-x-3 bottom-3 z-0 overflow-hidden rounded-b-[24px] md:inset-x-5 md:bottom-5 md:rounded-b-[48px] xl:inset-x-8 xl:bottom-8 2xl:inset-x-[50px] 2xl:bottom-[50px] 2xl:rounded-b-[64px]">
            <img alt="" className="h-full w-full object-cover object-bottom" src="/images/kit/hero-bg.jpg" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1000px] text-center px-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
              <Sparkle size={14} weight="fill" />
              Direct Comparison
            </div>
            <h1 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-['Neutralsans']">
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-lg leading-relaxed text-neutral-600">
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

        {/* Section 1: Side by Side Comparison Matrix */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px] border-t border-neutral-100">
          <div className="mx-auto max-w-[1100px] px-5">
            <div className="mb-12 text-center">
              <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                PixartualAI and {competitorName}, side by side
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
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
                        <span className="font-semibold text-orange-600 text-xs sm:text-sm">{feat.pixartual}</span>
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
                        <span className="text-neutral-500 text-xs sm:text-sm">{feat.competitor}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Where PixartualAI pulls ahead */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div className="mx-auto max-w-[1100px] px-5">
            <div className="mb-14 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                Core Advantages
              </span>
              <h2 className="kit-heading mt-3 text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                {aheadTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {aheadPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 hover:border-orange-500 hover:shadow-md transition-all"
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 font-['Neutralsans']">{pt.title}</h3>
                  <p className="mt-3 text-neutral-600 leading-relaxed text-sm">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Bottleneck with authentic split.jpg image */}
        <section className="kit-root relative overflow-hidden bg-stone-50 py-20 md:py-[100px]">
          <div className="mx-auto max-w-[1240px] px-5 md:px-[50px]">
            <div className="flex items-center gap-8 md:flex-row md:gap-[40px] flex-col">
              <div className="w-full md:w-1/2">
                <div className="aspect-[631/480] w-full overflow-hidden rounded-2xl shadow-sm border border-neutral-200">
                  <img
                    alt="PixartualAI vs competitor visual comparison"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    src="/images/kit/split.jpg"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-6 md:w-1/2 lg:gap-8">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                  The Fundamental Difference
                </span>
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  {bottleneckTitle}
                </h2>
                <p className="text-[15px] leading-relaxed text-neutral-600">
                  {bottleneckDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Where Competitor is the better choice */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div className="mx-auto max-w-[1000px] px-5">
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                Fair & Balanced
              </span>
              <h2 className="kit-heading mt-3 text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                {competitorBetterTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {competitorBetterPoints.map((pt, idx) => (
                <div key={idx} className="rounded-xl border border-neutral-200 bg-neutral-50/60 p-6 shadow-xs">
                  <h3 className="text-lg font-bold text-neutral-900 font-['Neutralsans']">{pt.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: What comes with a PixartualAI site (Flame cards) */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div className="mx-auto max-w-[1240px] px-5 md:px-[50px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3.5">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  What comes with a PixartualAI site
                </h2>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  Everything required to ship, scale, and manage your digital experience.
                </p>
              </div>

              <div className="grid grid-cols-1 items-start gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
                <article className="kit-fcard relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-neutral-100 p-[25px] aspect-[253/368] min-h-[368px]">
                  <div>
                    <Lightning size={32} className="text-orange-500 mb-6" weight="duotone" />
                    <h3 className="kit-fcard__title text-lg font-medium text-neutral-950 font-['Neutralsans']">
                      Instant AI Generation
                    </h3>
                    <p className="kit-fcard__text mt-3 text-sm leading-relaxed text-neutral-600">
                      Turn prompts into functional responsive designs and interactive widgets in under 30 seconds.
                    </p>
                  </div>
                </article>

                <article className="kit-fcard relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-neutral-100 p-[25px] aspect-[253/368] min-h-[368px]">
                  <div>
                    <Cube size={32} className="text-orange-500 mb-6" weight="duotone" />
                    <h3 className="kit-fcard__title text-lg font-medium text-neutral-950 font-['Neutralsans']">
                      Visual Canvas Studio
                    </h3>
                    <p className="kit-fcard__text mt-3 text-sm leading-relaxed text-neutral-600">
                      Fine-tune copy, geometry, colors, typography, and spacing on an interactive live preview.
                    </p>
                  </div>
                </article>

                <article className="kit-fcard relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-neutral-100 p-[25px] aspect-[253/368] min-h-[368px]">
                  <div>
                    <ShieldCheck size={32} className="text-orange-500 mb-6" weight="duotone" />
                    <h3 className="kit-fcard__title text-lg font-medium text-neutral-950 font-['Neutralsans']">
                      Global Edge Hosting
                    </h3>
                    <p className="kit-fcard__text mt-3 text-sm leading-relaxed text-neutral-600">
                      Custom domain linking, auto SSL, and fast worldwide distribution with 99.99% uptime.
                    </p>
                  </div>
                </article>

                <article className="kit-fcard relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-neutral-100 p-[25px] aspect-[253/368] min-h-[368px]">
                  <div>
                    <Sparkle size={32} className="text-orange-500 mb-6" weight="duotone" />
                    <h3 className="kit-fcard__title text-lg font-medium text-neutral-950 font-['Neutralsans']">
                      Zero Code Lock-in
                    </h3>
                    <p className="kit-fcard__text mt-3 text-sm leading-relaxed text-neutral-600">
                      Export clean, standard React + Tailwind code anytime to host anywhere you want.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Proof Prompt to Page Screenshot */}
        <section className="kit-root relative overflow-hidden bg-white pb-20 md:pb-[100px]">
          <div className="mx-auto max-w-[1240px] px-5 md:px-[50px]">
            <div className="overflow-hidden rounded-3xl border border-neutral-200 shadow-md">
              <img
                alt="PixartualAI Studio prompt to page editor"
                className="w-full h-auto object-cover"
                src="/images/kit/dashboard.jpg"
              />
            </div>
          </div>
        </section>

        {/* Section 7: Compare FAQ */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px] border-t border-neutral-100">
          <div className="mx-auto max-w-[860px] px-5 md:px-[50px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3.5 text-center">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  PixartualAI vs {competitorName}, answered
                </h2>
                <p className="text-[15px] leading-relaxed text-neutral-600">
                  Common questions teams ask when evaluating platforms.
                </p>
              </div>

              <MfyFaqAccordion items={faqs} />
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
