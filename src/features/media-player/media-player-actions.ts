const feature = "mediaplayer";

export const FETCH_TRACK_DATA = `${feature}/FETCH_TRACK_DATA`;
export const GENERATE_CURRENT_TRACK_DATA =
  `${feature}/GENERATE_CURRENT_TRACK_DATA`;

export const fetchTrackData = (
  payload: number,
): ActionPayloadRequired<number> => ({
  type: FETCH_TRACK_DATA,
  payload,
});

export const generateCurrentTrackData = (
  payload: any,
): ActionPayloadRequired<any> => ({
  type: GENERATE_CURRENT_TRACK_DATA,
  payload,
});
