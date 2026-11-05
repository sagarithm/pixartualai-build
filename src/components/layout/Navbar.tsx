'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CaretDown, List, X } from '@phosphor-icons/react';
import { PixartualLogo } from '@/components/brand/PixartualLogo';

export const Navbar: React.FC = () => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const solutionsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-[100] transition-colors duration-300 bg-white/90 backdrop-blur-md backdrop-saturate-[1.8] border-b border-black/[0.04]">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-3 px-5 py-3.5 md:px-[50px] lg:gap-6">
        {/* Left: PixartualAI Brand Logo + Nav items */}
        <div className="flex items-center gap-6">
          <Link aria-label="PixartualAI home" className="flex shrink-0 items-center gap-2" href="/">
            <PixartualLogo variant="badge-dark" size={32} showWordmark />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="ml-2 hidden items-center gap-1 lg:flex">
            {/* Solutions Dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                type="button"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal text-neutral-800 no-underline cursor-pointer bg-transparent hover:bg-neutral-100/70 transition-colors"
              >
                Solutions
                <CaretDown size={14} className={`text-gray-500 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {solutionsOpen && (
                <div className="absolute left-0 top-full mt-2 z-50 w-[480px] rounded-[18px] border border-neutral-200 bg-white p-4 shadow-xl grid grid-cols-2 gap-2 mfy-fadein">
                  {[
                    { label: 'Founders', desc: 'Ship your MVP in minutes', href: '/founders' },
                    { label: 'Designers', desc: 'No-code interactive design', href: '/designers' },
                    { label: 'Product Managers', desc: 'Prototype tools & flows', href: '/product-managers' },
                    { label: 'Marketers', desc: 'High-converting funnels', href: '/marketers' },
                    { label: 'Prototypes', desc: 'Functional interactive apps', href: '/prototypes' },
                    { label: 'Internal Tools', desc: 'Custom business dashboards', href: '/tools' },
                  ].map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      onClick={() => setSolutionsOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-neutral-50 transition-colors block"
                    >
                      <div className="text-sm font-medium text-neutral-900">{s.label}</div>
                      <div className="text-xs text-neutral-500">{s.desc}</div>
                    </Link>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-neutral-100 flex justify-between items-center text-xs">
                    <Link href="/solutions" onClick={() => setSolutionsOpen(false)} className="font-semibold text-orange-600 hover:text-orange-700">
                      View all solutions →
                    </Link>
                    <Link href="/webflow-transfer" onClick={() => setSolutionsOpen(false)} className="text-neutral-500 hover:text-neutral-900">
                      Webflow Migration
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                type="button"
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal text-neutral-800 no-underline cursor-pointer bg-transparent hover:bg-neutral-100/70 transition-colors"
              >
                Resources
                <CaretDown size={14} className={`text-gray-500 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              {resourcesOpen && (
                <div className="absolute left-0 top-full mt-2 z-50 w-[260px] rounded-[18px] border border-neutral-200 bg-white p-2 shadow-xl flex flex-col gap-1 mfy-fadein">
                  <Link href="/made-in-modulify" onClick={() => setResourcesOpen(false)} className="px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50 rounded-lg">
                    Made in PixartualAI
                  </Link>
                  <Link href="/insights" onClick={() => setResourcesOpen(false)} className="px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50 rounded-lg">
                    Insights & Case Studies
                  </Link>
                  <Link href="/connect" onClick={() => setResourcesOpen(false)} className="px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50 rounded-lg">
                    Connect & Integrations
                  </Link>
                  <Link href="/top-agencies" onClick={() => setResourcesOpen(false)} className="px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50 rounded-lg">
                    Top Agencies Directory
                  </Link>
                  <Link href="/faqs" onClick={() => setResourcesOpen(false)} className="px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50 rounded-lg">
                    Frequently Asked Questions
                  </Link>
                  <Link href="/domains" onClick={() => setResourcesOpen(false)} className="px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50 rounded-lg">
                    Custom Domains
                  </Link>
                </div>
              )}
            </div>

            <Link href="/templates" className="inline-flex items-center rounded-lg px-3 py-2 text-[15px] font-normal text-neutral-800 hover:bg-neutral-100/70 transition-colors">
              Templates
            </Link>

            <Link href="/pricing" className="inline-flex items-center rounded-lg px-3 py-2 text-[15px] font-normal text-neutral-800 hover:bg-neutral-100/70 transition-colors">
              Pricing
            </Link>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="hidden sm:inline-flex text-[15px] font-normal text-neutral-800 hover:text-neutral-500 px-3 py-1.5 transition-colors">
            Log in
          </Link>
          <Link href="/dashboard" className="mfy-btn mfy-btn--primary !px-5 !py-2.5 !text-sm !font-semibold">
            Start building
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:bg-neutral-100 rounded-lg"
          >
            {mobileMenuOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-5 py-4 space-y-2">
          <Link href="/templates" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-800 font-medium">
            Templates
          </Link>
          <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-800 font-medium">
            Pricing
          </Link>
          <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-800 font-medium">
            AI Studio Dashboard
          </Link>
        </div>
      )}
    </header>
  );
};
