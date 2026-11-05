'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { ArrowUpRight, Sparkle } from '@phosphor-icons/react';

const useCases = [
  {
    title: 'How FontInLogo Scaled to 150k Monthly Visitors with Programmatic AI Pages',
    company: 'FontInLogo',
    metric: '150k Visits / mo',
    desc: 'How a two-person team built a high-ranking brand typography directory and instant CSS font preview engine.',
    tag: 'SEO & Directory',
  },
  {
    title: 'Replacing a 6-Month Agency Retainer with a 2-Day PixartualAI Rebuild',
    company: 'Paperanimation',
    metric: '95% Cost Savings',
    desc: 'How a boutique animation studio bypassed agency wait times and launched their dream interactive portfolio.',
    tag: 'Design Studio',
  },
  {
    title: 'Building a Multi-Country VAT Calculator with Stateful Logic',
    company: 'MeinMwStRechner',
    metric: '#1 on Google DE',
    desc: 'Building an interactive tax calculation engine that computes European VAT rates in real-time with sub-300ms latency.',
    tag: 'Web Applications',
  },
  {
    title: 'Scaling Iconly into a 2M+ Download Live Design Asset Marketplace',
    company: 'Iconly',
    metric: '2M+ Downloads',
    desc: 'Converting static icon packs into a searchable, interactive web catalog where designers copy SVGs on click.',
    tag: 'Marketplace',
  },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Header with hero-bg.jpg */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div aria-hidden="true" className="pointer-events-none absolute top-0 inset-x-3 bottom-3 z-0 overflow-hidden rounded-b-[24px] md:inset-x-5 md:bottom-5 md:rounded-b-[48px] xl:inset-x-8 xl:bottom-8 2xl:inset-x-[50px] 2xl:bottom-[50px] 2xl:rounded-b-[64px]">
            <img alt="" className="h-full w-full object-cover object-bottom" src="/images/kit/hero-bg.jpg" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1000px] text-center px-5">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
              <Sparkle size={14} weight="fill" />
              Real World Case Studies
            </div>
            <h1 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-['Neutralsans']">
              Stories from teams building with PixartualAI
            </h1>
            <p className="mx-auto mt-4 max-w-[620px] text-lg leading-relaxed text-neutral-600">
              Real projects, diverse problems, and the exact workflows used to ship in days instead of months.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <Link href="/insights" className="px-5 py-2 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors">
                All Articles
              </Link>
              <Link href="/insights/use-cases" className="px-5 py-2 rounded-full text-xs font-semibold bg-neutral-950 text-white shadow-sm">
                Use Cases & Stories
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-20 px-5 max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.company}
                className="group flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-7 shadow-xs hover:border-orange-500 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                      {uc.tag}
                    </span>
                    <span className="font-bold text-xs text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full">
                      {uc.metric}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900 group-hover:text-orange-600 transition-colors font-['Neutralsans']">
                    {uc.title}
                  </h2>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-orange-600 group-hover:translate-x-1 transition-transform">
                  Read story <ArrowUpRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
