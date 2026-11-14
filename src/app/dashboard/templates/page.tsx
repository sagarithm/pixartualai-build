'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import {
  FolderSimple,
  MagnifyingGlass,
  Plus,
  ArrowRight,
  Eye,
  RocketLaunch,
  Tag,
  Sparkle,
} from '@phosphor-icons/react';

export default function TemplatesPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'SaaS', 'Portfolio', 'E-Commerce', 'Agency', 'Directory', 'Mobile'];

  const templates = [
    {
      id: 'nova-saas',
      title: 'Nova SaaS Suite',
      category: 'SaaS',
      desc: 'B2B subscription landing page with feature bento, live pricing tiers, and Stripe checkout.',
      coverUrl: '/images/bento-generate.webp',
      badge: 'Popular',
    },
    {
      id: 'atelier-portfolio',
      title: 'Atelier Creative Studio',
      category: 'Portfolio',
      desc: 'Editorial visual portfolio for photographers, designers, and creative directors with smooth typography.',
      coverUrl: '/images/atelier.jpg',
      badge: 'Featured',
    },
    {
      id: 'aperture-media',
      title: 'Aperture Cinema & Media',
      category: 'Agency',
      desc: 'High-impact agency layout with video hero, client reels, and interactive case studies.',
      coverUrl: '/images/aperture.jpg',
    },
    {
      id: 'galway-store',
      title: 'Galway Lifestyle Commerce',
      category: 'E-Commerce',
      desc: 'Full-featured digital storefront with shopping cart, variant picker, and customer reviews.',
      coverUrl: '/images/galway.jpg',
      badge: 'New',
    },
    {
      id: 'vancouver-directory',
      title: 'Vancouver City Guide',
      category: 'Directory',
      desc: 'Multi-category relational CMS directory with search, interactive map cards, and filter pills.',
      coverUrl: '/images/vancouver.jpg',
    },
    {
      id: 'black-label',
      title: 'Black Label Luxury Goods',
      category: 'E-Commerce',
      desc: 'Monochrome dark-mode shopping experience with high-resolution imagery and elegant typography.',
      coverUrl: '/images/black.jpg',
    },
    {
      id: 'boutique-consulting',
      title: 'Boutique Advisory',
      category: 'Agency',
      desc: 'Corporate consultation and strategic advisory firm landing page with booking integration.',
      coverUrl: '/images/boutique.jpg',
    },
    {
      id: 'canada-travel',
      title: 'Nordic & Alpine Retreats',
      category: 'Directory',
      desc: 'Hospitality and boutique hotel booking platform with interactive amenity calculator.',
      coverUrl: '/images/canada.jpg',
    },
  ];

  const filtered = templates.filter((t) => {
    const matchesCat = selectedCategory === 'All' || t.category === selectedCategory;
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1300px] w-full mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Templates Library</h1>
              <p className="text-xs text-neutral-500 mt-1">
                Explore production-ready product templates. Clone any template directly into your workspace.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => router.push('/dashboard/studio')}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
              >
                <Plus size={14} weight="bold" />
                <span>Start from blank</span>
              </button>
            </div>
          </div>

          {/* Categories & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 my-6">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold'
                      : 'bg-white dark:bg-[#181818] text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64 shrink-0">
              <MagnifyingGlass size={15} className="absolute left-3 top-2.5 text-neutral-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search templates..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#181818] text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tmpl) => (
              <div
                key={tmpl.id}
                className="group flex flex-col rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] overflow-hidden shadow-2xs hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  <Image
                    src={tmpl.coverUrl}
                    alt={tmpl.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {tmpl.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/80 text-white text-[10px] font-semibold tracking-wide">
                      {tmpl.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => router.push(`/dashboard/studio?template=${tmpl.id}`)}
                      className="px-3.5 py-2 rounded-xl bg-accent text-white text-xs font-semibold shadow-lg hover:opacity-95 flex items-center gap-1.5 transition-transform active:scale-95"
                    >
                      <RocketLaunch size={14} />
                      <span>Clone Template</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">
                        {tmpl.category}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mt-1">
                      {tmpl.title}
                    </h3>
                    <p className="text-[11.5px] text-neutral-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {tmpl.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-400">100% Responsive • Next.js</span>
                    <button
                      onClick={() => router.push(`/dashboard/studio?template=${tmpl.id}`)}
                      className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-accent flex items-center gap-1 transition-colors"
                    >
                      <span>Use this</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
