import {
  PlayerNext,
  PlayerPause,
  PlayerPlay,
  PlayerPrevious,
} from "components/icons";
import { ScreenReaderOnly } from "components/screen-readers-helpers";
import React, {
  FunctionComponent,
  HTMLAttributes,
  MouseEvent,
  useRef,
  useState,
} from "react";
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

const AudioPlayer: FunctionComponent<
  AudioPlayerProps & HTMLAttributes<HTMLDivElement>
> = ({
  currentTrackURL,
  isNextButtonDisabled = false,
  isPreviousButtonDisabled = false,
  onPreviousButtonClick,
  onNextButtonClick,
  ...props
}) => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClickReproduceTrack = async (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    isPlaying === true
      ? await audioPlayerRef.current?.pause()
      : await audioPlayerRef.current?.play();
  };

  const toggleIsPlaying = () => setIsPlaying(!isPlaying);
  const handlePreviousTrack = () => {
    setIsPlaying(false);
    onPreviousButtonClick();
  };
  const handleNextTrack = () => {
    setIsPlaying(false);
    onNextButtonClick();
  };

  return (
    <>
      <ControlButtons {...props}>
        <PlayerButton
          data-testid="player-go-previous-button"
          disabled={isPreviousButtonDisabled}
          aria-disabled={isPreviousButtonDisabled}
          onClick={handlePreviousTrack}
        >
          <PlayerPrevious isDisabled={isPreviousButtonDisabled} />
          <ScreenReaderOnly>go Previous</ScreenReaderOnly>
        </PlayerButton>

        <PlayerButton
          as="button"
          data-testid="player-reproduce-button"
          onClick={handleClickReproduceTrack}
        >
          <ToggleReproduceButton isPlaying={isPlaying} />
        </PlayerButton>

        <PlayerButton
          data-testid="player-go-next-button"
          disabled={isNextButtonDisabled}
          aria-disabled={isNextButtonDisabled}
          onClick={handleNextTrack}
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
          src={currentTrackURL}
        ></audio>
      )}
    </>
  );
};

export default AudioPlayer;
