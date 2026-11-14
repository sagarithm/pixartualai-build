'use client';

import React, { useState, useEffect } from 'react';
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
  Check,
  FolderSimple,
  User,
  CreditCard,
  SignOut,
  X,
  MagicWand,
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

  const userName = 'Sagarithm';
  const workspaceName = "Sagarithm's Workspace";

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

  return (
    <aside className="hidden md:flex w-[240px] flex-col justify-between border-r border-neutral-200/80 dark:border-neutral-800 bg-[#fafafa] dark:bg-[#121212] p-4 select-none h-screen shrink-0 overflow-y-auto">
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
              <Link
                href="/dashboard/settings"
                className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                <User size={14} /> Profile & Account
              </Link>
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
  );
};
