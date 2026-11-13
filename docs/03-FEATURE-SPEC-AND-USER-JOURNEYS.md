# 📱 PixartualAI — Feature Specification & User Journeys

> **Document Version**: 2.0.0  
> **Status**: Product Feature Specification  
> **Scope**: Studio Canvas, AI Copilot, CMS Engine, Template Hub, Publishing Flow

---

## 1. Feature Map & Functional Hierarchy

```
                                 PIXARTUAL STUDIO
                                        │
     ┌──────────────────┬───────────────┴───────────────┬──────────────────┐
     ▼                  ▼                               ▼                  ▼
[AI Creator Engine]  [Canvas & Viewport]        [Full-Stack CMS]   [Publishing & Domains]
• Prompt Bar         • Desktop / Tablet / Mobile • Relational Schema• Subdomain Provisioning
• Prompt Suggestions • Direct-Click Selection    • Dynamic Records  • Custom Domain DNS (CNAME)
• Design Synthesizer • Section Reordering        • Rich Text Editor • SSL Auto-Provisioning
• Chat Copilot       • Visual Style Overrides    • Static Site Gen  • Full Code Export (ZIP)
```

---

## 2. Core Functional Specifications

### 2.1 Prompt-to-Product Generation Flow
- **Entry Points**: 
  - Homepage Hero Prompt Box with rotating suggested ideas (*SaaS Landing Page*, *Portfolio*, *Dashboard*, *Agency Website*, *App Website*, *Client Portal*).
  - Dashboard "New Project" modal.
- **Input Parameters**:
  - Natural language prompt (text).
  - Optional file upload (wireframe image, brand style guide PDF, competitor URL).
- **Execution Lifecycle**:
  1. Instant credit deduction verification (checks user credit balance against cost).
  2. Multi-step progress visualizer displaying generation checkpoints:
     - *Synthesizing product information architecture...*
     - *Generating responsive layout and visual tokens...*
     - *Structuring relational CMS collections & mock data...*
     - *Assembling interactive preview...*
  3. Live render into the Interactive Studio Canvas within < 8 seconds.

---

### 2.2 Interactive Studio Canvas & Viewport
- **Device Viewport Switcher**:
  - Desktop (`1440px` canvas with zoom control: 50%, 75%, 100%, Fit).
  - Tablet (`768px` device frame).
  - Mobile (`375px` iPhone frame with simulated touch scrolling).
- **Direct-Click Manipulation**:
  - Clicking any element activates an inline bounding box with quick actions:
    - *Edit Text* (inline contentEditable).
    - *Replace Media* (Unsplash integration, Pixartual procedural assets, local upload).
    - *Ask AI to Change This Element* (pre-selects node in Chat Copilot).
- **Section Reordering & Structure Tree**:
  - Left drawer exposes hierarchical tree of pages and sections.
  - Drag-and-drop handles for immediate vertical reordering.

---

### 2.3 Conversational AI Copilot (Surgical Refinement)
- **Scope-Constrained Refinement**:
  - Users can select a specific section, component, or the entire project.
  - Natural language instructions:
    - *"Add a testimonial carousel with 5 star ratings and founder headshots."*
    - *"Change the color theme to modern dark mode with emerald accents."*
    - *"Rewrite the headline to focus on enterprise security and SOC-2 compliance."*
  - **Surgical Diffing**: Only the targeted section's AST node is modified; unreferenced sections remain unmodified to prevent layout destruction.
  - **Undo / Redo History**: Full transactional rollback state for every AI execution step.

---

### 2.4 Relational CMS & Dynamic Content Studio
- **Collection Builder**:
  - Supports field types: Text, Slug, Markdown/Rich Text, Number, Switch, Image, Single Reference, Multi-Reference.
- **Dynamic Page Templating**:
  - Automatically synthesizes detail pages (`/insights/[slug]`, `/solutions/[slug]`, `/products/[id]`).
- **Data Import / Export**:
  - One-click CSV / JSON import and export for rapid migration.

---

### 2.5 120+ Curated Template Hub & Cloning Engine
- **Categorized Directory**:
  - AI, SaaS, Agency, Architecture, Travel, Portfolio, Marketing, Photography, Creative, Hospitality, E-Commerce.
- **Interactive Preview**:
  - Full-screen interactive demo of each template before cloning.
- **One-Click Workspace Clone**:
  - Clones entire sitemap, CMS schemas, and image assets into the user's private workspace within 2 seconds.

---

### 2.6 Custom Domain Management & Instant Hosting
- **Subdomain Provisioning**:
  - Instant allocation on `*.pixartual.app` with zero configuration.
- **Custom Domains**:
  - In-app domain search and registrar integration (powered by automated DNS platform).
  - Connect external domains (GoDaddy, Namecheap, Cloudflare) via standard CNAME / A records.
  - Automatic SSL certificate generation via Let's Encrypt with automated 90-day renewal.

---

## 3. End-to-End User Journeys

### Journey 1: The Fast-Paced Founder Launches an MVP
```
[User visits PixartualAI] ──► [Types "CRM for Boutique Agencies" into Hero Prompt]
                                          │
                                          ▼
                         [Pixartual Synthesizes Full Experience]
                         • Marketing Landing Page
                         • Feature breakdown
                         • Pricing tier calculator
                         • Interactive Client Pipeline Dashboard
                         • Contact & Demo Lead Capture Form
                                          │
                                          ▼
                         [Review in Studio Canvas]
                         • Toggles Mobile View: perfect responsiveness
                         • Uses Chat Copilot: "Add Google OAuth button"
                                          │
                                          ▼
                         [Click "Publish" ──► Connect Custom Domain]
                         • Live in < 10 minutes
```

### Journey 2: An Agency Rebuilds a Client's Webflow Site
```
[Agency opens Dashboard] ──► [Selects "Import Webflow Site"]
                                          │
                                          ▼
                         [Pastes Existing Webflow Site URL]
                         • Engine parses design, classes, & CMS structure
                         • Reconstructs 1:1 inside Pixartual Studio
                                          │
                                          ▼
                         [Hands off to Client with AI Editing Enabled]
                         • Client edits blog posts in relational CMS
                         • Client prompts AI for new campaign landing pages
```
