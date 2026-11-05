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
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div aria-hidden="true" className="pointer-events-none absolute top-0 inset-x-3 bottom-3 z-0 overflow-hidden rounded-b-[24px] md:inset-x-5 md:bottom-5 md:rounded-b-[48px] xl:inset-x-8 xl:bottom-8 2xl:inset-x-[50px] 2xl:bottom-[50px] 2xl:rounded-b-[64px]">
            <img alt="" className="h-full w-full object-cover object-bottom" src="/images/kit/hero-bg.jpg" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1000px] text-center px-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-orange-200 bg-orange-50/80 text-orange-600 mb-6">
              <Sparkle size={14} className="text-[#fc8c04]" />
              <span>Webflow to PixartualAI Migration</span>
            </div>

            <h1 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-['Neutralsans']">
              Keep your site. Upgrade how you work on it.
            </h1>
            <p className="mx-auto mt-4 max-w-[620px] text-lg leading-relaxed text-neutral-600">
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
          </div>
        </section>

        {/* CTA Banner */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}

