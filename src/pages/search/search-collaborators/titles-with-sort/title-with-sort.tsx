import { queryStringSortOptions } from "application/routes-config";
import { ScreenReaderOnly } from "components";
import React, { FunctionComponent } from "react";
import {
  PlayListHeadElement,
  PlayListHead,
} from "../playlist/playlist-styled";
import { TitleWithSortWrapper } from "./title-with-sort-styled";

const TitleWithSort: FunctionComponent<{ onOptionChange: Function }> = ({
  onOptionChange,
}) => {
  const handleOptionChange = (option: string) => () => {
    onOptionChange(option);
  };
  const { sortByDuration, sortByGenre, sortByPrice } = queryStringSortOptions;

  return (
    <TitleWithSortWrapper>
      <PlayListHead>
        <span></span>
        <PlayListHeadElement as="strong">Song</PlayListHeadElement>
        <PlayListHeadElement as="strong">Artist</PlayListHeadElement>
        <PlayListHeadElement as="strong">Album</PlayListHeadElement>
        <PlayListHeadElement
          as="button"
          highlight
          data-testid="heading-duration-button"
          onClick={handleOptionChange(sortByDuration)}
        >
          <ScreenReaderOnly>sort by</ScreenReaderOnly> Duration
        </PlayListHeadElement>
        <PlayListHeadElement
          as="button"
          highlight
          data-testid="heading-genre-button"
          onClick={handleOptionChange(sortByGenre)}
        >
          <ScreenReaderOnly>sort by</ScreenReaderOnly> Genre
        </PlayListHeadElement>
        <PlayListHeadElement
          as="button"
          highlight
          onClick={handleOptionChange(sortByPrice)}
          data-testid="heading-price-button"
        >
          <ScreenReaderOnly>sort by</ScreenReaderOnly> Price
        </PlayListHeadElement>
      </PlayListHead>
    </TitleWithSortWrapper>
  );
};

export default TitleWithSort;
