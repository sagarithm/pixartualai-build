'use client';

import React from 'react';
import { RolePageTemplate } from '@/components/landing/RolePageTemplate';
import { Megaphone, ChartLineUp, Lightning, Sparkle } from '@phosphor-icons/react';

export default function MarketersPage() {
  return (
    <RolePageTemplate
      roleSlug="marketers"
      heroTitle="Launch campaign pages fast"
      heroDesc="The best time to launch was when the idea hit. Ship high-converting landing pages, event microsites, and promotional funnels without waiting on developers."
      heroImage="/images/personas/founders-hero.webp"
      heroImageAlt="Growth marketer launching a campaign in PixartualAI"
      features={[
        {
          title: 'The best time to launch was when the idea hit',
          tagline: 'Never miss a marketing cycle waiting on development backlogs.',
          description:
            'When trending topics, product launches, or seasonal events arrive, timing is everything. Describe your campaign and launch a high-converting, responsive landing page in 10 minutes.',
          imageSrc: '/images/personas/founders-launch-faster.webp',
          reverse: false,
        },
        {
          title: 'A/B test value propositions in real time',
          tagline: 'Iterate copy, hero hooks, and CTA positioning without tickets.',
          description:
            'Spin up variant pages for different ad sets or geographic audiences. Test headlines and pricing structures to maximize return on ad spend.',
          imageSrc: '/images/personas/founders-look-funded.webp',
          reverse: true,
        },
        {
          title: 'Connect directly to your marketing stack',
          tagline: 'Sync leads to HubSpot, Mailchimp, or Slack automatically.',
          description:
            'Every form submission and email capture routes straight into your existing CRM, marketing automation pipeline, and email newsletter lists.',
          imageSrc: '/images/personas/founders-trust.webp',
          reverse: false,
        },
        {
          title: 'SEO-optimized and lightning fast',
          tagline: '100/100 Core Web Vitals for maximum organic visibility.',
          description:
            'Clean semantic markup, optimized webp image compression, and edge CDN delivery ensure Google ranks your campaigns at the top of search results.',
          imageSrc: '/images/personas/founders-grow-with-you.webp',
          reverse: true,
        },
      ]}
      flameTitle="Built for high-velocity marketing and growth teams"
      flameDesc="Everything growth leaders need to test propositions, capture demand, and drive revenue."
      flameCards={[
        {
          title: 'Rapid Campaign Launches',
          desc: 'Go from campaign concept to live public URL in minutes rather than two-week sprint cycles.',
          icon: <Megaphone size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Conversion Optimization',
          desc: 'High-converting layout patterns with sticky navigation, trust badges, and prominent CTAs.',
          icon: <ChartLineUp size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Custom Domain Subdomains',
          desc: 'Host on go.yourcompany.com or events.yourcompany.com with instant SSL and DNS routing.',
          icon: <Sparkle size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'CRM Lead Synchronization',
          desc: 'Native integrations with HubSpot, Salesforce, Airtable, and Zapier for zero lead latency.',
          icon: <Lightning size={28} weight="duotone" className="text-orange-500" />,
        },
      ]}
      faqTitle="Marketer questions, answered"
      faqDesc="Common questions growth teams ask about PixartualAI."
      faqs={[
        {
          q: 'Can I connect Google Tag Manager and Meta Pixel?',
          a: 'Yes. You can inject custom header scripts, Google Tag Manager IDs, Meta Pixel, and analytics tags into your workspace settings.',
        },
        {
          q: 'Can I map a custom subdomain like try.mybrand.com?',
          a: 'Yes, unlimited custom subdomains and root domains are supported with automatic free SSL.',
        },
      ]}
    />
  );
}
