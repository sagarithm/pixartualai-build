import { ExperienceAST, ExperienceTheme } from '@/types/ast';

export const DEFAULT_LIGHT_THEME: ExperienceTheme = {
  id: 'neutral-clean',
  name: 'Neutral Studio',
  mode: 'light',
  fontFamily: 'display',
  primaryColor: '#171717',
  backgroundColor: '#FBFBFA',
  textColor: '#171717',
  cardBackground: '#FFFFFF',
  borderColor: '#E8E8E6',
  borderRadius: 'rounded-card',
};

export const DEFAULT_DARK_THEME: ExperienceTheme = {
  id: 'obsidian-glow',
  name: 'Obsidian Dark',
  mode: 'dark',
  fontFamily: 'display',
  primaryColor: '#3B82F6',
  backgroundColor: '#0F0F0F',
  textColor: '#EDEDED',
  cardBackground: '#171717',
  borderColor: '#262626',
  borderRadius: 'rounded-card',
};

export const PRESET_TEMPLATES: ExperienceAST[] = [
  {
    id: 'portfolio-minimal',
    name: 'Aura — Minimalist Portfolio & Studio',
    tagline: 'High-craft personal website for modern designers and engineers.',
    category: 'portfolio',
    theme: DEFAULT_LIGHT_THEME,
    navigation: {
      brandName: 'Elena Vance',
      logoIcon: 'Sparkle',
      links: [
        { label: 'Work', href: '#work' },
        { label: 'Experience', href: '#experience' },
        { label: 'Writing', href: '#writing' },
      ],
      ctaButton: { label: 'Get in Touch', href: '#contact' },
    },
    sections: [
      {
        id: 'hero-1',
        type: 'hero',
        title: 'Crafting digital products that balance utility & emotion.',
        subtitle: 'Senior Product Designer & Creative Technologist based in San Francisco. Designing systems at the intersection of AI and human curiosity.',
        props: {
          badge: 'Available for Q1 Advisory',
          badgeIcon: 'Sparkle',
          primaryCta: 'Explore Selected Work',
          secondaryCta: 'Read My Philosophy',
          metrics: [
            { label: 'Years Experience', value: '8+' },
            { label: 'Products Shipped', value: '24' },
            { label: 'Design Awards', value: '6' },
          ],
        },
      },
      {
        id: 'bento-1',
        type: 'bento-grid',
        title: 'Selected Artifacts & Case Studies',
        subtitle: 'A collection of systems, experiments, and high-velocity shipping.',
        props: {
          items: [
            {
              title: 'Autonomous Canvas',
              tag: 'AI System Design',
              description: 'Generative interface allowing designers to orchestrate design tokens in real time.',
              span: 'col-span-12 md:col-span-8',
              accent: 'bg-stone-100 dark:bg-neutral-800',
            },
            {
              title: 'Typeform Redesign',
              tag: 'Design System',
              description: 'Accessible micro-interactions scaled to 10M+ daily completions.',
              span: 'col-span-12 md:col-span-4',
              accent: 'bg-stone-100 dark:bg-neutral-800',
            },
            {
              title: 'Hyperlink OS',
              tag: 'Open Source',
              description: 'Spatial note-taking tool for creative writers.',
              span: 'col-span-12 md:col-span-5',
              accent: 'bg-stone-100 dark:bg-neutral-800',
            },
            {
              title: 'Linear Mobile',
              tag: 'iOS / React Native',
              description: 'Offline-first issue tracking built with local SQLite replication.',
              span: 'col-span-12 md:col-span-7',
              accent: 'bg-stone-100 dark:bg-neutral-800',
            },
          ],
        },
      },
      {
        id: 'interactive-calc-1',
        type: 'interactive-calculator',
        title: 'Interactive Project Estimator',
        subtitle: 'Calculate estimated scope, timeline, and budget for your digital product initiative.',
        props: {
          defaultHours: 60,
          hourlyRate: 150,
          services: [
            { name: 'Core Product Architecture & Spec', hours: 40, checked: true },
            { name: 'Design System & Component Library', hours: 30, checked: true },
            { name: 'Interactive Prototype & Micro-interactions', hours: 25, checked: false },
            { name: 'Full-Stack Implementation & Deploy', hours: 50, checked: false },
          ],
        },
      },
      {
        id: 'contact-1',
        type: 'contact',
        title: 'Let’s build something enduring.',
        subtitle: 'Whether you have a concrete project or just want to brainstorm an idea, my inbox is always open.',
        props: {
          email: 'elena@vance.design',
          location: 'San Francisco, CA (PST)',
          responseNotice: 'Usually replies within 24 hours',
        },
      },
    ],
    footer: {
      copyrightText: '© 2026 Elena Vance. Powered by PixartualAI.',
      socialLinks: [
        { platform: 'Twitter / X', url: 'https://x.com' },
        { platform: 'GitHub', url: 'https://github.com' },
        { platform: 'LinkedIn', url: 'https://linkedin.com' },
      ],
    },
  },
  {
    id: 'interactive-microtool',
    name: 'SaaS Metric & ROI Estimator',
    tagline: 'An interactive micro-tool for founders and product growth teams.',
    category: 'tool',
    theme: DEFAULT_DARK_THEME,
    navigation: {
      brandName: 'GrowthCalc AI',
      logoIcon: 'RocketLaunch',
      links: [
        { label: 'Calculator', href: '#calc' },
        { label: 'Benchmarks', href: '#benchmarks' },
      ],
      ctaButton: { label: 'Embed on Your Site', href: '#embed' },
    },
    sections: [
      {
        id: 'hero-tool',
        type: 'hero',
        title: 'See exactly how much revenue your churn is costing you.',
        subtitle: 'A live interactive calculator. Adjust your pricing, current monthly visitors, and conversion rate to see dynamic projected compounding ARR.',
        props: {
          badge: 'Interactive Micro-Tool',
          badgeIcon: 'RocketLaunch',
          primaryCta: 'Run Simulation',
        },
      },
      {
        id: 'calc-interactive',
        type: 'interactive-calculator',
        title: 'Live ARR & Retention Forecaster',
        subtitle: 'Slide the values below to model your SaaS growth trajectory in real time.',
        props: {
          isSaasModel: true,
          defaultVisitors: 15000,
          defaultConversion: 2.5,
          defaultArpu: 49,
        },
      },
      {
        id: 'features-tool',
        type: 'features',
        title: 'Why Interactive Experiences Convert 3.8x Higher',
        subtitle: 'Traditional static landing pages are passive. Interactive tools turn visitors into engaged users.',
        props: {
          items: [
            {
              title: 'Self-Qualified Leads',
              description: 'Users input their actual parameters, giving you context before the first sales call.',
              icon: 'ListChecks',
            },
            {
              title: 'Compounding SEO & Backlinks',
              description: 'Free calculators and interactive assessments naturally earn authoritative editorial citations.',
              icon: 'Sparkle',
            },
            {
              title: 'Instant Virality',
              description: 'Visitors share results with their founders, teams, and social networks with one click.',
              icon: 'ArrowUpRight',
            },
          ],
        },
      },
    ],
    footer: {
      copyrightText: '© 2026 GrowthCalc. Built on PixartualAI.',
      socialLinks: [
        { platform: 'Product Hunt', url: 'https://producthunt.com' },
        { platform: 'X', url: 'https://x.com' },
      ],
    },
  },
  {
    id: 'quiz-assessment',
    name: 'Interactive Idea Viability Test',
    tagline: 'A multi-step self-scoring diagnostic assessment.',
    category: 'personal',
    theme: DEFAULT_LIGHT_THEME,
    navigation: {
      brandName: 'ViabilityScore',
      logoIcon: 'MagicWand',
      links: [{ label: 'Take Test', href: '#quiz' }],
      ctaButton: { label: 'Share Result', href: '#share' },
    },
    sections: [
      {
        id: 'hero-quiz',
        type: 'hero',
        title: 'Is your new digital idea ready to launch?',
        subtitle: 'Answer 4 structured questions about your target market, technical complexity, distribution, and moat to receive an instant Viability Index score.',
        props: {
          badge: '3-Minute Interactive Diagnostic',
          badgeIcon: 'MagicWand',
          primaryCta: 'Start Diagnostic',
        },
      },
      {
        id: 'quiz-section',
        type: 'interactive-quiz',
        title: 'The Product Viability Diagnostic',
        subtitle: 'Select the statement that best reflects your current project state:',
        props: {
          questions: [
            {
              question: '1. Who is your primary target audience?',
              options: [
                { text: 'Anyone and everyone with an internet connection', points: 10 },
                { text: 'A clearly defined niche with an urgent, painful problem', points: 30 },
                { text: 'Enterprises with complex custom procurement processes', points: 20 },
              ],
            },
            {
              question: '2. What is your day-1 distribution strategy?',
              options: [
                { text: 'Build it and hope people find it on Google', points: 5 },
                { text: 'Existing audience / waitlist of 500+ interested buyers', points: 30 },
                { text: 'Direct cold outreach and personalized demonstrations', points: 25 },
              ],
            },
            {
              question: '3. What is your technical moat?',
              options: [
                { text: 'Generic wrapper around a public LLM API', points: 10 },
                { text: 'Proprietary workflow, unique data, or specialized distribution', points: 30 },
                { text: 'First-mover advantage in an emerging category', points: 20 },
              ],
            },
          ],
        },
      },
    ],
    footer: {
      copyrightText: '© 2026 ViabilityScore. Generated with PixartualAI.',
      socialLinks: [{ platform: 'X', url: 'https://x.com' }],
    },
  },
];

