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
      <div className="relative w-full overflow-hidden rounded-b-[42px] bg-[linear-gradient(180deg,theme(colors.white)_0%,theme(colors.violet.50)_70%,theme(colors.pink.200)_99.04%)] dark:bg-[linear-gradient(180deg,#121212_0%,#20113c_70%,#73153b_99.04%)] px-4 pb-9 pt-[18px] md:px-[50px] md:pb-[50px] md:pt-7 transition-colors">
        {/* Ambient video background with glowing orbs */}
        <video
          aria-hidden="true"
          autoPlay
          className="px-adaptive-media pointer-events-none absolute inset-0 z-0 size-full object-cover"
          loop
          muted
          playsInline
          poster="/images/hero-video-poster.webp"
          preload="auto"
          src="/videos/hero-background.webm"
        />

        <div className="relative z-[2] mx-auto flex max-w-[960px] flex-col items-center pt-5 text-center md:pt-[30px]">
          <h1 className="mb-[18px] max-w-[780px] text-[clamp(32px,5vw,48px)] font-medium leading-[1.3] tracking-[-0.01em] text-neutral-950 dark:text-white font-['Neutralsans']">
            Build a{' '}
            <span className="hero-shine" data-text="polished">
              polished
            </span>{' '}
            website or web app with AI.
          </h1>

          <p className="mb-[30px] max-w-[600px] text-[clamp(1rem,1.4vw,1.18rem)] leading-relaxed text-[#6b7280] dark:text-[#8f8f8f] md:mb-[38px]">
            Describe what you want to build. PixartualAI turns your prompt into a polished landing page, website, dashboard, or app, ready to edit, refine, and launch.
          </p>

          {/* Prompt Input Box with Rainbow Glowing Ring */}
          <div className="relative mx-auto w-full max-w-[792px] home-hero-prompt">
            <div className="relative isolate w-full rounded-[20px] p-1.5">
              <div aria-hidden="true" className="hero-ring-glow" />
              <div aria-hidden="true" className="hero-ring" />

              <form
                onSubmit={handleGenerate}
                className="relative z-[1] flex w-full flex-col rounded-[14px] bg-white dark:bg-[#18181b] p-3.5 text-left shadow-[0_4px_8px_theme(colors.static-black/6%)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-transparent dark:border-neutral-800/80 md:p-4 focus-within:ring-2 focus-within:ring-accent-hot focus-within:ring-offset-1 min-h-[150px] md:min-h-[165px] justify-between transition-colors"
              >
                <textarea
                  aria-label="Describe what you want to build"
                  className="flex w-full outline-none transition-colors disabled:pointer-events-none min-w-0 rounded-none border-0 bg-transparent p-0 relative z-[1] resize-none px-1 py-1.5 text-base leading-normal text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 md:text-[17px]"
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

                <div className="relative z-[1] flex items-center justify-end gap-3 mt-3">
                  <button
                    type="submit"
                    className="mfy-btn mfy-btn--primary !bg-black !text-white dark:!bg-white dark:!text-black font-medium rounded-lg px-6 py-2.5 hover:opacity-90 transition-opacity cursor-pointer text-sm md:text-base"
                  >
                    Generate
                  </button>
                </div>
              </form>
            </div>

            {/* Quick Suggestion Pills */}
            <div className="mt-[30px] flex max-w-[760px] flex-wrap items-center justify-center gap-x-0.5 gap-y-1">
              {samplePrompts.map((p, idx) => (
                <React.Fragment key={p}>
                  <button
                    type="button"
                    onClick={() => setPrompt(`Build a modern ${p.toLowerCase()} with high converting layout`)}
                    className="cursor-pointer rounded-lg border-0 bg-transparent px-[9px] py-[5px] text-sm text-zinc-500 dark:text-neutral-400 transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-ink-strong dark:hover:text-neutral-100"
                  >
                    {p}
                  </button>
                  {idx < samplePrompts.length - 1 && (
                    <span aria-hidden="true" className="select-none text-sm text-gray-300 dark:text-neutral-700">
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

