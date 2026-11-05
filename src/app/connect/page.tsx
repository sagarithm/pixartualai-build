'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { PlugsConnected, Database, WebhooksLogo, ArrowRight } from '@phosphor-icons/react';

const integrations = [
  { name: 'Webhooks & Zapier', desc: 'Trigger automated workflows, notify Slack channels, or pass lead data directly into your CRM.', tag: 'Automation' },
  { name: 'Stripe & Payments', desc: 'Accept credit card payments, setup recurring subscriptions, and manage checkout sessions with zero code.', tag: 'Payments' },
  { name: 'Airtable & Google Sheets', desc: 'Sync CMS collections and incoming form submissions two-way in real time.', tag: 'Database' },
  { name: 'Custom REST Endpoints', desc: 'Connect private company APIs, fetch dynamic user information, and query internal backends.', tag: 'Developer' },
  { name: 'Google Analytics & PostHog', desc: 'Measure traffic, track calculation events, and monitor conversion funnels automatically.', tag: 'Analytics' },
  { name: 'Email & Mailchimp', desc: 'Capture leads, send automated confirmation emails, and sync subscribers directly to your lists.', tag: 'Marketing' },
];

export default function ConnectPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center px-5 max-w-[1240px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-neutral-200 bg-stone-50 text-neutral-700 mb-6">
            <PlugsConnected size={14} className="text-[#fc8c04]" />
            <span>Integrations & Connectors</span>
          </div>

          <h1 className="text-[clamp(36px,6vw,56px)] font-medium leading-[1.15] text-neutral-900 font-['Neutralsans']">
            Build with the tools your business already uses
          </h1>
          <p className="mt-4 max-w-[620px] mx-auto text-[clamp(1rem,1.2vw,1.12rem)] leading-relaxed text-gray-500">
            How PixartualAI connects: Hook your digital experiences into modern data pipelines, CRM systems, webhooks, and payment processors seamlessly.
          </p>
        </section>

        <section className="pb-20 px-5 max-w-[1100px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium font-['Neutralsans'] text-center mb-10">
            How PixartualAI connects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((item) => (
              <div key={item.name} className="p-7 rounded-[22px] border border-neutral-200 bg-stone-50 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#fc8c04] bg-orange-50 px-2 py-0.5 rounded-full mb-3 inline-block">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-medium text-neutral-900 font-['Neutralsans'] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/dashboard" className="mfy-btn mfy-btn--primary">
              Explore Connectors in Studio <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
