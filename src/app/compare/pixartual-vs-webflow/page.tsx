'use client';

import React from 'react';
import { CompareDetailTemplate } from '@/components/landing/CompareDetailTemplate';

export default function CompareWebflowPage() {
  return (
    <CompareDetailTemplate
      competitorName="Webflow"
      competitorSlug="webflow"
      title="PixartualAI vs Webflow"
      subtitle="Webflow requires specialized CSS box-model developers and endless agency retainers. PixartualAI lets any founder, product team, or marketer launch without technical friction."
      bottleneckTitle="The bottleneck is a person, not a feature"
      bottleneckDesc="In Webflow, even simple changes — changing a grid layout, adjusting mobile padding, or adding a pricing toggle — require waiting on a trained Webflow developer or agency. PixartualAI dissolves that dependency by pairing natural language instructions with visual direct manipulation."
      aheadTitle="Where PixartualAI pulls ahead"
      aheadPoints={[
        {
          title: '1:1 Webflow Site Import & Rebuild',
          desc: 'Have an existing Webflow site? PixartualAI imports your pages, typography, and CMS schemas 1:1 so you can edit in modern AI without starting over.',
        },
        {
          title: 'Zero CSS Box-Model Expertise Required',
          desc: 'No confusing flex child min-widths, margin collapsing bugs, or broken cascade rules. PixartualAI handles responsive constraints automatically.',
        },
        {
          title: 'Full Web App & Dynamic Tool Creation',
          desc: 'Go beyond static CMS blogs. Build authenticated member portals, interactive quote generators, lead scoring forms, and customer dashboards.',
        },
        {
          title: 'Flat Transparent Pricing Without Seat Penalties',
          desc: 'Webflow penalizes growing marketing teams with steep per-seat licenses and strict CMS item limits. PixartualAI gives you generous, straightforward plans.',
        },
      ]}
      competitorBetterTitle="Where Webflow is the better choice"
      competitorBetterPoints={[
        {
          title: 'Existing Webflow Agency Ecosystems',
          desc: 'If your organization is already locked into an annual multi-agency enterprise agreement with dedicated Webflow engineers on retainer.',
        },
        {
          title: 'Complex Multi-User Role Permissions in Legacy CMS',
          desc: 'If your enterprise requires intricate 15-tier granular editing roles for hundreds of non-technical content copywriters inside an established CMS database.',
        },
      ]}
      features={[
        { name: 'AI prompt-to-experience generation', pixartual: true, competitor: false },
        { name: '1:1 Webflow site migration tool', pixartual: true, competitor: false },
        { name: 'Natural language conversational co-pilot', pixartual: true, competitor: false },
        { name: 'Interactive state (calculators, quizzes, filters)', pixartual: true, competitor: 'Custom JS required' },
        { name: 'Visual canvas customization', pixartual: true, competitor: true },
        { name: 'Fast learning curve (< 5 minutes)', pixartual: true, competitor: false },
        { name: 'Full-stack client portal workflows', pixartual: true, competitor: false },
        { name: 'Global CDN and automated SSL', pixartual: true, competitor: true },
      ]}
    />
  );
}

