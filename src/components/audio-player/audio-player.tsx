import React, { FunctionComponent, MouseEvent, useRef, useState } from "react";
import { NavigationButton } from "./audio-player-styled";

const AudioPlayer: FunctionComponent<AudioPlayerProps> = ({
  currentTrackURL,
  nextTrackPath,
  previousTrackPath,
  isNextButtonDisabled,
  isPreviousButtonDisabled,
}) => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <NavigationButton
        href={previousTrackPath}
        data-testid="player-go-previous-button"
        isDisabled={isPreviousButtonDisabled}
      >
        go Previous
      </NavigationButton>
      <button
        data-testid="player-reproduce-button"
        onClick={async (event: MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          isPlaying === true
            ? await audioPlayerRef.current?.pause()
            : await audioPlayerRef.current?.play();
        }}
      >
        {isPlaying ? (
          <i data-testid="player-pause-icon">Pause</i>
        ) : (
          <i data-testid="player-play-icon">Play</i>
        )}
      </button>
      <NavigationButton
        href={nextTrackPath}
        data-testid="player-go-next-button"
        isDisabled={isNextButtonDisabled}
      >
        go next
      </NavigationButton>
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

export default AudioPlayer;
