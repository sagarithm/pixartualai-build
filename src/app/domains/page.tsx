'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PixartualCta } from '@/components/landing/PixartualCta';
import { MfyFaqAccordion } from '@/components/landing/MfyFaqAccordion';
import { Globe, MagnifyingGlass, Check, ShieldCheck, Lightning, Sparkle } from '@phosphor-icons/react';

export default function DomainsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState(false);

  const extensions = [
    { tld: '.com', price: '$12/yr', desc: 'The gold standard for any commercial business worldwide.', badge: 'Most Popular' },
    { tld: '.ai', price: '$65/yr', desc: 'The definitive top-level domain for AI startups and tech pioneers.', badge: 'Trending' },
    { tld: '.io', price: '$38/yr', desc: 'Beloved by software engineers, developer tools, and SaaS products.' },
    { tld: '.app', price: '$14/yr', desc: 'Built-in HTTPS enforcement. Perfect for mobile and web applications.' },
    { tld: '.co', price: '$24/yr', desc: 'Short, modern, and memorable alternative to .com for venture brands.' },
    { tld: '.org', price: '$13/yr', desc: 'Trusted by communities, non-profits, open source, and institutions.' },
  ];

  const domainFaqs = [
    {
      q: 'Can I connect a domain I already own on GoDaddy or Namecheap?',
      a: 'Yes. You can connect existing domains from any registrar to PixartualAI in under 2 minutes. We provide automatic SSL certificates and clear DNS instructions.',
    },
    {
      q: 'Do PixartualAI domains include free SSL certificates?',
      a: 'Yes, every custom domain connected to PixartualAI automatically provisions free wildcard SSL via Let’s Encrypt with auto-renewal.',
    },
    {
      q: 'Can I transfer my domain away if I ever leave?',
      a: 'Absolutely. You maintain 100% legal ownership of your domain. You can unlock and transfer it to any registrar at any time.',
    },
    {
      q: 'Is WHOIS privacy protection included for free?',
      a: 'Yes, all domain registrations through PixartualAI include complimentary WHOIS privacy protection to prevent your personal contact details from being harvested.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Section 0: Authentic Domains Hero with hero-bg.jpg */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div aria-hidden="true" className="pointer-events-none absolute top-0 inset-x-3 bottom-3 z-0 overflow-hidden rounded-b-[24px] md:inset-x-5 md:bottom-5 md:rounded-b-[48px] xl:inset-x-8 xl:bottom-8 2xl:inset-x-[50px] 2xl:bottom-[50px] 2xl:rounded-b-[64px]">
            <img alt="" className="h-full w-full object-cover object-bottom" src="/images/kit/hero-bg.jpg" />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col gap-12 px-5 md:gap-[60px] md:px-[50px]">
            <div className="flex max-w-[800px] flex-col gap-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                <Globe size={16} weight="bold" />
                Domains & DNS
              </span>
              <h1 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-['Neutralsans']">
                Find the right domain for your next website
              </h1>
              <p className="max-w-[620px] text-lg leading-relaxed text-neutral-600">
                Search, register, and connect custom domains directly inside PixartualAI with automated SSL and edge routing.
              </p>
            </div>

            {/* Domain Search Box */}
            <div className="max-w-[720px] w-full">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchTerm.trim()) setSearched(true);
                }}
                className="flex flex-col sm:flex-row items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-neutral-200"
              >
                <div className="flex flex-1 items-center gap-3 px-3 w-full">
                  <MagnifyingGlass size={20} className="text-neutral-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setSearched(false);
                    }}
                    placeholder="Search your ideal domain name (e.g. AcmeStudio)..."
                    className="w-full text-base sm:text-lg outline-none text-neutral-900 placeholder:text-neutral-400"
                  />
                </div>
                <button type="submit" className="mfy-btn mfy-btn--primary w-full sm:w-auto !py-3">
                  Search Domain
                </button>
              </form>

              {searched && (
                <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check size={18} className="text-emerald-600" weight="bold" />
                    <span className="font-semibold text-emerald-950">
                      {searchTerm.toLowerCase().replace(/[^a-z0-9-]/g, '')}.com is available!
                    </span>
                  </div>
                  <Link href="/dashboard" className="text-xs font-bold text-emerald-700 underline">
                    Claim in Studio →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 1: Explore Domain Extensions */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div className="mx-auto w-full max-w-[1240px] px-5 md:px-[50px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3.5">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  Explore domain extensions
                </h2>
                <p className="max-w-[682px] text-[15px] leading-relaxed text-neutral-600">
                  Each extension suits a different kind of website. Open one to see what it is for, who can register it, and what it costs.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {extensions.map((ext) => (
                  <div
                    key={ext.tld}
                    className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:border-orange-500 hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-neutral-900 font-['Neutralsans']">
                          {ext.tld}
                        </span>
                        <div className="flex items-center gap-2">
                          {ext.badge && (
                            <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-600">
                              {ext.badge}
                            </span>
                          )}
                          <span className="font-semibold text-neutral-900">{ext.price}</span>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                        {ext.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                      <span>Free SSL & Privacy</span>
                      <span className="font-semibold text-orange-600">Register →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Everything you need to launch */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div className="mx-auto w-full max-w-[1240px] px-5 md:px-[50px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  Everything you need to launch a website
                </h2>
                <p className="text-[15px] leading-relaxed text-neutral-600">
                  Your domain, your site, and its hosting in one place.
                </p>
              </div>

              <div className="grid grid-cols-1 items-start gap-[30px] sm:grid-cols-2 md:grid-cols-3">
                <article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 flex flex-col justify-between min-h-[220px]">
                  <Lightning size={32} className="text-orange-500 mb-4" weight="duotone" />
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 font-['Neutralsans']">Instant DNS Configuration</h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">One-click domain pairing. Zero manual A record copying or confusing CNAME propagates.</p>
                  </div>
                </article>

                <article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 flex flex-col justify-between min-h-[220px]">
                  <ShieldCheck size={32} className="text-orange-500 mb-4" weight="duotone" />
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 font-['Neutralsans']">Free Automated SSL</h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">End-to-end encryption with automated 90-day renewals and HTTP/3 support.</p>
                  </div>
                </article>

                <article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 flex flex-col justify-between min-h-[220px]">
                  <Globe size={32} className="text-orange-500 mb-4" weight="duotone" />
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 font-['Neutralsans']">Global Anycast Routing</h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">Requests route to the closest geographical server node in under 30 milliseconds.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Domain FAQs */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div className="mx-auto w-full max-w-[860px] px-5 md:px-[50px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3.5 text-center">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  Frequently asked questions
                </h2>
                <p className="text-[15px] leading-relaxed text-neutral-600">
                  Got questions about domain setup, transferring, or renewals?
                </p>
              </div>

              <MfyFaqAccordion items={domainFaqs} />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <PixartualCta />
      </main>

      <Footer />
    </div>
  );
}
