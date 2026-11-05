# 📐 PixartualAI — Complete SDLC & Engineering Blueprint

> **Product**: PixartualAI  
> **Mission**: An AI-powered platform allowing anyone to turn an idea into a fully functional, interactive, and shareable digital experience without code.  
> **Architectural Lineage**: Reverse-engineered from Modulify.ai production runtime and reconstructed under Sagarithm Engineering Constitution.

---

## 1. Extracted Evidence Inventory

All assets and specifications are grounded in verified production extractions stored in [`extracted-blueprint/`](file:///c:/Projects/Products/Creatiie/extracted-blueprint/):

| Extracted Domain | Evidence Source | Count / Specifics |
|---|---|---|
| **Typography** | `main.css` & `NeutralSans-*.ttf` | • NeutralSans (400, 500, 700, 900)<br>• Inter & IBM Plex Sans<br>• DM Mono & Space Mono |
| **Design Tokens** | `design-tokens.json` | 803 CSS variables, 66 keyframe animations, 27 core theme hex colors, 46 responsive media breakpoints |
| **Component System** | `architecture-manifest.json` | 28 UI primitive components (`TemplatePreviewModal`, `RichTextInput`, `PseudoClassSelect`, `DataView`, etc.) |
| **Engine RPCs & State** | `architecture-manifest.json` | 189 RPC methods across `SITE_CHAT`, `PROJECTS`, `DOMAINS`, `EMAILS`, `CMS`, and `DATABASE` |
| **Client State Stores** | `architecture-manifest.json` | 15 Zustand stores (`AI_SERVICE`, `SITE_CHAT`, `SITE_STORAGE_RESTORE`, `PROJECT`, `PROJECT_SETTINGS`) |

---

## 2. 6-Phase Software Development Life Cycle (SDLC)

```
┌────────────────────────────────────────────────────────────────────────┐
│                      PIXARTUALAI SDLC PIPELINE                         │
├─────────────┬─────────────┬─────────────┬────────────────┬─────────────┤
│   PHASE 1   │   PHASE 2   │   PHASE 3   │    PHASE 4     │   PHASE 5   │
│ AST & Token │ Dual Origin │ Interactive │ Conversational │ Share, Host │
│ Foundation  │ Studio Core │ Canvas Host │ AI Copilot     │ & Export    │
└─────────────┴─────────────┴─────────────┴────────────────┴─────────────┘
```

### Phase 1: Data Contract & Design System Foundation
- [x] **Local Typography Setup**: NeutralSans fonts downloaded and mapped via `@font-face` in `src/app/globals.css`.
- [x] **Tailwind Theme Tokens**: Configured in `tailwind.config.ts` (`font-display`, `font-sans`, `font-mono`, `rounded-button: 7px`, `rounded-card: 10px`).
- [x] **Experience AST Contract**: Defined in `src/types/ast.ts` with strict schema validation.
- [x] **Phosphor Icon Catalog**: Integrated via `@phosphor-icons/react`.

### Phase 2: Dual Origin Creation Engine
- **Approach 1 — Template Hub**:
  - `TemplatePreviewModal`: Visual template browser with live category filtering (Portfolio, Interactive Tool, Startup, Creator).
  - Instant one-click cloning into Studio Canvas.
- **Approach 2 — AI Prompt Synthesis Engine**:
  - `AI_SERVICE` store: multi-step state machine (`analyzing`, `structuring`, `synthesizing`, `ready`).
  - Structured prompt compiler generating complete AST with navigation, hero, interactive widgets, bento grid, and footer.

### Phase 3: Interactive Studio Canvas & Viewport Engine
- **Multi-Device Responsive Frame**:
  - Desktop Viewport (100% / max-w-6xl)
  - Tablet Viewport (768px with iPad device frame)
  - Mobile Viewport (375px with iPhone device frame)
- **Direct-Click Node Inspector**:
  - Click any section on the canvas to open the section inspector.
  - Inline text editing with `RichTextInput`.
  - Reorder sections with drag/move controls.
- **Live Interactive Component Renders**:
  - `HeroRenderer`: Dynamic badge, headline, CTA buttons, metrics counter.
  - `CalculatorRenderer`: Real-time stateful math calculation (Project Estimator or SaaS ARR Forecaster).
  - `QuizRenderer`: Real-time stateful multi-step diagnostic assessment with live scoring.
  - `BentoRenderer`: Responsive grid showcase cards.
  - `ContactRenderer`: Interactive reach-out card with simulated response.

### Phase 4: Conversational AI Copilot (`SITE_CHAT`)
- **Studio Chat Drawer**:
  - Persistent side-panel chat synchronized with `useStudioStore`.
  - `SITE_CHAT_STARTER` chips for one-click prompts ("Make headline punchier", "Switch to Dark Mode", "Add ROI calculator").
- **Surgical AST Patch Engine**:
  - AI requests apply localized delta mutations directly to selected nodes without re-rendering or wiping manual user edits.
- **Undo / Redo Snapshot Stack (`SITE_STORAGE_RESTORE`)**:
  - Immutable state snapshots allowing seamless rollback of AI modifications.

### Phase 5: Sharing, Publishing & Code Export
- **Instant Shareable Live Preview Link**:
  - Standalone reader route (`/p/[id]`) that renders the full interactive experience full-screen without studio chrome.
- **Zero-Dependency Code Export**:
  - Download complete self-contained HTML/Tailwind bundle or React component files with one click.
- **Theme & Token Customizer**:
  - Real-time color picker (Neutral, Blue, Purple, Emerald, Rose) and dark/light mode toggle.

### Phase 6: Automated Verification & STLC Gates
- Real terminal verification of build outputs (`next build`).
- Zero console runtime warnings.
- Responsive accessibility audit (keyboard navigability on all interactive widgets).

