'use client';

import React, { useState } from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { Key, Plus, Trash, Copy, Check, ShieldCheck, X } from '@phosphor-icons/react';

export default function TokensPage() {
  const [tokens, setTokens] = useState([
    {
      id: 'tok_1',
      name: 'CLI Deployment Token',
      prefix: 'px_live_8f93...',
      created: 'Nov 10, 2026',
      lastUsed: '2 hours ago',
    },
    {
      id: 'tok_2',
      name: 'GitHub Action Webhook',
      prefix: 'px_live_12c4...',
      created: 'Nov 12, 2026',
      lastUsed: 'Yesterday',
    },
  ]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [tokenName, setTokenName] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tokenName.trim()) return;
    setTokens([
      ...tokens,
      {
        id: `tok_${Date.now()}`,
        name: tokenName.trim(),
        prefix: `px_live_${Math.random().toString(36).substring(2, 6)}...`,
        created: 'Just now',
        lastUsed: 'Never',
      },
    ]);
    setTokenName('');
    setIsCreateOpen(false);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1000px] w-full mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">API Tokens</h1>
              <p className="text-xs text-neutral-500 mt-1">
                Personal access tokens authenticate programmatic API requests to manage deployments and sync CMS.
              </p>
            </div>

            <button
              onClick={() => setIsCreateOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:opacity-90 shadow-sm"
            >
              <Plus size={14} weight="bold" />
              <span>Create new token</span>
            </button>
          </div>

          {/* Tokens List */}
          <div className="my-8 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] overflow-hidden shadow-2xs divide-y divide-neutral-100 dark:divide-neutral-800">
            {tokens.map((tok) => (
              <div key={tok.id} className="p-4 sm:p-5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-stone-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                    <Key size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">{tok.name}</div>
                    <div className="font-mono text-neutral-400 text-[11px] mt-0.5">{tok.prefix}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-neutral-400 hidden sm:inline">Last used {tok.lastUsed}</span>
                  <button
                    onClick={() => handleCopy(tok.id, tok.prefix)}
                    className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-500 hover:text-neutral-900"
                    title="Copy prefix"
                  >
                    {copiedId === tok.id ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                  <button
                    onClick={() => setTokens(tokens.filter((t) => t.id !== tok.id))}
                    className="p-1.5 rounded-lg hover:bg-red-50 text-neutral-400 hover:text-red-500"
                    title="Revoke token"
                  >
                    <Trash size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Create Token Modal */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 mfy-fadein">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 shadow-2xl border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
              <h3 className="text-sm font-semibold">Create Personal Access Token</h3>
              <button onClick={() => setIsCreateOpen(false)} className="text-neutral-400">
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleCreate} className="mt-4 space-y-4 text-xs">
              <div>
                <label className="font-medium text-neutral-700 dark:text-neutral-300">Token Description</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CI/CD GitHub Action or Local CLI"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 dark:border-neutral-700 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsCreateOpen(false)}
                  className="px-3 py-1.5 rounded-xl border border-neutral-200 text-xs font-medium"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-1.5 rounded-xl bg-accent text-white text-xs font-semibold">
                  Generate Token
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
