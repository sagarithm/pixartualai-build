'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { useStudioStore } from '@/store/useStudioStore';
import { PRESET_TEMPLATES } from '@/lib/templates';
import {
  Eye,
  Desktop,
  DeviceTablet,
  DeviceMobile,
  ArrowCounterClockwise,
  ArrowClockwise,
  ChatCircleDots,
  DotsThree,
  ShareNetwork,
  Lightning,
  SidebarSimple,
  CaretDown,
  Lock,
  Crown,
  ArrowSquareOut,
  ArrowsClockwise,
  Palette,
  FilePlus,
  EnvelopeSimple,
  PencilSimple,
  Plus,
  Hammer,
  Microphone,
  ArrowUp,
  Check,
  X,
  MagnifyingGlass,
  CheckCircle,
} from '@phosphor-icons/react';

function StudioContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPrompt = searchParams.get('prompt');
  const initialTemplate = searchParams.get('template');

  const {
    experience,
    viewport,
    setViewport,
    loadTemplate,
    generateFromPrompt,
    undo,
    redo,
  } = useStudioStore();

  // Studio UI states
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [buildMode, setBuildMode] = useState<'Build' | 'Edit' | 'Enhance'>('Build');
  const [isBuildModeOpen, setIsBuildModeOpen] = useState(false);

  // Chat conversation state
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'assistant'; text: string; time?: string }>>([]);

  // Active project title
  const [projectName, setProjectName] = useState('Orvane (Cloned)');
  const [subdomain, setSubdomain] = useState('https://sgr.pixartual.website');

  useEffect(() => {
    if (initialTemplate) {
      if (initialTemplate.includes('orvane')) {
        setProjectName('Orvane (Cloned)');
        setSubdomain('https://sgr.pixartual.website');
      } else {
        loadTemplate(initialTemplate);
        setProjectName(initialTemplate.replace('-', ' ').toUpperCase());
      }
    } else if (initialPrompt) {
      generateFromPrompt(initialPrompt);
      setProjectName(`Project: ${initialPrompt.slice(0, 20)}...`);
    }
  }, [initialPrompt, initialTemplate, loadTemplate, generateFromPrompt]);

  const handleSendChat = (customText?: string) => {
    const textToSend = customText || chatInput;
    if (!textToSend.trim()) return;

    const newMsg = { sender: 'user' as const, text: textToSend.trim(), time: 'Just now' };
    setMessages((prev) => [
      ...prev,
      newMsg,
      {
        sender: 'assistant' as const,
        text: `Applying changes for: "${textToSend.trim()}". Updating AST nodes, typography tokens, and layout constraints...`,
        time: 'Just now',
      },
    ]);

    setChatInput('');
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText(subdomain);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const getCanvasWidth = () => {
    switch (viewport) {
      case 'mobile':
        return 'w-[390px] max-w-[390px]';
      case 'tablet':
        return 'w-[768px] max-w-[768px]';
      case 'desktop':
      default:
        return 'w-full max-w-[1240px]';
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0c0c0c] text-ink-strong select-none font-sans">
      {/* =========================================================================
          1. TOP NAVIGATION HEADER (Matching modulify.ai/dashboard/projects/sgr)
          ========================================================================= */}
      <header className="h-12 border-b border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#141414] px-3 sm:px-4 flex items-center justify-between z-30 shrink-0">
        {/* Left: Brand / Project Dropdown / Sidebar Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Link href="/dashboard" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity" title="Back to Dashboard">
            <div className="w-5 h-5 rounded-[5px] bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-2xs">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </Link>
          <span className="text-neutral-300 dark:text-neutral-700 text-xs">/</span>

          {/* Project Switcher Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsProjectMenuOpen(!isProjectMenuOpen)}
              className="flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <span>{projectName}</span>
              <CaretDown size={11} className="text-neutral-400" />
            </button>

            {isProjectMenuOpen && (
              <div className="absolute top-full left-0 mt-1.5 w-60 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] shadow-xl p-1.5 z-50 text-xs">
                <div className="px-2.5 py-1 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                  Switch Project
                </div>
                {[
                  { name: 'Orvane (Cloned)', active: true },
                  { name: 'Nova SaaS Storefront', active: false },
                  { name: 'Atelier Portfolio', active: false },
                ].map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => {
                      setProjectName(p.name);
                      setIsProjectMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                      p.name === projectName
                        ? 'bg-neutral-100 dark:bg-neutral-800 font-semibold text-neutral-900 dark:text-white'
                        : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/60'
                    }`}
                  >
                    <span>{p.name}</span>
                    {p.name === projectName && <Check size={12} className="text-accent" />}
                  </button>
                ))}
                <div className="my-1 border-t border-neutral-100 dark:border-neutral-800" />
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-2.5 py-1.5 text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-50 text-[11px]"
                >
                  <Plus size={12} />
                  <span>Create new project</span>
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar Toggle Icon */}
          <button
            type="button"
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`p-1.5 rounded-lg border text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors ${
              isChatOpen
                ? 'border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                : 'border-neutral-200/80 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800'
            }`}
            title="Toggle AI chat copilot"
          >
            <SidebarSimple size={15} />
          </button>
        </div>

        {/* Center Toolbar Group (Preview, Viewports, Undo, Redo, More) */}
        <div className="hidden lg:flex items-center gap-1 bg-stone-100/90 dark:bg-neutral-800/60 p-0.5 rounded-xl border border-neutral-200/60 dark:border-neutral-700">
          <button
            type="button"
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              isPreviewMode
                ? 'bg-white dark:bg-black shadow-2xs text-neutral-900 dark:text-white'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <Eye size={14} />
            <span>Preview</span>
          </button>

          <div className="h-3 w-px bg-neutral-200 dark:bg-neutral-700 mx-0.5" />

          {/* Viewports */}
          <button
            type="button"
            onClick={() => setViewport('desktop')}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              viewport === 'desktop'
                ? 'bg-white dark:bg-black shadow-2xs text-neutral-900 dark:text-white'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
            title="Desktop view"
          >
            <Desktop size={14} />
          </button>
          <button
            type="button"
            onClick={() => setViewport('tablet')}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              viewport === 'tablet'
                ? 'bg-white dark:bg-black shadow-2xs text-neutral-900 dark:text-white'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
            title="Tablet view"
          >
            <DeviceTablet size={14} />
          </button>
          <button
            type="button"
            onClick={() => setViewport('mobile')}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              viewport === 'mobile'
                ? 'bg-white dark:bg-black shadow-2xs text-neutral-900 dark:text-white'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
            title="Mobile view"
          >
            <DeviceMobile size={14} />
          </button>

          <div className="h-3 w-px bg-neutral-200 dark:bg-neutral-700 mx-0.5" />

          {/* Undo / Redo */}
          <button
            type="button"
            onClick={() => undo()}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            title="Undo"
          >
            <ArrowCounterClockwise size={14} />
          </button>
          <button
            type="button"
            onClick={() => redo()}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            title="Redo"
          >
            <ArrowClockwise size={14} />
          </button>

          <button
            type="button"
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            title="Comments & notes"
          >
            <ChatCircleDots size={14} />
          </button>

          <button
            type="button"
            className="flex items-center gap-1 px-2 py-1 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg transition-colors"
          >
            <DotsThree size={14} weight="bold" />
            <span>More</span>
          </button>
        </div>

        {/* Right: Support Avatar Pill + Share + Upgrade + Publish */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Support Team Pill */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer shadow-2xs">
            <div className="w-8 h-4 relative rounded-full overflow-hidden shrink-0">
              <Image src="/images/support-team-avatars.png" alt="Support" fill className="object-cover" />
            </div>
            <span className="text-[11.5px] font-medium text-neutral-700 dark:text-neutral-300">Chat with us</span>
            <span className="w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-bold">
              1
            </span>
          </div>

          {/* Share */}
          <button
            type="button"
            onClick={handleCopyShare}
            className="px-3 py-1.5 rounded-xl border border-neutral-200/90 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            {copiedLink ? <Check size={14} className="text-emerald-500" /> : <ShareNetwork size={14} />}
            <span>{copiedLink ? 'Copied' : 'Share'}</span>
          </button>

          {/* Upgrade Now */}
          <Link
            href="/pricing"
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold shadow-xs hover:opacity-95 transition-opacity flex items-center gap-1.5"
          >
            <Lightning size={13} weight="fill" />
            <span>Upgrade now</span>
          </Link>

          {/* Publish */}
          <button
            type="button"
            onClick={() => setIsPublishModalOpen(true)}
            className="px-4 py-1.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xs"
          >
            Publish
          </button>
        </div>
      </header>

      {/* =========================================================================
          2. STUDIO BODY: LEFT CHAT COPILOT + FLOATING CANVAS
          ========================================================================= */}
      <div className="flex-1 flex overflow-hidden">
        {/* =========================================================================
            LEFT CHAT COPILOT PANEL (Exact Modulify Parity)
            ========================================================================= */}
        {isChatOpen && (
          <aside className="w-[300px] sm:w-[330px] border-r border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#121212] flex flex-col justify-between h-[calc(100vh-48px)] shrink-0 z-20 mfy-fadein">
            {/* Header */}
            <div className="p-3.5 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-semibold text-neutral-900 dark:text-white">
              <div className="flex items-center gap-2">
                <ChatCircleDots size={16} className="text-neutral-400" />
                <span>New chat</span>
              </div>
              <button
                type="button"
                onClick={() => setMessages([])}
                className="p-1 text-neutral-400 hover:text-neutral-800 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                title="Start fresh conversation"
              >
                <Plus size={15} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col">
              {messages.length === 0 ? (
                /* Empty Chat Initial State */
                <div className="flex flex-col items-center text-center my-auto">
                  <div className="w-11 h-11 rounded-2xl bg-stone-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-400 mb-3 border border-neutral-200/60 dark:border-neutral-700">
                    <ChatCircleDots size={24} />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">New chat</h3>
                  <p className="text-xs text-neutral-400 mt-0.5 mb-6">Ask for a change to the site.</p>

                  {/* Suggestion Chips */}
                  <div className="w-full space-y-2 text-left">
                    {[
                      { icon: Palette, text: 'Change the colors and fonts' },
                      { icon: FilePlus, text: 'Add a new page' },
                      { icon: EnvelopeSimple, text: 'Add a contact form' },
                      { icon: PencilSimple, text: 'Rewrite the text' },
                      { icon: DeviceMobile, text: 'Make it look right on phones' },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSendChat(item.text)}
                        className="w-full p-2.5 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#181818] hover:bg-stone-50 dark:hover:bg-neutral-800/60 text-xs text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2.5 shadow-2xs group"
                      >
                        <item.icon size={15} className="text-neutral-400 group-hover:text-accent transition-colors shrink-0" />
                        <span>{item.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Chat Messages History */
                <div className="space-y-3.5 my-auto">
                  {messages.map((m, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col text-xs ${
                        m.sender === 'user' ? 'items-end' : 'items-start'
                      }`}
                    >
                      <div
                        className={`max-w-[88%] p-3 rounded-2xl leading-relaxed ${
                          m.sender === 'user'
                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-black rounded-tr-xs shadow-2xs'
                            : 'bg-stone-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-tl-xs'
                        }`}
                      >
                        {m.text}
                      </div>
                      <span className="text-[10px] text-neutral-400 mt-1 px-1">{m.time}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Prompt Box */}
            <div className="p-3 border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-[#121212]">
              <div className="rounded-[20px] border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#181818] shadow-xs p-3 focus-within:border-neutral-400 dark:focus-within:border-neutral-600 transition-colors">
                <textarea
                  rows={2}
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendChat();
                    }
                  }}
                  placeholder="Describe what you want to build or change..."
                  className="w-full resize-none border-0 bg-transparent text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none p-0 leading-relaxed"
                />

                <div className="flex items-center justify-between pt-2 mt-1 border-t border-neutral-100 dark:border-neutral-800">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      className="w-6 h-6 rounded-md border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 flex items-center justify-center text-neutral-500"
                      title="Attach context or code"
                    >
                      <Plus size={12} />
                    </button>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsBuildModeOpen(!isBuildModeOpen)}
                        className="flex items-center gap-1 px-2 py-0.5 rounded-md border border-neutral-200 dark:border-neutral-700 text-[11px] font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800"
                      >
                        <Hammer size={12} className="text-neutral-400" />
                        <span>{buildMode}</span>
                        <CaretDown size={10} className="text-neutral-400" />
                      </button>
                      {isBuildModeOpen && (
                        <div className="absolute bottom-full left-0 mb-1.5 w-28 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1c1c1c] p-1 shadow-lg z-50 text-[11px]">
                          {(['Build', 'Edit', 'Enhance'] as const).map((m) => (
                            <button
                              key={m}
                              type="button"
                              onClick={() => {
                                setBuildMode(m);
                                setIsBuildModeOpen(false);
                              }}
                              className={`w-full text-left px-2 py-1 rounded-lg ${
                                buildMode === m ? 'bg-neutral-100 dark:bg-neutral-800 font-semibold text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                              }`}
                            >
                              {m}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                      title="Voice prompt"
                    >
                      <Microphone size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSendChat()}
                      className="w-6 h-6 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:opacity-90 shadow-2xs"
                      title="Send prompt"
                    >
                      <ArrowUp size={12} weight="bold" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* =========================================================================
            CENTER CANVAS PREVIEW AREA
            ========================================================================= */}
        <main className="flex-1 flex flex-col h-[calc(100vh-48px)] overflow-y-auto bg-[#fafafa] dark:bg-[#0c0c0c] p-3 sm:p-5">
          {/* Subdomain & Page Selector Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 px-1 shrink-0">
            {/* Live Subdomain Pill & Connect Domain */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#1a1a1a] border border-neutral-200/80 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 shadow-2xs text-xs">
                <Lock size={11} className="text-neutral-400" />
                <span className="font-mono text-[11px] text-neutral-700 dark:text-neutral-300">
                  {subdomain}
                </span>
              </div>

              <Link
                href="/dashboard/domains"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-[11px] shadow-2xs hover:opacity-95 transition-opacity"
              >
                <Crown size={12} weight="fill" />
                <span>Connect domain</span>
              </Link>
            </div>

            {/* Canvas Address Route Controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <div className="flex items-center gap-1.5 bg-white dark:bg-[#1a1a1a] border border-neutral-200/80 dark:border-neutral-800 rounded-xl px-2.5 py-1 shadow-2xs text-xs">
                <div className="flex items-center gap-1.5 font-medium text-neutral-800 dark:text-neutral-200 pr-2 border-r border-neutral-200 dark:border-neutral-800">
                  <div className="w-3.5 h-3.5 rounded bg-orange-500 text-white flex items-center justify-center text-[8px] font-bold">
                    O
                  </div>
                  <span>Orvane</span>
                  <CaretDown size={11} className="text-neutral-400" />
                </div>
                <span className="text-neutral-400 font-mono text-[11px]">/</span>
                <button
                  type="button"
                  onClick={() => window.open(subdomain, '_blank')}
                  className="p-1 text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors"
                  title="Open live URL"
                >
                  <ArrowSquareOut size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const temp = projectName;
                    setProjectName('Reloading...');
                    setTimeout(() => setProjectName(temp), 500);
                  }}
                  className="p-1 text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors"
                  title="Reload preview"
                >
                  <ArrowsClockwise size={13} />
                </button>
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider pl-1 border-l border-neutral-100 dark:border-neutral-800">
                  EN
                </span>
              </div>
            </div>
          </div>

          {/* Floating Canvas Box (Exact Orvane Parity) */}
          <div className="flex-1 flex justify-center items-start overflow-y-auto">
            <div
              className={`${getCanvasWidth()} transition-all duration-300 rounded-[28px] border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#161616] shadow-xl overflow-hidden min-h-[580px] relative flex flex-col`}
            >
              {/* Orvane Site Navigation Bar */}
              <div className="px-6 py-4 flex items-center justify-between border-b border-neutral-100/80 dark:border-neutral-800/80 text-xs text-neutral-600 dark:text-neutral-400 bg-white/80 dark:bg-black/40 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full border border-neutral-900 dark:border-white flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-white" />
                  </span>
                  <span className="font-bold text-neutral-900 dark:text-white tracking-wider">orvane</span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-neutral-500">Lidar Drone Scanning</span>
                </div>

                <div className="hidden sm:inline font-mono text-[11px] text-neutral-500">
                  Precision Demo
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-neutral-400 hidden sm:inline">GMT 6:01 am</span>
                  <button
                    type="button"
                    className="px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 font-mono text-[11px] text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50"
                  >
                    menu
                  </button>
                </div>
              </div>

              {/* Orvane Site Hero Section */}
              <div className="flex-1 relative p-6 sm:p-12 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-stone-50/60 via-white to-stone-50/40 dark:from-[#151515] dark:via-[#121212] dark:to-[#151515]">
                {/* Top Badge Indicators */}
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400">+</span>
                    <span className="tracking-wider">[ ORVANE L4 ] —— SELF-FLYING SURVEY UNIT</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-[10px] text-neutral-500 font-bold">
                    1
                  </div>
                </div>

                {/* Giant Typography Background Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                  <span className="text-[120px] sm:text-[180px] md:text-[230px] font-extrabold tracking-tighter text-neutral-200/50 dark:text-neutral-800/30 leading-none">
                    orvane
                  </span>
                </div>

                {/* Center Drone Asset */}
                <div className="relative my-8 sm:my-14 flex items-center justify-center z-10">
                  <div className="relative w-[320px] sm:w-[460px] md:w-[540px] aspect-[16/9] drop-shadow-2xl">
                    <Image
                      src="/images/orvane-drone.png"
                      alt="Orvane Autonomous LiDAR Survey Drone"
                      fill
                      className="object-contain hover:scale-[1.02] transition-transform duration-700"
                      priority
                    />
                  </div>
                </div>

                {/* Headline & Bottom Description */}
                <div className="z-10 max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-neutral-900 dark:text-white tracking-tight leading-tight">
                    Self-flying LiDAR for the structures we rely on.
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 mt-2 font-normal leading-relaxed">
                    Every bridge, line and turbine, measured to the centimetre.
                  </p>
                </div>

                {/* Bottom Canvas Toolbar & Scroll Indicator */}
                <div className="mt-8 pt-4 flex items-center justify-between z-10 text-xs">
                  {/* Floating Action Pill */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 shadow-md border border-neutral-200/80 dark:border-neutral-700 text-neutral-500">
                    <button type="button" className="hover:text-neutral-900 dark:hover:text-white transition-colors" title="Zoom in">
                      <MagnifyingGlass size={13} />
                    </button>
                    <button type="button" className="hover:text-neutral-900 dark:hover:text-white transition-colors" title="Chat notes">
                      <ChatCircleDots size={13} />
                    </button>
                    <button type="button" className="hover:text-neutral-900 dark:hover:text-white transition-colors" title="Canvas frames">
                      <div className="w-3 h-3 rounded-xs border border-neutral-400" />
                    </button>
                  </div>

                  {/* Scroll Down */}
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-400">
                    <span>Scroll Down</span>
                    <span className="font-bold">:::</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* =========================================================================
          PUBLISH MODAL
          ========================================================================= */}
      {isPublishModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 mfy-fadein">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 shadow-2xl border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-emerald-500" />
                <h3 className="text-sm font-semibold">Publish to Live Edge</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsPublishModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-800 p-1"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-xs text-neutral-500 mt-2 mb-4 leading-relaxed">
              Your site is published on edge CDN servers worldwide. SSL certificates and responsive cache layers are actively provisioned.
            </p>

            <div className="p-3 rounded-xl bg-stone-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 flex items-center justify-between text-xs font-mono mb-5">
              <span className="truncate text-neutral-700 dark:text-neutral-300">{subdomain}</span>
              <button
                type="button"
                onClick={handleCopyShare}
                className="px-2.5 py-1 rounded-lg bg-black text-white dark:bg-white dark:text-black font-sans text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                {copiedLink ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsPublishModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:opacity-90 shadow-sm"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function StudioPage() {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex items-center justify-center bg-white text-xs text-neutral-400">
          Loading Pixartual Studio...
        </div>
      }
    >
      <StudioContent />
    </Suspense>
  );
}
