export const selectMediaPlayerData = (state: State) => state.mediaPlayerData;
export const selectCurrentTrack = (state: State) =>
  selectMediaPlayerData(state).currentTrack;
export const selectNextTrackPath = (state: State) =>
  selectMediaPlayerData(state).nextTrackPath;
export const selectPreviousTrackPath = (state: State) =>
  selectMediaPlayerData(state).previousTrackPath;
export const selectIsNextButtonDisabled = (state: State) =>
  selectMediaPlayerData(state).isNextButtonDisabled;
export const selectIsPreviousButtonDisabled = (state: State) =>
  selectMediaPlayerData(state).isPreviousButtonDisabled;
