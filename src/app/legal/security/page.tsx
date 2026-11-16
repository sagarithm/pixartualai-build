'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-neutral-900 dark:text-neutral-100 selection:bg-orange-500 selection:text-white transition-colors duration-200">
      <Navbar />

      <main className="lp-main flex-1 max-w-[840px] mx-auto px-6 py-16 md:py-24">
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-950 dark:text-white font-['Neutralsans']">
            Security &amp; Compliance
          </h1>
          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">Last updated: November 2026</p>
        </header>

        <article className="prose dark:prose-invert max-w-none space-y-8 text-neutral-700 dark:text-neutral-300 leading-relaxed text-[0.95rem]">
          <p>
            Security is fundamental to everything we engineer at PixartualAI. We maintain rigorous defense-in-depth protocols to protect your workspace data, prompt intellectual property, and production deployments.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3">1. Infrastructure &amp; Encryption</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Encryption in Transit:</strong> All HTTP traffic is enforced over TLS 1.3 with automated HSTS and modern cipher suites.
              </li>
              <li>
                <strong>Encryption at Rest:</strong> All database volumes, user assets, and workspace tokens are encrypted using AES-256.
              </li>
              <li>
                <strong>Isolated Sandboxes:</strong> Code execution and AI generation pipelines execute within hermetic, memory-isolated micro-containers with strict network perimeters.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3">2. Access Control &amp; Authentication</h2>
            <p>
              We enforce fine-grained role-based access control (RBAC), multi-tenant isolation, cryptographically hashed passwords (Argon2id/bcrypt), and zero cross-tenant database leakage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-3">3. Vulnerability Disclosure</h2>
            <p>
              If you discover a security vulnerability, we welcome responsible disclosure. Contact our security team directly via our{' '}
              <Link href="/contact" className="text-orange-500 hover:underline">
                Contact Page
              </Link>{' '}
              with detailed reproduction steps.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
