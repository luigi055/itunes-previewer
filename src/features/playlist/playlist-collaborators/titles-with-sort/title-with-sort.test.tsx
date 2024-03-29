import React from "react";
import { render, screen } from "@testing-library/react";
import { queryStringSortOptions } from "application/routes-config";
import TitleWithSort from "./title-with-sort";
import userEvent from "@testing-library/user-event";

const headingDurationButtonTestId = "heading-duration-button";
const headingGenreButtonTestId = "heading-genre-button";
const headingPriceButtonTestId = "heading-price-button";
const playListHeadings = {
  SONG: "Song",
  ARTIST: "Artist",
  ALBUM: "Album",
  DURATION: "Duration",
  GENRE: "Genre",
  PRICE: "Price",
};

describe("Testing the SortOptions component", () => {
  let handleOptionChangeSpy: Function;
  beforeEach(() => {
    handleOptionChangeSpy = jest.fn();
    render(<TitleWithSort onOptionChange={handleOptionChangeSpy} />);
  });

  it("should show all the head labels in the document", () => {
    const { getByText } = screen;

    expect(getByText(playListHeadings.SONG)).toBeInTheDocument();
    expect(getByText(playListHeadings.ARTIST)).toBeInTheDocument();
    expect(getByText(playListHeadings.ALBUM)).toBeInTheDocument();
    expect(getByText(playListHeadings.DURATION)).toBeInTheDocument();
    expect(getByText(playListHeadings.GENRE)).toBeInTheDocument();
    expect(getByText(playListHeadings.PRICE)).toBeInTheDocument();
  });

  it(`should event sent ${queryStringSortOptions.sortByDuration}`, () => {
    const { getByTestId } = screen;
    const headingDurationButton = getByTestId(headingDurationButtonTestId);

    userEvent.click(headingDurationButton);

    expect(handleOptionChangeSpy).toHaveBeenCalledWith(
      queryStringSortOptions.sortByDuration
    );
  });

  it(`should event sent ${queryStringSortOptions.sortByGenre}`, () => {
    const { getByTestId } = screen;
    const headingGenreButton = getByTestId(headingGenreButtonTestId);

    userEvent.click(headingGenreButton);

    expect(handleOptionChangeSpy).toHaveBeenCalledWith(
      queryStringSortOptions.sortByGenre
    );
  });

  it(`should event sent ${queryStringSortOptions.sortByPrice}`, () => {
    const { getByTestId } = screen;
    const headingPriceButton = getByTestId(headingPriceButtonTestId);

    userEvent.click(headingPriceButton);

    expect(handleOptionChangeSpy).toHaveBeenCalledWith(
      queryStringSortOptions.sortByPrice
    );
  });
});
