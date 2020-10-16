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
import { basePaths } from "application/routes-config";
import { useHistory, useLocation } from "react-router-dom";
import { updateSortedBy } from "features/search-songs";
import { sortObjectsByPropertyAscending } from "utils/sort-utils";

export const sortEnum = {
  unsorted: "sort-by=unsorted",
  sortByGenre: "sort-by=genre",
  sortByPrice: "sort-by=price",
  sortByDuration: "sort-by=duration",
};

export const getSortRules = (
  artistSongs: ArtistSongs[]
): Mapping<ArtistSongs[]> => ({
  [sortEnum.unsorted]: artistSongs,
  [sortEnum.sortByGenre]: sortObjectsByPropertyAscending(
    artistSongs,
    "primaryGenreName"
  ),
  [sortEnum.sortByPrice]: sortObjectsByPropertyAscending(
    artistSongs,
    "trackPrice"
  ),
  [sortEnum.sortByDuration]: sortObjectsByPropertyAscending(
    artistSongs,
    "trackTimeMillis"
  ),
});

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
          <label htmlFor="sort-options">
            <select
              defaultValue={query.slice(1) || sortEnum.unsorted}
              id="sort-options"
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                history.replace(
                  `${basePaths.SEARCH}/${searchTerm}?${event.currentTarget.value}`
                );
                dispatch(updateSortedBy(event.currentTarget.value));
              }}
            >
              <option value={sortEnum.unsorted}>unsorted</option>
              <option value={sortEnum.sortByGenre}>Sort by Genre</option>
              <option value={sortEnum.sortByPrice}>Sort by price</option>
              <option value={sortEnum.sortByDuration}>Sort by Duration</option>
            </select>
          </label>
          <SearchTerm isFontWeightNormal as="h2" data-testid="search-term">
            Searching "{searchTerm}"
          </SearchTerm>
          <PlayList searchSong={searchSong} />
        </>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Search;
