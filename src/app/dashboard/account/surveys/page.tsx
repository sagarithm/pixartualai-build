'use client';

import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { ChatText, Sparkle } from '@phosphor-icons/react';

export default function SurveysPage() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1000px] w-full mx-auto">
          <div className="pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Product Surveys</h1>
            <p className="text-xs text-neutral-500 mt-1">
              Help shape the future of PixartualAI by sharing feedback on AI features, canvas usability, and export capabilities.
            </p>
          </div>

          <div className="my-10 p-12 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] text-center shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3">
              <ChatText size={24} />
            </div>
            <h3 className="text-base font-semibold text-neutral-900 dark:text-white">No active surveys right now</h3>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto mt-1">
              When our product research team publishes questions on upcoming releases, they will appear right here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
