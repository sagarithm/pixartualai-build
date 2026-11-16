'use client';

import React, { useState } from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import {
  GithubLogo,
  Check,
  Warning,
  Trash,
  ArrowRight,
  UserSwitch,
} from '@phosphor-icons/react';

export default function WorkspaceSettingsPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'github'>('general');
  const [workspaceName, setWorkspaceName] = useState("Sagarithm's Workspace");
  const [saved, setSaved] = useState(false);
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
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Workspace settings</h1>
            <p className="text-xs text-neutral-500 mt-1">
              Workspaces allow you to collaborate on projects in real time.
            </p>
          </div>

          {/* Sub Navigation Tabs */}
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
              onClick={() => setActiveTab('github')}
              className={`pb-3 font-medium transition-colors border-b-2 ${
                activeTab === 'github'
                  ? 'border-black dark:border-white text-neutral-900 dark:text-white font-semibold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              GitHub
            </button>
          </div>

          {/* Tab 1: General (Exact PixartualAI Parity) */}
          {activeTab === 'general' && (
            <div className="mt-8 space-y-10">
              {/* Workspace Details Section */}
              <div>
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white">Workspace</h2>
                <p className="text-xs text-neutral-500 mt-0.5">Manage your workspace's general details.</p>

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
                        Set an avatar for your workspace.
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-2xs shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <button
                        type="button"
                        onClick={() => alert('Change workspace avatar')}
                        className="px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors shadow-2xs"
                      >
                        Change
                      </button>
                    </div>
                  </div>

                  {/* Row 2: Name */}
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-neutral-900 dark:text-white">Name</div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5">
                        Your full workspace name, as visible to others.
                      </div>
                    </div>

                    <div className="w-full sm:w-80">
                      <input
                        type="text"
                        maxLength={48}
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                        className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                      <div className="text-right text-[10px] text-neutral-400 mt-1">
                        {workspaceName.length} / 48 characters
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Default workspace */}
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                        Default workspace
                      </div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5 max-w-sm">
                        This is your main workspace. Your free plan credits, project, and site live here.
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 self-start sm:self-auto">
                      Default workspace
                    </span>
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

              {/* Danger Zone Section (Exact PixartualAI Parity) */}
              <div>
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white">Danger zone</h2>
                <p className="text-xs text-neutral-500 mt-0.5">
                  These actions are permanent and affect everyone in this workspace.
                </p>

                <div className="mt-4 rounded-2xl border border-red-200/80 dark:border-red-900/40 bg-white dark:bg-[#161616] divide-y divide-red-100 dark:divide-red-950/40 shadow-2xs">
                  {/* Transfer Workspace */}
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                        Transfer workspace
                      </div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5">
                        Hand ownership of this workspace to someone else. They take over billing.
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => alert('Transfer workspace modal')}
                      className="px-3.5 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors shrink-0"
                    >
                      Transfer workspace
                    </button>
                  </div>

                  {/* Delete Workspace */}
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                        Delete workspace
                      </div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5">
                        Permanently delete this workspace and all projects and its data in it.
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => alert('Delete workspace modal')}
                      className="px-3.5 py-2 rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-xs font-semibold hover:bg-red-100 transition-colors shrink-0"
                    >
                      Delete workspace
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: GitHub Tab */}
          {activeTab === 'github' && (
            <div className="mt-8 space-y-6">
              <h2 className="text-base font-semibold text-neutral-900 dark:text-white">GitHub Integration</h2>
              <div className="p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
                    <GithubLogo size={22} weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-neutral-900 dark:text-white">GitHub Organization</h3>
                    <p className="text-[11.5px] text-neutral-400 mt-0.5">
                      Sync site repositories and trigger edge deployments on git push.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsGithubConnected(!isGithubConnected)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    isGithubConnected
                      ? 'border border-neutral-200 text-red-600 hover:bg-red-50'
                      : 'bg-black dark:bg-white text-white dark:text-black hover:opacity-90'
                  }`}
                >
                  {isGithubConnected ? 'Disconnect' : 'Connect GitHub'}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
