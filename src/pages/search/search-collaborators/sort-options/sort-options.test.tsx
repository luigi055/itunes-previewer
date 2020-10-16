import React from "react";
import { render, screen } from "@testing-library/react";
import { queryStringSortOptions } from "application/routes-config";
import SortOptions from "./sort-options";
import userEvent from "@testing-library/user-event";

const sortOptionsSelectTestId = "sort-options-select";

describe("Testing the SortOptions component", () => {
  it("should show the default value", () => {
    render(
      <SortOptions
        value={queryStringSortOptions.unsorted}
        onOptionChange={jest.fn()}
      />
    );
    const { getByTestId } = screen;

    expect(getByTestId(sortOptionsSelectTestId).value).toBe(
      queryStringSortOptions.unsorted
    );
  });

  it.each([
    [queryStringSortOptions.sortByGenre],
    [queryStringSortOptions.sortByPrice],
    [queryStringSortOptions.sortByDuration],
    [queryStringSortOptions.unsorted],
  ])(
    "should change value to %s option when select this option",
    (sortOption: string) => {
      render(<SortOptions value={sortOption} onOptionChange={jest.fn()} />);
      const { getByTestId } = screen;
      const sortOptionSelect = getByTestId(sortOptionsSelectTestId);

      userEvent.selectOptions(sortOptionSelect, sortOption);

      expect(sortOptionSelect.value).toBe(sortOption);
    }
  );

  describe("Testing the onOptionChange property", () => {
    let handleChangeSpy: Function;
    beforeEach(() => {
      handleChangeSpy = jest.fn();
      render(
        <SortOptions
          value={queryStringSortOptions.unsorted}
          onOptionChange={handleChangeSpy}
        />
      );
    });

    it.each([
      [queryStringSortOptions.sortByGenre],
      [queryStringSortOptions.sortByPrice],
      [queryStringSortOptions.sortByDuration],
      [queryStringSortOptions.unsorted],
    ])(
      "should event sent %s when the user changes the option",
      (sortOption: string) => {
        const { getByTestId } = screen;
        const sortOptionSelect = getByTestId(sortOptionsSelectTestId);

        userEvent.selectOptions(sortOptionSelect, sortOption);

        expect(handleChangeSpy).toHaveBeenCalledWith(sortOption);
      }
    );
  });
});
