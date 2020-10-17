import ItunesAdapter from "domain/artist-track/itunes-adapter";
import { dummySearchData } from "services/externals/itunes-api/mock";

export const dummyArtistTracks = new ItunesAdapter(
  dummySearchData
).adaptModel();
