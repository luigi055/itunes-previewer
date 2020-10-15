
export const basePaths = {
  ROOT: "/",
  SEARCH: "/search",
  PREVIEW: "/preview",
};

export const params = {
  sortBy: "/:sortBy?",
  trackNumber: "/:trackNumber",
  trackName: "/:trackName",
};

const {trackNumber,trackName,sortBy} =params;
const {ROOT,PREVIEW,SEARCH} = basePaths
          export default {
            ROOT,
            PREVIEW: `${PREVIEW}${trackNumber}${trackName}${sortBy}`,
            SEARCH: `${SEARCH}${sortBy}`
          }
