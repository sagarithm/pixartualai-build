'use client';

import React from 'react';
import { RolePageTemplate } from '@/components/landing/RolePageTemplate';
import { Presentation, Lightning, Sparkle, ShareNetwork } from '@phosphor-icons/react';

export default function SalesPage() {
  return (
    <RolePageTemplate
      roleSlug="sales"
      heroTitle="Build on-brand demo"
      heroDesc="Show the product, not a slide. Close more enterprise deals by demonstrating customized, interactive software tailored to your prospect's brand and workflow."
      heroImage="/images/personas/sales-hero-raw.webp"
      heroImageAlt="Sales lead presenting a tailored interactive demo in PixartualAI"
      features={[
        {
          title: 'Show the product, not a slide',
          tagline: 'Static slide decks lose enterprise champions.',
          description:
            'When enterprise buyers see their own brand colors, realistic customer data, and relevant industry terminology inside a working portal, conversion rates spike dramatically.',
          imageSrc: '/images/personas/sales-show-product.webp',
          reverse: false,
        },
        {
          title: 'Personalize every demo in 5 minutes',
          tagline: 'Customized client experiences before every discovery call.',
          description:
            'Type "Personalize this client portal for Acme Corp with healthcare billing categories and their brand blue", and PixartualAI re-skins the entire demo in seconds.',
          imageSrc: '/images/personas/sales-personalize.webp',
          reverse: true,
        },
        {
          title: 'Handle prospect objections live',
          tagline: 'Prove feasibility on the call.',
          description:
            'When a buyer asks: "Can it calculate multi-currency tax tiers?", adjust the widget live on screen and watch hesitation turn into a signed agreement.',
          imageSrc: '/images/personas/sales-objections.webp',
          reverse: false,
        },
        {
          title: 'Leave behind an interactive executive link',
          tagline: 'Give champions a tool they can show their CFO.',
          description:
            'Rather than a bulky PDF, send an edge-hosted interactive link with custom ROI calculators that executives can test directly on their phones.',
          imageSrc: '/images/personas/sales-share-link.webp',
          reverse: true,
        },
      ]}
      flameTitle="Equip your sales team to win enterprise deals"
      flameDesc="Everything account executives and solutions engineers need to demonstrate unbeatable value."
      flameCards={[
        {
          title: 'Custom Prospect Demos',
          desc: 'Create personalized demo portals for target accounts in minutes rather than waiting weeks on engineering.',
          icon: <Presentation size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Interactive ROI Estimators',
          desc: 'Embed dynamic ROI calculators that calculate customer payback periods based on their team size and budget.',
          icon: <Lightning size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: '1-Click Edge Share Links',
          desc: 'Send fast, branded links that open immediately on any phone, tablet, or enterprise browser.',
          icon: <ShareNetwork size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Executive Presentation Polish',
          desc: 'Typography and styling that convey enterprise maturity, security, and world-class craft.',
          icon: <Sparkle size={28} weight="duotone" className="text-orange-500" />,
        },
      ]}
      faqTitle="Sales team questions, answered"
      faqDesc="How revenue teams leverage PixartualAI to shorten sales cycles."
      faqs={[
        {
          q: 'Can non-technical sales reps personalize demos?',
          a: 'Yes. Account executives can clone a master demo template and use conversational prompts to inject the prospect’s logo, name, and metrics in 2 minutes.',
        },
        {
          q: 'Can we track when a prospect opens the demo link?',
          a: 'Yes. Workspace analytics notify you in real-time when the executive or buying committee accesses the interactive leave-behind.',
        },
      ]}
    />
  );
}
