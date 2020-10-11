import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "./search";
import { ConnectedComponent } from "test-utils";

const magnifyingGlassIconTestId = "magnifying-glass-icon";
const emptyPlaylistHeadingTestId = "empty-playlist-heading";
const emptyPlaylistMessage = "Use the search bar to find songs";

describe("Testing the search page", () => {
  it("should show the empty songs message", () => {
    render(
      <ConnectedComponent>
        <Search />
      </ConnectedComponent>,
    );

    const { getByTestId } = screen;

    const magnifyingGlassIcon = getByTestId(magnifyingGlassIconTestId);
    const emptyPlaylistHeading = getByTestId(emptyPlaylistHeadingTestId);

    expect(magnifyingGlassIcon).toBeInTheDocument();
    expect(emptyPlaylistHeading.textContent).toBe(emptyPlaylistMessage);
  });
});
