'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [prompt, setPrompt] = useState('');

  const samplePrompts = [
    'SaaS Landing Page',
    'Portfolio',
    'Dashboard',
    'Agency Website',
    'App Website',
    'Client Portal',
    'Import Webflow Site',
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    router.push(`/dashboard?prompt=${encodeURIComponent(prompt)}`);
  };

  return (
    <section className="box-border px-1.5 md:px-[50px]" id="hero">
      <div className="relative w-full overflow-hidden rounded-b-[42px] bg-[linear-gradient(180deg,#ffffff_0%,#f5f3ff_70%,#fbcfe8_99.04%)] px-4 pb-9 pt-[18px] md:px-[50px] md:pb-[50px] md:pt-7">
        {/* Ambient video background with glowing orbs */}
        <video
          aria-hidden="true"
          autoPlay
          className="pointer-events-none absolute inset-0 z-0 size-full object-cover"
          loop
          muted
          playsInline
          poster="/images/hero-video-poster.webp"
          preload="auto"
          src="/videos/hero-background.webm"
        />

        <div className="relative z-[2] mx-auto flex max-w-[960px] flex-col items-center pt-5 text-center md:pt-[30px]">
          <h1 className="mb-[18px] max-w-[780px] text-[clamp(32px,5vw,52px)] font-medium leading-[1.25] tracking-[-0.01em] text-neutral-900 font-['Neutralsans']">
            Build a{' '}
            <span className="hero-shine font-['Neutralsans'] font-bold text-neutral-900" data-text="polished">
              polished
            </span>{' '}
            digital experience with AI.
          </h1>

          <p className="mb-[30px] max-w-[600px] text-[clamp(1rem,1.4vw,1.18rem)] leading-relaxed text-gray-500 md:mb-[38px]">
            Describe what you want to build. PixartualAI turns your prompt into a polished landing page, website, dashboard, or app, ready to edit, refine, and launch.
          </p>

          {/* Prompt Input Box with Rainbow Glowing Ring */}
          <div className="relative mx-auto w-full max-w-[792px]">
            <div className="relative isolate w-full rounded-[20px] p-1.5">
              <div aria-hidden="true" className="hero-ring-glow" />
              <div aria-hidden="true" className="hero-ring" />

              <form
                onSubmit={handleGenerate}
                className="relative z-[1] flex w-full flex-col rounded-[14px] bg-white p-3.5 text-left shadow-[0_4px_16px_rgba(0,0,0,0.06)] md:p-4 focus-within:ring-2 focus-within:ring-[#fe3200] focus-within:ring-offset-1 min-h-[150px] md:min-h-[165px] justify-between"
              >
                <textarea
                  aria-label="Describe what you want to build"
                  className="flex w-full outline-none transition-colors min-w-0 rounded-none border-0 bg-transparent p-0 relative z-[1] resize-none px-1 py-1.5 text-base leading-normal text-neutral-900 placeholder:text-gray-400 md:text-[17px]"
                  placeholder="Ask PixartualAI to build a SaaS landing page with pricing, interactive demo, and testimonials…"
                  rows={3}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleGenerate(e);
                    }
                  }}
                />

                <div className="relative z-[1] flex items-center justify-end gap-3 mt-2">
                  <button type="submit" className="mfy-btn mfy-btn--primary">
                    Generate
                  </button>
                </div>
              </form>
            </div>

            {/* Quick Suggestion Pills */}
            <div className="mt-[30px] flex max-w-[760px] flex-wrap items-center justify-center gap-x-1 gap-y-1">
              {samplePrompts.map((p, idx) => (
                <React.Fragment key={p}>
                  <button
                    type="button"
                    onClick={() => setPrompt(`Build a modern ${p.toLowerCase()} with high converting layout`)}
                    className="cursor-pointer rounded-lg border-0 bg-transparent px-[9px] py-[5px] text-sm text-neutral-500 transition-colors hover:bg-gray-100/80 hover:text-neutral-900"
                  >
                    {p}
                  </button>
                  {idx < samplePrompts.length - 1 && (
                    <span aria-hidden="true" className="select-none text-sm text-gray-300">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
