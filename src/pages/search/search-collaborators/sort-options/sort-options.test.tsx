import React from 'react';
import { render, screen } from "@testing-library/react"
import { sortQueryStringOptions } from "application/routes-config"
import SortOptions from './sort-options';
import userEvent from '@testing-library/user-event';

const sortOptionsSelectTestId= "sort-options-select";

describe("Testing the SortOptions component", () => {
  let handleChangeSpy: Function;
  beforeEach(() => {
    handleChangeSpy = jest.fn();
    render(<SortOptions defaultValue={sortQueryStringOptions.unsorted} handleChange={(event) => {handleChangeSpy(event.currentTarget.value);}}/>);
  })

  it("should show the default value", () => {
    const {getByTestId} = screen;

    expect(getByTestId(sortOptionsSelectTestId).value).toBe(sortQueryStringOptions.unsorted);
  });

  it.each([
    [sortQueryStringOptions.sortByGenre],
    [sortQueryStringOptions.sortByPrice],
    [sortQueryStringOptions.sortByDuration],
    [sortQueryStringOptions.unsorted],
  ])("should change value to %s option when select this option", (sortOption: string) => {
    const {getByTestId} = screen;
    const sortOptionSelect = getByTestId(sortOptionsSelectTestId);

    userEvent.selectOptions(sortOptionSelect, sortOption);

    expect(sortOptionSelect.value).toBe(sortOption);
  });

  it.each([
    [sortQueryStringOptions.sortByGenre],
    [sortQueryStringOptions.sortByPrice],
    [sortQueryStringOptions.sortByDuration],
    [sortQueryStringOptions.unsorted],
  ])("should event sent %s when the user changes the option", (sortOption: string) => {
    const {getByTestId} = screen;
    const sortOptionSelect = getByTestId(sortOptionsSelectTestId);

    userEvent.selectOptions(sortOptionSelect, sortOption);

    expect(handleChangeSpy).toHaveBeenCalledWith(sortOption);
  });

});
