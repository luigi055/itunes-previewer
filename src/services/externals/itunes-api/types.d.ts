interface ITunesTrack {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  trackTimeMillis: number;
  primaryGenreName: string;
  trackPrice: number;
  currency: string;
  previewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
}

interface ITunesSearchResult {
  resultCount: number;
  results: ITunesTrack[];
}
