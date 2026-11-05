'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkle,
  ArrowRight,
  CaretDown,
  RocketLaunch,
  ChartBar,
  Layout,
  Palette,
  Megaphone,
  Wrench,
  Users,
  DeviceMobile,
  Database,
  List,
  X,
} from '@phosphor-icons/react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const solutionsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const solutions = [
    { title: 'Founders', desc: 'Ship your product and interactive MVP fast.', icon: RocketLaunch, href: '/templates?category=portfolio' },
    { title: 'Designers', desc: 'Ship functional prototypes with zero handoff.', icon: Palette, href: '/templates?category=portfolio' },
    { title: 'Product Managers', desc: 'Build interactive tools instead of static specs.', icon: Layout, href: '/templates?category=tool' },
    { title: 'Marketers', desc: 'Launch high-converting calculators & quizzes.', icon: Megaphone, href: '/templates?category=tool' },
    { title: 'Operations', desc: 'Interactive internal tools, trackers & estimators.', icon: Wrench, href: '/templates?category=tool' },
    { title: 'Creators', desc: 'Personal websites and bento portfolio hubs.', icon: Users, href: '/templates?category=personal' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-[#FBFBFA]/90 dark:bg-[#0F0F0F]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Brand Logo + Dropdowns */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="size-8 rounded-[7px] bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105">
              <Sparkle size={18} weight="fill" />
            </div>
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-neutral-900 dark:text-neutral-50">
              Pixartual<span className="text-neutral-500">AI</span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {/* Solutions Dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                type="button"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-[7px] hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70 transition-colors"
              >
                <span>Solutions</span>
                <CaretDown size={12} className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-[540px] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-xl grid grid-cols-2 gap-2 z-50">
                  {solutions.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-[10px] hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition-colors group"
                      >
                        <div className="size-8 rounded-[7px] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-900 transition-colors shrink-0">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-neutral-500 font-sans mt-0.5 leading-tight">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/templates"
              className="px-3 py-1.5 rounded-[7px] hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70 transition-colors"
            >
              Templates
            </Link>

            <Link
              href="/pricing"
              className="px-3 py-1.5 rounded-[7px] hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70 transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="/#features"
              className="px-3 py-1.5 rounded-[7px] hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70 transition-colors"
            >
              Features
            </Link>
          </nav>
        </div>

        {/* Right: Actions, Currency, Theme, Launch */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/studio"
            className="hidden sm:inline-flex text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white px-2 py-1"
          >
            Sign In
          </Link>

          <Link
            href="/studio"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-sm"
          >
            <span>Get Started</span>
            <ArrowRight size={14} weight="bold" />
          </Link>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-[7px] border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 dark:border-neutral-800 bg-[#FBFBFA] dark:bg-[#0F0F0F] px-4 py-4 space-y-2">
          <Link
            href="/templates"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-[7px] text-sm font-medium text-neutral-800 dark:text-neutral-200"
          >
            Templates Catalog
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-[7px] text-sm font-medium text-neutral-800 dark:text-neutral-200"
          >
            Pricing & Plans
          </Link>
          <Link
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-[7px] text-sm font-medium text-neutral-800 dark:text-neutral-200"
          >
            Platform Features
          </Link>
          <div className="pt-2">
            <Link
              href="/studio"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-[10px] bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-center text-xs font-semibold block"
            >
              Launch Studio Canvas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
