import React, { FunctionComponent } from "react";
import {
  selectResults,
  selectSearchResult,
  selectSearchTerm,
} from "features/search-songs/search-songs-selectors";
import {  useDispatch, useSelector } from "react-redux";
import { EmptyList, PlayList } from "./search-collaborators";
import { SearchTerm } from "./search-styled";
import DomainHeader from "features/domain-header";
import { SortOptions } from "./search-collaborators/sort-options";
import { basePaths, sortQueryStringOptions } from "application/routes-config";
import { updateSortedBy } from "features/search-songs";
import { useHistory, useLocation } from "react-router-dom";

const Search: FunctionComponent = () => {
  const searchSong = useSelector(selectSearchResult);
  const artistSongs: ArtistSongs[] = useSelector(selectResults);
  const searchTerm = useSelector(selectSearchTerm);
  const history = useHistory();
  const query = useLocation().search;
  const dispatch = useDispatch();
  const defaultValue = query.slice(1) || sortQueryStringOptions.unsorted;

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    history.replace(
      `${basePaths.SEARCH}/${searchTerm}?${event.currentTarget.value}`
    );
    dispatch(updateSortedBy(event.currentTarget.value));
  };

  return (
    <>
      <DomainHeader />
      {artistSongs.length ? (
        <>
          <SearchTerm isFontWeightNormal as="h2" data-testid="search-term">
            Searching "{searchTerm}"
          </SearchTerm>
          <SortOptions defaultValue={defaultValue} handleChange={handleOptionChange} />
          <PlayList searchSong={searchSong} />
        </>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Search;
