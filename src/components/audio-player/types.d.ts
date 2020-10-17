interface AudioPlayerProps {
  currentTrackURL: string;
  nextTrackPath: string;
  previousTrackPath: string;
  isNextButtonDisabled?: boolean;
  isPreviousButtonDisabled?: boolean;
  onPreviousButtonClick?: Function;
  onNextButtonClick?: Function;
}
