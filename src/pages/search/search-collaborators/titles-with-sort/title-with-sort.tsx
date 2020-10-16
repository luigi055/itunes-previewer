import { queryStringSortOptions } from "application/routes-config";
import { ScreenReaderOnly } from "components";
import React, { FunctionComponent } from "react";
import {
  PlayListHeadElement,
  PlayListHead,
  PlayListWrapper,
} from "../playlist/playlist-styled";

const TitleWithSort: FunctionComponent<{ onOptionChange: Function }> = ({
  onOptionChange,
}) => {
  const handleOptionChange = (option: string) => () => {
    onOptionChange(option);
  };
  const { sortByDuration, sortByGenre, sortByPrice } = queryStringSortOptions;

  return (
    <PlayListWrapper>
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
    </PlayListWrapper>
  );
};

export default TitleWithSort;
