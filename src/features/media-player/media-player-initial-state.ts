const mediaPlayerInitialState = {
  currentTrack: {
    trackId: 0,
    trackName: "",
    artistName: "",
    collectionName: "",
    trackTimeMillis: 0,
    genre: "",
    trackPrice: 0,
    currency: "",
    previewUrl: "",
    artworkUrl60: "",
    artworkUrl100: "",
  },
  nextTrackPath: "",
  previousTrackPath: "",
  isNextButtonDisabled: false,
  isPreviousButtonDisabled: false,
  trackNumber: 1,
};

export default mediaPlayerInitialState;
