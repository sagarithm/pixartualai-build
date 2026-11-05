'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { ArrowUpRight, Sparkle, Lightning, ChartLineUp, ShieldCheck } from '@phosphor-icons/react';

export default function MadeInModulifyPage() {
  const showcaseProjects = [
    {
      name: 'FontInLogo',
      desc: 'Free brand typography directory',
      url: 'https://fontinlogo.com',
      cardImg: '/images/made-in-modulify/card-fontinlogo.webp',
      favImg: '/images/personas/logos/logo-fontinlogo.png',
    },
    {
      name: 'LogoToUse',
      desc: 'Open brand identity platform',
      url: 'https://logotouse.com',
      cardImg: '/images/made-in-modulify/card-logotouse.webp',
      favImg: '/images/personas/logos/logo-logotouse.png',
    },
    {
      name: 'Motion Studio',
      desc: 'Interactive motion graphics portfolio',
      url: 'https://motion.design',
      cardImg: '/images/made-in-modulify/card-motion.webp',
      favImg: '/images/personas/logos/logo-motion.png',
    },
    {
      name: 'Paperanimation',
      desc: 'Stop-motion craft and commercial animation',
      url: 'https://paperanimation.com',
      cardImg: '/images/made-in-modulify/card-paperanimation.webp',
      favImg: '/images/personas/logos/logo-3.png',
    },
    {
      name: 'Wonderlist',
      desc: 'Curated products & gift guides',
      url: 'https://wonderlist.app',
      cardImg: '/images/made-in-modulify/card-wonderlist.webp',
      favImg: '/images/personas/logos/logo-wonderlist.png',
    },
    {
      name: 'Construction Web Design UK',
      desc: 'Commercial building contractor directory',
      url: 'https://constructionwebdesign.co.uk',
      cardImg: '/images/made-in-modulify/card-constructionwebdesign.webp',
      favImg: '/images/made-in-modulify/fav-constructionwebdesign.png',
    },
    {
      name: 'MeinMwStRechner',
      desc: 'Interactive European VAT calculator app',
      url: 'https://meinmwstrechner.de',
      cardImg: '/images/made-in-modulify/card-meinmwstrechner.webp',
      favImg: '/images/personas/logos/logo-orange.png',
    },
    {
      name: 'Landdding',
      desc: 'SaaS landing page inspiration vault',
      url: 'https://landdding.com',
      cardImg: '/images/made-in-modulify/card-landdding.webp',
      favImg: '/images/made-in-modulify/fav-landdding.png',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Section 0: Authentic Horizontal Scroller Hero */}
        <section className="mim-hero-section">
          <div className="mim-hero">
            <div className="mim-hero-inner">
              <span className="mim-badge">
                <span aria-hidden="true" className="mim-badge-dot" />
                New · Made in PixartualAI · real sites, real AI workflows
              </span>
              <h1 className="mim-title font-['Neutralsans']">
                Stories from teams building faster with PixartualAI.
              </h1>
              <p className="mim-sub">
                See how teams use PixartualAI to launch polished sites, scale CMS libraries, generate SEO-ready pages, localize content, and keep websites moving without waiting on developers.
              </p>
            </div>

            {/* Horizontal Project Scroller */}
            <div className="mim-scroller" role="list">
              {showcaseProjects.map((p) => (
                <a
                  key={p.name}
                  className="mim-hero-card group"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt={p.name}
                    className="mim-hero-card-bg"
                    loading="lazy"
                    src={p.cardImg}
                  />
                  <div className="mim-hero-card-tint" />
                  <div className="mim-hero-card-scrim" />
                  <span className="mim-hero-card-name font-['Neutralsans']">
                    {p.name}
                  </span>
                  <span className="mim-hero-visit inline-flex items-center gap-1">
                    Visit site <ArrowUpRight size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: Real projects. Different problems. Same unfair speed. */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div className="mx-auto w-full max-w-[1240px] px-5 md:px-[50px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3.5">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  Real projects. Different problems. Same unfair speed.
                </h2>
              </div>

              <div className="overflow-hidden rounded-[20px] bg-neutral-100 border border-neutral-200">
                <div className="grid border-b border-neutral-200 md:grid-cols-2 md:divide-x md:divide-neutral-200">
                  <div className="flex flex-col gap-4 p-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Case Study · Directory</span>
                    <h3 className="text-2xl font-bold text-neutral-900 font-['Neutralsans']">FontInLogo</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      Scaled to 150,000+ monthly visits by generating programmatic typography showcase pages and instant brand font discovery filters.
                    </p>
                    <div className="mt-4 flex items-center gap-6 text-xs text-neutral-500">
                      <div><strong className="text-neutral-900 text-sm">3 Days</strong> to MVP</div>
                      <div><strong className="text-neutral-900 text-sm">1,200+</strong> Fonts Indexed</div>
                      <div><strong className="text-neutral-900 text-sm">100/100</strong> Performance</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 p-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Case Study · Interactive Tool</span>
                    <h3 className="text-2xl font-bold text-neutral-900 font-['Neutralsans']">MeinMwStRechner</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      Built a stateful multi-country VAT and tax calculation engine with instant currency conversion that ranks #1 for German financial calculators.
                    </p>
                    <div className="mt-4 flex items-center gap-6 text-xs text-neutral-500">
                      <div><strong className="text-neutral-900 text-sm">4 Hours</strong> to Launch</div>
                      <div><strong className="text-neutral-900 text-sm">Zero</strong> Backend Servers</div>
                      <div><strong className="text-neutral-900 text-sm">300ms</strong> Edge Speed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What PixartualAI helped make faster (Flame cards) */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div className="mx-auto w-full max-w-[1240px] px-5 md:px-[50px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3.5">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  What PixartualAI helped make faster
                </h2>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  Create, edit, manage, publish, and improve your site from one place.
                </p>
              </div>

              <div className="grid grid-cols-1 items-start gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                <article className="kit-fcard relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-neutral-100 p-[25px] aspect-[253/368] min-h-[368px]">
                  <div>
                    <Lightning size={32} className="text-orange-500 mb-6" weight="duotone" />
                    <h3 className="kit-fcard__title text-lg font-medium text-neutral-950 font-['Neutralsans']">
                      From Prompt to Live URLs
                    </h3>
                    <p className="kit-fcard__text mt-3 text-sm leading-relaxed text-neutral-600">
                      Turn an idea or product description into responsive, production-hosted pages in under 60 seconds.
                    </p>
                  </div>
                </article>

                <article className="kit-fcard relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-neutral-100 p-[25px] aspect-[253/368] min-h-[368px]">
                  <div>
                    <ChartLineUp size={32} className="text-orange-500 mb-6" weight="duotone" />
                    <h3 className="kit-fcard__title text-lg font-medium text-neutral-950 font-['Neutralsans']">
                      SEO & Programmatic Scale
                    </h3>
                    <p className="kit-fcard__text mt-3 text-sm leading-relaxed text-neutral-600">
                      Generate high-ranking programmatic pages, location directories, and dynamic landing pages with automated metadata.
                    </p>
                  </div>
                </article>

                <article className="kit-fcard relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-neutral-100 p-[25px] aspect-[253/368] min-h-[368px]">
                  <div>
                    <ShieldCheck size={32} className="text-orange-500 mb-6" weight="duotone" />
                    <h3 className="kit-fcard__title text-lg font-medium text-neutral-950 font-['Neutralsans']">
                      Enterprise Reliability
                    </h3>
                    <p className="kit-fcard__text mt-3 text-sm leading-relaxed text-neutral-600">
                      Global edge network with automated SSL certificates, 99.99% uptime, and instant rollback versioning.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Paperanimation Deep Dive */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div className="mx-auto w-full max-w-[1240px] px-5 md:px-[50px]">
            <div className="flex items-center gap-8 md:flex-row md:gap-[30px] flex-col">
              <div className="w-full md:w-1/2">
                <div className="aspect-[631/480] w-full overflow-hidden rounded-2xl shadow-sm border border-neutral-200">
                  <img
                    alt="Paperanimation website screenshot"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    src="/images/made-in-modulify/story-paperanimation.webp"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-6 md:w-1/2 lg:gap-8">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  Paperanimation
                </h2>
                <div className="flex flex-col gap-2">
                  <p className="text-[15px] leading-relaxed text-neutral-500 font-medium">
                    Art direction meets zero-code agility.
                  </p>
                  <p className="text-[15px] leading-relaxed text-neutral-900">
                    A boutique stop-motion studio needed an editorial portfolio that celebrated physical paper craft. Instead of paying a $40k agency fee, they generated the complete site with PixartualAI in two afternoons, complete with embedded showreels, client credits, and project galleries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Iconly Deep Dive */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div className="mx-auto w-full max-w-[1240px] px-5 md:px-[50px]">
            <div className="flex items-center gap-8 md:flex-row md:gap-[30px] flex-col-reverse">
              <div className="flex w-full flex-col gap-6 md:w-1/2 lg:gap-8">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  Iconly
                </h2>
                <div className="flex flex-col gap-2">
                  <p className="text-[15px] leading-relaxed text-neutral-500 font-medium">
                    From asset library to multi-million download marketplace.
                  </p>
                  <p className="text-[15px] leading-relaxed text-neutral-900">
                    Iconly used PixartualAI to transition from static icon packs to a live searchable web catalog. Customers search, copy SVGs in one click, and preview stroke weights on screen.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-[631/480] w-full overflow-hidden rounded-2xl shadow-sm border border-neutral-200">
                  <img
                    alt="Iconly website screenshot"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    src="/images/made-in-modulify/story-iconly.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}
