'use client';

import React from 'react';
import Image from 'next/image';

export const PixartualBento: React.FC = () => {
  const previewItems = [
    { name: 'Revolver', img: '/images/home-collage/revolver.jpg' },
    { name: 'Cinema Reel', img: '/images/home-collage/cinema-reel.jpg' },
    { name: 'Boutique', img: '/images/home-collage/boutique.jpg' },
    { name: 'Aperture', img: '/images/home-collage/aperture.jpg' },
    { name: 'Atelier', img: '/images/home-collage/atelier.jpg' },
  ];

  return (
    <section aria-labelledby="dbento-title" className="relative overflow-hidden bg-white" id="designed">
      {/* Authentic Pixartual ambient orange/amber glow behind Bento */}
      <div aria-hidden="true" className="bento-glow pointer-events-none absolute -bottom-[6%] -left-[10%] -right-[10%] -top-[6%]" />

      <div className="relative z-[1] mx-auto w-full max-w-[1240px] px-5 py-14 md:px-[50px] md:py-20">
        <div className="mb-11 text-center">
          <h2 className="text-[clamp(32px,6vw,48px)] font-medium leading-[1.2] text-neutral-900 font-['Neutralsans']" id="dbento-title">
            Not just generated. Designed.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[clamp(0.95rem,1.2vw,1.05rem)] leading-relaxed text-gray-600">
            PixartualAI turns a prompt into a complete website or web app, layouts, content, database, and hosting included, then you refine every detail by chatting with AI.
          </p>
        </div>

        <div className="mx-auto grid max-w-[460px] grid-cols-1 gap-5 md:max-w-none md:grid-cols-12">
          {/* Card 1: Generate pages */}
          <article className="bento-card col-span-1 flex flex-col overflow-hidden rounded-[22px] bg-stone-100 md:col-span-7 cursor-pointer">
            <div className="relative flex min-h-0 flex-1 flex-col items-stretch justify-start overflow-hidden">
              <img
                alt="Generating a page from a prompt"
                className="block w-full flex-none h-auto p-8 md:p-10 object-contain"
                loading="lazy"
                src="/images/bento-generate.webp"
              />
            </div>
            <div className="px-6 pb-6 pt-[18px]">
              <h3 className="text-[1.05rem] font-medium tracking-[-0.01em] text-neutral-900 font-['Neutralsans']">
                Generate pages
              </h3>
              <p className="mt-1.5 max-w-[42ch] text-[0.92rem] leading-[1.5] text-gray-500">
                Create full pages from a prompt, screenshot, or template.
              </p>
            </div>
          </article>

          {/* Card 2: Refine with chat */}
          <article className="bento-card col-span-1 flex flex-col overflow-hidden rounded-[22px] bg-stone-100 md:col-span-5 cursor-pointer">
            <div className="relative flex min-h-0 flex-1 flex-col items-stretch justify-start overflow-hidden">
              <img
                alt="Refining a section with chat"
                className="block w-full flex-none h-auto px-[25px] pt-4 object-contain"
                loading="lazy"
                src="/images/bento-refine.webp"
              />
            </div>
            <div className="px-6 pb-6 pt-[18px]">
              <h3 className="text-[1.05rem] font-medium tracking-[-0.01em] text-neutral-900 font-['Neutralsans']">
                Refine with chat
              </h3>
              <p className="mt-1.5 max-w-[42ch] text-[0.92rem] leading-[1.5] text-gray-500">
                Ask for layout, copy, style, responsive, and section changes.
              </p>
            </div>
          </article>

          {/* Card 3: CMS */}
          <article className="bento-card col-span-1 flex flex-col overflow-hidden rounded-[22px] bg-stone-100 md:col-span-4 cursor-pointer">
            <div className="relative flex min-h-0 flex-1 flex-col items-stretch justify-start overflow-hidden">
              <img
                alt="Managing CMS collections"
                className="block w-full flex-none h-auto pl-5 pt-5 object-contain"
                loading="lazy"
                src="/images/bento-cms.webp"
              />
            </div>
            <div className="px-6 pb-6 pt-[18px]">
              <h3 className="text-[1.05rem] font-medium tracking-[-0.01em] text-neutral-900 font-['Neutralsans']">
                CMS
              </h3>
              <p className="mt-1.5 max-w-[42ch] text-[0.92rem] leading-[1.5] text-gray-500">
                Manage dynamic content for blogs, resources, and more.
              </p>
            </div>
          </article>

          {/* Card 4: Build beyond landing pages with looping video marquee */}
          <article className="col-span-1 flex flex-col overflow-hidden rounded-[22px] bg-stone-100 md:col-span-8">
            <div className="relative flex min-h-0 flex-1 flex-col items-stretch justify-start overflow-hidden">
              <div aria-label="Dashboards, forms, and app flows" className="bento-marquee h-full min-h-[200px] w-full flex-1">
                <div className="bento-track">
                  <video aria-hidden="false" autoPlay className="bento-vid" loop muted playsInline preload="metadata" src="/videos/bento/revolver.webm" />
                  <video aria-hidden="false" autoPlay className="bento-vid" loop muted playsInline preload="metadata" src="/videos/bento/cinema-reel.webm" />
                  <video aria-hidden="false" autoPlay className="bento-vid" loop muted playsInline preload="metadata" src="/videos/bento/boutique.webm" />
                  <video aria-hidden="false" autoPlay className="bento-vid" loop muted playsInline preload="metadata" src="/videos/bento/aperture.webm" />
                  <video aria-hidden="false" autoPlay className="bento-vid" loop muted playsInline preload="metadata" src="/videos/bento/atelier.webm" />
                  <video aria-hidden="true" autoPlay className="bento-vid" loop muted playsInline preload="metadata" src="/videos/bento/revolver.webm" />
                  <video aria-hidden="true" autoPlay className="bento-vid" loop muted playsInline preload="metadata" src="/videos/bento/cinema-reel.webm" />
                  <video aria-hidden="true" autoPlay className="bento-vid" loop muted playsInline preload="metadata" src="/videos/bento/boutique.webm" />
                  <video aria-hidden="true" autoPlay className="bento-vid" loop muted playsInline preload="metadata" src="/videos/bento/aperture.webm" />
                  <video aria-hidden="true" autoPlay className="bento-vid" loop muted playsInline preload="metadata" src="/videos/bento/atelier.webm" />
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 pt-[18px]">
              <h3 className="text-[1.05rem] font-medium tracking-[-0.01em] text-neutral-900 font-['Neutralsans']">
                Build beyond landing pages
              </h3>
              <p className="mt-1.5 max-w-[42ch] text-[0.92rem] leading-[1.5] text-gray-500">
                Add dashboards, forms, CMS pages, and app flows when needed.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export const ModulifyBento = PixartualBento;
