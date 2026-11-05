'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { ShieldCheck, Users, Lightning, Lock, Check } from '@phosphor-icons/react';

export default function EnterpriseTeamsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', teamSize: '10-50' });

  const benefits = [
    {
      title: 'Marketing Autonomy',
      desc: 'Let marketers launch and test landing pages, calculators, and content without blocking developers.',
      icon: Lightning,
    },
    {
      title: 'Design System Governance',
      desc: 'Lock typography, colors, and layout tokens so every AI generation strictly adheres to company guidelines.',
      icon: Users,
    },
    {
      title: 'Enterprise Security & SSO',
      desc: 'SAML SSO, custom role permissions, audit logging, and dedicated VPC hosting options.',
      icon: Lock,
    },
    {
      title: 'Guaranteed 99.99% Uptime',
      desc: 'High-availability global edge delivery with dedicated customer success and 24/7 priority SLA.',
      icon: ShieldCheck,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div aria-hidden="true" className="pointer-events-none absolute top-0 inset-x-3 bottom-3 z-0 overflow-hidden rounded-b-[24px] md:inset-x-5 md:bottom-5 md:rounded-b-[48px] xl:inset-x-8 xl:bottom-8 2xl:inset-x-[50px] 2xl:bottom-[50px] 2xl:rounded-b-[64px]">
            <img alt="" className="h-full w-full object-cover object-bottom" src="/images/kit/hero-bg.jpg" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1000px] text-center px-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-orange-200 bg-orange-50/80 text-orange-600 mb-6">
              <span>PixartualAI for Enterprise & Teams</span>
            </div>

            <h1 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-['Neutralsans']">
              AI website operations for teams that move fast.
            </h1>
            <p className="mx-auto mt-4 max-w-[620px] text-lg leading-relaxed text-neutral-600">
              Enable marketing, design, and engineering teams to build, edit, and ship web apps and digital experiences with speed, autonomy, and security.
            </p>
          </div>
        </section>

        {/* Value Proposition Cards */}
        <section className="pb-16 px-5 max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="p-7 rounded-[22px] border border-neutral-200 bg-stone-50 flex flex-col justify-between">
                  <div>
                    <div className="size-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-950 mb-5 shadow-sm">
                      <Icon size={20} className="text-[#fc8c04]" />
                    </div>
                    <h3 className="text-lg font-medium text-neutral-900 font-['Neutralsans'] mb-2">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Enterprise Inquiry Form */}
        <section className="py-16 px-5 max-w-[800px] mx-auto">
          <div className="bg-neutral-950 text-white rounded-[28px] p-8 sm:p-12 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-medium font-['Neutralsans'] mb-3">
              Talk to our Enterprise Architecture Team
            </h2>
            <p className="text-neutral-400 text-sm mb-8">
              Discuss custom deployments, Webflow migrations, and team training with our product architects.
            </p>

            {submitted ? (
              <div className="text-center py-8">
                <div className="size-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Check size={24} weight="bold" />
                </div>
                <h3 className="text-xl font-medium font-['Neutralsans']">Thank you!</h3>
                <p className="text-sm text-neutral-400 mt-2">
                  Our enterprise team will reach out to {formData.email} within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-800 bg-neutral-900 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-800 bg-neutral-900 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-800 bg-neutral-900 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">Team Size</label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-800 bg-neutral-900 text-sm text-white focus:outline-none focus:border-neutral-500"
                    >
                      <option value="1-10">1-10 employees</option>
                      <option value="10-50">10-50 employees</option>
                      <option value="50-250">50-250 employees</option>
                      <option value="250+">250+ employees</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="mfy-btn mfy-btn--primary !bg-white !text-black hover:!bg-neutral-200 font-semibold w-full !py-3 mt-4">
                  Schedule Demo
                </button>
              </form>
            )}
          </div>
        </section>

        {/* CTA Banner */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}

