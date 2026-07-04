// Curated copy for the tone switcher. Three tones per key:
//   professional → the real, shipped copy (the site's default).
//   casual       → PLACEHOLDER — "Irresponsibly casual". WRITE YOUR OWN.
//   machine      → PLACEHOLDER — "MACHINE_CODE". WRITE YOUR OWN.
//
// ── HOW TO EDIT ──────────────────────────────────────────────────────────
//   • Replace every "[CASUAL] …" and "[MACHINE] …" string below with real
//     copy. Grep for [CASUAL] / [MACHINE] to find the ones still unwritten.
//   • To translate a NEW element: add a key here, then on the element set
//     data-i18n="<key>" and render copy["<key>"].professional as its text.
//   • Headings, nav labels, the rotating hero word and form fields are left
//     out on purpose — keep this to prose/flavour strings.
// ─────────────────────────────────────────────────────────────────────────

export type Tone = "professional" | "casual" | "machine";
export type CopyEntry = Record<Tone, string>;

export const copy: Record<string, CopyEntry> = {
  // ---- Home ----
  "home.status": {
    professional: "STATUS: ONLINE // SECURE",
    casual: "[CASUAL] home.status",
    machine: "[MACHINE] home.status",
  },
  "home.bio": {
    professional:
      "I'm a frontend developer with a background in education. I specialize in crafting high-fidelity Shopify themes and web experiences that are both technically robust and visually precise. My work is informed by a commitment to clarity, efficiency, and user-centric design.",
    casual: "[CASUAL] home.bio",
    machine: "[MACHINE] home.bio",
  },

  // ---- Work ----
  "work.intro": {
    professional:
      "A selection of high-fidelity Shopify theme artifacts. Executed with strict adherence to minimal tolerances and robust system architectures. Launched seamlessly via ground control (Sounds Good Agency).",
    casual: "[CASUAL] work.intro",
    machine: "[MACHINE] work.intro",
  },

  // ---- Specs (hardware-stat values) ----
  "specs.core": {
    professional: "Caffeine-Fueled Synaptic Engine v2.4",
    casual: "[CASUAL] specs.core",
    machine: "[MACHINE] specs.core",
  },
  "specs.drive": {
    professional: "100% Motivated (Frequent Defragmentation Req.)",
    casual: "[CASUAL] specs.drive",
    machine: "[MACHINE] specs.drive",
  },
  "specs.humor": {
    professional: "ENABLED [Warning: Dry]",
    casual: "[CASUAL] specs.humor",
    machine: "[MACHINE] specs.humor",
  },
  "specs.detail": {
    professional: "Obsessive / Pixel Perfect",
    casual: "[CASUAL] specs.detail",
    machine: "[MACHINE] specs.detail",
  },

  // ---- Contact ----
  "contact.intro": {
    professional:
      "Secure uplink established. Enter required parameters to initialize direct communication protocols.",
    casual: "[CASUAL] contact.intro",
    machine: "[MACHINE] contact.intro",
  },
};
