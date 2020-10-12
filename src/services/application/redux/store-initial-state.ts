import mediaPlayerInitialState from "features/media-player/media-player-initial-state";
import searchSongsInitialState from "features/search-songs/search-songs-initial-state";

const storeInitialState = {
  searchResult: searchSongsInitialState,
  isLoading: false,
  mediaPlayerData: mediaPlayerInitialState,
};

export default storeInitialState;
