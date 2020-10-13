import React, { FunctionComponent, MouseEvent, useRef, useState } from "react";

interface CoverInformationProps {
  currentTrack: ArtistSongs;
}

export const CoverInformation: FunctionComponent<CoverInformationProps> = (
  { currentTrack },
) => {
  return (
    <div>
      <img
        data-testid="cover-image"
        src={currentTrack.artworkUrl100}
        alt={`${currentTrack.collectionName} cover`}
      />

      <p data-testid="cover-track-name">{currentTrack.trackName}</p>
      <h3 data-testid="cover-artist-name">{currentTrack.artistName}</h3>
    </div>
  );
};

export const AudioPlayer: FunctionComponent<AudioPlayerProps> = (
  {
    currentTrackURL,
    nextTrackPath,
    previousTrackPath,
    isNextButtonDisabled,
    isPreviousButtonDisabled,
  },
) => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <a
        href={previousTrackPath}
        data-testid="player-go-previous-button"
        style={{ pointerEvents: isPreviousButtonDisabled ? "none" : "auto" }}
      >
        go Previous
      </a>
      <button
        data-testid="player-reproduce-button"
        onClick={async (event: MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          (isPlaying === true)
            ? await audioPlayerRef.current?.pause()
            : await audioPlayerRef.current?.play();
        }}
      >
        {isPlaying
          ? <i data-testid="player-pause-icon">Pause</i>
          : <i data-testid="player-play-icon">Play</i>}
      </button>
      <a
        href={nextTrackPath}
        data-testid="player-go-next-button"
        style={{ pointerEvents: isNextButtonDisabled ? "none" : "auto" }}
      >
        go next
      </a>
      <h1>is playing? {String(isPlaying)}</h1>
      {currentTrackURL && (
        <audio
          data-testid="player-audio-element"
          controls
          hidden
          ref={audioPlayerRef}
          onPause={() => {
            setIsPlaying(false);
          }}
          onPlaying={() => {
            setIsPlaying(true);
          }}
        >
          <source
            data-testid="player-source"
            src={currentTrackURL}
            type="audio/x-m4a"
          />
        </audio>
      )}
    </div>
  );
};
