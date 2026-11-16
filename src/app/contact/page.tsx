'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PixartualCta } from '@/components/landing/PixartualCta';
import { PaperPlaneTilt, CheckCircle, ChatCircleDots } from '@phosphor-icons/react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Product Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const topics = [
    'Product Inquiry',
    'Enterprise & Scale',
    'Webflow Migration',
    'Agency Partnership',
    'Support & Help',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-neutral-900 dark:text-neutral-100 selection:bg-orange-500 selection:text-white transition-colors">
      <Navbar />

      <main className="flex-1">
        {/* Contact Hero & Form */}
        <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/50 via-white to-white dark:from-neutral-900/40 dark:via-[#0a0a0c] dark:to-[#0a0a0c] px-5 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="mx-auto max-w-[800px]">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 dark:border-orange-900/60 bg-orange-50/80 dark:bg-orange-950/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                <ChatCircleDots size={14} weight="fill" />
                Contact PixartualAI
              </div>
              <h1 className="text-[clamp(32px,5vw,56px)] font-bold tracking-tight text-neutral-900 dark:text-white font-['Neutralsans']">
                Let&rsquo;s build faster, smarter sites together
              </h1>
              <p className="mx-auto mt-4 max-w-[560px] text-base md:text-lg text-neutral-600 dark:text-neutral-400">
                Have questions about custom plans, migrations, or technical architecture? Send our team a note and we&rsquo;ll respond within 24 hours.
              </p>
            </div>

            <div className="mt-12 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121215] p-6 sm:p-10 shadow-lg dark:shadow-2xl transition-colors">
              {submitted ? (
                <div className="py-12 text-center">
                  <CheckCircle size={56} className="mx-auto text-emerald-500 mb-4" weight="fill" />
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-['Neutralsans']">
                    Thank you, {name}!
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    We&rsquo;ve received your message regarding &ldquo;{topic}&rdquo; and will get back to {email} shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="mt-6 px-btn px-btn--outline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                      Topic
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTopic(t)}
                          className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                            topic === t
                              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 shadow-sm'
                              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700/80 bg-white dark:bg-[#18181b] px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none transition-all focus:border-[#fc8c04] focus:ring-2 focus:ring-[#fc8c04]/20 shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@company.com"
                        className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700/80 bg-white dark:bg-[#18181b] px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none transition-all focus:border-[#fc8c04] focus:ring-2 focus:ring-[#fc8c04]/20 shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about what you want to build or your team's requirements..."
                      className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700/80 bg-white dark:bg-[#18181b] px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none transition-all focus:border-[#fc8c04] focus:ring-2 focus:ring-[#fc8c04]/20 shadow-xs resize-none"
                    />
                  </div>

                  <button type="submit" className="px-btn px-btn--primary w-full !py-3.5 !text-base">
                    Send Message <PaperPlaneTilt size={16} weight="bold" />
                  </button>
                </form>
              )}
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
