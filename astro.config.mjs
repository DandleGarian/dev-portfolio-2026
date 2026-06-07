// @ts-check
import { defineConfig } from "astro/config";

// Static output (default). Deploys to Netlify as plain HTML — no adapter
// needed; the contact form uses Netlify Forms. Set `site` once the domain
// is known (used for canonical URLs / sitemap).
//
// Tailwind v4 is wired via PostCSS (see postcss.config.mjs) rather than the
// @tailwindcss/vite plugin, which is currently incompatible with Astro 6's
// rolldown-vite. Revisit the Vite plugin once that's fixed upstream.
export default defineConfig({
  // site: "https://terminal-velocity.netlify.app",
});
