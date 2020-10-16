import MediaPlayerLinksGenerator from "application/route-logic/media-player-links-generator";
import { ScreenReaderOnly } from "components";
import { Truncate } from "components/typography";
import React, { FunctionComponent } from "react";
import {
  PlayListWrapper,
  PlayListElement,
  PlayListLink,
  PlayListRow,
  PlayListThumbNail,
  TextWrapper,
  TextLeft,
  TextRight,
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
      key={`${song.collectionName}${song.trackName}${song.trackId}`}
      to={getURLPath(index)}
    >
      <PlayListRow data-testid="playlist-row">
        <PlayListThumbNail
          src={song.artworkUrl60}
          alt={`thumbnail ${song.artistName} ${song.collectionName}`}
        />

        <TextWrapper>
          <TextLeft>
            <PlayListElement highlight title={song.trackName}>
              <Truncate>
                <ScreenReaderOnly>song name:</ScreenReaderOnly>
                {song.trackName}
              </Truncate>
            </PlayListElement>

            <PlayListElement title={song.artistName}>
              <Truncate>
                <ScreenReaderOnly>artist name:</ScreenReaderOnly>
                {song.artistName}
              </Truncate>
            </PlayListElement>

            <PlayListElement title={song.collectionName}>
              <Truncate>
                <ScreenReaderOnly>album name:</ScreenReaderOnly>
                {song.collectionName}
              </Truncate>
            </PlayListElement>
          </TextLeft>
          <TextRight>
            <PlayListElement title={formatToMinutes(song.trackTimeMillis)}>
              <ScreenReaderOnly>time duration:</ScreenReaderOnly>
              {formatToMinutes(song.trackTimeMillis)}
              <ScreenReaderOnly>minutes</ScreenReaderOnly>
            </PlayListElement>
            <PlayListElement title={song.primaryGenreName}>
              <ScreenReaderOnly>genre:</ScreenReaderOnly>
              {song.primaryGenreName}
            </PlayListElement>
            <PlayListElement
              title={formatPrice(song.trackPrice, song.currency)}
            >
              <ScreenReaderOnly>song price:</ScreenReaderOnly>
              {formatPrice(song.trackPrice, song.currency)}
            </PlayListElement>
          </TextRight>
        </TextWrapper>
      </PlayListRow>
    </PlayListLink>
  ));
};

const PlayList: FunctionComponent<{
  searchSong: SearchSongsState;
}> = ({ searchSong }) => {
  return <PlayListWrapper>{renderSongs(searchSong)}</PlayListWrapper>;
};

export default PlayList;
