// Single source of truth for the Work Archive cards AND the project modal,
// so the two can never drift. Copy is placeholder pending real content.

import type { ImageMetadata } from "astro";

// TEPE storefront screenshots — desktop + mobile per screen.
import tepeHpDt from "../assets/projects/tepe/tepe-hp-dt.png";
import tepeHpMb from "../assets/projects/tepe/tepe-hp-mb.png";
import tepePdpDt from "../assets/projects/tepe/tepe-pdp-dt.png";
import tepePdpMb from "../assets/projects/tepe/tepe-pdp-mb.png";
import tepeCpDt from "../assets/projects/tepe/tepe-cp-dt.png";
import tepeCpMb from "../assets/projects/tepe/tepe-cp-mb.png";

export interface ProjectSlide {
  /** Optional caption shown over the slide. */
  caption?: string;
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
  /** Modal description (also the blurb on the feature card). */
  description: string;
  /** External project link → CTA renders only when present. */
  url?: string;
  /** Carousel slides (3–6). Placeholders for now. */
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
      { caption: 'HOME_PAGE', desktop: tepeHpDt, mobile: tepeHpMb },
      { caption: 'PRODUCT_PAGE', desktop: tepePdpDt, mobile: tepePdpMb },
      { caption: 'COLLECTION_PAGE', desktop: tepeCpDt, mobile: tepeCpMb },
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
    slides: [{ caption: 'CONSENSUS_MAP' }, {}, {}],
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
      { caption: 'TERRAIN_MESH_LOD' },
      { caption: 'DEPTH_BUFFER_DEBUG' },
      {},
      {},
      { caption: 'PILOT_HUD_COMPOSITE' },
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
    slides: [{ caption: 'PROPAGATION_GRAPH' }, {}, {}],
  },
  {
    id: 'PROJECT_05',
    name: 'ECONEA',
    role: 'FRONTEND_ENGINEER / PERFORMANCE_OPTIMIZER',
    stack: 'LIQUID / JAVASCRIPT',
    status: 'MAINTAIN',
    description:
      'Streaming ingestion pipeline normalizing terabytes per day. Kafka-backed, schema-validated, idempotent by design.',
    slides: [{ caption: 'PIPELINE_TOPOLOGY' }, {}, {}, {}],
  },
];

/** Spec lines shown on the archive card. */
export const cardSpecs = (p: Project): string[] => [
  `STACK: ${p.stack}`,
  `ROLE: ${p.role}`,
  `STATUS: ${p.status}`,
];
