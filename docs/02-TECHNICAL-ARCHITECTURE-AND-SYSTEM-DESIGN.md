# 🏗️ PixartualAI — Technical Architecture & System Design

> **Document Version**: 2.0.0  
> **Status**: Core Engineering Specification  
> **Target Audience**: Chief Systems Architects, Full-Stack Engineers, AI Platform Developers

---

## 1. System Overview & Macro Architecture

PixartualAI is architected as an **event-driven, schema-constrained multi-tier system** that decouples user interaction, AI intent orchestration, AST compilation, and edge execution.

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                 CLIENT LAYER                                    │
│   Next.js 15 App Router • React 19 • Tailwind CSS • Phosphor Icons • Lucide    │
│   [Landing Pages] • [Studio Canvas] • [Chat Copilot] • [CMS Admin Console]      │
└────────────────────────────────────────┬────────────────────────────────────────┘
                                         │ HTTPS / WebSocket (SSE)
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              API & GATEWAY LAYER                                │
│   Next.js Edge API Routes • Vercel Edge Middleware • Rate Limiting & Auth Guard │
│   [Session Auth] • [Credit Ledger Service] • [Project Orchestrator]             │
└────────────────────────────────────────┬────────────────────────────────────────┘
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 ▼                                               ▼
┌─────────────────────────────────────┐         ┌─────────────────────────────────────┐
│       AI ORCHESTRATION PIPELINE     │         │      STORAGE & RUNTIME PLATFORM     │
│ • Prompt Intent Classifier          │         │ • Relational DB (PostgreSQL / Neon) │
│ • Multi-Step Specification Synthesizer│       │ • Document & Asset Blob (Vercel Blob│
│ • AST Code & Schema Generator       │         │ • Edge Cache (Redis / Upstash)      │
│ • Refinement Diff & Patch Engine    │         │ • Sandboxed Virtual DOM Runtime     │
└─────────────────────────────────────┘         └─────────────────────────────────────┘
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         EDGE PUBLISHING & DOMAIN SYSTEM                         │
│   Dynamic Custom Domains • SSL Automation • Static Edge CDN • Relational CMS API│
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Multi-Step AI Generation Pipeline

Generating a full product cannot be achieved via a single naive LLM completion. PixartualAI utilizes a deterministic **4-stage synthesis pipeline**:

```
[User Prompt]
     │
     ▼
[Stage 1: Intent & Architecture Classifier]
     ├── Detects domain (SaaS, Agency, Portfolio, Directory, E-Commerce, Dashboard)
     ├── Extracts required sitemap pages (Home, Pricing, Auth, Dashboard, Blog)
     └── Generates high-level Product Specification JSON (Specs AST)
     │
     ▼
[Stage 2: Design Token & Layout Generator]
     ├── Computes harmonious typography pairing (Neutralsans + Inter)
     ├── Establishes semantic color tokens (Base, Surface, Ink, Accent, Accent-Hot)
     └── Compiles Component Layout AST (Sections, Grids, Responsive Breakpoints)
     │
     ▼
[Stage 3: Data & CMS Schema Synthesizer]
     ├── Infers required relational data models (e.g. Users, Posts, Products, Invoices)
     ├── Pre-populates realistic, high-conversion mock seed records
     └── Binds dynamic collections to UI components via data keys
     │
     ▼
[Stage 4: Sandboxed AST Assembly & Preview Stream]
     ├── Emits complete, type-safe React / Tailwind component nodes
     └── Streams live preview updates to the client viewport via Server-Sent Events (SSE)
```

---

## 3. Abstract Syntax Tree (AST) Data Model

Rather than raw string manipulation, PixartualAI models every project as a strict, serializable AST. This prevents syntax errors, ensures deterministic rendering, and enables surgical chat refinements.

```typescript
export interface ProductProjectAST {
  id: string;
  name: string;
  version: string;
  themeConfig: {
    colorScheme: 'light' | 'dark' | 'auto';
    tokens: Record<string, string>;
    typography: {
      display: string;
      body: string;
      mono: string;
    };
  };
  sitemap: {
    pages: PageNode[];
  };
  databaseSchema: {
    collections: CollectionNode[];
  };
  globalSettings: {
    favicon: string;
    ogImage: string;
    analyticsId?: string;
  };
}

export interface PageNode {
  slug: string;
  title: string;
  seoDescription: string;
  layout: 'marketing' | 'dashboard' | 'auth' | 'blank';
  sections: SectionNode[];
}

export interface SectionNode {
  id: string;
  type: string; // e.g., 'hero', 'bento-grid', 'pricing-calculator', 'data-table'
  props: Record<string, any>;
  dataBinding?: {
    collection: string;
    query?: Record<string, any>;
  };
  responsiveOverrides?: {
    mobile?: Record<string, any>;
    tablet?: Record<string, any>;
  };
}

export interface CollectionNode {
  name: string;
  slug: string;
  fields: {
    key: string;
    type: 'string' | 'number' | 'boolean' | 'rich-text' | 'image' | 'relation';
    relationTo?: string;
    required: boolean;
  }[];
  records: Record<string, any>[];
}
```

---

## 4. Theme Engine & Dark/Light Synchronization

PixartualAI employs an **inverted dual-spectrum CSS variable architecture**. 

### Variable Registration in `globals.css`:
```css
:root, [data-theme="light"], [data-color-scheme="light"] {
  --px-color-white: 255 255 255;
  --px-color-black: 0 0 0;
  --px-color-base: 245 245 245;
  --px-color-surface: 255 255 255;
  --px-color-border: 229 229 229;
  --px-color-ink: 17 17 17;
  --px-color-ink-strong: 17 17 17;
  --px-color-accent: 252 140 4;      /* Amber #fc8c04 */
  --px-color-accent-hot: 254 50 0;   /* Vibrant Orange #fe3200 */
}

[data-theme="dark"], [data-color-scheme="dark"], html.dark, .dark {
  --px-color-white: 18 18 18;        /* Inverted dark container surface */
  --px-color-black: 250 250 250;
  --px-color-base: 28 28 28;         /* Dark canvas background */
  --px-color-surface: 26 26 26;
  --px-color-border: 41 41 41;
  --px-color-ink: 237 237 237;
  --px-color-ink-strong: 255 255 255;
  --px-color-accent: 252 140 4;      /* Accent maintains brand vibrancy */
  --px-color-accent-hot: 254 50 0;
}
```

### Tailored Tailwind Configuration (`tailwind.config.ts`):
Tailwind utilities reference these variables dynamically with alpha-channel support:
```typescript
colors: {
  white: 'rgb(var(--px-color-white) / <alpha-value>)',
  base: 'rgb(var(--px-color-base) / <alpha-value>)',
  accent: {
    DEFAULT: 'rgb(var(--px-color-accent) / <alpha-value>)',
    hot: 'rgb(var(--px-color-accent-hot) / <alpha-value>)',
  },
  ink: {
    DEFAULT: 'rgb(var(--px-color-ink) / <alpha-value>)',
    strong: 'rgb(var(--px-color-ink-strong) / <alpha-value>)',
    soft: 'rgb(var(--px-color-ink-soft) / <alpha-value>)',
  }
}
```

---

## 5. Security & Isolation Architecture

1. **Sandboxed Virtual Preview**:
   - Customer-generated code is rendered within an isolated `<iframe>` possessing restricted `sandbox="allow-scripts allow-forms allow-same-origin"` attributes.
   - Cross-Origin Resource Sharing (CORS) policies prevent script execution from escaping into the parent Pixartual studio dashboard.
2. **Fail-Closed Secrets Management**:
   - Third-party API keys (Stripe, Resend, Supabase) are encrypted at rest using AES-256-GCM.
   - Client bundles never receive raw credentials; proxy endpoints sanitize upstream requests.
3. **SSRF & Input Defense**:
   - Webflow/URL ingestion pipelines enforce strict private IP address blocks (prohibiting `127.0.0.1`, `10.0.0.0/8`, `192.168.0.0/16`, AWS metadata `169.254.169.254`).

---

## 6. Hosting, Custom Domains & CDN Edge Routing

- **Edge Serving**: Deployed on globally distributed Edge networks with static asset caching at POPs worldwide.
- **Custom Domains**:
  - Automatically provisions Let's Encrypt Wildcard SSL certificates via automated DNS validation.
  - Custom CNAME resolution: `sites.pixartual.app` mapped to custom domain records.
  - Zero-downtime routing updates triggered via edge-routing middleware.
