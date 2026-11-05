'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { Check, Sparkle } from '@phosphor-icons/react';

export default function WebflowTransferPage() {
  const [siteUrl, setSiteUrl] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const points = [
    '1:1 visual fidelity rebuild',
    'Preserve all page URLs and routes',
    'Identical CMS schema & content model',
    'Class structure and styling preserved',
    'Unlock natural language AI visual editing',
    'Zero SEO loss or redirect friction',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!siteUrl.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center px-5 max-w-[1000px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-neutral-200 bg-stone-50 text-neutral-700 mb-6">
            <Sparkle size={14} className="text-[#fc8c04]" />
            <span>Webflow to PixartualAI Migration</span>
          </div>

          <h1 className="text-[clamp(36px,6vw,56px)] font-medium leading-[1.15] text-neutral-900 font-['Neutralsans']">
            Keep your site. Upgrade how you work on it.
          </h1>
          <p className="mt-4 max-w-[620px] mx-auto text-[clamp(1rem,1.2vw,1.12rem)] leading-relaxed text-gray-500">
            Have a Webflow site you do not want to redesign? Join the Webflow to PixartualAI waitlist. We will rebuild selected sites 1:1 inside PixartualAI, preserving the design, pages, CMS structure, and content model, so your team can continue with AI.
          </p>

          {/* Video Demonstration */}
          <div className="relative mx-auto mt-11 flex w-full items-center justify-center pb-7 pt-5">
            <video
              autoPlay
              className="block h-auto w-full max-w-[760px] rounded-[20px] shadow-2xl border border-neutral-200"
              loop
              muted
              playsInline
              poster="/images/webflow-to-modulify.webp"
              preload="metadata"
              src="/videos/webflow-to-modulify.webm"
            />
          </div>

          {/* Waitlist Form */}
          <div className="mt-8 max-w-[560px] mx-auto bg-stone-50 border border-neutral-200 rounded-[22px] p-6 sm:p-8 text-left shadow-sm">
            {submitted ? (
              <div className="text-center py-6">
                <div className="size-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <Check size={24} weight="bold" />
                </div>
                <h3 className="text-xl font-medium text-neutral-900 font-['Neutralsans']">You are on the list!</h3>
                <p className="text-sm text-neutral-500 mt-2">
                  Our migration engineering team will review {siteUrl} and contact {email} within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-medium text-neutral-900 font-['Neutralsans']">
                  Apply for 1:1 Webflow Migration
                </h3>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                    Your Webflow Site URL
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="https://yoursite.webflow.io or yourdomain.com"
                    value={siteUrl}
                    onChange={(e) => setSiteUrl(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-gray-400 focus:outline-none focus:border-neutral-950"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-gray-400 focus:outline-none focus:border-neutral-950"
                  />
                </div>

                <button type="submit" className="mfy-btn mfy-btn--primary w-full !py-3">
                  Join the waitlist
                </button>
              </form>
            )}
          </div>

          {/* Checklist */}
          <ul aria-label="What carries over" className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-12 max-w-[700px] mx-auto">
            {points.map((pt) => (
              <li key={pt} className="inline-flex items-center gap-[7px] whitespace-nowrap text-[0.88rem] font-medium text-gray-600">
                <svg
                  aria-hidden="true"
                  className="size-3.5 flex-none text-[#fc8c04]"
                  fill="currentColor"
                  height="1em"
                  viewBox="0 0 256 256"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                </svg>
                {pt}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA Banner */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
