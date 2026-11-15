'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

type CapabilityKey =
  | 'landingPages'
  | 'dashboards'
  | 'multiPageWebsites'
  | 'cms'
  | 'webApps'
  | 'clientPortals';

interface Capability {
  key: CapabilityKey;
  label: string;
  img: string;
  alt: string;
}

const capabilities: Capability[] = [
  {
    key: 'landingPages',
    label: 'Landing pages',
    img: '/images/cap-landing-pages.webp',
    alt: 'Landing page built with PixartualAI',
  },
  {
    key: 'dashboards',
    label: 'Dashboards',
    img: '/images/cap-dashboards.webp',
    alt: 'Dashboard built with PixartualAI',
  },
  {
    key: 'multiPageWebsites',
    label: 'Multi-page websites',
    img: '/images/cap-multi-page-websites.webp',
    alt: 'Multi-page website built with PixartualAI',
  },
  {
    key: 'cms',
    label: 'CMS',
    img: '/images/cap-cms.webp',
    alt: 'CMS-driven site built with PixartualAI',
  },
  {
    key: 'webApps',
    label: 'WebApps',
    img: '/images/cap-webapps.webp',
    alt: 'Web app built with PixartualAI',
  },
  {
    key: 'clientPortals',
    label: 'Client portals',
    img: '/images/cap-client-portals.webp',
    alt: 'Client portal built with PixartualAI',
  },
];

// 3 repetitions for seamless vertical waterfall around the centered spotlight
const repeatedCapabilities = [...capabilities, ...capabilities, ...capabilities];

