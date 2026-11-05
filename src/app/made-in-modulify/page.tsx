'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { ArrowUpRight } from '@phosphor-icons/react';

const showcases = [
  {
    name: 'Aperture Studio',
    category: 'Photography Portfolio',
    author: 'Elena & Marcus',
    image: '/images/home-collage/aperture.jpg',
    stats: 'Shipped in 15 mins · 100% Mobile Score',
    quote: 'PixartualAI gave us complete editorial control over our photo essays without touching a line of CSS.',
  },
  {
    name: 'Black Plus SaaS',
    category: 'B2B Software Landing Page',
    author: 'Fintech Labs',
    image: '/images/home-collage/black.jpg',
    stats: '+38% Conversion with ARR Calculator',
    quote: 'Replacing our static pricing table with an interactive calculator doubled qualified demo requests in the first week.',
  },
  {
    name: 'Galway Architecture',
    category: 'Studio Showcase',
    author: 'Galway Partners',
    image: '/images/home-collage/galway.jpg',
    stats: '1:1 Rebuilt from Webflow in 10 mins',
    quote: 'We migrated our entire portfolio from Webflow and now our partners can update projects directly using conversational AI.',
  },
  {
    name: 'Boutique Atelier',
    category: 'Lifestyle Brand & Lookbook',
    author: 'Studio Milan',
    image: '/images/home-collage/boutique.jpg',
    stats: 'Zero-code Interactive Lookbook',
    quote: 'Our collection dropped on schedule because our marketing team designed and published the entire portal autonomously.',
  },
];

export default function MadeInModulifyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center px-5 max-w-[1240px] mx-auto">
          <h1 className="text-[clamp(36px,6vw,56px)] font-medium leading-[1.15] text-neutral-900 font-['Neutralsans']">
            Stories from teams building faster with AI
          </h1>
          <p className="mt-4 max-w-[620px] mx-auto text-[clamp(1rem,1.2vw,1.12rem)] leading-relaxed text-gray-500">
            Real projects. Different problems. Same speed. Discover how founders, agencies, designers, and marketers ship with PixartualAI.
          </p>
        </section>

        <section className="pb-20 px-5 max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {showcases.map((s) => (
              <div
                key={s.name}
                className="group rounded-[24px] border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/95 text-neutral-900 shadow-md backdrop-blur-sm">
                      {s.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-medium font-['Neutralsans'] text-neutral-900 mb-2">
                      {s.name}
                    </h3>
                    <p className="text-sm text-neutral-600 italic leading-relaxed mb-4">
                      &ldquo;{s.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-semibold text-neutral-900">{s.stats}</span>
                    <Link href="/dashboard" className="text-[#fc8c04] font-semibold hover:underline flex items-center gap-1">
                      Clone in Studio <ArrowUpRight size={14} />
                    </Link>
                  </div>
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
