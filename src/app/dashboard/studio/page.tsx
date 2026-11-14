'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useStudioStore } from '@/store/useStudioStore';
import { PRESET_TEMPLATES } from '@/lib/templates';
import { HeroRenderer } from '@/components/render/HeroRenderer';
import { CalculatorRenderer } from '@/components/render/CalculatorRenderer';
import { QuizRenderer } from '@/components/render/QuizRenderer';
import { BentoRenderer } from '@/components/render/BentoRenderer';
import { ContactRenderer } from '@/components/render/ContactRenderer';
import { PixartualLogo } from '@/components/brand/PixartualLogo';
import { SectionNode } from '@/types/ast';
import {
  Desktop,
  DeviceTablet,
  DeviceMobile,
  ArrowCounterClockwise,
  ArrowClockwise,
  ShareNetwork,
  Export,
  RocketLaunch,
  PaperPlaneRight,
  Sparkle,
  Sliders,
  List,
  SquaresFour,
  X,
  Copy,
  Check,
  Plus,
  Trash,
  Palette,
  ArrowLeft,
} from '@phosphor-icons/react';

function StudioContent() {
  const searchParams = useSearchParams();
  const initialPrompt = searchParams.get('prompt');
  const initialTemplate = searchParams.get('template');

  const {
    experience,
    selectedSectionId,
    viewport,
    chatMessages,
    setViewport,
    setSelectedSectionId,
    loadTemplate,
    generateFromPrompt,
    sendChatMessage,
    updateSectionText,
    updateThemeColor,
    deleteSection,
    addSection,
    undo,
    redo,
  } = useStudioStore();

  const [activeTab, setActiveTab] = useState<'chat' | 'layers' | 'templates'>('chat');
  const [chatInput, setChatInput] = useState('');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [published, setPublished] = useState(false);

  useEffect(() => {
    if (initialTemplate) {
      loadTemplate(initialTemplate);
    } else if (initialPrompt) {
      generateFromPrompt(initialPrompt);
    }
  }, [initialPrompt, initialTemplate, loadTemplate, generateFromPrompt]);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    sendChatMessage(chatInput);
    setChatInput('');
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText(`https://pixartual.ai/p/${experience.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getViewportWidth = () => {
    switch (viewport) {
      case 'mobile':
        return 'w-[390px]';
      case 'tablet':
        return 'w-[768px]';
      case 'desktop':
      default:
        return 'w-full max-w-[1200px]';
    }
  };

  const selectedSection = experience.sections.find((s) => s.id === selectedSectionId);

  return (
    <div className="flex h-screen w-screen flex-col bg-surface text-ink-strong">
      {/* Top Header */}
      <header className="flex h-14 items-center justify-between border-b border-surface-border px-4 bg-white dark:bg-[#121212]">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors mr-2"
          >
            <ArrowLeft size={14} /> Back to Hub
          </Link>
          <PixartualLogo variant="auto" size={24} showWordmark />
          <span className="text-xs text-ink-soft">/</span>
          <span className="text-xs font-semibold">{experience.name}</span>
        </div>

        {/* Viewport Toggles */}
        <div className="flex items-center gap-1 rounded-lg border border-surface-border bg-base p-0.5">
          <button
            onClick={() => setViewport('desktop')}
            className={`rounded-md p-1.5 transition-colors ${
              viewport === 'desktop' ? 'bg-surface shadow-xs text-ink-strong' : 'text-ink-soft hover:text-ink-strong'
            }`}
            title="Desktop View"
          >
            <Desktop size={16} />
          </button>
          <button
            onClick={() => setViewport('tablet')}
            className={`rounded-md p-1.5 transition-colors ${
              viewport === 'tablet' ? 'bg-surface shadow-xs text-ink-strong' : 'text-ink-soft hover:text-ink-strong'
            }`}
            title="Tablet View"
          >
            <DeviceTablet size={16} />
          </button>
          <button
            onClick={() => setViewport('mobile')}
            className={`rounded-md p-1.5 transition-colors ${
              viewport === 'mobile' ? 'bg-surface shadow-xs text-ink-strong' : 'text-ink-soft hover:text-ink-strong'
            }`}
            title="Mobile View"
          >
            <DeviceMobile size={16} />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={undo}
            className="rounded-lg p-2 text-ink-soft hover:bg-surface-hover hover:text-ink-strong"
            title="Undo"
          >
            <ArrowCounterClockwise size={16} />
          </button>
          <button
            onClick={redo}
            className="rounded-lg p-2 text-ink-soft hover:bg-surface-hover hover:text-ink-strong"
            title="Redo"
          >
            <ArrowClockwise size={16} />
          </button>
          <div className="h-4 w-px bg-surface-border" />
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="flex items-center gap-1.5 rounded-lg border border-surface-border px-3 py-1.5 text-xs font-medium hover:bg-surface-hover"
          >
            <ShareNetwork size={14} />
            Share
          </button>
          <button
            onClick={() => setIsExportModalOpen(true)}
            className="flex items-center gap-1.5 rounded-lg border border-surface-border px-3 py-1.5 text-xs font-medium hover:bg-surface-hover"
          >
            <Export size={14} />
            Export
          </button>
          <button
            onClick={() => setPublished(true)}
            className="flex items-center gap-1.5 rounded-lg bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-xs font-medium hover:opacity-90 shadow-sm"
          >
            <RocketLaunch size={14} />
            {published ? 'Published!' : 'Publish'}
          </button>
        </div>
      </header>

      {/* Main Studio Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="flex w-80 flex-col border-r border-surface-border bg-white dark:bg-[#141414]">
          <div className="flex border-b border-surface-border">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex flex-1 items-center justify-center gap-1.5 py-3 text-xs font-medium border-b-2 transition-colors ${
                activeTab === 'chat'
                  ? 'border-accent text-accent'
                  : 'border-transparent text-ink-soft hover:text-ink-strong'
              }`}
            >
              <Sparkle size={14} />
              Copilot
            </button>
            <button
              onClick={() => setActiveTab('layers')}
              className={`flex flex-1 items-center justify-center gap-1.5 py-3 text-xs font-medium border-b-2 transition-colors ${
                activeTab === 'layers'
                  ? 'border-accent text-accent'
                  : 'border-transparent text-ink-soft hover:text-ink-strong'
              }`}
            >
              <List size={14} />
              Layers
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`flex flex-1 items-center justify-center gap-1.5 py-3 text-xs font-medium border-b-2 transition-colors ${
                activeTab === 'templates'
                  ? 'border-accent text-accent'
                  : 'border-transparent text-ink-soft hover:text-ink-strong'
              }`}
            >
              <SquaresFour size={14} />
              Templates
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {activeTab === 'chat' && (
              <div className="flex h-full flex-col justify-between">
                <div className="space-y-3 overflow-y-auto pr-1">
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-black'
                            : 'bg-neutral-100 dark:bg-neutral-800 text-ink-strong'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSendChat} className="mt-3 flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask AI to change colors, copy..."
                    className="flex-1 rounded-xl border border-surface-border bg-base px-3 py-2 text-xs text-ink-strong focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <button
                    type="submit"
                    className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-white hover:opacity-90"
                  >
                    <PaperPlaneRight size={14} />
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'layers' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2">
                  <span className="text-[11px] font-semibold uppercase text-ink-muted">Sections</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => addSection('hero')}
                      className="flex items-center gap-1 rounded bg-stone-100 dark:bg-neutral-800 px-2 py-1 text-[10px] text-ink-strong hover:bg-stone-200"
                    >
                      <Plus size={10} /> Hero
                    </button>
                    <button
                      onClick={() => addSection('interactive-calculator')}
                      className="flex items-center gap-1 rounded bg-stone-100 dark:bg-neutral-800 px-2 py-1 text-[10px] text-ink-strong hover:bg-stone-200"
                    >
                      <Plus size={10} /> Calc
                    </button>
                  </div>
                </div>
                {experience.sections.map((section, idx) => (
                  <div
                    key={section.id}
                    onClick={() => setSelectedSectionId(section.id)}
                    className={`flex items-center justify-between rounded-xl border p-2.5 text-xs transition-colors cursor-pointer ${
                      selectedSectionId === section.id
                        ? 'border-accent bg-accent/5 font-semibold text-accent'
                        : 'border-surface-border bg-base hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-ink-muted">{idx + 1}</span>
                      <span className="capitalize">{section.type}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteSection(section.id);
                      }}
                      className="text-ink-muted hover:text-red-500"
                    >
                      <Trash size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'templates' && (
              <div className="space-y-3">
                {PRESET_TEMPLATES.map((tmpl) => (
                  <div
                    key={tmpl.id}
                    onClick={() => loadTemplate(tmpl.id)}
                    className="group cursor-pointer rounded-xl border border-surface-border bg-base p-3 transition-colors hover:border-accent"
                  >
                    <div className="font-medium text-xs text-ink-strong group-hover:text-accent">
                      {tmpl.name}
                    </div>
                    <p className="mt-1 text-[11px] text-ink-soft line-clamp-2">{tmpl.tagline}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Center Canvas */}
        <main className="flex-1 overflow-y-auto bg-stone-100/60 dark:bg-[#0c0c0c] p-6 flex justify-center items-start">
          <div
            className={`transition-all duration-300 bg-white dark:bg-[#121212] rounded-2xl shadow-xl overflow-hidden border border-surface-border ${getViewportWidth()}`}
          >
            {experience.sections.map((section) => (
              <div
                key={section.id}
                onClick={() => setSelectedSectionId(section.id)}
                className={`relative transition-all ${
                  selectedSectionId === section.id ? 'ring-2 ring-accent ring-offset-2' : ''
                }`}
              >
                {section.type === 'hero' && (
                  <HeroRenderer section={section} primaryColor={experience.theme.primaryColor} />
                )}
                {section.type === 'interactive-calculator' && (
                  <CalculatorRenderer section={section} primaryColor={experience.theme.primaryColor} />
                )}
                {section.type === 'interactive-quiz' && (
                  <QuizRenderer section={section} primaryColor={experience.theme.primaryColor} />
                )}
                {section.type === 'bento-grid' && (
                  <BentoRenderer section={section} primaryColor={experience.theme.primaryColor} />
                )}
                {section.type === 'contact' && (
                  <ContactRenderer section={section} primaryColor={experience.theme.primaryColor} />
                )}
              </div>
            ))}
          </div>
        </main>

        {/* Right Inspector */}
        <aside className="w-72 border-l border-surface-border bg-white dark:bg-[#141414] p-4 overflow-y-auto">
          <div className="flex items-center gap-2 border-b border-surface-border pb-3">
            <Sliders size={16} className="text-accent" />
            <h3 className="text-xs font-semibold">Inspector</h3>
          </div>

          {selectedSection ? (
            <div className="mt-4 space-y-4">
              <div>
                <label className="text-[11px] font-medium text-ink-soft">Section Type</label>
                <div className="mt-1 text-xs font-semibold capitalize text-ink-strong">
                  {selectedSection.type}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-medium text-ink-soft">Title</label>
                <input
                  type="text"
                  value={selectedSection.title || ''}
                  onChange={(e) => updateSectionText(selectedSection.id, 'title', e.target.value)}
                  className="mt-1 w-full rounded-lg border border-surface-border bg-base px-2.5 py-1.5 text-xs text-ink-strong focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-ink-soft">Subtitle</label>
                <textarea
                  rows={3}
                  value={selectedSection.subtitle || ''}
                  onChange={(e) => updateSectionText(selectedSection.id, 'subtitle', e.target.value)}
                  className="mt-1 w-full rounded-lg border border-surface-border bg-base px-2.5 py-1.5 text-xs text-ink-strong focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-ink-soft">
                  <Palette size={12} />
                  <span>Theme Accent</span>
                </div>
                <div className="mt-2 flex gap-2">
                  {['#fc8c04', '#fe3200', '#2563eb', '#10b981', '#8b5cf6', '#ec4899'].map((c) => (
                    <button
                      key={c}
                      onClick={() => updateThemeColor(c)}
                      style={{ backgroundColor: c }}
                      className={`h-6 w-6 rounded-full border-2 transition-transform ${
                        experience.theme.primaryColor === c ? 'scale-110 border-black dark:border-white' : 'border-transparent'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-8 text-center text-xs text-ink-muted">
              Select any section on the canvas to inspect its properties.
            </div>
          )}
        </aside>
      </div>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white dark:bg-[#1a1a1a] p-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3">
              <h3 className="text-sm font-semibold">Share Experience</h3>
              <button onClick={() => setIsShareModalOpen(false)}>
                <X size={16} />
              </button>
            </div>
            <p className="text-xs text-ink-soft">Anyone with this link can view this live experience.</p>
            <div className="mt-3 flex gap-2">
              <input
                type="text"
                readOnly
                value={`https://pixartual.ai/p/${experience.id}`}
                className="flex-1 rounded-xl border border-surface-border bg-base px-3 py-1.5 text-xs text-ink-strong"
              />
              <button
                onClick={handleCopyShare}
                className="flex items-center gap-1 rounded-xl bg-accent px-3 py-1.5 text-xs text-white"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Export Modal */}
      {isExportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-[#1a1a1a] p-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3">
              <h3 className="text-sm font-semibold">Export Clean Code</h3>
              <button onClick={() => setIsExportModalOpen(false)}>
                <X size={16} />
              </button>
            </div>
            <p className="text-xs text-ink-soft">Pure React + Tailwind components ready for production.</p>
            <pre className="mt-3 max-h-60 overflow-y-auto rounded-xl bg-neutral-900 p-3 text-[11px] text-neutral-200">
              {JSON.stringify(experience, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default function StudioPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading Studio...</div>}>
      <StudioContent />
    </Suspense>
  );
}
