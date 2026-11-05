'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { MagnifyingGlass, Check, Globe, Sparkle } from '@phosphor-icons/react';

export default function DomainsPage() {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);

  const extensions = [
    { tld: '.com', price: '$12/yr', popular: true },
    { tld: '.ai', price: '$65/yr', popular: true },
    { tld: '.io', price: '$35/yr', popular: true },
    { tld: '.co', price: '$24/yr', popular: false },
    { tld: '.app', price: '$18/yr', popular: false },
    { tld: '.dev', price: '$15/yr', popular: false },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearched(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center px-5 max-w-[1240px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-neutral-200 bg-stone-50 text-neutral-700 mb-6">
            <Globe size={14} className="text-[#fc8c04]" />
            <span>Instant Custom Domain Search</span>
          </div>

          <h1 className="text-[clamp(36px,6vw,56px)] font-medium leading-[1.15] text-neutral-900 font-['Neutralsans']">
            Find the right domain for your next website
          </h1>
          <p className="mt-4 max-w-[580px] mx-auto text-[clamp(1rem,1.2vw,1.12rem)] leading-relaxed text-gray-500">
            Search, connect, and point your custom domain directly to your PixartualAI project with 1-click automated SSL and global edge DNS.
          </p>

          {/* Domain Search Box */}
          <form onSubmit={handleSearch} className="mt-10 max-w-[640px] mx-auto">
            <div className="flex items-center gap-2 p-2 rounded-2xl border-2 border-neutral-200 bg-white shadow-lg focus-within:border-neutral-950 transition-colors">
              <MagnifyingGlass size={20} className="text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Find your domain (e.g. myproduct.ai)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-0 px-2 text-sm md:text-base text-neutral-900 placeholder:text-gray-400 focus:outline-none"
              />
              <button type="submit" className="mfy-btn mfy-btn--primary !py-2.5 !px-6 !text-sm">
                Search
              </button>
            </div>
          </form>

          {/* Search Result */}
          {searched && (
            <div className="mt-8 max-w-[640px] mx-auto p-4 rounded-2xl bg-stone-50 border border-neutral-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Check size={16} weight="bold" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-neutral-900">{query.includes('.') ? query : `${query}.com`}</div>
                  <div className="text-xs text-emerald-600 font-medium">Available for instant connection</div>
                </div>
              </div>
              <Link href="/dashboard" className="mfy-btn mfy-btn--primary !py-1.5 !px-4 !text-xs">
                Connect in Studio
              </Link>
            </div>
          )}

          {/* Popular Extensions Grid */}
          <div className="mt-16 text-left max-w-[800px] mx-auto">
            <h2 className="text-xl font-medium font-['Neutralsans'] mb-4 text-center">
              Explore domain extensions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {extensions.map((ext) => (
                <div key={ext.tld} className="p-4 rounded-xl border border-neutral-200 bg-stone-50 flex items-center justify-between">
                  <div>
                    <span className="font-mono font-bold text-neutral-900 text-lg">{ext.tld}</span>
                    {ext.popular && (
                      <span className="ml-2 text-[10px] uppercase font-bold text-[#fc8c04] bg-orange-50 px-1.5 py-0.5 rounded">
                        Hot
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-neutral-500 font-mono">{ext.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
