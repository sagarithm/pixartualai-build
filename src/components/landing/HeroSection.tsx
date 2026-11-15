'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Hammer, CaretDown, Microphone } from '@phosphor-icons/react';

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [prompt, setPrompt] = useState('');
  const [selectedMode, setSelectedMode] = useState<'Build' | 'Edit' | 'Enhance'>('Build');
  const [isModeOpen, setIsModeOpen] = useState(false);

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
      <div className="relative w-full overflow-hidden rounded-b-[42px] bg-[linear-gradient(180deg,theme(colors.white)_0%,theme(colors.violet.50)_70%,theme(colors.pink.200)_99.04%)] dark:bg-[linear-gradient(180deg,#121214_0%,#1a1622_70%,#1e141a_99.04%)] px-4 pb-9 pt-[18px] md:px-[50px] md:pb-[50px] md:pt-7 transition-colors">
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
          <h1 className="mb-[18px] max-w-[780px] text-[clamp(32px,5vw,48px)] font-medium leading-[1.3] tracking-[-0.01em] text-ink-strong dark:text-white font-['Neutralsans']">
            Build a{' '}
            <span className="hero-shine" data-text="polished">
              polished
            </span>{' '}
            website or web app with AI.
          </h1>

          <p className="mb-[30px] max-w-[600px] text-[clamp(1rem,1.4vw,1.18rem)] leading-relaxed text-gray-500 dark:text-neutral-400 md:mb-[38px]">
            Describe what you want to build. PixartualAI turns your prompt into a polished landing page, website, dashboard, or app, ready to edit, refine, and launch.
          </p>

          {/* Prompt Input Box with Rainbow Glowing Ring */}
          <div className="relative mx-auto w-full max-w-[792px] home-hero-prompt">
            <div className="relative isolate w-full rounded-[20px] p-1.5">
              <div aria-hidden="true" className="hero-ring-glow" />
              <div aria-hidden="true" className="hero-ring" />

              <form
                onSubmit={handleGenerate}
                className="relative z-[1] flex w-full flex-col rounded-[14px] bg-white dark:bg-[#121215] p-3.5 text-left shadow-[0_4px_8px_theme(colors.static-black/6%)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-transparent dark:border-neutral-800/80 md:p-4 focus-within:ring-2 focus-within:ring-accent-hot focus-within:ring-offset-1 min-h-[150px] md:min-h-[165px] justify-between transition-colors"
              >
                <textarea
                  aria-label="Describe what you want to build"
                  className="flex w-full outline-none transition-colors disabled:pointer-events-none min-w-0 rounded-none border-0 bg-transparent p-0 relative z-[1] resize-none px-1 py-1.5 text-base leading-normal text-ink-strong dark:text-neutral-100 placeholder:text-gray-400 dark:placeholder:text-neutral-500 md:text-[17px]"
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

                <div className="relative z-[1] flex items-center justify-between gap-3 mt-3 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                  {/* Left Controls: Plus and Build Mode */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Add context or attachments"
                      className="inline-flex size-8 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700/80 bg-neutral-50 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                    >
                      <Plus size={14} weight="bold" />
                    </button>

                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsModeOpen(!isModeOpen)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700/80 bg-neutral-50 dark:bg-neutral-800/60 px-2.5 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                      >
                        <Hammer size={13} weight="fill" className="text-[#fc8c04]" />
                        <span>{selectedMode}</span>
                        <CaretDown size={11} className={`transition-transform ${isModeOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isModeOpen && (
                        <div className="absolute bottom-full left-0 mb-2 w-32 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#18181b] p-1 shadow-xl z-50 mfy-fadein">
                          {(['Build', 'Edit', 'Enhance'] as const).map((mode) => (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => {
                                setSelectedMode(mode);
                                setIsModeOpen(false);
                              }}
                              className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
                                selectedMode === mode
                                  ? 'font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/60'
                              }`}
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Controls: Mic and Generate Button */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Voice input"
                      className="inline-flex size-8 items-center justify-center rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      <Microphone size={17} />
                    </button>
                    <button type="submit" className="mfy-btn mfy-btn--primary">
                      Generate
                    </button>
                  </div>
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

