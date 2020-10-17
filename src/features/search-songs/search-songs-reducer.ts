import initialState from "./search-songs-initial-state";
import {
  GET_SONGS_START,
  GET_SONGS_SUCCESS,
  UPDATE_SORTED_BY,
  UPDATE_SORTED_TRACKS,
} from "./search-songs-actions";

const songsStateHandlers: Mapping<Function> = {
  [GET_SONGS_SUCCESS]: (
    state: SearchSongsState,
    action: ActionPayloadRequired<IArtistTracks>
  ) => ({ ...state, ...action.payload }),
  [GET_SONGS_START]: (
    state: SearchSongsState,
    action: ActionPayloadRequired<string>
  ) => ({ ...state, searchTerm: decodeURIComponent(action.payload) }),
  [UPDATE_SORTED_BY]: (
    state: SearchSongsState,
    action: ActionPayloadRequired<string>
  ) => ({ ...state, sortedBy: decodeURIComponent(action.payload) }),
  [UPDATE_SORTED_TRACKS]: (
    state: SearchSongsState,
    action: ActionPayloadRequired<ArtistTrack[]>
  ) => ({ ...state, sortedTracks: action.payload }),
};

export const reduceSongs = (
  state: SearchSongsState = initialState,
  action: ActionStandard<IArtistTracks | string>
) => {
  const handler = songsStateHandlers[action.type];
  const hasHandler = !!handler;

  return hasHandler ? handler(state, action) : state;
};
