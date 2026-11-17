'use client';

import React from 'react';
import Link from 'next/link';
import { PixartualLogo } from '@/components/brand/PixartualLogo';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

export const Footer: React.FC = () => {
  return (
    <footer className="marketing-footer bg-cover bg-top bg-no-repeat px-4 py-8 md:px-8 md:py-12">
      <div
        className="mx-auto w-full max-w-[1240px] overflow-hidden rounded-[32px] marketing-footer-card shadow-[0_18px_50px_rgba(0,0,0,0.10)] transition-colors duration-300 border-0"
      >
        <div className="px-6 md:px-[50px]">
          <div className="flex flex-col gap-12 pb-10 pt-8">
            {/* Top Brand & Mission statement */}
            <div className="flex flex-col gap-4">
              <Link href="/" aria-label="PixartualAI home" className="inline-block">
                <PixartualLogo variant="auto" size={32} showWordmark />
              </Link>
              <p className="max-w-[560px] text-[0.9375rem] leading-relaxed text-neutral-700 dark:text-neutral-300">
                The AI platform that designs, builds, and hosts complete web apps and websites, end to end.
              </p>
            </div>

            {/* 5-Column Navigation Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
              {/* Platform */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">Platform</p>
                <div className="flex flex-col gap-2">
                  <Link href="/" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Home
                  </Link>
                  <Link href="/dashboard" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    AI Builder
                  </Link>
                  <Link href="/templates" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Templates
                  </Link>
                  <Link href="/pricing" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Pricing
                  </Link>
                  <Link href="/enterprise-teams" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Enterprise
                  </Link>
                  <Link href="/dashboard" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Start building
                  </Link>
                </div>
                <hr className="my-4 h-px w-full border-0 bg-neutral-200 dark:bg-neutral-800" />
                <div className="flex flex-col gap-2">
                  <Link href="/compare" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Compare
                  </Link>
                  <Link href="/compare/pixartual-vs-framer" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    PixartualAI vs Framer
                  </Link>
                  <Link href="/compare/pixartual-vs-webflow" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    PixartualAI vs Webflow
                  </Link>
                  <Link href="/compare/pixartual-vs-lovable" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    PixartualAI vs Lovable
                  </Link>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">Solutions</p>
                <div className="flex flex-col gap-2">
                  <Link href="/solutions" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    All solutions
                  </Link>
                  <Link href="/founders" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Founders
                  </Link>
                  <Link href="/sales" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Sales
                  </Link>
                  <Link href="/product-managers" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Product managers
                  </Link>
                  <Link href="/designers" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Designers
                  </Link>
                  <Link href="/marketers" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Marketers
                  </Link>
                  <Link href="/ops" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Ops
                  </Link>
                  <Link href="/people" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    People
                  </Link>
                  <Link href="/prototypes" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Prototypes
                  </Link>
                  <Link href="/tools" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Internal tools
                  </Link>
                </div>
              </div>

              {/* Resources */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">Resources</p>
                <div className="flex flex-col gap-2">
                  <Link href="/insights" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Insights
                  </Link>
                  <Link href="/insights/use-cases" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Use cases
                  </Link>
                  <Link href="/faqs" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    FAQs
                  </Link>
                  <Link href="/connect" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Connect
                  </Link>
                  <Link href="/templates" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Templates
                  </Link>
                  <Link href="/made-in-pixartual" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Made in PixartualAI
                  </Link>
                  <a href="/docs" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Docs
                  </a>
                </div>
              </div>

              {/* Follow us */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">Follow us</p>
                <div className="flex flex-col gap-2">
                  <a href="https://twitter.com/pixartual" target="_blank" rel="noopener noreferrer" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Twitter
                  </a>
                  <a href="https://www.linkedin.com/company/pixartual" target="_blank" rel="noopener noreferrer" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    LinkedIn
                  </a>
                  <a href="https://www.youtube.com/@pixartual" target="_blank" rel="noopener noreferrer" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    YouTube
                  </a>
                  <a href="https://www.instagram.com/pixartual" target="_blank" rel="noopener noreferrer" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Instagram
                  </a>
                  <a href="https://www.threads.net/@pixartual" target="_blank" rel="noopener noreferrer" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Threads
                  </a>
                  <a href="https://github.com/pixartual" target="_blank" rel="noopener noreferrer" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    GitHub
                  </a>
                </div>
              </div>

              {/* Legal */}
              <div>
                <p className="mb-4 text-[0.8125rem] font-medium text-neutral-400">Legal</p>
                <div className="flex flex-col gap-2">
                  <Link href="/contact" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Contact
                  </Link>
                  <Link href="/legal/privacy-policy" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Privacy Policy
                  </Link>
                  <Link href="/legal/terms" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Terms of Service
                  </Link>
                  <Link href="/legal/cookie-policy" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Cookie Policy
                  </Link>
                  <Link href="/legal/security" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Security &amp; Compliance
                  </Link>
                  <Link href="/legal/dpa" className="fx-link text-[0.9375rem] text-neutral-800 dark:text-neutral-200 no-underline">
                    Data Processing (DPA)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Neon Gradient Hairline Divider matching PixartualAI Dark Theme */}
        <div className="h-px w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-60 my-4" />

        {/* Bottom Bar with Copyright and Vercel-style Segmented Theme Toggle */}
        <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-[50px]">
          <p className="text-sm text-neutral-400">
            © 2026 PixartualAI. All rights reserved.
          </p>

          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};
