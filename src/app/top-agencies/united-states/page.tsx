'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PixartualCta } from '@/components/landing/PixartualCta';
import { MapPin, Globe, Sparkle, ArrowRight, ArrowUpRight } from '@phosphor-icons/react';

export default function TopAgenciesUSPage() {
  const usStudios = [
    {
      name: 'Work & Co',
      city: 'Brooklyn, NY',
      specialty: 'Digital Products, Mobile Apps, Enterprise Design Systems',
      rate: '$150k - $500k+',
      site: 'https://work.co',
      highlight: 'Design partner to Apple, Google, IKEA, and Virgin America.',
    },
    {
      name: 'Basic/Dept',
      city: 'San Diego / New York',
      specialty: 'Brand Strategy, Direct to Consumer E-Commerce, Digital Craft',
      rate: '$75k - $250k',
      site: 'https://basicagency.com',
      highlight: 'Awwwards Agency of the Year with clients like Patagonia, Google, and KFC.',
    },
    {
      name: 'Red Antler',
      city: 'Brooklyn, NY',
      specialty: 'Venture Startup Branding, Launch Strategy, Packaging & Web',
      rate: '$100k - $300k',
      site: 'https://redantler.com',
      highlight: 'Built iconic D2C startup brands including Allbirds, Casper, and Ramp.',
    },
    {
      name: 'Metalab',
      city: 'San Francisco / Remote',
      specialty: 'Product Design, SaaS Interfaces, Design Systems',
      rate: '$120k - $400k',
      site: 'https://metalab.com',
      highlight: 'Designed early versions of Slack, Coinbase, Pitch, and Uber.',
    },
    {
      name: 'Huge Inc',
      city: 'New York, NY',
      specialty: 'Omnichannel Digital Transformation, AI Experience Design',
      rate: '$200k - $1M+',
      site: 'https://hugeinc.com',
      highlight: 'Enterprise scale digital reinvention for global Fortune 100 brands.',
    },
    {
      name: 'Instrument',
      city: 'Portland, OR / New York',
      specialty: 'Brand Systems, Interactive Web, Experimental Technology',
      rate: '$100k - $350k',
      site: 'https://instrument.com',
      highlight: 'Strategic digital creative agency for Nike, Levi’s, and Salesforce.',
    },
    {
      name: 'Code and Theory',
      city: 'New York, NY',
      specialty: 'Publishing Platforms, Media, High-Scale Web Architecture',
      rate: '$150k - $500k',
      site: 'https://codeandtheory.com',
      highlight: 'Engineered web platforms for Bloomberg, CNN, Vogue, and Microsoft.',
    },
    {
      name: 'Fantasy (FC)',
      city: 'San Francisco / Miami',
      specialty: 'UI/UX Innovation, Operating System Concepts, Automotive UI',
      rate: '$120k - $450k',
      site: 'https://fantasy.co',
      highlight: 'Future-forward UI concepts for Tesla, Netflix, Spotify, and Samsung.',
    },
  ];

  const cities = [
    'New York, NY',
    'San Francisco, CA',
    'Los Angeles, CA',
    'Austin, TX',
    'Seattle, WA',
    'Chicago, IL',
    'Miami, FL',
    'Boston, MA',
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
              Editorial Directory · United States
            </div>
            <h1 className="text-[clamp(34px,5vw,56px)] font-bold tracking-tight text-neutral-900 font-['Neutralsans']">
              Web design agencies in the United States
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-neutral-600">
              An unranked, editorial directory of premier creative digital agencies across the US. Each listing includes verified focus areas, typical engagement sizes, and links directly to their work.
            </p>
          </div>
        </section>

        {/* Browse by city pills */}
        <section className="border-y border-neutral-100 bg-stone-50/70 py-6">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="font-semibold text-neutral-400 mr-2">Browse by city:</span>
              {cities.map((city) => (
                <span
                  key={city}
                  className="rounded-full bg-white px-3.5 py-1.5 font-medium text-neutral-700 shadow-sm border border-neutral-200 hover:border-orange-500 cursor-pointer transition-colors"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Agency Cards Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="mb-12">
              <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold text-neutral-900 font-['Neutralsans']">
                Featured US Design Studios
              </h2>
              <p className="mt-2 text-neutral-600">
                Sorted alphabetically. No paid promotions or affiliate placements.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {usStudios.map((agency) => (
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
              Hire a studio in the United States, or build it yourself?
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-neutral-600 leading-relaxed">
              If your startup or marketing team has 4 months and $100k+, a top agency will craft bespoke brand assets. If you need to test positioning, ship high-converting pages this week, or iterate on a live product without agency delays, PixartualAI provides agency-grade design output at lightning speed.
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
        <PixartualCta />
      </main>

      <Footer />
    </div>
  );
}

