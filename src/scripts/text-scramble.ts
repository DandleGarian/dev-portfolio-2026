// Reusable terminal-style text scramble/decode.
// - Diff-aware: only characters that differ from the current text scramble; the
//   shared prefix stays put (no clumsy re-decoding of unchanged copy).
// - rAF-driven, per-character random settle windows for a staggered decode.
// - Honors prefers-reduced-motion (sets the text instantly).
// Reusable anywhere text appears or changes; style the in-flight glyphs via `.dud`.

const GLYPHS = "!<>-_\\/[]{}=+*^?#%$@~0123456789";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const escapeChar = (c: string) =>
  c === "<" ? "&lt;" : c === ">" ? "&gt;" : c === "&" ? "&amp;" : c;

interface QueueItem {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
}

class Scramble {
  private el: HTMLElement;
  private queue: QueueItem[] = [];
  private frame = 0;
  private raf = 0;

  constructor(el: HTMLElement) {
    this.el = el;
    this.update = this.update.bind(this);
  }

  set(text: string, spread: number) {
    const from = this.el.textContent ?? "";
    const len = Math.max(from.length, text.length);
    this.queue = [];
    for (let i = 0; i < len; i++) {
      const a = from[i] ?? "";
      const b = text[i] ?? "";
      if (a === b) {
        this.queue.push({ from: a, to: b, start: 0, end: 0 }); // unchanged → instant
      } else {
        const start = Math.floor(Math.random() * spread);
        const end = start + spread + Math.floor(Math.random() * spread);
        this.queue.push({ from: a, to: b, start, end });
      }
    }
    cancelAnimationFrame(this.raf);
    this.frame = 0;
    this.update();
  }

  private update() {
    let out = "";
    let done = 0;
    for (const item of this.queue) {
      if (this.frame >= item.end) {
        done++;
        out += escapeChar(item.to);
      } else if (this.frame >= item.start) {
        if (!item.char || Math.random() < 0.3) {
          item.char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        out += `<span class="dud">${escapeChar(item.char)}</span>`;
      } else {
        out += escapeChar(item.from);
      }
    }
    this.el.innerHTML = out;
    if (done === this.queue.length) return;
    this.frame++;
    this.raf = requestAnimationFrame(this.update);
  }
}

const instances = new WeakMap<HTMLElement, Scramble>();

/** Scramble `el` from its current text to `text`. `spread` tunes speed (frames). */
export function scrambleText(el: HTMLElement, text: string, spread = 14) {
  if (prefersReduced) {
    el.textContent = text;
    return;
  }
  let inst = instances.get(el);
  if (!inst) {
    inst = new Scramble(el);
    instances.set(el, inst);
  }
  inst.set(text, spread);
}
