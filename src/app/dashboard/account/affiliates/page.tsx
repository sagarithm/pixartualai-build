'use client';

import React, { useState } from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import {
  Handshake,
  Copy,
  Check,
  CurrencyDollar,
  Users,
  TrendUp,
  ShareNetwork,
} from '@phosphor-icons/react';

export default function AffiliatesPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://pixartual.ai/?via=sagarithm';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1000px] w-full mx-auto">
          {/* Header */}
          <div className="pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Affiliate Program</h1>
            <p className="text-xs text-neutral-500 mt-1">
              Earn 30% lifetime recurring commission on every creator and business who subscribes via your link.
            </p>
          </div>

          {/* Referral Link Box */}
          <div className="my-8 p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs space-y-3">
            <div className="text-xs font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
              <ShareNetwork size={16} className="text-accent" />
              <span>Your Unique Referral Link</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="text"
                readOnly
                value={referralLink}
                className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-stone-50 dark:bg-neutral-800 px-3.5 py-2 text-xs font-mono text-neutral-800 dark:text-neutral-200 focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-accent text-white text-xs font-semibold hover:opacity-95 flex items-center justify-center gap-1.5 shrink-0"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy link'}</span>
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
            <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <div className="text-neutral-400 text-[11px] font-medium">Clicks</div>
              <div className="text-xl font-bold text-neutral-900 dark:text-white mt-1">128</div>
            </div>
            <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <div className="text-neutral-400 text-[11px] font-medium">Signups</div>
              <div className="text-xl font-bold text-neutral-900 dark:text-white mt-1">14</div>
            </div>
            <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <div className="text-neutral-400 text-[11px] font-medium">Paid Conversions</div>
              <div className="text-xl font-bold text-emerald-600 mt-1">4</div>
            </div>
            <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <div className="text-neutral-400 text-[11px] font-medium">Earned Commission</div>
              <div className="text-xl font-bold text-accent mt-1">$160.00</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
