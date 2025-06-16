import { describe, it, expect } from "vitest";
import * as constants from "./constants";

describe("constants", () => {
  it("should match the constants snapshot", () => {
    expect(constants).toMatchSnapshot();
  });
});
