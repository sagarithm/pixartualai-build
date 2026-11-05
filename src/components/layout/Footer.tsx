'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkle,
  Globe,
  Coins,
  CaretDown,
  GithubLogo,
  TwitterLogo,
  DiscordLogo,
  Sun,
  Moon,
} from '@phosphor-icons/react';
import { ThemeToggle } from './ThemeToggle';

export const Footer: React.FC = () => {
  const [currency, setCurrency] = useState('USD $');
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-14 border-b border-neutral-200 dark:border-neutral-800">
          {/* Brand & Mission Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="size-8 rounded-[7px] bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-bold">
                <Sparkle size={18} weight="fill" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-neutral-900 dark:text-neutral-50">
                Pixartual<span className="text-neutral-500">AI</span>
              </span>
            </Link>

            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 max-w-sm font-sans leading-relaxed">
              The AI platform for turning ideas into polished, interactive digital experiences, websites, and micro-tools. Describe your idea or customize a template.
            </p>

            <div className="mt-6 flex items-center gap-2.5 text-neutral-500">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="size-8 rounded-[7px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center hover:text-neutral-900 dark:hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterLogo size={16} weight="fill" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="size-8 rounded-[7px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center hover:text-neutral-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubLogo size={16} weight="fill" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="size-8 rounded-[7px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center hover:text-neutral-900 dark:hover:text-white transition-colors"
                aria-label="Discord"
              >
                <DiscordLogo size={16} weight="fill" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400 font-sans">
              <li>
                <Link href="/studio" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  AI Builder Studio
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Templates Catalog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Interactive Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400 font-sans">
              <li>
                <Link href="/templates?category=portfolio" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Founders & MVPs
                </Link>
              </li>
              <li>
                <Link href="/templates?category=tool" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Interactive Calculators
                </Link>
              </li>
              <li>
                <Link href="/templates?category=personal" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Diagnostic Quizzes
                </Link>
              </li>
              <li>
                <Link href="/templates?category=portfolio" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Designers & Portfolios
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400 font-sans">
              <li>
                <Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Operational
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar matching Modulify 1:1 with Currency, Language & Theme */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 font-sans order-2 md:order-1">
            © {new Date().getFullYear()} PixartualAI. Designed with NeutralSans & Phosphor.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 order-1 md:order-2">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Currency Selector Pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="inline-flex items-center gap-2 rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <Coins size={14} className="text-neutral-400" />
                <span>{currency}</span>
                <CaretDown size={11} className="text-neutral-400" />
              </button>

              {currencyOpen && (
                <div className="absolute bottom-full right-0 mb-2 w-28 rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-1 shadow-lg text-xs z-50">
                  {['USD $', 'EUR €', 'GBP £'].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr);
                        setCurrencyOpen(false);
                      }}
                      className="w-full text-left px-2.5 py-1.5 rounded-[6px] hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Selector Pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLanguageOpen(!languageOpen)}
                className="inline-flex items-center gap-2 rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <Globe size={14} className="text-neutral-400" />
                <span>{language}</span>
                <CaretDown size={11} className="text-neutral-400" />
              </button>

              {languageOpen && (
                <div className="absolute bottom-full right-0 mb-2 w-28 rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-1 shadow-lg text-xs z-50">
                  {['English', 'Français', 'Deutsch', 'Español'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setLanguageOpen(false);
                      }}
                      className="w-full text-left px-2.5 py-1.5 rounded-[6px] hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
                    >
                      {lang}
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
