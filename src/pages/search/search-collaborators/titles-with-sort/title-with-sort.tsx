import { queryStringSortOptions } from "application/routes-config";
import { ScreenReaderOnly } from "components";
import React, { FunctionComponent } from "react";
import {
  PlayListHeadElement,
  TextWrapper,
  TextLeft,
  TextRight,
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
      <span style={{ minWidth: "59px", width: "59px", height: "60px" }}>
        <ScreenReaderOnly>thumbnail</ScreenReaderOnly>
      </span>
      <TextWrapper>
        <TextLeft>
          <PlayListHeadElement as="strong">Song</PlayListHeadElement>
          <PlayListHeadElement as="strong">Artist</PlayListHeadElement>
          <PlayListHeadElement as="strong">Album</PlayListHeadElement>
        </TextLeft>
        <TextRight>
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
        </TextRight>
      </TextWrapper>
    </TitleWithSortWrapper>
  );
};

export default TitleWithSort;
