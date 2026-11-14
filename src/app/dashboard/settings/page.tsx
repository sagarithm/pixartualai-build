'use client';

import React, { useState } from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import {
  User,
  CreditCard,
  Key,
  UsersThree,
  Check,
  Copy,
  Lightning,
  ShieldCheck,
  Plus,
} from '@phosphor-icons/react';

export default function SettingsPage() {
  const [tab, setTab] = useState<'general' | 'team' | 'billing' | 'keys'>('general');
  const [workspaceName, setWorkspaceName] = useState("Sagarithm's Workspace");
  const [saved, setSaved] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText('px_live_8f93e2b901a472c6e83d09');
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1000px] w-full mx-auto">
          {/* Header */}
          <div className="pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Workspace Settings</h1>
            <p className="text-xs text-neutral-500 mt-1">
              Manage your workspace preferences, collaborative team access, API credentials, and billing plans.
            </p>
          </div>

          {/* Settings Tabs */}
          <div className="flex items-center gap-1 my-6 border-b border-neutral-200/80 dark:border-neutral-800 pb-2">
            {[
              { id: 'general', label: 'General', icon: User },
              { id: 'team', label: 'Team Members', icon: UsersThree },
              { id: 'billing', label: 'Billing & Credits', icon: CreditCard },
              { id: 'keys', label: 'API Keys', icon: Key },
            ].map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id as any)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    tab === t.id
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-black shadow-xs'
                      : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                >
                  <Icon size={15} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>

          {/* General Tab */}
          {tab === 'general' && (
            <div className="space-y-6">
              <form onSubmit={handleSave} className="p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs space-y-4">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Workspace Details</h3>

                <div>
                  <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Workspace Name
                  </label>
                  <input
                    type="text"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    className="mt-1.5 w-full max-w-md rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Workspace ID
                  </label>
                  <div className="mt-1.5 font-mono text-xs text-neutral-500">
                    ws_6ae97f97fba640947b2c69ca
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-accent text-white text-xs font-semibold hover:opacity-95"
                  >
                    {saved ? 'Saved Changes!' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Billing & Credits Tab */}
          {tab === 'billing' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">Active Plan</span>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mt-0.5">Creator Pro</h3>
                    <p className="text-xs text-neutral-500">$40 / month • Renews Dec 1, 2026</p>
                  </div>
                  <button className="px-3.5 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800">
                    Change Plan
                  </button>
                </div>

                {/* Credits Meter */}
                <div className="mt-6">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">AI Compute Credits</span>
                    <span className="font-mono text-neutral-500">8,450 / 10,000 left</span>
                  </div>
                  <div className="mt-2 w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '84.5%' }} />
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-2">
                    Credits power prompt-to-site synthesis, image generation, and copilot refinements. Resets on your billing cycle.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Team Members Tab */}
          {tab === 'team' && (
            <div className="p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Workspace Members</h3>
                  <p className="text-xs text-neutral-500">Collaborate in real-time across products and CMS collections.</p>
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent text-white text-xs font-semibold">
                  <Plus size={14} /> Invite Member
                </button>
              </div>

              <div className="divide-y divide-neutral-100 dark:divide-neutral-800 text-xs">
                <div className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs">
                      S
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white">Sagarithm</div>
                      <div className="text-[11px] text-neutral-400">sagar@pixartual.ai</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium text-[11px]">
                    Owner
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* API Keys Tab */}
          {tab === 'keys' && (
            <div className="p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs space-y-4">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Developer API Keys</h3>
              <p className="text-xs text-neutral-500">
                Use your secret API key to trigger automated deployments, CMS syncs, and headless webhooks.
              </p>

              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-stone-50 dark:bg-neutral-800 flex items-center justify-between">
                <div className="font-mono text-xs text-neutral-800 dark:text-neutral-200">
                  px_live_8f93e2b901a472c6e83d09
                </div>
                <button
                  onClick={handleCopyKey}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-neutral-700 text-xs font-medium border border-neutral-200 dark:border-neutral-600 shadow-2xs"
                >
                  {copiedKey ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
