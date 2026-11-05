'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { MagnifyingGlass, ArrowUpRight } from '@phosphor-icons/react';

interface Template {
  id: string;
  name: string;
  category: string;
  image: string;
  desc: string;
  author: string;
}

const templates: Template[] = [
  { id: 'milano', name: 'Milano', category: 'Agency', image: '/images/home-collage/milano.jpg', desc: 'Minimalist creative agency and design studio template with typography hierarchy.', author: 'Studio Milan' },
  { id: 'aperture', name: 'Aperture', category: 'Photography', image: '/images/home-collage/aperture.jpg', desc: 'Editorial photo portfolio with full-bleed galleries and client proofing.', author: 'Aperture Lab' },
  { id: 'galway', name: 'Galway', category: 'Architecture', image: '/images/home-collage/galway.jpg', desc: 'Clean architectural showcase with interactive floor plan sliders and project view.', author: 'Galway Arch' },
  { id: 'cinema-reel', name: 'Cinema Reel', category: 'Creative', image: '/images/home-collage/cinema-reel.jpg', desc: 'Dark cinematographic portfolio for directors, video producers, and editors.', author: 'Frame Works' },
  { id: 'black', name: 'Black Plus', category: 'SaaS', image: '/images/home-collage/black.jpg', desc: 'High-contrast monochrome dark mode SaaS landing page with ARR calculator.', author: 'Pixartual Team' },
  { id: 'boutique', name: 'Boutique', category: 'Marketing', image: '/images/home-collage/boutique.jpg', desc: 'Modern lifestyle boutique brand with interactive shopping lookbooks.', author: 'Nordic Co' },
  { id: 'vancouver', name: 'Vancouver Plus', category: 'Portfolio', image: '/images/home-collage/vancouver.jpg', desc: 'Personal portfolio with interactive bento grid, project cards, and contact form.', author: 'Vancouver Dev' },
  { id: 'revolver', name: 'Revolver', category: 'AI', image: '/images/home-collage/revolver.jpg', desc: 'Futuristic AI platform website with prompt playground and interactive feature tabs.', author: 'Revolver AI' },
  { id: 'canada', name: 'Canada', category: 'Travel', image: '/images/home-collage/canada.jpg', desc: 'Travel and exploration journal with interactive maps and route planning.', author: 'Wilderness' },
  { id: 'atelier', name: 'Atelier', category: 'Architecture', image: '/images/home-collage/atelier.jpg', desc: 'High-end interior design and craft studio layout with image carousel.', author: 'Atelier Paris' },
];

const categories = [
  'All',
  'AI',
  'SaaS',
  'Agency',
  'Architecture',
  'Travel',
  'Portfolio',
  'Marketing',
  'Photography',
  'Creative',
];

export default function TemplatesPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = templates.filter((t) => {
    const matchesCat = selectedCategory === 'All' || t.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesQuery = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleClone = (template: Template) => {
    router.push(`/dashboard?template=${template.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-16 pb-10 md:pt-24 md:pb-14 text-center px-5 max-w-[1240px] mx-auto">
          <h1 className="text-[clamp(36px,6vw,56px)] font-medium leading-[1.15] text-neutral-900 font-['Neutralsans']">
            Free templates, ready to clone
          </h1>
          <p className="mt-4 max-w-[620px] mx-auto text-[clamp(1rem,1.2vw,1.12rem)] leading-relaxed text-gray-500">
            Browse templates built for modern digital products. Clone them directly into PixartualAI and customize layouts, copy, interactive components, and database logic with AI.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-[480px] mx-auto relative">
            <MagnifyingGlass size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search templates by name or keyword…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-neutral-200 bg-stone-50 text-neutral-900 placeholder:text-gray-400 focus:outline-none focus:border-neutral-950 focus:bg-white transition-all text-sm"
            />
          </div>

          {/* Category Pills */}
          <div className="mt-8 flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-neutral-950 text-white shadow-sm'
                    : 'bg-stone-100 text-neutral-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Template Grid */}
        <section className="pb-20 px-5 max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((t) => (
              <article
                key={t.id}
                className="group flex flex-col rounded-[20px] border border-neutral-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-neutral-300"
              >
                {/* Image Container with Hover Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                    <button
                      type="button"
                      onClick={() => handleClone(t)}
                      className="mfy-btn mfy-btn--primary !py-2.5 !px-5 !text-xs !font-semibold shadow-lg"
                    >
                      Clone template
                    </button>
                    <button
                      type="button"
                      onClick={() => handleClone(t)}
                      className="mfy-btn mfy-btn--secondary !py-2.5 !px-4 !text-xs !font-semibold shadow-lg flex items-center gap-1"
                    >
                      Preview <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-neutral-900 font-['Neutralsans']">
                        {t.name}
                      </h3>
                      <span className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-stone-100 text-neutral-600">
                        {t.category}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">
                      {t.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                    <span>By {t.author}</span>
                    <button
                      type="button"
                      onClick={() => handleClone(t)}
                      className="text-neutral-900 font-semibold hover:text-[#fc8c04] transition-colors flex items-center gap-1"
                    >
                      Use template &rarr;
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-neutral-400">
              <p className="text-lg">No templates found matching your criteria.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-3 text-sm text-[#fc8c04] underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>

        {/* CTA Banner */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
