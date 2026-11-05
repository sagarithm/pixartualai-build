import { RolePageTemplate } from '@/components/landing/RolePageTemplate';

export default function SalesPage() {
  return (
    <RolePageTemplate
      badge="Sales"
      h1="Build on-brand demo pages. Show the product, not a slide."
      subtitle="Close enterprise deals faster with customized interactive client portals, custom ROI calculations, and tailored buyer walkthroughs."
      previewImage="/images/cap-client-portals.webp"
      benefitsTitle="Show the product, not a slide"
      benefits={[
        { title: 'Personalized Prospect Hubs', desc: 'Generate a branded evaluation portal with the client’s logo, colors, and specific pricing.' },
        { title: 'Interactive Business Case', desc: 'Let enterprise buyers simulate their own savings with customized input parameters.' },
        { title: 'Security & Access Control', desc: 'Share password-protected or vanity link portals directly in your sales cadences.' },
      ]}
      bulletPoints={[
        'Fast 2-minute creation per prospect',
        'Built-in document and presentation embeddings',
        'Custom interactive quote calculators',
        'Instant notifications on client view and interaction',
      ]}
      templateCategory="Portfolio"
    />
  );
}
