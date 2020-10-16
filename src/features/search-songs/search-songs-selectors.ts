export const selectSearchResult = (state: State) => state.searchResult;
export const selectResults = (state: State) =>
  selectSearchResult(state).results;
export const selectResultCount = (state: State) =>
  selectSearchResult(state).resultCount;
export const selectSearchTerm = (state: State) =>
  selectSearchResult(state).searchTerm;
export const selectSortedTracks = (state: State) =>
  selectSearchResult(state).sortedTracks;
export const selectSortedBy = (state: State) =>
  selectSearchResult(state).sortedBy;
