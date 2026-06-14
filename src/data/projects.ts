// Single source of truth for the Work Archive cards AND the project modal,
// so the two can never drift.
//
// ─────────────────────────────────────────────────────────────────────────
// EDITING PER-SLIDE COPY
//   Each slide has `title` + `body` shown in the modal detail panel.
//   • title → rendered as `TITLE // NN` (the // NN index is auto-appended,
//             so don't type it; reordering slides renumbers automatically).
//             e.g. title: 'PERFORMANCE_OPTIMIZATION'  →  "PERFORMANCE_OPTIMIZATION // 01"
//   • body  → the paragraph below the title. Swaps as you move through slides.
//   The modal header ("PROJECT_03 // EGOE_BASE") is derived from id + name —
//   nothing to edit there.
// ─────────────────────────────────────────────────────────────────────────

import type { ImageMetadata } from "astro";

// All project screenshots, optimized at build. Reference by path-without-extension,
// e.g. img('tepe/tepe-hp-dt'). Throws at build if a name is wrong (typo guard).
const screens = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/projects/*/*.png",
  { eager: true },
);
const img = (slug: string): ImageMetadata => {
  const mod = screens[`../assets/projects/${slug}.png`];
  if (!mod) throw new Error(`projects.ts: missing screenshot "../assets/projects/${slug}.png"`);
  return mod.default;
};

export interface ProjectSlide {
  /** Short label overlaid on the image (bottom-left). */
  caption?: string;
  /** Detail-panel headline. Rendered as `TITLE // NN` — index auto-appended. EDIT ME. */
  title?: string;
  /** Detail-panel paragraph. Swaps per slide. EDIT ME. */
  body?: string;
  /** Desktop image — shown at lg+ (art direction). */
  desktop?: ImageMetadata;
  /** Mobile image — shown below lg; falls back to desktop if absent. */
  mobile?: ImageMetadata;
}

export interface Project {
  id: string; // e.g. "PROJECT_01"
  name: string;
  role: string;
  stack: string;
  status: string;
  /** Blurb on the feature card (the modal copy now lives per-slide). */
  description: string;
  /** External project link → CTA renders only when present. */
  url?: string;
  /** Carousel slides — each maps to one screenshot + its detail copy. */
  slides: ProjectSlide[];
  /** Renders as the full-width feature card on the archive grid. */
  feature?: boolean;
}

