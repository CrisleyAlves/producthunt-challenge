import { renderHook, act } from "@testing-library/react";

import useFloatingWidget from "./useFloatingWidget";

describe("useFloatingWidget", () => {
  const originalScrollY = window.scrollY;

  beforeEach(() => {
    window.scrollY = 0;
  });

  afterEach(() => {
    window.scrollY = originalScrollY;
  });

  it("returns false when scrollY is less than or equal to 1000", () => {
    const { result } = renderHook(() => useFloatingWidget());
    act(() => {
      window.scrollY = 500;
      window.dispatchEvent(new Event("scroll"));
    });
    expect(result.current).toBe(false);
  });

  it("returns true when scrollY is greater than 1000", () => {
    const { result } = renderHook(() => useFloatingWidget());
    act(() => {
      window.scrollY = 1200;
      window.dispatchEvent(new Event("scroll"));
    });
    expect(result.current).toBe(true);
  });

  it("removes scroll event listener on unmount", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = renderHook(() => useFloatingWidget());
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function)
    );
    removeEventListenerSpy.mockRestore();
  });
});
