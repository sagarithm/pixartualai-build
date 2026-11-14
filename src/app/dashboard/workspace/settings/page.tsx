'use client';

import React, { useState } from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { Gear, Check, ShieldCheck } from '@phosphor-icons/react';

export default function WorkspaceSettingsPage() {
  const [workspaceName, setWorkspaceName] = useState("Sagarithm's Workspace");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1000px] w-full mx-auto">
          <div className="pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Workspace Settings</h1>
            <p className="text-xs text-neutral-500 mt-1">Configure workspace defaults, branding, and environment presets.</p>
          </div>

          <form onSubmit={handleSave} className="my-8 p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs space-y-4">
            <div>
              <label className="text-xs font-semibold text-neutral-900 dark:text-white">Workspace Name</label>
              <input
                type="text"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                className="mt-1.5 w-full max-w-md rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-900 dark:text-white">Workspace Slug</label>
              <div className="mt-1.5 font-mono text-xs text-neutral-500">sagarithms-workspace</div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:opacity-90 shadow-sm"
              >
                {saved ? 'Saved!' : 'Save changes'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
