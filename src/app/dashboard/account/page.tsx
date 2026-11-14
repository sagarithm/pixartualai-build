'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import {
  Lock,
  Trash,
  Check,
  GoogleLogo,
  GithubLogo,
} from '@phosphor-icons/react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'notifications' | 'surveys'>('general');
  const [name, setName] = useState('Sagarithm');
  const [saved, setSaved] = useState(false);
  const [isGoogleConnected, setIsGoogleConnected] = useState(true);
  const [isGithubConnected, setIsGithubConnected] = useState(false);

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
          {/* Page Title */}
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Account settings</h1>
            <p className="text-xs text-neutral-500 mt-1">Manage your personal account details.</p>
          </div>

          {/* Sub Navigation Tabs (Exact match with Image 1) */}
          <div className="flex items-center gap-6 mt-6 border-b border-neutral-200/80 dark:border-neutral-800 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('general')}
              className={`pb-3 font-medium transition-colors border-b-2 ${
                activeTab === 'general'
                  ? 'border-black dark:border-white text-neutral-900 dark:text-white font-semibold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              General
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('notifications')}
              className={`pb-3 font-medium transition-colors border-b-2 ${
                activeTab === 'notifications'
                  ? 'border-black dark:border-white text-neutral-900 dark:text-white font-semibold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Notifications
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('surveys')}
              className={`pb-3 font-medium transition-colors border-b-2 ${
                activeTab === 'surveys'
                  ? 'border-black dark:border-white text-neutral-900 dark:text-white font-semibold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Surveys
            </button>
          </div>

          {/* Tab 1: General (Image 1 Parity) */}
          {activeTab === 'general' && (
            <div className="mt-8 space-y-10">
              {/* Account Section */}
              <div>
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white">Account</h2>
                <p className="text-xs text-neutral-500 mt-0.5">Manage your personal account details.</p>

                {/* Main Card */}
                <form
                  onSubmit={handleSave}
                  className="mt-4 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs divide-y divide-neutral-100 dark:divide-neutral-800/80"
                >
                  {/* Row 1: Avatar */}
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-neutral-900 dark:text-white">Avatar</div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5">
                        Set a profile picture for your account.
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-200 via-pink-200 to-amber-200 p-0.5 flex items-center justify-center shadow-2xs">
                        <div className="w-full h-full rounded-[10px] bg-white dark:bg-black flex items-center justify-center font-bold text-xs text-neutral-900 dark:text-white">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => alert('Profile picture removed')}
                        className="px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors shadow-2xs"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Row 2: Name */}
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-neutral-900 dark:text-white">Name</div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5">
                        Your full name, as visible to others.
                      </div>
                    </div>

                    <div className="w-full sm:w-80">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>

                  {/* Row 3: Email */}
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-neutral-900 dark:text-white">Email</div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5">
                        Email linked to your account. Unlink social accounts to update it.
                      </div>
                    </div>

                    <div className="w-full sm:w-80 relative">
                      <Lock size={14} className="absolute left-3 top-2.5 text-neutral-400" />
                      <input
                        type="email"
                        readOnly
                        value="sagarithm@gmail.com"
                        className="w-full pl-8 pr-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-stone-50 dark:bg-neutral-800/60 text-xs text-neutral-600 dark:text-neutral-300 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Row 4: Third party sign-in */}
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                        Third-party sign-in
                      </div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5">
                        Connect an account to sign in faster with third-party providers.
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsGoogleConnected(!isGoogleConnected)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-colors shadow-2xs ${
                          isGoogleConnected
                            ? 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30'
                            : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50'
                        }`}
                      >
                        <span className="font-bold">G</span>
                        <span>{isGoogleConnected ? 'Disconnect Google' : 'Connect Google'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsGithubConnected(!isGithubConnected)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-colors shadow-2xs ${
                          isGithubConnected
                            ? 'border-neutral-200 text-red-600 hover:bg-red-50'
                            : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700'
                        }`}
                      >
                        <GithubLogo size={14} weight="fill" />
                        <span>{isGithubConnected ? 'Disconnect GitHub' : 'Connect GitHub'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Save changes footer */}
                  <div className="p-4 bg-stone-50/50 dark:bg-neutral-900/40 flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
                    >
                      {saved ? 'Saved!' : 'Save changes'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Danger Zone Section */}
              <div>
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white">Danger zone</h2>
                <p className="text-xs text-neutral-500 mt-0.5">These actions are permanent and cannot be undone.</p>

                <div className="mt-4 p-5 rounded-2xl border border-red-200/80 dark:border-red-900/40 bg-white dark:bg-[#161616] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-2xs">
                  <div>
                    <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                      Delete account
                    </div>
                    <div className="text-[11.5px] text-neutral-400 mt-0.5">
                      Permanently remove your personal account and all of its contents from the PixartualAI platform.
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => alert('Account deletion modal')}
                    className="px-3.5 py-2 rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-xs font-semibold hover:bg-red-100 transition-colors shrink-0"
                  >
                    Delete account
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Notifications */}
          {activeTab === 'notifications' && (
            <div className="mt-8 space-y-4">
              <h2 className="text-base font-semibold text-neutral-900 dark:text-white">Email Preferences</h2>
              <div className="p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] space-y-4 text-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Product announcements</div>
                    <div className="text-neutral-400 text-[11px]">Updates about new features and templates.</div>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded accent-accent" />
                </div>
                <div className="flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 pt-3">
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Build and deploy alerts</div>
                    <div className="text-neutral-400 text-[11px]">Receive emails when custom domains activate.</div>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded accent-accent" />
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Surveys */}
          {activeTab === 'surveys' && (
            <div className="mt-8 space-y-4">
              <h2 className="text-base font-semibold text-neutral-900 dark:text-white">Feedback Surveys</h2>
              <div className="p-8 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] text-center">
                <p className="text-xs text-neutral-500">No active feedback surveys right now. Thank you for using PixartualAI!</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
