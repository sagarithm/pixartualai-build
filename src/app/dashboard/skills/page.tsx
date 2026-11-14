'use client';

import React, { useState } from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import {
  Sparkle,
  Sliders,
  Check,
  Plus,
  MagnifyingGlass,
  Code,
  Globe,
  Database,
  Lightning,
  ShieldCheck,
  TrendUp,
  Brain,
  ChatCircleText,
} from '@phosphor-icons/react';

export default function SkillsPage() {
  const [search, setSearch] = useState('');

  const initialSkills = [
    {
      id: 'web-research',
      name: 'Autonomous Web Research & Scraping',
      desc: 'Retrieves live factual documentation, competitor layouts, and industry benchmarks to hydrate product mockups.',
      category: 'Research',
      icon: Globe,
      enabled: true,
      model: 'Gemini 2.5 Flash',
    },
    {
      id: 'db-architect',
      name: 'Relational Schema & CMS Architect',
      desc: 'Synthesizes normalized SQLite / Postgres table schemas, foreign key relationships, and validation constraints automatically.',
      category: 'Backend',
      icon: Database,
      enabled: true,
      model: 'Claude 3.7 Sonnet',
    },
    {
      id: 'seo-optimizer',
      name: 'Semantic SEO & Meta Optimization',
      desc: 'Generates high-intent metadata, OpenGraph cards, JSON-LD structured schemas, and keyword-rich semantic headers.',
      category: 'Marketing',
      icon: TrendUp,
      enabled: true,
      model: 'GPT-4o Mini',
    },
    {
      id: 'copy-polisher',
      name: 'Adaptive Tone & High-Converting Copy',
      desc: 'Transforms raw feature outlines into persuasive value propositions, microcopy, and clear calls-to-action.',
      category: 'Content',
      icon: ChatCircleText,
      enabled: true,
      model: 'Claude 3.7 Sonnet',
    },
    {
      id: 'code-generator',
      name: 'Strict TypeScript & React 19 Synthesis',
      desc: 'Enforces type-safe prop interfaces, Tailwind classes, and error boundary wrappers without runtime deprecations.',
      category: 'Engineering',
      icon: Code,
      enabled: true,
      model: 'Claude 3.7 Sonnet',
    },
    {
      id: 'security-guard',
      name: 'Fail-Closed Security & Secrets Guard',
      desc: 'Scans all generated code for credentials, unvalidated inputs, and perimeter vulnerabilities before edge compilation.',
      category: 'Security',
      icon: ShieldCheck,
      enabled: true,
      model: 'Deterministic AST Guard',
    },
  ];

  const [skills, setSkills] = useState(initialSkills);

  const toggleSkill = (id: string) => {
    setSkills((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );
  };

  const filtered = skills.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d] p-6 md:p-10">
        <div className="max-w-[1300px] w-full mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-neutral-200/80 dark:border-neutral-800">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">AI Skills & Agents</h1>
              <p className="text-xs text-neutral-500 mt-1">
                Configure specialized engineering and design personas that assist you during prompt synthesis and canvas editing.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                {skills.filter((s) => s.enabled).length} active skills
              </span>
            </div>
          </div>

          {/* Search bar */}
          <div className="my-6 max-w-sm">
            <div className="relative">
              <MagnifyingGlass size={15} className="absolute left-3 top-2.5 text-neutral-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search skills..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#181818] text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.id}
                  className="p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                        <Icon size={20} />
                      </div>

                      {/* Toggle */}
                      <button
                        type="button"
                        onClick={() => toggleSkill(skill.id)}
                        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                          skill.enabled ? 'bg-accent' : 'bg-neutral-200 dark:bg-neutral-700'
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                            skill.enabled ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mt-3">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="font-mono text-[10px]">{skill.model}</span>
                    <span className="px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-medium text-[10px]">
                      {skill.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
