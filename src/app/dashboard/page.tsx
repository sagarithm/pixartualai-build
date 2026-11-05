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
} from '@phosphor-icons/react';

function DashboardContent() {
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
  }, [initialPrompt, initialTemplate]);

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
    <div className="h-screen flex flex-col bg-[#0F0F0F] text-neutral-200 overflow-hidden font-sans">
      {/* Top Navbar */}
      <header className="h-14 border-b border-neutral-800 bg-[#161616] px-4 flex items-center justify-between shrink-0 z-20">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <svg className="h-6 w-auto" viewBox="0 0 32 32" fill="none">
              <path
                d="M28.74 0.6L24.72 17.37L29.84 12.18L31.65 13.98L22.9 22.84L6.88 21.66L7.07 19.12L16.3 19.79L0 11.34L1.18 9.08L18.02 17.81L10.87 8.31L12.91 6.77L19.56 15.61L17.91 9.23L20.38 8.59L22.36 16.25L26.26 0L28.74 0.6Z"
                fill="url(#dash_mark)"
              />
              <defs>
                <linearGradient id="dash_mark" x1="15.86" y1="2.5" x2="25.05" y2="25.16" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#FE3200" />
                  <stop offset="0.51" stopColor="#FC8C04" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-sm font-medium tracking-tight text-white font-['Neutralsans']">
              Pixartual<span className="text-[#fc8c04]">AI</span> Studio
            </span>
          </Link>

          <span className="text-neutral-700">/</span>

          <span className="text-xs text-neutral-400 font-mono truncate max-w-[180px]">
            {experience.name}
          </span>
        </div>

        {/* Center: Device Viewport Controls & Undo/Redo */}
        <div className="flex items-center gap-1 bg-[#202020] border border-neutral-800 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setViewport('desktop')}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              viewport === 'desktop' ? 'bg-[#2a2a2a] text-white shadow-sm' : 'text-neutral-400 hover:text-white'
            }`}
            title="Desktop (100%)"
          >
            <Desktop size={16} />
          </button>
          <button
            type="button"
            onClick={() => setViewport('tablet')}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              viewport === 'tablet' ? 'bg-[#2a2a2a] text-white shadow-sm' : 'text-neutral-400 hover:text-white'
            }`}
            title="Tablet (768px)"
          >
            <DeviceTablet size={16} />
          </button>
          <button
            type="button"
            onClick={() => setViewport('mobile')}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              viewport === 'mobile' ? 'bg-[#2a2a2a] text-white shadow-sm' : 'text-neutral-400 hover:text-white'
            }`}
            title="Mobile (390px)"
          >
            <DeviceMobile size={16} />
          </button>

          <div className="w-px h-4 bg-neutral-700 mx-1" />

          <button
            type="button"
            onClick={undo}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white transition-colors"
            title="Undo"
          >
            <ArrowCounterClockwise size={15} />
          </button>
          <button
            type="button"
            onClick={redo}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white transition-colors"
            title="Redo"
          >
            <ArrowClockwise size={15} />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsExportModalOpen(true)}
            className="px-3 py-1.5 rounded-lg border border-neutral-700 bg-[#202020] hover:bg-[#282828] text-xs font-medium text-neutral-300 transition-colors flex items-center gap-1.5"
          >
            <Export size={14} />
            <span>Code</span>
          </button>

          <button
            type="button"
            onClick={() => setIsShareModalOpen(true)}
            className="px-3 py-1.5 rounded-lg border border-neutral-700 bg-[#202020] hover:bg-[#282828] text-xs font-medium text-neutral-300 transition-colors flex items-center gap-1.5"
          >
            <ShareNetwork size={14} />
            <span>Share</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setPublished(true);
              setTimeout(() => setPublished(false), 3000);
            }}
            className="mfy-btn mfy-btn--primary !bg-[#fe3200] hover:!bg-[#fc8c04] !text-white !py-1.5 !px-3.5 !text-xs !font-semibold"
          >
            <RocketLaunch size={14} />
            <span>{published ? 'Published!' : 'Publish'}</span>
          </button>
        </div>
      </header>

      {/* Main Studio Body: 3 Columns */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar: AI Copilot, Layers, Templates */}
        <aside className="w-[340px] border-r border-neutral-800 bg-[#161616] flex flex-col shrink-0">
          {/* Tabs */}
          <div className="h-10 border-b border-neutral-800 flex items-center px-2 gap-1 bg-[#1a1a1a]">
            <button
              type="button"
              onClick={() => setActiveTab('chat')}
              className={`flex-1 py-1 px-2 rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
                activeTab === 'chat' ? 'bg-[#262626] text-white shadow-sm' : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Sparkle size={13} className="text-[#fc8c04]" />
              <span>AI Chat</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('layers')}
              className={`flex-1 py-1 px-2 rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
                activeTab === 'layers' ? 'bg-[#262626] text-white shadow-sm' : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <List size={13} />
              <span>Layers</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('templates')}
              className={`flex-1 py-1 px-2 rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
                activeTab === 'templates' ? 'bg-[#262626] text-white shadow-sm' : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <SquaresFour size={13} />
              <span>Catalog</span>
            </button>
          </div>

          {/* Tab 1: AI Chat */}
          {activeTab === 'chat' && (
            <div className="flex-1 flex flex-col justify-between overflow-hidden">
              <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                <div className="p-3 rounded-xl bg-[#202020] border border-neutral-800 text-xs text-neutral-300 leading-relaxed">
                  <p className="font-semibold text-white mb-1 flex items-center gap-1.5">
                    <Sparkle size={14} className="text-[#fe3200]" /> Pixartual AI Copilot
                  </p>
                  I can refactor typography, generate new sections, add interactive calculators, or adjust styling in plain English.
                </div>

                {chatMessages.map((m) => (
                  <div
                    key={m.id}
                    className={`p-3 rounded-xl text-xs leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-neutral-800 text-white ml-6 border border-neutral-700'
                        : 'bg-[#202020] text-neutral-300 mr-4 border border-neutral-800'
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendChat} className="p-3 border-t border-neutral-800 bg-[#161616]">
                <div className="flex items-center gap-2 bg-[#202020] border border-neutral-700 rounded-xl px-3 py-2 focus-within:border-[#fe3200] transition-colors">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask AI to change, add, or redesign…"
                    className="flex-1 bg-transparent border-0 text-xs text-white placeholder:text-neutral-500 focus:outline-none"
                  />
                  <button type="submit" className="text-[#fe3200] hover:text-[#fc8c04] transition-colors">
                    <PaperPlaneRight size={16} weight="fill" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Tab 2: Layers */}
          {activeTab === 'layers' && (
            <div className="flex-1 p-3 overflow-y-auto space-y-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold font-mono">
                  Sections ({experience.sections.length})
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => addSection('interactive-calculator')}
                    className="px-2 py-1 bg-neutral-800 hover:bg-neutral-700 rounded text-[11px] text-neutral-200 flex items-center gap-1"
                  >
                    <Plus size={12} /> Calculator
                  </button>
                  <button
                    type="button"
                    onClick={() => addSection('contact')}
                    className="px-2 py-1 bg-neutral-800 hover:bg-neutral-700 rounded text-[11px] text-neutral-200 flex items-center gap-1"
                  >
                    <Plus size={12} /> Contact
                  </button>
                </div>
              </div>

              {experience.sections.map((sec, idx) => (
                <div
                  key={sec.id}
                  onClick={() => setSelectedSectionId(sec.id)}
                  className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                    selectedSectionId === sec.id
                      ? 'border-[#fc8c04] bg-[#222] text-white'
                      : 'border-neutral-800 bg-[#1a1a1a] text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-neutral-500 text-[10px]">0{idx + 1}</span>
                    <span className="capitalize font-medium">{sec.type} Section</span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteSection(sec.id);
                    }}
                    className="text-neutral-500 hover:text-rose-400 p-1"
                  >
                    <Trash size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Catalog Templates */}
          {activeTab === 'templates' && (
            <div className="flex-1 p-3 overflow-y-auto space-y-3">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold font-mono">
                Clone Template
              </span>
              {PRESET_TEMPLATES.map((tmpl) => (
                <div
                  key={tmpl.id}
                  onClick={() => loadTemplate(tmpl.id)}
                  className="p-3 rounded-xl border border-neutral-800 bg-[#1a1a1a] hover:border-neutral-600 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-semibold text-white group-hover:text-[#fc8c04] transition-colors">
                      {tmpl.name}
                    </h4>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">
                      {tmpl.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 line-clamp-2">
                    {tmpl.tagline}
                  </p>
                </div>
              ))}
            </div>
          )}
        </aside>

        {/* Center: Interactive Live Canvas */}
        <main className="flex-1 bg-[#0a0a0a] overflow-y-auto p-4 md:p-8 flex items-start justify-center">
          <div
            className={`${getViewportWidth()} transition-all duration-300 bg-white text-neutral-900 rounded-[20px] shadow-2xl overflow-hidden min-h-[600px] border border-neutral-800`}
          >
            {experience.sections.map((section) => {
              const isSelected = selectedSectionId === section.id;
              return (
                <div
                  key={section.id}
                  onClick={() => setSelectedSectionId(section.id)}
                  className={`relative transition-all ${
                    isSelected ? 'ring-2 ring-[#fc8c04] ring-offset-2 ring-offset-neutral-900' : ''
                  }`}
                >
                  {section.type === 'hero' && <HeroRenderer section={section} primaryColor={experience.theme.primaryColor} />}
                  {(section.type === 'interactive-calculator' || (section.type as string) === 'calculator') && <CalculatorRenderer section={section} primaryColor={experience.theme.primaryColor} />}
                  {(section.type === 'interactive-quiz' || (section.type as string) === 'quiz') && <QuizRenderer section={section} primaryColor={experience.theme.primaryColor} />}
                  {(section.type === 'bento-grid' || (section.type as string) === 'bento') && <BentoRenderer section={section} primaryColor={experience.theme.primaryColor} />}
                  {section.type === 'contact' && <ContactRenderer section={section} primaryColor={experience.theme.primaryColor} />}
                </div>
              );
            })}
          </div>
        </main>

        {/* Right: Inspector & Style Controls */}
        <aside className="w-[300px] border-l border-neutral-800 bg-[#161616] p-4 flex flex-col shrink-0 overflow-y-auto">
          <div className="flex items-center gap-2 mb-4">
            <Sliders size={16} className="text-[#fc8c04]" />
            <h3 className="text-xs uppercase tracking-wider font-semibold text-white font-mono">
              Design & Inspector
            </h3>
          </div>

          {/* Theme Colors */}
          <div className="p-3 rounded-xl bg-[#202020] border border-neutral-800 mb-4 space-y-2">
            <label className="text-xs font-medium text-neutral-400 flex items-center gap-1.5">
              <Palette size={14} /> Brand Accent Color
            </label>
            <div className="flex items-center gap-2 pt-1">
              {['#fe3200', '#fc8c04', '#10b981', '#3b82f6', '#8b5cf6', '#0a0a0a'].map((col) => (
                <button
                  key={col}
                  type="button"
                  onClick={() => updateThemeColor(col)}
                  className={`size-6 rounded-full border-2 transition-transform hover:scale-110 ${
                    experience.theme.primaryColor === col ? 'border-white scale-110' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: col }}
                />
              ))}
            </div>
          </div>

          {/* Active Section Inspector */}
          {selectedSection ? (
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-[#202020] border border-neutral-800 space-y-3">
                <span className="text-xs uppercase font-mono text-[#fc8c04] font-semibold">
                  {selectedSection.type} Inspector
                </span>

                <div>
                  <label className="block text-[11px] text-neutral-400 mb-1">Headline Text</label>
                  <input
                    type="text"
                    value={selectedSection.title}
                    onChange={(e) => updateSectionText(selectedSection.id, 'title', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-neutral-700 bg-neutral-900 text-xs text-white focus:outline-none focus:border-[#fc8c04]"
                  />
                </div>

                {selectedSection.subtitle !== undefined && (
                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1">Subtitle / Prompt</label>
                    <textarea
                      rows={2}
                      value={selectedSection.subtitle}
                      onChange={(e) => updateSectionText(selectedSection.id, 'subtitle', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-neutral-700 bg-neutral-900 text-xs text-white focus:outline-none focus:border-[#fc8c04] resize-none"
                    />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl border border-dashed border-neutral-800 text-center text-xs text-neutral-500">
              Click on any canvas section to edit its copy, typography, or interactive settings.
            </div>
          )}
        </aside>
      </div>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-[460px] rounded-2xl bg-[#1c1c1c] border border-neutral-800 p-6 shadow-2xl text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium font-['Neutralsans']">Share Experience</h3>
              <button type="button" onClick={() => setIsShareModalOpen(false)} className="text-neutral-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <p className="text-xs text-neutral-400 mb-4">
              Your digital experience is hosted globally with instant edge latency (sub-300ms).
            </p>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-neutral-900 border border-neutral-800">
              <input
                type="text"
                readOnly
                value={`https://pixartual.ai/p/${experience.id}`}
                className="flex-1 bg-transparent border-0 text-xs text-neutral-300 font-mono focus:outline-none px-2"
              />
              <button
                type="button"
                onClick={handleCopyShare}
                className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white flex items-center gap-1"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Export Code Modal */}
      {isExportModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-[640px] rounded-2xl bg-[#1c1c1c] border border-neutral-800 p-6 shadow-2xl text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium font-['Neutralsans']">Export Clean Code</h3>
              <button type="button" onClick={() => setIsExportModalOpen(false)} className="text-neutral-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <p className="text-xs text-neutral-400 mb-3">
              Production-ready, self-contained Next.js & Tailwind component with zero proprietary runtime lock-in.
            </p>
            <pre className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-emerald-400 overflow-x-auto max-h-[300px]">
{`// Exported from PixartualAI Studio
import React from 'react';

export default function ${experience.name.replace(/\s+/g, '')}() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* ${experience.sections.length} generated sections */}
      ${experience.sections.map((s) => `<section id="${s.id}">/* ${s.type}: ${s.title} */</section>`).join('\n      ')}
    </div>
  );
}`}
            </pre>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(experience, null, 2));
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="mfy-btn mfy-btn--primary !text-xs !py-2"
              >
                {copied ? 'Copied JSON!' : 'Copy Code Bundle'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="h-screen bg-[#0F0F0F] text-white flex items-center justify-center">Loading Studio…</div>}>
      <DashboardContent />
    </Suspense>
  );
}
