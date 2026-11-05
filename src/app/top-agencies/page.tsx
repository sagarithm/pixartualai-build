'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { MfyFaqAccordion } from '@/components/landing/MfyFaqAccordion';
import { Globe, MapPin, ArrowRight, Compass } from '@phosphor-icons/react';

export default function TopAgenciesPage() {
  const northAmericaMarkets = [
    { name: 'United States', slug: '/top-agencies/united-states', count: '140+ Studios', desc: 'The highest rates in the world, and the deepest bench of creative and brand agencies.' },
    { name: 'New York', slug: '/top-agencies/united-states', count: '45+ Studios', desc: 'Global fashion, finance, editorial, and cutting-edge creative digital agencies.' },
    { name: 'San Francisco', slug: '/top-agencies/united-states', count: '38+ Studios', desc: 'World-class product design, venture-backed startups, and AI interface builders.' },
    { name: 'Los Angeles', slug: '/top-agencies/united-states', count: '30+ Studios', desc: 'Entertainment, luxury direct-to-consumer, influencer brands, and lifestyle web design.' },
    { name: 'Austin', slug: '/top-agencies/united-states', count: '18+ Studios', desc: 'Fast-moving tech founders, hardware startups, and vibrant boutique branding.' },
    { name: 'Seattle', slug: '/top-agencies/united-states', count: '15+ Studios', desc: 'Enterprise SaaS architecture, cloud tools, and technical design engineering.' },
    { name: 'Chicago', slug: '/top-agencies/united-states', count: '20+ Studios', desc: 'Industrial logistics, architecture, FinTech, and enduring corporate brand design.' },
    { name: 'Miami', slug: '/top-agencies/united-states', count: '16+ Studios', desc: 'Web3, hospitality, luxury real estate, and vibrant Latin American cross-border brands.' },
  ];

  const europeMarkets = [
    { name: 'United Kingdom', slug: '/top-agencies/united-kingdom', count: '90+ Studios', desc: 'London and UK boutique studios leading typography, visual design, and art direction.' },
    { name: 'Germany', slug: '/top-agencies/united-kingdom', count: '35+ Studios', desc: 'Berlin and Munich studios focused on precision, industrial design, and automotive DX.' },
    { name: 'France', slug: '/top-agencies/united-kingdom', count: '28+ Studios', desc: 'Parisian luxury fashion maisons, culinary arts, and high-craft typography.' },
    { name: 'Netherlands', slug: '/top-agencies/united-kingdom', count: '24+ Studios', desc: 'Amsterdam digital pioneers, motion craft, and experimental interactive design.' },
    { name: 'Spain & Italy', slug: '/top-agencies/united-kingdom', count: '22+ Studios', desc: 'Barcelona, Madrid, and Milan studios with bold editorial aesthetics and lifestyle craft.' },
  ];

  const agencyFaqs = [
    {
      q: 'How much does a custom agency website cost in 2026?',
      a: 'Top studios in New York and London typically charge $25,000 to $120,000+ for custom brand strategy, design, and bespoke development. For growing startups, PixartualAI provides an alternative: launch with identical design pedigree in hours at a fraction of the cost, or prototype your exact vision before hiring an agency.',
    },
    {
      q: 'When should you hire a studio vs. build yourself?',
      a: 'Hire a studio when you need high-level organizational brand identity, bespoke photography shoots, and multi-stakeholder corporate positioning. Build yourself with PixartualAI when you need to ship immediate landing pages, customer portals, MVPs, and marketing campaigns without waiting months.',
    },
    {
      q: 'Is this directory sponsored?',
      a: 'No. This directory is 100% editorial and unpaid: it lists studios across the United States and Europe with what they do, typical rates, and direct links to their own work so you can judge them yourself.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Section 0: Authentic Hero with hero-bg.jpg */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div aria-hidden="true" className="pointer-events-none absolute top-0 inset-x-3 bottom-3 z-0 overflow-hidden rounded-b-[24px] md:inset-x-5 md:bottom-5 md:rounded-b-[48px] xl:inset-x-8 xl:bottom-8 2xl:inset-x-[50px] 2xl:bottom-[50px] 2xl:rounded-b-[64px]">
            <img alt="" className="h-full w-full object-cover object-bottom" src="/images/kit/hero-bg.jpg" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1000px] text-center px-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
              <Compass size={14} weight="fill" />
              Global Creative Directory
            </div>
            <h1 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-['Neutralsans']">
              Web design agencies, city by city
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-lg leading-relaxed text-neutral-600">
              Finding a web design agency usually means wading through paid ads. This directory is editorial and unpaid: it lists studios across the United States and Europe with what they do, typical rates, and direct links to their work.
            </p>
          </div>
        </section>

        {/* Section 1: North America */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px] border-t border-neutral-100">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  North America
                </h2>
                <p className="mt-2 text-neutral-600 text-sm">
                  The deepest bench of creative technology, branding, and enterprise UX studios.
                </p>
              </div>
              <Link href="/top-agencies/united-states" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
                View all US studios <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {northAmericaMarkets.map((m) => (
                <Link
                  key={m.name}
                  href={m.slug}
                  className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 shadow-xs hover:border-orange-500 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-orange-600 transition-colors font-['Neutralsans']">
                        {m.name}
                      </h3>
                      <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-600">
                        {m.count}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {m.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-orange-600 group-hover:translate-x-1 transition-transform">
                    Explore studios <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Europe */}
        <section className="kit-root relative overflow-hidden bg-stone-50 py-20 md:py-[100px]">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  Europe
                </h2>
                <p className="mt-2 text-neutral-600 text-sm">
                  Independent European ateliers celebrated for typographic rigor, motion craft, and editorial art direction.
                </p>
              </div>
              <Link href="/top-agencies/united-kingdom" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
                View all UK & Europe studios <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {europeMarkets.map((m) => (
                <Link
                  key={m.name}
                  href={m.slug}
                  className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs hover:border-orange-500 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-orange-600 transition-colors font-['Neutralsans']">
                        {m.name}
                      </h3>
                      <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-600">
                        {m.count}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {m.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-orange-600 group-hover:translate-x-1 transition-transform">
                    Explore studios <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Choosing an Agency FAQs */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div className="mx-auto max-w-[860px] px-5 md:px-[50px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3.5 text-center">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  Choosing a web design agency
                </h2>
                <p className="text-[15px] leading-relaxed text-neutral-600">
                  Essential questions to consider before signing an agency contract.
                </p>
              </div>

              <MfyFaqAccordion items={agencyFaqs} />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
