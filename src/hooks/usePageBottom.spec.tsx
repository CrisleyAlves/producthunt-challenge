import { renderHook, act } from "@testing-library/react";

import usePageBottom from "./usePageBottom";

describe("usePageBottom", () => {
  const originalInnerHeight = window.innerHeight;
  const originalScrollY = window.scrollY;
  const originalOffsetHeight = Object.getOwnPropertyDescriptor(
    document.documentElement,
    "offsetHeight"
  );

  beforeEach(() => {
    window.innerHeight = 600;
    window.scrollY = 0;
    Object.defineProperty(document.documentElement, "offsetHeight", {
      configurable: true,
      value: 2000,
    });
  });

  afterEach(() => {
    window.innerHeight = originalInnerHeight;
    window.scrollY = originalScrollY;
    if (originalOffsetHeight) {
      Object.defineProperty(
        document.documentElement,
        "offsetHeight",
        originalOffsetHeight
      );
    }
  });

  it("returns false when not near the bottom", () => {
    const { result } = renderHook(() => usePageBottom(100));
    act(() => {
      window.scrollY = 0;
      window.dispatchEvent(new Event("scroll"));
    });
    expect(result.current).toBe(false);
  });

  it("returns true when near the bottom", () => {
    const { result } = renderHook(() => usePageBottom(100));
    act(() => {
      window.scrollY = 1400; // 600 + 1400 = 2000 (pageHeight)
      window.dispatchEvent(new Event("scroll"));
    });
    expect(result.current).toBe(true);
  });

  it("cleans up event listener on unmount", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = renderHook(() => usePageBottom(100));
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function)
    );
    removeEventListenerSpy.mockRestore();
  });
});
