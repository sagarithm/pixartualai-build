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
} from '@phosphor-icons/react';

export default function DomainsDashboardPage() {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [newDomain, setNewDomain] = useState('');
  const [selectedProject, setSelectedProject] = useState('orvane-cloned');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [connectedDomains, setConnectedDomains] = useState([
    {
      id: 'd1',
      domain: 'orvane.io',
      project: 'Orvane (Cloned)',
      status: 'Valid Configuration',
      ssl: 'Active',
      type: 'Primary',
      target: 'cname.pixartual.ai',
    },
    {
      id: 'd2',
      domain: 'www.orvane.io',
      project: 'Orvane (Cloned)',
      status: 'Valid Configuration',
      ssl: 'Active',
      type: 'Redirect',
      target: 'orvane.io',
    },
    {
      id: 'd3',
      domain: 'novasuite.dev',
      project: 'Nova SaaS Storefront',
      status: 'Pending Verification',
      ssl: 'Provisioning',
      type: 'Primary',
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
        type: 'Primary',
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
        <div className="max-w-[1300px] w-full mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Custom Domains</h1>
              <p className="text-xs text-neutral-500 mt-1">
                Connect external domains, manage DNS routing, and monitor automatic wildcard SSL certificates.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsConnectModalOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
              >
                <Plus size={14} weight="bold" />
                <span>Connect domain</span>
              </button>
            </div>
          </div>

          {/* Connected Domains Table */}
          <div className="my-8 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] overflow-hidden shadow-2xs">
            <div className="p-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Active Domains</h3>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  Routed via Pixartual Edge Anycast CDN with automatic Let’s Encrypt TLS.
                </p>
              </div>
              <button
                type="button"
                onClick={() => alert('Checking DNS across all active edge points...')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                <ArrowsClockwise size={13} />
                <span>Refresh DNS</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800 bg-stone-50/60 dark:bg-neutral-900/40 text-neutral-400 font-medium">
                    <th className="py-3 px-4">Domain</th>
                    <th className="py-3 px-4">Assigned Project</th>
                    <th className="py-3 px-4">DNS Status</th>
                    <th className="py-3 px-4">SSL Security</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/80">
                  {connectedDomains.map((dom) => (
                    <tr key={dom.id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30">
                      <td className="py-3.5 px-4 font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
                        <Globe size={15} className="text-accent shrink-0" />
                        <span>{dom.domain}</span>
                        {dom.type === 'Primary' && (
                          <span className="px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[10px] font-medium text-neutral-600 dark:text-neutral-400">
                            Primary
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-neutral-600 dark:text-neutral-300">
                        {dom.project}
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                            dom.status === 'Valid Configuration'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300'
                              : 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              dom.status === 'Valid Configuration' ? 'bg-emerald-500' : 'bg-amber-500'
                            }`}
                          />
                          <span>{dom.status}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 text-[11px] text-neutral-600 dark:text-neutral-400">
                          <Lock size={12} className="text-emerald-600" />
                          <span>{dom.ssl}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => handleRemoveDomain(dom.id)}
                          className="p-1.5 text-neutral-400 hover:text-red-500 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                          title="Remove domain"
                        >
                          <Trash size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* DNS Configuration Instructions */}
          <div className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] p-6 shadow-2xs">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
              <ShieldCheck size={18} className="text-accent" />
              <span>DNS Record Setup Guidelines</span>
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Add the following record in your DNS provider (Cloudflare, GoDaddy, Namecheap) to route traffic to PixartualAI:
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-stone-50/50 dark:bg-neutral-900/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-semibold text-neutral-400 uppercase">CNAME Record</span>
                  <div className="text-xs font-mono font-medium text-neutral-900 dark:text-white mt-1">
                    Name: @ or www | Target: cname.pixartual.ai
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('cname.pixartual.ai', 'cname')}
                  className="p-2 rounded-lg hover:bg-white dark:hover:bg-neutral-800 text-neutral-500"
                >
                  {copiedKey === 'cname' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-stone-50/50 dark:bg-neutral-900/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-semibold text-neutral-400 uppercase">A Record (Apex fallback)</span>
                  <div className="text-xs font-mono font-medium text-neutral-900 dark:text-white mt-1">
                    Name: @ | Target: 76.76.21.21
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('76.76.21.21', 'a')}
                  className="p-2 rounded-lg hover:bg-white dark:hover:bg-neutral-800 text-neutral-500"
                >
                  {copiedKey === 'a' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Connect Domain Modal */}
      {isConnectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 mfy-fadein">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 shadow-2xl border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
              <h3 className="text-sm font-semibold">Connect Custom Domain</h3>
              <button onClick={() => setIsConnectModalOpen(false)} className="text-neutral-400">
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleConnectDomain} className="mt-4 space-y-4">
              <div>
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  Domain Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. app.mycompany.com or mysite.com"
                  value={newDomain}
                  onChange={(e) => setNewDomain(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  Select Project
                </label>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-accent"
                >
                  <option value="orvane-cloned">Orvane (Cloned)</option>
                  <option value="nova-saas">Nova SaaS Storefront</option>
                  <option value="atelier-portfolio">Atelier Portfolio</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsConnectModalOpen(false)}
                  className="px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-600 dark:text-neutral-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-accent text-white text-xs font-semibold hover:opacity-90"
                >
                  Verify & Connect
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
