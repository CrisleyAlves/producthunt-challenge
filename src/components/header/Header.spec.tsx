import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Header from "./Header";

describe("Header", () => {
  const mockHandleOnChangeDate = vi.fn();
  const mockSetShowSearchForm = vi.fn();
  const postDate = new Date("2023-01-01");

  it("renders avatar, date picker, and search button", () => {
    const { container } = render(
      <Header
        handleOnChangeDate={mockHandleOnChangeDate}
        postDate={postDate}
        setShowSearchForm={mockSetShowSearchForm}
      />
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByAltText(/profile avatar/i)).toBeDefined();
    expect(screen.getByRole("textbox")).toBeDefined();
    expect(screen.getByRole("button")).toBeDefined();
  });

  it("calls setShowSearchForm when search button is clicked", () => {
    render(
      <Header
        handleOnChangeDate={mockHandleOnChangeDate}
        postDate={postDate}
        setShowSearchForm={mockSetShowSearchForm}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockSetShowSearchForm).toHaveBeenCalled();
  });
});
