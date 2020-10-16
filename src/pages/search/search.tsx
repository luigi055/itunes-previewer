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

const sortByObjectProperty = (array: any[], property: string) =>
  array.slice().sort((a, b) => (a[property] > b[property] ? 1 : -1));

export const SortEnum = {
  unsorted: "sort-by=unsorted",
  sortByGenre: "sort-by=genre",
  sortByPrice: "sort-by=price",
  sortByDuration: "sort-by=duration",
};

export const getSortRules = (
  artistSongs: ArtistSongs[]
): Mapping<ArtistSongs[]> => ({
  [SortEnum.unsorted]: artistSongs,
  [SortEnum.sortByGenre]: sortByObjectProperty(artistSongs, "primaryGenreName"),
  [SortEnum.sortByPrice]: sortByObjectProperty(artistSongs, "trackPrice"),
  [SortEnum.sortByDuration]: sortByObjectProperty(
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
              defaultValue={query.slice(1) || SortEnum.unsorted}
              id="sort-options"
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                history.replace(
                  `${basePaths.SEARCH}/${searchTerm}?${event.currentTarget.value}`
                );
                dispatch(updateSortedBy(event.currentTarget.value));
              }}
            >
              <option value={SortEnum.unsorted}>unsorted</option>
              <option value={SortEnum.sortByGenre}>Sort by Genre</option>
              <option value={SortEnum.sortByPrice}>Sort by price</option>
              <option value={SortEnum.sortByDuration}>Sort by Duration</option>
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
