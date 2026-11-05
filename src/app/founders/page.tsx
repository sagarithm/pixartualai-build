'use client';

import React from 'react';
import { RolePageTemplate } from '@/components/landing/RolePageTemplate';
import { RocketLaunch, ChartLineUp, ShieldCheck, Lightning } from '@phosphor-icons/react';

export default function FoundersPage() {
  return (
    <RolePageTemplate
      roleSlug="founders"
      heroTitle="Get your startup online"
      heroDesc="Describe what you want to build. PixartualAI turns your prompt into a polished, ready-to-launch site or app."
      heroImage="/images/personas/founders-hero.webp"
      heroImageAlt="Founder working with PixartualAI open on a laptop"
      features={[
        {
          title: 'Look funded before you are',
          tagline: 'First impressions decide whether you get the follow-up meeting.',
          description:
            'Investors and early users judge your product in seconds, and a generic template shows. PixartualAI generates sites with real design taste: considered type, spacing, and layout that read as a team, not a weekend project. You get a credible presence without hiring a designer or waiting on a developer.',
          imageSrc: '/images/personas/founders-look-funded.webp',
          reverse: false,
        },
        {
          title: 'Built to earn trust instantly',
          tagline: 'Every detail signals credibility.',
          description:
            'Clear propositions, transparent social proof, and crisp visual hierarchy give prospective customers and angels the confidence to convert without second guessing.',
          imageSrc: '/images/personas/founders-trust.webp',
          reverse: true,
        },
        {
          title: 'Launch faster, iterate smarter',
          tagline: 'Go live without the usual bottlenecks.',
          description:
            'Skip the endless weeks of design reviews and developer backlogs. Prompt what you need, refine via natural language chat, and deploy directly to global edge CDN in seconds.',
          imageSrc: '/images/personas/founders-launch-faster.webp',
          reverse: false,
        },
        {
          title: 'Designed to grow with you',
          tagline: 'A platform that scales as your product does.',
          description:
            'Add customer dashboards, dynamic pricing calculators, waitlist portals, and CMS directories as your startup scales from pre-seed to Series A without rebuilding from scratch.',
          imageSrc: '/images/personas/founders-grow-with-you.webp',
          reverse: true,
        },
      ]}
      flameTitle="Everything you need to launch, from one prompt"
      flameDesc="PixartualAI covers the whole first mile: the site, the product, the signups, and the changes you make right after you learn."
      flameCards={[
        {
          title: 'Instant Production Launch',
          desc: 'Get full responsive layouts, copy, and typography generated in seconds from a single description.',
          icon: <RocketLaunch size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Interactive State & Portals',
          desc: 'Build functional client portals, ROI calculators, and dynamic lead capture without custom backend code.',
          icon: <Lightning size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Zero Code Lock-in',
          desc: 'Export clean React and Tailwind components whenever your team is ready to self-host or integrate custom APIs.',
          icon: <ShieldCheck size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Conversion-Focused Architecture',
          desc: 'Layouts structured around high-converting SaaS principles with clear CTAs, proof badges, and responsive viewports.',
          icon: <ChartLineUp size={28} weight="duotone" className="text-orange-500" />,
        },
      ]}
      faqTitle="Founder questions, answered"
      faqDesc="What early-stage teams ask before they build their first launch in PixartualAI."
      faqs={[
        {
          q: 'Can I build a real product with PixartualAI, or only a website?',
          a: 'Both. PixartualAI builds marketing sites and landing pages, and it builds working apps, dashboards, and internal tools with data and accounts. Founders use it for the launch site and the first version of the product.',
        },
        {
          q: 'Do I need to know how to code or design?',
          a: 'No. PixartualAI turns natural language instructions into production-ready software. You can tweak everything visually or conversationally.',
        },
        {
          q: 'Can I connect my own custom domain?',
          a: 'Yes, all plans support unlimited custom domains with automatic free SSL and global edge routing.',
        },
        {
          q: 'Can I export the code later?',
          a: 'Yes. You can export complete, clean React/Next.js code with Tailwind CSS anytime. You own 100% of your product.',
        },
      ]}
    />
  );
}
