'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { PromptToOutputSection } from '@/components/landing/PromptToOutputSection';
import { PixartualBento } from '@/components/landing/PixartualBento';
import { BuildAnythingSection } from '@/components/landing/BuildAnythingSection';
import { KeepYourSiteSection } from '@/components/landing/KeepYourSiteSection';
import { PlatformFeaturesSection } from '@/components/landing/PlatformFeaturesSection';
import { PixartualCta } from '@/components/landing/PixartualCta';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Section 0: Hero with glowing video background and glowing ring prompt box */}
        <HeroSection />

        {/* Section 1: From prompt to polished output with authentic sliding templates */}
        <PromptToOutputSection />

        {/* Section 2: Not just generated. Designed. with glowing amber backdrop */}
        <PixartualBento />

        {/* Section 3: Build Anything with orange split scroller and 3D stacked previews */}
        <BuildAnythingSection />

        {/* Section 4: Keep your site. Upgrade how you work on it. with Webflow to Pixartual video */}
        <KeepYourSiteSection />

        {/* Section 5: A full website platform, not just a generator. with hover feature flames */}
        <PlatformFeaturesSection />

        {/* Section 6: What are we building? banner */}
        <PixartualCta />
      </main>

      {/* Floating Footer with authentic glowing orange backdrop */}
      <Footer />
    </div>
  );
}
