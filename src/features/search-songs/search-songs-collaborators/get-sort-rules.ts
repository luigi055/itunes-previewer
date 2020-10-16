import { sortQueryStringOptions } from "application/routes-config";
import { sortObjectsByPropertyAscending } from "utils/sort-utils";

export const getSortRules = (
  artistSongs: ArtistSongs[]
): Mapping<ArtistSongs[]> => ({
  [sortQueryStringOptions.unsorted]: artistSongs,
  [sortQueryStringOptions.sortByGenre]: sortObjectsByPropertyAscending(
    artistSongs,
    "primaryGenreName" // TODO UNIFY property name
  ),
  [sortQueryStringOptions.sortByPrice]: sortObjectsByPropertyAscending(
    artistSongs,
    "trackPrice"
  ),
  [sortQueryStringOptions.sortByDuration]: sortObjectsByPropertyAscending(
    artistSongs,
    "trackTimeMillis"
  ),
});
