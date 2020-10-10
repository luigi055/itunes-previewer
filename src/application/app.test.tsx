import { render } from "@testing-library/react";
import React from "react";
import App from "./app";

describe("Test application core", () => {
  it("should render properly", () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();
  });
});
