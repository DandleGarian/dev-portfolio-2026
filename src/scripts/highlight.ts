// Copy highlight marker: text wrapped in *asterisks* renders in the accent
// colour. Splitting on "*" yields alternating segments — odd ones are the
// highlighted phrases. Pure (no DOM), so both the Astro page (SSR) and the
// tone script (client swap) can share it.
export interface Segment {
  text: string;
  hi: boolean;
}

export function parseHighlight(str: string): Segment[] {
  return str.split("*").map((text, i) => ({ text, hi: i % 2 === 1 }));
}

/** True if the string has a highlight marker (so it needs segment rendering). */
export function hasHighlight(str: string): boolean {
  return str.includes("*");
}
