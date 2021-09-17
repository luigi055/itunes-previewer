import { queryStringSortOptions } from "application/routes-config";

const searchSongsInitialState = {
  resultCount: 0,
  results: [],
  searchTerm: "",
  sortedBy: queryStringSortOptions.unsorted,
  sortedTracks: [],
};

export default searchSongsInitialState;
