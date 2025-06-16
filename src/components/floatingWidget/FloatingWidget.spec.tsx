import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import * as ScrollUtils from "../../utils/ScrollUtils";
import FloatingWidget from "./FloatingWidget";

describe("FloatingWidget", () => {
  it("renders the floating widget button", () => {
    const { container } = render(<FloatingWidget />);

    expect(container).toMatchSnapshot();
  });

  it("calls scrollToTop when button is clicked", () => {
    const scrollToTopSpy = vi
      .spyOn(ScrollUtils, "scrollToTop")
      .mockImplementation(() => {});
    render(<FloatingWidget />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(scrollToTopSpy).toHaveBeenCalled();
    scrollToTopSpy.mockRestore();
  });
});
