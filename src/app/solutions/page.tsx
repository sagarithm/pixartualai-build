'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import {
  Globe,
  DeviceMobile,
  Database,
  ChartBar,
  Wrench,
  ArrowRight,
  Check,
} from '@phosphor-icons/react';

export default function SolutionsPage() {
  const solutions = [
    {
      id: 'websites',
      title: 'Websites & Landing Pages',
      subtitle: 'Marketing sites, personal portfolios, blogs, and agency showcases that turn visitors into users.',
      icon: Globe,
      image: '/images/cap-landing-pages.webp',
      bullets: [
        'AI generation from natural language prompts',
        'Visual layout, typography, and responsive controls',
        'Built-in SEO metadata and OpenGraph social previews',
        'Custom domain support with automated edge SSL',
      ],
      tag: 'Marketing & Brand',
    },
    {
      id: 'frontend-apps',
      title: 'Front-End Apps & Micro-Tools',
      subtitle: 'Single-page web applications, pricing calculators, diagnostic assessments, and interactive questionnaires.',
      icon: DeviceMobile,
      image: '/images/cap-webapps.webp',
      bullets: [
        'Stateful calculation engines with zero hand-coding',
        'Multi-step form wizards and lead-qualification quizzes',
        'Client-side state management and instant live reactive preview',
        'One-click export to self-contained React or HTML bundles',
      ],
      tag: 'Interactive Experiences',
    },
    {
      id: 'fullstack-apps',
      title: 'Full-Stack Apps & CMS',
      subtitle: 'Dynamic web applications powered by integrated database schemas, CMS collections, and backend logic.',
      icon: Database,
      image: '/images/bento-cms.webp',
      bullets: [
        'Automated database table & relation provisioning',
        'Visual CMS collection editor for articles, products, and directories',
        'REST API endpoints with filterable database queries',
        'Production edge deployment with persistent global storage',
      ],
      tag: 'Full-Stack & Data',
    },
    {
      id: 'dashboards',
      title: 'Dashboards & Analytics',
      subtitle: 'Modern control panels, KPI monitoring hubs, and real-time operational summaries.',
      icon: ChartBar,
      image: '/images/cap-dashboards.webp',
      bullets: [
        'Pre-configured dark and light charting components',
        'Real-time traffic and conversion telemetry',
        'Role-based access viewports and permission gates',
        'Responsive layout across mobile, tablet, and ultra-wide displays',
      ],
      tag: 'Analytics & Admin',
    },
    {
      id: 'internal-tools',
      title: 'Internal Tools & Client Portals',
      subtitle: 'Back-office operations hubs, approval pipelines, customer client portals, and inventory trackers.',
      icon: Wrench,
      image: '/images/cap-client-portals.webp',
      bullets: [
        'Secure client onboarding and document distribution',
        'Team task review and workflow approval queues',
        'Integrations with popular webhooks and REST services',
        'Zero-maintenance hosting with enterprise-grade availability',
      ],
      tag: 'Operations & Enterprise',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center px-5 max-w-[1240px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-neutral-200 bg-stone-50 text-neutral-700 mb-6">
            <span>PixartualAI Solutions</span>
          </div>

          <h1 className="text-[clamp(36px,6vw,56px)] font-medium leading-[1.15] text-neutral-900 font-['Neutralsans']">
            Build any website, app, or tool with PixartualAI
          </h1>
          <p className="mt-4 max-w-[620px] mx-auto text-[clamp(1rem,1.2vw,1.12rem)] leading-relaxed text-gray-500">
            From single-page portfolios to stateful calculators, CMS platforms, dashboards, and client portals — see how creators and teams use PixartualAI.
          </p>
        </section>

        {/* Alternating Solutions Sections */}
        <section className="pb-20 px-5 max-w-[1240px] mx-auto space-y-24">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={sol.id}
                id={sol.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={isEven ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-neutral-600 mb-4">
                    <Icon size={14} className="text-[#fc8c04]" />
                    <span>{sol.tag}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-medium text-neutral-900 font-['Neutralsans'] leading-tight mb-4">
                    {sol.title}
                  </h2>

                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    {sol.subtitle}
                  </p>

                  <div className="space-y-3 mb-8">
                    {sol.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-3 text-sm text-neutral-700">
                        <Check size={16} weight="bold" className="text-[#fc8c04] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/dashboard?category=${sol.id}`} className="mfy-btn mfy-btn--primary">
                    Build with AI <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Preview Image */}
                <div className={`overflow-hidden rounded-[24px] border border-neutral-200 bg-stone-50 shadow-lg ${isEven ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={sol.image}
                    alt={sol.title}
                    loading="lazy"
                    className="w-full h-auto object-cover object-left-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA Banner */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}

