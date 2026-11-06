'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { PixartualLogo } from '@/components/brand/PixartualLogo';
import {
  CurrencyDollar,
  Globe,
  Sun,
  Moon,
  Desktop,
  CaretDown,
} from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  const [themeMode, setThemeMode] = useState<'auto' | 'light' | 'dark'>('light');
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currency, setCurrency] = useState('USD $');
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  const currencyRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const currencies = ['USD $', 'EUR €', 'GBP £', 'CAD $', 'AUD $', 'JPY ¥', 'INR ₹'];
  const languages = ['English', 'Español', 'Français', 'Deutsch', '日本語', 'Português', 'Italiano'];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target as Node)) {
        setCurrencyOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    try {
      const modTheme = localStorage.getItem('pixartual-theme');
      if (modTheme) {
        const parsed = JSON.parse(modTheme);
        if (parsed?.state?.Theme && ['auto', 'light', 'dark'].includes(parsed.state.Theme)) {
          setThemeMode(parsed.state.Theme);
          return;
        }
      }
      const saved = localStorage.getItem('theme') as 'auto' | 'light' | 'dark' | null;
      if (saved && ['auto', 'light', 'dark'].includes(saved)) {
        setThemeMode(saved);
      }
    } catch (e) { }
  }, []);

  const applyTheme = (mode: 'auto' | 'light' | 'dark') => {
    try {
      localStorage.setItem('theme', mode);
      localStorage.setItem('pixartual-theme', JSON.stringify({ state: { Theme: mode } }));
    } catch (e) { }
    setThemeMode(mode);
    window.dispatchEvent(new CustomEvent('pixartual-theme-change', { detail: mode }));
  };

  return (
    <footer className="marketing-footer bg-cover bg-top bg-no-repeat px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto w-full max-w-[1240px] overflow-hidden rounded-[32px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
        <div className="px-6 md:px-[50px]">
          <div className="flex flex-col gap-12 pb-10 pt-8">
            <div className="flex flex-col gap-4">
              <Link aria-label="PixartualAI home" className="inline-flex items-center gap-3 transition-transform duration-300 hover:scale-105" href="/">
                <PixartualLogo variant="auto" size={38} showWordmark wordmarkClassName="text-2xl text-neutral-900" />
              </Link>
              <p className="max-w-[560px] text-[0.9375rem] leading-relaxed text-neutral-700">
                The AI platform that designs, builds, and hosts complete web apps and digital experiences, end to end.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
              {/* Platform */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">
                  Platform
                </p>
                <div className="flex flex-col gap-2">
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/">
                    Home
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/dashboard">
                    AI Builder
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/templates">
                    Templates
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/pricing">
                    Pricing
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/dashboard">
                    Start building
                  </Link>
                </div>
                <hr className="my-4 h-px w-full border-0 bg-neutral-200" />
                <div className="flex flex-col gap-2">
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/compare">
                    Compare
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/compare/pixartual-vs-framer">
                    PixartualAI vs Framer
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/compare/pixartual-vs-webflow">
                    PixartualAI vs Webflow
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/compare/pixartual-vs-lovable">
                    PixartualAI vs Lovable
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/webflow-transfer">
                    Webflow to PixartualAI
                  </Link>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">
                  Solutions
                </p>
                <div className="flex flex-col gap-2">
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/solutions">
                    All solutions
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/founders">
                    Founders
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/product-managers">
                    Product managers
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/designers">
                    Designers
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/marketers">
                    Marketers
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/sales">
                    Sales
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/ops">
                    Ops
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/people">
                    People & HR
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/prototypes">
                    Prototypes
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/tools">
                    Internal tools
                  </Link>
                </div>
              </div>

              {/* Resources */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">
                  Resources
                </p>
                <div className="flex flex-col gap-2">
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/insights">
                    Insights
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/insights/use-cases">
                    Use cases
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/faqs">
                    FAQs
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/templates">
                    Templates
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/made-in-pixartual">
                    Made in PixartualAI
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/connect">
                    Connect & Integrations
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/top-agencies">
                    Top Agencies
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/domains">
                    Domains
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/enterprise-teams">
                    Enterprise
                  </Link>
                </div>
              </div>

              {/* Follow us */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">
                  Follow us
                </p>
                <div className="flex flex-col gap-2">
                  <a className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="https://x.com" target="_blank" rel="noopener noreferrer">
                    X / Twitter
                  </a>
                  <a className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    Discord
                  </a>
                  <a className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                  <a className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  <a className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="https://threads.net" target="_blank" rel="noopener noreferrer">
                    Threads
                  </a>
                </div>
              </div>

              {/* Legal */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">
                  Legal
                </p>
                <div className="flex flex-col gap-2">
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/contact">
                    Contact
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/legal/privacy-policy">
                    Privacy Policy
                  </Link>
                  <Link className="fx-link text-[0.9375rem] text-neutral-800 no-underline" href="/legal/terms">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Colorful gradient border line */}
        <div className="h-0.5 w-full bg-[linear-gradient(to_right,#fe3200,#fc8c04,#fc8c04_50%,#a855f7,#3b82f6)]" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-[50px]">
          <p className="text-sm text-neutral-400">
            © 2026 PixartualAI. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {/* Theme Toggle Group */}
            <div aria-label="Theme" className="inline-flex shrink-0 items-center gap-0.5 rounded-[10px] bg-gray-100 p-[3px]">
              <button
                type="button"
                aria-label="Auto"
                aria-pressed={themeMode === 'auto'}
                onClick={() => applyTheme('auto')}
                className="flex size-8 cursor-pointer items-center justify-center rounded-[7px] border-0 bg-transparent p-0 text-gray-500 outline-none transition-colors hover:text-gray-900 focus-visible:ring-1 focus-visible:ring-border aria-pressed:bg-white aria-pressed:text-gray-900 aria-pressed:shadow-sm"
                title="Auto"
              >
                <Desktop size={16} />
              </button>
              <button
                type="button"
                aria-label="Light"
                aria-pressed={themeMode === 'light'}
                onClick={() => applyTheme('light')}
                className="flex size-8 cursor-pointer items-center justify-center rounded-[7px] border-0 bg-transparent p-0 text-gray-500 outline-none transition-colors hover:text-gray-900 focus-visible:ring-1 focus-visible:ring-border aria-pressed:bg-white aria-pressed:text-gray-900 aria-pressed:shadow-sm"
                title="Light"
              >
                <Sun size={16} />
              </button>
              <button
                type="button"
                aria-label="Dark"
                aria-pressed={themeMode === 'dark'}
                onClick={() => applyTheme('dark')}
                className="flex size-8 cursor-pointer items-center justify-center rounded-[7px] border-0 bg-transparent p-0 text-gray-500 outline-none transition-colors hover:text-gray-900 focus-visible:ring-1 focus-visible:ring-border aria-pressed:bg-white aria-pressed:text-gray-900 aria-pressed:shadow-sm"
                title="Dark"
              >
                <Moon size={16} />
              </button>
            </div>

            {/* Currency Selector */}
            <div className="relative" ref={currencyRef}>
              <button
                type="button"
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-[10px] border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 transition-all duration-200 hover:bg-stone-100 hover:border-neutral-300"
              >
                <CurrencyDollar size={16} className="text-gray-500" />
                <span>{currency}</span>
                <CaretDown size={14} className="text-gray-500" />
              </button>
              {currencyOpen && (
                <div className="absolute bottom-full mb-2 left-0 z-50 min-w-[120px] rounded-xl border border-neutral-200 bg-white p-1 shadow-lg mfy-fadein">
                  {currencies.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-neutral-100 text-neutral-800 transition-colors"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-[10px] border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 transition-all duration-200 hover:bg-stone-100 hover:border-neutral-300"
              >
                <Globe size={16} className="text-gray-500" />
                <span>{language}</span>
                <CaretDown size={14} className="text-gray-500" />
              </button>
              {langOpen && (
                <div className="absolute bottom-full mb-2 right-0 z-50 min-w-[120px] rounded-xl border border-neutral-200 bg-white p-1 shadow-lg mfy-fadein">
                  {languages.map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => {
                        setLanguage(l);
                        setLangOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-neutral-100 text-neutral-800 transition-colors"
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
