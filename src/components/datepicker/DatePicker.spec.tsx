import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import InputDate from "./DatePIcker";

describe("InputDate", () => {
  it("renders the DatePicker component", () => {
    const { container } = render(
      <InputDate onChangeDate={vi.fn()} currentDate={new Date("2023-01-01")} />
    );

    expect(container).toMatchSnapshot();
  });
});
