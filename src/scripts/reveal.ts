// Scramble-on-reveal: elements marked [data-scramble] decode in (via the shared
// text-scramble utility) the first time they enter the viewport. Re-runnable for
// dynamically injected content (e.g. /work loaded into the drawer).
//
// Flash guard: `.js [data-scramble] { opacity: 0 }` hides targets only when JS is
// active (no-JS shows them normally). opacity (not visibility) keeps the original
// text available to screen readers before the visual decode plays.
import { scrambleText } from "./text-scramble";

const seen = new WeakSet<Element>();
let io: IntersectionObserver | null = null;

function revealEl(el: HTMLElement) {
  const text = (el.textContent ?? "").trim(); // ignore markup whitespace
  el.dataset.revealed = "";
  el.style.opacity = "1";
  el.textContent = "";
  scrambleText(el, text);
}

function observer() {
  if (io) return io;
  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          io!.unobserve(entry.target);
          revealEl(entry.target as HTMLElement);
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
    .querySelectorAll<HTMLElement>("[data-scramble]:not([data-revealed])")
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
