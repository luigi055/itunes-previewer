interface AudioPlayerProps {
  currentTrackURL: string;
  isNextButtonDisabled?: boolean;
  isPreviousButtonDisabled?: boolean;
  onPreviousButtonClick: Function;
  onNextButtonClick: Function;
}
