import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] dark:bg-[#0F0F0F] text-[#171717] dark:text-[#EDEDED]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
            Legal & Data Privacy
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-neutral-900 dark:text-white mt-2">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-neutral-500 mt-2">
            Last updated: November 2026
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-sm sm:text-base space-y-6 text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900 dark:text-white">
              1. Overview
            </h2>
            <p>
              PixartualAI is committed to protecting your privacy and ensuring you have complete control over your digital experiences, prompts, and published content. This Privacy Policy describes how we collect, store, and process information when you use our platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900 dark:text-white">
              2. Information We Collect
            </h2>
            <p>
              • <strong>Account Credentials</strong>: Email address and authentication tokens necessary to manage your workspaces.
            </p>
            <p>
              • <strong>Creation Prompts & Content</strong>: Text descriptions, AST schemas, and media assets you input into the studio canvas.
            </p>
            <p>
              • <strong>Telemetry & System Performance</strong>: Anonymized page view latency, error logs, and edge delivery metrics to ensure high availability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900 dark:text-white">
              3. AI Data Usage & Privacy
            </h2>
            <p>
              We do not sell your personal data or use your private workspace creations to train public third-party foundation models. Prompts submitted to the AI generator are processed strictly to compile your requested AST schemas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900 dark:text-white">
              4. Contact
            </h2>
            <p>
              For any questions regarding data privacy or compliance, reach out directly to privacy@pixartual.ai.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

