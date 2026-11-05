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
      </head>
      <body className="min-h-screen bg-[#FBFBFA] dark:bg-[#0F0F0F] text-[#171717] dark:text-[#EDEDED] antialiased selection:bg-neutral-200 dark:selection:bg-neutral-800 transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}

