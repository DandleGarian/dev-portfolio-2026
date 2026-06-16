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
      'Dental industry gold-standard oral hygiene e-commerce platform. Fully responsive, accessible, and performant.',
    url: 'https://www.tepeusa.com/',
    slides: [
      { caption: 'HOME_PAGE', title: 'HOME_PAGE',
        body: 'Redesigned home page with improved navigation, accessibility, and performance.',
        desktop: img('tepe/tepe-hp-dt'), mobile: img('tepe/tepe-hp-mb') },
      { caption: 'PRODUCT_PAGE', title: 'PRODUCT_PAGE',
        body: 'Loyalty program integration, dynamic variant selection, and improved product information display.',
        desktop: img('tepe/tepe-pdp-dt'), mobile: img('tepe/tepe-pdp-mb') },
      { caption: 'DISCOUNT_FUNCTION', title: 'DISCOUNT_FUNCTION',
        body: 'Discount mechanism powered by Shopify discount functions serving dynamic discounts to exclusive customer set.',
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
      'Aerospace-inspired health supplement e-commerce platform with dynamic product pages, progression discounts, and personalized upsells.',
    url: 'https://mojemana.cz/',
    slides: [
      { caption: 'PRODUCT_PAGE', title: 'PRODUCT_PAGE',
        body: 'Redesigned product page with dynamic variant selection, size handling and discount stacking.',
        desktop: img('mana/mana-pdp-dt'), mobile: img('mana/mana-pdp-mb') },
      { caption: 'PROGRESSION_DISCOUNT', title: 'PROGRESSION_DISCOUNT',
        body: 'Implemented progression discount logic, allowing users to receive incremental discounts based on their purchase history and cart value.',
        desktop: img('mana/mana-cart-dt'), mobile: img('mana/mana-cart-mb') },
      { caption: 'PRODUCT_UPSELLS', title: 'PRODUCT_UPSELLS',
        body: 'Enhanced product upsells with personalized recommendations and dynamic pricing adjustments.',
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
      'Multi-storefront e-commerce platform with dynamic vehicle-compatibility filtering. Responsive, accessible, and performant.',
    url: 'https://www.egoe.eu/en',
    slides: [
      { caption: 'HOME_PAGE', title: 'HOME_PAGE',
        body: 'High-concept landing page serving as the entry point to a multi-storefront e-commerce platform. Responsive, accessible, and performant.',
        desktop: img('egoe/egoe-hp-dt'), mobile: img('egoe/egoe-hp-mb') },
      { caption: 'NAVIGATION_MENU', title: 'NAVIGATION_MENU',
        body: 'Centralized navigation hub for multi-storefront e-commerce. Consolidates all sub-companies into a single, responsive interface.',
        desktop: img('egoe/egoe-menu-dt'), mobile: img('egoe/egoe-menu-mb') },
      { caption: 'NEST_COLLECTION', title: 'NEST_COLLECTION',
        body: 'Interactive collection view allowing users to explore products with dynamic vehicle-compatibility filtering and sorting options.',
        desktop: img('egoe/egoe-move-dt'), mobile: img('egoe/egoe-move-mb') },
      { caption: 'NEST_PRODUCT_PAGE', title: 'NEST_PRODUCT_PAGE',
        body: 'Dynamic vehicle-selection interface on the product page, enabling users to instantly check compatibility with their specific vehicle model.',
        desktop: img('egoe/egoe-nest-pdp-dt'), mobile: img('egoe/egoe-nest-pdp-mb') },
      { caption: 'SKIS_PRODUCT_PAGE', title: 'SKIS_PRODUCT_PAGE',
        body: 'Metafield-driven data sources for product info, specifications and upsells.',
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
      'High-quality pet food e-commerce platform with dynamic product pages, personalized upsells, and tiered gift offers. Fully responsive and accessible.',
    url: 'https://www.yoggies.com/',
    slides: [
      { caption: 'ATLAS', title: 'ATLAS',
        body: 'Storefront API-driven pet catalog with dynamic filtering, sorting, and pagination. Fully responsive and accessible.',
        desktop: img('yoggies/yog-atlas-dt'), mobile: img('yoggies/yog-atlas-mb') },
      { caption: 'NAVIGATION_MENU', title: 'NAVIGATION_MENU',
        body: 'Centralized navigation hub for the Yoggies platform, providing seamless access to all sections and features.',
        desktop: img('yoggies/yog-menu-dt'), mobile: img('yoggies/yog-menu-mb') },
      { caption: 'PRODUCT_PAGE', title: 'PRODUCT_PAGE',
        body: 'Detailed product pages with dynamic content, including specifications, loyalty program integration, and related products.',
        desktop: img('yoggies/yog-pdp-dt'), mobile: img('yoggies/yog-pdp-mb') },
      { caption: 'CART', title: 'CART',
        body: 'Tiered gift offers presented in the cart for increased average order value.',
        desktop: img('yoggies/yog-cart-dt'), mobile: img('yoggies/yog-cart-mb') },
      { caption: 'PRODUCT_UPSELLS', title: 'PRODUCT_UPSELLS',
        body: 'Data-driven product upsells with personalized recommendations and dynamic pricing adjustments.',
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
      'Health and wellness e-commerce platform with dynamic product pages, sticky add-to-cart, and performance optimizations for fast page load times.',
    slides: [
      { caption: 'HOME_PAGE', title: 'HOME_PAGE',
        body: 'Aggressive performance optimizations for fast page load times and smooth user experience.',
        desktop: img('econea/econea-hp-dt'), mobile: img('econea/econea-hp-mb') },
      { caption: 'PRODUCT_PAGE', title: 'PRODUCT_PAGE',
        body: 'Redesigned product page with mobile-first layout, improved accessibility, and metafield-powered data integration.',
        desktop: img('econea/econea-pdp-dt'), mobile: img('econea/econea-pdp-mb') },
      { caption: 'STICKY_ATC', title: 'STICKY_ATC',
        body: 'Bespoke sticky add-to-cart component with dynamic product variant selection and product navigation.',
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
