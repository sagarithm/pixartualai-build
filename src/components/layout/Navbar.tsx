'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CaretDown, List, X } from '@phosphor-icons/react';
import { PixartualLogo } from '@/components/brand/PixartualLogo';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

export const Navbar: React.FC = () => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const openSolutions = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSolutionsOpen(true);
    setResourcesOpen(false);
  };

  const openResources = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setResourcesOpen(true);
    setSolutionsOpen(false);
  };

  const scheduleClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
      setResourcesOpen(false);
    }, 200);
  };

  const keepOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <header className="sticky top-0 z-[100] transition-colors duration-300 bg-white/85 dark:bg-[#121212]/85 backdrop-blur-md backdrop-saturate-[1.8] border-b border-transparent">
      <div className="mx-auto flex w-full max-w-[1240px] items-center gap-3 px-5 transition-[padding] duration-200 md:px-[50px] lg:gap-6 py-4">
        {/* Left: PixartualAI Brand Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="PixartualAI home">
          <PixartualLogo variant="auto" size={28} showWordmark />
        </Link>

        {/* Primary Desktop Navigation */}
        <nav ref={navRef} className="ml-2 hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div
            className="relative flex items-center gap-1"
            onMouseLeave={scheduleClose}
          >
            {/* Solutions Dropdown Button (Hover & Click aware) */}
            <div
              className="relative"
              onMouseEnter={openSolutions}
            >
              <button
                type="button"
                onClick={() => {
                  setSolutionsOpen(!solutionsOpen);
                  setResourcesOpen(false);
                }}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal no-underline cursor-pointer transition-colors ${
                  solutionsOpen
                    ? 'bg-stone-100 dark:bg-neutral-800 text-neutral-950 dark:text-white font-medium'
                    : 'text-neutral-800 dark:text-neutral-200 bg-transparent hover:bg-stone-100/70 dark:hover:bg-neutral-800/70'
                }`}
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
              >
                Solutions
                <CaretDown
                  size={15}
                  className={`text-gray-500 dark:text-neutral-400 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {/* Resources Dropdown Button (Hover & Click aware) */}
            <div
              className="relative"
              onMouseEnter={openResources}
            >
              <button
                type="button"
                onClick={() => {
                  setResourcesOpen(!resourcesOpen);
                  setSolutionsOpen(false);
                }}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal no-underline cursor-pointer transition-colors ${
                  resourcesOpen
                    ? 'bg-stone-100 dark:bg-neutral-800 text-neutral-950 dark:text-white font-medium'
                    : 'text-neutral-800 dark:text-neutral-200 bg-transparent hover:bg-stone-100/70 dark:hover:bg-neutral-800/70'
                }`}
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
              >
                Resources
                <CaretDown
                  size={15}
                  className={`text-gray-500 dark:text-neutral-400 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {/* Solutions Megamenu Submenu Bar */}
            <div
              onMouseEnter={keepOpen}
              onMouseLeave={scheduleClose}
              className={`px-mega absolute left-0 top-[calc(100%+8px)] z-20 w-[640px] max-w-[calc(100vw-40px)] overflow-hidden rounded-[18px] border border-neutral-200/90 dark:border-[#292929] bg-white dark:bg-[#121215] shadow-[0_30px_60px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-all duration-200 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-[''] ${
                solutionsOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                  : 'opacity-0 translate-y-2 pointer-events-none invisible'
              }`}
              role="region"
              aria-label="Solutions"
            >
              <div className="p-[22px]">
                <div className="flex gap-5">
                  <Link
                    href="/solutions"
                    onClick={() => setSolutionsOpen(false)}
                    className="group flex w-[190px] shrink-0 flex-col rounded-[12px] bg-stone-100 dark:bg-neutral-800/50 p-4 no-underline transition-colors hover:bg-stone-200 dark:hover:bg-neutral-700/50"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-zinc-400 dark:text-zinc-500">Solutions</p>
                    <p className="mt-2 text-[13px] leading-[1.45] text-zinc-500 dark:text-neutral-400">
                      What every team builds with PixartualAI.
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[13px] font-medium text-ink-strong dark:text-white group-hover:text-[#fc8c04] transition-colors">
                      View all use cases →
                    </span>
                  </Link>

                  <div className="flex-1 space-y-3">
                    <div>
                      <p className="mb-1 px-2.5 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-neutral-400 dark:text-neutral-500">
                        By role
                      </p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                        {[
                          { label: 'Founders', desc: 'Ship your site and MVP fast.', href: '/founders' },
                          { label: 'Sales', desc: 'Build live, tailored demos.', href: '/sales' },
                          { label: 'Product managers', desc: 'Prototype instead of spec.', href: '/product-managers' },
                          { label: 'Designers', desc: 'Ship your design, no handoff.', href: '/designers' },
                          { label: 'Marketers', desc: 'Launch campaign pages fast.', href: '/marketers' },
                          { label: 'Ops', desc: 'Internal tools that fit.', href: '/ops' },
                          { label: 'People', desc: 'HR tools your team likes.', href: '/people' },
                        ].map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setSolutionsOpen(false)}
                            className="flex flex-col rounded-[10px] px-2.5 py-[9px] no-underline transition-colors hover:bg-stone-100 dark:hover:bg-neutral-800/60"
                          >
                            <span className="text-[14.5px] font-medium leading-[1.35] text-neutral-900 dark:text-white">
                              {item.label}
                            </span>
                            <span className="text-[12.5px] leading-[1.35] text-zinc-500 dark:text-neutral-400">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-1 px-2.5 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-neutral-400 dark:text-neutral-500">
                        By use case
                      </p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                        {[
                          { label: 'Prototypes', desc: 'Real, clickable prototypes.', href: '/prototypes' },
                          { label: 'Internal tools', desc: 'Dashboards, trackers, admin.', href: '/tools' },
                        ].map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setSolutionsOpen(false)}
                            className="flex flex-col rounded-[10px] px-2.5 py-[9px] no-underline transition-colors hover:bg-stone-100 dark:hover:bg-neutral-800/60"
                          >
                            <span className="text-[14.5px] font-medium leading-[1.35] text-neutral-900 dark:text-white">
                              {item.label}
                            </span>
                            <span className="text-[12.5px] leading-[1.35] text-zinc-500 dark:text-neutral-400">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Megamenu Submenu Bar */}
            <div
              onMouseEnter={keepOpen}
              onMouseLeave={scheduleClose}
              className={`px-mega absolute left-0 top-[calc(100%+8px)] z-20 w-[640px] max-w-[calc(100vw-40px)] overflow-hidden rounded-[18px] border border-neutral-200/90 dark:border-[#292929] bg-white dark:bg-[#121215] shadow-[0_30px_60px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-all duration-200 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-[''] ${
                resourcesOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                  : 'opacity-0 translate-y-2 pointer-events-none invisible'
              }`}
              role="region"
              aria-label="Resources"
            >
              <div className="p-[22px]">
                <div className="flex gap-5">
                  <Link
                    href="/insights"
                    onClick={() => setResourcesOpen(false)}
                    className="group flex w-[190px] shrink-0 flex-col rounded-[12px] bg-stone-100 dark:bg-neutral-800/50 p-4 no-underline transition-colors hover:bg-stone-200 dark:hover:bg-neutral-700/50"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-zinc-400 dark:text-zinc-500">Resources</p>
                    <p className="mt-2 text-[13px] leading-[1.45] text-zinc-500 dark:text-neutral-400">
                      Guides, templates, updates, and ecosystem.
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[13px] font-medium text-ink-strong dark:text-white group-hover:text-[#fc8c04] transition-colors">
                      Explore all resources →
                    </span>
                  </Link>

                  <div className="flex-1 space-y-3">
                    <div>
                      <p className="mb-1 px-2.5 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-neutral-400 dark:text-neutral-500">
                        Explore
                      </p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                        {[
                          { label: 'Insights & Blog', desc: 'Design tips and AI tutorials.', href: '/insights' },
                          { label: 'Templates', desc: '120+ cloneable site templates.', href: '/templates' },
                          { label: 'Made in PixartualAI', desc: 'Showcase of live sites built.', href: '/made-in-pixartual' },
                          { label: 'Use Cases', desc: 'Deep dive into real projects.', href: '/insights/use-cases' },
                          { label: 'FAQs', desc: 'Answers to common questions.', href: '/faqs' },
                          { label: 'Webflow Transfer', desc: 'Migrate your Webflow sites.', href: '/webflow-transfer' },
                          { label: 'Compare Platforms', desc: 'PixartualAI vs Framer, Webflow.', href: '/compare' },
                        ].map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setResourcesOpen(false)}
                            className="flex flex-col rounded-[10px] px-2.5 py-[9px] no-underline transition-colors hover:bg-stone-100 dark:hover:bg-neutral-800/60"
                          >
                            <span className="text-[14.5px] font-medium leading-[1.35] text-neutral-900 dark:text-white">
                              {item.label}
                            </span>
                            <span className="text-[12.5px] leading-[1.35] text-zinc-500 dark:text-neutral-400">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal text-neutral-800 dark:text-neutral-200 no-underline fx-link hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/enterprise-teams"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal text-neutral-800 dark:text-neutral-200 no-underline fx-link hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            Enterprise
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal text-neutral-800 dark:text-neutral-200 no-underline fx-link hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal text-neutral-800 dark:text-neutral-200 no-underline fx-link hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link className="px-btn px-btn--primary !bg-black !text-white dark:!bg-white dark:!text-black font-semibold rounded-xl px-4 py-2 hover:opacity-90 transition-opacity" href="/dashboard">
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="ml-auto inline-flex size-[42px] items-center justify-center rounded-[10px] bg-transparent text-neutral-900 dark:text-white lg:hidden cursor-pointer hover:bg-stone-100 dark:hover:bg-neutral-800"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] px-5 py-6 lg:hidden animate-fadeIn">
          <div className="flex flex-col gap-4">
            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-neutral-950 dark:text-white no-underline"
            >
              Solutions
            </Link>
            <div className="pl-4 flex flex-col gap-2 border-l border-neutral-200 dark:border-neutral-800">
              <Link href="/founders" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-600 dark:text-neutral-400">
                Founders
              </Link>
              <Link href="/sales" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-600 dark:text-neutral-400">
                Sales
              </Link>
              <Link href="/product-managers" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-600 dark:text-neutral-400">
                Product Managers
              </Link>
              <Link href="/designers" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-600 dark:text-neutral-400">
                Designers
              </Link>
              <Link href="/marketers" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-600 dark:text-neutral-400">
                Marketers
              </Link>
              <Link href="/ops" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-600 dark:text-neutral-400">
                Ops
              </Link>
            </div>

            <Link
              href="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-neutral-950 dark:text-white no-underline"
            >
              Resources
            </Link>
            <div className="pl-4 flex flex-col gap-2 border-l border-neutral-200 dark:border-neutral-800">
              <Link href="/templates" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-600 dark:text-neutral-400">
                Templates
              </Link>
              <Link href="/made-in-pixartual" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-600 dark:text-neutral-400">
                Made in PixartualAI
              </Link>
              <Link href="/faqs" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-600 dark:text-neutral-400">
                FAQs
              </Link>
              <Link href="/compare" onClick={() => setMobileMenuOpen(false)} className="text-sm text-neutral-600 dark:text-neutral-400">
                Compare
              </Link>
            </div>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-neutral-950 dark:text-white no-underline"
            >
              Pricing
            </Link>
            <Link
              href="/enterprise-teams"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-neutral-950 dark:text-white no-underline"
            >
              Enterprise
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-neutral-950 dark:text-white no-underline"
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Appearance</span>
              <ThemeToggle />
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 font-medium text-sm text-neutral-800 dark:text-neutral-200"
              >
                Sign In
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-neutral-950 text-white dark:bg-white dark:text-black font-medium text-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
