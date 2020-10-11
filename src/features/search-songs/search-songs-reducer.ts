import initialState from "./search-songs-initial-state";
import { GET_SONGS_SUCCESS } from "./search-songs-actions";

const songsStateHandlers: Mapping<Function> = {
  [GET_SONGS_SUCCESS]: (
    _state: SearchResult,
    action: ActionPayloadRequired<SearchResult>
  ) => action.payload,
};

export const reduceSongs = (
  state: SearchResult = initialState,
  action: ActionStandard<SearchResult>
) => {
  const handler = songsStateHandlers[action.type];
  const hasHandler = !!handler;

  return hasHandler ? handler(state, action) : state;
};
