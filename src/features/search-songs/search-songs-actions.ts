const SONGS_FEATURE = "SONGS";

export const GET_SONGS_START: string = `${SONGS_FEATURE}/GET_SONGS_START`;
export const GET_SONGS_SUCCESS: string = `${SONGS_FEATURE}/GET_SONGS_SUCCESS`;
export const GET_SONGS_FAIL: string = `${SONGS_FEATURE}/GET_SONGS_FAIL`;
export const UPDATE_SORTED_BY: string = `${SONGS_FEATURE}/UPDATE_SORTED_BY`;
export const UPDATE_SORTED_TRACKS: string = `${SONGS_FEATURE}/UPDATE_SORTED_TRACKS`;

export const searchSongsStart = (
  payload: string
): ActionPayloadRequired<string> => ({
  type: GET_SONGS_START,
  payload,
});

export const searchSongsFail = (): ActionStandardBase => ({
  type: GET_SONGS_FAIL,
  error: true,
});

export const searchSongsSuccess = (
  payload: IArtistTracks
): ActionStandard<IArtistTracks> => ({
  type: GET_SONGS_SUCCESS,
  payload,
  error: false,
});

export const updateSortedBy = (payload: string): ActionStandard<string> => ({
  type: UPDATE_SORTED_BY,
  payload,
});

export const updateSortedTracks = (
  payload: ArtistTrack[]
): ActionStandard<ArtistTrack[]> => ({
  type: UPDATE_SORTED_TRACKS,
  payload,
});
