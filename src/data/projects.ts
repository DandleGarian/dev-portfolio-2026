// Single source of truth for the Work Archive cards AND the project modal,
// so the two can never drift. Copy is placeholder pending real content.

export interface ProjectSlide {
  /** Optional caption shown over the slide. */
  caption?: string;
  // Real images land here later — desktop required, mobile optional (art-directed):
  //   desktop?: import("astro").ImageMetadata;
  //   mobile?: import("astro").ImageMetadata;
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
    id: "PROJECT_01",
    name: "AEROSPACE_DASHBOARD",
    role: "LEAD ENGINEER",
    stack: "REACT / WEBGL",
    status: "DEPLOYED",
    description:
      "Mission-control telemetry dashboard rendering live flight data at 60fps. Engineered for zero-latency situational awareness under sustained load.",
    url: "https://example.com",
    slides: [
      { caption: "PRIMARY_TELEMETRY_VIEW" },
      { caption: "ORBITAL_TRACKING_OVERLAY" },
      {},
      { caption: "ALERT_SUBSYSTEM" },
    ],
  },
  {
    id: "PROJECT_02",
    name: "QUANTUM_LEDGER",
    role: "SYSTEMS ARCHITECT",
    stack: "RUST / WASM",
    status: "BETA",
    description:
      "Distributed ledger with deterministic settlement. Rust core compiled to WASM for trustless in-browser verification.",
    slides: [{ caption: "CONSENSUS_MAP" }, {}, {}],
  },
  {
    id: "PROJECT_03",
    name: "SYNTHETIC_VISION_SYSTEM",
    role: "GRAPHICS ENGINEER",
    stack: "C++ / VULKAN",
    status: "ACTIVE",
    feature: true,
    description:
      "Real-time terrain rendering engine optimized for low-latency telemetry streams in remote piloting scenarios.",
    url: "https://example.com",
    slides: [
      { caption: "TERRAIN_MESH_LOD" },
      { caption: "DEPTH_BUFFER_DEBUG" },
      {},
      {},
      { caption: "PILOT_HUD_COMPOSITE" },
    ],
  },
  {
    id: "PROJECT_04",
    name: "ORBITAL_MECHANICS_API",
    role: "BACKEND ENG",
    stack: "GO / gRPC",
    status: "V2.1",
    description:
      "High-precision propagation API for orbital trajectories. gRPC services held to sub-millisecond response budgets.",
    slides: [{ caption: "PROPAGATION_GRAPH" }, {}, {}],
  },
  {
    id: "PROJECT_05",
    name: "DATA_LAKE_INGESTION",
    role: "DATA ENG",
    stack: "PYTHON / KAFKA",
    status: "MAINTAIN",
    description:
      "Streaming ingestion pipeline normalizing terabytes per day. Kafka-backed, schema-validated, idempotent by design.",
    slides: [{ caption: "PIPELINE_TOPOLOGY" }, {}, {}, {}],
  },
];

/** Spec lines shown on the archive card. */
export const cardSpecs = (p: Project): string[] => [
  `STACK: ${p.stack}`,
  `ROLE: ${p.role}`,
  `STATUS: ${p.status}`,
];
