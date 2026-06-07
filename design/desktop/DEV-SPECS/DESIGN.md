---
name: Astro-Minimalist Archive
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e2bfb0'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a98a7d'
  outline-variant: '#5a4136'
  surface-tint: '#ffb693'
  primary: '#ffb693'
  on-primary: '#561f00'
  primary-container: '#ff6b00'
  on-primary-container: '#572000'
  inverse-primary: '#a04100'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#989999'
  on-tertiary-container: '#2f3132'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-xl-mobile:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: '0'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 0.05em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is built upon a philosophy of high-fidelity reductionism, merging the precision of vintage aerospace interfaces with modern minimalist digital standards. It targets a professional, design-conscious audience that values technical clarity and editorial sophistication.

The aesthetic follows a **Minimalist-Retro** trajectory. It utilizes deep, "void" blacks to create an infinite canvas, punctuated by hyper-legible monospaced typography and disciplined geometric accents. The emotional response is one of calm authority, intellectual rigor, and timelessness. By stripping away decorative gradients and soft shadows in favor of structural lines and purposeful whitespace, the design system emphasizes the content as the primary artifact.

## Colors

The palette is strictly controlled to maintain visual focus and "space-age" authenticity.

- **Primary (#ff6b00):** A vivid "Safety Orange" used exclusively for critical interactions, status indicators, and subtle branding accents. It serves as a high-contrast beacon against the dark void.
- **Secondary (#0a0a0a):** "Deep Space Black." This is the foundational surface color, providing a non-reflective, immersive background that eliminates visual noise.
- **Tertiary (#ffffff):** Pure white, reserved for high-priority typography and structural lines.
- **Neutral (#1a1a1a / #333333):** Subtle greys used for borders, secondary labels, and UI backgrounds to provide depth without breaking the minimalist constraint.

## Typography

Typography is the core structural element of this design system. We utilize **JetBrains Mono** across all roles to evoke the feeling of technical documentation and mission-control interfaces.

- **Headlines:** Use tight letter-spacing for large titles to create a high-impact, editorial feel. 
- **Labels:** Always utilize uppercase with increased letter-spacing for a "technical tag" appearance.
- **Hierarchy:** Contrast is achieved through weight and size rather than font switching. White text should be used for primary content, while 60% opacity white should be used for secondary body text to maintain the "black void" hierarchy.

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** with generous, intentional whitespace to signal luxury and precision.

- **Grid:** A 12-column grid is used for desktop, 6 for tablet, and 2 for mobile.
- **Rhythm:** All spacing is derived from an 8px base unit. 
- **Margins:** Desktop views utilize significant side margins (64px+) to keep the content centered and "protected" by the black background.
- **Sectioning:** Vertical gaps between major content blocks are intentionally large (120px+) to allow the eye to rest and to treat each piece of work as a singular exhibit.

## Elevation & Depth

This design system rejects shadows in favor of **Tonal Layers** and **Sharp Outlines**.

- **Surfaces:** Depth is achieved by stepping the background from `#0a0a0a` (Level 0) to `#1a1a1a` (Level 1/Containers).
- **Borders:** All interactive or contained elements use a 1px solid border. Use `#333333` for inactive states and primary orange `#ff6b00` for active or focused states.
- **Glassmorphism:** Use sparingly for navigation overlays. A 20px backdrop-blur with a 10% white tint provides a "viewport glass" effect common in aerospace cockpits.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every UI element—from buttons to card containers to input fields—must feature 90-degree corners. This reinforces the technical, systematic nature of the interface. Circles are permitted only for functional icons or specific status indicators to provide a solitary point of geometric contrast.

## Components

- **Buttons:** Rectangular with 1px white borders. Hover state fills the button with white and flips the text to black. Primary buttons use the orange accent for the border.
- **Cards:** Defined by 1px borders (#333333). No shadows. Content inside cards should have uniform padding (32px) to maintain the minimalist breathability.
- **Inputs:** Simple underline or 1px box. Focus state is indicated by the primary orange color and a subtle "blinking" cursor effect.
- **Chips/Labels:** Small, uppercase mono text inside a 1px bordered box. Used for categorizing technical details of projects.
- **Lists:** Separated by 1px horizontal hair-lines. Bullet points are replaced by small orange squares (4px x 4px).
- **Navigation:** Top-aligned, minimal links. Use a "coordinates" style indicator (e.g., 01 // INDEX) for menu items.