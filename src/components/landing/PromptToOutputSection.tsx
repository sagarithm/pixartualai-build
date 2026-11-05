'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const PromptToOutputSection: React.FC = () => {
  const row1 = [
    { src: '/images/home-collage/milano.jpg', alt: 'Milano template', aspect: 'aspect-[45/32] w-auto' },
    { src: '/images/home-collage/aperture.jpg', alt: 'Aperture template', aspect: 'w-[110px] md:w-[150px]' },
    { src: '/images/home-collage/galway.jpg', alt: 'Galway template', aspect: 'aspect-[45/32] w-auto' },
    { src: '/images/home-collage/cinema-reel.jpg', alt: 'Cinema Reel template', aspect: 'w-[110px] md:w-[150px]' },
    { src: '/images/home-collage/black.jpg', alt: 'Black Plus template', aspect: 'aspect-[45/32] w-auto' },
  ];

  const row2 = [
    { src: '/images/home-collage/boutique.jpg', alt: 'Boutique template', aspect: 'w-[110px] md:w-[150px]' },
    { src: '/images/home-collage/vancouver.jpg', alt: 'Vancouver Plus template', aspect: 'aspect-[45/32] w-auto' },
    { src: '/images/home-collage/revolver.jpg', alt: 'Revolver template', aspect: 'w-[110px] md:w-[150px]' },
    { src: '/images/home-collage/canada.jpg', alt: 'Canada template', aspect: 'aspect-[45/32] w-auto' },
    { src: '/images/home-collage/aperture.jpg', alt: 'Aperture template', aspect: 'w-[110px] md:w-[150px]' },
    { src: '/images/home-collage/atelier.jpg', alt: 'Atelier template', aspect: 'aspect-[45/32] w-auto' },
    { src: '/images/home-collage/cinema-reel.jpg', alt: 'Cinema Reel template', aspect: 'w-[110px] md:w-[150px]' },
  ];

  return (
    <section className="bg-white py-12 md:pb-[90px] md:pt-20" id="prompt-to-output">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-[50px]">
        <h2 className="text-center text-[clamp(28px,6vw,48px)] font-medium leading-[1.2] text-neutral-900 font-['Neutralsans']">
          From prompt to polished output.
        </h2>

        {/* Prompt to Application Flow Indicator */}
        <div
          aria-label="From prompt to application"
          className="relative mx-auto mb-10 mt-7 flex h-[52px] w-full items-center justify-between md:w-3/5"
        >
          <div className="pointer-events-none absolute left-[170px] right-[170px] top-1/2 h-px bg-stone-200" />
          <span className="relative z-[1] inline-flex h-full w-40 items-center justify-center rounded-full bg-stone-100 text-[17px] font-medium text-neutral-900">
            Prompt
          </span>
          <span className="relative z-[1] inline-flex h-full w-40 items-center justify-center rounded-full bg-[linear-gradient(90deg,#fbbf24_0%,#f472b6_52%,#e879f9_100%)] text-[17px] font-medium text-neutral-900 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
            Application
          </span>
        </div>

        {/* Marquee Collage Container with Dot Grid */}
        <div className="relative mt-2 overflow-hidden rounded-[24px] bg-neutral-50 pb-24">
          <div className="dot-grid flex flex-col gap-4 overflow-hidden rounded-[20px] p-[22px]">
            {/* Top row - sliding left */}
            <div className="flex h-[200px] w-max flex-nowrap [will-change:transform] md:h-[300px] marquee-left">
              {[...row1, ...row1].map((item, i) => (
                <img
                  key={i}
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`mr-4 h-full flex-none rounded-[13px] bg-neutral-200 object-cover shadow-[0_1px_0_rgba(0,0,0,0.04)] object-top ${item.aspect}`}
                />
              ))}
            </div>

            {/* Bottom row - sliding right */}
            <div className="flex h-[200px] w-max flex-nowrap [will-change:transform] md:h-[300px] marquee-right">
              {[...row2, ...row2].map((item, i) => (
                <img
                  key={i}
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`mr-4 h-full flex-none rounded-[13px] bg-neutral-200 object-cover shadow-[0_1px_0_rgba(0,0,0,0.04)] object-top ${item.aspect}`}
                />
              ))}
            </div>
          </div>

          {/* Fade gradient overlay at bottom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[230px] bg-[linear-gradient(180deg,rgba(250,250,250,0)_0%,#fafafa_80%)]"
          />

          <div className="absolute bottom-7 left-1/2 z-[2] -translate-x-1/2">
            <Link className="mfy-btn mfy-btn--primary" href="/templates">
              See what you can build
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
