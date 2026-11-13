'use client';

import React from 'react';
import { RolePageTemplate } from '@/components/landing/RolePageTemplate';
import { RocketLaunch, Browser, Database, Lightning } from '@phosphor-icons/react';

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
            "People decide whether to trust your company in moments. A polished, intentional website shows you're serious about what you do. PixartualAI creates layouts with thoughtful hierarchy, typography, and spacing that help your brand feel established from day one.",
          imageSrc: '/images/personas/founders-trust.webp',
          reverse: true,
        },
        {
          title: 'Launch faster, iterate smarter',
          tagline: 'Go live without the usual bottlenecks.',
          description:
            'Great ideas lose momentum waiting on design revisions and development cycles. PixartualAI helps you publish a professional website in minutes, so you can validate your product, gather feedback, and improve as your business grows.',
          imageSrc: '/images/personas/founders-launch-faster.webp',
          reverse: false,
        },
        {
          title: 'Designed to grow with you',
          tagline: 'A website that scales as your business does.',
          description:
            "Whether you're announcing a new product, raising funding, or expanding your team, your website should evolve effortlessly. PixartualAI gives you a flexible foundation that's easy to update, keeping your online presence as polished as your next milestone.",
          imageSrc: '/images/personas/founders-grow-with-you.webp',
          reverse: true,
        },
      ]}
      flameTitle="Everything you need to launch, from one prompt"
      flameDesc="PixartualAI covers the whole first mile: the site, the product, the signups, and the changes you make right after you learn."
      flameCards={[
        {
          title: 'A launch-ready site',
          desc: 'Describe your product and get a homepage, pricing, and about pages that are ready to publish, not a blank template to fill in.',
          icon: <RocketLaunch size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'A real MVP, not a mockup',
          desc: 'Build a working app or dashboard so you can put an actual product in front of users and learn from how they use it.',
          icon: <Browser size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Signups that go somewhere',
          desc: 'Waitlists, forms, and app data save to a database you own, so every early lead is yours to export and build on.',
          icon: <Database size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Change it the moment you learn',
          desc: 'Rewrite the pitch, add a page, or test a new angle in minutes. No ticket, no dev queue, no waiting on a release.',
          icon: <Lightning size={28} weight="duotone" className="text-orange-500" />,
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
          a: 'No. You describe what you want in plain language and PixartualAI generates it. You edit everything visually, and the output is built to look professional without hiring a designer.',
        },
        {
          q: 'How fast can I get something live?',
          a: 'Most founders publish a first page within minutes. A fuller site or a working MVP takes longer to refine, but you are editing a real build the whole time instead of waiting on a handoff.',
        },
        {
          q: 'Can I collect signups and store data?',
          a: 'Yes. Forms, waitlists, and app data save to a database that belongs to your project, so you own the signups and can export them or build features on top.',
        },
        {
          q: 'Can I use my own brand and domain?',
          a: 'Yes. Set your colors, fonts, and logo, then publish to a custom domain. Your site stays on brand as you add pages and features.',
        },
        {
          q: 'What happens as the company grows?',
          a: 'You keep building in the same place. Add pages, ship product features, and invite teammates when you hire, without migrating to a different tool.',
        },
      ]}
    />
  );
}
