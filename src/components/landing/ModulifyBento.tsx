'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkle, ChatCircleDots, Database, Sliders } from '@phosphor-icons/react';

export const ModulifyBento: React.FC = () => {
  return (
    <section className="bg-white dark:bg-neutral-950 py-16 md:py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-5 md:px-[50px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-medium text-3xl sm:text-5xl tracking-tight text-neutral-900 dark:text-white">
            Not just generated. Designed.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 font-sans">
            PixartualAI turns a prompt into a complete digital experience — layouts, content, interactive state, and hosting included. Then you refine every detail by chatting with AI.
          </p>
        </div>

        {/* Bento Grid — Modulify 1:1 Layout */}
        <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Card 1: Generate Pages (col-span-7) */}
          <article className="col-span-1 flex flex-col overflow-hidden rounded-[22px] bg-stone-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 md:col-span-7 shadow-sm group">
            <div className="relative flex min-h-0 flex-1 flex-col items-stretch justify-start overflow-hidden bg-stone-50 dark:bg-neutral-950/50">
              <img
                src="/images/bento-generate.webp"
                width={1400}
                height={683}
                loading="lazy"
                alt="Generating an interactive experience from a prompt"
                className="block w-full flex-none h-auto p-6 md:p-10 transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="px-6 pb-6 pt-5">
              <h3 className="font-display text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Generate pages
              </h3>
              <p className="mt-1.5 max-w-[42ch] text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                Create full multi-section experiences from a single prompt, screenshot, or curated template.
              </p>
            </div>
          </article>

          {/* Card 2: Refine with Chat (col-span-5) */}
          <article className="col-span-1 flex flex-col overflow-hidden rounded-[22px] bg-stone-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 md:col-span-5 shadow-sm group">
            <div className="relative flex min-h-0 flex-1 flex-col items-stretch justify-start overflow-hidden bg-stone-50 dark:bg-neutral-950/50">
              <img
                src="/images/bento-refine.webp"
                width={1018}
                height={706}
                loading="lazy"
                alt="Refining an interactive section with conversational AI chat"
                className="block w-full flex-none h-auto px-6 pt-6 transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="px-6 pb-6 pt-5">
              <h3 className="font-display text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Refine with chat
              </h3>
              <p className="mt-1.5 max-w-[42ch] text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                Ask for layout changes, copy tweaks, theme shifts, or responsive adjustments in natural language.
              </p>
            </div>
          </article>

          {/* Card 3: CMS & State (col-span-4) */}
          <article className="col-span-1 flex flex-col overflow-hidden rounded-[22px] bg-stone-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 md:col-span-4 shadow-sm group">
            <div className="relative flex min-h-0 flex-1 flex-col items-stretch justify-start overflow-hidden bg-stone-50 dark:bg-neutral-950/50">
              <img
                src="/images/bento-cms.webp"
                width={756}
                height={520}
                loading="lazy"
                alt="Managing interactive collections and live state"
                className="block w-full flex-none h-auto pl-5 pt-5 transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="px-6 pb-6 pt-5">
              <h3 className="font-display text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Interactive State & CMS
              </h3>
              <p className="mt-1.5 max-w-[42ch] text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                Manage dynamic content, project estimators, and live calculators with zero database complexity.
              </p>
            </div>
          </article>

          {/* Card 4: Build Beyond Landing Pages (col-span-8) */}
          <article className="col-span-1 flex flex-col justify-between overflow-hidden rounded-[22px] bg-stone-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 md:col-span-8 p-8 md:p-10 shadow-sm relative group">
            <div>
              <div className="size-10 rounded-[8px] bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-bold mb-6">
                <Sparkle size={20} weight="fill" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Build beyond landing pages
              </h3>
              <p className="mt-3 max-w-[54ch] text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                From personal portfolios and creator hubs to client portals and internal estimating micro-tools. You can build functional, stateful digital experiences that actually calculate, score, and react.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-500">
                100% Component AST Fidelity
              </span>
              <Link
                href="/studio"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-white hover:underline"
              >
                <span>Launch in Studio</span>
                <ArrowRight size={12} weight="bold" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

