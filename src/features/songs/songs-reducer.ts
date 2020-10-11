// import {
//   handleAction,
// } from "services/application/redux";
import initialState from "./songs-initial-state";
import { SearchResult } from "services/externals/itunes-api";
import { GET_SONGS_SUCCESS } from "./songs-actions";

const songsStateHandlers: Mapping<Function> = {
  [GET_SONGS_SUCCESS]: (
    _state: SearchResult,
    action: ActionStandard<SearchResult>,
  ) => action.payload,
};

export const reduceSongs = (
  state: SearchResult = initialState,
  action: ActionStandard<SearchResult>,
) => {
  const handler = songsStateHandlers[action.type];
  const hasHandler = !!handler;

  return hasHandler ? handler(state, action) : state;
};
