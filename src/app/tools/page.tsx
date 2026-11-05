'use client';

import React from 'react';
import { RolePageTemplate } from '@/components/landing/RolePageTemplate';
import { Wrench, Database, ShieldCheck, Lightning } from '@phosphor-icons/react';

export default function ToolsPage() {
  return (
    <RolePageTemplate
      roleSlug="tools"
      heroTitle="Build the internal tool your team keeps asking for"
      heroDesc="The tool you need does not come in a box. Build custom internal portals, inventory tracking, customer lookups, and approval dashboards without stealing engineering sprints."
      heroImage="/images/personas/founders-grow-with-you.webp"
      heroImageAlt="Team reviewing custom internal software in PixartualAI"
      features={[
        {
          title: 'The tool you need does not come in a box',
          tagline: 'Standard SaaS forces your team into rigid compromises.',
          description:
            'Every growing company has bespoke operational quirks: custom discount thresholds, multi-department approval chains, and specialized client intake forms. Build exactly what your team needs in hours.',
          imageSrc: '/images/personas/product-managers-validate.webp',
          reverse: false,
        },
        {
          title: 'Direct database & spreadsheet integration',
          tagline: 'Connect Supabase, PostgreSQL, or Google Sheets in one click.',
          description:
            'Provide your support and operations teams with clean search and edit interfaces so they never touch raw production databases or corrupt shared spreadsheets.',
          imageSrc: '/images/personas/founders-look-funded.webp',
          reverse: true,
        },
        {
          title: 'Automated notification pipelines',
          tagline: 'Keep teams in sync across Slack and email.',
          description:
            'Trigger webhook dispatches and Slack alerts whenever an internal record is updated or a high-priority ticket requires management approval.',
          imageSrc: '/images/personas/founders-launch-faster.webp',
          reverse: false,
        },
        {
          title: 'Safe, role-gated access control',
          tagline: 'Keep customer data isolated and secure.',
          description:
            'Enforce Google Workspace or Microsoft SSO logins so only authenticated employees can access internal tools.',
          imageSrc: '/images/personas/founders-trust.webp',
          reverse: true,
        },
      ]}
      flameTitle="Custom internal tools with zero maintenance burden"
      flameDesc="Everything your team needs to automate internal operations and scale seamlessly."
      flameCards={[
        {
          title: 'Custom Admin Consoles',
          desc: 'Build dedicated support portals, lookup directories, and approval dashboards in hours.',
          icon: <Wrench size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Live Data Synchronization',
          desc: 'Seamless two-way sync with Postgres, MySQL, Supabase, Airtable, and Google Sheets.',
          icon: <Database size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Instant Team Deployment',
          desc: 'Deploy on internal subdomains with zero DevOps, container orchestration, or staging servers.',
          icon: <Lightning size={28} weight="duotone" className="text-orange-500" />,
        },
        {
          title: 'Audit Logs & Permissions',
          desc: 'Maintain visibility over who edited what record with automatic history tracking.',
          icon: <ShieldCheck size={28} weight="duotone" className="text-orange-500" />,
        },
      ]}
      faqTitle="Internal tools questions, answered"
      faqDesc="How fast-moving teams replace fragile spreadsheets with PixartualAI."
      faqs={[
        {
          q: 'Can internal tools connect to internal behind-the-firewall APIs?',
          a: 'Yes. You can route through custom API gateways or connect to cloud databases using IP allowlisting and encrypted credentials.',
        },
        {
          q: 'Can we build tools that trigger external webhooks like Stripe or Zapier?',
          a: 'Yes, buttons and forms can trigger webhook payloads to Zapier, Make, n8n, or your own backend endpoints.',
        },
      ]}
    />
  );
}
