'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkle, SquaresFour, Sliders, Check } from '@phosphor-icons/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PRESET_TEMPLATES } from '@/lib/templates';
import { useStudioStore } from '@/store/useStudioStore';
import { useRouter } from 'next/navigation';

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const loadTemplate = useStudioStore((state) => state.loadTemplate);
  const router = useRouter();

  const categories = [
    { id: 'all', label: 'All Templates' },
    { id: 'portfolio', label: 'Personal Portfolios' },
    { id: 'tool', label: 'Interactive Calculators' },
    { id: 'personal', label: 'Diagnostic Quizzes' },
  ];

  const filtered = selectedCategory === 'all'
    ? PRESET_TEMPLATES
    : PRESET_TEMPLATES.filter((t) => t.category === selectedCategory);

  const handleSelectTemplate = (templateId: string) => {
    loadTemplate(templateId);
    router.push('/studio');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] dark:bg-[#0F0F0F] text-[#171717] dark:text-[#EDEDED]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mb-4">
            <SquaresFour size={14} weight="fill" />
            <span>Curated Interactive Experiences</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-neutral-900 dark:text-white">
            Choose a foundation.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans">
            Every template includes built-in interactive state (calculators, assessments, forms) and can be customized with AI in seconds.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-[7px] text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
                    : 'border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((tmpl) => (
            <div
              key={tmpl.id}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm hover:border-neutral-400 dark:hover:border-neutral-600 transition-all flex flex-col justify-between group"
            >
              {/* Header preview thumbnail */}
              <div className="p-6 border-b border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/40">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-[5px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 capitalize">
                    {tmpl.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Interactive State Ready
                  </span>
                </div>

                <div className="p-4 rounded-[10px] border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-inner">
                  <div className="text-xs font-display font-bold text-neutral-800 dark:text-neutral-200 truncate">
                    {tmpl.navigation.brandName}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-1 line-clamp-2">
                    {tmpl.sections[0]?.title}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                    {tmpl.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                    {tmpl.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">
                    {tmpl.sections.length} Stateful Sections
                  </span>

                  <button
                    onClick={() => handleSelectTemplate(tmpl.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[7px] bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    <span>Use Template</span>
                    <ArrowRight size={12} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

