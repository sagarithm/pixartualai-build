'use client';

import React from 'react';
import { SectionNode } from '@/types/ast';
import { Sparkle, ArrowRight, CheckCircle } from '@phosphor-icons/react';

interface HeroRendererProps {
  section: SectionNode;
  primaryColor: string;
}

export const HeroRenderer: React.FC<HeroRendererProps> = ({ section, primaryColor }) => {
  const { title, subtitle, props } = section;

  return (
    <div className="relative py-16 md:py-24 px-6 md:px-12 flex flex-col items-center text-center">
      {props?.badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-800/80 mb-6 backdrop-blur-sm">
          <Sparkle size={14} weight="fill" style={{ color: primaryColor }} />
          <span>{props.badge}</span>
        </div>
      )}

      <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight max-w-4xl text-neutral-900 dark:text-neutral-50 leading-[1.15]">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {props?.primaryCta && (
          <button
            style={{ backgroundColor: primaryColor }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[7px] text-white font-medium text-sm transition-opacity hover:opacity-90 shadow-sm"
          >
            <span>{props.primaryCta}</span>
            <ArrowRight size={16} weight="bold" />
          </button>
        )}

        {props?.secondaryCta && (
          <button className="px-5 py-2.5 rounded-[7px] border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium text-sm hover:bg-neutral-50 dark:hover:bg-neutral-700/60 transition-colors">
            {props.secondaryCta}
          </button>
        )}
      </div>

      {props?.metrics && Array.isArray(props.metrics) && (
        <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-12 border-t border-neutral-200 dark:border-neutral-800 pt-8 w-full max-w-2xl">
          {props.metrics.map((m: any, i: number) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
                {m.value}
              </span>
              <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

