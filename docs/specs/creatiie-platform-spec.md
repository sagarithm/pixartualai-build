# 🏛️ Creatiie Architecture & System Specification

> **Platform Mission**: An AI-powered platform that enables anyone to turn an idea into a fully functional, interactive, and shareable digital experience without writing code.

---

## 1. Core Product Pillars & User Journey

```
                        ┌────────────────────────────────────────┐
                        │            CREATIIE STUDIO             │
                        └───────────────────┬────────────────────┘
                                            │
                     ┌──────────────────────┴──────────────────────┐
                     ▼                                             ▼
         [Approach 1: Template Hub]                   [Approach 2: AI Prompt Engine]
         • Choose curated interactive                 • Natural language prompt or idea
           experience (Portfolio, Micro-tool,           • Multi-step synthesis:
           Creator Showcase, Interactive Deck)          - Purpose & Target Audience
         • Instant clone into Studio Canvas             - Information Architecture
                                                        - Modular Component Tree (AST)
                                                        - Copy, Theming, Interactive State
                     │                                             │
                     └──────────────────────┬──────────────────────┘
                                            ▼
                        ┌────────────────────────────────────────┐
                        │         INTERACTIVE STUDIO CANVAS       │
                        │ • Visual device preview (Desk/Tab/Mob) │
                        │ • Direct-click component editor        │
                        │ • Global Theme & Typography Switcher   │
                        │ • Conversational AI Copilot (Refine)   │
                        └───────────────────┬────────────────────┘
                                            ▼
                        ┌────────────────────────────────────────┐
                        │          SHARE & PUBLISH ENGINE        │
                        │ • Instant shareable live preview link  │
                        │ • Self-contained standalone code export│
                        └────────────────────────────────────────┘
```

---

## 2. Design System & Aesthetics (Modulify 1:1 Parity)

- **Typography Hierarchy**:
  - `font-display`: **NeutralSans** (Regular 400, Medium 500, Bold 700, Black 900) for high-impact titles, navigation brand, and badges.
  - `font-sans`: **Inter** / **IBM Plex Sans** for clean, readable body copy, forms, inputs, and UI panels.
  - `font-mono`: **DM Mono** / **Space Mono** for code previews, stats, technical tags, and chat markdown.
- **Iconography**:
  - **Phosphor Icons** (`@phosphor-icons/react`) across all studio controls, templates, and component widgets.
- **Color Tokens**:
  - Light mode: Canvas `#FBFBFA`, panel cards `#FFFFFF`, borders `#EBEBEA` (`stone-200`), text `#191918` (`neutral-900`).
  - Dark mode: Canvas `#121212`, panel cards `#181818`, borders `#282828`, text `#EDEDEC`.
- **Radius Tokens**:
  - `rounded-[7px]` for action badges, buttons, toolbars.
  - `rounded-[10px]` for dialogs, popovers, select dropdowns, text inputs.
  - `rounded-2xl` / `rounded-3xl` for canvas viewport frames and cards.

---

## 3. Component AST (Abstract Syntax Tree)

Every generated experience is stored as a deterministic JSON tree:

```typescript
export interface ExperienceAST {
  id: string;
  meta: {
    title: string;
    description: string;
    theme: 'light' | 'dark';
    fontPairing: 'neutralsans-inter' | 'serif-sans' | 'mono-clean';
    primaryColor: string;
    backgroundColor: string;
  };
  navigation?: NavigationConfig;
  sections: SectionNode[];
  footer?: FooterConfig;
}

export interface SectionNode {
  id: string;
  type: 
    | 'hero' 
    | 'showcase' 
    | 'interactive-calculator' 
    | 'interactive-quiz' 
    | 'timeline' 
    | 'bento-grid' 
    | 'features' 
    | 'contact' 
    | 'link-tree' 
    | 'custom-card';
  props: Record<string, any>;
  interactiveState?: Record<string, any>;
}
```

---

## 4. Bounded Contexts & File Structure

```
Creatiie/
├── public/
│   └── fonts/
│       ├── NeutralSans-Regular.ttf
│       ├── NeutralSans-Medium.ttf
│       ├── NeutralSans-Bold.ttf
│       └── NeutralSans-Black.ttf
├── src/
│   ├── app/                    # Next.js App Router (Studio, Preview, Templates)
│   ├── components/
│   │   ├── studio/             # Studio Canvas, Header, Toolbar, Device Frame
│   │   ├── editor/             # Property inspector, theme switcher, style panels
│   │   ├── chat/               # Conversational AI Copilot streaming interface
│   │   ├── templates/          # Ready-made template gallery & previews
│   │   └── render/             # Modular interactive component renderers
│   ├── lib/
│   │   ├── ast/                # AST schemas, validator, default starter templates
│   │   ├── ai/                 # Schema-constrained prompt synthesis engine
│   │   └── export/             # Standalone HTML/React code generation engine
│   └── store/
│       ├── useStudioStore.ts   # Canvas mode, active node, undo/redo
│       ├── useChatStore.ts     # Conversational refinement history
│       └── useThemeStore.ts    # Dark/light theme & font tokens
└── package.json
```

