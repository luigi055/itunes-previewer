import React, { FunctionComponent } from "react";
import {
  selectResults,
  selectSearchTerm,
} from "features/search-songs/search-songs-selectors";
import { useSelector } from "react-redux";
import { EmptyList, PlayList } from "./search-collaborators";
import { SearchTerm } from "./search-styled";

const Search: FunctionComponent = () => {
  const artistSongs: ArtistSongs[] = useSelector(selectResults);
  const searchTerm = useSelector(selectSearchTerm);

  return artistSongs.length
    ? (
      <>
        <SearchTerm isFontWeightNormal as="h2">
          Searching: "{searchTerm}"
        </SearchTerm>
        <PlayList artistSongs={artistSongs} />
      </>
    )
    : <EmptyList />;
};

export default Search;
