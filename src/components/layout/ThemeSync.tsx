'use client';

import { useEffect } from 'react';

export const ThemeSync: React.FC = () => {
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const mode = saved === 'auto' || !saved ? (prefersDark ? 'dark' : 'light') : saved;
      document.documentElement.setAttribute('data-theme', mode);
      if (mode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        const currentSaved = localStorage.getItem('theme');
        if (!currentSaved || currentSaved === 'auto') {
          const newMode = e.matches ? 'dark' : 'light';
          document.documentElement.setAttribute('data-theme', newMode);
          if (newMode === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } catch (e) {}
  }, []);

  return null;
};

