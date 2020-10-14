import {
  PlayerNext,
  PlayerPause,
  PlayerPlay,
  PlayerPrevious,
} from "components/icons";
import { ScreenReaderOnly } from "components/screen-readers-helpers";
import React, { FunctionComponent, MouseEvent, useRef, useState } from "react";
import { ControlButtons, PlayerButton } from "./audio-player-styled";

const ToggleReproduceButton: FunctionComponent<{ isPlaying: boolean }> = ({
  isPlaying,
}) =>
  isPlaying ? (
    <>
      <PlayerPause data-testid="player-pause-icon" />
      <ScreenReaderOnly>Pause</ScreenReaderOnly>
    </>
  ) : (
    <>
      <PlayerPlay data-testid="player-play-icon" />
      <ScreenReaderOnly>Play</ScreenReaderOnly>
    </>
  );

const AudioPlayer: FunctionComponent<AudioPlayerProps> = ({
  currentTrackURL,
  nextTrackPath,
  previousTrackPath,
  isNextButtonDisabled,
  isPreviousButtonDisabled,
}) => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClickReproduceButton = async (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    isPlaying === true
      ? await audioPlayerRef.current?.pause()
      : await audioPlayerRef.current?.play();
  };

  const toggleIsPlaying = () => setIsPlaying(!isPlaying);

  return (
    <>
      <ControlButtons>
        <PlayerButton
          href={previousTrackPath}
          data-testid="player-go-previous-button"
          isDisabled={isPreviousButtonDisabled}
        >
          <PlayerPrevious isDisabled={isPreviousButtonDisabled} />
          <ScreenReaderOnly>go Previous</ScreenReaderOnly>
        </PlayerButton>

        <PlayerButton
          as="button"
          data-testid="player-reproduce-button"
          onClick={handleClickReproduceButton}
        >
          <ToggleReproduceButton isPlaying={isPlaying} />
        </PlayerButton>

        <PlayerButton
          href={nextTrackPath}
          data-testid="player-go-next-button"
          isDisabled={isNextButtonDisabled}
        >
          <PlayerNext isDisabled={isNextButtonDisabled} />
          <ScreenReaderOnly>go next</ScreenReaderOnly>
        </PlayerButton>

      </ControlButtons>
      {currentTrackURL && (
        <audio
          data-testid="player-audio-element"
          controls
          hidden
          ref={audioPlayerRef}
          onPause={toggleIsPlaying}
          onPlaying={toggleIsPlaying}
        >
          <source
            data-testid="player-source"
            src={currentTrackURL}
            type="audio/x-m4a"
          />
        </audio>
      )}
    </>
  );
};

export default AudioPlayer;
