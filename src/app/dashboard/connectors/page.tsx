'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import {
  Plugs,
  MagnifyingGlass,
  Check,
  ShieldCheck,
  Key,
  X,
  ArrowSquareOut,
  SlidersHorizontal,
} from '@phosphor-icons/react';

export default function ConnectorsPage() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedConnector, setSelectedConnector] = useState<any | null>(null);

  const categories = ['All', 'Popular', 'Database', 'Storage', 'Developer', 'Communication'];

  const initialConnectors = [
    {
      id: 'google-drive',
      name: 'Google Drive',
      category: 'Storage',
      desc: 'Read and sync document files, product assets, and media directly into your applications.',
      icon: '/images/connectors/googledrive.svg',
      connected: true,
      popular: true,
      authType: 'One-click OAuth',
    },
    {
      id: 'github',
      name: 'GitHub',
      category: 'Developer',
      desc: 'Sync generated code directly to your GitHub repository with automatic CI/CD triggers.',
      icon: '/images/connectors/github.svg',
      connected: true,
      popular: true,
      authType: 'One-click OAuth',
    },
    {
      id: 'slack',
      name: 'Slack',
      category: 'Communication',
      desc: 'Receive instant lead notifications, form submissions, and customer alerts in team channels.',
      icon: '/images/connectors/slack.svg',
      connected: true,
      popular: true,
      authType: 'Webhook / Bot',
    },
    {
      id: 'supabase',
      name: 'Supabase',
      category: 'Database',
      desc: 'Seamlessly query and mutate PostgreSQL tables and user auth schemas with zero boilerplate.',
      icon: '/images/connectors/supabase.svg',
      connected: true,
      popular: true,
      authType: 'Direct API Key',
    },
    {
      id: 'stripe',
      name: 'Stripe',
      category: 'Popular',
      desc: 'Enable checkout sessions, subscription paywalls, and customer billing with real-time webhooks.',
      icon: '/images/connectors/stripe.svg',
      connected: false,
      popular: true,
      authType: 'Restricted Key',
    },
    {
      id: 'notion',
      name: 'Notion',
      category: 'Storage',
      desc: 'Use Notion databases as headless CMS content sources for blogs, roadmaps, and documentation.',
      icon: '/images/connectors/notion.svg',
      connected: false,
      popular: true,
      authType: 'Integration Token',
    },
    {
      id: 'figma',
      name: 'Figma',
      category: 'Developer',
      desc: 'Import design tokens, vector typography, and frame hierarchies directly into Pixartual canvas.',
      icon: '/images/connectors/figma.svg',
      connected: false,
      popular: true,
      authType: 'Personal Access Token',
    },
    {
      id: 'airtable',
      name: 'Airtable',
      category: 'Database',
      desc: 'Read and write customer inquiries, product inventory, and waitlist tables in real-time.',
      icon: '/images/connectors/airtable.svg',
      connected: false,
      popular: false,
      authType: 'OAuth 2.0',
    },
    {
      id: 'discord',
      name: 'Discord',
      category: 'Communication',
      desc: 'Send webhook notifications and manage community access gates automatically.',
      icon: '/images/connectors/discord.svg',
      connected: false,
      popular: false,
      authType: 'Webhook URL',
    },
    {
      id: 'dropbox',
      name: 'Dropbox',
      category: 'Storage',
      desc: 'Store user uploads, client deliverables, and static file backups safely in Dropbox folders.',
      icon: '/images/connectors/dropbox.svg',
      connected: false,
      popular: false,
      authType: 'OAuth 2.0',
    },
  ];

  const [connectors, setConnectors] = useState(initialConnectors);

  const toggleConnection = (id: string) => {
    setConnectors((prev) =>
      prev.map((c) => (c.id === id ? { ...c, connected: !c.connected } : c))
    );
  };

  const filtered = connectors.filter((c) => {
    const matchesCat =
      selectedCat === 'All' ||
      c.category === selectedCat ||
      (selectedCat === 'Popular' && c.popular);
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1300px] w-full mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Connectors</h1>
              <p className="text-xs text-neutral-500 mt-1">
                Link external databases, storage, and developer APIs. Your web apps can read and write to them with zero API key leaks.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300">
                {connectors.filter((c) => c.connected).length} active connectors
              </span>
            </div>
          </div>

          {/* Categories & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 my-6">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCat === cat
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold'
                      : 'bg-white dark:bg-[#181818] text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64 shrink-0">
              <MagnifyingGlass size={15} className="absolute left-3 top-2.5 text-neutral-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search connectors..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#181818] text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-stone-50 dark:bg-neutral-800 p-2 flex items-center justify-center border border-neutral-100 dark:border-neutral-700 shadow-2xs">
                      <Image src={item.icon} alt={item.name} width={24} height={24} />
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleConnection(item.id)}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                        item.connected
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300'
                          : 'bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90'
                      }`}
                    >
                      {item.connected ? 'Connected' : 'Connect'}
                    </button>
                  </div>

                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mt-3">
                    {item.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>{item.authType}</span>
                  <button
                    onClick={() => setSelectedConnector(item)}
                    className="hover:text-neutral-800 dark:hover:text-neutral-200 font-medium"
                  >
                    Configure
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Configure Modal */}
      {selectedConnector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 mfy-fadein">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 shadow-2xl border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-stone-50 dark:bg-neutral-800 p-1 flex items-center justify-center">
                  <Image src={selectedConnector.icon} alt={selectedConnector.name} width={18} height={18} />
                </div>
                <h3 className="text-sm font-semibold">{selectedConnector.name} Settings</h3>
              </div>
              <button onClick={() => setSelectedConnector(null)} className="text-neutral-400">
                <X size={16} />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs">
              <div>
                <label className="font-medium text-neutral-700 dark:text-neutral-300">
                  Authentication Method
                </label>
                <div className="mt-1 p-2 rounded-xl bg-stone-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">
                  {selectedConnector.authType}
                </div>
              </div>

              <div>
                <label className="font-medium text-neutral-700 dark:text-neutral-300">
                  Security Boundary
                </label>
                <p className="mt-1 text-neutral-500 leading-relaxed">
                  Encrypted at rest with AES-256 and only decrypted inside serverless edge function execution perimeters.
                </p>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => {
                    toggleConnection(selectedConnector.id);
                    setSelectedConnector(null);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold ${
                    selectedConnector.connected
                      ? 'bg-red-50 text-red-600 border border-red-200'
                      : 'bg-emerald-600 text-white'
                  }`}
                >
                  {selectedConnector.connected ? 'Disconnect' : 'Connect Now'}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedConnector(null)}
                  className="px-3.5 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-xs font-medium"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
