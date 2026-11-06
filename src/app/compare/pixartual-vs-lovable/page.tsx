'use client';

import React from 'react';
import { CompareDetailTemplate } from '@/components/landing/CompareDetailTemplate';

export default function CompareLovablePage() {
  return (
    <CompareDetailTemplate
      competitorName="Lovable"
      competitorSlug="lovable"
      title="PixartualAI vs Lovable"
      subtitle="Lovable generates raw code for engineers. PixartualAI provides a complete visual studio and publishing engine designed for non-technical creators and teams."
      bottleneckTitle="Generating it is the easy part"
      bottleneckDesc="AI code generators like Lovable or v0 can spit out a chunk of React code, but then you're stuck: how do you edit layout visually? How do non-developers tweak copy or colors without breaking TypeScript syntax? How do you connect a custom domain and SSL without DevOps? PixartualAI delivers the complete solution."
      aheadTitle="Where PixartualAI pulls ahead"
      aheadPoints={[
        {
          title: 'Direct Visual Canvas Manipulation',
          desc: 'Click on any headline, card, badge, or image to edit it immediately. You never have to parse syntax trees or guess CSS class names.',
        },
        {
          title: 'Curated NeutralSans Design System',
          desc: 'Generated experiences share consistent aesthetic elegance, polished micro-interactions, and balanced whitespace that never looks like generic AI boilerplate.',
        },
        {
          title: 'One-Click Custom Domains & Edge Hosting',
          desc: 'Attach your brand domain with one click. Automatic SSL, DNS verification, and lightning-fast global routing without setting up external cloud accounts.',
        },
        {
          title: 'Pre-Engineered Full-Stack Templates',
          desc: 'Start from proven, high-converting templates for agencies, SaaS platforms, client portals, and directories rather than starting from raw prompt scratch.',
        },
      ]}
      competitorBetterTitle="Where Lovable is the better choice"
      competitorBetterPoints={[
        {
          title: 'Full-Stack Software Engineers Seeking Git Sync',
          desc: 'Developers who want continuous bidirectional Git commits into GitHub repositories and plan to write custom backend Go/Rust microservices by hand.',
        },
        {
          title: 'Terminal & Command-Line CLI Workflows',
          desc: 'Teams who prefer working inside VS Code and local Node environments rather than an all-in-one visual browser studio.',
        },
      ]}
      features={[
        { name: 'Visual WYSIWYG canvas manipulation', pixartual: true, competitor: false },
        { name: 'Curated design system & balanced typography', pixartual: true, competitor: false },
        { name: 'Built-in template catalog with 1-click preview', pixartual: true, competitor: false },
        { name: 'AI code generation', pixartual: true, competitor: true },
        { name: 'Custom domain and instant hosting', pixartual: true, competitor: 'Vercel / Supabase needed' },
        { name: 'Zero technical / developer onboarding', pixartual: true, competitor: false },
        { name: 'Clean React code export', pixartual: true, competitor: true },
      ]}
    />
  );
}

