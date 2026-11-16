'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-neutral-900 dark:text-neutral-100 selection:bg-orange-500 selection:text-white transition-colors duration-200">
      <Navbar />

      <main className="lp-main flex-1 max-w-[840px] mx-auto px-6 py-16 md:py-24">
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-950 dark:text-white font-['Neutralsans']">
            Cookie Policy
          </h1>
          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">Last updated: November 2026</p>
        </header>

        <article className="prose dark:prose-invert max-w-none space-y-8 text-neutral-700 dark:text-neutral-300 leading-relaxed text-[0.95rem]">
          <p>
            This Cookie Policy explains how PixartualAI (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies and similar tracking technologies when you visit or use our platform, websites, and services.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small data files placed on your device when you visit websites. They help remember your preferences, keep you securely authenticated, and ensure responsive interaction speed across sessions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3">2. Types of Cookies We Use</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Strictly Necessary Cookies:</strong> Essential for session authentication, security verification, and workspace state preservation.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your theme preference (Dark, Light, or System) and canvas zoom preferences.
              </li>
              <li>
                <strong>Performance &amp; Telemetry Cookies:</strong> Anonymized Core Web Vitals and edge-routing performance metrics to optimize generation speed.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3">3. Managing Your Preferences</h2>
            <p>
              You can control or disable cookies via your browser settings. Note that disabling strictly necessary cookies may degrade core builder functionalities such as persisting your studio canvas or workspace tokens.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3">4. Contact Us</h2>
            <p>
              If you have any questions regarding our use of cookies, please reach out via our{' '}
              <Link href="/contact" className="text-orange-500 hover:underline">
                Contact Page
              </Link>.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
