import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="nf-main flex-1">
        <div className="nf-inner">
          <p className="nf-code font-['Neutralsans']">404</p>
          <h1 className="nf-title font-['Neutralsans']">Page not found</h1>
          <p className="nf-text">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>
          <div className="nf-actions">
            <Link className="mfy-btn mfy-btn--primary" href="/">
              Back to home
            </Link>
            <Link className="mfy-btn mfy-btn--secondary" href="/faqs">
              Visit the FAQ
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

