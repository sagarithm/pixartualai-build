'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PixartualLogo } from '@/components/brand/PixartualLogo';
import {
  House,
  SquaresFour,
  Globe,
  Plugs,
  Sparkle,
  MagnifyingGlass,
  Bell,
  CaretUpDown,
  CaretDown,
  CaretRight,
  Gift,
  Lightning,
  EnvelopeSimple,
  BookOpen,
  At,
  Hammer,
  Plus,
  Microphone,
  ArrowUp,
  DotsThree,
  ChatCircleDots,
  X,
  Check,
  MagicWand,
  FolderSimple,
  List,
  SignOut,
  User,
  CreditCard,
  ArrowRight,
  FileCode,
} from '@phosphor-icons/react';

export default function DashboardPage() {
  const router = useRouter();

  // State
  const [prompt, setPrompt] = useState('');
  const [selectedMode, setSelectedMode] = useState<'Build' | 'Edit' | 'Enhance'>('Build');
  const [isModeOpen, setIsModeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'templates'>('projects');
  const [isConnectorsOpen, setIsConnectorsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSupportDismissed, setIsSupportDismissed] = useState(false);
  const [isSupportChatOpen, setIsSupportChatOpen] = useState(false);
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isAttachOpen, setIsAttachOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Authenticated user state
  const userName = 'Sagarithm';
  const workspaceName = "Sagarithm's Workspace";

  // Greetings array exactly as extracted from Modulify
  const greetings = [
    'Time to make waves, Sagarithm.',
    'Dream out loud, Sagarithm.',
    "Let's break the internet, Sagarithm!",
    "Let's bend reality, Sagarithm.",
    'Ready to wow them, Sagarithm?',
    "What's cooking, Sagarithm?",
    'Feeling inspired, Sagarithm?',
    "Let's build the future, Sagarithm.",
    'Ready to dazzle, Sagarithm?',
    "What's the spark, Sagarithm?",
  ];

  // Placeholders exactly as in Modulify
  const placeholders = [
    'A gallery to showcase my photography...',
    'A landing page for my new SaaS app...',
    'A portfolio site for a freelance designer...',
    'A minimal blog about specialty coffee...',
    'A simple todo app with a dark theme...',
    'A modern agency website with case studies...',
    'A one-page site for my local bakery...',
  ];

  const [greeting, setGreeting] = useState(greetings[0]);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    // Randomize initial greeting
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);

    // Cycle placeholders every 4.5 seconds
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLaunchStudio = (customPrompt?: string) => {
    const targetPrompt = customPrompt !== undefined ? customPrompt : prompt;
    if (targetPrompt.trim()) {
      router.push(`/dashboard/studio?prompt=${encodeURIComponent(targetPrompt)}`);
    } else {
      router.push('/dashboard/studio');
    }
  };

  // Sample projects matching user's real account
  const projects = [
    {
      id: 'orvane-cloned',
      title: 'Orvane (Cloned)',
      edited: 'Edited 1w ago',
      coverUrl: '/images/galway.jpg',
      icon: '✈️',
      badge: 'Drone & Tech',
    },
    {
      id: 'nova-saas',
      title: 'Nova SaaS Storefront',
      edited: 'Edited 2d ago',
      coverUrl: '/images/bento-generate.webp',
      icon: '⚡',
      badge: 'Software',
    },
    {
      id: 'atelier-portfolio',
      title: 'Atelier Portfolio',
      edited: 'Edited 5h ago',
      coverUrl: '/images/atelier.jpg',
      icon: '🎨',
      badge: 'Design Agency',
    },
  ];

  // Available Connectors
  const connectors = [
    { name: 'Google Drive', icon: '/images/connectors/google_drive.svg', connected: true },
    { name: 'GitHub', icon: '/images/connectors/github.svg', connected: true },
    { name: 'Slack', icon: '/images/connectors/slack.svg', connected: true },
    { name: 'Notion', icon: '/images/connectors/notion.svg', connected: false },
    { name: 'Figma', icon: '/images/connectors/figma.svg', connected: false },
    { name: 'Supabase', icon: '/images/connectors/supabase.svg', connected: true },
    { name: 'Airtable', icon: '/images/connectors/airtable.svg', connected: false },
    { name: 'Stripe', icon: '/images/connectors/stripe.svg', connected: false },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#fafafa] dark:bg-[#0d0d0d] text-ink-strong">
      {/* =========================================================================
          LEFT SIDEBAR (Fixed / Sticky on Desktop)
          ========================================================================= */}
      <aside className="hidden md:flex w-[240px] flex-col justify-between border-r border-neutral-200/80 dark:border-neutral-800 bg-[#fafafa] dark:bg-[#121212] p-4 select-none">
        {/* Top Segment */}
        <div className="flex flex-col gap-3">
          {/* Logo & Notification Bell */}
          <div className="flex items-center justify-between pl-1 pr-1 pt-1">
            <Link href="/dashboard" className="flex items-center gap-2">
              <PixartualLogo variant="auto" size={26} showWordmark />
            </Link>
            <button
              type="button"
              className="relative p-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
              title="Notifications"
            >
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-accent" />
            </button>
          </div>

          {/* Workspace Switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}
              className="w-full flex items-center justify-between p-2 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] shadow-2xs hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-5 h-5 rounded-md bg-accent flex items-center justify-center text-white text-[11px] font-bold shadow-2xs shrink-0">
                  S
                </div>
                <span className="text-[13px] font-medium text-neutral-800 dark:text-neutral-200 truncate">
                  {workspaceName}
                </span>
              </div>
              <CaretUpDown size={14} className="text-neutral-400 shrink-0" />
            </button>

            {isWorkspaceOpen && (
              <div className="absolute top-full left-0 mt-1 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1c1c1c] p-1.5 shadow-lg z-50 mfy-fadein">
                <div className="px-2 py-1 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                  Workspaces
                </div>
                <button
                  type="button"
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 text-left text-xs font-medium text-neutral-800 dark:text-neutral-200 rounded-lg bg-neutral-100 dark:bg-neutral-800"
                >
                  <div className="w-4 h-4 rounded bg-accent text-[9px] text-white flex items-center justify-center font-bold">
                    S
                  </div>
                  <span className="truncate">{workspaceName}</span>
                  <Check size={12} className="ml-auto text-accent" />
                </button>
                <div className="my-1 border-t border-neutral-200 dark:border-neutral-800" />
                <button
                  type="button"
                  onClick={() => setIsWorkspaceOpen(false)}
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 text-left text-xs text-neutral-600 dark:text-neutral-400 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/60"
                >
                  <Plus size={12} />
                  <span>Create new workspace</span>
                </button>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] text-neutral-400 text-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-2xs"
          >
            <MagnifyingGlass size={15} className="text-neutral-400" />
            <span className="text-[13px] text-neutral-400">Search</span>
            <span className="ml-auto text-[10px] font-mono border border-neutral-200 dark:border-neutral-700 rounded px-1.5 py-0.5 text-neutral-400">
              Ctrl K
            </span>
          </button>

          {/* Main Navigation */}
          <nav className="flex flex-col gap-0.5 mt-1">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13.5px] font-medium bg-neutral-200/70 dark:bg-neutral-800 text-neutral-900 dark:text-white transition-colors"
            >
              <House size={18} weight="fill" />
              <span>Home</span>
            </Link>

            <button
              type="button"
              onClick={() => setActiveTab('projects')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-[13.5px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <SquaresFour size={18} />
                <span>Projects</span>
              </div>
              <CaretDown size={14} className="text-neutral-400" />
            </button>

            <Link
              href="/templates"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13.5px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
            >
              <FolderSimple size={18} />
              <span>Templates</span>
            </Link>

            <Link
              href="/domains"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13.5px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
            >
              <Globe size={18} />
              <span>Domains</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsConnectorsOpen(true)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13.5px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors text-left"
            >
              <Plugs size={18} />
              <span>Connectors</span>
            </button>

            <button
              type="button"
              onClick={() => handleLaunchStudio()}
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13.5px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors text-left"
            >
              <Sparkle size={18} />
              <span>Skills</span>
            </button>
          </nav>
        </div>

        {/* Bottom Segment */}
        <div className="flex flex-col gap-3 pt-2">
          {/* Promo Card 1: Spread the word */}
          <div className="p-3 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#181818] flex items-center justify-between shadow-2xs hover:border-neutral-300 transition-colors cursor-pointer group">
            <div className="flex flex-col">
              <span className="text-[12.5px] font-semibold text-neutral-900 dark:text-neutral-100 leading-tight">
                Spread the word
              </span>
              <span className="text-[11px] text-neutral-400 leading-tight mt-0.5">
                and earn free credits
              </span>
            </div>
            <Gift size={18} className="text-neutral-500 group-hover:text-accent transition-colors shrink-0" />
          </div>

          {/* Promo Card 2: Upgrade to Pro */}
          <Link
            href="/pricing"
            className="p-3 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#181818] flex items-center justify-between shadow-2xs hover:border-neutral-300 transition-colors group"
          >
            <div className="flex flex-col">
              <span className="text-[12.5px] font-semibold text-neutral-900 dark:text-neutral-100 leading-tight">
                Upgrade to Pro
              </span>
              <span className="text-[11px] text-neutral-400 leading-tight mt-0.5">
                Unlock more features
              </span>
            </div>
            <Lightning size={18} weight="fill" className="text-amber-500 shrink-0" />
          </Link>

          {/* Tertiary Links */}
          <div className="flex flex-col gap-0.5 pt-1 text-[12.5px]">
            <Link
              href="/contact"
              className="flex items-center gap-2.5 px-2 py-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
            >
              <EnvelopeSimple size={16} />
              <span>Contact support</span>
            </Link>

            <Link
              href="/insights"
              className="flex items-center justify-between px-2 py-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <BookOpen size={16} />
                <span>Resources</span>
              </div>
              <CaretRight size={12} className="text-neutral-400" />
            </Link>

            <div className="relative group">
              <button
                type="button"
                className="w-full flex items-center justify-between px-2 py-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors text-left"
              >
                <div className="flex items-center gap-2.5">
                  <At size={16} />
                  <span>Follow us</span>
                </div>
                <CaretRight size={12} className="text-neutral-400" />
              </button>
            </div>
          </div>

          {/* User Profile Pill */}
          <div className="relative border-t border-neutral-200/80 dark:border-neutral-800 pt-2">
            <button
              type="button"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="w-full flex items-center justify-between p-1.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-accent to-accent-hot text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                  S
                </div>
                <span className="text-[13px] font-semibold text-neutral-900 dark:text-neutral-100">
                  {userName}
                </span>
              </div>
              <CaretDown size={14} className="text-neutral-400" />
            </button>

            {isUserMenuOpen && (
              <div className="absolute bottom-full left-0 mb-1.5 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1c1c1c] p-1.5 shadow-xl z-50 mfy-fadein">
                <div className="px-2 py-1 text-[11px] font-medium text-neutral-400 truncate">
                  sagar@pixartual.ai
                </div>
                <div className="my-1 border-t border-neutral-200 dark:border-neutral-800" />
                <button
                  type="button"
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                  <User size={14} /> Profile & Account
                </button>
                <Link
                  href="/pricing"
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                  <CreditCard size={14} /> Billing & Credits
                </Link>
                <div className="my-1 border-t border-neutral-200 dark:border-neutral-800" />
                <Link
                  href="/"
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30"
                >
                  <SignOut size={14} /> Log out
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* =========================================================================
          MAIN WORKSPACE CANVAS (Scrollable on right)
          ========================================================================= */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#fafafa]/50 dark:bg-[#0d0d0d]">
        {/* Mobile Top Header (only visible on mobile screens) */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121212]">
          <PixartualLogo variant="auto" size={24} showWordmark />
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-neutral-500 rounded-lg hover:bg-neutral-100"
            >
              <MagnifyingGlass size={18} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neutral-500 rounded-lg hover:bg-neutral-100"
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-4 md:p-8 max-w-[1300px] w-full mx-auto">
          {/* 1. Hero Sunset Glowing Box */}
          <div
            className="relative overflow-hidden rounded-[32px] p-6 sm:p-10 md:p-14 mb-8 border border-neutral-200/70 dark:border-neutral-800 shadow-sm bg-cover bg-center transition-all"
            style={{
              backgroundImage: 'url(/images/prompt-background.webp)',
              backgroundColor: '#fffaf5',
            }}
          >
            {/* Top Integration Pill */}
            <div className="flex justify-center mb-6">
              <button
                type="button"
                onClick={() => setIsConnectorsOpen(true)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-md shadow-2xs border border-neutral-200/80 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <div className="flex items-center -space-x-1">
                  <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] font-bold">
                    G
                  </span>
                  <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[8px] font-bold">
                    S
                  </span>
                  <span className="w-4 h-4 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[8px] font-bold">
                    Git
                  </span>
                </div>
                <span>Connect all your tools</span>
                <ArrowRight size={12} className="text-neutral-400" />
              </button>
            </div>

            {/* Main Greeting */}
            <h1 className="font-inter font-semibold text-center text-[28px] sm:text-[34px] md:text-[38px] tracking-[-0.02em] text-neutral-900 dark:text-white mb-6 leading-tight">
              {greeting}
            </h1>

            {/* Floating Prompt Box */}
            <div className="max-w-[740px] mx-auto rounded-2xl bg-white dark:bg-[#181818] border border-neutral-200/90 dark:border-neutral-800 shadow-[0_10px_35px_rgba(0,0,0,0.06)] p-3 sm:p-4 relative transition-all">
              <textarea
                rows={3}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleLaunchStudio();
                  }
                }}
                placeholder={placeholders[placeholderIndex]}
                className="w-full resize-none border-0 bg-transparent text-[15px] leading-relaxed text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-0 p-1"
              />

              {/* Toolbar */}
              <div className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-800/60 mt-1">
                {/* Left tools */}
                <div className="flex items-center gap-2">
                  {/* Attach Button */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsAttachOpen(!isAttachOpen)}
                      className="w-7 h-7 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors"
                      title="Attach context or files"
                    >
                      <Plus size={14} />
                    </button>
                    {isAttachOpen && (
                      <div className="absolute bottom-full left-0 mb-2 w-48 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1c1c1c] p-1 shadow-lg z-50 mfy-fadein">
                        <button
                          type="button"
                          onClick={() => {
                            setIsAttachOpen(false);
                            setIsConnectorsOpen(true);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 text-left"
                        >
                          <Plugs size={14} /> Connect Tool
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsAttachOpen(false)}
                          className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 text-left"
                        >
                          <FileCode size={14} /> Upload Mockup / Code
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Build Mode Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsModeOpen(!isModeOpen)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#1a1a1a] text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <Hammer size={14} className="text-neutral-500" />
                      <span>{selectedMode}</span>
                      <CaretDown size={12} className="text-neutral-400" />
                    </button>
                    {isModeOpen && (
                      <div className="absolute bottom-full left-0 mb-2 w-32 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1c1c1c] p-1 shadow-lg z-50 mfy-fadein">
                        {(['Build', 'Edit', 'Enhance'] as const).map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => {
                              setSelectedMode(mode);
                              setIsModeOpen(false);
                            }}
                            className={`w-full text-left px-2.5 py-1.5 text-xs rounded-lg transition-colors ${
                              selectedMode === mode
                                ? 'bg-neutral-100 dark:bg-neutral-800 font-semibold text-neutral-900 dark:text-white'
                                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right tools: Voice & Submit */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors"
                    title="Dictate prompt with voice"
                  >
                    <Microphone size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleLaunchStudio()}
                    className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-sm"
                    title="Send prompt"
                  >
                    <ArrowUp size={15} weight="bold" />
                  </button>
                </div>
              </div>
            </div>

            {/* Create Blank Site Action */}
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={() => router.push('/dashboard/studio')}
                className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors group"
              >
                <MagicWand size={14} className="text-neutral-400 group-hover:text-accent transition-colors" />
                <span>Create blank site</span>
              </button>
            </div>
          </div>

          {/* 2. Projects & Templates Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('projects')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'projects'
                    ? 'bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                My projects
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('templates')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'templates'
                    ? 'bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                PixartualAI templates
              </button>
            </div>

            <Link
              href="/dashboard?view=all"
              className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white font-medium flex items-center gap-1"
            >
              <span>View all</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          {/* 3. Projects Grid */}
          {activeTab === 'projects' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => router.push(`/dashboard/studio?template=${proj.id}`)}
                  className="group flex flex-col rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#161616] overflow-hidden shadow-2xs hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all cursor-pointer"
                >
                  {/* Card Image / Preview */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                    <Image
                      src={proj.coverUrl}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="px-3 py-1.5 rounded-xl bg-white/95 text-neutral-900 text-xs font-semibold shadow-lg">
                        Open in Studio
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="flex items-center justify-between p-3.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-6 h-6 rounded-md bg-stone-100 dark:bg-neutral-800 flex items-center justify-center text-xs shrink-0">
                        {proj.icon}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[13px] font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                          {proj.title}
                        </span>
                        <span className="text-[11px] text-neutral-400">
                          {proj.edited}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="p-1 text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800"
                    >
                      <DotsThree size={18} weight="bold" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Blank Project Starter Card */}
              <div
                onClick={() => router.push('/dashboard/studio')}
                className="flex flex-col items-center justify-center aspect-[16/10] rounded-2xl border-2 border-dashed border-neutral-200 dark:border-neutral-800 hover:border-accent hover:bg-accent/5 transition-all cursor-pointer p-6 text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:bg-accent group-hover:text-white flex items-center justify-center text-neutral-500 transition-colors mb-2">
                  <Plus size={18} />
                </div>
                <span className="text-[13px] font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-accent transition-colors">
                  New project
                </span>
                <span className="text-[11px] text-neutral-400 mt-0.5">
                  Start from scratch or prompt
                </span>
              </div>
            </div>
          ) : (
            /* Templates View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'SaaS Launch Kit', category: 'Software', img: '/images/bento-generate.webp' },
                { title: 'Minimalist Portfolio', category: 'Design', img: '/images/atelier.jpg' },
                { title: 'E-Commerce Storefront', category: 'Retail', img: '/images/galway.jpg' },
              ].map((tmpl, idx) => (
                <div
                  key={idx}
                  onClick={() => router.push(`/dashboard/studio?template=${tmpl.title.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#161616] overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="relative aspect-[16/10] w-full bg-neutral-100">
                    <Image src={tmpl.img} alt={tmpl.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3.5">
                    <span className="text-xs font-semibold text-neutral-900 dark:text-white block">
                      {tmpl.title}
                    </span>
                    <span className="text-[11px] text-neutral-400 block mt-0.5">
                      {tmpl.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* =========================================================================
          FLOATING SUPPORT WIDGET (Bottom-Right matching Modulify screenshot)
          ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {/* Support popup pill if not dismissed */}
        {!isSupportDismissed && (
          <div className="flex items-center gap-3 p-3.5 pr-4 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-neutral-200/90 dark:border-neutral-800 mb-3 max-w-[320px] mfy-fadein">
            {/* Stacked 3 team avatars */}
            <div className="flex -space-x-2 shrink-0">
              <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-neutral-900">
                A
              </div>
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-neutral-900">
                E
              </div>
              <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-neutral-900">
                M
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                Need a hand?
              </span>
              <span className="text-[11px] text-neutral-400 leading-tight">
                Our support team is just a message away.
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsSupportDismissed(true)}
              className="ml-auto text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 p-1"
              title="Dismiss"
            >
              <X size={14} />
            </button>
          </div>
        )}

        {/* Floating Chat Bubble Button */}
        <button
          type="button"
          onClick={() => setIsSupportChatOpen(!isSupportChatOpen)}
          className="relative w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform"
          aria-label="Chat with support"
        >
          <ChatCircleDots size={22} weight="fill" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
            1
          </span>
        </button>
      </div>

      {/* =========================================================================
          CONNECTORS MODAL ("Connect all your tools")
          ========================================================================= */}
      {isConnectorsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 mfy-fadein">
          <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 shadow-2xl border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <Plugs size={18} className="text-accent" />
                <h3 className="text-sm font-semibold">Connect all your tools</h3>
              </div>
              <button
                onClick={() => setIsConnectorsOpen(false)}
                className="text-neutral-400 hover:text-neutral-800 p-1"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-xs text-neutral-500 mt-2 mb-4 leading-relaxed">
              Connect external data, repositories, and APIs. The web products you generate can read and write to them automatically with zero custom configuration.
            </p>

            <div className="grid grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
              {connectors.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-stone-50/50 dark:bg-neutral-800/40"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white dark:bg-neutral-700 flex items-center justify-center shadow-2xs p-1">
                      <Image src={c.icon} alt={c.name} width={18} height={18} />
                    </div>
                    <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                      {c.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                      c.connected
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300'
                        : 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100'
                    }`}
                  >
                    {c.connected ? 'Active' : 'Connect'}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setIsConnectorsOpen(false)}
                className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          COMMAND SEARCH MODAL (Ctrl + K)
          ========================================================================= */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/60 backdrop-blur-xs p-4 mfy-fadein">
          <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-100 dark:border-neutral-800">
              <MagnifyingGlass size={18} className="text-neutral-400" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, templates, skills or settings..."
                className="w-full border-0 bg-transparent text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none"
              />
              <button onClick={() => setIsSearchOpen(false)} className="text-neutral-400 p-1">
                <X size={16} />
              </button>
            </div>
            <div className="p-2 max-h-72 overflow-y-auto">
              <div className="px-3 py-1.5 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                Quick Actions
              </div>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  router.push('/dashboard/studio');
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-left"
              >
                <MagicWand size={16} className="text-accent" />
                <span>Create new blank product</span>
              </button>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setIsConnectorsOpen(true);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-left"
              >
                <Plugs size={16} className="text-accent" />
                <span>Manage connectors & integrations</span>
              </button>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  router.push('/domains');
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-left"
              >
                <Globe size={16} className="text-accent" />
                <span>Configure custom domains</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          LIVE SUPPORT CHAT DRAWER
          ========================================================================= */}
      {isSupportChatOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden mfy-fadein">
          <div className="p-4 bg-gradient-to-r from-accent to-accent-hot text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                P
              </div>
              <div>
                <h4 className="text-xs font-semibold">Pixartual Support</h4>
                <p className="text-[10px] text-white/80">Online • Usually replies in minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsSupportChatOpen(false)}
              className="text-white/80 hover:text-white p-1"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-4 h-64 overflow-y-auto space-y-3 bg-stone-50 dark:bg-neutral-900/40 text-xs">
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                P
              </div>
              <div className="bg-white dark:bg-neutral-800 p-2.5 rounded-xl rounded-tl-none shadow-2xs border border-neutral-100 dark:border-neutral-700 max-w-[85%]">
                Hi Sagarithm! How can we help you build your next product today?
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] flex gap-2">
            <input
              type="text"
              placeholder="Send a message..."
              className="flex-1 text-xs border border-neutral-200 dark:border-neutral-700 rounded-xl px-3 py-1.5 focus:outline-none"
            />
            <button className="px-3 py-1.5 bg-accent text-white rounded-xl text-xs font-semibold">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
