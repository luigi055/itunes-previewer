import React, { FunctionComponent } from "react";
import {
  selectResults,
  selectSearchResult,
  selectSearchTerm,
} from "features/search-songs/search-songs-selectors";
import { useSelector } from "react-redux";
import { EmptyList, PlayList } from "./search-collaborators";
import { SearchTerm } from "./search-styled";

const Search: FunctionComponent = () => {
  const searchSong = useSelector(selectSearchResult);
  const artistSongs: ArtistSongs[] = useSelector(selectResults);
  const searchTerm = useSelector(selectSearchTerm);

  return artistSongs.length
    ? (
      <>
        <SearchTerm isFontWeightNormal as="h2" data-testid="search-term">
          Searching "{searchTerm}"
        </SearchTerm>
        <PlayList searchSong={searchSong} searchTerm={searchTerm} />
      </>
    )
    : <EmptyList />;
};

export default Search;
