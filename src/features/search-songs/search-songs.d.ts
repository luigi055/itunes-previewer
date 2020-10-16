interface SearchSongsState extends SearchResult {
  searchTerm: string;
  sortedBy: string;
  sortedTracks: ArtistSongs[];
}
