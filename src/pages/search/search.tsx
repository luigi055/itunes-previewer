import React, { FunctionComponent } from "react";
import {
  selectResults,
  selectSearchResult,
  selectSearchTerm,
  selectSortedBy,
} from "features/search-songs/search-songs-selectors";
import { useDispatch, useSelector } from "react-redux";
import { EmptyList } from "./search-collaborators";
import PlayList from "features/playlist";
import { SearchTerm } from "./search-styled";
import DomainHeader from "features/domain-header";
import { basePaths } from "application/routes-config";
import { updateSortedBy } from "features/search-songs";
import { useHistory } from "react-router-dom";

const Search: FunctionComponent = () => {
  const searchSong = useSelector(selectSearchResult);
  const artistSongs: ArtistTrack[] = useSelector(selectResults);
  const searchTerm = useSelector(selectSearchTerm);
  const sortedBy = useSelector(selectSortedBy);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSortChange = (sortOptionValue: string) => {
    history.replace(`${basePaths.SEARCH}/${searchTerm}?${sortOptionValue}`);
    dispatch(updateSortedBy(sortOptionValue));
  };

  return (
    <>
      <DomainHeader />
      {artistSongs.length ? (
        <>
          <SearchTerm isFontWeightNormal as="h2" data-testid="search-term">
            Searching "{searchTerm}"
          </SearchTerm>
          <PlayList
            searchSong={searchSong}
            sortedBy={sortedBy}
            onSortChange={handleSortChange}
          />
        </>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Search;
