'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import {
  Users,
  Plus,
  MagnifyingGlass,
  X,
  DotsThree,
  Check,
  ShieldCheck,
} from '@phosphor-icons/react';

export default function MembersPage() {
  const [activeTab, setActiveTab] = useState<'members' | 'roles'>('members');
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'Admin' | 'Member' | 'Viewer'>('Member');

  const [membersList, setMembersList] = useState([
    {
      id: 'm1',
      name: 'Sagarithm',
      email: 'sagarithm@gmail.com',
      avatar: '/images/user-avatar.png',
      role: 'Owner',
      status: 'Active',
      lastActive: 'Just now',
      dateAdded: 'Nov 14, 2026',
    },
  ]);

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail.trim()) return;

    setMembersList([
      ...membersList,
      {
        id: `m-${Date.now()}`,
        name: inviteEmail.split('@')[0],
        email: inviteEmail.trim(),
        avatar: '/images/user-avatar.png',
        role: inviteRole,
        status: 'Invited',
        lastActive: 'Pending',
        dateAdded: 'Today',
      },
    ]);

    setInviteEmail('');
    setIsInviteModalOpen(false);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1000px] w-full mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Members</h1>
              <p className="text-xs text-neutral-500 mt-1">
                Manage who can access this workspace and their roles.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsInviteModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 self-start sm:self-auto shadow-2xs"
            >
              <Plus size={14} />
              <span>Invite members</span>
            </button>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-6 mt-6 border-b border-neutral-200/80 dark:border-neutral-800 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('members')}
              className={`pb-3 font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
                activeTab === 'members'
                  ? 'border-black dark:border-white text-neutral-900 dark:text-white font-semibold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <span>Members</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                {membersList.length}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('roles')}
              className={`pb-3 font-medium transition-colors border-b-2 ${
                activeTab === 'roles'
                  ? 'border-black dark:border-white text-neutral-900 dark:text-white font-semibold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Roles
            </button>
          </div>

          {/* Tab 1: Members Table */}
          {activeTab === 'members' && (
            <div className="mt-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] overflow-hidden shadow-2xs divide-y divide-neutral-100 dark:divide-neutral-800/80">
              <div className="grid grid-cols-12 px-5 py-3 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider bg-stone-50/50 dark:bg-neutral-900/50">
                <div className="col-span-5">User</div>
                <div className="col-span-2">Role</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Last active</div>
                <div className="col-span-1 text-right">Added</div>
              </div>

              {membersList.map((m) => (
                <div
                  key={m.id}
                  className="grid grid-cols-12 px-5 py-3.5 text-xs items-center hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors"
                >
                  <div className="col-span-5 flex items-center gap-3 min-w-0 pr-2">
                    <div className="w-8 h-8 rounded-xl overflow-hidden shadow-2xs shrink-0 border border-black/5 bg-[#f8f6f0]">
                      <Image
                        src={m.avatar}
                        alt={m.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-neutral-900 dark:text-white truncate">{m.name}</div>
                      <div className="text-[11px] text-neutral-400 truncate">{m.email}</div>
                    </div>
                  </div>

                  <div className="col-span-2 font-medium text-neutral-700 dark:text-neutral-300">
                    <span className="px-2 py-0.5 rounded-full text-[10.5px] bg-stone-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                      {m.role}
                    </span>
                  </div>

                  <div className="col-span-2">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        m.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
                          : 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400'
                      }`}
                    >
                      {m.status}
                    </span>
                  </div>

                  <div className="col-span-2 text-neutral-500 text-[11.5px]">{m.lastActive}</div>
                  <div className="col-span-1 text-right text-neutral-400 text-[11px] font-mono">{m.dateAdded}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Roles Information */}
          {activeTab === 'roles' && (
            <div className="mt-6 space-y-4">
              <div className="p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                  <div>
                    <h3 className="text-xs font-bold text-neutral-900 dark:text-white">Owner</h3>
                    <p className="text-[11.5px] text-neutral-400">Full workspace access, billing ownership, and member deletion permissions.</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-neutral-100 dark:bg-neutral-800">Default</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                  <div>
                    <h3 className="text-xs font-bold text-neutral-900 dark:text-white">Admin</h3>
                    <p className="text-[11.5px] text-neutral-400">Can create projects, connect external tools, and invite new team members.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-neutral-900 dark:text-white">Member</h3>
                    <p className="text-[11.5px] text-neutral-400">Can view and edit canvas experiences and submit AI generation prompts.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Invite Member Modal */}
          {isInviteModalOpen && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 px-fadein">
              <div className="w-full max-w-md rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] shadow-2xl p-6 text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Invite Team Member</h3>
                  <button
                    onClick={() => setIsInviteModalOpen(false)}
                    className="p-1 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  >
                    <X size={16} />
                  </button>
                </div>

                <form onSubmit={handleInvite} className="mt-4 space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="teammate@company.com"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      Role
                    </label>
                    <select
                      value={inviteRole}
                      onChange={(e) => setInviteRole(e.target.value as any)}
                      className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-xs text-neutral-900 dark:text-white focus:outline-none"
                    >
                      <option value="Admin">Admin — Can invite others & manage tools</option>
                      <option value="Member">Member — Can build and prompt projects</option>
                      <option value="Viewer">Viewer — Read-only access to canvas</option>
                    </select>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsInviteModalOpen(false)}
                      className="px-3.5 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-90"
                    >
                      Send Invite
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
