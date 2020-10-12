import { fetchTrackData } from "features/media-player";
import {
  selectCurrentTrack,
  selectNextTrackPath,
  selectPreviousTrackPath,
} from "features/media-player/media-player-selectors";
import React, { MouseEvent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

interface PreviewParams {
  trackNumber?: string;
  trackName?: string;
}

const Preview = () => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const { trackNumber } = useParams() as PreviewParams;
  const castedTrackNumber = trackNumber as string;
  const trackIndex = parseInt(
    castedTrackNumber.slice(castedTrackNumber.indexOf("-") + 1),
  );

  const dispatch = useDispatch();
  const currentTrack = useSelector(selectCurrentTrack);
  const nextTrackPath = useSelector(selectNextTrackPath);
  const previousTrackPath = useSelector(selectPreviousTrackPath);

  useEffect(() => {
    dispatch(fetchTrackData(trackIndex));
  }, [dispatch, trackIndex]);

  return <>
    <div>
      <img
        src={currentTrack.artworkUrl100}
        alt={`${currentTrack.collectionName} cover`}
      />
      <h3>{currentTrack.trackName}</h3>
      <p>{currentTrack.collectionName}</p>
    </div>
    <a
      href={previousTrackPath}
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
      href={nextTrackPath}
    >
      go next
    </a>
    {currentTrack.previewUrl && (
      <audio controls hidden ref={audioPlayerRef}>
        <source src={currentTrack.previewUrl} type="audio/x-m4a" />
      </audio>
    )}
  </>;
};

export default Preview;
