'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sparkle,
  MagicWand,
  SquaresFour,
  ArrowRight,
  Lightning,
  PaintBrush,
  Code,
  ShieldCheck,
  CaretDown,
  Devices,
} from '@phosphor-icons/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroPromptInput } from '@/components/landing/HeroPromptInput';
import { LiveInteractivePreview } from '@/components/landing/LiveInteractivePreview';
import { ModulifyBento } from '@/components/landing/ModulifyBento';
import { CapabilitiesCarousel } from '@/components/landing/CapabilitiesCarousel';
import { ShowcaseCollage } from '@/components/landing/ShowcaseCollage';
import { ModulifyCta } from '@/components/landing/ModulifyCta';

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'How is PixartualAI different from static AI website builders?',
      a: 'Most AI builders produce static brochure text that cannot calculate, score, or react. PixartualAI generates stateful, interactive digital experiences — including real project cost estimators, SaaS ARR calculators, interactive diagnostic quizzes, and bento grids, all with zero coding required.',
    },
    {
      q: 'Can I start from a template instead of describing to AI?',
      a: 'Yes! PixartualAI offers a dual-origin workflow. You can browse curated interactive templates (portfolios, micro-tools, diagnostic assessments) and immediately customize them in the visual studio, or describe your unique idea to our AI generator.',
    },
    {
      q: 'Can I share my creation or connect my custom domain?',
      a: 'Every experience gets an instant, globally hosted vanity share link (`pixartual.ai/p/[id]`) that loads in under 300ms on the edge. You can also export clean, self-contained HTML and React code.',
    },
    {
      q: 'Do I need any programming or design experience?',
      a: 'None. PixartualAI applies established design rules (NeutralSans typography hierarchy, stone palettes, and Phosphor icons) automatically so your experiences look established and production-ready from moment one.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] dark:bg-[#0F0F0F] text-[#171717] dark:text-[#EDEDED] transition-colors">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION — Authentic Modulify 1:1 Layout */}
        <section className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 shadow-sm mb-6 backdrop-blur-sm">
            <Sparkle size={14} weight="fill" className="text-neutral-900 dark:text-white" />
            <span className="text-neutral-800 dark:text-neutral-200">
              The AI Digital Creation Platform
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight max-w-5xl mx-auto leading-[1.08] text-neutral-950 dark:text-white">
            Build a polished digital experience with AI.
          </h1>

          <p className="mt-6 text-base sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-sans leading-relaxed">
            Turn a prompt or curated template into a real interactive website, micro-tool, calculator, or web app: layouts, copy, interactive state, and publishing included.
          </p>

          {/* Interactive Prompt Box */}
          <div className="mt-10">
            <HeroPromptInput />
          </div>
        </section>

        {/* LIVE CANVAS INTERACTIVE DEMO */}
        <section className="py-2">
          <LiveInteractivePreview />
        </section>

        {/* SECTION: "From prompt to polished output." */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-800">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
              The Creation Pipeline
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl tracking-tight text-neutral-900 dark:text-white mt-2">
              From prompt to polished output.
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 mt-3 max-w-xl mx-auto font-sans">
              PixartualAI does not stop at raw text. It translates ideas into complete interactive architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
              <span className="font-mono text-2xl font-bold text-neutral-300 dark:text-neutral-700">01</span>
              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white mt-4">
                Describe or Choose
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-sans leading-relaxed">
                Start from a curated template or describe any digital experience in conversational words.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
              <span className="font-mono text-2xl font-bold text-neutral-300 dark:text-neutral-700">02</span>
              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white mt-4">
                AST Synthesis
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-sans leading-relaxed">
                The engine compiles a responsive Component AST with typography tokens and dynamic state.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
              <span className="font-mono text-2xl font-bold text-neutral-300 dark:text-neutral-700">03</span>
              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white mt-4">
                Refine with Chat
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-sans leading-relaxed">
                Ask the in-canvas AI Copilot to tweak headlines, swap layouts, or adjust themes with zero loss of state.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
              <span className="font-mono text-2xl font-bold text-neutral-300 dark:text-neutral-700">04</span>
              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white mt-4">
                Publish or Export
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-sans leading-relaxed">
                Deploy instantly to global edge URLs, bind custom domains, or download clean React/HTML source code.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: "Not just generated. Designed." (With Extracted Bento Images) */}
        <ModulifyBento />

        {/* SECTION: "Build Anything" Capabilities Carousel (With Extracted Cap WebP Images) */}
        <CapabilitiesCarousel />

        {/* SECTION: Live Production Showcase (With Extracted Collage Images) */}
        <ShowcaseCollage />

        {/* SECTION: "A full platform, not just a generator." */}
        <section id="features" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-800">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
              Platform Architecture
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl tracking-tight text-neutral-900 dark:text-white mt-2">
              A full platform, not just a generator.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm">
              <MagicWand size={22} weight="fill" className="text-neutral-900 dark:text-white mb-4" />
              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white">AI Builder</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-sans">
                Compiles schema-constrained Component ASTs rather than fragile raw HTML strings.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm">
              <Lightning size={22} weight="fill" className="text-neutral-900 dark:text-white mb-4" />
              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white">Interactive State</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-sans">
                Real calculators, sliders, and assessments that execute live in the user’s browser.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm">
              <Devices size={22} weight="fill" className="text-neutral-900 dark:text-white mb-4" />
              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white">Responsive Viewports</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-sans">
                Toggle between Desktop, Tablet (768px), and Mobile (375px) with pixel precision.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm">
              <PaintBrush size={22} weight="fill" className="text-neutral-900 dark:text-white mb-4" />
              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white">NeutralSans Typography</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-sans">
                Signature 3-tier font system with NeutralSans headings, Inter body, and DM Mono accents.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm">
              <ShieldCheck size={22} weight="fill" className="text-neutral-900 dark:text-white mb-4" />
              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white">Edge Publishing</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-sans">
                Sub-300ms global edge delivery with instant share links and custom domain binding.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm">
              <Code size={22} weight="bold" className="text-neutral-900 dark:text-white mb-4" />
              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white">Clean Export</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-sans">
                Zero lock-in. Export clean, standalone React/Tailwind components or static HTML bundles.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-t border-neutral-200 dark:border-neutral-800">
          <div className="text-center mb-12">
            <h2 className="font-display font-medium text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-medium text-neutral-900 dark:text-white text-base"
                >
                  <span>{faq.q}</span>
                  <CaretDown
                    size={16}
                    className={`transition-transform duration-200 text-neutral-400 ${
                      activeFaq === idx ? 'rotate-180 text-neutral-900 dark:text-white' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans border-t border-neutral-100 dark:border-neutral-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION: "What are we building?" (With Extracted CTA Gradient Image) */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