export const BuildAnythingSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [trackOffset, setTrackOffset] = useState(0);

  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Auto-advancing rotating carousel: one by one showing image
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % capabilities.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Center the active pill smoothly in the scroller via CSS transform (NEVER scrolls page)
  useEffect(() => {
    const middleIndex = capabilities.length + activeIndex;
    const el = itemRefs.current[middleIndex];
    const container = scrollerRef.current;
    if (el && container) {
      const containerHeight = container.clientHeight;
      const elOffsetTop = el.offsetTop;
      const elHeight = el.offsetHeight;
      const targetOffset = containerHeight / 2 - (elOffsetTop + elHeight / 2);
      setTrackOffset(targetOffset);
    }
  }, [activeIndex]);

  // Initial calculation on mount
  useEffect(() => {
    const middleIndex = capabilities.length;
    const el = itemRefs.current[middleIndex];
    const container = scrollerRef.current;
    if (el && container) {
      const containerHeight = container.clientHeight;
      const elOffsetTop = el.offsetTop;
      const elHeight = el.offsetHeight;
      const targetOffset = containerHeight / 2 - (elOffsetTop + elHeight / 2);
      setTrackOffset(targetOffset);
    }
  }, []);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % capabilities.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + capabilities.length) % capabilities.length);
  };

  return (
    <section
      className="relative h-auto overflow-hidden bg-white dark:bg-[#0a0a0c] md:h-[80vh] md:max-h-[80vh] transition-colors"
      id="build-anything"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        {/* Left Column: Authentic Vibrant Orange Scroller */}
        <div className="order-2 flex h-[70vh] items-center justify-center overflow-hidden bg-[linear-gradient(165deg,rgb(var(--px-color-accent-hot))_8%,rgb(var(--px-color-accent))_48%,rgba(248,113,113,0)_86%),linear-gradient(90deg,rgb(var(--px-color-accent)),rgb(var(--px-color-accent)))] px-5 md:order-none md:h-auto md:pl-[max(50px,calc((100vw-1240px)/2+50px))] md:pr-0">
          <div
            ref={scrollerRef}
            className="scroller relative h-[480px] w-full max-w-[460px] overflow-hidden"
          >
            {/* The vertical track translates so the active word is always centered */}
            <ul
              className="scroller__track"
              style={{
                transform: `translateY(${trackOffset}px)`,
                transition: 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              {repeatedCapabilities.map((cap, globalIdx) => {
                const itemCapIndex = globalIdx % capabilities.length;
                const isCenterSet =
                  globalIdx >= capabilities.length && globalIdx < capabilities.length * 2;
                const isActive = isCenterSet && itemCapIndex === activeIndex;

                return (
                  <li key={`${cap.key}-${globalIdx}`} className="scroller__row">
                    <button
                      ref={(el) => {
                        itemRefs.current[globalIdx] = el;
                      }}
                      type="button"
                      onClick={() => setActiveIndex(itemCapIndex)}
                      className={`scroller__item cursor-pointer select-none transition-all duration-300 ${
                        isActive
                          ? 'is-active scale-105 shadow-xl'
                          : 'opacity-65 hover:opacity-100 hover:scale-102'
                      }`}
                    >
                      {cap.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right Column: Title + 3D Stacked Preview Images */}
        <div className="flex flex-col justify-between overflow-hidden bg-gray-100 dark:bg-[#121215] px-5 py-12 md:px-16 md:py-16 transition-colors">
          <div className="text-center">
            <h2 className="mb-4 text-[clamp(32px,6vw,48px)] font-medium leading-[1.2] text-ink-strong dark:text-white font-['Neutralsans']">
              Build Anything
            </h2>
            <p className="mx-auto max-w-[520px] text-[clamp(1rem,1.3vw,1.12rem)] leading-relaxed text-gray-500 dark:text-neutral-400">
              PixartualAI turns a prompt into a complete website or web app, layouts, content, database, and hosting included, then you refine every detail by chatting with AI.
            </p>
          </div>

          {/* 3D Stacked Moving Carousel Container */}
          <div className="relative mx-auto my-auto aspect-[45/32] w-full max-w-[min(460px,80vw)] rounded-[14px]">
            {capabilities.map((cap, i) => {
              // Relative position in modular circular list
              const total = capabilities.length;
              let diff = (i - activeIndex) % total;
              if (diff < -Math.floor(total / 2)) diff += total;
              if (diff > Math.floor(total / 2)) diff -= total;

              let style: React.CSSProperties = {
                transform: 'translateX(0) scale(0.7)',
                zIndex: 1,
                opacity: 0,
                pointerEvents: 'none',
              };

              if (diff === 0) {
                // Active Front Center
                style = {
                  transform: 'translateX(0) scale(1)',
                  zIndex: 10,
                  opacity: 1,
                  pointerEvents: 'auto',
                };
              } else if (diff === -1) {
                // Left neighbor
                style = {
                  transform: 'translateX(-24%) scale(0.8)',
                  zIndex: 5,
                  opacity: 0.9,
                  pointerEvents: 'auto',
                };
              } else if (diff === 1) {
                // Right neighbor
                style = {
                  transform: 'translateX(24%) scale(0.8)',
                  zIndex: 5,
                  opacity: 0.9,
                  pointerEvents: 'auto',
                };
              }

              return (
                <div
                  key={cap.key}
                  onClick={() => {
                    if (diff === 1) goToNext();
                    if (diff === -1) goToPrev();
                  }}
                  className={`absolute inset-0 size-full rounded-[14px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.18)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    diff !== 0 ? 'cursor-pointer hover:brightness-105' : ''
                  }`}
                  style={style}
                >
                  <Image
                    src={cap.img}
                    alt={cap.alt}
                    fill
                    sizes="(max-width: 768px) 80vw, 460px"
                    priority={i === 0 || i === 1}
                    className="object-cover object-left-top"
                  />
                  {diff !== 0 && (
                    <div className="absolute inset-0 bg-black/15 transition-opacity hover:bg-black/5" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Carousel Navigation Indicator Dots & Controls */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goToPrev}
              className="size-8 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-black flex items-center justify-center transition-all shadow-xs cursor-pointer"
              aria-label="Previous slide"
            >
              <CaretLeft size={16} />
            </button>

            <div className="flex items-center gap-1.5 px-2">
              {capabilities.map((cap, idx) => (
                <button
                  key={cap.key}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === activeIndex
                      ? 'w-6 bg-[#fc8c04]'
                      : 'w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${cap.label}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNext}
              className="size-8 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-black flex items-center justify-center transition-all shadow-xs cursor-pointer"
              aria-label="Next slide"
            >
              <CaretRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
