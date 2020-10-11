import React, { FunctionComponent } from "react";
import { selectResults } from "features/search-songs/search-songs-selectors";
import { useSelector } from "react-redux";
import { EmptyList } from "./search-collaborators";
import {
  PlayList,
  PlayListElement,
  PlayListLink,
  PlayListRow,
} from "./search-styled";

const formatToMinutes = (milliseconds: number): string =>
  (milliseconds / 1000 / 60).toFixed(2).replace(/\./, ":");

const formatPrice = (price: number, currency: string): string =>
  price === -1 ? "Free" : `${price} ${currency}`;

const renderSongs = (songs: ArtistSongs[]) =>
  songs
    .filter((song) => song.kind === "song") // Todo move this to the reducer
    .map((song, index) => (
      <PlayListLink
        to={`/playList/michael%20jackson/${index + 1}/${song.trackName}`}
      >
        <PlayListRow key={song.trackId}>
          <img
            src={song.artworkUrl60}
            alt={`${song.collectionName} thumbnail`}
          />

          <PlayListElement highlight>{song.trackName}</PlayListElement>
          <PlayListElement>{song.artistName}</PlayListElement>

          <PlayListElement>{song.collectionName}</PlayListElement>
          <PlayListElement>
            {formatToMinutes(song.trackTimeMillis)}
          </PlayListElement>
          <PlayListElement>{song.primaryGenreName}</PlayListElement>
          <PlayListElement>
            {formatPrice(song.trackPrice, song.currency)}
          </PlayListElement>
        </PlayListRow>
      </PlayListLink>
    ));

const Search: FunctionComponent = () => {
  const artistSongs: ArtistSongs[] = useSelector(selectResults);

  return artistSongs.length ? (
    <PlayList>
      <PlayListRow>
        <span></span>
        <PlayListElement>Song</PlayListElement>
        <PlayListElement>Artist</PlayListElement>
        <PlayListElement>Album</PlayListElement>
        <PlayListElement as="strong" highlight>
          Duration
        </PlayListElement>
        <PlayListElement as="strong" highlight>
          Genre
        </PlayListElement>
        <PlayListElement as="strong" highlight>
          Price
        </PlayListElement>
      </PlayListRow>
      {renderSongs(artistSongs)}
    </PlayList>
  ) : (
    <EmptyList />
  );
};

export default Search;
