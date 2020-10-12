import initialState from "./search-songs-initial-state";
import { GET_SONGS_START, GET_SONGS_SUCCESS } from "./search-songs-actions";

const songsStateHandlers: Mapping<Function> = {
  [GET_SONGS_SUCCESS]: (
    state: SearchSongsState,
    action: ActionPayloadRequired<SearchResult>,
  ) => ({ ...state, ...action.payload }),
  [GET_SONGS_START]: (
    state: SearchSongsState,
    action: ActionPayloadRequired<string>,
  ) => ({ ...state, searchTerm: action.payload }),
};

export const reduceSongs = (
  state: SearchSongsState = initialState,
  action: ActionStandard<SearchResult | string>,
) => {
  const handler = songsStateHandlers[action.type];
  const hasHandler = !!handler;

  return hasHandler ? handler(state, action) : state;
};
