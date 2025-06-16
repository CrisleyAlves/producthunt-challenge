import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { POST_ORDER_TYPE } from "../config/constants";
import PostsUI from "./PostsUI";

const MOCKED_POSTS = [
  {
    cursor: "cursor1",
    node: {
      name: "Test Post 1",
      tagline: "First test post",
      votesCount: 42,
      url: "https://example.com/1",
      thumbnail: { url: "https://example.com/img1.png" },
    },
  },
];

describe("PostsUI", () => {
  const defaultProps = {
    setShowSearchForm: vi.fn(),
    onClickClearSearchForm: vi.fn(),
    onSubmitSearchForm: vi.fn(),
    selectedTab: POST_ORDER_TYPE.POPULAR.label,
    onClickTabItem: vi.fn(),
    onChangeDate: vi.fn(),
    posts: MOCKED_POSTS,
    postDate: new Date("2023-01-01"),
    showSearchForm: false,
  };

  it("renders header, search, tab, and post list", () => {
    render(<PostsUI {...defaultProps} />);
    expect(screen.getByAltText(/profile avatar/i)).toBeDefined();
    expect(screen.getByText("Test Post 1")).toBeDefined();
    expect(screen.getByText("First test post")).toBeDefined();
    expect(screen.getByText("Popular")).toBeDefined();
    expect(screen.getByText("Newest")).toBeDefined();
  });

  it("calls onClickTabItem when a tab is clicked", () => {
    render(<PostsUI {...defaultProps} />);
    const newestTab = screen.getByText("Newest");
    fireEvent.click(newestTab);
    expect(defaultProps.onClickTabItem).toHaveBeenCalledWith(
      POST_ORDER_TYPE.NEWEST.label
    );
  });

  it("calls onClickClearSearchForm when clear button is clicked", () => {
    render(<PostsUI {...defaultProps} showSearchForm={true} />);
    const clearButton = screen.getByRole("button", { name: /clear/i });
    fireEvent.click(clearButton);
    expect(defaultProps.onClickClearSearchForm).toHaveBeenCalled();
  });
});
