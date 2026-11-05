'use client';

import React from 'react';
import { SectionNode } from '@/types/ast';
import { Sparkle, ArrowUpRight } from '@phosphor-icons/react';

interface BentoRendererProps {
  section: SectionNode;
  primaryColor?: string;
}

export const BentoRenderer: React.FC<BentoRendererProps> = ({ section, primaryColor = '#171717' }) => {
  const { title, subtitle, props } = section;
  const items = props?.items || [];

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-12 gap-5">
        {items.map((item: any, idx: number) => (
          <div
            key={idx}
            className={`${
              item.span || 'col-span-12 md:col-span-6'
            } rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group relative overflow-hidden`}
          >
            <div>
              {item.tag && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[5px] text-[11px] font-mono font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mb-4">
                  <span>{item.tag}</span>
                </div>
              )}
              <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800/80 text-xs font-mono text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
              <span>Interactive Component</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

