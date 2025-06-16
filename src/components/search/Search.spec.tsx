import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Search from "./Search";

describe("Search", () => {
  it("renders the search input and clear button", () => {
    const { container } = render(
      <Search
        showSearchForm={true}
        onClickClearSearchForm={vi.fn()}
        handleOnSubmitSearchForm={vi.fn()}
      />
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByRole("textbox", { name: "" })).toBeDefined();
    expect(screen.getByRole("button", { name: /clear/i })).toBeDefined();
  });

  it("calls onClickClearSearchForm when clear button is clicked", () => {
    const onClickClearSearchForm = vi.fn();
    render(
      <Search
        showSearchForm={true}
        onClickClearSearchForm={onClickClearSearchForm}
        handleOnSubmitSearchForm={vi.fn()}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: /clear/i }));
    expect(onClickClearSearchForm).toHaveBeenCalled();
  });

  it("applies active class when showSearchForm is true", () => {
    const { container } = render(
      <Search
        showSearchForm={true}
        onClickClearSearchForm={vi.fn()}
        handleOnSubmitSearchForm={vi.fn()}
      />
    );
    expect(container).toMatchSnapshot();
    expect(container.firstChild.className).toContain("search__wrapper--active");
  });

  it("does not apply active class when showSearchForm is false", () => {
    const { container } = render(
      <Search
        showSearchForm={false}
        onClickClearSearchForm={vi.fn()}
        handleOnSubmitSearchForm={vi.fn()}
      />
    );
    expect(container.firstChild.className).not.toContain(
      "search__wrapper--active"
    );
  });
});
