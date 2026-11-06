import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PixartualCta } from '@/components/landing/PixartualCta';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Insights and Updates | PixartualAI',
  description: 'Product updates, deep dives, architecture notes, and design frameworks from the PixartualAI team.',
};

export default function InsightsAndUpdatesPage() {
  const posts = getAllPosts().filter((p) => (p.eyebrow || '').toLowerCase().includes('insights'));

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="in-main flex-1">
        <header className="in-hero">
          <h1>Everything about AI Web Design</h1>
          <p>
            Get informed with the latest on AI, web design and everything around PixartualAI.
          </p>
          <nav aria-label="Filter insights by category" className="in-filters">
            <Link className="in-filter" href="/insights">
              All
            </Link>
            <Link aria-current="page" className="in-filter" href="/insights/insights-and-updates">
              Insights and updates
            </Link>
            <Link className="in-filter" href="/insights/use-cases">
              Use cases
            </Link>
          </nav>
        </header>

        <section className="in-section">
          <div className="in-grid">
            {posts.map((post) => (
              <Link key={post.slug} className="in-card" href={`/post/${post.slug}`}>
                {post.cover && (
                  <div className="in-card-media">
                    <img
                      alt={post.title}
                      loading="lazy"
                      src={post.cover}
                    />
                  </div>
                )}
                <h3 className="in-card-title">{post.title}</h3>
                <div className="in-card-meta">
                  <span className="in-card-cat">{post.eyebrow || 'Insights and updates'}</span>
                  {' • '}
                  {post.date}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <PixartualCta />
      </main>

      <Footer />
    </div>
  );
}

