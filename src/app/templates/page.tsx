'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PixartualCta } from '@/components/landing/PixartualCta';
import { PixartualLogo } from '@/components/brand/PixartualLogo';
import templatesData from '@/data/templates.json';

interface TemplateItem {
  title: string;
  category: string;
  image: string;
  previewUrl: string;
}

const templates: TemplateItem[] = templatesData as TemplateItem[];

const allCategories = [
  'All',
  'ai',
  'saas',
  'agency',
  'architecture',
  'travel',
  'portfolio',
  'marketing',
  'photography',
  'creative',
  'playful-creative',
  'bakery',
  'finance',
  'fitness',
  'energy',
  'restaurant',
  'technology',
  'healthcare',
  'shipping',
  'creative-studio',
  'education',
  'fashion',
  'beauty',
  'events',
  'blog',
  'ecommerce',
];

export default function TemplatesPage() {
  const router = useRouter();
  const [selectedCat, setSelectedCat] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = templates.filter((t) => {
    const matchesCat =
      selectedCat === 'All' ||
      t.category.toLowerCase() === selectedCat.toLowerCase();
    const matchesSearch =
      !search.trim() ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="section tg-section flex-1">
        <div className="container max-w-[1240px] mx-auto px-5 md:px-[50px]">
          {/* Header */}
          <div className="tg-head text-center mx-auto max-w-[720px] mb-12">
            <p className="tg-eyebrow text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              Templates
            </p>
            <h1 className="tg-title text-[clamp(2.2rem,5vw,3.4rem)] font-medium leading-[1.08] text-neutral-950 font-['Neutralsans']">
              Free templates, ready to clone
            </h1>
            <p className="tg-desc mt-4 text-base md:text-lg text-neutral-500 max-w-[560px] mx-auto">
              Jumpstart your next project with production-ready landing pages, dashboards, and apps designed for PixartualAI.
            </p>
          </div>

          {/* Search bar & Category Filter Pills */}
          <div className="mb-10 flex flex-col items-center gap-6">
            <div className="w-full max-w-md">
              <input
                type="text"
                placeholder="Search templates..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-5 py-3 rounded-full border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
              />
            </div>

            <div className="tg-filters flex flex-wrap justify-center gap-2 max-w-[1000px]">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium capitalize transition-all cursor-pointer ${
                    selectedCat.toLowerCase() === cat.toLowerCase()
                      ? 'bg-neutral-950 text-white shadow-xs'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                  }`}
                >
                  {cat.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Templates Grid */}
          {filtered.length === 0 ? (
            <div className="tg-empty text-center py-20 text-neutral-400">
              No templates found for this criteria. Try selecting another category.
            </div>
          ) : (
            <div className="tg-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((t, idx) => (
                <article key={`${t.title}-${idx}`} className="tg-card group flex flex-col">
                  <div className="tg-frame relative aspect-[16/10] rounded-[18px] overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-xs">
                    <img
                      alt={`${t.title} template preview`}
                      className="tg-shot size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      src={t.image}
                    />

                    <div className="tg-overlay absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {t.previewUrl && (
                      <a
                        aria-label={`Open a live preview of the ${t.title} template`}
                        className="tg-preview absolute top-3 right-3 z-10 size-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                        href={t.previewUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          aria-hidden="true"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 256 256"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                        </svg>
                      </a>
                    )}

                    <Link
                      aria-label={`Clone the ${t.title} template`}
                      className="tg-clone absolute bottom-4 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-900 text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-neutral-100 hover:scale-105"
                      href={`/dashboard?template=${encodeURIComponent(t.title)}`}
                    >
                      <PixartualLogo variant="symbol-black" size={14} />
                      Clone template
                    </Link>
                  </div>

                  <div className="tg-meta flex items-center justify-between pt-3.5 px-1">
                    <h3 className="font-['Neutralsans'] font-medium text-base text-neutral-900">
                      {t.title}
                    </h3>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-md">
                      {t.category}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* CTA Banner */}
        <PixartualCta />
      </main>

      <Footer />
    </div>
  );
}
