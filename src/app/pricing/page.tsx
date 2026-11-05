'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { MfyFaqAccordion } from '@/components/landing/MfyFaqAccordion';

interface CreditOption {
  label: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

export default function PricingPage() {
  const [billedYearly, setBilledYearly] = useState(true);

  // Credit selector state
  const [starterCredits, setStarterCredits] = useState('250 credits/mo');
  const [proCredits, setProCredits] = useState('500 credits/mo');
  const [starterDomains, setStarterDomains] = useState('1 domain included');
  const [proDomains, setProDomains] = useState('3 domains included');

  const faqs = [
    {
      q: 'How does PixartualAI pricing work?',
      a: 'PixartualAI uses a flat credit-based model rather than variable token billing, so your cost is predictable month to month instead of changing with the length or complexity of each generation.',
    },
    {
      q: 'What uses credits?',
      a: 'PixartualAI credits are spent on AI generation work: creating a page, refining a section, restructuring a layout, or rewriting copy all draw down your balance. Generating a brand new AI image is the single most credit-hungry action, so bringing your own images or using a placeholder keeps costs down.',
    },
    {
      q: 'Do credits renew each month?',
      a: 'Paid plan credits do. They reset at the start of each billing cycle to whatever monthly allowance your plan and credit tier include, so your balance is predictable every cycle. The Free plan includes a one-time grant of 35 credits that does not renew.',
    },
    {
      q: 'Do unused credits roll over?',
      a: 'Plan credits do not roll over and expire at the end of the billing cycle. Top-up credits purchased separately do roll over as long as you maintain an active paid plan.',
    },
    {
      q: 'Can I cancel my subscription?',
      a: 'Yes. You can cancel at any time from the Plans section by opening Manage Subscription and selecting Cancel Subscription. You will keep access to paid features until the end of your current billing period, after which your account will automatically downgrade to the Free plan.',
    },
    {
      q: 'Can I get a refund?',
      a: 'Yearly plans are eligible for a refund within 7 days of the charge if the account has not been significantly used. Monthly plans, renewals, and top-up credits are non-refundable. Contact support to request a review.',
    },
    {
      q: 'Who owns the site I build?',
      a: 'PixartualAI does not claim ownership of the sites or content you create. You retain full rights to publish, modify, or distribute your work.',
    },
  ];

  const featuresList = [
    'Preview Site',
    'Publish Site',
    'Database',
    'Storage',
    'Realtime Analytics',
    'Free Subdomain',
    'Remove PixartualAI branding',
    'Custom Domain support',
    'Team members',
    'Dedicated support',
  ];

  const freeActive = [true, true, true, true, true, true, false, false, false, false];
  const starterActive = [true, true, true, true, true, true, true, true, false, false];
  const proActive = [true, true, true, true, true, true, true, true, true, false];

  const checkIcon = (
    <svg aria-hidden="true" className="pr-feat-ic" fill="currentColor" height="1em" viewBox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  );

  const dashIcon = (
    <svg aria-hidden="true" className="pr-feat-ic opacity-30" fill="currentColor" height="1em" viewBox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z" />
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="pr-main flex-1">
        {/* Header */}
        <header className="pr-hero">
          <h1>Pricing that scales with you</h1>
          <p>Choose the best plan for your business. Change plans as you grow.</p>
        </header>

        {/* Pricing Cards Wrap */}
        <div className="pr-wrap">
          <div className="pr-grid">
            {/* Free Plan */}
            <div className="pr-card">
              <p className="pr-name">Free Plan</p>
              <p className="pr-desc">Get started with PixartualAI at no cost.</p>
              <div className="pr-price">
                <span className="pr-price-amt">$0</span>
                <span className="pr-price-per">forever</span>
              </div>

              <label className="pr-billing cursor-pointer" onClick={() => setBilledYearly(!billedYearly)}>
                <button
                  type="button"
                  role="switch"
                  aria-checked={billedYearly}
                  className={`inline-flex cursor-pointer items-center outline-none relative h-[18px] w-[32px] flex-none rounded-[999px] transition-colors duration-200 ${
                    billedYearly ? 'bg-neutral-900' : 'bg-neutral-300'
                  }`}
                >
                  <span
                    className={`block transition-transform absolute left-[2px] top-[2px] h-[14px] w-[14px] rounded-full bg-white duration-200 ${
                      billedYearly ? 'translate-x-[14px]' : 'translate-x-0'
                    }`}
                  />
                </button>
                <span className="pr-billing-label select-none">Billed yearly</span>
              </label>

              <div className="pr-controls">
                <div className="pr-select-group">
                  <label className="pr-select-label" htmlFor="free-credits">
                    AI credits
                  </label>
                  <div className="relative w-full">
                    <button
                      type="button"
                      disabled
                      className="flex items-center justify-between whitespace-nowrap border bg-neutral-100 outline-none h-[38px] w-full px-[12px] rounded-[10px] border-neutral-200 text-left text-[13px] font-medium text-neutral-500 cursor-not-allowed"
                    >
                      <span>35 credits one time</span>
                    </button>
                  </div>
                </div>

                <div className="pr-select-group">
                  <label className="pr-select-label" htmlFor="free-domains">
                    Domains
                  </label>
                  <div className="relative w-full">
                    <button
                      type="button"
                      disabled
                      className="flex items-center justify-between whitespace-nowrap border bg-neutral-100 outline-none h-[38px] w-full px-[12px] rounded-[10px] border-neutral-200 text-left text-[13px] font-medium text-neutral-500 cursor-not-allowed"
                    >
                      <span>Subdomain only</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pr-btn-wrap my-6">
                <Link className="mfy-btn mfy-btn--secondary w-full justify-center" href="/dashboard">
                  Get started
                </Link>
              </div>

              <div className="pr-features">
                {featuresList.map((feat, idx) => {
                  const isOn = freeActive[idx];
                  return (
                    <div key={feat} className={`pr-feat ${isOn ? 'on' : ''}`}>
                      {isOn ? checkIcon : dashIcon}
                      <span>{feat}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Starter Plan */}
            <div className="pr-card">
              <p className="pr-name">Starter Plan</p>
              <p className="pr-desc">Build projects that convert and scale.</p>
              <div className="pr-price">
                <span className="pr-price-amt">${billedYearly ? '20' : '25'}</span>
                <span className="pr-price-per">/month</span>
              </div>

              <label className="pr-billing cursor-pointer" onClick={() => setBilledYearly(!billedYearly)}>
                <button
                  type="button"
                  role="switch"
                  aria-checked={billedYearly}
                  className={`inline-flex cursor-pointer items-center outline-none relative h-[18px] w-[32px] flex-none rounded-[999px] transition-colors duration-200 ${
                    billedYearly ? 'bg-neutral-900' : 'bg-neutral-300'
                  }`}
                >
                  <span
                    className={`block transition-transform absolute left-[2px] top-[2px] h-[14px] w-[14px] rounded-full bg-white duration-200 ${
                      billedYearly ? 'translate-x-[14px]' : 'translate-x-0'
                    }`}
                  />
                </button>
                <span className="pr-billing-label select-none">Billed yearly</span>
              </label>

              <div className="pr-controls">
                <div className="pr-select-group">
                  <label className="pr-select-label" htmlFor="starter-credits">
                    AI credits
                  </label>
                  <div className="relative w-full">
                    <select
                      id="starter-credits"
                      value={starterCredits}
                      onChange={(e) => setStarterCredits(e.target.value)}
                      className="flex items-center justify-between whitespace-nowrap border bg-white outline-none h-[38px] w-full px-[12px] rounded-[10px] border-neutral-200 text-left text-[13px] font-medium text-neutral-900 cursor-pointer hover:bg-neutral-50"
                    >
                      <option value="250 credits/mo">250 credits/mo</option>
                      <option value="500 credits/mo">500 credits/mo (+$15)</option>
                      <option value="1000 credits/mo">1,000 credits/mo (+$35)</option>
                    </select>
                  </div>
                </div>

                <div className="pr-select-group">
                  <label className="pr-select-label" htmlFor="starter-domains">
                    Domains
                  </label>
                  <div className="relative w-full">
                    <select
                      id="starter-domains"
                      value={starterDomains}
                      onChange={(e) => setStarterDomains(e.target.value)}
                      className="flex items-center justify-between whitespace-nowrap border bg-white outline-none h-[38px] w-full px-[12px] rounded-[10px] border-neutral-200 text-left text-[13px] font-medium text-neutral-900 cursor-pointer hover:bg-neutral-50"
                    >
                      <option value="1 domain included">1 domain included</option>
                      <option value="3 domains included">3 domains (+$10)</option>
                      <option value="5 domains included">5 domains (+$20)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pr-btn-wrap my-6">
                <Link className="mfy-btn mfy-btn--primary w-full justify-center" href="/dashboard">
                  Try it now
                </Link>
              </div>

              <div className="pr-features">
                {featuresList.map((feat, idx) => {
                  const isOn = starterActive[idx];
                  return (
                    <div key={feat} className={`pr-feat ${isOn ? 'on' : ''}`}>
                      {isOn ? checkIcon : dashIcon}
                      <span>{feat}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pro Plan */}
            <div className="pr-card">
              <p className="pr-name">Pro Plan</p>
              <p className="pr-desc">Unlock full creativity and powerful features.</p>
              <div className="pr-price">
                <span className="pr-price-amt">${billedYearly ? '40' : '49'}</span>
                <span className="pr-price-per">/month</span>
              </div>

              <label className="pr-billing cursor-pointer" onClick={() => setBilledYearly(!billedYearly)}>
                <button
                  type="button"
                  role="switch"
                  aria-checked={billedYearly}
                  className={`inline-flex cursor-pointer items-center outline-none relative h-[18px] w-[32px] flex-none rounded-[999px] transition-colors duration-200 ${
                    billedYearly ? 'bg-neutral-900' : 'bg-neutral-300'
                  }`}
                >
                  <span
                    className={`block transition-transform absolute left-[2px] top-[2px] h-[14px] w-[14px] rounded-full bg-white duration-200 ${
                      billedYearly ? 'translate-x-[14px]' : 'translate-x-0'
                    }`}
                  />
                </button>
                <span className="pr-billing-label select-none">Billed yearly</span>
              </label>

              <div className="pr-controls">
                <div className="pr-select-group">
                  <label className="pr-select-label" htmlFor="pro-credits">
                    AI credits
                  </label>
                  <div className="relative w-full">
                    <select
                      id="pro-credits"
                      value={proCredits}
                      onChange={(e) => setProCredits(e.target.value)}
                      className="flex items-center justify-between whitespace-nowrap border bg-white outline-none h-[38px] w-full px-[12px] rounded-[10px] border-neutral-200 text-left text-[13px] font-medium text-neutral-900 cursor-pointer hover:bg-neutral-50"
                    >
                      <option value="500 credits/mo">500 credits/mo</option>
                      <option value="1000 credits/mo">1,000 credits/mo (+$25)</option>
                      <option value="2500 credits/mo">2,500 credits/mo (+$60)</option>
                    </select>
                  </div>
                </div>

                <div className="pr-select-group">
                  <label className="pr-select-label" htmlFor="pro-domains">
                    Domains
                  </label>
                  <div className="relative w-full">
                    <select
                      id="pro-domains"
                      value={proDomains}
                      onChange={(e) => setProDomains(e.target.value)}
                      className="flex items-center justify-between whitespace-nowrap border bg-white outline-none h-[38px] w-full px-[12px] rounded-[10px] border-neutral-200 text-left text-[13px] font-medium text-neutral-900 cursor-pointer hover:bg-neutral-50"
                    >
                      <option value="3 domains included">3 domains included</option>
                      <option value="5 domains included">5 domains (+$10)</option>
                      <option value="10 domains included">10 domains (+$25)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pr-btn-wrap my-6">
                <Link className="mfy-btn mfy-btn--primary w-full justify-center" href="/dashboard">
                  Try it now
                </Link>
              </div>

              <div className="pr-features">
                {featuresList.map((feat, idx) => {
                  const isOn = proActive[idx];
                  return (
                    <div key={feat} className={`pr-feat ${isOn ? 'on' : ''}`}>
                      {isOn ? checkIcon : dashIcon}
                      <span>{feat}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Scale Plan Section */}
        <section className="pr-ent">
          <div className="pr-ent-card">
            <div>
              <h2>Enterprise Scale Plan</h2>
              <p>
                PixartualAI Scale is built for teams that have a great site and want to scale without hiring designers and developers for every page. It includes everything in the Free, Starter, and Pro plans — plus much more, tailored to scale your team.
              </p>
            </div>
            <Link className="mfy-btn mfy-btn--secondary" href="/enterprise-teams">
              Learn more
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pr-faq">
          <div className="pr-faq-head">
            <h2>Billing &amp; plans</h2>
          </div>
          <MfyFaqAccordion items={faqs} />
        </section>

        {/* CTA banner */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
