import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PostListUI from "./PostListUI";

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
  {
    cursor: "cursor2",
    node: {
      name: "Test Post 2",
      tagline: "Second test post",
      votesCount: 99,
      url: "https://example.com/2",
      thumbnail: { url: "https://example.com/img2.png" },
    },
  },
];

describe("PostListUI", () => {
  it("renders a list of posts", () => {
    render(<PostListUI posts={MOCKED_POSTS} />);
    expect(screen.getByText("Test Post 1")).toBeDefined();
    expect(screen.getByText("Test Post 2")).toBeDefined();
    expect(screen.getByText("First test post")).toBeDefined();
    expect(screen.getByText("Second test post")).toBeDefined();
    expect(screen.getAllByText("visit")).toHaveLength(2);
    expect(screen.getByText("42")).toBeDefined();
    expect(screen.getByText("99")).toBeDefined();
  });

  it("renders empty list when posts is empty", () => {
    const { container } = render(<PostListUI posts={[]} />);
    expect(container.querySelectorAll("li").length).toBe(0);
  });

  it("renders without crashing when posts prop is undefined", () => {
    const { container } = render(<PostListUI />);
    expect(container.querySelectorAll("li").length).toBe(0);
  });
});
