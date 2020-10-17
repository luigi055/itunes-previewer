import { ScreenReaderOnly } from "components";
import { Truncate } from "components/typography";
import React, { FunctionComponent } from "react";
import {
  PlayListElement,
  PlayListLink,
  PlayListRow,
  PlayListThumbNail,
  TextWrapper,
  TextLeft,
  TextRight,
} from "../../playlist-styled";

const currencyDictionary: Mapping<string> = {
  EUR: "€",
  USD: "$",
};

export const formatToMinutes = (milliseconds: number) => {
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const secondsFormatted = seconds < 10 ? "0" + seconds : seconds;

  return minutes + ":" + secondsFormatted;
};

export const formatPrice = (price: number, currency: string): string =>
  price <= 0 ? "Free" : `${price}${currencyDictionary[currency]}`;

const TrackElement: FunctionComponent<{
  trackData: ArtistSongs;
  trackPath: string;
}> = ({ trackData, trackPath }) => (
  <PlayListLink data-testid="playlist-link" to={trackPath}>
    <PlayListRow data-testid="playlist-row">
      <PlayListThumbNail
        data-testid="playlist-thumbnail"
        src={trackData.artworkUrl60}
        alt={`thumbnail ${trackData.artistName} ${trackData.collectionName}`}
      />
      <TextWrapper>
        <TextLeft>
          <PlayListElement highlight title={trackData.trackName}>
            <Truncate>
              <ScreenReaderOnly>track name:</ScreenReaderOnly>
              {trackData.trackName}
            </Truncate>
          </PlayListElement>

          <PlayListElement title={trackData.artistName}>
            <Truncate>
              <ScreenReaderOnly>artist name:</ScreenReaderOnly>
              {trackData.artistName}
            </Truncate>
          </PlayListElement>

          <PlayListElement title={trackData.collectionName}>
            <Truncate>
              <ScreenReaderOnly>album name:</ScreenReaderOnly>
              {trackData.collectionName}
            </Truncate>
          </PlayListElement>
        </TextLeft>
        <TextRight>
          <PlayListElement title={formatToMinutes(trackData.trackTimeMillis)}>
            <ScreenReaderOnly>time duration:</ScreenReaderOnly>
            {formatToMinutes(trackData.trackTimeMillis)}
            <ScreenReaderOnly>minutes</ScreenReaderOnly>
          </PlayListElement>
          <PlayListElement title={trackData.primaryGenreName}>
            <ScreenReaderOnly>genre:</ScreenReaderOnly>
            {trackData.primaryGenreName}
          </PlayListElement>
          <PlayListElement
            title={formatPrice(trackData.trackPrice, trackData.currency)}
          >
            <ScreenReaderOnly>track price:</ScreenReaderOnly>
            {formatPrice(trackData.trackPrice, trackData.currency)}
          </PlayListElement>
        </TextRight>
      </TextWrapper>
    </PlayListRow>
  </PlayListLink>
);

export default TrackElement;
