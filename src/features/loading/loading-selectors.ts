import { State } from "./../../services/application/redux";

export const selectIsLoading = (state: State) => state.isLoading;
