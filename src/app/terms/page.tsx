'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="lp-main flex-1">
        <header className="lp-hero">
          <h1 className="font-['Neutralsans']">Terms of Service</h1>
          <p className="lp-updated">Last updated: November 2026</p>
        </header>

        <article className="lp-article">
          <div className="lp-prose">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of PixartualAI&rsquo;s website, studio, platform, APIs, and hosting infrastructure (collectively, the &ldquo;Service&rdquo;). By accessing or using the Service, you agree to be bound by these Terms.
            </p>

            <section id="accounts">
              <h2 className="font-['Neutralsans']">1. Account Registration & Security</h2>
              <p>
                You must provide accurate and complete registration information. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur within your workspace.
              </p>
            </section>

            <section id="ownership">
              <h2 className="font-['Neutralsans']">2. Ownership of Generated Content</h2>
              <p>
                <strong>You retain 100% intellectual property ownership</strong> of all digital experiences, text prompts, visual layouts, and exported code generated via PixartualAI. We claim no ownership rights over your creative or commercial output.
              </p>
            </section>

            <section id="acceptable-use">
              <h2 className="font-['Neutralsans']">3. Acceptable Use Policy</h2>
              <p>You agree not to use PixartualAI to build or distribute:</p>
              <ul>
                <li>Malicious software, phishing schemes, or deceptive credential-stealing portals.</li>
                <li>Hate speech, harassment, defamation, or content that incites violence.</li>
                <li>Infringing intellectual property or trade secrets without authorization.</li>
                <li>Automated perimeter abuse, DDoS attacks, or vulnerability probes against third parties.</li>
              </ul>
            </section>

            <section id="hosting-sla">
              <h2 className="font-['Neutralsans']">4. Hosting & Service Availability</h2>
              <p>
                We strive for 99.99% uptime across our global edge distribution network. While we maintain redundant failovers and automated backups, we recommend exporting source code backups for critical mission-critical business systems.
              </p>
            </section>

            <section id="termination">
              <h2 className="font-['Neutralsans']">5. Termination & Cancellation</h2>
              <p>
                You may cancel your subscription or terminate your account at any time through your workspace billing settings. Upon termination, you will retain full rights to all previously exported code and static assets.
              </p>
            </section>

            <section id="contact">
              <h2 className="font-['Neutralsans']">6. Contact Information</h2>
              <p>
                For questions regarding these Terms, please contact us via our{' '}
                <Link href="/contact">contact form</Link> or email{' '}
                <a href="mailto:legal@pixartual.ai">legal@pixartual.ai</a>.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
