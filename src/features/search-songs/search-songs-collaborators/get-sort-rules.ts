import { queryStringSortOptions } from "application/routes-config";
import getNameOf from "utils/get-name-of";
import { sortObjectsByPropertyAscending } from "utils/sort-utils";

export const getSortRules = (
  artistSongs: ArtistSongs[]
): Mapping<ArtistSongs[]> => ({
  [queryStringSortOptions.unsorted]: artistSongs,
  [queryStringSortOptions.sortByGenre]: sortObjectsByPropertyAscending(
    artistSongs,
    getNameOf<ArtistSongs>((object) => object.primaryGenreName)
  ),
  [queryStringSortOptions.sortByPrice]: sortObjectsByPropertyAscending(
    artistSongs,
    getNameOf<ArtistSongs>((object) => object.trackPrice)
  ),
  [queryStringSortOptions.sortByDuration]: sortObjectsByPropertyAscending(
    artistSongs,
    getNameOf<ArtistSongs>((object) => object.trackTimeMillis)
  ),
});
