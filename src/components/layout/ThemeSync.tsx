'use client';

import { useEffect } from 'react';

export const ThemeSync: React.FC = () => {
  useEffect(() => {
    try {
      const getStoredTheme = (): 'auto' | 'light' | 'dark' => {
        try {
          const modTheme = window.localStorage.getItem('modulify-theme');
          if (modTheme) {
            const parsed = JSON.parse(modTheme);
            if (parsed?.state?.Theme && ['auto', 'light', 'dark'].includes(parsed.state.Theme)) {
              return parsed.state.Theme;
            }
          }
          const saved = window.localStorage.getItem('theme') as 'auto' | 'light' | 'dark' | null;
          if (saved && ['auto', 'light', 'dark'].includes(saved)) {
            return saved;
          }
        } catch (e) {}
        return 'auto';
      };

      const applyMode = (mode: 'auto' | 'light' | 'dark', skipTransition = false) => {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const effectiveTheme = mode === 'auto' ? (prefersDark ? 'dark' : 'light') : mode;
        const root = document.documentElement;

        if (skipTransition) {
          root.setAttribute('data-theme-switching', '');
        }

        root.setAttribute('data-theme', effectiveTheme);
        root.setAttribute('data-color-scheme', effectiveTheme);
        root.style.colorScheme = effectiveTheme;

        if (effectiveTheme === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }

        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) {
          meta.setAttribute('content', effectiveTheme === 'dark' ? '#1c1c1c' : '#f5f5f5');
        }

        if (skipTransition) {
          setTimeout(() => {
            root.removeAttribute('data-theme-switching');
          }, 60);
        }
      };

      // Initial sync on mount
      const initialMode = getStoredTheme();
      applyMode(initialMode, false);

      // Listen for system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleMediaChange = () => {
        const current = getStoredTheme();
        if (current === 'auto') {
          applyMode('auto', true);
        }
      };
      mediaQuery.addEventListener('change', handleMediaChange);

      // Listen for custom theme events
      const handleCustomThemeEvent = (e: CustomEvent<'auto' | 'light' | 'dark'>) => {
        if (e.detail) {
          applyMode(e.detail, true);
        }
      };
      window.addEventListener('pixartual-theme-change' as any, handleCustomThemeEvent as any);

      return () => {
        mediaQuery.removeEventListener('change', handleMediaChange);
        window.removeEventListener('pixartual-theme-change' as any, handleCustomThemeEvent as any);
      };
    } catch (e) {}
  }, []);

  return null;
};
