'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Sparkle, ArrowRight } from '@phosphor-icons/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const tiers = [
    {
      name: 'Starter',
      badge: 'Free Forever',
      price: '$0',
      description: 'Ideal for trying out the interactive canvas and testing templates.',
      features: [
        '10 AI generation credits',
        'Access to standard template catalog',
        'Responsive Desktop, Tablet & Mobile preview',
        'Interactive state sandbox (calculators & quizzes)',
        'Community Discord support',
      ],
      ctaText: 'Start for Free',
      ctaHref: '/studio',
      highlighted: false,
    },
    {
      name: 'Pro Creator',
      badge: 'Most Popular',
      price: billingCycle === 'annual' ? '$29' : '$36',
      period: '/month',
      description: 'For creators, freelancers, and builders shipping live interactive experiences.',
      features: [
        '150 AI generation credits / month',
        'Unlimited interactive templates & experiences',
        'Full conversational AI Copilot in-canvas',
        'Instant live shareable links (pixartual.ai/p/...)',
        'Zero-code clean export (HTML, React, Tailwind)',
        'Custom brand color & typography themes',
        'Priority generation queue',
      ],
      ctaText: 'Upgrade to Pro',
      ctaHref: '/studio',
      highlighted: true,
    },
    {
      name: 'Team / Scale',
      badge: 'For Agencies & Teams',
      price: billingCycle === 'annual' ? '$79' : '$99',
      period: '/month',
      description: 'For agencies and product teams scaling multiple interactive web apps.',
      features: [
        '500 AI generation credits / month',
        'Custom domain SSL mapping (yourbrand.com)',
        'Multi-user live real-time collaboration',
        'Webhooks and cron job automations',
        'Dedicated edge caching & priority support',
        'Removal of PixartualAI watermark',
      ],
      ctaText: 'Start Scale Trial',
      ctaHref: '/studio',
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] dark:bg-[#0F0F0F] text-[#171717] dark:text-[#EDEDED]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mb-4">
            <Sparkle size={13} weight="fill" />
            <span>Transparent Flat-Credit Billing</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-neutral-900 dark:text-white">
            Simple, predictable pricing.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans">
            No unpredictable token bills. Pay once, receive monthly credits, and build without limits.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center p-1 rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-[7px] text-xs font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-[7px] text-xs font-medium transition-colors flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-8 flex flex-col justify-between shadow-sm transition-all relative ${
                tier.highlighted
                  ? 'border-neutral-900 dark:border-white bg-white dark:bg-neutral-900 ring-2 ring-neutral-900/10 dark:ring-white/10 shadow-xl'
                  : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-bold text-xl text-neutral-900 dark:text-white">
                    {tier.name}
                  </span>
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-[5px] border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                    {tier.badge}
                  </span>
                </div>

                <div className="mt-4 flex items-baseline">
                  <span className="font-display font-black text-4xl sm:text-5xl text-neutral-900 dark:text-white">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="ml-1 text-sm text-neutral-500 font-sans">{tier.period}</span>
                  )}
                </div>

                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  {tier.description}
                </p>

                <div className="mt-8 space-y-3">
                  <span className="text-xs font-mono uppercase font-semibold text-neutral-400 tracking-wider">
                    What’s included:
                  </span>
                  <ul className="space-y-2.5">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                        <Check size={16} weight="bold" className="text-emerald-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                <Link
                  href={tier.ctaHref}
                  className={`w-full py-2.5 rounded-[7px] text-sm font-semibold flex items-center justify-center gap-2 transition-opacity ${
                    tier.highlighted
                      ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 shadow-sm'
                      : 'border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

