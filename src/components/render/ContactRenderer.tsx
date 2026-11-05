'use client';

import React, { useState } from 'react';
import { SectionNode } from '@/types/ast';
import { Envelope, Check, PaperPlaneTilt, MapPin } from '@phosphor-icons/react';

interface ContactRendererProps {
  section: SectionNode;
  primaryColor?: string;
}

export const ContactRenderer: React.FC<ContactRendererProps> = ({ section, primaryColor = '#171717' }) => {
  const { title, subtitle, props } = section;
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [inputVal, setInputVal] = useState('');

  const copyEmail = () => {
    if (props?.email) {
      navigator.clipboard.writeText(props.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal) return;
    setSent(true);
    setInputVal('');
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 sm:p-12 shadow-sm text-center">
        <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-lg mx-auto">
            {subtitle}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {props?.email && (
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[7px] border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors shadow-sm"
            >
              {copied ? <Check size={16} className="text-emerald-500" /> : <Envelope size={16} />}
              <span>{copied ? 'Copied to clipboard!' : props.email}</span>
            </button>
          )}

          {props?.location && (
            <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[7px] border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-500">
              <MapPin size={15} />
              <span>{props.location}</span>
            </div>
          )}
        </div>

        {/* Interactive Quick Note Form */}
        <form onSubmit={handleSend} className="mt-8 max-w-md mx-auto flex gap-2">
          <input
            type="text"
            placeholder="Drop your email or short note..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-[7px] border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
          />
          <button
            type="submit"
            style={{ backgroundColor: primaryColor }}
            className="px-4 py-2.5 rounded-[7px] text-white text-sm font-medium inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity shadow-sm"
          >
            <span>{sent ? 'Sent!' : 'Send'}</span>
            <PaperPlaneTilt size={15} weight="bold" />
          </button>
        </form>
      </div>
    </div>
  );
};

