import {
  PlayerNext,
  PlayerPause,
  PlayerPlay,
  PlayerPrevious,
} from "components/icons";
import { ScreenReaderOnly } from "components/screen-readers-helpers";
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
        <PlayerPrevious isDisabled={isPreviousButtonDisabled} />
        <ScreenReaderOnly>go Previous</ScreenReaderOnly>
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
          <>
            <PlayerPause data-testid="player-pause-icon" />
            <ScreenReaderOnly>Pause</ScreenReaderOnly>
          </>
        ) : (
          <>
            <PlayerPlay data-testid="player-play-icon" />
            <ScreenReaderOnly>Play</ScreenReaderOnly>
          </>
        )}
      </button>
      <NavigationButton
        href={nextTrackPath}
        data-testid="player-go-next-button"
        isDisabled={isNextButtonDisabled}
      >
        <PlayerNext isDisabled={isNextButtonDisabled} />
        <ScreenReaderOnly>go next</ScreenReaderOnly>
      </NavigationButton>
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
