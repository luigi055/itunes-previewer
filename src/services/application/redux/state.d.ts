import { SearchResult } from "services/externals/itunes-api";

export interface State {
  searchResult: SearchResult;
  isLoading: boolean;
}
