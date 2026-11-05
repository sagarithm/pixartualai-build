'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { MapPin, Globe, Sparkle, ArrowRight, ArrowUpRight } from '@phosphor-icons/react';

export default function TopAgenciesUKPage() {
  const ukStudios = [
    {
      name: 'Pentagram London',
      city: 'London, UK',
      specialty: 'World-Renowned Identity, Editorial Design, Digital Platforms',
      rate: '£100k - £400k+',
      site: 'https://pentagram.com',
      highlight: 'Iconic independent design partnership shaping global visual culture.',
    },
    {
      name: 'Koto Studio',
      city: 'London / Berlin',
      specialty: 'Brand Identity, Digital Transformation, Tone of Voice',
      rate: '£60k - £200k',
      site: 'https://koto.studio',
      highlight: 'Brand creation agency behind Deliveroo, Bolt, WhatsApp, and Discord.',
    },
    {
      name: 'DesignStudio',
      city: 'London, UK',
      specialty: 'Global Rebranding, Digital Experience Architecture',
      rate: '£80k - £300k',
      site: 'https://design.studio',
      highlight: 'Engineered iconic rebrands for Airbnb, Premier League, and British Airways.',
    },
    {
      name: 'Universal Favourite',
      city: 'London / Remote',
      specialty: 'Creative Direction, Digital Product Craft, Bespoke Web Design',
      rate: '£40k - £120k',
      site: 'https://universalfavourite.com',
      highlight: 'Multi-award winning boutique design studio for high-growth tech & culture.',
    },
    {
      name: 'Made Thought',
      city: 'London, UK',
      specialty: 'Luxury Brands, Sustainability Design, Progressive Digital Art',
      rate: '£75k - £250k',
      site: 'https://madethought.com',
      highlight: 'Partners with Stella McCartney, MoMA, and innovative conscious brands.',
    },
    {
      name: 'Ragged Edge',
      city: 'London, UK',
      specialty: 'Challenger Brands, Disruptive Copywriting, Interactive Web',
      rate: '£50k - £180k',
      site: 'https://raggededge.com',
      highlight: 'Specialists in propelling underdog challenger brands into category leaders.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/50 via-white to-white px-5 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="mx-auto max-w-[1000px] text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
              <MapPin size={14} weight="fill" />
              Editorial Directory · United Kingdom
            </div>
            <h1 className="text-[clamp(34px,5vw,56px)] font-bold tracking-tight text-neutral-900 font-['Neutralsans']">
              Web design agencies in the UK
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-neutral-600">
              An unranked, editorial directory of leading design studios and digital product creators across the United Kingdom.
            </p>
          </div>
        </section>

        {/* Agency Cards Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="mb-12">
              <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold text-neutral-900 font-['Neutralsans']">
                Featured UK Design Studios
              </h2>
              <p className="mt-2 text-neutral-600">
                Independent British agencies celebrated for typographic rigor, wit, and craft.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {ukStudios.map((agency) => (
                <div
                  key={agency.name}
                  className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm hover:border-orange-500 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900">{agency.name}</h3>
                        <p className="flex items-center gap-1.5 text-xs text-neutral-500 mt-1">
                          <MapPin size={13} className="text-orange-500" />
                          {agency.city}
                        </p>
                      </div>
                      <a
                        href={agency.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700"
                      >
                        Visit site <ArrowUpRight size={13} />
                      </a>
                    </div>

                    <p className="mt-4 text-sm text-neutral-700 leading-relaxed font-medium">
                      {agency.specialty}
                    </p>
                    <p className="mt-2 text-xs text-neutral-500 leading-normal">
                      {agency.highlight}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-500">Typical Project Budget</span>
                    <span className="font-semibold text-neutral-900">{agency.rate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hire a studio or build yourself? */}
        <section className="border-t border-neutral-100 bg-stone-50 py-16 md:py-24">
          <div className="mx-auto max-w-[1000px] px-5 text-center">
            <h2 className="text-[clamp(28px,3.8vw,42px)] font-bold text-neutral-900 font-['Neutralsans']">
              Hire a studio in the United Kingdom, or build it yourself?
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-neutral-600 leading-relaxed">
              Top UK design consultancies deliver extraordinary brand strategy. For agile founders wanting to validate concepts, generate custom client portals, and iterate without retainer fees, PixartualAI bridges the gap.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/dashboard" className="mfy-btn mfy-btn--primary">
                Try PixartualAI Free
              </Link>
              <Link href="/top-agencies" className="mfy-btn mfy-btn--outline">
                All Regions
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
