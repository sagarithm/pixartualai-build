'use client';

import React from 'react';
import { CompareDetailTemplate } from '@/components/landing/CompareDetailTemplate';

export default function CompareFramerPage() {
  return (
    <CompareDetailTemplate
      competitorName="Framer"
      competitorSlug="framer"
      title="PixartualAI vs Framer"
      subtitle="Framer is built for visual designers who know Figma. PixartualAI is built for anyone who wants a working, polished digital product without design bottlenecks."
      bottleneckTitle="The blank canvas is the bottleneck"
      bottleneckDesc="Framer assumes you want to draw vectors, calculate frames, and link breakpoints manually on a blank artboard. For modern teams, the blank canvas wastes weeks. PixartualAI begins with high-converting, fully formed pages and stateful components generated directly from your intent."
      aheadTitle="Where PixartualAI pulls ahead"
      aheadPoints={[
        {
          title: 'From Idea to Working App in 30 Seconds',
          desc: 'Type what you want to achieve. PixartualAI generates the full page structure, responsive layouts, copy, and interactive components together, ready for live use.',
        },
        {
          title: 'Functional Interactive State Built-in',
          desc: 'Framer excels at animated links, but struggles with real stateful software like ROI calculators, multi-step wizards, search filters, and customer dashboards.',
        },
        {
          title: 'Conversational Studio Co-pilot',
          desc: 'Ask your AI assistant to adjust colors to warm amber, restyle testimonials into a masonry grid, or add an FAQ accordion with one sentence.',
        },
        {
          title: 'Clean Code Export With Zero Runtime Bloat',
          desc: 'PixartualAI gives you self-contained React and Tailwind components. No proprietary Framer runtime script overhead slowing down your Core Web Vitals.',
        },
      ]}
      competitorBetterTitle="Where Framer is the better choice"
      competitorBetterPoints={[
        {
          title: 'Fine-Grained Vector Spline Physics',
          desc: 'If your team has in-house 3D motion designers creating physics-based scroll triggers and custom Bezier canvas trajectories, Framer gives you lower-level control.',
        },
        {
          title: 'Direct Figma Frame Copy-Pasting',
          desc: 'If you already have a pixel-perfect 200-screen Figma file and want to paste frames directly into a design canvas without prompt generation.',
        },
      ]}
      features={[
        { name: 'AI prompt-to-experience generation', pixartual: true, competitor: false },
        { name: 'Natural language conversational editing', pixartual: true, competitor: false },
        { name: 'Stateful interactive widgets (calculators/wizards)', pixartual: true, competitor: false },
        { name: 'Visual canvas & layout editing', pixartual: true, competitor: true },
        { name: 'Clean React + Tailwind code export', pixartual: true, competitor: false },
        { name: 'Instant edge deployment (300ms)', pixartual: true, competitor: true },
        { name: 'Full-stack client portals & dashboards', pixartual: true, competitor: false },
        { name: 'Zero CSS/design background required', pixartual: true, competitor: false },
        { name: 'Custom domain and automatic SSL', pixartual: true, competitor: true },
      ]}
    />
  );
}

