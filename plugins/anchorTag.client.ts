/**
 * Get the anchor tag from the element or its parent
 *
 * @param element - The element to check
 *
 * @returns The anchor tag or null
 */
function getAnchorTag(element: HTMLElement): HTMLAnchorElement | null {
  if (element.tagName === "A") return element as HTMLAnchorElement;

  if (element.parentElement) return getAnchorTag(element.parentElement);

  return null;
}

/** This Plugin used to make the anchor tag work like a nuxt-link tag */
export default defineNuxtPlugin({
  async setup() {
    document.addEventListener("click", (e) => {
      const clickTarget = e.target as HTMLElement;

      const anchorTag = getAnchorTag(clickTarget);

      // check if the anchor is not null
      if (!anchorTag) return;

      // check if the anchor has a target attribute
      if (anchorTag.target) return;

      // check if the anchor has a download attribute
      if (anchorTag.hasAttribute("download")) return;

      // check if the anchor is pointing to the same origin
      if (anchorTag.href.indexOf(window.location.origin) !== 0) return;

      // prevent the default behavior
      e.preventDefault();

      const href = anchorTag.href;

      const hrefPathname = new URL(href).pathname;

      navigateTo(hrefPathname);
    });
  },
});
