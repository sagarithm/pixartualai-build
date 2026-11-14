'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import {
  Globe,
  Plus,
  Check,
  ShieldCheck,
  ArrowsClockwise,
  Trash,
  Copy,
  MagnifyingGlass,
  ArrowRight,
  X,
  Lock,
  Sparkle,
  CheckCircle,
} from '@phosphor-icons/react';

export default function DomainsDashboardPage() {
  const [activeTab, setActiveTab] = useState<'buy' | 'domains'>('buy');
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [domainSearch, setDomainSearch] = useState('');
  const [newDomain, setNewDomain] = useState('');
  const [selectedProject, setSelectedProject] = useState('orvane-cloned');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const extensions = [
    { ext: '.com', reg: '$15.39 / year', renewal: '$24.19 / year' },
    { ext: '.net', reg: '$18.14 / year', renewal: '$26.39 / year' },
    { ext: '.org', reg: '$10.99 / year', renewal: '$21.99 / year' },
    { ext: '.co', reg: '$32.99 / year', renewal: '$49.49 / year' },
    { ext: '.io', reg: '$59.39 / year', renewal: '$87.99 / year' },
    { ext: '.ai', reg: '$219.98 / 2 years', renewal: '$219.98 / 2 years' },
    { ext: '.app', reg: '$16.49 / year', renewal: '$29.69 / year' },
    { ext: '.dev', reg: '$16.49 / year', renewal: '$25.29 / year' },
    { ext: '.me', reg: '$15.39 / year', renewal: '$30.79 / year' },
    { ext: '.info', reg: '$6.59 / year', renewal: '$43.99 / year' },
    { ext: '.site', reg: '$1.85 / year', renewal: '$54.99 / year' },
    { ext: '.online', reg: '$1.85 / year', renewal: '$54.99 / year' },
    { ext: '.store', reg: '$1.85 / year', renewal: '$83.59 / year' },
    { ext: '.shop', reg: '$3.39 / year', renewal: '$65.99 / year' },
    { ext: '.tech', reg: '$8.79 / year', renewal: '$98.99 / year' },
    { ext: '.studio', reg: '$24.19 / year', renewal: '$82.49 / year' },
    { ext: '.design', reg: '$21.99 / year', renewal: '$89.09 / year' },
    { ext: '.agency', reg: '$6.59 / year', renewal: '$49.49 / year' },
    { ext: '.cloud', reg: '$10.99 / year', renewal: '$43.99 / year' },
    { ext: '.blog', reg: '$3.39 / year', renewal: '$41.79 / year' },
  ];

  const [connectedDomains, setConnectedDomains] = useState([
    {
      id: 'd1',
      domain: 'sgr.pixartual.website',
      project: 'Orvane (Cloned)',
      status: 'Active',
      ssl: 'Active',
      type: 'Managed Subdomain',
      target: 'proxy.pixartual.ai',
    },
    {
      id: 'd2',
      domain: 'orvane.io',
      project: 'Orvane (Cloned)',
      status: 'Valid Configuration',
      ssl: 'Active',
      type: 'Primary Domain',
      target: 'cname.pixartual.ai',
    },
  ]);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleConnectDomain = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDomain.trim()) return;

    setConnectedDomains([
      ...connectedDomains,
      {
        id: `d-${Date.now()}`,
        domain: newDomain.toLowerCase().trim(),
        project: selectedProject === 'orvane-cloned' ? 'Orvane (Cloned)' : 'Nova SaaS Storefront',
        status: 'Pending Verification',
        ssl: 'Provisioning',
        type: 'Primary Domain',
        target: 'cname.pixartual.ai',
      },
    ]);

    setNewDomain('');
    setIsConnectModalOpen(false);
  };

  const handleRemoveDomain = (id: string) => {
    setConnectedDomains((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1100px] w-full mx-auto">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Domains</h1>
            <p className="text-xs text-neutral-500 mt-1 max-w-2xl leading-relaxed">
              Find a name for your next site and buy it for this workspace. PixartualAI registers it, adds the DNS records your sites and email need, and reminds you before it expires.
            </p>
          </div>

          {/* 3 Feature Highlights (Exact 1:1 Modulify Parity) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <h3 className="text-xs font-semibold text-neutral-900 dark:text-white">Every popular extension</h3>
              <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Check .com, .ai, .io and hundreds more in one search.
              </p>
            </div>
            <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <h3 className="text-xs font-semibold text-neutral-900 dark:text-white">DNS set up for you</h3>
              <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Sites and email on a bought domain get their records added.
              </p>
            </div>
            <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs">
              <h3 className="text-xs font-semibold text-neutral-900 dark:text-white">Privacy and reminders</h3>
              <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                WHOIS privacy where offered, and emails before it expires.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-6 mt-8 border-b border-neutral-200/80 dark:border-neutral-800 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('buy')}
              className={`pb-3 font-medium transition-colors border-b-2 ${
                activeTab === 'buy'
                  ? 'border-black dark:border-white text-neutral-900 dark:text-white font-semibold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Buy a domain
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('domains')}
              className={`pb-3 font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
                activeTab === 'domains'
                  ? 'border-black dark:border-white text-neutral-900 dark:text-white font-semibold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <span>Your domains</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                {connectedDomains.length}
              </span>
            </button>
          </div>

          {/* TAB 1: Buy a Domain */}
          {activeTab === 'buy' && (
            <div className="mt-6 space-y-8">
              {/* Domain Search Box */}
              <div className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] p-4 shadow-2xs">
                <div className="flex items-center gap-3">
                  <MagnifyingGlass size={18} className="text-neutral-400 shrink-0 ml-1" />
                  <input
                    type="text"
                    value={domainSearch}
                    onChange={(e) => setDomainSearch(e.target.value)}
                    placeholder="Search for a domain (e.g. mycompany.com)..."
                    className="flex-1 bg-transparent border-0 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (!domainSearch.trim()) return;
                      alert(`Searching registry availability for: ${domainSearch}`);
                    }}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Popular Extensions Table */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Popular Extensions</h2>
                    <p className="text-[11.5px] text-neutral-400 mt-0.5">What each extension costs to register and renew.</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] overflow-hidden shadow-2xs divide-y divide-neutral-100 dark:divide-neutral-800/80">
                  <div className="grid grid-cols-3 px-5 py-3 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider bg-stone-50/50 dark:bg-neutral-900/50">
                    <div>Extension</div>
                    <div>Registration</div>
                    <div>Renewal</div>
                  </div>

                  {extensions.map((ext) => (
                    <div
                      key={ext.ext}
                      className="grid grid-cols-3 px-5 py-3 text-xs items-center hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors"
                    >
                      <div className="font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>{ext.ext}</span>
                      </div>
                      <div className="text-neutral-600 dark:text-neutral-400 font-mono text-[11.5px]">{ext.reg}</div>
                      <div className="text-neutral-600 dark:text-neutral-400 font-mono text-[11.5px]">{ext.renewal}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Your Domains */}
          {activeTab === 'domains' && (
            <div className="mt-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Connected Domains</h2>
                  <p className="text-[11.5px] text-neutral-400 mt-0.5">Domains pointed to PixartualAI edge network.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsConnectModalOpen(true)}
                  className="px-3.5 py-1.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-2xs"
                >
                  <Plus size={14} />
                  <span>Connect domain</span>
                </button>
              </div>

              <div className="space-y-3">
                {connectedDomains.map((d) => (
                  <div
                    key={d.id}
                    className="p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-300 shrink-0">
                        <Globe size={18} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-neutral-900 dark:text-white">{d.domain}</span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                            {d.status}
                          </span>
                        </div>
                        <div className="text-[11px] text-neutral-400 mt-0.5 flex items-center gap-2">
                          <span>Target: {d.project}</span>
                          <span>•</span>
                          <span>CNAME: {d.target}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        type="button"
                        onClick={() => handleCopy(d.target, d.id)}
                        className="px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300 transition-colors flex items-center gap-1.5"
                      >
                        {copiedKey === d.id ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                        <span>{copiedKey === d.id ? 'Copied' : 'Copy DNS'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRemoveDomain(d.id)}
                        className="p-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40 text-neutral-400 transition-colors"
                        title="Remove domain"
                      >
                        <Trash size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Connect Domain Modal */}
          {isConnectModalOpen && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 mfy-fadein">
              <div className="w-full max-w-md rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] shadow-2xl p-6 text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white">Connect Custom Domain</h3>
                  <button
                    onClick={() => setIsConnectModalOpen(false)}
                    className="p-1 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  >
                    <X size={16} />
                  </button>
                </div>

                <form onSubmit={handleConnectDomain} className="mt-4 space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      Domain Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. mydomain.com"
                      value={newDomain}
                      onChange={(e) => setNewDomain(e.target.value)}
                      className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      Route traffic to project
                    </label>
                    <select
                      value={selectedProject}
                      onChange={(e) => setSelectedProject(e.target.value)}
                      className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-xs text-neutral-900 dark:text-white focus:outline-none"
                    >
                      <option value="orvane-cloned">Orvane (Cloned)</option>
                      <option value="nova-saas">Nova SaaS Storefront</option>
                      <option value="atelier-portfolio">Atelier Portfolio</option>
                    </select>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsConnectModalOpen(false)}
                      className="px-3.5 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-90"
                    >
                      Connect Domain
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
