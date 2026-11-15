'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PixartualCta } from '@/components/landing/PixartualCta';
import { Plus, Minus, MagnifyingGlass } from '@phosphor-icons/react';
import faqsCatalog from '@/data/faqs_catalog.json';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  category: string;
  faqs: FaqItem[];
}

export default function FaqsPage() {
  const categories: FaqCategory[] = faqsCatalog as FaqCategory[];
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = categories
    .map((cat) => {
      if (activeCategory !== 'All' && cat.category !== activeCategory) {
        return null;
      }
      const filteredFaqs = cat.faqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredFaqs.length === 0) return null;
      return { ...cat, faqs: filteredFaqs };
    })
    .filter(Boolean) as FaqCategory[];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-neutral-900 dark:text-neutral-100 selection:bg-orange-500 selection:text-white transition-colors">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <header className="max-w-[1240px] mx-auto px-5 pt-16 pb-12 md:px-[50px] md:pt-24 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-3">
            Support & Knowledge
          </span>
          <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[1.08] text-neutral-950 dark:text-white font-['Neutralsans'] tracking-[-0.02em]">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-[620px] mx-auto leading-relaxed">
            Everything you need to know about PixartualAI. Can’t find an answer? Start a chat with us and we’ll help.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-[480px] mx-auto relative">
            <MagnifyingGlass
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-neutral-100 dark:bg-[#18181b] hover:bg-neutral-150 dark:hover:bg-[#202024] focus:bg-white dark:focus:bg-[#121215] rounded-full text-sm text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 focus:border-[#fc8c04] focus:outline-none transition-all shadow-xs placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
            />
          </div>

          {/* Category Tabs */}
          <nav aria-label="FAQ categories" className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === 'All'
                  ? 'bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 shadow-sm'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              All questions
            </button>
            {categories.map((cat) => (
              <button
                key={cat.category}
                type="button"
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.category
                    ? 'bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 shadow-sm'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </nav>
        </header>

        {/* FAQs List */}
        <div className="max-w-[860px] mx-auto px-5 md:px-[50px] pb-24">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-neutral-500 dark:text-neutral-400 text-base">
                No questions found matching &quot;{searchQuery}&quot;.
              </p>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div key={cat.category} className="mb-14">
                <h2 className="text-xl md:text-2xl font-medium text-neutral-950 dark:text-white font-['Neutralsans'] pb-4 border-b border-neutral-200/80 dark:border-neutral-800 mb-2">
                  {cat.category}
                </h2>

                <div className="divide-y divide-neutral-100 dark:divide-neutral-800/80">
                  {cat.faqs.map((faq, idx) => {
                    const itemKey = `${cat.category}-${idx}`;
                    const isOpen = !!openItems[itemKey];
                    return (
                      <div key={itemKey} className="py-5">
                        <button
                          type="button"
                          onClick={() => toggleItem(itemKey)}
                          className="flex w-full items-start justify-between text-left group cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="text-base md:text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-[#fc8c04] transition-colors pr-6">
                            {faq.q}
                          </span>
                          <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:bg-[#fc8c04] group-hover:text-white transition-colors mt-0.5">
                            {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="mt-3 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400 animate-fadeIn pr-10">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* CTA Banner */}
        <PixartualCta />
      </main>

      <Footer />
    </div>
  );
}
