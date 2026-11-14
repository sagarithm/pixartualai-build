'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PixartualCta } from '@/components/landing/PixartualCta';
import { ArrowUpRight, Plus, Minus } from '@phosphor-icons/react';
import comparisonsCatalog from '@/data/comparisons_catalog.json';

interface CardItem {
  title: string;
  desc: string;
  href: string;
}

interface CategoryGroup {
  category: string;
  cards: CardItem[];
}

export default function ComparePage() {
  const categories: CategoryGroup[] = comparisonsCatalog as CategoryGroup[];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'How honest are these comparisons?',
      a: 'Every page has a section naming where the other product is the better choice, and we mean it. We would rather lose a signup to the right tool than win a customer who leaves angry next month. The comparisons focus on architectural differences, not checklists of superficial features.',
    },
    {
      q: 'Why are ChatGPT, Claude Code and Figma in here?',
      a: 'Because people genuinely ask whether they can build a website with them, and the honest answer is usually nuanced. They are great tools for parts of the problem, but they are not website platforms: they do not host, authenticate, query data, or provide a visual editing canvas for non-technical teammates.',
    },
    {
      q: 'What does PixartualAI actually do differently?',
      a: 'You describe what you want and get a complete, structured page back, then refine it visually. The same page can hold static marketing copy, interactive calculators, a full headless CMS, and secure data connections — without you writing boilerplate or glue code.',
    },
    {
      q: 'Can I move a site I already have?',
      a: 'If it is on Webflow, apply to our transfer program. We reconstruct selected sites 1:1 inside PixartualAI, clean up the class names, and reconnect your CMS collections so you can keep your existing domain and SEO equity.',
    },
    {
      q: 'What does it cost to try?',
      a: 'Nothing. The free plan publishes a real site on a PixartualAI subdomain and includes the database, file hosting, and visual studio. You only upgrade when you want a custom domain or team seats.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 inset-x-3 bottom-3 z-0 overflow-hidden rounded-b-[24px] md:inset-x-5 md:bottom-5 md:rounded-b-[48px] xl:inset-x-8 xl:bottom-8 2xl:inset-x-[50px] 2xl:bottom-[50px] 2xl:rounded-b-[64px]"
          >
            <Image
              src="/images/kit/hero-bg.jpg"
              alt=""
              fill
              className="object-cover object-bottom opacity-60"
              priority
            />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col gap-12 px-5 md:gap-[71px] md:px-[50px]">
            <div className="flex max-w-[800px] flex-col gap-3">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  Compare
                </span>
              </div>
              <h1 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] max-w-[760px] font-['Neutralsans']">
                How PixartualAI compares
              </h1>
              <p className="max-w-[682px] text-[15px] leading-relaxed text-neutral-600">
                A fair breakdown of how PixartualAI differs from visual builders, traditional CMSs, code generators, and AI coding agents. Where each tool shines, and where PixartualAI takes a different approach.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Sections */}
        {categories.map((cat, idx) => (
          <section
            key={cat.category}
            id={cat.category.toLowerCase().replace(/\s+/g, '-')}
            className={`kit-root relative overflow-hidden py-16 md:py-20 ${
              idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'
            }`}
          >
            <div className="mx-auto w-full max-w-[1240px] px-5 md:px-[50px]">
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between border-b border-neutral-200/80 pb-4">
                  <h2 className="kit-heading font-medium tracking-[-0.02em] text-neutral-950 text-[1.75rem] md:text-[2.25rem] font-['Neutralsans']">
                    {cat.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.cards.map((card) => (
                    <Link
                      key={card.title}
                      href={card.href}
                      className="kit-fcard group relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-neutral-100 p-[28px] min-h-[320px] no-underline transition-all duration-300 hover:bg-neutral-900 hover:text-white hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between w-full">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-neutral-400">
                          Comparison
                        </span>
                        <div className="size-8 rounded-full bg-white group-hover:bg-neutral-800 flex items-center justify-center transition-colors">
                          <ArrowUpRight
                            size={18}
                            className="text-neutral-900 group-hover:text-[#fc8c04] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col gap-2">
                        <h3 className="font-['Neutralsans'] font-medium text-xl md:text-2xl text-neutral-950 group-hover:text-white transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-neutral-600 group-hover:text-neutral-300 transition-colors">
                          {card.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* What every PixartualAI project includes */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px] border-t border-neutral-100">
          <div className="mx-auto w-full max-w-[1240px] px-5 md:px-[50px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3.5">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  What every PixartualAI project includes
                </h2>
                <p className="text-[15px] leading-relaxed text-neutral-600">
                  Included from the free plan up, not sold as separate services.
                </p>
              </div>

              <div className="grid gap-[30px] sm:grid-cols-2 md:grid-cols-3">
                <div className="flex min-h-[246px] flex-col justify-between overflow-hidden rounded-[20px] bg-neutral-100 p-8 transition-transform hover:-translate-y-1 duration-300">
                  <span className="text-6xl font-medium tracking-[-0.02em] text-neutral-950 font-['Neutralsans']">
                    1
                  </span>
                  <span className="text-[16px] text-neutral-900 font-medium">
                    place for design, content, data, and publishing
                  </span>
                </div>

                <div className="flex min-h-[246px] flex-col justify-between overflow-hidden rounded-[20px] bg-neutral-100 p-8 transition-transform hover:-translate-y-1 duration-300">
                  <span className="text-6xl font-medium tracking-[-0.02em] text-[#fc8c04] font-['Neutralsans']">
                    100+
                  </span>
                  <span className="text-[16px] text-neutral-900 font-medium">
                    connectors to build against your real data
                  </span>
                </div>

                <div className="flex min-h-[246px] flex-col justify-between overflow-hidden rounded-[20px] bg-neutral-100 p-8 transition-transform hover:-translate-y-1 duration-300">
                  <span className="text-6xl font-medium tracking-[-0.02em] text-neutral-950 font-['Neutralsans']">
                    $0
                  </span>
                  <span className="text-[16px] text-neutral-900 font-medium">
                    to start, with a live subdomain, database, and analytics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before you compare */}
        <section className="kit-root relative overflow-hidden bg-neutral-50/60 py-20 md:py-[100px] border-t border-neutral-100">
          <div className="mx-auto w-full px-5 md:px-[50px] max-w-[860px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3.5 text-center">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  Before you compare
                </h2>
                <p className="text-[15px] leading-relaxed text-neutral-600">
                  How we write these pages, and what PixartualAI is for.
                </p>
              </div>

              <div className="flex flex-col divide-y divide-neutral-200">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={faq.q} className="py-6">
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="flex w-full items-center justify-between text-left group cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="text-lg md:text-xl font-medium text-neutral-900 group-hover:text-[#fc8c04] transition-colors">
                          {faq.q}
                        </span>
                        <div className="ml-4 flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200/80 group-hover:bg-[#fc8c04] group-hover:text-white transition-colors">
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="mt-4 text-[15px] leading-relaxed text-neutral-600 animate-fadeIn">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <PixartualCta />
      </main>

      <Footer />
    </div>
  );
}
