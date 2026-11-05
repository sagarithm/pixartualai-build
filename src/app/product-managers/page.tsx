import { RolePageTemplate } from '@/components/landing/RolePageTemplate';

export default function ProductManagersPage() {
  return (
    <RolePageTemplate
      badge="Product Managers"
      h1="Ship a working prototype. Prototypes settle debates that specs start."
      subtitle="Stop debating static PRDs and Figma screens. Put working calculators, multi-step flows, and data views in front of users and stakeholders today."
      previewImage="/images/cap-dashboards.webp"
      benefitsTitle="Prototypes settle debates that specs start"
      benefits={[
        { title: 'Interactive State Engines', desc: 'Real stateful form wizards and calculation models that test actual user behavior.' },
        { title: 'Rapid Experimentation', desc: 'Clone and test 5 alternative product ideas in a single afternoon with zero engineering support.' },
        { title: 'Customer Feedback Ready', desc: 'Deploy instant share links to get qualitative feedback from real prospective buyers.' },
      ]}
      bulletPoints={[
        'Interactive calculation sandboxes built-in',
        'Stateful multi-step diagnostic questionnaires',
        'Direct export to production Next.js repositories',
        'Real-time traffic and interaction telemetry',
      ]}
      templateCategory="Dashboard"
    />
  );
}
