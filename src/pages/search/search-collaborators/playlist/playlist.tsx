import MediaPlayerLinksGenerator from "application/route-logic/media-player-links-generator";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {
  PlayListWrapper,
  PlayListElement,
  PlayListHead,
  PlayListLink,
  PlayListRow,
} from "./playlist-styled";

const formatToMinutes = (milliseconds: number): string =>
  (milliseconds / 1000 / 60).toFixed(2).replace(/\./, ":");

const formatPrice = (price: number, currency: string): string =>
  price === -1 ? "Free" : `${price} ${currency}`;

const renderSongs = (searchSongs: SearchSongsState) => {
  const mediaPlayerLinksGenerator = new MediaPlayerLinksGenerator(searchSongs);
  const getURLPath = (arrayIndex: number) =>
    mediaPlayerLinksGenerator.generateURIFromZeroBasedPosition(arrayIndex);
  return searchSongs.sortedTracks.map((song, index) => (
    <PlayListLink
    as={Link}
      key={`${song.collectionName}${song.trackName}${song.trackId}`}
      to={getURLPath(index)}
    >
      <PlayListRow data-testid="playlist-row">
        <img src={song.artworkUrl60} alt={`${song.collectionName} thumbnail`} />

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
};

const PlayList: FunctionComponent<{
  searchSong: SearchSongsState;
}> = ({ searchSong }) => {
  return (
    <PlayListWrapper>
      <PlayListHead>
        <span></span>
        <PlayListElement as="strong">Song</PlayListElement>
        <PlayListElement as="strong">Artist</PlayListElement>
        <PlayListElement as="strong">Album</PlayListElement>
        <PlayListElement as="strong" highlight>
          Duration
        </PlayListElement>
        <PlayListElement as="strong" highlight>
          Genre
        </PlayListElement>
        <PlayListElement as="strong" highlight>
          Price
        </PlayListElement>
      </PlayListHead>
      {renderSongs(searchSong)}
    </PlayListWrapper>
  );
};

export default PlayList;
