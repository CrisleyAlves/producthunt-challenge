import React from "react";
import { render } from "@testing-library/react";
import { describe, expect } from "vitest";
import Avatar from "./Avatar";

describe("Avatar Component", () => {
  it("renders the avatar image with correct src and alt", () => {
    const avatarUrl = "https://example.com/avatar.jpg";
    const altText = "User Avatar";
    const ariaDescription = "This is a user avatar";

    const { container } = render(
      <Avatar
        avatarUrl={avatarUrl}
        altText={altText}
        ariaDescription={ariaDescription}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
