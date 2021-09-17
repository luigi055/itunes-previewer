export const basePaths = {
  ROOT: "/",
  SEARCH: "/search",
  PREVIEW: "/preview",
};

export const params = {
  sortBy: "/:sortBy?",
  trackNumber: "/:trackNumber",
  trackName: "/:trackName",
  artistName: "/:artistName?",
};

export const queryStringSortOptions = {
  unsorted: "sort-by=unsorted",
  sortByGenre: "sort-by=genre",
  sortByPrice: "sort-by=price",
  sortByDuration: "sort-by=duration",
};

const { trackNumber, trackName, sortBy, artistName } = params;
const { ROOT, PREVIEW, SEARCH } = basePaths;

const routesConfig = {
  ROOT,
  PREVIEW: `${PREVIEW}${artistName}${trackNumber}${trackName}${sortBy}`,
  SEARCH: `${SEARCH}${artistName}${sortBy}`,
};

export default routesConfig;
