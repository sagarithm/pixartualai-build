'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import {
  Check,
  Lightning,
  Sparkle,
  Crown,
  ArrowRight,
  ShieldCheck,
  CaretRight,
} from '@phosphor-icons/react';

export default function PlansPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      id: 'free',
      name: 'Free Plan',
      tagline: 'Get started with PixartualAI at no cost.',
      price: '$0',
      period: 'forever',
      current: true,
      features: [
        '50 monthly generation credits',
        '1 workspace member',
        'Standard build speed',
        'Community templates catalog',
        'PixartualAI managed subdomains',
      ],
      buttonText: 'Current Plan',
      buttonDisabled: true,
    },
    {
      id: 'starter',
      name: 'Starter Plan',
      tagline: 'Build projects that convert and scale.',
      price: billingCycle === 'monthly' ? '$19' : '$15',
      period: '/ month',
      current: false,
      features: [
        '500 monthly credits',
        'Connect unlimited custom domains',
        'Remove PixartualAI badge',
        'Basic Connectors & CMS integration',
        'Standard email support',
      ],
      buttonText: 'Upgrade to Starter',
      buttonDisabled: false,
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      tagline: 'Unlock full creativity and powerful features.',
      price: billingCycle === 'monthly' ? '$39' : '$31',
      period: '/ month',
      popular: true,
      current: false,
      features: [
        '2,000 monthly credits',
        'Priority AI model synthesis (Gemini 2.5 / Claude 3.7)',
        'Full 1,498 Connectors ecosystem',
        'All 115+ authentic templates included',
        'Export production Next.js & React code',
        'Fast-track priority support',
      ],
      buttonText: 'Upgrade to Pro',
      buttonDisabled: false,
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      tagline:
        'Built for enterprise teams that need to scale faster without growing their design or development team. Deliver more with less.',
      price: 'Custom',
      period: '',
      current: false,
      features: [
        'Unlimited pooled credits',
        'Custom AI fine-tuning on company design systems',
        'SAML SSO & enterprise SCIM provisioning',
        '99.99% uptime SLA guarantee',
        'Dedicated account architect',
      ],
      buttonText: 'Contact Enterprise',
      buttonDisabled: false,
    },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1100px] w-full mx-auto">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Plans</h1>
            <p className="text-xs text-neutral-500 mt-1">
              Manage your subscription plan and credit balance.
            </p>
          </div>

          {/* Credits Remaining Card (Exact PixartualAI Parity) */}
          <div className="mt-6 p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xs font-semibold text-neutral-900 dark:text-white">Credits remaining</h2>
                <p className="text-[11.5px] text-neutral-400 mt-0.5">Credits reset monthly on paid plans</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-neutral-900 dark:text-white">50</span>
                <span className="text-xs text-neutral-400 ml-1">left</span>
              </div>
            </div>

            <div className="mt-3 w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
              <div className="h-full bg-black dark:bg-white rounded-full w-full" />
            </div>
          </div>

          {/* Billing Cycle Switcher */}
          <div className="flex justify-center mt-10">
            <div className="inline-flex items-center p-1 rounded-xl bg-stone-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700 text-xs font-medium">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 rounded-lg transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-2xs font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                Monthly billing
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                  billingCycle === 'yearly'
                    ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-2xs font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                <span>Yearly billing</span>
                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* 4 Plan Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {plans.map((p) => (
              <div
                key={p.id}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                  p.popular
                    ? 'border-amber-500/80 dark:border-amber-500 bg-white dark:bg-[#161616] shadow-md ring-1 ring-amber-500/20'
                    : 'border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-neutral-900 dark:text-white">{p.name}</h3>
                    {p.popular && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="text-[11.5px] text-neutral-400 mt-2 min-h-[36px] leading-relaxed">
                    {p.tagline}
                  </p>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-neutral-900 dark:text-white">{p.price}</span>
                    {p.period && <span className="text-xs text-neutral-400">{p.period}</span>}
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 space-y-2.5">
                    {p.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                        <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-[11.5px] leading-relaxed">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    disabled={p.buttonDisabled}
                    onClick={() => {
                      if (!p.buttonDisabled) alert(`Selected ${p.name}`);
                    }}
                    className={`w-full py-2 rounded-xl text-xs font-semibold transition-all shadow-xs ${
                      p.current
                        ? 'border border-neutral-200 dark:border-neutral-700 text-neutral-400 cursor-not-allowed bg-stone-50 dark:bg-neutral-800'
                        : p.popular
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:opacity-95'
                        : 'bg-black dark:bg-white text-white dark:text-black hover:opacity-90'
                    }`}
                  >
                    {p.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
