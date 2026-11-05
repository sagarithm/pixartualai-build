'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { CaretDown } from '@phosphor-icons/react';

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: 'General',
      items: [
        {
          q: 'What is PixartualAI?',
          a: 'PixartualAI is an AI-powered visual website and web app builder that generates complete, production-ready digital experiences from natural language prompts, ready-made templates, or Webflow imports.',
        },
        {
          q: 'Do I need to know how to code?',
          a: 'No. PixartualAI handles the entire HTML, CSS, JavaScript, database logic, and edge hosting automatically while giving you full visual design control.',
        },
        {
          q: 'Can I export the code?',
          a: 'Yes, you can export clean, self-contained Next.js, React, and standard HTML bundles with no proprietary runtime lock-in.',
        },
      ],
    },
    {
      category: 'Building & Editing',
      items: [
        {
          q: 'How does AI chat refinement work?',
          a: 'You can talk to the PixartualAI Copilot in the visual canvas just like you would with a human designer or frontend engineer. Ask to change layouts, add pricing calculators, adjust typography, or refactor sections.',
        },
        {
          q: 'Can I build full-stack apps with databases?',
          a: 'Yes! PixartualAI supports CMS collections, dynamic data models, and interactive calculators that run stateful calculations directly in the browser.',
        },
      ],
    },
    {
      category: 'Hosting & Domains',
      items: [
        {
          q: 'Where are sites hosted?',
          a: 'Every site is hosted on our global edge CDN with sub-300ms latency worldwide and automated SSL certificate generation.',
        },
        {
          q: 'Can I use my own custom domain?',
          a: 'Yes, on any paid plan you can connect custom domains with automatic DNS validation.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center px-5 max-w-[900px] mx-auto">
          <h1 className="text-[clamp(36px,6vw,56px)] font-medium leading-[1.15] text-neutral-900 font-['Neutralsans']">
            Frequently asked questions
          </h1>
          <p className="mt-4 max-w-[580px] mx-auto text-[clamp(1rem,1.2vw,1.12rem)] leading-relaxed text-gray-500">
            Everything you need to know about building, editing, hosting, and scaling with PixartualAI.
          </p>

          <div className="mt-14 space-y-12 text-left">
            {faqCategories.map((cat, catIdx) => (
              <div key={cat.category}>
                <h2 className="text-xl font-medium font-['Neutralsans'] text-neutral-900 mb-4 pb-2 border-b border-neutral-100">
                  {cat.category}
                </h2>
                <div className="space-y-3">
                  {cat.items.map((item, itemIdx) => {
                    const globalIdx = catIdx * 10 + itemIdx;
                    const isOpen = openIndex === globalIdx;
                    return (
                      <div key={item.q} className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                          className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-medium text-neutral-900 hover:text-[#fc8c04] transition-colors text-sm sm:text-base"
                        >
                          <span>{item.q}</span>
                          <CaretDown size={18} className={`text-neutral-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="p-4 sm:p-5 pt-0 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 mt-2">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
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
