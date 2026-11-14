'use client';

import React from 'react';
import Link from 'next/link';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { Trash } from '@phosphor-icons/react';

export default function RecentlyDeletedPage() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1000px] w-full mx-auto">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Recently deleted</h1>
            <p className="text-xs text-neutral-500 mt-1">
              Projects moved to trash are permanently deleted after 30 days.
            </p>
          </div>

          {/* Empty State Card */}
          <div className="mt-10 p-12 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] text-center flex flex-col items-center justify-center shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-stone-50 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700 flex items-center justify-center text-neutral-400 mb-4">
              <Trash size={24} />
            </div>
            <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Trash is empty</h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-sm">
              Any projects you delete will stay here for 30 days before permanent deletion.
            </p>
            <Link
              href="/dashboard"
              className="mt-6 px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
