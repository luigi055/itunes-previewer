import { songsReducer } from "features/songs";
import { combineReducers } from "redux";

const reducers = combineReducers({
  searchResult: songsReducer,
});

export default reducers;
