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
  'home.status': {
    professional: 'STATUS: ONLINE // SECURE',
    casual: '[CASUAL] home.status',
    machine: '[MACHINE] home.status',
  },
  'home.bio': {
    professional:
      "I'm a frontend developer with a background in education. I specialize in crafting high-fidelity Shopify themes and web experiences that are both technically robust and visually precise. My work is informed by a commitment to clarity, efficiency, and user-centric design.",
    casual:
      "Hey, when I'm not building good-ass Shopify themes for Sounds Good Agency, you can find me kicking back with the wife and cats, watching dope movies, chilling on the porch or flinging pizza dough in the air.",
    machine: '[MACHINE] home.bio',
  },

  // ---- Work ----
  'work.intro': {
    professional:
      'A selection of high-fidelity Shopify theme artifacts. Executed with strict adherence to minimal tolerances and robust system architectures. Launched seamlessly via ground control (Sounds Good Agency).',
    casual:
      "Check out this sick collection of Shopify themes I've worked on. You can see they not only look damn good but they aren't all broken and stuff. It's cuz I'm good at web development.",
    machine: '[MACHINE] work.intro',
  },

  // ---- Specs (hardware-stat values) ----
  'specs.core': {
    professional: 'Caffeine-Fueled Synaptic Engine v2.4',
    casual: '[CASUAL] specs.core',
    machine: '[MACHINE] specs.core',
  },
  'specs.drive': {
    professional: '100% Motivated (Frequent Defragmentation Req.)',
    casual: 'Not a quitter',
    machine: '[MACHINE] specs.drive',
  },
  'specs.humor': {
    professional: 'ENABLED [Warning: Dry]',
    casual: 'Sarcastic / Deadpan / Sometimes Funny',
    machine: '[MACHINE] specs.humor',
  },
  'specs.detail': {
    professional: 'Obsessive / Pixel Perfect',
    casual: 'Good at visual stuff',
    machine: '[MACHINE] specs.detail',
  },

  // ---- Contact ----
  'contact.intro': {
    professional: 'Secure uplink established. Enter required parameters to initialize direct communication protocols.',
    casual: '[CASUAL] contact.intro',
    machine: 'Secure uplink established. Enter required parameters to initialize direct communication protocols.',
  },
};
