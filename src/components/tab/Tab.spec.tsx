import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { POST_ORDER_TYPE } from "../../config/constants";
import Tab from "./Tab";

describe("Tab", () => {
  it("renders both Popular and Newest tab buttons", () => {
    render(
      <Tab
        selectedTab={POST_ORDER_TYPE.POPULAR.label}
        onClickTabItem={vi.fn()}
      />
    );
    expect(screen.getByText("Popular")).toBeDefined();
    expect(screen.getByText("Newest")).toBeDefined();
  });

  it("applies active class to the selected tab", () => {
    const { rerender } = render(
      <Tab
        selectedTab={POST_ORDER_TYPE.POPULAR.label}
        onClickTabItem={vi.fn()}
      />
    );
    expect(screen.getByText("Popular").className).toMatch(/tab__item--active/);
    expect(screen.getByText("Newest").className).not.toMatch(
      /tab__item--active/
    );

    rerender(
      <Tab
        selectedTab={POST_ORDER_TYPE.NEWEST.label}
        onClickTabItem={vi.fn()}
      />
    );
    expect(screen.getByText("Newest").className).toMatch(/tab__item--active/);
    expect(screen.getByText("Popular").className).not.toMatch(
      /tab__item--active/
    );
  });

  it("calls onClickTabItem with correct label when a tab is clicked", () => {
    const onClickTabItem = vi.fn();
    render(
      <Tab
        selectedTab={POST_ORDER_TYPE.POPULAR.label}
        onClickTabItem={onClickTabItem}
      />
    );
    fireEvent.click(screen.getByText("Newest"));
    expect(onClickTabItem).toHaveBeenCalledWith(POST_ORDER_TYPE.NEWEST.label);

    fireEvent.click(screen.getByText("Popular"));
    expect(onClickTabItem).toHaveBeenCalledWith(POST_ORDER_TYPE.POPULAR.label);
  });
});
