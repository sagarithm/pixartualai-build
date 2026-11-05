import { ThemeSync } from '@/components/layout/ThemeSync';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://pixartual.ai'),
  title: 'PixartualAI — Turn Ideas into Interactive Digital Experiences Without Code',
  description:
    'An AI-powered creation platform that transforms your ideas or curated templates into fully interactive, responsive, and shareable digital experiences, micro-tools, and websites.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/pixartual/png/pixartual-symbol-black.png',
  },
  openGraph: {
    title: 'PixartualAI — Turn Ideas into Interactive Digital Experiences',
    description:
      'Describe your idea to AI or customize ready-made templates. Zero code required.',
    siteName: 'PixartualAI',
    url: 'https://pixartual.ai',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixartualAI — Turn Ideas into Interactive Digital Experiences',
    description:
      'Describe your idea to AI or customize ready-made templates. Zero code required.',
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#f5f5f5" />
      </head>
      <body className="min-h-screen bg-base text-ink antialiased selection:bg-orange-500/20 selection:text-ink-strong">
        <ThemeSync />
        {children}
      </body>
    </html>
  );
}
