'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PixartualCta } from '@/components/landing/PixartualCta';
import { MagnifyingGlass, PlugsConnected, ArrowRight, Check } from '@phosphor-icons/react';

interface Connector {
  name: string;
  category: 'database' | 'payment' | 'analytics' | 'crm' | 'communication' | 'productivity';
  icon: string;
  desc: string;
}

export default function ConnectPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const connectors: Connector[] = [
    { name: 'Stripe', category: 'payment', icon: '/images/connectors/stripe.svg', desc: 'Accept payments, subscriptions, and checkouts.' },
    { name: 'Supabase', category: 'database', icon: '/images/connectors/supabase.svg', desc: 'PostgreSQL database, auth, and edge storage.' },
    { name: 'Airtable', category: 'database', icon: '/images/connectors/airtable.svg', desc: 'Sync CMS records and relational databases.' },
    { name: 'Notion', category: 'productivity', icon: '/images/connectors/notion.svg', desc: 'Read and write CMS pages and team knowledge.' },
    { name: 'HubSpot', category: 'crm', icon: '/images/connectors/hubspot.svg', desc: 'Sync inbound leads and marketing automation.' },
    { name: 'Figma', category: 'productivity', icon: '/images/connectors/figma.svg', desc: 'Import styles, colors, and design tokens.' },
    { name: 'Slack', category: 'communication', icon: '/images/connectors/slack.svg', desc: 'Send real-time form notifications and alerts.' },
    { name: 'Discord', category: 'communication', icon: '/images/connectors/discord.svg', desc: 'Community alerts and member role sync.' },
    { name: 'Google Analytics', category: 'analytics', icon: '/images/connectors/google_analytics.svg', desc: 'Track traffic, conversions, and bounce rates.' },
    { name: 'Linear', category: 'productivity', icon: '/images/connectors/linear.svg', desc: 'Capture customer feedback and sync issues.' },
    { name: 'GitHub', category: 'productivity', icon: '/images/connectors/github.svg', desc: 'Deploy repositories and sync codebases.' },
    { name: 'Intercom', category: 'communication', icon: '/images/connectors/intercom.svg', desc: 'Live chat messenger and customer support.' },
    { name: 'Calendly', category: 'productivity', icon: '/images/connectors/calendly.svg', desc: 'Embed scheduling widgets and sync calendars.' },
    { name: 'Cal.com', category: 'productivity', icon: '/images/connectors/cal.svg', desc: 'Open-source calendar booking integration.' },
    { name: 'Mailchimp', category: 'crm', icon: '/images/connectors/mailchimp.svg', desc: 'Grow newsletter lists and automated sequences.' },
    { name: 'Salesforce', category: 'crm', icon: '/images/connectors/salesforce.svg', desc: 'Enterprise CRM pipeline synchronization.' },
    { name: 'Google Sheets', category: 'database', icon: '/images/connectors/googlesheets.svg', desc: 'Read and update live spreadsheet records.' },
    { name: 'Google Drive', category: 'productivity', icon: '/images/connectors/googledrive.svg', desc: 'Upload documents and user attachments.' },
    { name: 'Google Calendar', category: 'productivity', icon: '/images/connectors/googlecalendar.svg', desc: 'Display team events and client bookings.' },
    { name: 'Sentry', category: 'analytics', icon: '/images/connectors/sentry.svg', desc: 'Real-time error tracking and telemetry.' },
    { name: 'Square', category: 'payment', icon: '/images/connectors/square.svg', desc: 'Point-of-sale and online payment gateway.' },
    { name: 'Zendesk', category: 'communication', icon: '/images/connectors/zendesk.svg', desc: 'Customer support tickets and knowledge base.' },
    { name: 'Attio', category: 'crm', icon: '/images/connectors/attio.svg', desc: 'Next-generation relational CRM.' },
    { name: 'Gorgias', category: 'communication', icon: '/images/connectors/gorgias.svg', desc: 'E-commerce helpdesk and customer service.' },
    { name: 'Gumroad', category: 'payment', icon: '/images/connectors/gumroad.svg', desc: 'Sell digital downloads, memberships, and assets.' },
    { name: 'ClickUp', category: 'productivity', icon: '/images/connectors/clickup.svg', desc: 'Project tasks and team workflows.' },
    { name: 'Asana', category: 'productivity', icon: '/images/connectors/asana.svg', desc: 'Task coordination and team roadmaps.' },
    { name: 'Monday.com', category: 'productivity', icon: '/images/connectors/monday.svg', desc: 'Work operating system and custom dashboards.' },
    { name: 'Miro', category: 'productivity', icon: '/images/connectors/miro.svg', desc: 'Embed collaborative whiteboards and mindmaps.' },
    { name: 'Zoom', category: 'communication', icon: '/images/connectors/zoom.svg', desc: 'Generate meeting links for booking flows.' },
    { name: 'YouTube', category: 'communication', icon: '/images/connectors/youtube.svg', desc: 'Embed video players with responsive scaling.' },
    { name: 'WhatsApp', category: 'communication', icon: '/images/connectors/whatsapp.svg', desc: 'One-click chat buttons and inquiry routing.' },
    { name: 'Fathom Analytics', category: 'analytics', icon: '/images/connectors/fathom.svg', desc: 'Privacy-focused GDPR compliant web analytics.' },
    { name: 'Eventbrite', category: 'productivity', icon: '/images/connectors/eventbrite.svg', desc: 'Sell event tickets and showcase live schedules.' },
  ];

  const categories = [
    { id: 'all', label: 'All Connectors' },
    { id: 'database', label: 'Databases' },
    { id: 'payment', label: 'Payments' },
    { id: 'crm', label: 'CRMs' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'productivity', label: 'Productivity' },
    { id: 'communication', label: 'Communication' },
  ];

  const filtered = connectors.filter((c) => {
    const matchesCat = selectedCategory === 'all' || c.category === selectedCategory;
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Section 0: Connect Hero */}
        <section className="cx-hero">
          <div>
            <span className="cx-hero__eyebrow">
              <PlugsConnected size={16} weight="bold" />
              Connectors
            </span>
            <h1 className="font-['Neutralsans']">
              Build with the tools your business already uses
            </h1>
            <p className="cx-sub">
              Connect your PixartualAI site or application to live databases, payment gateways, analytics providers, CRMs, and email tools.
            </p>
            <div className="cx-hero__actions">
              <Link href="/dashboard" className="mfy-btn mfy-btn--primary">
                Explore in Studio
              </Link>
              <a href="#catalog" className="mfy-btn mfy-btn--outline">
                Browse catalog ({connectors.length})
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-4 gap-3 p-6 rounded-3xl bg-neutral-100 border border-neutral-200 shadow-sm max-w-[420px]">
              {connectors.slice(0, 16).map((c) => (
                <div key={c.name} className="flex size-14 items-center justify-center rounded-2xl bg-white p-2.5 shadow-xs border border-neutral-200/60 hover:scale-105 transition-transform">
                  <img alt={c.name} src={c.icon} className="size-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Search & Connector Catalog */}
        <section className="cx-catalog" id="catalog">
          <div className="cx-toolbar">
            <div className="cx-search">
              <MagnifyingGlass size={18} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search connectors (e.g. Stripe, Supabase, HubSpot)..."
                aria-label="Search connectors"
              />
            </div>

            <div className="cx-pills">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className="cx-pill"
                  aria-pressed={selectedCategory === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="cx-count mb-6 text-sm text-neutral-500">
            Showing {filtered.length} of {connectors.length} connectors
          </div>

          {filtered.length === 0 ? (
            <div className="cx-empty py-16 text-center text-neutral-500">
              No connectors found matching &ldquo;{search}&rdquo;.
            </div>
          ) : (
            <div className="cx-grid">
              {filtered.map((c) => (
                <div
                  key={c.name}
                  className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:border-orange-500 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-neutral-50 p-2.5 border border-neutral-100">
                      <img alt={c.name} src={c.icon} className="size-full object-contain" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-orange-600 transition-colors font-['Neutralsans']">
                      {c.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {c.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                    <span className="capitalize">{c.category}</span>
                    <span className="font-semibold text-orange-600 group-hover:translate-x-1 transition-transform">
                      Connected →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Section: How PixartualAI Connects */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div className="mx-auto w-full max-w-[1240px] px-5 md:px-[50px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  How PixartualAI connects
                </h2>
                <p className="text-[15px] leading-relaxed text-neutral-600">
                  From prompt to a site that works with your real data, in four steps.
                </p>
              </div>

              <div className="grid grid-cols-1 items-start gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { step: '01', title: 'Choose your connector', desc: 'Select from 100+ native integrations or connect any REST/GraphQL API.' },
                  { step: '02', title: 'Authenticate in seconds', desc: 'Secure OAuth authorization or encrypted API key stored in private vault.' },
                  { step: '03', title: 'Bind data via prompt', desc: 'Tell PixartualAI: "Populate this pricing table from Stripe prices".' },
                  { step: '04', title: 'Deploy live to edge', desc: 'Push to production with automated synchronization and webhook handling.' },
                ].map((s) => (
                  <article key={s.step} className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 flex flex-col justify-between min-h-[220px]">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">{s.step}</span>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 font-['Neutralsans']">{s.title}</h3>
                      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <PixartualCta />
      </main>

      <Footer />
    </div>
  );
}
