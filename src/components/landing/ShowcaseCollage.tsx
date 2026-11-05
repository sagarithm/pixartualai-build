'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';

export const ShowcaseCollage: React.FC = () => {
  const showcases = [
    { title: 'Aperture Studio', tag: 'Photography', img: '/images/aperture.jpg' },
    { title: 'Atelier Minimal', tag: 'Architecture', img: '/images/atelier.jpg' },
    { title: 'Black Design', tag: 'Product Studio', img: '/images/black.jpg' },
    { title: 'Boutique Labs', tag: 'Fashion / Retail', img: '/images/boutique.jpg' },
    { title: 'Cinema Reel', tag: 'Videography', img: '/images/cinema-reel.jpg' },
    { title: 'Milano Space', tag: 'Interior Design', img: '/images/milano.jpg' },
  ];

  return (
    <section className="bg-base py-20 px-5 md:px-[50px] border-t border-border transition-colors">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-ink-muted font-semibold">
              Live Production Showcase
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl tracking-tight text-ink-strong mt-1">
              Crafted with PixartualAI
            </h2>
          </div>
          <Link
            href="/templates"
            className="mt-4 sm:mt-0 text-sm font-medium text-neutral-900 dark:text-white inline-flex items-center gap-1.5 hover:underline"
          >
            <span>Browse All Examples</span>
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcases.map((sc, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm hover:border-neutral-400 dark:hover:border-neutral-600 transition-all group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={sc.img}
                  alt={sc.title}
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white">
                    {sc.title}
                  </h3>
                  <span className="text-xs font-mono text-neutral-500">
                    {sc.tag}
                  </span>
                </div>

                <Link
                  href="/studio"
                  className="size-8 rounded-[7px] border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors"
                >
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

