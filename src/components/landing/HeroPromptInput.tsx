'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MagicWand, Sparkle, ArrowRight, CaretRight } from '@phosphor-icons/react';
import { useStudioStore } from '@/store/useStudioStore';

export const HeroPromptInput: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const router = useRouter();
  const generateFromPrompt = useStudioStore((state) => state.generateFromPrompt);

  const starters = [
    'Portfolio with project scope estimator for UI/UX designers',
    'SaaS revenue churn & customer retention calculator',
    'Interactive 4-step startup viability assessment quiz',
    'Creator bento showcase with booking calendar link',
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    generateFromPrompt(prompt);
    router.push('/studio');
  };

  const handleStarterClick = (starterText: string) => {
    setPrompt(starterText);
    generateFromPrompt(starterText);
    router.push('/studio');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleGenerate}
        className="relative flex items-center p-1.5 sm:p-2 rounded-[14px] border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-xl shadow-neutral-200/40 dark:shadow-black/40 focus-within:ring-2 focus-within:ring-neutral-400 dark:focus-within:ring-neutral-600 transition-all"
      >
        <div className="pl-3 pr-2 text-neutral-400">
          <MagicWand size={20} weight="fill" className="text-neutral-800 dark:text-neutral-200" />
        </div>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe any idea: e.g. Minimalist freelance designer website with a budget estimator..."
          className="flex-1 bg-transparent px-2 py-2 text-sm sm:text-base text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[9px] bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-sm whitespace-nowrap"
        >
          <span>Generate</span>
          <ArrowRight size={14} weight="bold" />
        </button>
      </form>

      {/* Starter Suggestions Chips */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs font-mono text-neutral-400 mr-1 flex items-center gap-1">
          <Sparkle size={12} weight="fill" /> Try:
        </span>
        {starters.map((s, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleStarterClick(s)}
            className="text-xs px-2.5 py-1 rounded-[6px] border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors inline-flex items-center gap-1"
          >
            <span>{s.split(' ')[0]} {s.split(' ')[1]} {s.split(' ')[2]}</span>
            <CaretRight size={10} />
          </button>
        ))}
      </div>
    </div>
  );
};

