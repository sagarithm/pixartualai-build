---
id: "brand.pixartual-code-governance"
name: "Pixartual Code Governance & Naming Standards"
version: "1.0.0"
domain: "codebase-governance"
description: "Strict coding, naming, prefix, and intellectual property governance enforcing 'px' for CSS/tokens/utilities and 'pxl' for components/files/schemas, with zero third-party legacy leaks."
triggers:
  - "Creating, renaming, or refactoring components, files, or datasets"
  - "Writing CSS classes, design tokens, or utility classes"
  - "Importing or reverse-engineering design patterns, templates, or layouts"
  - "Auditing codebase for brand purity, copyright compliance, and zero legacy string leaks"
prerequisites: []
risk_profile: "medium"
---

# Pixartual Code Governance & Naming Standards

## 1. Core Mandate & Intellectual Property Purity
PixartualAI codebase must adhere to strict brand sovereignty and defensible code copyright.
Under NO circumstances may third-party benchmark or legacy framework identifiers (`mfy`, `mdlfy`, `modulify`) exist in production source code, CSS classes, CSS variables, file names, or commit contents.

---

## 2. The `px` & `pxl` Standard Taxonomy

To ensure clean namespaces, instant readability, and zero collision with default Tailwind or framework primitives, all custom extensions follow this dual-prefix taxonomy:

### A. The `px-` Prefix (CSS Classes, Tokens & Layout Utilities)
Reserved for **styling, design system tokens, layout primitives, and micro-interactions**:
* **CSS Custom Variables (Design Tokens)**:
  - `--px-color-bg-base`, `--px-color-fg-primary`, `--px-color-border-subtle`, `--px-color-accent`
  - All color tokens in `globals.css` must follow `--px-color-*`.
* **Button & Component Micro-classes**:
  - `.px-btn`, `.px-btn--primary`, `.px-btn--secondary`, `.px-btn--outline`, `.px-btn--block`
* **Layout & Wrapper Classes**:
  - `.px-page`, `.px-mega`, `.px-sizer`, `.px-popper`, `.px-fadein`
* **Interactive & Animation Utilities**:
  - `.px-marquee-track`, `.px-marquee-item`, `.px-marquee-left`, `.px-marquee-right`
  - `.px-faq-item`, `.px-faq-q`, `.px-faq-a`

### B. The `pxl` Prefix (Files, Data Schemas & Reusable Components)
Reserved for **source file names, custom compound components, and static datasets**:
* **File Naming**:
  - Compound or brand-specific components: `PxlFaqAccordion.tsx`, `PxlBento.tsx`, `PxlCta.tsx`
  - Data files & schemas: `pxl_templates.json`, `pxl_navigation.json`, `pxl_pricing.json`
* **Component Export Naming**:
  - Export canonical components with `Pxl*` or `Pixartual*` (e.g. `export const PxlFaqAccordion`, `export const PxlBento`).
* **Data IDs & Entity Schemas**:
  - Dataset identifiers: `pxl-template-01`, `pxl_card_id`, etc.

---

## 3. Transformation & Replacement Rules

When refactoring or authoring code, enforce these direct 1-to-1 mappings:

| Forbidden Legacy Identifier | Approved Pixartual Standard | Category |
|---|---|---|
| `mfy-btn*` | `px-btn*` | CSS Class |
| `mfy-page`, `mfy-mega`, `mfy-sizer` | `px-page`, `px-mega`, `px-sizer` | CSS Class |
| `mfy-faq-*` | `px-faq-*` | CSS Class |
| `mfy-marquee-*` | `px-marquee-*` | CSS Class |
| `--mdlfy-color-*` | `--px-color-*` | CSS Design Variable |
| `MfyFaqAccordion.tsx` | `PxlFaqAccordion.tsx` | File Name |
| `modulify_templates.json` | `pxl_templates.json` | File Name |
| `ModulifyBento` | `PxlBento` (or `PixartualBento`) | Component Name |
| `ModulifyCta` | `PxlCta` (or `PixartualCta`) | Component Name |
| `modulify.ai` | `pixartual.ai` | URL / Domain |
| `cdn.modulify.ai` | `cdn.pixartual.ai` | Asset CDN |

---

## 4. Verification & Zero Assumed Success (ZAS)

Every pull request or commit must pass this 4-step terminal verification protocol:

```bash
# 1. Verify ZERO third-party or legacy references exist in text files
git grep -I -i "mfy" src/ public/
git grep -I -i "mdlfy" src/ public/
git grep -I -i "modulify" src/ public/
# (Each grep MUST return exit code 1 with zero matches)

# 2. Verify TypeScript integrity
npx tsc --noEmit

# 3. Verify static production build
npm run build
```
