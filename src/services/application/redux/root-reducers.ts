import { reduceLoading } from "features/loading";
import { reduceMediaPlayer } from "features/media-player";
import { reduceSongs } from "features/search-songs";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  searchResult: reduceSongs,
  isLoading: reduceLoading,
  mediaPlayerData: reduceMediaPlayer,
});

export default rootReducers;
