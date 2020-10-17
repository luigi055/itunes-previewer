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
import { Link } from "react-router-dom";
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
  previousTrackPath,
  nextTrackPath,
  isNextButtonDisabled = false,
  isPreviousButtonDisabled = false,
  onPreviousButtonClick = () => {},
  onNextButtonClick = () => {},
  ...props
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
      <ControlButtons {...props}>
        <PlayerButton
          as={Link}
          to={previousTrackPath}
          data-testid="player-go-previous-button"
          isDisabled={isPreviousButtonDisabled}
          aria-disabled={isPreviousButtonDisabled}
          onClick={() => {
            setIsPlaying(false);
            onPreviousButtonClick();
          }}
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
          as={Link}
          to={nextTrackPath}
          data-testid="player-go-next-button"
          isDisabled={isNextButtonDisabled}
          aria-disabled={isNextButtonDisabled}
          onClick={() => {
            setIsPlaying(false);
            onNextButtonClick();
          }}
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
