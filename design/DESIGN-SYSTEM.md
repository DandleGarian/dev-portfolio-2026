# TERMINAL_VELOCITY — Design System (Single Source of Truth)

> This file is the canonical design system. When the Stitch exports in
> `design/desktop/**` and `design/mobile/**` disagree with this file, **this file wins**.
> The per-folder `DESIGN.md` files are an identical generic Stitch template and are **not**
> authoritative — ignore them for tokens.

**Status**
- **Dark mode is the source of truth** and is fully specified below.
- **Light mode is provisional.** Build dark first; light is derived by inverting the dark
  system and hand-tuning. Light values here are a starting point, not final.
- Aesthetic: minimalist / modern-brutalist, "technical instrumentation." Sharp 0px corners,
  1px hairline borders, no shadows, monospace everything.

---

## 1. Token architecture (the "global config")

All visual values live in **CSS custom properties** under `:root`, so colors and sizes can be
re-tuned in one place. Theme switching is a `data-theme` attribute on `<html>`. Any framework
(Tailwind, vanilla, Astro, etc.) maps its utilities onto these variables — the variables are the
source, the framework config is a thin mapping layer.

```css
:root,
:root[data-theme="dark"] {
  /* ---- color ---- */
  --color-bg:            #131313; /* base canvas / background */
  --color-surface:       #1c1b1b; /* raised container (cards, panels) */
  --color-surface-2:     #20201f; /* second elevation step */
  --color-border:        #353535; /* default 1px hairline (inactive) */
  --color-border-active: #ff6b00; /* focus / active / hover border */
  --color-text:          #e5e2e1; /* primary text */
  --color-text-muted:    rgba(229,226,225,0.6); /* secondary text — 60% per spec */
  --color-primary:       #ff6b00; /* THE accent (renamed from primary-container) */
  --color-primary-tint:  #ffb693; /* soft orange (old "primary"); hover/secondary use only */
  --color-on-primary:    #131313; /* text/icon on a solid orange fill */
  --color-error:         #ffb4ab;
  --color-error-bg:      #93000a;
}

:root[data-theme="light"] {
  /* PROVISIONAL — refine when light mode is built. Accent stays the same orange. */
  --color-bg:            #faf9f9;
  --color-surface:       #ffffff;
  --color-surface-2:     #f4f3f3;
  --color-border:        #c4c7c8;
  --color-border-active: #ff6b00;
  --color-text:          #1a1c1c;
  --color-text-muted:    rgba(26,28,28,0.6);
  --color-primary:       #ff6b00;
  --color-primary-tint:  #ffb693;
  --color-on-primary:    #ffffff;
  --color-error:         #ba1a1a;
  --color-error-bg:      #ffdad6;
}
```

> **Resolved naming:** the accent you actually use everywhere (`#ff6b00`) is now `--color-primary`.
> The old peach `primary` (`#ffb693`) is demoted to `--color-primary-tint` (hover/secondary only).
> When porting the Stitch pages, find/replace `primary-container` → `primary` and audit any bare
> `primary` (peach) usage.

---

## 2. Color — semantic reference (dark, authoritative)

| Token | Dark | Role |
|---|---|---|
| `--color-bg` | `#131313` | Base canvas. (Spec prose says "#0a0a0a"; the implemented/authoritative value is `#131313`.) |
| `--color-surface` | `#1c1b1b` | Cards, panels, raised containers |
| `--color-surface-2` | `#20201f` | Second elevation step |
| `--color-border` | `#353535` | Default 1px border (inactive) |
| `--color-border-active` | `#ff6b00` | Focus / active / hover border |
| `--color-text` | `#e5e2e1` | Primary text, structural lines |
| `--color-text-muted` | `60% text` | Secondary/meta text |
| `--color-primary` | `#ff6b00` | Accent: CTAs, focus, status, inline emphasis. Use sparingly. |
| `--color-primary-tint` | `#ffb693` | Soft accent for hover/secondary only |
| `--color-on-primary` | `#131313` | Text/icon on a solid orange fill |
| `--color-error` / `--color-error-bg` | `#ffb4ab` / `#93000a` | Errors |

Depth is **tonal layering + lines only** — no shadows, no blur (one exception: a 20px backdrop-blur
glass nav overlay, used sparingly).

---

## 3. Typography (authoritative — dark scale)

**Font:** `JetBrains Mono` (weights 400 / 500 / 700) for everything. **Icons:** `Material Symbols Outlined`.
No second text typeface. (Earlier note about "Inter" was a false positive — it is not loaded.)

