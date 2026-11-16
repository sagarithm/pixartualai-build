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
  Plus,
} from '@phosphor-icons/react';

export default function ConnectorsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'installed'>('all');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedConnector, setSelectedConnector] = useState<any | null>(null);

  const categories = [
    { name: 'All', count: '1,498' },
    { name: 'Developer Tools', count: '170' },
    { name: 'Artificial Intelligence', count: '73' },
    { name: 'Analytics', count: '64' },
    { name: 'CRM', count: '53' },
    { name: 'Marketing Automation', count: '51' },
    { name: 'Documents', count: '50' },
    { name: 'Images & Design', count: '43' },
    { name: 'Email', count: '39' },
    { name: 'Project Management', count: '39' },
    { name: 'Security & Identity', count: '34' },
    { name: 'Ecommerce', count: '34' },
    { name: 'Web Scraping & Browser', count: '27' },
    { name: 'Databases', count: '23' },
    { name: 'Productivity', count: '23' },
    { name: 'Payment Processing', count: '18' },
    { name: 'Team Chat', count: '10' },
  ];

  const initialConnectors = [
    {
      id: 'stripe',
      name: 'Stripe',
      category: 'Payment Processing',
      description: 'Accept credit card payments, setup recurring subscriptions, and manage checkout sessions with webhooks.',
      icon: '/images/connectors/stripe.svg',
      installed: true,
      authType: 'Connect OAuth',
    },
    {
      id: 'slack',
      name: 'Slack',
      category: 'Team Chat',
      description: 'Send instant lead alerts, form submissions, and customer inquiries into dedicated Slack channels.',
      icon: '/images/connectors/slack.svg',
      installed: true,
      authType: 'Bot Token',
    },
    {
      id: 'googledrive',
      name: 'Google Drive',
      category: 'Documents',
      description: 'Access and sync media assets, PDF brochures, spreadsheets, and files from Google Drive.',
      icon: '/images/connectors/googledrive.svg',
      installed: true,
      authType: 'Google OAuth',
    },
    {
      id: 'github',
      name: 'GitHub',
      category: 'Developer Tools',
      description: 'Push generated code, commit layout changes, and trigger CI/CD deployment pipelines.',
      icon: '/images/connectors/github.svg',
      installed: true,
      authType: 'GitHub App',
    },
    {
      id: 'supabase',
      name: 'Supabase',
      category: 'Databases',
      description: 'Read and write to PostgreSQL databases, manage user auth tables, and query realtime rows.',
      icon: '/images/connectors/supabase.svg',
      installed: false,
      authType: 'Service Role Key',
    },
    {
      id: 'notion',
      name: 'Notion',
      category: 'Documents',
      description: 'Use Notion databases as headless CMS content sources for articles, guides, and FAQs.',
      icon: '/images/connectors/notion.svg',
      installed: false,
      authType: 'Internal Integration',
    },
    {
      id: 'figma',
      name: 'Figma',
      category: 'Images & Design',
      description: 'Extract design frames, colors, and typography tokens directly into live CSS styles.',
      icon: '/images/connectors/figma.svg',
      installed: false,
      authType: 'Personal Access Token',
    },
    {
      id: 'airtable',
      name: 'Airtable',
      category: 'Databases',
      description: 'Sync forms, contacts, and inventory records into structured Airtable spreadsheets.',
      icon: '/images/connectors/airtable.svg',
      installed: false,
      authType: 'API Token',
    },
  ];

  const [connectors, setConnectors] = useState(initialConnectors);

  const toggleConnect = (id: string) => {
    setConnectors((prev) =>
      prev.map((c) => (c.id === id ? { ...c, installed: !c.installed } : c))
    );
  };

  const installedCount = connectors.filter((c) => c.installed).length;

  const filteredConnectors = connectors.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || c.category === selectedCategory;
    const matchesTab = activeTab === 'all' || c.installed;

    return matchesSearch && matchesCategory && matchesTab;
  });

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1200px] w-full mx-auto">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Connectors</h1>
            <p className="text-xs text-neutral-500 mt-1 max-w-2xl leading-relaxed">
              Connect the tools you already use, like Stripe, Slack, Google, and Notion, so the sites and apps you build can read and write to them automatically, with no API keys.
            </p>
          </div>

          {/* 3 Feature Highlights (Exact 1:1 PixartualAI Parity) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <h3 className="text-xs font-semibold text-neutral-900 dark:text-white">Connect once</h3>
              <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Sign in a tool once and reuse it across every project.
              </p>
            </div>
            <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <h3 className="text-xs font-semibold text-neutral-900 dark:text-white">Secure by default</h3>
              <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Tokens are stored safely and auth is handled for you.
              </p>
            </div>
            <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <h3 className="text-xs font-semibold text-neutral-900 dark:text-white">Used while building</h3>
              <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Your agent reads and writes to them as it builds.
              </p>
            </div>
          </div>

          {/* Subheader Toolbar & Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8 pb-3 border-b border-neutral-200/80 dark:border-neutral-800 text-xs">
            {/* Tabs */}
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`pb-3 -mb-3 font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
                  activeTab === 'all'
                    ? 'border-black dark:border-white text-neutral-900 dark:text-white font-semibold'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <span>All</span>
                <span className="text-[11px] text-neutral-400">1,498</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('installed')}
                className={`pb-3 -mb-3 font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
                  activeTab === 'installed'
                    ? 'border-black dark:border-white text-neutral-900 dark:text-white font-semibold'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <span>Installed</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                  {installedCount}
                </span>
              </button>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <MagnifyingGlass size={14} className="absolute left-3 top-2.5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search 1,498 connectors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-accent shadow-2xs"
              />
            </div>
          </div>

          {/* Main Body: Categories Sidebar + Connectors Grid */}
          <div className="flex flex-col md:flex-row gap-8 mt-6">
            {/* Categories list */}
            <div className="w-full md:w-56 shrink-0 space-y-1">
              <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2 px-2">
                Categories
              </div>
              <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-1 pb-2 md:pb-0">
                {categories.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedCategory(c.name)}
                    className={`flex items-center justify-between px-3 py-1.5 rounded-xl text-xs transition-colors shrink-0 text-left ${
                      selectedCategory === c.name
                        ? 'bg-neutral-100 dark:bg-neutral-800 font-semibold text-neutral-900 dark:text-white'
                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/60'
                    }`}
                  >
                    <span>{c.name}</span>
                    <span className="text-[11px] text-neutral-400 font-mono ml-2">{c.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Connectors Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredConnectors.map((c) => (
                <div
                  key={c.id}
                  className="p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-all group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-stone-50 dark:bg-neutral-800/60 flex items-center justify-center p-2 shadow-2xs shrink-0">
                          <Image src={c.icon} alt={c.name} width={24} height={24} />
                        </div>
                        <div>
                          <h2 className="text-xs font-bold text-neutral-900 dark:text-white">{c.name}</h2>
                          <span className="text-[10px] text-neutral-400">{c.category}</span>
                        </div>
                      </div>

                      {c.installed ? (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center gap-1">
                          <Check size={10} weight="bold" /> Connected
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
                          {c.authType}
                        </span>
                      )}
                    </div>

                    <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 mt-3 leading-relaxed">
                      {c.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                    <span className="text-[10.5px] text-neutral-400">Zero API keys needed</span>
                    <button
                      type="button"
                      onClick={() => toggleConnect(c.id)}
                      className={`px-3 py-1 rounded-xl text-xs font-medium transition-colors ${
                        c.installed
                          ? 'border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                          : 'bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-90'
                      }`}
                    >
                      {c.installed ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
