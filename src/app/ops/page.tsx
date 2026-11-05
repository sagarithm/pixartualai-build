'use client';

import React from 'react';
import { RolePageTemplate } from '@/components/landing/RolePageTemplate';
import { Gear, Lightning, ShieldCheck, Database } from '@phosphor-icons/react';

export default function OpsPage() {
  return (
    <RolePageTemplate
      roleSlug="ops"
      heroTitle="Internal tools that fit"
      heroDesc="Your process should not bend to fit a tool. Build custom internal portals, inventory managers, and operational dashboards that reflect your exact workflows."
      heroImage="/images/personas/product-managers-hero-full.webp"
      heroImageAlt="Operations manager building an internal tool in PixartualAI"
      features={[
        {
          title: 'Your process should not bend to fit a tool',
          tagline: 'Off-the-shelf software forces clunky workarounds.',
          description:
            'Instead of paying $40/user/month for rigid SaaS that only covers 70% of your operational workflow, generate internal portals tailored exactly to your team’s checklists and steps.',
          imageSrc: '/images/personas/product-managers-prototypes.webp',
          reverse: false,
        },
        {
          title: 'Turn spreadsheets into real software',
          tagline: 'Eliminate broken formulas and copy-paste chaos.',
          description:
            'Connect Google Sheets or Airtable to a clean visual frontend with search filters, role-based editing, and mobile-friendly submission forms.',
          imageSrc: '/images/personas/founders-look-funded.webp',
          reverse: true,
        },
        {
          title: 'Automate manual status workflows',
          tagline: 'Trigger Slack updates and email receipts automatically.',
          description:
            'Notify team leads when an operational ticket is approved or dispatch an alert when inventory dips below minimum safety thresholds.',
          imageSrc: '/images/personas/founders-launch-faster.webp',
          reverse: false,
        },
        {
          title: 'Role-based access & team permissions',
          tagline: 'Keep sensitive operational data protected.',
          description:
            'Segment customer data, inventory records, and employee rosters by department with granular workspace authentication.',
          imageSrc: '/images/personas/founders-grow-with-you.webp',
          reverse: true,
        },
      ]}
      flameTitle="Custom software without custom engineering overhead"
      flameDesc="Everything operations leaders need to streamline business processes."
      flameCards={[
        {
          title: 'Custom Admin Dashboards',
          desc: 'Build specialized dashboards with live metrics, audit logs, and approval buttons.',
          icon: <Gear size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Live Database Sync',
          desc: 'Read and write directly to PostgreSQL, Supabase, Airtable, and Google Sheets.',
          icon: <Database size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Fast Team Onboarding',
          desc: 'Simple, intuitive interfaces that warehouse and field staff can learn in minutes without training manuals.',
          icon: <Lightning size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Enterprise Security',
          desc: 'End-to-end TLS encryption, SSO authentication, and automated nightly backups.',
          icon: <ShieldCheck size={28} weight="duotone" className="text-orange-500" />,
        },
      ]}
      faqTitle="Ops questions, answered"
      faqDesc="How operations managers deploy software in PixartualAI."
      faqs={[
        {
          q: 'Can our internal tools read and write data to our existing SQL database?',
          a: 'Yes. You can connect PostgreSQL, MySQL, Supabase, and Airtable securely via encrypted connection credentials.',
        },
        {
          q: 'Can we restrict access to company email domains only?',
          a: 'Yes. Workspace settings allow domain-restricted SSO so only team members with your company email can access internal portals.',
        },
      ]}
    />
  );
}
