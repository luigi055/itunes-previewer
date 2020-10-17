interface ArtistTrack {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  trackTimeMillis: number;
  genre: string;
  trackPrice: number;
  currency: string;
  previewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
}

interface IArtistTracks {
  resultCount: number;
  results: ArtistTrack[];
}
