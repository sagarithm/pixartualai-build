import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ModulifyCta } from '@/components/landing/ModulifyCta';
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '@/lib/posts';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {
      title: 'Post Not Found | PixartualAI',
    };
  }

  return {
    title: `${post.title} | PixartualAI`,
    description: `Read ${post.title} on PixartualAI Insights.`,
    openGraph: {
      title: `${post.title} | PixartualAI`,
      description: `Read ${post.title} on PixartualAI Insights.`,
      images: post.cover ? [post.cover] : [],
    },
  };
}

export default async function PostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(slug, 3);

  // Adapt brand names gracefully
  const cleanArticleHtml = post.articleHtml
    ? post.articleHtml
        .replace(/Modulify(?!\.ai)/g, 'PixartualAI')
        .replace(/modulify\.ai/g, 'pixartualai.com')
    : '';

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="po-main flex-1">
        {/* Post Hero */}
        <header className="po-hero">
          <Link className="po-back" href="/insights">
            <svg
              fill="currentColor"
              height="16"
              viewBox="0 0 256 256"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(0 -8)">
                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
              </g>
            </svg>
            Back to insights
          </Link>
          <p className="po-eyebrow">{post.eyebrow || 'Insights and updates'}</p>
          <h1 className="po-title">{post.title}</h1>
          <p className="po-date">{post.date}</p>
        </header>

        {/* Post Cover */}
        {post.cover && (
          <div className="po-cover">
            <div className="po-cover-inner">
              <img alt={post.title} loading="lazy" src={post.cover} />
            </div>
          </div>
        )}

        {/* Post Article Body */}
        {cleanArticleHtml && (
          <div
            dangerouslySetInnerHTML={{ __html: cleanArticleHtml }}
          />
        )}

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="po-rel">
            <div className="po-rel-head">
              <h2>Other posts</h2>
              <p>Related reads from the blog.</p>
            </div>
            <div className="po-rel-grid">
              {related.map((rel) => (
                <Link key={rel.slug} className="rel-card" href={`/post/${rel.slug}`}>
                  {rel.cover && (
                    <div className="rel-media">
                      <img alt={rel.title} loading="lazy" src={rel.cover} />
                    </div>
                  )}
                  <div className="rel-body">
                    <span className="rel-cat">{rel.eyebrow || 'Insights and updates'}</span>
                    <h3 className="rel-title">{rel.title}</h3>
                    <p className="rel-sum">{rel.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Call to action */}
        <ModulifyCta />
      </main>

      <Footer />
    </div>
  );
}

