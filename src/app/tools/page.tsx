import { RolePageTemplate } from '@/components/landing/RolePageTemplate';

export default function ToolsPage() {
  return (
    <RolePageTemplate
      badge="Internal Tools"
      h1="Build the internal tool your team keeps asking for. The tool you need does not come in a box."
      subtitle="Create custom business apps, project cost calculators, client portals, and approval dashboards without pulling engineers off the product roadmap."
      previewImage="/images/cap-dashboards.webp"
      benefitsTitle="The tool you need does not come in a box"
      benefits={[
        { title: 'Tailored Business Logic', desc: 'Every business has idiosyncratic rules. Build tools that mirror your exact spreadsheet workflows.' },
        { title: 'Secure Client & Team Access', desc: 'Granular viewports and permission sets ensure sensitive data remains strictly protected.' },
        { title: 'Zero Ongoing Dev Overhead', desc: 'Maintain and update your tools via simple natural language AI prompts.' },
      ]}
      bulletPoints={[
        'Full-stack databases and CMS collections',
        'Stateful calculation and quote engines',
        'Direct webhooks and REST integrations',
        'Responsive layout across desktop and mobile',
      ]}
      templateCategory="Dashboard"
    />
  );
}
