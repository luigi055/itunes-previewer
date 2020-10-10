import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { ComponentWithTheme, Random } from "test-utils";
import SearchInput from "./search-input";
import userEvent from "@testing-library/user-event";

const searchInputTestId = "search-input-element";
const searchButtonTestId = "search-button";
const magnifyingIconSelector = "[data-testid='magnifying-glass-icon']";

describe("Testing the SearchInput Component", () => {
  beforeEach(cleanup);

  describe("testing main behavior", () => {
    it("should show the magnifying glass icon in the button", () => {
      const { getByTestId } = render(
        <ComponentWithTheme>
          <SearchInput handleSubmit={() => {}} />
        </ComponentWithTheme>
      );
      const searchButton = getByTestId(searchButtonTestId);

      expect(searchButton).toContainHTML("svg");
      expect(
        searchButton.querySelector(magnifyingIconSelector)
      ).toBeInTheDocument();
    });

    it("should be empty when the component has not defined a initialValue", () => {
      render(
        <ComponentWithTheme>
          <SearchInput handleSubmit={() => {}} />
        </ComponentWithTheme>
      );
      const { getByTestId } = screen;
      const searchInput = getByTestId(searchInputTestId);

      expect(searchInput).toHaveValue("");
    });

    it("should show the text defined by the initialValue property", () => {
      const randomText = Random.getString();
      render(
        <ComponentWithTheme>
          <SearchInput initialValue={randomText} handleSubmit={() => {}} />
        </ComponentWithTheme>
      );
      const { getByTestId } = screen;
      const searchInput = getByTestId(searchInputTestId);

      expect(searchInput).toHaveValue(randomText);
    });

    it("should edit the initialValue", () => {
      const randomText = Random.getString();
      const randomTextToChange = Random.getString();
      render(
        <ComponentWithTheme>
          <SearchInput initialValue={randomText} handleSubmit={() => {}} />
        </ComponentWithTheme>
      );
      const { getByTestId } = screen;
      const searchInput = getByTestId(searchInputTestId);

      userEvent.type(searchInput, randomTextToChange);

      expect(searchInput).toHaveValue(randomTextToChange);
    });

    it("should get the value when the user enter a value and press enter", () => {
      const spyHandler = jest.fn();
      render(
        <ComponentWithTheme>
          <SearchInput handleSubmit={spyHandler} />
        </ComponentWithTheme>
      );
      const { getByTestId } = screen;
      const searchInput = getByTestId(searchInputTestId);
      const searchButton = getByTestId(searchButtonTestId);
      const randomText = Random.getString();

      userEvent.type(searchInput, randomText);
      fireEvent.click(searchButton);

      expect(spyHandler).toHaveBeenCalledWith(randomText);
    });
  });
});
