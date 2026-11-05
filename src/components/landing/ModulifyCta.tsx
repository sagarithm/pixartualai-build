'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MagicWand, ArrowRight } from '@phosphor-icons/react';
import { useStudioStore } from '@/store/useStudioStore';

export const ModulifyCta: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const router = useRouter();
  const generateFromPrompt = useStudioStore((state) => state.generateFromPrompt);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    generateFromPrompt(prompt);
    router.push('/studio');
  };

  return (
    <section id="cta" className="bg-white dark:bg-neutral-950 pt-16 pb-20 transition-colors">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-[50px]">
        <div className="relative overflow-hidden rounded-[24px] px-6 py-16 text-center md:px-10 md:py-[100px] shadow-2xl">
          {/* Exact Modulify CTA Gradient Background */}
          <img
            src="/images/cta-gradient-bg.webp"
            alt="CTA gradient"
            aria-hidden="true"
            width={1600}
            height={663}
            className="absolute inset-0 z-0 size-full object-cover"
          />

          <div className="relative z-[1] max-w-2xl mx-auto">
            <h2 className="font-display font-medium text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1]">
              What are we building?
            </h2>
            <p className="mx-auto mt-4 max-w-[500px] text-base sm:text-lg text-white/85 font-sans leading-relaxed">
              Describe what you want to create and watch it compile into a complete, interactive digital experience in seconds.
            </p>

            {/* Bottom prompt input bar */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-[12px] bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
            >
              <div className="pl-3 hidden sm:block text-white/70">
                <MagicWand size={20} weight="fill" />
              </div>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your idea in plain words..."
                className="w-full sm:flex-1 bg-transparent px-3 py-2 text-sm sm:text-base text-white placeholder-white/60 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[9px] bg-white text-neutral-900 font-semibold text-sm hover:bg-neutral-100 transition-colors shadow-sm whitespace-nowrap"
              >
                <span>Start Building</span>
                <ArrowRight size={14} weight="bold" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
