'use client';

import React from 'react';
import { RolePageTemplate } from '@/components/landing/RolePageTemplate';
import { Kanban, Lightning, Sparkle, ChartLineUp } from '@phosphor-icons/react';

export default function ProductManagersPage() {
  return (
    <RolePageTemplate
      roleSlug="product-managers"
      heroTitle="Ship a working prototype"
      heroDesc="Prototypes settle debates that specs start. Build interactive, testable software experiences that customers and leadership can use before committing roadmap sprints."
      heroImage="/images/personas/product-managers-hero-full.webp"
      heroImageAlt="Product Manager testing an interactive prototype in PixartualAI"
      features={[
        {
          title: 'Prototypes settle debates that specs start',
          tagline: 'Skip the 40-page PRD that nobody reads.',
          description:
            'Instead of arguing about user flows in abstract slide decks, hand your stakeholders a working interactive link with live inputs, state transitions, and real data in under an hour.',
          imageSrc: '/images/personas/product-managers-prototypes.webp',
          reverse: false,
        },
        {
          title: 'Validate product hypotheses before building',
          tagline: 'Put real software in front of users on user test calls.',
          description:
            'Watch real users click through your onboarding flow, test your pricing tiers, or try your dashboard search without writing a single line of backend infrastructure.',
          imageSrc: '/images/personas/product-managers-validate.webp',
          reverse: true,
        },
        {
          title: 'Iterate during user research sessions',
          tagline: 'Fix confusion on the fly.',
          description:
            'If three interviewees stumble over a multi-step checkout step, ask your AI copilot to convert it to an accordion or single-page wizard and re-test immediately on the next call.',
          imageSrc: '/images/personas/founders-launch-faster.webp',
          reverse: false,
        },
        {
          title: 'Hand engineers tested, validated UX',
          tagline: 'Reduce engineering rework and scoping drift.',
          description:
            'When engineering starts building the production backend, they can reference a live, working frontend with exact layout tokens and clean React components instead of static screenshots.',
          imageSrc: '/images/personas/founders-grow-with-you.webp',
          reverse: true,
        },
      ]}
      flameTitle="Fast-track discovery, validation, and delivery"
      flameDesc="Everything modern product teams need to de-risk roadmap investments and deliver high-velocity impact."
      flameCards={[
        {
          title: 'Functional Interactive Flows',
          desc: 'Build working state machines with live form validation, calculations, and modal triggers.',
          icon: <Kanban size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Instant Public Share Links',
          desc: 'Generate preview URLs hosted on edge CDN to share with beta testers, execs, and sales teams.',
          icon: <Sparkle size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Telemetry & User Funnel Signals',
          desc: 'Track click rates and completion times directly inside your prototype to quantify usability.',
          icon: <ChartLineUp size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Clean Code Export for Devs',
          desc: 'Provide engineers with clean React/Tailwind code to jumpstart their production frontend repository.',
          icon: <Lightning size={28} weight="duotone" className="text-orange-500" />,
        },
      ]}
      faqTitle="Product Manager questions, answered"
      faqDesc="What PMs ask before using PixartualAI for concept validation and internal tools."
      faqs={[
        {
          q: 'Can prototypes handle user input and real state?',
          a: 'Yes. Prototypes built in PixartualAI are genuine web applications that store input state, calculate values, and submit data.',
        },
        {
          q: 'Can I connect a prototype to a real database like Supabase or Airtable?',
          a: 'Yes. With our native connectors, your prototype can read and write live data to Airtable, Supabase, Google Sheets, or any REST API.',
        },
        {
          q: 'Does it support password protection for unreleased features?',
          a: 'Yes. You can protect any preview link with workspace permissions or a single-use passcode.',
        },
      ]}
    />
  );
}
