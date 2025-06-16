import { describe, it, expect, vi } from "vitest";
import { scrollToTop } from "./ScrollUtils";

describe("scrollToTop", () => {
  it("calls window.requestAnimationFrame and window.scrollTo with correct arguments", () => {
    const requestAnimationFrameSpy = vi
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((cb: FrameRequestCallback) => {
        cb(0);
        return 1;
      });
    const scrollToSpy = vi
      .spyOn(window, "scrollTo")
      .mockImplementation(() => {});

    scrollToTop();

    expect(requestAnimationFrameSpy).toHaveBeenCalled();
    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });

    requestAnimationFrameSpy.mockRestore();
    scrollToSpy.mockRestore();
  });
});
