import { queryStringSortOptions } from "application/routes-config";
import getNameOf from "utils/get-name-of";
import { sortObjectsByPropertyAscending } from "utils/sort-utils";

export const getSortRules = (
  artistSongs: ArtistTrack[]
): Mapping<ArtistTrack[]> => ({
  [queryStringSortOptions.unsorted]: artistSongs,
  [queryStringSortOptions.sortByGenre]: sortObjectsByPropertyAscending(
    artistSongs,
    getNameOf<ArtistTrack>((object) => object.primaryGenreName)
  ),
  [queryStringSortOptions.sortByPrice]: sortObjectsByPropertyAscending(
    artistSongs,
    getNameOf<ArtistTrack>((object) => object.trackPrice)
  ),
  [queryStringSortOptions.sortByDuration]: sortObjectsByPropertyAscending(
    artistSongs,
    getNameOf<ArtistTrack>((object) => object.trackTimeMillis)
  ),
});
