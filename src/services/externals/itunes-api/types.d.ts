interface ArtistSongs {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  trackTimeMillis: number;
  primaryGenreName: string;
  trackPrice: number;
  currency: string;
  collectionViewUrl: string;
  kind: string; // song
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
}

interface SearchResult {
  resultCount: number;
  results: ArtistSongs[];
}
