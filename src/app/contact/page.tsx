'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { Check, Envelope, ChatCircleText } from '@phosphor-icons/react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center px-5 max-w-[1240px] mx-auto">
          <h1 className="text-[clamp(36px,6vw,56px)] font-medium leading-[1.15] text-neutral-900 font-['Neutralsans']">
            Let&apos;s build faster, smarter sites together
          </h1>
          <p className="mt-4 max-w-[580px] mx-auto text-[clamp(1rem,1.2vw,1.12rem)] leading-relaxed text-gray-500">
            Have questions about PixartualAI, need enterprise solutions, or want support with your site? Our product team is here to help.
          </p>

          <div className="mt-12 max-w-[620px] mx-auto text-left bg-stone-50 border border-neutral-200 rounded-[24px] p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <div className="size-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <Check size={24} weight="bold" />
                </div>
                <h3 className="text-xl font-medium font-['Neutralsans']">Message Sent!</h3>
                <p className="text-sm text-neutral-500 mt-2">
                  Thanks for reaching out. We will get back to {formData.email} within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-gray-400 focus:outline-none focus:border-neutral-950"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1.5">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-gray-400 focus:outline-none focus:border-neutral-950"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1.5">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 focus:outline-none focus:border-neutral-950"
                  >
                    <option value="General">General Inquiry</option>
                    <option value="Enterprise">Enterprise & Scale</option>
                    <option value="Webflow">Webflow Migration</option>
                    <option value="Support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you are looking to build…"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-gray-400 focus:outline-none focus:border-neutral-950 resize-none"
                  />
                </div>

                <button type="submit" className="mfy-btn mfy-btn--primary w-full !py-3">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>

        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
