import { createOpenRouter } from '@openrouter/ai-sdk-provider';

export const SUPPORTED_MODELS = [
  {
    id: 'anthropic/claude-3.7-sonnet',
    name: 'Claude 3.7 Sonnet',
    provider: 'Anthropic',
    description: 'Premier frontier model for coding, complex agentic reasoning & frontend UI.',
    badge: 'Latest',
  },
  {
    id: 'anthropic/claude-3.5-sonnet',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    description: 'Industry benchmark for aesthetic React + Tailwind component generation.',
    badge: 'Popular',
  },
  {
    id: 'openai/gpt-4o',
    name: 'GPT-4o',
    provider: 'OpenAI',
    description: 'High-speed flagship multimodal reasoning & structured outputs.',
    badge: 'Fast',
  },
  {
    id: 'google/gemini-2.0-flash-001',
    name: 'Gemini 2.0 Flash',
    provider: 'Google',
    description: 'Ultra-low latency with 1M context window for large multi-page projects.',
    badge: 'Speed',
  },
  {
    id: 'deepseek/deepseek-chat',
    name: 'DeepSeek V3',
    provider: 'DeepSeek',
    description: 'State-of-the-art open-weights architecture with strong coding proficiency.',
    badge: 'Cost-Effective',
  },
] as const;

export type SupportedModelId = typeof SUPPORTED_MODELS[number]['id'];

export const DEFAULT_MODEL: SupportedModelId = 'anthropic/claude-3.7-sonnet';

/**
 * Returns an OpenRouter AI client instance configured with the environment API key.
 */
export function getOpenRouterClient() {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY environment variable is not configured.');
  }

  return createOpenRouter({
    apiKey,
    headers: {
      'HTTP-Referer': 'https://pixartual.ai',
      'X-Title': 'PixartualAI Studio',
    },
  });
}

/**
 * Standard System Prompt for Pixartual Full-Stack React/Vite Generator
 */
export const PIXARTUAL_SYSTEM_PROMPT = `
You are PixartualAI, an elite Chief Frontend Architect & Design Systems Engineer.
Your mission is to generate production-ready, beautiful, interactive React 19 + Tailwind CSS websites and web applications.

### ARCHITECTURAL RULES
1. Structure output as modular files for an in-browser Vite + React sandbox.
2. The root entry is \`/App.tsx\`. Modularize reusable components into \`/components/\`.
3. Use Tailwind CSS utility classes extensively for styling.
4. Use 'lucide-react' for all icons (e.g. import { ArrowRight, Sparkles, Check } from 'lucide-react').
5. Every generated experience must be responsive (mobile, tablet, desktop) and fully interactive (with state, tabs, toggles, working forms, modals).
6. Implement both Dark Mode & Light Mode awareness, using Pixartual's signature aesthetic:
   - Deep rich backgrounds: #0A0A0C or #121214 in dark, pure white or #FAFAFA in light.
   - Warm flame accents: #FE3200 (Vermilion), #FC8C04 (Warm Amber), with subtle glow effects.
   - Elegant typography, smooth borders (border-white/10 or border-neutral-200), and micro-interactions.

### CODE STREAMING PROTOCOL
Whenever you create or update files, wrap each file in a markdown code block with the attribute \`file="<path>"\`:

\`\`\`tsx file="/App.tsx"
import React, { useState } from 'react';
// ... component code
\`\`\`

\`\`\`tsx file="/components/Hero.tsx"
import React from 'react';
// ... component code
\`\`\`

Write complete, functional, compilable code without placeholders like '// TODO' or '// add more here'.
`;
