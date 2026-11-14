'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import {
  Plus,
  MagnifyingGlass,
  CaretDown,
  FolderSimple,
  DotsThree,
  Check,
  Trash,
  Copy,
  X,
  ChatCircleDots,
} from '@phosphor-icons/react';

export default function ProjectsPage() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('Latest updated');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(true);

  const projects = [
    {
      id: 'orvane-cloned',
      slug: 'teal-tide-zmk',
      title: 'Orvane (Cloned)',
      edited: 'Edited 26m ago',
      coverUrl: '/images/orvane-preview.png',
      avatarBg: 'bg-gradient-to-tr from-orange-500 to-amber-500',
    },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10 relative">
        <div className="max-w-[1300px] w-full mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Projects</h1>
              <p className="text-xs text-neutral-500 mt-1">
                Create and manage all the projects in your workspace.
              </p>
            </div>

            <button
              type="button"
              onClick={() => router.push('/dashboard/studio')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity shadow-2xs"
            >
              <Plus size={14} weight="bold" />
              <span>Create</span>
            </button>
          </div>

          {/* Filter & Sort Bar (Matching Image 1) */}
          <div className="flex items-center justify-between gap-4 mt-6 mb-8">
            {/* Search Projects */}
            <div className="relative w-full max-w-xs">
              <MagnifyingGlass size={15} className="absolute left-3.5 top-2.5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search projects"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 shadow-2xs"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] text-xs font-normal text-neutral-700 dark:text-neutral-300 shadow-2xs hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                <span>{sortBy}</span>
                <CaretDown size={12} className="text-neutral-400" />
              </button>

              {isSortOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-40 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1c1c1c] p-1 shadow-lg z-50 text-xs">
                  {['Latest updated', 'Oldest updated', 'Alphabetical'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setSortBy(item);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors ${
                        sortBy === item
                          ? 'bg-neutral-100 dark:bg-neutral-800 font-semibold text-neutral-900 dark:text-white'
                          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Cards Grid (Image 1 Exact Layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Card 1: Archive Folder Card */}
            <Link
              href="/dashboard/archive"
              className="group flex flex-col cursor-pointer"
            >
              {/* 2x2 Quadrant Preview */}
              <div className="aspect-[16/10] w-full rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] p-2 overflow-hidden shadow-2xs group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-all">
                <div className="grid grid-cols-2 grid-rows-2 gap-1.5 h-full w-full">
                  <div className="rounded-xl bg-[#f0f0f0] dark:bg-neutral-800/80" />
                  <div className="rounded-xl bg-[#f0f0f0] dark:bg-neutral-800/80" />
                  <div className="rounded-xl bg-[#f0f0f0] dark:bg-neutral-800/80" />
                  <div className="rounded-xl bg-[#f0f0f0] dark:bg-neutral-800/80" />
                </div>
              </div>

              {/* Bottom Meta */}
              <div className="mt-3 pl-1">
                <div className="text-[13px] font-semibold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors">
                  Archive
                </div>
                <div className="flex items-center gap-1.5 text-[11.5px] text-neutral-400 mt-0.5">
                  <FolderSimple size={13} className="text-neutral-400" />
                  <span>No projects</span>
                </div>
              </div>
            </Link>

            {/* Card 2: Orvane (Cloned) Project Card */}
            {projects.map((p) => (
              <div
                key={p.id}
                onClick={() => router.push(`/dashboard/projects/${p.slug}`)}
                className="group flex flex-col cursor-pointer"
              >
                {/* Thumbnail Preview */}
                <div className="aspect-[16/10] w-full rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-[#eef2f5] dark:bg-[#161616] overflow-hidden shadow-2xs group-hover:border-neutral-300 dark:group-hover:border-neutral-700 relative transition-all">
                  <Image
                    src={p.coverUrl}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-3 py-1.5 rounded-xl bg-white/95 text-neutral-900 text-xs font-semibold shadow-lg">
                      Open in Studio
                    </span>
                  </div>
                </div>

                {/* Bottom Meta */}
                <div className="mt-3 flex items-center gap-2.5 pl-1">
                  <div className={`w-5 h-5 rounded-full ${p.avatarBg} flex items-center justify-center text-white text-[10px] shadow-2xs shrink-0 overflow-hidden`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-semibold text-neutral-900 dark:text-white truncate">
                      {p.title}
                    </div>
                    <div className="text-[11.5px] text-neutral-400">
                      {p.edited}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Support Widget (Image 1 Bottom Right) */}
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-40">
          {isSupportOpen && (
            <div className="w-72 p-3.5 rounded-2xl bg-white dark:bg-[#181818] border border-neutral-200/90 dark:border-neutral-800 shadow-xl mfy-fadein relative">
              <button
                type="button"
                onClick={() => setIsSupportOpen(false)}
                className="absolute top-2.5 right-2.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 p-1"
              >
                <X size={13} />
              </button>
              <div className="flex items-center gap-2.5">
                <div className="flex items-center -space-x-1.5">
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-white dark:border-neutral-800 shadow-2xs">
                    <Image src="/images/user-avatar.png" alt="Support 1" width={24} height={24} className="object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-white dark:border-neutral-800 shadow-2xs bg-amber-400" />
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-white dark:border-neutral-800 shadow-2xs bg-emerald-400" />
                </div>
                <div className="text-xs font-semibold text-neutral-900 dark:text-white">Need a hand?</div>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1.5">
                Our support team is just a message away.
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsSupportOpen(!isSupportOpen)}
            className="w-11 h-11 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
            title="Support chat"
          >
            <ChatCircleDots size={22} weight="fill" />
          </button>
        </div>
      </main>
    </div>
  );
}