| Token | Size | Weight | Line | Tracking | Notes |
|---|---|---|---|---|---|
| `headline-xl` | 48px | 700 | 1.1 | -0.04em | desktop hero |
| `headline-xl-mobile` | 32px | 700 | 1.2 | -0.02em | mobile hero |
| `headline-lg` | 32px | 500 | 1.2 | -0.02em | section titles |
| `headline-md` | 24px | 500 | 1.3 | 0 | sub-section |
| `body-lg` | 18px | 400 | 1.6 | 0 | lead body |
| `body-md` | 16px | 400 | 1.6 | 0 | default body |
| `label-md` | 14px | 500 | 1.0 | 0.1em | UPPERCASE labels/tags |
| `label-sm` | 12px | 400 | 1.0 | 0.05em | UPPERCASE meta |

- Default body text token: **`body-md`** (recommended default — *open item, see §8*).
- Labels/tags are always UPPERCASE.
- The light scheme's old 4px-era scale (700-weight `headline-lg`, `body-sm`, `label-caps`, `code`)
  is **retired** — light mode uses this same scale.

---

## 4. Spacing & layout (authoritative — 8px base)

**Base unit = 8px.** Everything is a multiple. The 4px baseline from the old light scheme is retired.

| Step | px | Common use |
|---|---|---|
| `unit-1` | 8 | tight gaps |
| `unit-2` | 16 | inner padding |
| `unit-3` | 24 | gutter / standard padding |
| `unit-4` | 32 | card padding (default) |
| `unit-6` | 48 | block spacing |
| `unit-8` | 64 | large breaks / desktop side margin |
| `unit-12` | 96 | — |
| `unit-15` | 120 | section gap |

- **Grid:** 12-col desktop · 6-col tablet · 2-col mobile.
- **Container max:** 1280px.
- **Side margins:** mobile 20px · desktop 64px.
- **Section gap:** 120px between major blocks.
- **Resolved (mixed scales):** use the `unit-*` scale everywhere. Do **not** mix raw Tailwind
  spacing (`mb-8`, `mb-6`…) with `mb-unit-8` — they are different pixel values. When porting,
  map Tailwind defaults to the unit scale (`mb-8` 32px → `unit-4`, etc.).

---

## 5. Shape, borders, components

- **Corners:** strictly **0px** on every element. Circles only for status dots / functional icons.
- **Borders:** 1px solid `--color-border` (inactive); 2px `--color-border-active` (focus/active).
  No shadows, no soft edges.
- **Buttons:** rectangular, 1px border. Primary = orange border. Hover = fill (white in dark / ink
  in light) with flipped text. Solid orange fills use `--color-on-primary` for text.
- **Cards:** 1px `--color-border`, uniform `unit-4` (32px) padding, no shadow. Header separated by a
  1px line, not padding.
- **Inputs:** 1px box, label above in `label-md`. Focus → 2px orange border + blinking cursor.
- **Chips/tags:** small 1px-bordered box, UPPERCASE mono. Active filter text = orange.
- **Lists:** separated by 1px hairlines; bullets are 4px orange squares.
- **Nav:** top-aligned coordinate links (see §6). Optional glass overlay (20px blur) sparingly.
- **Data tables / progress bars:** 1px horizontal rules; header row inverted; orange fill on a
  dark track, segmented "telemetry" feel.

---

## 6. Page vocabulary (resolved)

**Nav labels stay short** (the coordinate system). **Page H1 + browser title use the long names**
(desktop copy wins and is extended to mobile). All UPPERCASE_SNAKE.

| Page | Nav label | H1 (canonical) | `<title>` |
|---|---|---|---|
| Home | `01 // INDEX` | `SYSTEM_BOOT: HELLO_WORLD` | `TERMINAL_VELOCITY // INDEX` |
| Work | `02 // WORK` | `02 // WORK_ARCHIVE` | `TERMINAL_VELOCITY // WORK_ARCHIVE` |
| Specs | `03 // SPECS` | `03 // UNIT_SPECIFICATIONS` | `TERMINAL_VELOCITY // UNIT_SPECIFICATIONS` |
| Contact | `04 // SEND` | `04 // DATA_TRANSMISSION` | `TERMINAL_VELOCITY // DATA_TRANSMISSION` |

- **Title format is fixed:** `TERMINAL_VELOCITY // <NAME>`. Retire the `:` / `-` / "Contact Uplink" /
  spaced-word variants.
- **Heading case is fixed:** UPPER_SNAKE_CASE. Retire mobile Specs' Title-Case "Developer Specs".
- Mobile H1 copy is replaced by the desktop H1 copy above.

---

## 7. Build order

1. Dark mode, page by page, all tokens via the `:root[data-theme="dark"]` config.
2. When dark is locked, add the `[data-theme="light"]` overrides and hand-tune (light is provisional).
3. Normalise the Stitch exports against §3–§6 as each page is built (don't pre-edit them all).

---

## 8. Open items (decide later)

- **Default body font token** — recommending `body-md`; confirm when building (`§3`).
- **Light palette** — values in §1 are provisional; refine after dark is built.
- **Per-component spacing audit** — confirm `unit-*` mapping holds once the first page is ported.
