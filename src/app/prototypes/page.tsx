'use client';

import React from 'react';
import { RolePageTemplate } from '@/components/landing/RolePageTemplate';
import { CursorClick, Lightning, Sparkle, DeviceMobile } from '@phosphor-icons/react';

export default function PrototypesPage() {
  return (
    <RolePageTemplate
      roleSlug="prototypes"
      heroTitle="Build a real prototype, not a clickable pic"
      heroDesc="A picture cannot tell you if it works. Build functional, stateful web prototypes with real inputs, dynamic calculations, and responsive layouts in minutes."
      heroImage="/images/personas/product-managers-prototypes.webp"
      heroImageAlt="Interactive prototype running on desktop and mobile in PixartualAI"
      features={[
        {
          title: 'A picture cannot tell you if it works',
          tagline: 'Static Figma artboards miss real edge-case behavior.',
          description:
            'Clickable mockups fail when users want to type their own numbers, search for real records, or test responsive navigation on their phone. PixartualAI builds real software that responds to inputs immediately.',
          imageSrc: '/images/personas/product-managers-validate.webp',
          reverse: false,
        },
        {
          title: 'Test complex logic and interactive calculations',
          tagline: 'Dynamic formulas, calculators, and filter state.',
          description:
            'Test mortgage quote algorithms, SaaS pricing matrices, and loan calculators with live mathematical formulas that compute instantly as the user moves sliders.',
          imageSrc: '/images/personas/founders-look-funded.webp',
          reverse: true,
        },
        {
          title: 'Share responsive URLs with one click',
          tagline: 'No software installation or design licenses required.',
          description:
            'Send a lightweight URL that opens in 300ms on any mobile phone, tablet, or conference room screen so stakeholders can experience the product first-hand.',
          imageSrc: '/images/personas/founders-launch-faster.webp',
          reverse: false,
        },
        {
          title: 'Export production code when validated',
          tagline: 'From prototype to production repository without rewriting.',
          description:
            'Once your prototype is approved, export clean Next.js/React and Tailwind CSS components so your engineers don’t have to rebuild the UI from scratch.',
          imageSrc: '/images/personas/founders-grow-with-you.webp',
          reverse: true,
        },
      ]}
      flameTitle="Next-generation prototyping for modern builders"
      flameDesc="Everything you need to turn speculative concepts into convincing interactive software."
      flameCards={[
        {
          title: 'Real Interactive State',
          desc: 'Inputs that actually store values, recalculate formulas, and navigate between states.',
          icon: <CursorClick size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Instant Multi-Device Testing',
          desc: 'Test touch targets and mobile viewport scaling directly on your phone.',
          icon: <DeviceMobile size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Speed of Thought Iteration',
          desc: 'Modify copy, layout, and visual geometry in seconds via conversational natural language.',
          icon: <Lightning size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Exportable Code Artifacts',
          desc: 'Hand engineers standard React components with 100% type safety and zero legacy bloat.',
          icon: <Sparkle size={28} weight="duotone" className="text-orange-500" />,
        },
      ]}
      faqTitle="Prototype questions, answered"
      faqDesc="How teams use PixartualAI to prototype products 10x faster."
      faqs={[
        {
          q: 'Can user research participants interact with prototypes on their own computers?',
          a: 'Yes. Prototypes are hosted on public edge URLs that anyone can open in their browser without an account or plugin.',
        },
        {
          q: 'Can I connect a prototype to live data?',
          a: 'Yes. Connect to Airtable, Supabase, Google Sheets, or custom REST endpoints.',
        },
      ]}
    />
  );
}
