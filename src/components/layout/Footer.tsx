'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Globe,
  Sun,
  Moon,
  Desktop,
  CaretDown,
} from '@phosphor-icons/react';
import { PixartualLogo } from '@/components/brand/PixartualLogo';

export const Footer: React.FC = () => {
  const [themeMode, setThemeMode] = useState<'auto' | 'light' | 'dark'>('light');
  const [themeOpen, setThemeOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  const themeRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const languages = ['English', 'Español', 'Français', 'Deutsch', '日本語', 'Português', 'Italiano'];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setThemeOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const applyTheme = (mode: 'auto' | 'light' | 'dark') => {
    try {
      localStorage.setItem('theme', mode);
      localStorage.setItem('pixartual-theme', JSON.stringify({ state: { Theme: mode } }));
    } catch (e) {}

    setThemeMode(mode);

    let isDark = false;
    if (mode === 'dark') {
      isDark = true;
    } else if (mode === 'light') {
      isDark = false;
    } else {
      isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    const html = document.documentElement;
    html.setAttribute('data-color-scheme', isDark ? 'dark' : 'light');
    html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    window.dispatchEvent(new CustomEvent('pixartual-theme-change', { detail: mode }));
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme') as 'auto' | 'light' | 'dark' | null;
      if (saved && ['auto', 'light', 'dark'].includes(saved)) {
        applyTheme(saved);
        return;
      }
      const modTheme = localStorage.getItem('pixartual-theme');
      if (modTheme) {
        const parsed = JSON.parse(modTheme);
        if (parsed?.state?.Theme && ['auto', 'light', 'dark'].includes(parsed.state.Theme)) {
          applyTheme(parsed.state.Theme);
          return;
        }
      }
      // default to current system or light
      applyTheme('light');
    } catch (e) {}
  }, []);

  return (
    <footer className="marketing-footer bg-cover bg-top bg-no-repeat px-4 py-8 md:px-8 md:py-12">
      <div
        className="mx-auto w-full max-w-[1240px] overflow-hidden rounded-[32px] bg-white dark:bg-[#121212] shadow-[0_18px_50px_rgba(0,0,0,0.10)] transition-colors duration-300"
        style={{ backgroundColor: 'rgb(var(--px-color-white, 255 255 255))' }}
      >
        <div className="px-6 md:px-[50px]">
          <div className="flex flex-col gap-12 pb-10 pt-8">
            {/* Top Brand & Mission statement */}
            <div className="flex flex-col gap-4">
              <Link href="/" aria-label="PixartualAI home" className="inline-block">
                <PixartualLogo variant="auto" size={32} showWordmark />
              </Link>
              <p className="max-w-[560px] text-[0.9375rem] leading-relaxed text-neutral-700">
                The AI platform that designs, builds, and hosts complete web apps and websites, end to end.
              </p>
            </div>

            {/* 5-Column Navigation Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
              {/* Platform */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">Platform</p>
                <div className="flex flex-col gap-2">
                  <Link href="/" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Home
                  </Link>
                  <Link href="/dashboard" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    AI Builder
                  </Link>
                  <Link href="/templates" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Templates
                  </Link>
                  <Link href="/domains" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Domain search
                  </Link>
                  <Link href="/pricing" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Pricing
                  </Link>
                  <Link href="/enterprise-teams" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Enterprise
                  </Link>
                  <Link href="/dashboard" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Start building
                  </Link>
                </div>
                <hr className="my-4 h-px w-full border-0 bg-neutral-200" />
                <div className="flex flex-col gap-2">
                  <Link href="/compare" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Compare
                  </Link>
                  <Link href="/compare/modulify-vs-framer" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    PixartualAI vs Framer
                  </Link>
                  <Link href="/compare/modulify-vs-webflow" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    PixartualAI vs Webflow
                  </Link>
                  <Link href="/compare/modulify-vs-lovable" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    PixartualAI vs Lovable
                  </Link>
                  <Link href="/migrate" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Migrate to PixartualAI
                  </Link>
                  <Link href="/migrate/webflow" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Migrate from Webflow
                  </Link>
                  <Link href="/migrate/framer" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Migrate from Framer
                  </Link>
                  <Link href="/migrate/wix" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Migrate from Wix
                  </Link>
                  <Link href="/migrate/shopify" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Migrate from Shopify
                  </Link>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">Solutions</p>
                <div className="flex flex-col gap-2">
                  <Link href="/solutions" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    All solutions
                  </Link>
                  <Link href="/founders" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Founders
                  </Link>
                  <Link href="/sales" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Sales
                  </Link>
                  <Link href="/product-managers" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Product managers
                  </Link>
                  <Link href="/designers" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Designers
                  </Link>
                  <Link href="/marketers" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Marketers
                  </Link>
                  <Link href="/ops" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Ops
                  </Link>
                  <Link href="/people" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    People
                  </Link>
                  <Link href="/prototypes" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Prototypes
                  </Link>
                  <Link href="/tools" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Internal tools
                  </Link>
                </div>
              </div>

              {/* Resources */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">Resources</p>
                <div className="flex flex-col gap-2">
                  <Link href="/insights" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Insights
                  </Link>
                  <Link href="/insights/use-cases" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Use cases
                  </Link>
                  <Link href="/faqs" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    FAQs
                  </Link>
                  <Link href="/connect" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Connect
                  </Link>
                  <Link href="/templates" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Templates
                  </Link>
                  <Link href="/made-in-pixartual" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Made in PixartualAI
                  </Link>
                  <a href="https://modulify.ai/docs" target="_blank" rel="noopener noreferrer" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Docs
                  </a>
                </div>
                <hr className="my-4 h-px w-full border-0 bg-neutral-200" />
                <div className="flex flex-col gap-2">
                  <Link href="/top-agencies" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Web design agencies
                  </Link>
                  <Link href="/top-agencies/united-states" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Agencies in the US
                  </Link>
                  <Link href="/top-agencies/united-kingdom" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Agencies in the UK
                  </Link>
                </div>
              </div>

              {/* Follow us */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">Follow us</p>
                <div className="flex flex-col gap-2">
                  <a href="https://x.com/intent/follow?screen_name=modulify" target="_blank" rel="noopener noreferrer" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    X / Twitter
                  </a>
                  <a href="https://discord.com/invite/Dj4FDdMnYj" target="_blank" rel="noopener noreferrer" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Discord
                  </a>
                  <a href="https://www.linkedin.com/company/modulify-ai" target="_blank" rel="noopener noreferrer" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    LinkedIn
                  </a>
                  <a href="https://www.youtube.com/@ModulifyAI" target="_blank" rel="noopener noreferrer" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    YouTube
                  </a>
                  <a href="https://www.instagram.com/modulify_/" target="_blank" rel="noopener noreferrer" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Instagram
                  </a>
                  <a href="https://www.threads.com/@modulify_" target="_blank" rel="noopener noreferrer" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Threads
                  </a>
                  <a href="https://www.facebook.com/modulifyai" target="_blank" rel="noopener noreferrer" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Facebook
                  </a>
                </div>
              </div>

              {/* Legal */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">Legal</p>
                <div className="flex flex-col gap-2">
                  <Link href="/contact" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Contact
                  </Link>
                  <Link href="/legal/privacy-policy" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Privacy Policy
                  </Link>
                  <Link href="/legal/terms" className="fx-link text-[0.9375rem] text-neutral-800 no-underline">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rainbow Gradient Line */}
        <div className="h-0.5 w-full bg-[linear-gradient(to_right,rgb(var(--px-color-accent-hot)),rgb(var(--px-color-accent)),rgba(252,140,4,0.35),#a855f7,#3b82f6)]"></div>

        {/* Bottom Bar with Copyright, Language, and Theme Switcher */}
        <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-[50px]">
          <p className="text-sm text-neutral-400">
            © 2026 PixartualAI. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-[10px] border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 transition-colors hover:bg-stone-100"
                aria-label="Language"
              >
                <Globe size={16} className="text-gray-500" />
                <span>{language}</span>
                <CaretDown size={14} className="text-gray-500" />
              </button>
              {langOpen && (
                <div className="absolute bottom-full mb-2 right-0 z-50 min-w-[140px] rounded-xl border border-neutral-200 bg-surface p-1 shadow-lg mfy-fadein">
                  {languages.map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => {
                        setLanguage(l);
                        setLangOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-stone-100 text-ink-strong transition-colors"
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Switcher */}
            <div className="relative" ref={themeRef}>
              <button
                type="button"
                onClick={() => setThemeOpen(!themeOpen)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-[10px] border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 transition-colors hover:bg-stone-100"
                aria-label="Theme"
              >
                {themeMode === 'light' ? (
                  <Sun size={16} className="text-gray-500" />
                ) : themeMode === 'dark' ? (
                  <Moon size={16} className="text-gray-500" />
                ) : (
                  <Desktop size={16} className="text-gray-500" />
                )}
                <span className="capitalize">{themeMode}</span>
                <CaretDown size={14} className="text-gray-500" />
              </button>
              {themeOpen && (
                <div className="absolute bottom-full mb-2 right-0 z-50 min-w-[130px] rounded-xl border border-neutral-200 bg-surface p-1 shadow-lg mfy-fadein">
                  <button
                    type="button"
                    onClick={() => {
                      applyTheme('light');
                      setThemeOpen(false);
                    }}
                    className={`flex items-center gap-2 w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-stone-100 text-ink-strong transition-colors ${
                      themeMode === 'light' ? 'font-semibold bg-stone-100' : ''
                    }`}
                  >
                    <Sun size={14} /> Light
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      applyTheme('dark');
                      setThemeOpen(false);
                    }}
                    className={`flex items-center gap-2 w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-stone-100 text-ink-strong transition-colors ${
                      themeMode === 'dark' ? 'font-semibold bg-stone-100' : ''
                    }`}
                  >
                    <Moon size={14} /> Dark
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      applyTheme('auto');
                      setThemeOpen(false);
                    }}
                    className={`flex items-center gap-2 w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-stone-100 text-ink-strong transition-colors ${
                      themeMode === 'auto' ? 'font-semibold bg-stone-100' : ''
                    }`}
                  >
                    <Desktop size={14} /> Auto
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
