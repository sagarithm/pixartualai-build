'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { MfyFaqAccordion } from '@/components/landing/MfyFaqAccordion';

export default function FaqsPage() {
  const generalFaqs = [
    {
      q: 'What is PixartualAI?',
      a: 'PixartualAI is an AI website and web app platform. You describe what you want and PixartualAI generates a polished, responsive site you can refine by chat, connect to dynamic tools, publish, and keep improving. It is a full platform, not a one-off code generator, and it does not depend on any other builder.',
    },
    {
      q: 'What can I build with PixartualAI?',
      a: 'You can build landing pages, multi-page company websites, customer portals, interactive calculators, directories, waitlists, and full internal tools. If you have an existing Webflow site, you can also import and rebuild it 1:1 in PixartualAI.',
    },
    {
      q: 'How does PixartualAI compare to Framer, Webflow, or Lovable?',
      a: 'Unlike Framer and Webflow, you do not start with a blank canvas or manage complicated CSS box models. Unlike raw AI code tools like Lovable or v0, PixartualAI gives you a direct visual drag-and-drop studio with curated typography, custom domain hosting, and production reliability.',
    },
    {
      q: 'Do I need design or coding skills to use PixartualAI?',
      a: 'None at all. You can prompt in plain English, and our studio assistant will design layouts with proper spacing, neutral sans typography, and accessible color contrasts automatically.',
    },
  ];

  const buildingFaqs = [
    {
      q: 'Can I customize the generated design visually?',
      a: 'Yes. Every element on the canvas can be clicked, edited, recolored, resized, and reordered. You can also converse with the AI copilot to request broader changes like "Make the hero warmer" or "Add a 3-tier pricing table".',
    },
    {
      q: 'Does PixartualAI generate mobile and tablet versions?',
      a: 'Yes. All generated components and templates are intrinsically responsive across mobile, tablet, and desktop viewports.',
    },
    {
      q: 'Can I add interactive calculators or dynamic state?',
      a: 'Yes. PixartualAI features a built-in interactive widget engine supporting real-time calculations, ROI estimators, dynamic search filtering, and multi-step forms.',
    },
  ];

  const hostingFaqs = [
    {
      q: 'Where are PixartualAI sites hosted?',
      a: 'All sites are served via our global edge distribution network with edge caching, automated SSL encryption, and sub-300ms time to first byte across 200+ worldwide PoPs.',
    },
    {
      q: 'Can I connect a custom domain?',
      a: 'Yes. All plans support custom domains (e.g. yourbrand.com) with automatic wildcard SSL certificates and automated renewal.',
    },
    {
      q: 'Can I export clean code to self-host?',
      a: 'Yes. You can export complete, standard Next.js / React and Tailwind CSS source code anytime without proprietary runtime dependencies.',
    },
  ];

  const billingFaqs = [
    {
      q: 'Is there a free trial?',
      a: 'Yes. You can start creating and experimenting with PixartualAI completely free without entering a credit card.',
    },
    {
      q: 'Can I cancel or switch plans at any time?',
      a: 'Yes, all subscriptions are flexible. You can upgrade, downgrade, or cancel at any time directly from your workspace billing dashboard.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="fq-main flex-1">
        {/* Header */}
        <header className="fq-hero">
          <h1 className="font-['Neutralsans']">Frequently asked questions</h1>
          <p>
            Everything you need to know about PixartualAI. Can’t find an answer? Start a chat in Studio and we’ll help.
          </p>
        </header>

        {/* Categories of FAQs */}
        <section className="fq-wrap">
          <div className="fq-group">
            <h2 className="fq-cat font-['Neutralsans']">General</h2>
            <MfyFaqAccordion items={generalFaqs} />
          </div>

          <div className="fq-group">
            <h2 className="fq-cat font-['Neutralsans']">Building & Customization</h2>
            <MfyFaqAccordion items={buildingFaqs} />
          </div>

          <div className="fq-group">
            <h2 className="fq-cat font-['Neutralsans']">Hosting, Edge & Domains</h2>
            <MfyFaqAccordion items={hostingFaqs} />
          </div>

          <div className="fq-group">
            <h2 className="fq-cat font-['Neutralsans']">Plans & Billing</h2>
            <MfyFaqAccordion items={billingFaqs} />
          </div>
        </section>

        {/* Bottom CTA */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
