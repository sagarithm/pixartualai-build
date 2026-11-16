'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DpaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-neutral-900 dark:text-neutral-100 selection:bg-orange-500 selection:text-white transition-colors duration-200">
      <Navbar />

      <main className="lp-main flex-1 max-w-[840px] mx-auto px-6 py-16 md:py-24">
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-950 dark:text-white font-['Neutralsans']">
            Data Processing Agreement (DPA)
          </h1>
          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">Last updated: November 2026</p>
        </header>

        <article className="prose dark:prose-invert max-w-none space-y-8 text-neutral-700 dark:text-neutral-300 leading-relaxed text-[0.95rem]">
          <p>
            This Data Processing Agreement (&ldquo;DPA&rdquo;) supplements our{' '}
            <Link href="/legal/terms" className="text-orange-500 hover:underline">
              Terms of Service
            </Link>{' '}
            when processing Personal Data governed by the General Data Protection Regulation (GDPR) or similar global privacy legislation.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3">1. Scope and Roles</h2>
            <p>
              In our relationship, you act as the <strong>Data Controller</strong> of the content, media, and customer data uploaded to your workspaces. PixartualAI acts as a <strong>Data Processor</strong> solely executing processing instructions provided by you through our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3">2. Sub-processors</h2>
            <p>
              PixartualAI engages vetted sub-processors for cloud compute, model inference, and global content delivery network (CDN) caching. All sub-processors are bound by data protection obligations at least as stringent as those set forth herein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3">3. Standard Contractual Clauses (SCCs)</h2>
            <p>
              For transfers of Personal Data from the European Economic Area (EEA), the UK, or Switzerland to countries without an adequacy decision, the EU Standard Contractual Clauses are incorporated by reference.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3">4. Requesting an Executed DPA</h2>
            <p>
              Enterprise and Scale customers requiring a countersigned DPA can request one directly via our{' '}
              <Link href="/enterprise-teams" className="text-orange-500 hover:underline">
                Enterprise Team
              </Link>{' '}
              or by reaching out on our{' '}
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
