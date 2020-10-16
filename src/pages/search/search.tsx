import React, { FunctionComponent } from "react";
import {
  selectResults,
  selectSearchResult,
  selectSearchTerm,
} from "features/search-songs/search-songs-selectors";
import { useDispatch, useSelector } from "react-redux";
import { EmptyList, PlayList } from "./search-collaborators";
import { SearchTerm } from "./search-styled";
import DomainHeader from "features/domain-header";
import { basePaths, sortQueryStringOptions } from "application/routes-config";
import { useHistory, useLocation } from "react-router-dom";
import { updateSortedBy } from "features/search-songs";

const Search: FunctionComponent = () => {
  const searchSong = useSelector(selectSearchResult);
  const artistSongs: ArtistSongs[] = useSelector(selectResults);
  const searchTerm = useSelector(selectSearchTerm);
  const history = useHistory();
  const query = useLocation().search;
  const dispatch = useDispatch();

  return (
    <>
      <DomainHeader />
      {artistSongs.length ? (
        <>
          <SearchTerm isFontWeightNormal as="h2" data-testid="search-term">
            Searching "{searchTerm}"
          </SearchTerm>
          <label htmlFor="sort-options">
            <select
              defaultValue={query.slice(1) || sortQueryStringOptions.unsorted}
              id="sort-options"
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                history.replace(
                  `${basePaths.SEARCH}/${searchTerm}?${event.currentTarget.value}`
                );
                dispatch(updateSortedBy(event.currentTarget.value));
              }}
            >
              <option value={sortQueryStringOptions.unsorted}>unsorted</option>
              <option value={sortQueryStringOptions.sortByGenre}>Sort by Genre</option>
              <option value={sortQueryStringOptions.sortByPrice}>Sort by price</option>
              <option value={sortQueryStringOptions.sortByDuration}>Sort by Duration</option>
            </select>
          </label>
   
          <PlayList searchSong={searchSong} />
        </>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Search;
