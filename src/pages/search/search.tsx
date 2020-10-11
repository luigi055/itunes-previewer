import React, { FunctionComponent } from "react";
import { selectResults } from "features/search-songs/search-songs-selectors";
import { useSelector } from "react-redux";
import { EmptyList } from "./search-collaborators";

const renderSongs = (songs: ArtistSongs[]) =>
  songs.map((song) => (
    <div key={song.trackId}>
      <img src={song.artworkUrl100} alt={`${song.collectionName} thumbnail`} />
      <span>{song.trackName}</span> <span>{song.artistName}</span>{" "}
      <span>{song.collectionName}</span>{" "}
      <span>
        {(song.trackTimeMillis / 1000 / 60).toFixed(2).replace(/\./, ":")}
      </span>{" "}
      <span>{song.primaryGenreName}</span>{" "}
      <span>
        {song.trackPrice} {song.currency}
      </span>
    </div>
  ));

const Search: FunctionComponent = () => {
  const artistSongs: ArtistSongs[] = useSelector(selectResults);

  return artistSongs.length ? (
    <div>{renderSongs(artistSongs)}</div>
  ) : (
    <EmptyList />
  );
};

export default Search;
