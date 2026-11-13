'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PixartualCta } from '@/components/landing/PixartualCta';
import { MfyFaqAccordion, FaqItem } from '@/components/landing/MfyFaqAccordion';
import { Lightning, Sparkle, ShieldCheck, Browser, RocketLaunch } from '@phosphor-icons/react';

export interface PersonaSection {
  title: string;
  tagline: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}

export interface FlameCard {
  title: string;
  desc: string;
  icon?: React.ReactNode;
}

export interface RolePageProps {
  roleSlug: string;
  badgeText?: string;
  heroTitle: string;
  heroDesc: string;
  heroImage: string;
  heroImageAlt: string;
  features: PersonaSection[];
  flameTitle: string;
  flameDesc: string;
  flameCards: FlameCard[];
  faqTitle: string;
  faqDesc: string;
  faqs: FaqItem[];
}

export const RolePageTemplate: React.FC<RolePageProps> = ({
  roleSlug,
  badgeText = 'Meet the New PixartualAI — Fresh Look, Better Flow',
  heroTitle,
  heroDesc,
  heroImage,
  heroImageAlt,
  features,
  flameTitle,
  flameDesc,
  flameCards,
  faqTitle,
  faqDesc,
  faqs,
}) => {
  const logos = [
    { name: 'FontInLogo', src: '/images/personas/logos/logo-fontinlogo.png', h: 30 },
    { name: 'LogoToUse', src: '/images/personas/logos/logo-logotouse.png', h: 34 },
    { name: 'Favicon', src: '/images/personas/logos/logo-favicon.png', h: 34 },
    { name: 'Motion', src: '/images/personas/logos/logo-motion.png', h: 22 },
    { name: 'Orange', src: '/images/personas/logos/logo-orange.png', h: 30 },
    { name: 'Wonderlist', src: '/images/personas/logos/logo-wonderlist.png', h: 28 },
    { name: 'MwStRechner', src: '/images/personas/logos/logo-3.png', h: 20 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Section 0: Authentic Pixartual Hero with Gradient Banner & Photo Drift */}
        <section className="kit-root relative box-border px-1.5 md:px-[50px]">
          <div className="relative w-full overflow-hidden rounded-b-[42px] bg-[linear-gradient(180deg,theme(colors.white)_0%,theme(colors.violet.50)_70%,theme(colors.pink.200)_99.04%)] px-4 pb-0 pt-[110px] md:px-[50px] md:pt-[150px]">
            <div className="fhs-wrap relative z-[1] mx-auto flex w-full max-w-[900px] flex-col items-center text-center">
              {/* Badge */}
              <Link className="fhs-badge" href="/insights">
                <span className="fhs-badge-new">New</span>
                <span className="fhs-badge-text">{badgeText}</span>
                <svg
                  aria-hidden="true"
                  className="fhs-badge-chevron"
                  fill="currentColor"
                  height="1em"
                  viewBox="0 0 256 256"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                </svg>
              </Link>

              {/* Gradient Shine Heading */}
              <h1 className="fhs-heading font-['Neutralsans']">
                {heroTitle}
              </h1>

              {/* Photo with Overlay */}
              <div className="fhs-photo">
                <div className="fhs-photo-inner">
                  <div aria-hidden="true" className="fhs-glow" />
                  <img
                    alt={heroImageAlt}
                    className="fhs-photo-img"
                    src={heroImage}
                  />
                </div>
                <div className="fhs-overlay">
                  <p className="fhs-overlay-copy">{heroDesc}</p>
                  <Link className="mfy-btn mfy-btn--secondary fhs-cta !bg-white !text-neutral-900 hover:!bg-neutral-100" href="/dashboard">
                    Start building
                  </Link>
                  <Link className="fhs-secondary-link" href="/templates">
                    See what you can build
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Logos Marquee */}
          <ul aria-label="Real sites launched with PixartualAI" className="fhs-logos">
            {logos.map((l, idx) => (
              <li key={l.name} className="fhs-logo-item" style={{ ['--fhs-i' as string]: idx }}>
                <img
                  alt={l.name}
                  className="px-adaptive-graphic transition-all duration-300"
                  loading="lazy"
                  src={l.src}
                  style={{ height: `${l.h}px` }}
                />
              </li>
            ))}
          </ul>
        </section>

        {/* Alternating Feature Sections */}
        {features.map((feat, idx) => {
          const isReverse = feat.reverse ?? idx % 2 === 1;
          return (
            <section key={idx} className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
              <div className="mx-auto w-full max-w-[1240px] px-5 md:px-[50px]">
                <div className={`flex items-center gap-8 md:flex-row md:gap-[30px] ${isReverse ? 'flex-col' : 'flex-col-reverse'}`}>
                  {/* Text Column */}
                  <div className="flex w-full flex-col gap-6 md:w-1/2 lg:gap-8">
                    <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                      {feat.title}
                    </h2>
                    <div className="flex flex-col gap-2">
                      <p className="text-[15px] leading-relaxed text-neutral-500 font-medium">
                        {feat.tagline}
                      </p>
                      <p className="text-[15px] leading-relaxed text-neutral-900">
                        {feat.description}
                      </p>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="w-full md:w-1/2">
                    <div className="aspect-[631/480] w-full overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-neutral-100">
                      <div className="relative h-full w-full bg-neutral-100">
                        <img
                          alt={feat.title}
                          className="absolute left-[3.2%] top-[4.2%] h-[106%] w-[106%] rounded-xl border border-black/[0.08] object-cover"
                          src={feat.imageSrc}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Section: Feature Flame Cards */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div className="mx-auto w-full max-w-[1240px] px-5 md:px-[50px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3.5">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  {flameTitle}
                </h2>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  {flameDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 items-start gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
                {flameCards.map((card, idx) => (
                  <article
                    key={idx}
                    className="kit-fcard relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-neutral-100 p-[25px] aspect-[253/368] min-h-[368px]"
                  >
                    <div>
                      <div className="mb-6 size-8 text-neutral-900">
                        {card.icon || <RocketLaunch size={28} weight="duotone" className="text-orange-500" />}
                      </div>
                      <h3 className="kit-fcard__title text-lg font-medium text-neutral-950 font-['Neutralsans']">
                        {card.title}
                      </h3>
                      <p className="kit-fcard__text mt-3 text-sm leading-relaxed text-neutral-600">
                        {card.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Persona FAQ Accordion */}
        <section className="kit-root relative overflow-hidden bg-white py-20 md:py-[100px]">
          <div className="mx-auto w-full max-w-[860px] px-5 md:px-[50px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3.5 text-center">
                <h2 className="kit-heading text-balance font-medium tracking-[-0.02em] text-neutral-950 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-['Neutralsans']">
                  {faqTitle}
                </h2>
                <p className="text-[15px] leading-relaxed text-neutral-600">
                  {faqDesc}
                </p>
              </div>

              <MfyFaqAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <PixartualCta />
      </main>

      <Footer />
    </div>
  );
};
