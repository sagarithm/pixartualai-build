---
id: "brand.asset-purification"
name: "Pixartual Brand & Asset Purification"
version: "1.0.0"
domain: "brand-governance"
description: "Guidelines and automated protocols for transforming extracted or scraped features, assets, and copy into 100% original, copyright-safe, Pixartual-branded assets while retaining high aesthetic fidelity."
triggers:
  - "Extracting, scraping, or cloning pages, templates, or layouts from reference sites"
  - "Creating or modifying brand assets, gradients, videos, or images"
  - "Refactoring component names, routes, CSS prefixes, or content to match Pixartual"
  - "Auditing codebase to ensure zero legacy third-party brand strings (e.g., Modulify, mdlfy) leak into production"
prerequisites: []
risk_profile: "medium"
---

# Pixartual Brand & Asset Purification

## 1. Overview & Core Philosophy
PixartualAI is an independent, high-performance AI creation platform. When referencing, reverse-engineering, or extracting layouts, UI components, and design systems from external benchmarks (such as Modulify):
* **Strict Zero Asset Scraping**: Never commit proprietary raster images, scraped vector illustrations, or video files byte-for-byte.
* **100% Procedural & Defensible**: Recreate all backgrounds, glows, and ambient gradient textures mathematically using procedural CSS/SVG or Python PIL scripts (`scripts/recreate_brand_assets.py`).
* **90% Aesthetic Harmony, 100% Brand Purity**: Maintain the premium energy and fiery warmth of the Pixartual aesthetic, but calibrate all stops, curves, and files so they are completely unique to Pixartual.

---

## 2. Mandatory Renaming & Transformation Dictionary

Any time code or data is brought into the codebase, immediately apply these canonical transformations:

| Original Reference | Pixartual Canonical Target | Notes / Context |
|---|---|---|
| `Modulify` / `Modulify AI` | `PixartualAI` (or `Pixartual`) | In all copy, headlines, metadata, titles |
| `modulify` | `pixartual` | In file names, slugs, URLs, lower-case variables |
| `mdlfy-` | `px-` | CSS class prefix (e.g. `px-adaptive-media`) |
| `--mdlfy-` | `--px-` | CSS design token variables in `globals.css` |
| `modulify-theme` | `pixartual-theme` | LocalStorage keys and theme events |
| `/made-in-modulify` | `/made-in-pixartual` | Community showcase route |
| `/compare/modulify-vs-*` | `/compare/pixartual-vs-*` | Competitor comparison routes |
| `.modulify.website` | `.pixartual.website` | Subdomain preview templates |
| `cdn.modulify.ai` | `cdn.pixartual.ai` | Media and asset CDN origins |
| `ModulifyCta` | `PixartualCta` | Primary CTA banner component |
| `ModulifyBento` | `PixartualBento` | Bento feature showcase component |

---

## 3. Asset & Gradient Engineering Protocols

### A. Procedural Gradients over Raster Bloat
* Instead of static raster files (`footer-bg.jpg`, `cta-gradient-bg.webp`), use procedural Python PIL generation or pure CSS mesh gradients.
* **Procedural Pipeline**: Always run `python scripts/recreate_brand_assets.py` to regenerate crisp, dithered, 30KB-range assets.
* **Color Temperature Formula**:
  * Flame Core: `#FE3200` (Safety Vermilion)
  * Flare Amber: `#FC8C04` (Warm Tangerine)
  * Soft Blush: `#F28A6F` / `#FFAAA6` (Peach / Apricot glow)
  * Dark Mode Embers: `#0A0A0C` $\rightarrow$ `#FE3200` ambient bottom bleed

### B. Video Stream Re-Encoding (FFmpeg)
* Whenever referencing or importing video clips:
  ```bash
  ffmpeg -y -i input.webm -vf "eq=contrast=1.02:brightness=0.005:saturation=1.03" -c:v libvpx-vp9 -b:v 0 -crf 32 output.webm
  ```
* This ensures fresh video stream bitstream hashes, customized color-grading, and dramatic compression without artifacts.

### C. Photo & Mockup Calibration (PIL)
* Apply Pixartual warmth curve to all incoming screenshots and portraits:
  * Red channel: `* 1.018`
  * Blue channel: `* 0.985`
  * Contrast: `1.025`
  * Format: WebP or optimized JPEG at 88 quality.

---

## 4. Brand Verification & Quality Gate (ZAS)

Before committing or pushing any feature, run this verification gate in the terminal:

```bash
# 1. Verify zero third-party brand leaks in application source code:
git grep -i "modulify" src/

# 2. Verify zero legacy CSS class prefix leaks:
git grep "mdlfy" src/

# 3. Typecheck:
npx tsc --noEmit

# 4. Static build verification:
npm run build
```

If `git grep` yields matches (outside of backward-compatible 301 redirects in `next.config.mjs`), purify those strings immediately before shipping.