export const projects: Project[] = [
  {
    id: 'PROJECT_01',
    name: 'TEPE_USA',
    role: 'LEAD_ENGINEER / COMMUNICATIONS_LIAISON',
    stack: 'LIQUID / JAVASCRIPT / RUST',
    status: 'DEPLOYED',
    description:
      'Mission-control telemetry dashboard rendering live flight data at 60fps. Engineered for zero-latency situational awareness under sustained load.',
    url: 'https://www.tepeusa.com/',
    slides: [
      { caption: 'HOME_PAGE', title: 'HOME_PAGE',
        body: '[PROJECT_01 · 01] Replace with copy for this screen.',
        desktop: img('tepe/tepe-hp-dt'), mobile: img('tepe/tepe-hp-mb') },
      { caption: 'PRODUCT_PAGE', title: 'PRODUCT_PAGE',
        body: '[PROJECT_01 · 02] Replace with copy for this screen.',
        desktop: img('tepe/tepe-pdp-dt'), mobile: img('tepe/tepe-pdp-mb') },
      { caption: 'COLLECTION_PAGE', title: 'COLLECTION_PAGE',
        body: '[PROJECT_01 · 03] Replace with copy for this screen.',
        desktop: img('tepe/tepe-cp-dt'), mobile: img('tepe/tepe-cp-mb') },
    ],
  },
  {
    id: 'PROJECT_02',
    name: 'MANA',
    role: 'ENGINEER / BUG_HUNTER',
    stack: 'RUST / JAVASCRIPT / LIQUID / SCSS / REACT',
    status: 'DEPLOYED',
    description:
      'Distributed ledger with deterministic settlement. Rust core compiled to WASM for trustless in-browser verification.',
    url: 'https://mojemana.cz/',
    slides: [
      { caption: 'PRODUCT_PAGE', title: 'PRODUCT_PAGE',
        body: '[PROJECT_02 · 01] Replace with copy for this screen.',
        desktop: img('mana/mana-pdp-dt'), mobile: img('mana/mana-pdp-mb') },
      { caption: 'CART_REDESIGN', title: 'CART_REDESIGN',
        body: '[PROJECT_02 · 02] Replace with copy for this screen.',
        desktop: img('mana/mana-cart-dt'), mobile: img('mana/mana-cart-mb') },
      { caption: 'PRODUCT_UPSELLS', title: 'PRODUCT_UPSELLS',
        body: '[PROJECT_02 · 03] Replace with copy for this screen.',
        desktop: img('mana/mana-upsells-dt'), mobile: img('mana/mana-upsells-mb') },
    ],
  },
  {
    id: 'PROJECT_03',
    name: 'EGOE_BASE',
    role: 'FRONTEND_ENGINEER',
    stack: 'LIQUID / JAVASCRIPT',
    status: 'ACTIVE',
    feature: true,
    description:
      'Real-time terrain rendering engine optimized for low-latency telemetry streams in remote piloting scenarios.',
    url: 'https://www.egoe.eu/en',
    slides: [
      { caption: 'HOME_PAGE', title: 'HOME_PAGE',
        body: '[PROJECT_03 · 01] Replace with copy for this screen.',
        desktop: img('egoe/egoe-hp-dt'), mobile: img('egoe/egoe-hp-mb') },
      { caption: 'NAVIGATION_MENU', title: 'NAVIGATION_MENU',
        body: '[PROJECT_03 · 02] Replace with copy for this screen.',
        desktop: img('egoe/egoe-menu-dt'), mobile: img('egoe/egoe-menu-mb') },
      { caption: 'MOVE_COLLECTION', title: 'MOVE_COLLECTION',
        body: '[PROJECT_03 · 03] Replace with copy for this screen.',
        desktop: img('egoe/egoe-move-dt'), mobile: img('egoe/egoe-move-mb') },
      { caption: 'NEST_PRODUCT_PAGE', title: 'NEST_PRODUCT_PAGE',
        body: '[PROJECT_03 · 04] Replace with copy for this screen.',
        desktop: img('egoe/egoe-nest-pdp-dt'), mobile: img('egoe/egoe-nest-pdp-mb') },
      { caption: 'SKIS_PRODUCT_PAGE', title: 'SKIS_PRODUCT_PAGE',
        body: '[PROJECT_03 · 05] Replace with copy for this screen.',
        desktop: img('egoe/egoe-skis-pdp-dt'), mobile: img('egoe/egoe-skis-pdp.mb') },
    ],
  },
  {
    id: 'PROJECT_04',
    name: 'YOGGIES',
    role: 'FRONTEND_ENGINEER / EMERGENCY_RESPONDER',
    stack: 'LIQUID / JAVASCRIPT / REACT',
    status: 'DEPLOYED',
    description:
      'High-precision propagation API for orbital trajectories. gRPC services held to sub-millisecond response budgets.',
    url: 'https://www.yoggies.com/',
    slides: [
      { caption: 'ATLAS', title: 'ATLAS',
        body: '[PROJECT_04 · 01] Replace with copy for this screen.',
        desktop: img('yoggies/yog-atlas-dt'), mobile: img('yoggies/yog-atlas-mb') },
      { caption: 'NAVIGATION_MENU', title: 'NAVIGATION_MENU',
        body: '[PROJECT_04 · 02] Replace with copy for this screen.',
        desktop: img('yoggies/yog-menu-dt'), mobile: img('yoggies/yog-menu-mb') },
      { caption: 'PRODUCT_PAGE', title: 'PRODUCT_PAGE',
        body: '[PROJECT_04 · 03] Replace with copy for this screen.',
        desktop: img('yoggies/yog-pdp-dt'), mobile: img('yoggies/yog-pdp-mb') },
      { caption: 'CART', title: 'CART',
        body: '[PROJECT_04 · 04] Replace with copy for this screen.',
        desktop: img('yoggies/yog-cart-dt'), mobile: img('yoggies/yog-cart-mb') },
      { caption: 'PRODUCT_UPSELLS', title: 'PRODUCT_UPSELLS',
        body: '[PROJECT_04 · 05] Replace with copy for this screen.',
        desktop: img('yoggies/yog-upsells-dt'), mobile: img('yoggies/yog-upsells-mb') },
    ],
  },
  {
    id: 'PROJECT_05',
    name: 'ECONEA',
    role: 'FRONTEND_ENGINEER / PERFORMANCE_OPTIMIZER',
    stack: 'LIQUID / JAVASCRIPT',
    status: 'MAINTAIN',
    description:
      'Streaming ingestion pipeline normalizing terabytes per day. Kafka-backed, schema-validated, idempotent by design.',
    slides: [
      { caption: 'HOME_PAGE', title: 'HOME_PAGE',
        body: '[PROJECT_05 · 01] Replace with copy for this screen.',
        desktop: img('econea/econea-hp-dt'), mobile: img('econea/econea-hp-mb') },
      { caption: 'PRODUCT_PAGE', title: 'PRODUCT_PAGE',
        body: '[PROJECT_05 · 02] Replace with copy for this screen.',
        desktop: img('econea/econea-pdp-dt'), mobile: img('econea/econea-pdp-mb') },
      { caption: 'STICKY_ATC', title: 'STICKY_ATC',
        body: '[PROJECT_05 · 03] Replace with copy for this screen.',
        desktop: img('econea/econea-sticky-dt'), mobile: img('econea/econea-sticky-mb') },
    ],
  },
];

/** Spec lines shown on the archive card. */
export const cardSpecs = (p: Project): string[] => [
  `STACK: ${p.stack}`,
  `ROLE: ${p.role}`,
  `STATUS: ${p.status}`,
];
