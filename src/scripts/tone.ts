// Tone switcher: swaps every [data-i18n] element's copy between the three tones
// (professional / casual / machine). The swap re-uses scrambleText so it decodes
// in — the transition is the effect. Choice persists in localStorage and is
// mirrored into any [data-tone-select] control. See src/data/copy.ts for strings.
import { copy, type Tone } from "../data/copy";
import { scrambleText } from "./text-scramble";

const KEY = "tone";
const TONES: Tone[] = ["professional", "casual", "machine"];

function currentTone(): Tone {
  try {
    const t = localStorage.getItem(KEY) as Tone | null;
    if (t && TONES.includes(t)) return t;
  } catch {
    /* localStorage unavailable */
  }
  return "professional";
}

// Apply a tone to every [data-i18n] under `root`. `animate` scrambles the swap
// (user-initiated change); otherwise sets text instantly (on load / drawer inject).
export function applyTone(
  root: ParentNode = document,
  tone: Tone = currentTone(),
  animate = false,
) {
  root.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const entry = copy[el.dataset.i18n ?? ""];
    if (!entry) return;
    const text = entry[tone] ?? entry.professional;
    if (animate) scrambleText(el, text);
    else el.textContent = text;
  });
}

function setTone(tone: Tone) {
  try {
    localStorage.setItem(KEY, tone);
  } catch {
    /* ignore */
  }
  document.documentElement.setAttribute("data-tone", tone);
  document
    .querySelectorAll<HTMLSelectElement>("[data-tone-select]")
    .forEach((s) => (s.value = tone));
  applyTone(document, tone, true); // user-initiated → decode the swap in
}

function init() {
  const tone = currentTone();
  document.querySelectorAll<HTMLSelectElement>("[data-tone-select]").forEach((s) => {
    s.value = tone;
    s.addEventListener("change", () => setTone(s.value as Tone));
  });
  // professional is the SSR default, so only a non-default saved tone needs work.
  if (tone !== "professional") applyTone(document, tone, false);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
