'use client';

import React, { useState } from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { Users, Plus, X, EnvelopeSimple } from '@phosphor-icons/react';

export default function WorkspaceMembersPage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [role, setRole] = useState<'Admin' | 'Editor' | 'Viewer'>('Editor');

  const members = [
    { name: 'Sagarithm', email: 'sagarithm@gmail.com', role: 'Owner' },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1000px] w-full mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Workspace Members</h1>
              <p className="text-xs text-neutral-500 mt-1">Manage team member access and permissions across your projects.</p>
            </div>

            <button
              onClick={() => setIsInviteOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-accent text-white text-xs font-semibold hover:opacity-90 shadow-sm"
            >
              <Plus size={14} weight="bold" />
              <span>Invite member</span>
            </button>
          </div>

          <div className="my-8 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] overflow-hidden shadow-2xs divide-y divide-neutral-100 dark:divide-neutral-800">
            {members.map((m) => (
              <div key={m.email} className="p-4 sm:p-5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-200 via-pink-200 to-amber-200 p-0.5 flex items-center justify-center font-bold text-xs text-neutral-900 shadow-2xs">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">{m.name}</div>
                    <div className="text-neutral-400 text-[11px]">{m.email}</div>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold text-[11px]">
                  {m.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Invite Modal */}
      {isInviteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 mfy-fadein">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 shadow-2xl border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
              <h3 className="text-sm font-semibold">Invite Team Member</h3>
              <button onClick={() => setIsInviteOpen(false)} className="text-neutral-400">
                <X size={16} />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Invite sent to ${inviteEmail}`);
                setIsInviteOpen(false);
              }}
              className="mt-4 space-y-4 text-xs"
            >
              <div>
                <label className="font-medium text-neutral-700 dark:text-neutral-300">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="colleague@company.com"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 dark:border-neutral-700 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label className="font-medium text-neutral-700 dark:text-neutral-300">Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as any)}
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 dark:border-neutral-700 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-accent"
                >
                  <option value="Admin">Admin (Full project & billing access)</option>
                  <option value="Editor">Editor (Can edit & publish)</option>
                  <option value="Viewer">Viewer (Read-only)</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsInviteOpen(false)}
                  className="px-3 py-1.5 rounded-xl border border-neutral-200 text-xs font-medium"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-1.5 rounded-xl bg-accent text-white text-xs font-semibold">
                  Send Invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
