'use client';

import React from 'react';
import Link from 'next/link';

export const KeepYourSiteSection: React.FC = () => {
  const points = [
    '1:1 rebuild',
    'Same pages',
    'Same CMS structure',
    'Same content model',
    'AI editing unlocked',
  ];

  return (
    <section
      aria-labelledby="keep-site-title"
      className="overflow-hidden bg-white dark:bg-[#0a0a0c] px-5 pb-[60px] pt-16 md:px-6 md:pb-20 md:pt-24 transition-colors"
      id="keep-your-site"
    >
      <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
        <h2
          className="max-w-[700px] text-[clamp(32px,4.5vw,52px)] font-medium leading-[1.15] text-ink-strong dark:text-white"
          id="keep-site-title"
        >
          Keep your site. Upgrade how you work on it.
        </h2>

        <p className="mx-auto mt-[18px] max-w-[520px] text-[clamp(0.9rem,1.15vw,1rem)] leading-[1.65] text-gray-500 dark:text-neutral-400">
          Have a Webflow site you do not want to redesign? Join the Webflow to PixartualAI waitlist. We will rebuild selected sites 1:1 inside PixartualAI, preserving the design, pages, CMS structure, and content model, so your team can continue with AI.
        </p>

        {/* Authentic Webflow + Pixartual overlapping glowing spheres video */}
        <div aria-hidden="true" className="relative mx-auto mt-11 flex w-full items-center justify-center pb-7 pt-5">
          <video
            autoPlay
            className="block h-auto w-full max-w-full"
            loop
            muted
            playsInline
            poster="/images/webflow-to-pixartual.webp"
            preload="metadata"
            src="/videos/webflow-to-pixartual.webm"
          />
        </div>

        {/* Feature Checkmarks */}
        <ul aria-label="What carries over" className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          {points.map((pt) => (
            <li key={pt} className="inline-flex items-center gap-[7px] whitespace-nowrap text-[0.88rem] font-medium text-gray-600 dark:text-neutral-300">
              <svg
                aria-hidden="true"
                className="size-3.5 flex-none text-accent"
                fill="currentColor"
                height="1em"
                viewBox="0 0 256 256"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
              </svg>
              {pt}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link className="mfy-btn mfy-btn--primary" href="/pricing">
            Join the waitlist
          </Link>
          <Link className="mfy-btn mfy-btn--secondary dark:!bg-neutral-800 dark:!text-white dark:border dark:border-neutral-700 hover:dark:!bg-neutral-700" href="/dashboard">
            See what you can build
          </Link>
        </div>
      </div>
    </section>
  );
};

