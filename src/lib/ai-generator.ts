import { ExperienceAST, SectionNode } from '@/types/ast';
import { DEFAULT_LIGHT_THEME, DEFAULT_DARK_THEME } from './templates';

export interface GenerateExperienceInput {
  prompt: string;
  themePreference?: 'light' | 'dark';
}

/**
 * Deterministic AI prompt synthesis engine.
 * Generates structured, responsive, interactive digital experiences from natural language.
 */
export function generateExperienceFromPrompt(input: GenerateExperienceInput): ExperienceAST {
  const prompt = input.prompt.trim();
  const lower = prompt.toLowerCase();
  const theme = input.themePreference === 'dark' || lower.includes('dark') || lower.includes('cyber') || lower.includes('matrix') || lower.includes('developer')
    ? DEFAULT_DARK_THEME
    : DEFAULT_LIGHT_THEME;

  const id = `exp-${Date.now()}`;
  
  // Extract or synthesize brand name
  let brandName = 'Studio ' + prompt.split(' ')[0].replace(/[^a-zA-Z]/g, '');
  if (brandName.length < 5) brandName = 'Curious Craft';

  // Determine experience category
  let category: ExperienceAST['category'] = 'personal';
  if (lower.includes('calc') || lower.includes('estimator') || lower.includes('tool') || lower.includes('roi')) {
    category = 'tool';
  } else if (lower.includes('startup') || lower.includes('saas') || lower.includes('app')) {
    category = 'startup';
  } else if (lower.includes('portfolio') || lower.includes('resume') || lower.includes('designer')) {
    category = 'portfolio';
  } else if (lower.includes('creator') || lower.includes('podcast') || lower.includes('youtube')) {
    category = 'creator';
  }

  const sections: SectionNode[] = [];

  // 1. Hero Section
  sections.push({
    id: `hero-${Date.now()}`,
    type: 'hero',
    title: prompt.length > 50 ? prompt.slice(0, 70) + '...' : prompt,
    subtitle: `An interactive digital experience generated specifically for your vision. Explore live tools, dynamic modules, and tailored interactions below.`,
    props: {
      badge: category === 'tool' ? 'Interactive Tool' : 'Interactive Digital Experience',
      badgeIcon: 'Sparkle',
      primaryCta: 'Explore Experience',
      secondaryCta: 'Connect With Me',
      metrics: [
        { label: 'Active Users', value: '1.2K+' },
        { label: 'Satisfaction', value: '99%' },
        { label: 'Response Time', value: '< 2 hrs' },
      ],
    },
  });

  // 2. Interactive Calculator / Tool if requested or suitable
  if (category === 'tool' || lower.includes('calc') || lower.includes('price') || lower.includes('rate') || lower.includes('cost')) {
    sections.push({
      id: `calc-${Date.now()}`,
      type: 'interactive-calculator',
      title: 'Interactive Value & Investment Estimator',
      subtitle: 'Adjust your parameters below to see projected outcomes, timelines, and dynamic cost estimates in real-time.',
      props: {
        isSaasModel: lower.includes('saas') || lower.includes('arr') || lower.includes('subscription'),
        hourlyRate: 125,
        defaultVisitors: 10000,
        defaultConversion: 3.0,
        defaultArpu: 50,
        services: [
          { name: 'Initial Discovery & Architecture', hours: 20, checked: true },
          { name: 'Interactive UI & Component Design', hours: 35, checked: true },
          { name: 'Full-Stack Integration & APIs', hours: 45, checked: false },
          { name: 'Analytics & Custom Domain Setup', hours: 15, checked: false },
        ],
      },
    });
  }

  // 3. Interactive Quiz / Assessment if question/test oriented
  if (lower.includes('quiz') || lower.includes('test') || lower.includes('diagnostic') || lower.includes('assessment')) {
    sections.push({
      id: `quiz-${Date.now()}`,
      type: 'interactive-quiz',
      title: 'Interactive Diagnostic Assessment',
      subtitle: 'Answer these key questions to evaluate your readiness and discover personalized next steps.',
      props: {
        questions: [
          {
            question: '1. What is your primary objective for this experience?',
            options: [
              { text: 'Validate market interest quickly', points: 30 },
              { text: 'Collect qualified leads and contact requests', points: 25 },
              { text: 'Showcase portfolio and build authority', points: 20 },
            ],
          },
          {
            question: '2. How quickly do you need to launch?',
            options: [
              { text: 'Today / Within 48 hours', points: 30 },
              { text: 'Next 2-3 weeks', points: 20 },
              { text: 'No strict deadline', points: 10 },
            ],
          },
        ],
      },
    });
  }

  // 4. Bento Grid / Feature showcase
  sections.push({
    id: `bento-${Date.now()}`,
    type: 'bento-grid',
    title: 'Core Capabilities & Interactive Highlights',
    subtitle: 'Every module is responsive, stateful, and customizable without touching code.',
    props: {
      items: [
        {
          title: 'Zero-Code Interactive State',
          tag: 'Realtime Engine',
          description: 'Calculators, quizzes, and forms store user interactions without setting up a backend database.',
          span: 'col-span-12 md:col-span-7',
          accent: 'bg-stone-100 dark:bg-neutral-800',
        },
        {
          title: 'Sub-Second Global Edge',
          tag: 'Performance',
          description: 'Optimized for instant page loads and 100/100 Core Web Vitals.',
          span: 'col-span-12 md:col-span-5',
          accent: 'bg-stone-100 dark:bg-neutral-800',
        },
        {
          title: 'Custom Domain & Share Link',
          tag: 'Distribution',
          description: 'Share your creation with anyone via a vanity link or bind your custom apex domain.',
          span: 'col-span-12 md:col-span-5',
          accent: 'bg-stone-100 dark:bg-neutral-800',
        },
        {
          title: 'Modular Typography',
          tag: 'Design System',
          description: 'Rendered with NeutralSans display headings, Inter UI body, and DM Mono technical accents.',
          span: 'col-span-12 md:col-span-7',
          accent: 'bg-stone-100 dark:bg-neutral-800',
        },
      ],
    },
  });

  // 5. Contact Section
  sections.push({
    id: `contact-${Date.now()}`,
    type: 'contact',
    title: 'Have questions or want to collaborate?',
    subtitle: 'Reach out directly. Responses are delivered within 24 hours.',
    props: {
      email: 'hello@pixartual.ai',
      location: 'Global / Remote',
      responseNotice: 'Open for custom opportunities and partnerships',
    },
  });

  return {
    id,
    name: brandName,
    tagline: prompt,
    category,
    theme,
    navigation: {
      brandName,
      logoIcon: 'Sparkle',
      links: [
        { label: 'Overview', href: '#hero' },
        { label: 'Features', href: '#features' },
        { label: 'Contact', href: '#contact' },
      ],
      ctaButton: { label: 'Get Started', href: '#contact' },
    },
    sections,
    footer: {
      copyrightText: `© ${new Date().getFullYear()} ${brandName}. Created with PixartualAI.`,
      socialLinks: [
        { platform: 'Twitter / X', url: 'https://x.com' },
        { platform: 'GitHub', url: 'https://github.com' },
      ],
    },
  };
}

