/**
 * @description Uses `window.requestAnimationFrame` to ensure the scroll action
 * is performed in the next animation frame for better performance.
 */
export function scrollToTop() {
  window.requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
