// Reveal-on-view for three complementary modes, all triggered the first time an
// element scrolls into view. Re-runnable for injected content (e.g. the drawer).
//
//   [data-scramble]        headings — terminal decode (loud)
//   [data-reveal]          lesser text — fade + small rise (quiet)
//   [data-reveal-stagger]  container — its children fade/rise in a cascade
//
// Flash guard + the fade hiding live in global.css, gated to
// `prefers-reduced-motion: no-preference` so reduced-motion users just see text.
import { scrambleText } from "./text-scramble";

const seen = new WeakSet<Element>();
let io: IntersectionObserver | null = null;
const STAGGER_STEP = 70; // ms between staggered children

function revealScramble(el: HTMLElement) {
  const text = (el.textContent ?? "").trim();
  el.dataset.revealed = "";
  el.style.opacity = "1";
  el.textContent = "";
  scrambleText(el, text);
}

function revealStagger(el: HTMLElement) {
  Array.from(el.children).forEach((kid, i) => {
    (kid as HTMLElement).style.transitionDelay = `${i * STAGGER_STEP}ms`;
  });
  el.dataset.revealed = "";
}

function reveal(el: HTMLElement) {
  if (el.hasAttribute("data-scramble")) revealScramble(el);
  else if (el.hasAttribute("data-reveal-stagger")) revealStagger(el);
  else el.dataset.revealed = ""; // [data-reveal] → CSS fade-rise
}

function observer() {
  if (io) return io;
  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          io!.unobserve(entry.target);
          reveal(entry.target as HTMLElement);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
  );
  return io;
}

export function revealOnView(root: ParentNode = document) {
  const obs = observer();
  root
    .querySelectorAll<HTMLElement>(
      "[data-scramble]:not([data-revealed]), [data-reveal]:not([data-revealed]), [data-reveal-stagger]:not([data-revealed])",
    )
    .forEach((el) => {
      if (seen.has(el)) return;
      seen.add(el);
      obs.observe(el);
    });
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => revealOnView());
  } else {
    revealOnView();
  }
}
