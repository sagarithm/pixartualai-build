import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] dark:bg-[#0F0F0F] text-[#171717] dark:text-[#EDEDED]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
            Service Terms
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-neutral-900 dark:text-white mt-2">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-neutral-500 mt-2">
            Effective Date: November 2026
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-sm sm:text-base space-y-6 text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900 dark:text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing PixartualAI or using any of our creation tools, you agree to comply with and be bound by these Terms of Service. If you do not agree, do not use the platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900 dark:text-white">
              2. Intellectual Property & Ownership
            </h2>
            <p>
              You own all intellectual property rights in the digital experiences, interactive micro-tools, copy, and exported code you create using PixartualAI. We claim no ownership over your output.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900 dark:text-white">
              3. Acceptable Use
            </h2>
            <p>
              You agree not to use PixartualAI to generate deceptive malware, phishing pages, illegal content, or harass others. Violation of acceptable use results in immediate account suspension.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900 dark:text-white">
              4. Service Availability
            </h2>
            <p>
              While we aim for 99.9% edge uptime, services are provided on an "as is" and "as available" basis without warranties of any kind.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

