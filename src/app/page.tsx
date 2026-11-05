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
  CheckCircle,
  CaretDown,
  DeviceMobile,
  Devices,
  ChatCircleText,
  Sliders,
  Database,
  Globe,
} from '@phosphor-icons/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LiveInteractivePreview } from '@/components/landing/LiveInteractivePreview';
import { PRESET_TEMPLATES } from '@/lib/templates';
import { useStudioStore } from '@/store/useStudioStore';

export default function HomePage() {
  const [heroPrompt, setHeroPrompt] = useState('');
  const [activeTab, setActiveTab] = useState<'generate' | 'chat' | 'cms' | 'beyond'>('generate');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const router = useRouter();
  const generateFromPrompt = useStudioStore((state) => state.generateFromPrompt);

  const heroCategories = [
    'SaaS Landing Page',
    'Portfolio',
    'Interactive Calculator',
    'Diagnostic Quiz',
    'Creator Bento',
    'Agency Showcase',
  ];

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroPrompt.trim()) return;
    generateFromPrompt(heroPrompt);
    router.push('/studio');
  };

  const handleChipClick = (category: string) => {
    const fullPrompt = `${category} with interactive components and clean modern design`;
    setHeroPrompt(fullPrompt);
    generateFromPrompt(fullPrompt);
    router.push('/studio');
  };

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
        {/* HERO SECTION — Matching Modulify 1:1 */}
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
          <div className="mt-10 max-w-2xl mx-auto">
            <form
              onSubmit={handleHeroSubmit}
              className="relative flex items-center p-2 rounded-[14px] border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-xl shadow-neutral-200/50 dark:shadow-black/50 focus-within:ring-2 focus-within:ring-neutral-400 dark:focus-within:ring-neutral-600 transition-all"
            >
              <div className="pl-3 pr-2 text-neutral-400">
                <MagicWand size={20} weight="fill" className="text-neutral-900 dark:text-white" />
              </div>
              <input
                type="text"
                value={heroPrompt}
                onChange={(e) => setHeroPrompt(e.target.value)}
                placeholder="Describe your website or app in plain language..."
                className="flex-1 bg-transparent px-2 py-2 text-sm sm:text-base text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[9px] bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-sm whitespace-nowrap"
              >
                <span>Generate</span>
                <ArrowRight size={14} weight="bold" />
              </button>
            </form>

            {/* Quick Category Buttons matching Modulify */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {heroCategories.map((cat, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleChipClick(cat)}
                  className="text-xs px-3 py-1.5 rounded-[7px] border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors shadow-sm"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* LIVE CANVAS INTERACTIVE DEMO */}
        <section className="py-4">
          <LiveInteractivePreview />
        </section>

        {/* SECTION: "From prompt to polished output." */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-800">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
              The Creation Pipeline
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2">
              From prompt to polished output.
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 mt-3 max-w-xl mx-auto">
              PixartualAI does not stop at raw text. It translates ideas into full interactive architectures.
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

        {/* SECTION: "Not just generated. Designed." */}
        <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-800">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
              Quality by Design
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2">
              Not just generated. Designed.
            </h2>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
              {[
                { id: 'generate', label: 'Generate pages' },
                { id: 'chat', label: 'Refine with chat' },
                { id: 'cms', label: 'Interactive state & CMS' },
                { id: 'beyond', label: 'Build beyond landing pages' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-[7px] text-xs font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Showcase Card */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 sm:p-12 shadow-sm min-h-[300px] flex items-center justify-center text-center">
            {activeTab === 'generate' && (
              <div className="max-w-xl">
                <div className="size-12 rounded-[10px] bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center mx-auto mb-4">
                  <MagicWand size={24} weight="fill" />
                </div>
                <h3 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
                  Generates complete multi-section experiences
                </h3>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
                  Every generation constructs cohesive page hierarchies, brand badges, copy, and responsive layouts tailored to your exact prompt.
                </p>
              </div>
            )}

            {activeTab === 'chat' && (
              <div className="max-w-xl">
                <div className="size-12 rounded-[10px] bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center mx-auto mb-4">
                  <ChatCircleText size={24} weight="fill" />
                </div>
                <h3 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
                  Surgical chat refinement directly on the canvas
                </h3>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
                  Chat with the assistant to apply targeted changes. Change a single button, rewrite a paragraph, or invert the color theme without wiping your manual adjustments.
                </p>
              </div>
            )}

            {activeTab === 'cms' && (
              <div className="max-w-xl">
                <div className="size-12 rounded-[10px] bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center mx-auto mb-4">
                  <Database size={24} weight="fill" />
                </div>
                <h3 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
                  Real calculators, assessments, and collections
                </h3>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
                  Embed functioning math models, scoring quizzes, and dynamic table rows directly into your experience with zero database maintenance.
                </p>
              </div>
            )}

            {activeTab === 'beyond' && (
              <div className="max-w-xl">
                <div className="size-12 rounded-[10px] bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center mx-auto mb-4">
                  <Globe size={24} weight="fill" />
                </div>
                <h3 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
                  Web apps, client portals, and micro-tools
                </h3>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
                  Start with personal websites, then expand into interactive client estimators, assessment tools, and full web application interfaces.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* SECTION: "A full platform, not just a generator." */}
        <section id="features" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-800">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
              Platform Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2">
              A full platform, not just a generator.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm">
              <MagicWand size={22} weight="fill" className="text-neutral-900 dark:text-white mb-4" />
              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white">AI Builder</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-sans">
                Compiles schema-constrained Component ASTs rather than hallucinated HTML strings.
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
            <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
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

        {/* BOTTOM CALL TO ACTION: "What are we building?" */}
        <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 text-white p-12 sm:p-16 relative overflow-hidden shadow-2xl">
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight max-w-2xl mx-auto leading-tight">
              What are we building?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-lg mx-auto font-sans">
              Describe what you want to create and watch it come alive on the canvas in seconds.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="/studio"
                className="px-6 py-3 rounded-[10px] bg-white text-neutral-900 font-semibold text-sm hover:opacity-90 transition-opacity shadow-md inline-flex items-center gap-2"
              >
                <span>Start Building Now</span>
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
