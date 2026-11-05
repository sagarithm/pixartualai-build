'use client';

import React, { useState } from 'react';
import Image from 'next/image';

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
  { key: 'landingPages', label: 'Landing pages', img: '/images/cap-landing-pages.webp', alt: 'Landing page built with PixartualAI' },
  { key: 'dashboards', label: 'Dashboards', img: '/images/cap-dashboards.webp', alt: 'Dashboard built with PixartualAI' },
  { key: 'multiPageWebsites', label: 'Multi-page websites', img: '/images/cap-multi-page-websites.webp', alt: 'Multi-page website built with PixartualAI' },
  { key: 'cms', label: 'CMS', img: '/images/cap-cms.webp', alt: 'CMS-driven site built with PixartualAI' },
  { key: 'webApps', label: 'WebApps', img: '/images/cap-webapps.webp', alt: 'Web app built with PixartualAI' },
  { key: 'clientPortals', label: 'Client portals', img: '/images/cap-client-portals.webp', alt: 'Client portal built with PixartualAI' },
];

export const BuildAnythingSection: React.FC = () => {
  const [activeKey, setActiveKey] = useState<CapabilityKey>('dashboards');

  const activeIndex = capabilities.findIndex((c) => c.key === activeKey);

  return (
    <section className="relative h-auto overflow-hidden bg-white md:h-[80vh] md:max-h-[80vh]" id="build-anything">
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        {/* Left Column: Authentic Vibrant Orange Scroller */}
        <div className="order-2 flex h-[500px] md:h-auto items-center justify-center overflow-hidden bg-[linear-gradient(165deg,#fe3200_8%,#fc8c04_48%,rgba(248,113,113,0)_86%),linear-gradient(90deg,#fc8c04,#fc8c04)] px-5 md:order-none md:pl-[max(50px,calc((100vw-1240px)/2+50px))] md:pr-0">
          <div className="scroller py-10">
            <ul className="scroller__track">
              {capabilities.map((cap) => {
                const isActive = cap.key === activeKey;
                return (
                  <li key={cap.key} className="scroller__row">
                    <button
                      type="button"
                      onClick={() => setActiveKey(cap.key)}
                      className={`scroller__item ${isActive ? 'is-active' : ''}`}
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
        <div className="flex flex-col justify-center gap-7 overflow-hidden bg-gray-100 px-5 py-14 md:px-16 md:py-20">
          <div className="text-center">
            <h2 className="mb-4 text-[clamp(32px,6vw,48px)] font-medium leading-[1.2] text-neutral-900 font-['Neutralsans']">
              Build Anything
            </h2>
            <p className="mx-auto max-w-[520px] text-[clamp(1rem,1.3vw,1.12rem)] leading-relaxed text-gray-500">
              PixartualAI turns a prompt into a complete website or web app, layouts, content, database, and hosting included, then you refine every detail by chatting with AI.
            </p>
          </div>

          <div className="relative mx-auto mt-6 aspect-[45/32] w-full max-w-[min(460px,80vw)] rounded-[14px]">
            {capabilities.map((cap, i) => {
              const diff = i - activeIndex;

              let style: React.CSSProperties = {
                transform: 'translateX(0) scale(0.8)',
                zIndex: 1,
                opacity: 0,
                pointerEvents: 'none',
              };

              if (diff === 0) {
                // Active / Front Center
                style = {
                  transform: 'translateX(0) scale(1)',
                  zIndex: 10,
                  opacity: 1,
                  pointerEvents: 'auto',
                };
              } else if (diff === -1 || (diff > 0 && i === capabilities.length - 1 && activeIndex === 0)) {
                // Left neighbor
                style = {
                  transform: 'translateX(-24%) scale(0.8)',
                  zIndex: 5,
                  opacity: 1,
                  pointerEvents: 'auto',
                };
              } else if (diff === 1 || (diff < 0 && i === 0 && activeIndex === capabilities.length - 1)) {
                // Right neighbor
                style = {
                  transform: 'translateX(24%) scale(0.8)',
                  zIndex: 5,
                  opacity: 1,
                  pointerEvents: 'auto',
                };
              }

              return (
                <img
                  key={cap.key}
                  src={cap.img}
                  alt={cap.alt}
                  loading="lazy"
                  onClick={() => setActiveKey(cap.key)}
                  className="absolute inset-0 size-full cursor-pointer rounded-[12px] bg-neutral-300 object-cover object-left-top shadow-[0_8px_28px_rgba(0,0,0,0.16)] transition-[transform,opacity] duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={style}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

