import { reduceLoading } from "features/loading";
import { reduceSongs } from "features/songs";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  searchResult: reduceSongs,
  isLoading: reduceLoading,
});

export default rootReducers;
