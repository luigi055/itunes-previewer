import React, { FunctionComponent } from "react";
import {
  selectResults,
  selectSearchResult,
  selectSearchTerm,
  selectSortedBy,
} from "features/search-songs/search-songs-selectors";
import { useDispatch, useSelector } from "react-redux";
import { EmptyList, PlayList } from "./search-collaborators";
import { SearchTerm } from "./search-styled";
import DomainHeader from "features/domain-header";
import { SortOptions } from "./search-collaborators/sort-options";
import { basePaths } from "application/routes-config";
import { updateSortedBy } from "features/search-songs";
import { useHistory } from "react-router-dom";
import { TitleWithSort } from "./search-collaborators/titles-with-sort";

const Search: FunctionComponent = () => {
  const searchSong = useSelector(selectSearchResult);
  const artistSongs: ArtistSongs[] = useSelector(selectResults);
  const searchTerm = useSelector(selectSearchTerm);
  const sortedBy = useSelector(selectSortedBy);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOptionChange = (optionValue: string) => {
    history.replace(`${basePaths.SEARCH}/${searchTerm}?${optionValue}`);
    dispatch(updateSortedBy(optionValue));
  };

  return (
    <>
      <DomainHeader />
      {artistSongs.length ? (
        <>
          <SearchTerm isFontWeightNormal as="h2" data-testid="search-term">
            Searching "{searchTerm}"
          </SearchTerm>
          <SortOptions value={sortedBy} onOptionChange={handleOptionChange} />
          <TitleWithSort onOptionChange={handleOptionChange} />
          <PlayList searchSong={searchSong} />
        </>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Search;
