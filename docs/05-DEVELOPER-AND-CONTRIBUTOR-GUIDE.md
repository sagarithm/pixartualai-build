# 🛠️ PixartualAI — Developer & Contributor Guide

> **Document Version**: 2.0.0  
> **Status**: Official Engineering Handbook  
> **Target Audience**: Core Maintainers, Full-Stack Contributors, DevOps Engineers

---

## 1. Technical Stack Overview

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `15.5.29` | Server-side rendering, routing, edge runtime |
| **Runtime / UI** | React | `19.0.0` | Component lifecycle, concurrent rendering |
| **Language** | TypeScript | `5.7+` | Strict static typing, discriminated unions |
| **Styling** | Tailwind CSS | `3.4.17` | Utility-first styling with custom CSS variables |
| **Iconography** | Phosphor Icons | `2.1.10` | Unified iconography across studio and landing UI |
| **Typography** | NeutralSans, Inter, DM Mono | Custom TTF | Agency-grade typography hierarchy |
| **Theme Engine** | Custom Inverted Variable Dual-Spectrum | Native CSS | Zero-flash client/server theme synchronization |

---

## 2. Directory Architecture & Codebase Map

```
c:\Projects\Products\Creatiie\
├── docs/                                # Official Documentation Suite
│   ├── 01-PRODUCT-VISION-AND-PRD.md     # Product definition, personas & strategy
│   ├── 02-TECHNICAL-ARCHITECTURE...     # System design, AST models, edge routing
│   ├── 03-FEATURE-SPEC-AND-USER...      # Feature breakdowns & user journeys
│   ├── 04-BUSINESS-AND-PRICING...       # Credit economics, plans & margins
│   ├── 05-DEVELOPER-AND-CONTRIBUTOR...  # This handbook
│   └── INDEX.md                         # Master documentation table of contents
│
├── public/                              # Static Public Assets
│   ├── fonts/                           # NeutralSans TTF variants (Regular, Medium, Bold, Black)
│   ├── images/                          # High-res posters, bento assets, banners
│   ├── pixartual/                       # Official SVG symbols (black, white, symbol-only)
│   └── videos/                          # WebM video backgrounds & bento loops
│
├── src/
│   ├── app/                             # Next.js 15 App Router Routes
│   │   ├── compare/                     # Competitive comparison directory (/compare/*)
│   │   ├── contact/                     # Official contact & enterprise sales
│   │   ├── dashboard/                   # Studio Canvas and AI creation workspace
│   │   ├── enterprise-teams/            # Enterprise platform solutions
│   │   ├── faqs/                        # Categorized knowledge base
│   │   ├── founders/                    # Role-specific product landing (/founders)
│   │   ├── insights/                    # Blog & educational guides (/insights, /insights/[cat])
│   │   ├── made-in-pixartual/           # Community site showcase
│   │   ├── post/[slug]/                 # Dynamic blog post reader
│   │   ├── pricing/                     # Interactive credit pricing matrix
│   │   ├── solutions/                   # Complete solutions directory
│   │   ├── templates/                   # 120+ cloneable templates catalog
│   │   ├── globals.css                  # Global design tokens & CSS variables
│   │   ├── layout.tsx                   # Root HTML layout with ThemeSync & SEO
│   │   └── page.tsx                     # Core PixartualAI Homepage
│   │
│   ├── components/
│   │   ├── brand/                       # PixartualLogo component & SVG adapters
│   │   ├── landing/                     # Modular landing page sections
│   │   │   ├── HeroSection.tsx          # Glowing ambient hero with prompt box
│   │   │   ├── PromptToOutputSection.tsx# Dual-speed marquee collage
│   │   │   ├── PixartualBento.tsx       # "Not just generated. Designed." grid
│   │   │   ├── BuildAnythingSection.tsx # Interactive 3D stacked capability scroller
│   │   │   ├── KeepYourSiteSection.tsx  # Webflow migration section with video
│   │   │   ├── PlatformFeaturesSection.tsx # Hover flame feature tiles
│   │   │   ├── PixartualCta.tsx         # Bottom full-width CTA banner
│   │   │   └── RolePageTemplate.tsx     # Dynamic layout for role-based pages
│   │   └── layout/                      # Global UI components
│   │       ├── Navbar.tsx               # Sticky header with 640px megamenus
│   │       ├── Footer.tsx               # 5-column link directory & theme switcher
│   │       └── ThemeSync.tsx            # Event-driven dark/light synchronizer
│   │
│   ├── data/                            # Static databases (posts.json, templates.json)
│   └── lib/                             # Shared utility libraries & Markdown parsers
│
├── tailwind.config.ts                   # Tailwind tokens mapped to --px-color-* variables
├── tsconfig.json                        # Strict TypeScript compilation options
└── package.json                         # Project dependencies & scripts
```

---

## 3. Local Development Setup

### Prerequisites
- Node.js `v18.17.0+` (or `v20+`)
- npm `v9+` or pnpm `v8+`

### Installation & Execution
```bash
# 1. Clone repository & install dependencies
git clone <repo-url>
cd Creatiie
npm install

# 2. Start the Next.js local development server
npm run dev

# 3. Open in browser
# Navigate to: http://localhost:3000
```

---

## 4. Design System & CSS Token Guidelines

### 4.1 Inverted Variable Dual-Spectrum Architecture
Never use hardcoded hex values (like `#FFFFFF` or `#000000`) for component backgrounds or text. Always utilize semantic tokens:

```tsx
// ❌ INCORRECT (Breaks in dark mode)
<div className="bg-white text-neutral-900 border-gray-200">

// ✅ CORRECT (Adapts automatically between light and dark modes)
<div className="bg-white text-ink-strong border-neutral-200">
```

### 4.2 Chromatic Shimmer Hover Links (`.fx-link`)
All navigation links in the Navbar, Megamenus, and Footer must use the `.fx-link` utility:
```tsx
<Link href="/pricing" className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[15px] font-normal text-ink-strong no-underline fx-link">
  Pricing
</Link>
```
On hover, `.fx-link` activates a smooth 4-color gradient shimmer (`#fe3200` → `#fc8c04` → `#a855f7` → `#3b82f6`) moving at `-200%` across the text.

### 4.3 Typography Rules
- Titles & Brand Headings: Use `text-ink-strong font-medium leading-[1.2]`. NeutralSans is bound to display classes.
- Body Copy: Use `text-gray-500` or `text-ink-soft` with `leading-relaxed`.
- Monospace Data / Code: Use `font-mono text-xs`.

---

## 5. Verification & Testing Standards

Before committing any modification, enforce the **Zero Assumed Success (ZAS)** rule by running strict terminal verification:

```bash
# Typecheck validation (Must exit with code 0)
npx tsc --noEmit

# Production build test
npm run build
```

### Git Commit Guidelines
Follow the Conventional Commits specification:
- `feat(scope): describe new capability`
- `fix(scope): describe defect resolution and root cause`
- `style(scope): cosmetic and layout adjustments`
- `docs(scope): documentation updates`
