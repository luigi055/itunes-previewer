import React, { FunctionComponent } from "react";
import {
  selectResults,
  selectSearchResult,
  selectSearchTerm,
} from "features/search-songs/search-songs-selectors";
import { useSelector } from "react-redux";
import { EmptyList, PlayList } from "./search-collaborators";
import { SearchTerm } from "./search-styled";
import DomainHeader from "features/domain-header";

const Search: FunctionComponent = () => {
  const searchSong = useSelector(selectSearchResult);
  const artistSongs: ArtistSongs[] = useSelector(selectResults);
  const searchTerm = useSelector(selectSearchTerm);
  
  return (<>
  <DomainHeader />
  {artistSongs.length ? (
    <>
      <SearchTerm isFontWeightNormal as="h2" data-testid="search-term">
        Searching "{searchTerm}"
      </SearchTerm>
      <PlayList searchSong={searchSong} searchTerm={searchTerm} />
    </>
  ) : (
    <EmptyList />
  )}</>);
};

export default Search;
