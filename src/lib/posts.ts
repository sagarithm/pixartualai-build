import postsData from '@/data/posts.json';

export interface PostItem {
  slug: string;
  title: string;
  date: string;
  eyebrow: string;
  cover: string;
  articleHtml: string;
}

const postsRecord = postsData as Record<string, PostItem>;

export function getAllPosts(): PostItem[] {
  return Object.values(postsRecord);
}

export function getAllPostSlugs(): string[] {
  return Object.keys(postsRecord);
}

export function getPostBySlug(slug: string): PostItem | null {
  return postsRecord[slug] || null;
}

export function getRelatedPosts(currentSlug: string, limit = 3): PostItem[] {
  const all = Object.values(postsRecord).filter((p) => p.slug !== currentSlug);
  return all.slice(0, limit);
}

