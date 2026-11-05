import { RolePageTemplate } from '@/components/landing/RolePageTemplate';

export default function DesignersPage() {
  return (
    <RolePageTemplate
      badge="Designers"
      h1="Ship your design, no handoff. The handoff is where design drifts."
      subtitle="Design functional websites and interactive prototypes that look identical to your vision. No compromises with developers over paddings or responsive breakpoints."
      previewImage="/images/bento-generate.webp"
      benefitsTitle="The handoff is where design drifts"
      benefits={[
        { title: 'NeutralSans Typography Scale', desc: 'Pre-calibrated typographic scales and token systems that preserve aesthetic harmony.' },
        { title: 'Chat-Driven Visual Tweaks', desc: 'Ask AI to adjust gap, radius, line-height, and padding in plain language.' },
        { title: 'Functional Prototypes', desc: 'Deliver prototypes that actually calculate, filter, and respond to user inputs.' },
      ]}
      bulletPoints={[
        'Zero translation loss from Figma to live web',
        'Direct on-canvas layout and text manipulation',
        'Responsive viewport controls for Desktop, Tablet, and Mobile',
        'Instant shareable client review links',
      ]}
      templateCategory="Agency"
    />
  );
}

