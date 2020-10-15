interface ITrack {
  defineMaxLimit(maxLimit: number): Track;
  toZeroBaseIndex(): number;
  getTrackNumber(): number;
  isFirstTrack(): boolean;
  isLastTrack(): boolean;
}
