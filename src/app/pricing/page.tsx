'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { CaretDown, Check } from '@phosphor-icons/react';

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Can I cancel or switch my plan at any time?',
      a: 'Yes, you can upgrade, downgrade, or cancel your subscription at any time from your account settings. If you cancel, your subscription will remain active until the end of the billing period.',
    },
    {
      q: 'How do AI credits work?',
      a: 'Credits are consumed when you generate full pages, refactor layout structures, or run complex AI design chats. Minor edits or direct visual adjustments do not consume credits.',
    },
    {
      q: 'Can I connect my own custom domain?',
      a: 'Yes! On Starter, Pro, and Enterprise plans, you can connect an unlimited number of custom domains with automatic SSL certificates provisioned instantly.',
    },
    {
      q: 'Do you offer discounts for non-profits or students?',
      a: 'Yes, we offer special educational and non-profit pricing. Reach out to our team to apply.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center px-5 max-w-[1240px] mx-auto">
          <h1 className="text-[clamp(36px,6vw,56px)] font-medium leading-[1.15] text-neutral-900 font-['Neutralsans']">
            Pricing that scales with you
          </h1>
          <p className="mt-4 max-w-[580px] mx-auto text-[clamp(1rem,1.2vw,1.12rem)] leading-relaxed text-gray-500">
            Choose the plan that fits your ambition. From simple websites to full-stack apps and digital experiences, PixartualAI gives you the tools to create, edit, and launch.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="mt-9 inline-flex items-center gap-3 p-1 rounded-full bg-stone-100 border border-neutral-200">
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                annual ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Billed yearly <span className="ml-1 text-xs text-[#fc8c04] font-semibold">Save 20%</span>
            </button>
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !annual ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Billed monthly
            </button>
          </div>
        </section>

        {/* 3 Pricing Cards */}
        <section className="pb-16 px-5 max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Free Plan */}
            <div className="pr-card flex flex-col justify-between border border-neutral-200 rounded-[22px] p-8 bg-white transition-all hover:border-neutral-300">
              <div>
                <h3 className="text-xl font-medium text-neutral-900 font-['Neutralsans']">Free Plan</h3>
                <p className="mt-2 text-sm text-neutral-500 min-h-[40px]">
                  Get started with PixartualAI at no cost.
                </p>

                <div className="pr-price mt-6 flex items-baseline gap-2">
                  <span className="pr-price-amt font-['Neutralsans'] text-5xl font-medium text-neutral-900">$0</span>
                  <span className="pr-price-per text-sm text-neutral-500">forever</span>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 space-y-3">
                  <p className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Included</p>
                  {[
                    '35 AI generation credits',
                    'Publish to pixartual.app subdomain',
                    'Access to all standard templates',
                    'Full visual canvas editing',
                    'Community support',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-sm text-neutral-700">
                      <Check size={16} weight="bold" className="text-[#fc8c04] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <Link href="/dashboard" className="mfy-btn mfy-btn--secondary w-full text-center">
                  Start for free
                </Link>
              </div>
            </div>

            {/* Starter Plan */}
            <div className="pr-card flex flex-col justify-between border border-neutral-200 rounded-[22px] p-8 bg-white transition-all hover:border-neutral-300">
              <div>
                <h3 className="text-xl font-medium text-neutral-900 font-['Neutralsans']">Starter Plan</h3>
                <p className="mt-2 text-sm text-neutral-500 min-h-[40px]">
                  Build projects that convert and scale.
                </p>

                <div className="pr-price mt-6 flex items-baseline gap-2">
                  <span className="pr-price-amt font-['Neutralsans'] text-5xl font-medium text-neutral-900">
                    {annual ? '$20' : '$25'}
                  </span>
                  <span className="pr-price-per text-sm text-neutral-500">/month</span>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 space-y-3">
                  <p className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Everything in Free plus</p>
                  {[
                    '150 AI generation credits / month',
                    'Custom domains + automatic SSL',
                    'No PixartualAI watermark',
                    'Responsive mobile & tablet control',
                    'Fast edge hosting & global CDN',
                    'Export clean code (HTML & React)',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-sm text-neutral-700">
                      <Check size={16} weight="bold" className="text-[#fc8c04] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <Link href="/dashboard" className="mfy-btn mfy-btn--primary w-full text-center">
                  Get Starter
                </Link>
              </div>
            </div>

            {/* Pro Plan (Most Popular) */}
            <div className="pr-card is-popular relative flex flex-col justify-between border-2 border-neutral-950 rounded-[22px] p-8 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
              <span className="pr-badge absolute -top-3.5 left-1/2 -translate-x-1/2 bg-neutral-950 text-white rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                Most Popular
              </span>

              <div>
                <h3 className="text-xl font-medium text-neutral-900 font-['Neutralsans']">Pro Plan</h3>
                <p className="mt-2 text-sm text-neutral-500 min-h-[40px]">
                  Unlock full creativity and powerful features.
                </p>

                <div className="pr-price mt-6 flex items-baseline gap-2">
                  <span className="pr-price-amt font-['Neutralsans'] text-5xl font-medium text-neutral-900">
                    {annual ? '$40' : '$50'}
                  </span>
                  <span className="pr-price-per text-sm text-neutral-500">/month</span>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 space-y-3">
                  <p className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Everything in Starter plus</p>
                  {[
                    'Unlimited AI generations',
                    'Full-stack apps, logic & databases',
                    'CMS collections & dynamic content',
                    'Team collaboration & shared workspace',
                    'Priority generation speed',
                    'Advanced SEO & traffic analytics',
                    'Dedicated support channel',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-sm text-neutral-700">
                      <Check size={16} weight="bold" className="text-[#fc8c04] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <Link href="/dashboard" className="mfy-btn mfy-btn--primary w-full text-center">
                  Get Pro
                </Link>
              </div>
            </div>
          </div>

          {/* Enterprise Scale Card */}
          <div className="pr-ent-card mt-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-7 items-center p-8 md:p-11 rounded-[22px] bg-neutral-950 text-white">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium font-['Neutralsans'] mb-3">Enterprise Scale Plan</h2>
              <p className="text-neutral-400 max-w-[700px] text-sm md:text-base leading-relaxed">
                PixartualAI Scale is built for teams that have high-traffic sites and want to keep them while unlocking AI workflows across engineering, design, and marketing. Includes custom SLA, dedicated support, and enterprise security.
              </p>
            </div>
            <div>
              <Link href="/enterprise-teams" className="mfy-btn mfy-btn--primary !bg-white !text-neutral-950 hover:!bg-neutral-100 font-semibold whitespace-nowrap">
                Contact Enterprise
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-5 max-w-[900px] mx-auto border-t border-neutral-100">
          <h2 className="text-center text-3xl font-medium font-['Neutralsans'] mb-10 text-neutral-900">
            Billing & plans
          </h2>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border border-neutral-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-medium text-neutral-900 hover:text-[#fc8c04] transition-colors"
                >
                  <span>{f.q}</span>
                  <CaretDown size={18} className={`transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-5 pt-0 text-neutral-500 text-sm leading-relaxed border-t border-neutral-100 mt-2">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
