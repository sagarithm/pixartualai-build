'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="lp-main flex-1">
        <header className="lp-hero">
          <h1 className="font-['Neutralsans']">Privacy Policy</h1>
          <p className="lp-updated">Last updated: November 2026</p>
        </header>

        <article className="lp-article">
          <div className="lp-prose">
            <p>
              PixartualAI is dedicated to protecting your privacy and ensuring you have complete control over your digital experiences, prompts, and published content. This Privacy Policy explains what personal data we collect when you use the PixartualAI website, web app, API, and platform services (together, the &ldquo;Service&rdquo;), how we use it, and the choices you have.
            </p>
            <p>
              Your use of the Service is also governed by our{' '}
              <Link href="/legal/terms">Terms of Service</Link>.
            </p>

            <section id="information-we-collect">
              <h2 className="font-['Neutralsans']">1. Information we collect</h2>
              <p>
                We collect what you give us, what is created as you use the Service, and what the third-party integrations you connect share with us:
              </p>
              <ul>
                <li>
                  <strong>Account information.</strong> Your name, email address, password hash, and profile details required to administer your workspaces.
                </li>
                <li>
                  <strong>Prompts and content.</strong> The natural language instructions, schemas, uploaded media, and customizations you enter into the Studio canvas.
                </li>
                <li>
                  <strong>Usage and telemetry.</strong> Anonymized interaction logs, page load latencies, and edge distribution metrics to maintain 99.99% system availability.
                </li>
              </ul>
            </section>

            <section id="how-we-use-information">
              <h2 className="font-['Neutralsans']">2. How we use your information</h2>
              <p>We use the data we collect to:</p>
              <ul>
                <li>Generate and host your websites, applications, and customer portals.</li>
                <li>Process subscription billing, renewals, and domain registrations.</li>
                <li>Deliver live customer support and respond to product inquiries.</li>
                <li>Prevent abuse, fraud, and unauthorized perimeter attacks.</li>
              </ul>
            </section>

            <section id="ai-training">
              <h2 className="font-['Neutralsans']">3. AI Data Usage & Privacy</h2>
              <p>
                <strong>We do NOT use private customer code, database credentials, or proprietary business logic to train public foundational models.</strong> Your prompts and AST trees remain isolated within your authenticated organization.
              </p>
            </section>

            <section id="data-retention">
              <h2 className="font-['Neutralsans']">4. Data Retention & Deletion</h2>
              <p>
                You can export your project source code (React / Next.js + Tailwind) at any time. When you delete a workspace or project, all associated edge builds, media assets, and cached bundles are purged from our global edge network.
              </p>
            </section>

            <section id="contact">
              <h2 className="font-['Neutralsans']">5. Contact Us</h2>
              <p>
                If you have questions about this policy or your personal data, reach out through our{' '}
                <Link href="/contact">contact page</Link> or email{' '}
                <a href="mailto:privacy@pixartual.ai">privacy@pixartual.ai</a>.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
