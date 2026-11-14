'use client';

import React, { useState } from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import {
  Handshake,
  Copy,
  Check,
  ShareNetwork,
  Users,
  Eye,
  CurrencyDollar,
} from '@phosphor-icons/react';

export default function AffiliatesPage() {
  const [activeTab, setActiveTab] = useState<'referrals' | 'payouts'>('referrals');
  const [copied, setCopied] = useState(false);
  const affiliateCode = 'PTN51';
  const referralLink = `https://pixartual.ai?r=${affiliateCode.toLowerCase()}`;

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
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Affiliates</h1>
            <p className="text-xs text-neutral-500 mt-1">
              Track your referrals, payouts, and affiliate performance.
            </p>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">0</div>
              <div className="text-xs text-neutral-400 mt-1">Active referrals</div>
            </div>
            <div className="p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">0</div>
              <div className="text-xs text-neutral-400 mt-1">Visits</div>
            </div>
            <div className="p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">$0.00</div>
              <div className="text-xs text-neutral-400 mt-1">Est. payout</div>
            </div>
          </div>

          {/* Affiliate Code Card */}
          <div className="mt-6 p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
            <div className="text-xs font-semibold text-neutral-900 dark:text-white">Affiliate code</div>
            <div className="mt-1 text-sm font-bold tracking-wider text-amber-500 font-mono">{affiliateCode}</div>

            <div className="mt-3 flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={referralLink}
                className="w-full sm:w-96 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-stone-50 dark:bg-neutral-800 px-3 py-2 text-xs font-mono text-neutral-800 dark:text-neutral-200 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleCopy}
                className="px-3.5 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shrink-0"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy link'}</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-6 mt-8 border-b border-neutral-200/80 dark:border-neutral-800 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('referrals')}
              className={`pb-3 font-medium transition-colors border-b-2 ${
                activeTab === 'referrals'
                  ? 'border-black dark:border-white text-neutral-900 dark:text-white font-semibold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Referrals
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('payouts')}
              className={`pb-3 font-medium transition-colors border-b-2 ${
                activeTab === 'payouts'
                  ? 'border-black dark:border-white text-neutral-900 dark:text-white font-semibold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Payouts
            </button>
          </div>

          {/* Table / Empty State */}
          <div className="mt-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] overflow-hidden shadow-2xs divide-y divide-neutral-100 dark:divide-neutral-800/80">
            <div className="grid grid-cols-6 px-5 py-3 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider bg-stone-50/50 dark:bg-neutral-900/50">
              <div>User</div>
              <div>Plan</div>
              <div>Billing</div>
              <div>Status</div>
              <div>Joined</div>
              <div className="text-right">Monthly earnings</div>
            </div>

            <div className="p-12 text-center flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-xl bg-stone-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-400 mb-3">
                <Handshake size={20} />
              </div>
              <div className="text-xs font-semibold text-neutral-900 dark:text-white">No referrals</div>
              <p className="text-[11.5px] text-neutral-400 mt-0.5">Share your affiliate link to start earning.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
