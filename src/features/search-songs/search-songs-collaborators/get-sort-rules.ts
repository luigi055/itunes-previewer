import { queryStringSortOptions } from "application/routes-config";
import { sortObjectsByPropertyAscending } from "utils/sort-utils";

export const getSortRules = (
  artistSongs: ArtistSongs[]
): Mapping<ArtistSongs[]> => ({
  [queryStringSortOptions.unsorted]: artistSongs,
  [queryStringSortOptions.sortByGenre]: sortObjectsByPropertyAscending(
    artistSongs,
    "primaryGenreName" // TODO UNIFY property name
  ),
  [queryStringSortOptions.sortByPrice]: sortObjectsByPropertyAscending(
    artistSongs,
    "trackPrice"
  ),
  [queryStringSortOptions.sortByDuration]: sortObjectsByPropertyAscending(
    artistSongs,
    "trackTimeMillis"
  ),
});
