import { RolePageTemplate } from '@/components/landing/RolePageTemplate';

export default function PrototypesPage() {
  return (
    <RolePageTemplate
      badge="Prototypes"
      h1="Build a real prototype, not a clickable picture. A picture cannot tell you if it works."
      subtitle="Experience real software before writing production code. PixartualAI generates functional state, actual user inputs, and live responsive components."
      previewImage="/images/cap-webapps.webp"
      benefitsTitle="A picture cannot tell you if it works"
      benefits={[
        { title: 'Real Interactive State', desc: 'Buttons that actually submit, calculators that calculate, and forms that validate.' },
        { title: 'User Testing Ready', desc: 'Give prospective users a real URL to test on their own devices without installing test harnesses.' },
        { title: 'Production Code Ready', desc: 'When the prototype is approved, export clean, type-safe React code directly to developers.' },
      ]}
      bulletPoints={[
        'Live client-side calculation engines',
        'Multi-device responsive preview (Desktop, Tablet, Mobile)',
        'Zero Figma-to-code friction',
        'Instant share link generated on the edge',
      ]}
      templateCategory="AI"
    />
  );
}

