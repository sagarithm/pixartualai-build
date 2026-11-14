'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import {
  SquaresFour,
  Plus,
  MagnifyingGlass,
  DotsThree,
  ArrowRight,
  FolderSimple,
  Copy,
  Trash,
  ShareNetwork,
  Export,
  Globe,
  Clock,
  Sparkle,
  Check,
} from '@phosphor-icons/react';

export default function ProjectsPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<'all' | 'owned' | 'archived'>('all');
  const [search, setSearch] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const initialProjects = [
    {
      id: 'orvane-cloned',
      name: 'Orvane (Cloned)',
      desc: 'High-tech drone & aerial electronics product showcase',
      edited: '1 week ago',
      created: 'Nov 5, 2026',
      coverUrl: '/images/orvane-preview.png',
      icon: '✈️',
      domain: 'orvane.pixartual.ai',
      status: 'Live',
    },
    {
      id: 'nova-saas',
      name: 'Nova SaaS Storefront',
      desc: 'Multi-tiered B2B subscription software with Stripe checkout',
      edited: '2 days ago',
      created: 'Nov 12, 2026',
      coverUrl: '/images/bento-generate.webp',
      icon: '⚡',
      domain: 'nova.pixartual.ai',
      status: 'Live',
    },
    {
      id: 'atelier-portfolio',
      name: 'Atelier Portfolio',
      desc: 'Minimalist creative agency and case study catalog',
      edited: '5 hours ago',
      created: 'Nov 14, 2026',
      coverUrl: '/images/atelier.jpg',
      icon: '🎨',
      domain: 'atelier-design.pixartual.ai',
      status: 'Draft',
    },
    {
      id: 'vancouver-directory',
      name: 'Vancouver City Guide',
      desc: 'Relational CMS directory for local culinary spots and parks',
      edited: '3 days ago',
      created: 'Nov 11, 2026',
      coverUrl: '/images/vancouver.jpg',
      icon: '🌲',
      domain: 'vancouver.pixartual.ai',
      status: 'Live',
    },
  ];

  const [projectsList, setProjectsList] = useState(initialProjects);

  const filtered = projectsList.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.desc.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopyLink = (domain: string, id: string) => {
    navigator.clipboard.writeText(`https://${domain}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = (id: string) => {
    setProjectsList((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1300px] w-full mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Projects</h1>
              <p className="text-xs text-neutral-500 mt-1">
                Manage, edit, publish, and monitor your web products and applications.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => router.push('/dashboard/studio')}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
              >
                <Plus size={14} weight="bold" />
                <span>New project</span>
              </button>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 my-6">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-200/60 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/60 self-start">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-white dark:bg-[#1a1a1a] text-neutral-900 dark:text-white shadow-2xs font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                All ({projectsList.length})
              </button>
              <button
                onClick={() => setFilter('owned')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  filter === 'owned'
                    ? 'bg-white dark:bg-[#1a1a1a] text-neutral-900 dark:text-white shadow-2xs font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Owned by me
              </button>
              <button
                onClick={() => setFilter('archived')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  filter === 'archived'
                    ? 'bg-white dark:bg-[#1a1a1a] text-neutral-900 dark:text-white shadow-2xs font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Archived (0)
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <MagnifyingGlass size={15} className="absolute left-3 top-2.5 text-neutral-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filter projects..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#181818] text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((proj) => (
              <div
                key={proj.id}
                onClick={() => router.push(`/dashboard/studio?template=${proj.id}`)}
                className="group flex flex-col rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] overflow-hidden shadow-2xs hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all cursor-pointer"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  <Image
                    src={proj.coverUrl}
                    alt={proj.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-[10px] font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        proj.status === 'Live' ? 'bg-emerald-500' : 'bg-amber-500'
                      }`}
                    />
                    <span>{proj.status}</span>
                  </div>
                </div>

                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{proj.icon}</span>
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white truncate">
                        {proj.name}
                      </h3>
                    </div>
                    <p className="text-[11.5px] text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} />
                      <span>{proj.edited}</span>
                    </div>

                    <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => handleCopyLink(proj.domain, proj.id)}
                        className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-900 transition-colors"
                        title="Copy published link"
                      >
                        {copiedId === proj.id ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                      </button>
                      <button
                        onClick={() => handleDelete(proj.id)}
                        className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 text-neutral-400 hover:text-red-500 transition-colors"
                        title="Delete project"
                      >
                        <Trash size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Create Blank Card */}
            <div
              onClick={() => router.push('/dashboard/studio')}
              className="flex flex-col items-center justify-center aspect-[16/10] rounded-2xl border-2 border-dashed border-neutral-200 dark:border-neutral-800 hover:border-accent hover:bg-accent/5 transition-all cursor-pointer p-6 text-center group"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:bg-accent group-hover:text-white flex items-center justify-center text-neutral-500 transition-colors mb-2">
                <Plus size={18} />
              </div>
              <span className="text-[13px] font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-accent transition-colors">
                Create new product
              </span>
              <span className="text-[11px] text-neutral-400 mt-0.5">
                Generate with AI or blank canvas
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
