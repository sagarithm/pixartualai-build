'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CaretDown, List, X } from '@phosphor-icons/react';
import { PixartualLogo } from '@/components/brand/PixartualLogo';

export const Navbar: React.FC = () => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-[100] transition-colors duration-300 bg-white/85 backdrop-blur-md backdrop-saturate-[1.8]">
      <div className="mx-auto flex w-full max-w-[1240px] items-center gap-3 px-5 transition-[padding] duration-200 md:px-[50px] lg:gap-6 py-4">
        {/* Left: PixartualAI Brand Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="PixartualAI home">
          <PixartualLogo variant="auto" size={28} showWordmark />
        </Link>

        {/* Primary Desktop Navigation */}
        <nav ref={navRef} className="ml-2 hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div className="relative flex items-center gap-1">
            {/* Solutions Dropdown Button */}
            <button
              type="button"
              onClick={() => {
                setSolutionsOpen(!solutionsOpen);
                setResourcesOpen(false);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal text-ink-strong no-underline cursor-pointer bg-transparent hover:bg-stone-100/70 transition-colors"
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              Solutions
              <CaretDown
                size={15}
                className={`text-gray-500 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Resources Dropdown Button */}
            <button
              type="button"
              onClick={() => {
                setResourcesOpen(!resourcesOpen);
                setSolutionsOpen(false);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal text-ink-strong no-underline cursor-pointer bg-transparent hover:bg-stone-100/70 transition-colors"
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
            >
              Resources
              <CaretDown
                size={15}
                className={`text-gray-500 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Solutions Megamenu */}
            {solutionsOpen && (
              <div
                className="mfy-mega absolute left-0 top-[calc(100%+12px)] z-20 w-[640px] max-w-[calc(100vw-40px)] overflow-hidden rounded-[18px] border border-neutral-200 bg-surface shadow-[0_30px_60px_theme(colors.static-black/12%),0_2px_8px_theme(colors.static-black/6%)] mfy-fadein"
                role="region"
                aria-label="Solutions"
              >
                <div className="p-[22px]">
                  <div className="flex gap-5">
                    <Link
                      href="/solutions"
                      onClick={() => setSolutionsOpen(false)}
                      className="group flex w-[190px] shrink-0 flex-col rounded-[12px] bg-stone-100 p-4 no-underline transition-colors hover:bg-stone-200"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-zinc-400">Solutions</p>
                      <p className="mt-2 text-[13px] leading-[1.45] text-zinc-500">
                        What every team builds with PixartualAI.
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[13px] font-medium text-ink-strong">
                        View all use cases →
                      </span>
                    </Link>

                    <div className="flex-1 space-y-3">
                      <div>
                        <p className="mb-1 px-2.5 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-ink-faint">
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
                              className="flex flex-col rounded-[10px] px-2.5 py-[9px] no-underline transition-colors hover:bg-stone-100"
                            >
                              <span className="text-[14.5px] font-medium leading-[1.35] text-ink-strong">
                                {item.label}
                              </span>
                              <span className="text-[12.5px] leading-[1.35] text-zinc-500">{item.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="mb-1 px-2.5 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-ink-faint">
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
                              className="flex flex-col rounded-[10px] px-2.5 py-[9px] no-underline transition-colors hover:bg-stone-100"
                            >
                              <span className="text-[14.5px] font-medium leading-[1.35] text-ink-strong">
                                {item.label}
                              </span>
                              <span className="text-[12.5px] leading-[1.35] text-zinc-500">{item.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Resources Megamenu */}
            {resourcesOpen && (
              <div
                className="mfy-mega absolute left-0 top-[calc(100%+12px)] z-20 w-[640px] max-w-[calc(100vw-40px)] overflow-hidden rounded-[18px] border border-neutral-200 bg-surface shadow-[0_30px_60px_theme(colors.static-black/12%),0_2px_8px_theme(colors.static-black/6%)] mfy-fadein"
                role="region"
                aria-label="Resources"
              >
                <div className="p-[22px]">
                  <div className="flex gap-5">
                    <Link
                      href="/insights"
                      onClick={() => setResourcesOpen(false)}
                      className="group flex w-[190px] shrink-0 flex-col rounded-[12px] bg-stone-100 p-4 no-underline transition-colors hover:bg-stone-200"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-zinc-400">Resources</p>
                      <p className="mt-2 text-[13px] leading-[1.45] text-zinc-500">
                        Guides, templates, updates, and ecosystem.
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[13px] font-medium text-ink-strong">
                        Explore all resources →
                      </span>
                    </Link>

                    <div className="flex-1 space-y-3">
                      <div>
                        <p className="mb-1 px-2.5 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-ink-faint">
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
                            { label: 'Agencies Directory', desc: 'Top vetted web agencies.', href: '/top-agencies' },
                          ].map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setResourcesOpen(false)}
                              className="flex flex-col rounded-[10px] px-2.5 py-[9px] no-underline transition-colors hover:bg-stone-100"
                            >
                              <span className="text-[14.5px] font-medium leading-[1.35] text-ink-strong">
                                {item.label}
                              </span>
                              <span className="text-[12.5px] leading-[1.35] text-zinc-500">{item.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal text-ink-strong no-underline fx-link"
          >
            Pricing
          </Link>
          <Link
            href="/enterprise-teams"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal text-ink-strong no-underline fx-link"
          >
            Enterprise
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal text-ink-strong no-underline fx-link"
          >
            Contact
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="ml-auto hidden items-center gap-5 lg:flex">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal text-ink-strong no-underline fx-link"
          >
            Sign In
          </Link>
          <Link className="mfy-btn mfy-btn--primary" href="/dashboard">
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="ml-auto inline-flex size-[42px] items-center justify-center rounded-[10px] bg-transparent text-ink-strong lg:hidden"
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-surface px-5 py-5 space-y-4 max-h-[80vh] overflow-y-auto mfy-fadein">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-faint mb-2">Solutions</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Founders', href: '/founders' },
                { label: 'Designers', href: '/designers' },
                { label: 'Marketers', href: '/marketers' },
                { label: 'Sales', href: '/sales' },
                { label: 'Product Managers', href: '/product-managers' },
                { label: 'All Solutions', href: '/solutions' },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-ink-strong hover:bg-stone-100 rounded-lg"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-neutral-200">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-faint mb-2">Explore</div>
            <div className="flex flex-col gap-1">
              <Link
                href="/templates"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-ink-strong hover:bg-stone-100 rounded-lg"
              >
                Templates
              </Link>
              <Link
                href="/insights"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-ink-strong hover:bg-stone-100 rounded-lg"
              >
                Insights
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-ink-strong hover:bg-stone-100 rounded-lg"
              >
                Pricing
              </Link>
              <Link
                href="/enterprise-teams"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-ink-strong hover:bg-stone-100 rounded-lg"
              >
                Enterprise
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-ink-strong hover:bg-stone-100 rounded-lg"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-200 flex flex-col gap-2">
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg border border-neutral-200 text-sm font-medium text-ink-strong hover:bg-stone-100"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="mfy-btn mfy-btn--primary w-full justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
