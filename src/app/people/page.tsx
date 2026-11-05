'use client';

import React from 'react';
import { RolePageTemplate } from '@/components/landing/RolePageTemplate';
import { Users, Heart, Lightning, Sparkle } from '@phosphor-icons/react';

export default function PeoplePage() {
  return (
    <RolePageTemplate
      roleSlug="people"
      heroTitle="HR tools your team likes"
      heroDesc="The tools people use daily should feel modern. Build custom employee onboarding portals, team directories, and culture hubs in hours, not months."
      heroImage="/images/personas/founders-hero.webp"
      heroImageAlt="People Ops lead managing employee portal in PixartualAI"
      features={[
        {
          title: 'The tools people use daily should feel modern',
          tagline: 'Replace clunky legacy HR portals with intuitive craft.',
          description:
            'Employees dread interacting with ancient enterprise intranets. PixartualAI lets People teams create beautiful, branded onboarding experiences that excite new hires on day one.',
          imageSrc: '/images/personas/founders-look-funded.webp',
          reverse: false,
        },
        {
          title: 'Interactive onboarding checklists',
          tagline: 'Track paperwork, hardware setup, and introductory meetups.',
          description:
            'Give every hire a personalized dashboard showing their team members, benefits enrollment links, and 30-60-90 day milestones.',
          imageSrc: '/images/personas/founders-launch-faster.webp',
          reverse: true,
        },
        {
          title: 'Searchable team & skill directories',
          tagline: 'Help distributed teams connect across time zones.',
          description:
            'Search colleagues by timezone, language, project expertise, or hobbies with instant filters and Slack direct-message buttons.',
          imageSrc: '/images/personas/founders-trust.webp',
          reverse: false,
        },
        {
          title: 'Anonymous culture & pulse surveys',
          tagline: 'Gather genuine sentiment without third-party subscriptions.',
          description:
            'Create interactive feedback forms with rating sliders, open feedback boxes, and aggregated team insights dashboards.',
          imageSrc: '/images/personas/founders-grow-with-you.webp',
          reverse: true,
        },
      ]}
      flameTitle="Empower your people team with custom culture tools"
      flameDesc="Everything modern HR and people leaders need to build memorable employee experiences."
      flameCards={[
        {
          title: 'Delightful Onboarding',
          desc: 'Create personalized welcome portals that make new hires feel valued and equipped on day one.',
          icon: <Heart size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Company Knowledge Hubs',
          desc: 'Organize employee handbooks, travel policies, and perks in searchable, mobile-friendly guides.',
          icon: <Users size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Fast Self-Service Updates',
          desc: 'Allow employees to update emergency contacts and personal preferences directly in their portal.',
          icon: <Lightning size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Private & Secure',
          desc: 'Enterprise-grade access controls and encrypted storage for confidential HR records.',
          icon: <Sparkle size={28} weight="duotone" className="text-orange-500" />,
        },
      ]}
      faqTitle="People team questions, answered"
      faqDesc="How HR leaders use PixartualAI for internal culture and team tools."
      faqs={[
        {
          q: 'Can we embed our existing benefits documents and videos?',
          a: 'Yes. You can embed PDFs, YouTube or Loom videos, Google Drive documents, and Notion pages directly into your people hub.',
        },
        {
          q: 'Is it mobile-friendly for remote employees on phones?',
          a: 'Yes, all portals generated in PixartualAI are 100% responsive and look like native apps on iOS and Android.',
        },
      ]}
    />
  );
}
