'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DeviceMobile, Devices, Laptop, Sparkle, ArrowUpRight } from '@phosphor-icons/react';
import { PRESET_TEMPLATES } from '@/lib/templates';
import { HeroRenderer } from '../render/HeroRenderer';
import { CalculatorRenderer } from '../render/CalculatorRenderer';

export const LiveInteractivePreview: React.FC = () => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const demoExperience = PRESET_TEMPLATES[0];

  return (
    <div className="w-full max-w-6xl mx-auto my-16 px-4">
      {/* Device Toolbar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
            Live Interactive Preview
          </span>
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
        </div>

        <div className="flex items-center gap-1 p-1 rounded-[8px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
          <button
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded-[5px] text-xs font-medium transition-colors ${
              device === 'desktop'
                ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
            title="Desktop 100%"
          >
            <Laptop size={16} />
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`p-1.5 rounded-[5px] text-xs font-medium transition-colors ${
              device === 'tablet'
                ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
            title="Tablet 768px"
          >
            <Devices size={16} />
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded-[5px] text-xs font-medium transition-colors ${
              device === 'mobile'
                ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
            title="Mobile 375px"
          >
            <DeviceMobile size={16} />
          </button>
        </div>

        <Link
          href="/studio"
          className="text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white inline-flex items-center gap-1"
        >
          <span>Open Full Studio</span>
          <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Frame Container */}
      <div className="flex justify-center transition-all duration-300">
        <div
          className={`rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 shadow-2xl overflow-hidden transition-all duration-300 ${
            device === 'desktop'
              ? 'w-full'
              : device === 'tablet'
              ? 'w-[768px]'
              : 'w-[375px]'
          }`}
        >
          {/* Mock Browser Topbar */}
          <div className="px-4 py-2.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400"></span>
              <span className="size-2.5 rounded-full bg-amber-400"></span>
              <span className="size-2.5 rounded-full bg-emerald-400"></span>
            </div>
            <div className="text-[11px] font-mono text-neutral-400 px-3 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
              pixartual.ai/preview/aura-studio
            </div>
            <div className="size-3"></div>
          </div>

          {/* Rendered Experience Snippet */}
          <div className="max-h-[580px] overflow-y-auto">
            {demoExperience.sections[0] && (
              <HeroRenderer
                section={demoExperience.sections[0]}
                primaryColor={demoExperience.theme.primaryColor}
              />
            )}
            {demoExperience.sections[2] && (
              <CalculatorRenderer
                section={demoExperience.sections[2]}
                primaryColor={demoExperience.theme.primaryColor}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

