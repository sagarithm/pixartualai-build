import { RolePageTemplate } from '@/components/landing/RolePageTemplate';

export default function FoundersPage() {
  return (
    <RolePageTemplate
      badge="Founders"
      h1="Get your startup online. Look funded before you are."
      subtitle="Turn your pitch deck into a high-converting landing page, waitlist, or interactive product estimator in minutes without burning dev capital."
      previewImage="/images/cap-landing-pages.webp"
      benefitsTitle="Look funded before you are"
      benefits={[
        { title: 'Zero Developer Bottleneck', desc: 'Ship your MVP and landing pages yourself while engineers focus on core backend technology.' },
        { title: 'Interactive Valuation & ROI', desc: 'Equip your site with stateful calculators and demo questionnaires that prove value to investors.' },
        { title: 'Fast Edge Deployment', desc: 'Instant sub-300ms global loading, automated SSL, and custom domain connection.' },
      ]}
      bulletPoints={[
        'Full AI visual design control with natural language',
        'Built-in waitlist and lead qualification calculators',
        'Clean export to React and Next.js code',
        'SEO-ready metadata and automated social OpenGraph tags',
      ]}
      templateCategory="SaaS"
    />
  );
}
