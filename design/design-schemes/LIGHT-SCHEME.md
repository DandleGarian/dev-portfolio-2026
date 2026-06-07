---
name: Astro-Minimalist Archive (Light)
colors:
  surface: '#faf9f9'
  surface-dim: '#dadada'
  surface-bright: '#faf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeed'
  surface-container-high: '#e9e8e8'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c8'
  surface-tint: '#5d5f5f'
  primary: '#5d5f5f'
  on-primary: '#ffffff'
  primary-container: '#f5f5f5'
  on-primary-container: '#6f7070'
  inverse-primary: '#c6c6c7'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#a04100'
  on-tertiary: '#ffffff'
  tertiary-container: '#fff3ef'
  on-tertiary-container: '#bd4d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb693'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7a3000'
  background: '#faf9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e3e2e2'
typography:
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  gutter: 16px
  margin: 24px
---

## Brand & Style
This design system adapts a technical, space-faring aesthetic for high-legibility, document-centric environments. It evokes the feeling of a physical technical manual or a high-fidelity diagnostic printout. The brand personality is precise, utilitarian, and archival, targeting developers, engineers, and researchers who require clarity without sacrificing a distinct "instrumentation" feel.

The style is a hybrid of **Minimalism** and **Modern Brutalism**. It utilizes expansive white space (the "void") and hairline strokes to create a sense of structural integrity. By reversing the traditional dark-mode terminal aesthetic, we achieve a "Blueprint" or "Technical Paper" look that remains unmistakably technical while being easier on the eyes in well-lit environments.

## Colors
The palette is restricted to a high-contrast, functional range to mimic technical documentation.

- **Primary (#F5F5F5):** The "Paper" surface. A warm, off-white gray that reduces screen glare while providing a clean backdrop for technical lines.
- **Secondary (#131313):** The "Ink." Used for all primary typography, borders, and structural icons. It provides maximum contrast and a sharp, digital-ink feel.
- **Tertiary (#FF6B00):** The "Warning/Action" accent. Reserved for focus states, primary calls to action, and critical status indicators. 
- **Neutral (#A0A0A0):** Used for secondary metadata, disabled states, and subtle grid lines.

## Typography
Typography is the core of this design system. We use **JetBrains Mono** exclusively to maintain a monospaced, technical rhythm across all content levels.

- **Headlines:** Set with tight tracking and heavy weights. They should feel like section headers in a hardware specification sheet.
- **Body:** Open and legible. The monospaced nature ensures that data columns and text blocks align with mathematical precision.
- **Labels:** Small caps are used for metadata and utility labels to create a clear visual distinction from prose.
- **Emphasis:** Use the tertiary orange sparingly for inline links or critical keywords within a block of text.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy, behaving like a printed schematic. 

- **Grid:** A 12-column grid on desktop, 6-column on tablet, and 2-column on mobile.
- **Modular Rhythm:** All spacing is based on a 4px baseline. Use `lg` (32px) and `xl` (64px) for major section breathing room to maintain the minimalist "Archive" feel.
- **Borders as Spacers:** Instead of using invisible margins, use 1px solid lines (#131313 at 10% opacity) to separate content blocks, reinforcing the "Technical Drawing" aesthetic.

## Elevation & Depth
This design system rejects traditional shadows in favor of **Tonal Layering** and **Line-Based Hierarchy**.

- **Level 0 (Base):** #F5F5F5. The primary canvas.
- **Level 1 (Surfaces):** #FFFFFF (Pure White). Used for cards or modals to make them "pop" slightly against the off-white background.
- **Interaction Depth:** Instead of shadows, use "Inverted Fills." When an element is active or elevated, it switches from a 1px outline to a solid #131313 fill with #F5F5F5 text.
- **Outlines:** Use 1px or 2px solid strokes for all containers. No blurs or soft edges are permitted.

## Shapes
The shape language is strictly **Sharp (0px)**. 

Every element—buttons, inputs, cards, and containers—must have 90-degree corners. This reinforces the "archival" and "industrial" nature of the design. The only exception is for circular status dots or specific iconography that requires organic curves for clarity. All containers are defined by 1px strokes.

## Components
- **Buttons:** Primary buttons are solid #131313 with #F5F5F5 text. Secondary buttons are 1px #131313 outlines. Hover states trigger a shift to #FF6B00 for both text and border.
- **Input Fields:** Rectangular boxes with a 1px #131313 border. Labels sit above the input in `label-caps`. Focus state changes the border to 2px #FF6B00.
- **Chips/Tags:** Small rectangular boxes with 1px borders. Use #FF6B00 text for active filters.
- **Cards:** Simple 1px #131313 outlined boxes. No padding on the outer edge of the card if it contains a header—the header should be separated by a horizontal 1px line.
- **Data Tables:** High-density, using 1px horizontal lines only. The header row should be #131313 with #F5F5F5 text to anchor the data.
- **Progress Bars:** Solid #131313 background track with a #FF6B00 fill. Use segmented blocks for a "loading" or "telemetry" feel.