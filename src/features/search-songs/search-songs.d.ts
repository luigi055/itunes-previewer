interface SearchSongsState extends IArtistTracks {
  searchTerm: string;
  sortedBy: string;
  sortedTracks: ArtistTrack[];
}
