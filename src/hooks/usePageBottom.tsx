import { useEffect, useState } from "react";

/**
 * Custom React hook that determines if the user has scrolled near the bottom of the page.
 *
 * @param threshold - The distance in pixels from the bottom of the page at which the hook considers the user to be "at the bottom". Defaults to 1000.
 * @returns A boolean indicating whether the user is within the specified threshold from the bottom of the page.
 *
 * @example
 * const isBottom = usePageBottom(300);
 * if (isBottom) {
 *   // Load more content or trigger an action
 * }
 */
export default function usePageBottom(threshold = 1000) {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.offsetHeight;
      setIsBottom(pageHeight - scrollPosition < threshold);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isBottom;
}
