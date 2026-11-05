import { ThemeSync } from '@/components/layout/ThemeSync';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PixartualAI — Turn Ideas into Interactive Digital Experiences Without Code',
  description:
    'An AI-powered creation platform that transforms your ideas or curated templates into fully interactive, responsive, and shareable digital experiences, micro-tools, and websites.',
  openGraph: {
    title: 'PixartualAI — Turn Ideas into Interactive Digital Experiences',
    description:
      'Describe your idea to AI or customize ready-made templates. Zero code required.',
    siteName: 'PixartualAI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#f5f5f5" />
      </head>
      <body className="min-h-screen bg-base text-ink antialiased selection:bg-orange-500/20 selection:text-ink-strong">
        <ThemeSync />
        {children}
      </body>
    </html>
  );
}
