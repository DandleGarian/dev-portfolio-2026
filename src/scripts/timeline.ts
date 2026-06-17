// Specs timeline: expand a clamped description to its full height.
// Height is measured at interaction time (scrollHeight) so it's correct at any
// viewport width and animates smoothly via the CSS max-height transition.
// Delegated at document level so it also covers /specs injected into the drawer.
//   - pointer devices: expand on hover
//   - touch devices: toggle on tap
const canHover =
  typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

function setOpen(card: Element, open: boolean) {
  const desc = card.querySelector<HTMLElement>(".tl-desc");
  if (!desc) return;
  desc.style.maxHeight = open ? `${desc.scrollHeight}px` : "";
  desc.classList.toggle("is-open", open);
}

if (canHover) {
  // mouseover/out (they bubble → delegable); relatedTarget guard mimics enter/leave.
  document.addEventListener("mouseover", (e) => {
    const card = (e.target as Element)?.closest?.(".tl-card");
    if (card && !card.contains(e.relatedTarget as Node)) setOpen(card, true);
  });
  document.addEventListener("mouseout", (e) => {
    const card = (e.target as Element)?.closest?.(".tl-card");
    if (card && !card.contains(e.relatedTarget as Node)) setOpen(card, false);
  });
} else {
  document.addEventListener("click", (e) => {
    const card = (e.target as Element)?.closest?.(".tl-card");
    if (card) {
      const desc = card.querySelector<HTMLElement>(".tl-desc");
      setOpen(card, !desc?.classList.contains("is-open"));
    }
  });
}
