'use client';

import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { ChartBar, Lightning, CreditCard, ArrowRight } from '@phosphor-icons/react';
import Link from 'next/link';

export default function WorkspaceSpendingPage() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1000px] w-full mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Spending & Credits</h1>
              <p className="text-xs text-neutral-500 mt-1">
                Monitor your compute consumption, monthly credit allowance, and plan invoices.
              </p>
            </div>

            <Link
              href="/pricing"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-accent text-white text-xs font-semibold hover:opacity-90 shadow-sm"
            >
              <Lightning size={14} weight="fill" />
              <span>Upgrade Plan</span>
            </Link>
          </div>

          {/* Credits Summary Card */}
          <div className="my-8 p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Plan Status</span>
                <div className="text-lg font-bold text-neutral-900 dark:text-white mt-0.5">Free Plan</div>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-accent">50 credits remaining</span>
                <div className="text-[11px] text-neutral-400 mt-0.5">Monthly reset</div>
              </div>
            </div>

            <div className="mt-4 w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
              <div className="h-full bg-black dark:bg-white rounded-full w-full" />
            </div>

            <p className="text-[11px] text-neutral-400 mt-3">
              Free plans include 50 credits to prototype and test websites. Upgrade to Creator or Pro for 10,000+ credits, custom domains, and zero watermarks.
            </p>
          </div>

          {/* Usage by Category */}
          <div className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] p-6 shadow-2xs space-y-4">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Consumption Breakdown</h3>
            <div className="divide-y divide-neutral-100 dark:divide-neutral-800 text-xs">
              <div className="py-3 flex items-center justify-between">
                <span>AI Prompt Site Generation</span>
                <span className="font-mono text-neutral-500">20 credits</span>
              </div>
              <div className="py-3 flex items-center justify-between">
                <span>Canvas Copilot Chat Refinements</span>
                <span className="font-mono text-neutral-500">15 credits</span>
              </div>
              <div className="py-3 flex items-center justify-between">
                <span>Image & Icon Vector Synthesis</span>
                <span className="font-mono text-neutral-500">15 credits</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
