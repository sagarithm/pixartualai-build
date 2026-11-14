'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  Plus,
  FolderSimple,
  User,
  CreditCard,
  SignOut,
  Gear,
  Users,
  ChartBar,
  Star,
  ChatText,
  Key,
  Handshake,
  Sun,
  Moon,
  Desktop,
  FileText,
  Code,
  ClockCounterClockwise,
  Newspaper,
  Question,
  Cpu,
} from '@phosphor-icons/react';

interface DashboardSidebarProps {
  onOpenSearch?: () => void;
  onOpenConnectors?: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  onOpenSearch,
  onOpenConnectors,
}) => {
  const pathname = usePathname();
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isThemeSubmenuOpen, setIsThemeSubmenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'Light' | 'Dark' | 'Auto'>('Light');

  const workspaceRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  const userName = 'Sagarithm';
  const userEmail = 'sagarithm@gmail.com';
  const workspaceName = "Sagarithm's Workspace";

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (workspaceRef.current && !workspaceRef.current.contains(e.target as Node)) {
        setIsWorkspaceOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setIsUserMenuOpen(false);
        setIsThemeSubmenuOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/dashboard', icon: House, exact: true },
    { label: 'Projects', href: '/dashboard/projects', icon: SquaresFour },
    { label: 'Templates', href: '/dashboard/templates', icon: FolderSimple },
    { label: 'Domains', href: '/dashboard/domains', icon: Globe },
    { label: 'Connectors', href: '/dashboard/connectors', icon: Plugs },
    { label: 'Skills', href: '/dashboard/skills', icon: Sparkle },
  ];

  const isActive = (href: string, exact?: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const applyTheme = (theme: 'Light' | 'Dark' | 'Auto') => {
    setCurrentTheme(theme);
    const isDark =
      theme === 'Dark' ||
      (theme === 'Auto' &&
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    const html = document.documentElement;
    html.setAttribute('data-color-scheme', isDark ? 'dark' : 'light');
    html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    setIsThemeSubmenuOpen(false);
  };

  return (
    <aside className="hidden md:flex w-[240px] flex-col justify-between border-r border-neutral-200/80 dark:border-neutral-800 bg-[#fafafa] dark:bg-[#121212] p-4 select-none h-screen shrink-0 overflow-y-auto z-30">
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

        {/* Workspace Switcher (Image 4 Parity) */}
        <div className="relative" ref={workspaceRef}>
          <button
            type="button"
            onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}
            className="w-full flex items-center justify-between p-2 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] shadow-2xs hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white text-[11px] font-bold shadow-2xs shrink-0">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-[13px] font-medium text-neutral-800 dark:text-neutral-200 truncate">
                {workspaceName}
              </span>
            </div>
            <CaretUpDown size={14} className="text-neutral-400 shrink-0" />
          </button>

          {/* Workspace Dropdown Menu */}
          {isWorkspaceOpen && (
            <div className="absolute top-full left-0 mt-1 w-[260px] rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] shadow-xl z-50 p-2 mfy-fadein text-xs">
              {/* Workspace Header */}
              <div className="flex items-center gap-3 p-2 rounded-xl bg-stone-50/60 dark:bg-neutral-800/40">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-2xs shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-neutral-900 dark:text-white truncate">
                    {workspaceName}
                  </div>
                  <div className="text-[11px] text-neutral-400">Free - 1 member</div>
                </div>
              </div>

              {/* Workspace Action Links */}
              <div className="mt-2 space-y-0.5 border-t border-neutral-100 dark:border-neutral-800 pt-2">
                <Link
                  href="/dashboard/workspace/settings"
                  onClick={() => setIsWorkspaceOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <Gear size={16} className="text-neutral-500" />
                  <span>Settings</span>
                </Link>
                <Link
                  href="/dashboard/workspace/members"
                  onClick={() => setIsWorkspaceOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <Users size={16} className="text-neutral-500" />
                  <span>Members</span>
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setIsWorkspaceOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <CreditCard size={16} className="text-neutral-500" />
                  <span>Plans</span>
                </Link>
                <Link
                  href="/dashboard/workspace/spending"
                  onClick={() => setIsWorkspaceOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <ChartBar size={16} className="text-neutral-500" />
                  <span>Spending</span>
                </Link>
              </div>

              {/* Credits Section */}
              <div className="mt-2 pt-2 border-t border-neutral-100 dark:border-neutral-800 px-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-900 dark:text-white">Credits</span>
                  <Link
                    href="/pricing"
                    onClick={() => setIsWorkspaceOpen(false)}
                    className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white flex items-center gap-0.5 text-[11px]"
                  >
                    <span>50 left</span>
                    <CaretRight size={12} />
                  </Link>
                </div>
                <div className="mt-1.5 w-full h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
                  <div className="h-full bg-black dark:bg-white rounded-full w-full" />
                </div>
                <p className="text-[10px] text-neutral-400 mt-1">Credits reset monthly on paid plans</p>
              </div>

              {/* All Workspaces List */}
              <div className="mt-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <div className="px-2 py-1 text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                  All workspaces
                </div>
                <div className="flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/80">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white text-[9px] shrink-0">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="font-medium truncate text-[12px]">{workspaceName}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Star size={12} weight="fill" className="text-neutral-400" />
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300">
                      FREE
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsWorkspaceOpen(false);
                    alert('Create workspace modal');
                  }}
                  className="w-full mt-1.5 flex items-center gap-2 px-2.5 py-2 text-left text-xs text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <Plus size={14} />
                  <span>Create workspace</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button
          type="button"
          onClick={onOpenSearch}
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
          {navLinks.map((link) => {
            const active = isActive(link.href, link.exact);
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-[13.5px] transition-colors ${
                  active
                    ? 'bg-neutral-200/70 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} weight={active ? 'fill' : 'regular'} />
                  <span>{link.label}</span>
                </div>
                {link.label === 'Projects' && <CaretDown size={14} className="text-neutral-400" />}
              </Link>
            );
          })}
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

          {/* Resources Dropdown (Image 3 Parity) */}
          <div className="relative" ref={resourcesRef}>
            <button
              type="button"
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="w-full flex items-center justify-between px-2 py-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                <BookOpen size={16} />
                <span>Resources</span>
              </div>
              <CaretRight size={12} className={`text-neutral-400 transition-transform ${isResourcesOpen ? 'rotate-90' : ''}`} />
            </button>

            {isResourcesOpen && (
              <div className="absolute left-full bottom-0 ml-2 w-48 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] shadow-xl p-1.5 z-50 mfy-fadein text-xs space-y-0.5">
                <Link
                  href="/docs"
                  onClick={() => setIsResourcesOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <FileText size={16} />
                  <span>Docs</span>
                </Link>
                <Link
                  href="/docs/mcp"
                  onClick={() => setIsResourcesOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Cpu size={16} />
                  <span>MCP</span>
                </Link>
                <Link
                  href="/docs/api"
                  onClick={() => setIsResourcesOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Code size={16} />
                  <span>API</span>
                </Link>
                <Link
                  href="/docs/changelog"
                  onClick={() => setIsResourcesOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <ClockCounterClockwise size={16} />
                  <span>Changelog</span>
                </Link>
                <Link
                  href="/insights"
                  onClick={() => setIsResourcesOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Newspaper size={16} />
                  <span>Insights</span>
                </Link>
                <Link
                  href="/faqs"
                  onClick={() => setIsResourcesOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Question size={16} />
                  <span>FAQs</span>
                </Link>
              </div>
            )}
          </div>

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

        {/* User Profile Pill & Dropdown (Image 2 Parity) */}
        <div className="relative border-t border-neutral-200/80 dark:border-neutral-800 pt-2" ref={userMenuRef}>
          <button
            type="button"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="w-full flex items-center justify-between p-1.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-200 via-pink-200 to-amber-200 p-0.5 flex items-center justify-center shadow-2xs">
                <div className="w-full h-full rounded-[10px] bg-white dark:bg-black flex items-center justify-center font-bold text-xs text-neutral-900 dark:text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>
              <span className="text-[13px] font-semibold text-neutral-900 dark:text-neutral-100">
                {userName}
              </span>
            </div>
            <CaretDown size={14} className={`text-neutral-400 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* User Menu Modal (Image 2 exact match) */}
          {isUserMenuOpen && (
            <div className="absolute bottom-full left-0 mb-2 w-[230px] rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] shadow-2xl p-2 z-50 mfy-fadein text-xs space-y-0.5">
              {/* Header */}
              <div className="flex items-center gap-3 p-2 rounded-xl bg-stone-50/60 dark:bg-neutral-800/40">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-200 via-pink-200 to-amber-200 p-0.5 flex items-center justify-center shadow-2xs shrink-0">
                  <div className="w-full h-full rounded-[10px] bg-white dark:bg-black flex items-center justify-center font-bold text-xs text-neutral-900 dark:text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-neutral-900 dark:text-white truncate">
                    {userName}
                  </div>
                  <div className="text-[11px] text-neutral-400 truncate">{userEmail}</div>
                </div>
              </div>

              {/* Items */}
              <div className="pt-1.5 space-y-0.5">
                <Link
                  href="/dashboard/account"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
                >
                  <User size={16} />
                  <span>Profile</span>
                </Link>

                <Link
                  href="/dashboard/account/surveys"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <ChatText size={16} />
                  <span>Surveys</span>
                </Link>

                <Link
                  href="/dashboard/account/tokens"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Key size={16} />
                  <span>Tokens</span>
                </Link>

                <Link
                  href="/dashboard/account/affiliates"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Handshake size={16} />
                  <span>Affiliates</span>
                </Link>

                {/* Theme Selector */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsThemeSubmenuOpen(!isThemeSubmenuOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sun size={16} />
                      <span>Theme</span>
                    </div>
                    <div className="flex items-center gap-1 text-neutral-400 text-[11px]">
                      <span>{currentTheme}</span>
                      <CaretRight size={12} />
                    </div>
                  </button>

                  {isThemeSubmenuOpen && (
                    <div className="absolute left-full bottom-0 ml-1 w-28 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] shadow-lg p-1 z-50">
                      {(['Light', 'Dark', 'Auto'] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => applyTheme(t)}
                          className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                            currentTheme === t
                              ? 'bg-neutral-100 dark:bg-neutral-800 font-semibold'
                              : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'
                          }`}
                        >
                          {t === 'Light' && <Sun size={12} />}
                          {t === 'Dark' && <Moon size={12} />}
                          {t === 'Auto' && <Desktop size={12} />}
                          <span>{t}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-neutral-100 dark:border-neutral-800 my-1 pt-1 space-y-0.5">
                <Link
                  href="/"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <span>Home</span>
                </Link>
                <Link
                  href="/legal/terms"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <span>Terms of Service</span>
                </Link>
                <Link
                  href="/legal/privacy-policy"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <span>Privacy Policy</span>
                </Link>
              </div>

              {/* Logout */}
              <div className="border-t border-neutral-100 dark:border-neutral-800 pt-1">
                <Link
                  href="/"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 font-medium"
                >
                  <SignOut size={16} />
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
