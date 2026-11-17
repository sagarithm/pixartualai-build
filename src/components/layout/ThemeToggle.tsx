'use client';

import React, { useEffect, useState } from 'react';

export type ThemeMode = 'auto' | 'light' | 'dark';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('auto');
  const [mounted, setMounted] = useState(false);

  const applyTheme = (mode: ThemeMode) => {
    try {
      localStorage.setItem('theme', mode);
      localStorage.setItem('pixartual-theme', JSON.stringify({ state: { Theme: mode } }));
    } catch (e) {}

    setThemeMode(mode);

    let isDark = false;
    if (mode === 'dark') {
      isDark = true;
    } else if (mode === 'light') {
      isDark = false;
    } else {
      isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    const html = document.documentElement;
    html.setAttribute('data-color-scheme', isDark ? 'dark' : 'light');
    html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    html.style.colorScheme = isDark ? 'dark' : 'light';
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    window.dispatchEvent(new CustomEvent('pixartual-theme-change', { detail: mode }));
  };

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('theme') as ThemeMode | null;
      if (saved && ['auto', 'light', 'dark'].includes(saved)) {
        setThemeMode(saved);
        return;
      }
      const modTheme = localStorage.getItem('pixartual-theme');
      if (modTheme) {
        const parsed = JSON.parse(modTheme);
        if (parsed?.state?.Theme && ['auto', 'light', 'dark'].includes(parsed.state.Theme)) {
          setThemeMode(parsed.state.Theme);
          return;
        }
      }
    } catch (e) {}

    const handleThemeChange = (e: any) => {
      if (e.detail && ['auto', 'light', 'dark'].includes(e.detail)) {
        setThemeMode(e.detail);
      }
    };
    window.addEventListener('pixartual-theme-change', handleThemeChange);
    return () => window.removeEventListener('pixartual-theme-change', handleThemeChange);
  }, []);

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={`inline-flex items-center rounded-full border border-neutral-300/80 dark:border-[#262626] bg-neutral-100/90 dark:bg-black p-[2.5px] shadow-xs select-none transition-colors ${className}`}
    >
      {/* System / Auto Mode */}
      <button
        type="button"
        role="radio"
        aria-checked={themeMode === 'auto'}
        title="System theme"
        onClick={() => applyTheme('auto')}
        className={`size-7 rounded-full flex items-center justify-center transition-all duration-150 cursor-pointer ${
          mounted && themeMode === 'auto'
            ? 'bg-white dark:bg-[#1a1a1a] border border-neutral-200/90 dark:border-[#333333] text-neutral-950 dark:text-white shadow-xs'
            : 'border border-transparent text-[#737373] hover:text-neutral-900 dark:hover:text-neutral-200'
        }`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <rect x="7" y="7" width="10" height="7" rx="1.5" />
          <path d="M15 17h2" />
        </svg>
      </button>

      {/* Light Mode */}
      <button
        type="button"
        role="radio"
        aria-checked={themeMode === 'light'}
        title="Light theme"
        onClick={() => applyTheme('light')}
        className={`size-7 rounded-full flex items-center justify-center transition-all duration-150 cursor-pointer ${
          mounted && themeMode === 'light'
            ? 'bg-white dark:bg-[#1a1a1a] border border-neutral-200/90 dark:border-[#333333] text-neutral-950 dark:text-white shadow-xs'
            : 'border border-transparent text-[#737373] hover:text-neutral-900 dark:hover:text-neutral-200'
        }`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </button>

      {/* Dark Mode */}
      <button
        type="button"
        role="radio"
        aria-checked={themeMode === 'dark'}
        title="Dark theme"
        onClick={() => applyTheme('dark')}
        className={`size-7 rounded-full flex items-center justify-center transition-all duration-150 cursor-pointer ${
          mounted && themeMode === 'dark'
            ? 'bg-white dark:bg-[#1a1a1a] border border-neutral-200/90 dark:border-[#333333] text-neutral-950 dark:text-white shadow-xs'
            : 'border border-transparent text-[#737373] hover:text-neutral-900 dark:hover:text-neutral-200'
        }`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          <path d="M19 2v4" />
          <path d="M21 4h-4" />
        </svg>
      </button>
    </div>
  );
};
