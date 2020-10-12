import {
  selectResultCount,
  selectResults,
  selectSearchTerm,
} from "features/search-songs";
import React, { MouseEvent, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

interface PreviewParams {
  trackNumber?: string;
  trackName?: string;
}

const Preview = () => {
  const songList = useSelector(selectResults);
  const searchTerm = useSelector(selectSearchTerm);
  const searchResultCount = useSelector(selectResultCount);
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const { trackNumber, trackName } = useParams() as PreviewParams;
  const castedTrackNumber = trackNumber as string;
  const trackIndex = parseInt(
    castedTrackNumber.slice(castedTrackNumber.indexOf("-") + 1),
  );

  const subtractOneToTrackIndex = (trackNumber: number) =>
    (trackNumber <= 1) ? 1 : trackNumber - 1;
  const addOneToTrackIndex = (trackNumber: number, maxNumber: number) =>
    (trackNumber >= maxNumber) ? maxNumber : trackNumber + 1;
  return <>
    <a
      href={`/preview/track-${
        subtractOneToTrackIndex(trackIndex)
      }/${trackName}?${searchTerm}`}
    >
      go back
    </a>
    <button
      onClick={async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        await audioPlayerRef.current?.play();
      }}
    >
      Play
    </button>
    <button
      onClick={async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        await audioPlayerRef.current?.pause();
      }}
    >
      Pause
    </button>
    <a
      href={`/preview/track-${
        addOneToTrackIndex(trackIndex, searchResultCount)
      }/${trackName}?${searchTerm}`}
    >
      go next
    </a>
    {songList[trackIndex] && (
      <audio controls hidden ref={audioPlayerRef}>
        <source src={songList[trackIndex]?.previewUrl} type="audio/x-m4a" />
      </audio>
    )}
  </>;
};

export default Preview;
