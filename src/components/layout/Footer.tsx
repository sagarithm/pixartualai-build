'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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

  const currencies = ['USD $', 'EUR €', 'GBP £', 'CAD $', 'AUD $', 'JPY ¥', 'INR ₹'];
  const languages = ['English', 'Español', 'Français', 'Deutsch', '日本語', 'Português', 'Italiano'];

  return (
    <footer className="marketing-footer bg-cover bg-top bg-no-repeat px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto w-full max-w-[1240px] overflow-hidden rounded-[32px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
        <div className="px-6 md:px-[50px]">
          <div className="flex flex-col gap-12 pb-10 pt-8">
            <div className="flex flex-col gap-4">
              <Link aria-label="PixartualAI home" className="inline-block" href="/">
                <img
                  alt="PixartualAI"
                  className="-mb-4 -ml-4 block h-[90px] w-auto"
                  src="/images/modulify-small-icon.webp"
                />
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
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/">
                    Home
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/dashboard">
                    AI Builder
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates">
                    Templates
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/pricing">
                    Pricing
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/dashboard">
                    Start building
                  </Link>
                </div>
                <hr className="my-4 h-px w-full border-0 bg-neutral-200" />
                <div className="flex flex-col gap-2">
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/pricing">
                    Compare
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/pricing">
                    PixartualAI vs Framer
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/pricing">
                    PixartualAI vs Webflow
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/pricing">
                    PixartualAI vs Lovable
                  </Link>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">
                  Solutions
                </p>
                <div className="flex flex-col gap-2">
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates">
                    All solutions
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates?category=portfolio">
                    Founders
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates?category=tool">
                    Product managers
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates?category=portfolio">
                    Designers
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates?category=tool">
                    Marketers
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates?category=tool">
                    Ops
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates?category=personal">
                    Prototypes
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates?category=tool">
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
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates">
                    Insights
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates">
                    Use cases
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates">
                    FAQs
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates">
                    Templates
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates">
                    Made in PixartualAI
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/templates">
                    Docs
                  </Link>
                </div>
              </div>

              {/* Follow us */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">
                  Follow us
                </p>
                <div className="flex flex-col gap-2">
                  <a className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="https://x.com" target="_blank" rel="noopener noreferrer">
                    X / Twitter
                  </a>
                  <a className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    Discord
                  </a>
                  <a className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                  <a className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  <a className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="https://threads.net" target="_blank" rel="noopener noreferrer">
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
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/privacy">
                    Contact
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/privacy">
                    Privacy Policy
                  </Link>
                  <Link className="text-[0.9375rem] text-neutral-800 hover:text-neutral-500 no-underline transition-colors" href="/terms">
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
                onClick={() => setThemeMode('auto')}
                className={`flex size-8 cursor-pointer items-center justify-center rounded-[7px] border-0 bg-transparent p-0 text-gray-500 outline-none transition-colors hover:text-gray-900 ${
                  themeMode === 'auto' ? 'bg-white text-gray-900 shadow-sm' : ''
                }`}
                title="Auto"
              >
                <Desktop size={16} />
              </button>
              <button
                type="button"
                onClick={() => setThemeMode('light')}
                className={`flex size-8 cursor-pointer items-center justify-center rounded-[7px] border-0 bg-transparent p-0 text-gray-500 outline-none transition-colors hover:text-gray-900 ${
                  themeMode === 'light' ? 'bg-white text-gray-900 shadow-sm' : ''
                }`}
                title="Light"
              >
                <Sun size={16} />
              </button>
              <button
                type="button"
                onClick={() => setThemeMode('dark')}
                className={`flex size-8 cursor-pointer items-center justify-center rounded-[7px] border-0 bg-transparent p-0 text-gray-500 outline-none transition-colors hover:text-gray-900 ${
                  themeMode === 'dark' ? 'bg-white text-gray-900 shadow-sm' : ''
                }`}
                title="Dark"
              >
                <Moon size={16} />
              </button>
            </div>

            {/* Currency Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-[10px] border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 transition-colors hover:bg-stone-100"
              >
                <CurrencyDollar size={16} className="text-gray-500" />
                <span>{currency}</span>
                <CaretDown size={14} className="text-gray-500" />
              </button>
              {currencyOpen && (
                <div className="absolute bottom-full mb-2 left-0 z-50 min-w-[120px] rounded-xl border border-neutral-200 bg-white p-1 shadow-lg">
                  {currencies.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-neutral-100 text-neutral-800"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-[10px] border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 transition-colors hover:bg-stone-100"
              >
                <Globe size={16} className="text-gray-500" />
                <span>{language}</span>
                <CaretDown size={14} className="text-gray-500" />
              </button>
              {langOpen && (
                <div className="absolute bottom-full mb-2 right-0 z-50 min-w-[120px] rounded-xl border border-neutral-200 bg-white p-1 shadow-lg">
                  {languages.map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => {
                        setLanguage(l);
                        setLangOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-neutral-100 text-neutral-800"
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
