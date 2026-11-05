import { RolePageTemplate } from '@/components/landing/RolePageTemplate';

export default function MarketersPage() {
  return (
    <RolePageTemplate
      badge="Marketers"
      h1="Launch campaign pages fast. The best time to launch was when the idea hit."
      subtitle="Spin up high-converting landing pages, interactive lead-qualification quizzes, and product calculators in minutes without waiting on sprint cycles."
      previewImage="/images/cap-webapps.webp"
      benefitsTitle="The best time to launch was when the idea hit"
      benefits={[
        { title: 'Higher Lead Conversion', desc: 'Interactive cost estimators and quizzes generate up to 3.4x more qualified email submissions.' },
        { title: 'Campaign Independence', desc: 'Launch time-sensitive promotions, PPC landers, and partner co-marketing hubs instantly.' },
        { title: 'Built-in SEO & OpenGraph', desc: 'Automated social preview cards and semantic structured metadata.' },
      ]}
      bulletPoints={[
        'Interactive ROI and pricing calculators for SaaS',
        'Custom domain support with sub-300ms global CDN',
        'Integrated email submission collection and webhooks',
        'Mobile-first responsive optimization out of the box',
      ]}
      templateCategory="Marketing"
    />
  );
}

