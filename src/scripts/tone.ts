// Tone switcher: swaps every [data-i18n] element's copy between the three tones
// (professional / casual / machine). The swap re-uses scrambleText so it decodes
// in — the transition is the effect. Choice persists in localStorage and is
// reflected on any [data-tone-option] control. See src/data/copy.ts for strings.
import { copy, type Tone } from "../data/copy";
import { scrambleText } from "./text-scramble";
import { parseHighlight, hasHighlight } from "./highlight";

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
    if (hasHighlight(text)) renderSegments(el, text, animate);
    else if (animate) scrambleText(el, text);
    else el.textContent = text;
  });
}

// Rebuild a `*marked*` string as highlighted segment spans and (optionally)
// scramble each in, so the decode effect survives the accent markup.
function renderSegments(el: HTMLElement, text: string, animate: boolean) {
  const segments = parseHighlight(text);
  const spans = segments.map((s) => {
    const span = document.createElement("span");
    if (s.hi) span.className = "text-primary";
    return span;
  });
  el.replaceChildren(...spans);
  segments.forEach((s, i) => {
    if (animate) scrambleText(spans[i], s.text);
    else spans[i].textContent = s.text;
  });
}

// Reflect the active tone on every option button (header dropdown + menu).
function syncButtons(tone: Tone) {
  document.querySelectorAll<HTMLButtonElement>("[data-tone-option]").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.toneValue === tone));
  });
}

function setTone(tone: Tone) {
  try {
    localStorage.setItem(KEY, tone);
  } catch {
    /* ignore */
  }
  document.documentElement.setAttribute("data-tone", tone);
  syncButtons(tone);
  applyTone(document, tone, true); // user-initiated → decode the swap in
}

function init() {
  const tone = currentTone();
  syncButtons(tone);
  // professional is the SSR default, so only a non-default saved tone needs work.
  if (tone !== "professional") applyTone(document, tone, false);
}

// Delegated so it covers every [data-tone-option] (both switcher instances).
document.addEventListener("click", (e) => {
  const btn = (e.target as Element)?.closest?.<HTMLElement>("[data-tone-option]");
  const value = btn?.dataset.toneValue as Tone | undefined;
  if (value) setTone(value);
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
