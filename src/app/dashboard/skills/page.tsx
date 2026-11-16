'use client';

import React, { useState } from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import {
  Sparkle,
  Star,
  MagnifyingGlass,
  Check,
  Plus,
  Funnel,
  CaretDown,
} from '@phosphor-icons/react';

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState<'explore' | 'favorites'>('explore');
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState<string[]>(['seo-ai-search', 'performance']);

  const categories = ['All categories', 'Design', 'Content', 'Quality', 'Discoverability', 'Community'];

  const allSkills = [
    {
      id: 'seo-ai-search',
      title: 'SEO & AI Search',
      description:
        'Optimize the site for search engines and AI answer engines. Add metadata, JSON-LD structured data, sitemap, robots, and llms.txt, and write content that AI systems can cite. Triggers on SEO, GEO, metadata, schema, structured data, discoverability, ranking.',
      badge: 'Discoverability',
    },
    {
      id: 'blog-cms',
      title: 'Blog & CMS',
      description:
        'Build a blog or content collection on the project database, wire it into the PixartualAI CMS, and render fast readable posts with author, tags, pagination, RSS, and Article JSON-LD. Triggers on blog, articles, posts, CMS, collection, content model, categories, tags.',
      badge: 'Content',
    },
    {
      id: 'accessibility',
      title: 'Accessibility',
      description:
        'Make the site usable by keyboard and screen-reader visitors and meet WCAG 2.2 AA: semantic landmarks, focus management, labelled forms, 24px targets, sufficient contrast, and reduced-motion support. Triggers on accessibility, a11y, screen reader, keyboard, contrast, aria, WCAG.',
      badge: 'Quality',
    },
    {
      id: 'performance',
      title: 'Performance',
      description:
        'Keep the site fast and protect Core Web Vitals (LCP, INP, CLS): prioritize the LCP image, render server-first, stream slow parts, load fonts through next/font, defer third-party scripts, and ship small client bundles. Triggers on performance, speed, Core Web Vitals, LCP, INP, CLS, optimization, images, loading.',
      badge: 'Quality',
    },
    {
      id: 'design-system',
      title: 'Design System',
      description:
        'Build the site from consistent design tokens and reusable components (palette, type scale, spacing, radii, shadows, states) with light and dark theming from one source. Triggers on design system, theme, tokens, styling, branding, dark mode, components, consistency.',
      badge: 'Design',
    },
    {
      id: 'motion-animation',
      title: 'Motion & Animation',
      description:
        'Add purposeful, performant motion: transform and opacity animations, scroll reveals, and micro-interactions that always respect prefers-reduced-motion. Triggers on animation, motion, transition, scroll reveal, micro-interaction, hover effect, parallax.',
      badge: 'Design',
    },
    {
      id: 'forms-lead-capture',
      title: 'Forms & Lead Capture',
      description:
        'Build contact and lead-capture forms that ask for the fewest fields, validate on the server, persist to the project database, register in the CMS, block spam without a CAPTCHA wall, and confirm success. Triggers on form, contact, lead capture, signup, newsletter, submission, subscribe.',
      badge: 'Content',
    },
    {
      id: 'design-direction',
      title: 'Design Direction',
      description:
        'Give the site a distinctive visual point of view instead of a templated default: a committed mood, characterful typography, deliberate color and density, a chosen imagery style, and one signature element. Triggers on design, aesthetic, visual direction, look and feel, typography, distinctive, unique, art direction.',
      badge: 'Design',
    },
    {
      id: 'landing-page',
      title: 'Landing Page',
      description:
        'Build high-converting landing pages with a focused anatomy: a single goal, a strong above-the-fold, problem and solution, real proof, objection handling, and one conversion path with minimal nav. Triggers on landing page, hero, conversion, call to action, CTA, pricing, features, waitlist.',
      badge: 'Content',
    },
    {
      id: 'brand-consistency',
      title: 'Brand Consistency',
      description:
        'Apply a brand consistently across the whole site: one palette and type system, correct logo usage and spacing, and a steady voice and tone, so every page feels like the same product. Triggers on brand, branding, logo, voice, tone, guidelines, identity, consistency.',
      badge: 'Design',
    },
    {
      id: 'ecommerce-checkout',
      title: 'E-commerce & Checkout',
      description:
        'Build a store that keeps products, inventory, and orders in the project database and completes payment through an attached payment Connector, with server-authoritative totals, guest checkout, express wallets, and PCI-safe hosted card fields. Triggers on ecommerce, shop, store, products, cart, checkout, payment, Stripe, orders.',
      badge: 'Content',
    },
    {
      id: 'analytics-consent',
      title: 'Analytics & Consent',
      description:
        'Measure how the site is used while respecting privacy: track meaningful key events, gate non-essential tags behind Consent Mode v2, honor GPC, and prefer cookieless measurement. Triggers on analytics, tracking, events, metrics, cookies, consent, GDPR, GPC, privacy.',
      badge: 'Content',
    },
  ];

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredSkills = allSkills.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All categories' || s.badge === selectedCategory;
    const matchesTab = activeTab === 'explore' || favorites.includes(s.id);

    return matchesSearch && matchesCategory && matchesTab;
  });

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1100px] w-full mx-auto">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">PixartualAI Skills</h1>
            <p className="text-xs text-neutral-500 mt-1 max-w-2xl leading-relaxed">
              Skills are reusable instruction sets like design rules, tone of voice, SEO, and QA. Your agent applies them while building, so it gets things right without being told twice.
            </p>
          </div>

          {/* 3 Feature Highlights (Exact 1:1 PixartualAI Parity) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <h3 className="text-xs font-semibold text-neutral-900 dark:text-white">Ready to use</h3>
              <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Pick one from the catalog, no writing needed.
              </p>
            </div>
            <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <h3 className="text-xs font-semibold text-neutral-900 dark:text-white">Runs when it matters</h3>
              <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Attach it with / in chat, applied as you build.
              </p>
            </div>
            <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <h3 className="text-xs font-semibold text-neutral-900 dark:text-white">Shared with your workspace</h3>
              <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Everyone here builds from the same playbook.
              </p>
            </div>
          </div>

          {/* Subheader Toolbar & Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8 pb-3 border-b border-neutral-200/80 dark:border-neutral-800 text-xs">
            {/* Tabs */}
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setActiveTab('explore')}
                className={`pb-3 -mb-3 font-medium transition-colors border-b-2 ${
                  activeTab === 'explore'
                    ? 'border-black dark:border-white text-neutral-900 dark:text-white font-semibold'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <span>Explore</span>
                <span className="text-[11px] text-neutral-400 ml-1.5">(29)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('favorites')}
                className={`pb-3 -mb-3 font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
                  activeTab === 'favorites'
                    ? 'border-black dark:border-white text-neutral-900 dark:text-white font-semibold'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <span>Favorites</span>
                {favorites.length > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                    {favorites.length}
                  </span>
                )}
              </button>
            </div>

            {/* Filter and Search */}
            <div className="flex items-center gap-3">
              {/* Category Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] text-neutral-700 dark:text-neutral-300 shadow-2xs hover:bg-neutral-50"
                >
                  <span>{selectedCategory}</span>
                  <CaretDown size={11} className="text-neutral-400" />
                </button>

                {isCategoryOpen && (
                  <div className="absolute right-0 top-full mt-1.5 w-40 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] p-1 shadow-lg z-50 text-xs">
                    {categories.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(c);
                          setIsCategoryOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors ${
                          selectedCategory === c
                            ? 'bg-neutral-100 dark:bg-neutral-800 font-semibold text-neutral-900 dark:text-white'
                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Box */}
              <div className="relative w-48 sm:w-60">
                <MagnifyingGlass size={14} className="absolute left-3 top-2.5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-accent shadow-2xs"
                />
              </div>
            </div>
          </div>

          {/* Skill Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {filteredSkills.map((skill) => {
              const isFav = favorites.includes(skill.id);
              return (
                <div
                  key={skill.id}
                  className="p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <h2 className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors">
                          {skill.title}
                        </h2>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                          {skill.badge}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleFavorite(skill.id)}
                        className="text-neutral-300 hover:text-amber-400 dark:hover:text-amber-400 transition-colors"
                        title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        <Star size={16} weight={isFav ? 'fill' : 'regular'} className={isFav ? 'text-amber-400' : ''} />
                      </button>
                    </div>

                    <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-neutral-400">
                      /{skill.id.replace(/-/g, '')}
                    </span>
                    <button
                      type="button"
                      onClick={() => alert(`Attached skill "${skill.title}" to active project workspace.`)}
                      className="px-3 py-1 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-[11px] font-medium text-neutral-700 dark:text-neutral-300 transition-colors"
                    >
                      Attach
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
