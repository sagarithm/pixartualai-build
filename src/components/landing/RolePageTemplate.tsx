'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { ArrowRight, Check, Sparkle, Icon } from '@phosphor-icons/react';

interface RoleBenefit {
  title: string;
  desc: string;
}

interface RolePageProps {
  badge: string;
  h1: string;
  subtitle: string;
  previewImage: string;
  benefitsTitle: string;
  benefits: RoleBenefit[];
  bulletPoints: string[];
  templateCategory?: string;
}

export const RolePageTemplate: React.FC<RolePageProps> = ({
  badge,
  h1,
  subtitle,
  previewImage,
  benefitsTitle,
  benefits,
  bulletPoints,
  templateCategory,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center px-5 max-w-[1240px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-neutral-200 bg-stone-50 text-neutral-700 mb-6">
            <Sparkle size={14} className="text-[#fc8c04]" />
            <span>PixartualAI for {badge}</span>
          </div>

          <h1 className="text-[clamp(36px,6vw,56px)] font-medium leading-[1.15] text-neutral-900 font-['Neutralsans'] max-w-[900px] mx-auto">
            {h1}
          </h1>
          <p className="mt-4 max-w-[620px] mx-auto text-[clamp(1rem,1.2vw,1.12rem)] leading-relaxed text-gray-500">
            {subtitle}
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/dashboard" className="mfy-btn mfy-btn--primary">
              Start building for free <ArrowRight size={14} />
            </Link>
            {templateCategory && (
              <Link href={`/templates?category=${templateCategory}`} className="mfy-btn mfy-btn--secondary">
                View {badge} templates
              </Link>
            )}
          </div>

          {/* Large Preview Graphic */}
          <div className="mt-14 max-w-[1000px] mx-auto rounded-[24px] overflow-hidden border border-neutral-200 shadow-2xl bg-stone-50">
            <img
              src={previewImage}
              alt={h1}
              loading="lazy"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </section>

        {/* Value Proposition Grid */}
        <section className="py-16 px-5 max-w-[1100px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium font-['Neutralsans'] text-center mb-12">
            {benefitsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-7 rounded-[22px] border border-neutral-200 bg-stone-50">
                <span className="font-mono text-xl font-bold text-neutral-400 mb-3 block">0{i + 1}</span>
                <h3 className="text-lg font-medium text-neutral-900 font-['Neutralsans'] mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-[24px] border border-neutral-200 bg-white grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bulletPoints.map((pt, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-neutral-700">
                <Check size={16} weight="bold" className="text-[#fc8c04] shrink-0" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </section>

        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
};
