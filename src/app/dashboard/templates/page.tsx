'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import rawTemplates from '@/data/pxl_templates.json';
import {
  FolderSimple,
  MagnifyingGlass,
  Plus,
  ArrowRight,
  Eye,
  RocketLaunch,
  Tag,
  Sparkle,
  DotsThree,
} from '@phosphor-icons/react';

export default function TemplatesPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'AI', 'SaaS & Apps', 'Agency & Services', 'Architecture', 'Portfolio & Personal', 'Travel & Hospitality'];

  const templates = rawTemplates;

  const filtered = templates.filter((t) => {
    const matchesCat = selectedCategory === 'All' || t.category === selectedCategory;
    const matchesSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());
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

          {/* Authentic PixartualAI Templates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((tmpl) => (
              <div
                key={tmpl.slug}
                onClick={() => router.push(`/dashboard/studio?template=${tmpl.slug}`)}
                className="group flex flex-col gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus:outline-none"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                  <img
                    src={tmpl.previewUrl}
                    alt={tmpl.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-3 py-1.5 rounded-xl bg-white/95 text-neutral-900 text-xs font-semibold shadow-lg">
                      Open in Studio
                    </span>
                  </div>
                </div>

                <div className="w-full flex flex-col px-1 pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col min-w-0">
                      <h2 className="text-[15px] font-semibold text-neutral-900 dark:text-white truncate">
                        {tmpl.name}
                      </h2>
                      <span className="text-xs font-medium text-neutral-400 truncate">
                        {tmpl.category}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="p-1 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <DotsThree size={18} weight="bold" />
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
