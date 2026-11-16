'use client';

import React from 'react';
import Link from 'next/link';

export const PixartualCta: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#121212] pt-16 transition-colors" id="cta">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-[50px]">
        <div className="relative overflow-hidden rounded-[20px] px-6 py-16 text-center md:px-10 md:py-[100px]">
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-0 z-0 size-full object-cover"
            height={663}
            src="/images/cta-gradient-bg.webp"
            width={1600}
          />
          <div className="relative z-[1]">
            <h2 className="mb-3 text-[clamp(2rem,5vw,2.5rem)] font-medium leading-[1.2] text-static-white">
              What are we building?
            </h2>
            <p className="mb-9 text-base text-static-white/75">
              Create a website, landing page, dashboard, or app...
            </p>
            <Link className="px-btn px-btn--primary !bg-black !text-white dark:!bg-white dark:!text-black font-semibold rounded-xl px-6 py-3 hover:opacity-90 transition-opacity" href="/dashboard">
              Start building
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PixartualAICta = PixartualCta;
export const PxlCta = PixartualCta;
