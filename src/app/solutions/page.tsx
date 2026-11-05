'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import solutionsData from '@/data/solutions.json';

interface SolutionCard {
  title: string;
  desc: string;
  href: string;
}

interface SolutionCategory {
  id: string;
  name: string;
  desc: string;
  cards: SolutionCard[];
}

const categories: SolutionCategory[] = solutionsData as SolutionCategory[];

export default function SolutionsPage() {
  const scrollToCat = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="sx-main flex-1">
        {/* Hero Section */}
        <header className="sx-hero max-w-[1240px] mx-auto px-5 pt-16 pb-8 md:px-[50px] md:pt-24 text-center">
          <h1 className="text-[clamp(2.4rem,5vw,3.6rem)] font-medium leading-[1.08] text-neutral-950 font-['Neutralsans']">
            Build any website, app, or tool with PixartualAI
          </h1>
          <p className="mt-4 text-base md:text-lg text-neutral-500 max-w-[680px] mx-auto leading-relaxed">
            PixartualAI turns a prompt into a polished website, web app, dashboard, or internal tool. Pick a use case below and launch in minutes, with no developers and no templates to wrestle with.
          </p>

          {/* Category Navigation Pills */}
          <nav aria-label="Solutions categories" className="sx-catnav flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollToCat(cat.id)}
                className="px-5 py-2 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-700 hover:bg-neutral-900 hover:text-white transition-all cursor-pointer"
              >
                {cat.name}
              </button>
            ))}
          </nav>
        </header>

        {/* 5 Category Sections */}
        {categories.map((cat) => (
          <div key={cat.id} id={cat.id} className="sx-cat py-12 md:py-16 border-t border-neutral-100">
            <div className="max-w-[1240px] mx-auto px-5 md:px-[50px]">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-medium text-neutral-900 font-['Neutralsans']">
                    {cat.name}
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-neutral-500 max-w-[560px]">
                    {cat.desc || `Explore pre-configured architectures and workflows for ${cat.name.toLowerCase()}.`}
                  </p>
                </div>
                <Link
                  href="/dashboard"
                  className="text-xs font-semibold text-[#fc8c04] hover:underline whitespace-nowrap self-start md:self-auto"
                >
                  Start building {cat.name} &rarr;
                </Link>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {cat.cards.map((card, i) => (
                  <Link
                    key={`${card.title}-${i}`}
                    href="/dashboard"
                    className="kit-fcard group relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-neutral-100 p-6 min-h-[220px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-neutral-900 hover:text-white"
                  >
                    <div>
                      <h3 className="font-['Neutralsans'] font-medium text-lg text-neutral-900 group-hover:text-white transition-colors">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-xs md:text-sm text-neutral-500 group-hover:text-neutral-300 leading-relaxed transition-colors">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#fc8c04]">
                        Generate with AI
                      </span>
                      <span className="inline-flex size-7 rounded-full bg-white text-neutral-900 group-hover:bg-[#fc8c04] group-hover:text-white items-center justify-center transition-colors shadow-xs">
                        &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* CTA Banner */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
