import { RolePageTemplate } from '@/components/landing/RolePageTemplate';

export default function OpsPage() {
  return (
    <RolePageTemplate
      badge="Operations"
      h1="Internal tools that fit. Your process should not bend to fit a tool."
      subtitle="Build custom internal dashboards, review queues, inventory calculators, and operational trackers that adapt to how your company actually operates."
      previewImage="/images/cap-dashboards.webp"
      benefitsTitle="Your process should not bend to fit a tool"
      benefits={[
        { title: 'Custom Business Logic', desc: 'Define your operational math and calculation rules without writing bespoke scripts.' },
        { title: 'Secure Employee Access', desc: 'Role-based permissions and clean dashboards that staff love using daily.' },
        { title: 'Zero Maintenance', desc: 'No servers to patch, no databases to administer, and zero upgrade downtime.' },
      ]}
      bulletPoints={[
        'Automated database collections & relation mapping',
        'Custom task and approval workflows',
        'Webhook integrations with Slack, Zapier, and Airtable',
        'High-density dashboard views for complex operations',
      ]}
      templateCategory="Dashboard"
    />
  );
}
