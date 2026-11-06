'use client';

import React, { useState } from 'react';

export const CapabilitiesCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Dashboards

  const items = [
    { id: 'landing-pages', label: 'Landing pages', image: '/images/cap-landing-pages.webp', alt: 'Landing page built with PixartualAI' },
    { id: 'dashboards', label: 'Dashboards', image: '/images/cap-dashboards.webp', alt: 'Dashboard built with PixartualAI' },
    { id: 'multi-page', label: 'Multi-page websites', image: '/images/cap-multi-page-websites.webp', alt: 'Multi-page website built with PixartualAI' },
    { id: 'cms', label: 'CMS', image: '/images/cap-cms.webp', alt: 'CMS-driven site built with PixartualAI' },
    { id: 'webapps', label: 'WebApps', image: '/images/cap-webapps.webp', alt: 'Web app built with PixartualAI' },
    { id: 'client-portals', label: 'Client portals', image: '/images/cap-client-portals.webp', alt: 'Client portal built with PixartualAI' },
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-neutral-950 py-16 md:py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <h2 className="font-display font-medium text-3xl sm:text-5xl tracking-tight text-neutral-900 dark:text-white">
          Build Anything
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 font-sans">
          Turn an idea into a complete website or web app, layouts, content, interactive state, and hosting included, then refine every detail by chatting with AI.
        </p>

        {/* Tab Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeIndex === idx
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
                  : 'bg-stone-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* 3D-Stacked Carousel Cards matching Pixartual 1:1 */}
        <div className="relative mx-auto mt-12 aspect-[45/32] w-full max-w-[min(560px,85vw)] rounded-[14px]">
          {items.map((item, idx) => {
            const diff = idx - activeIndex;
            let transform = 'translateX(0) scale(0.8)';
            let zIndex = 1;
            let opacity = 0;
            let pointerEvents: React.CSSProperties['pointerEvents'] = 'none';

            if (diff === 0) {
              transform = 'translateX(0) scale(1)';
              zIndex = 10;
              opacity = 1;
              pointerEvents = 'auto';
            } else if (diff === -1 || (diff > 1 && idx === 0 && activeIndex === items.length - 1)) {
              transform = 'translateX(-26%) scale(0.85)';
              zIndex = 5;
              opacity = 0.85;
            } else if (diff === 1 || (diff < -1 && idx === items.length - 1 && activeIndex === 0)) {
              transform = 'translateX(26%) scale(0.85)';
              zIndex = 5;
              opacity = 0.85;
            }

            return (
              <img
                key={item.id}
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 size-full rounded-[14px] bg-neutral-200 dark:bg-neutral-800 object-cover object-left-top shadow-[0_12px_36px_rgba(0,0,0,0.18)] transition-all duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  transform,
                  zIndex,
                  opacity,
                  pointerEvents,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
