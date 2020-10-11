import { State } from "services/application/redux";

export const selectSearchResult = (state: State) => state.searchResult;
export const selectResults = (state: State) =>
  selectSearchResult(state).results;
export const selectResultCount = (state: State) =>
  selectSearchResult(state).resultCount;
