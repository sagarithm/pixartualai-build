import { RolePageTemplate } from '@/components/landing/RolePageTemplate';

export default function PeoplePage() {
  return (
    <RolePageTemplate
      badge="People & HR"
      h1="HR tools your team likes. The tools people use daily should feel modern."
      subtitle="Craft beautiful internal team directories, compensation and PTO calculators, onboarding guides, and interactive survey portals."
      previewImage="/images/cap-client-portals.webp"
      benefitsTitle="The tools people use daily should feel modern"
      benefits={[
        { title: 'Delightful Onboarding', desc: 'Replace clunky PDFs with interactive step-by-step company guides and team bento grids.' },
        { title: 'Benefits & Equity Estimators', desc: 'Help candidates and employees model their total rewards and stock option value.' },
        { title: 'Pulse & Feedback Portals', desc: 'Collect anonymous team feedback with interactive question flows.' },
      ]}
      bulletPoints={[
        'Interactive team directories with search and filtering',
        'Stateful equity and benefits calculation models',
        'Company handbook and documentation hubs',
        'Mobile-friendly interface for remote and field staff',
      ]}
      templateCategory="Portfolio"
    />
  );
}
