class ItunesAdapter {
  constructor(private _itunesData : ITunesSearchResult){}

  adaptModel():IArtistTracks {
    const adaptedTracks = this._itunesData.results.map((itunesTrack:ArtistTrack) => ({
      trackId: itunesTrack.trackId,
      trackName: itunesTrack.trackName,
      artistName: itunesTrack.artistName,
      collectionName: itunesTrack.collectionName,
      trackTimeMillis: itunesTrack.trackTimeMillis,
      primaryGenreName: itunesTrack.primaryGenreName,
      trackPrice: itunesTrack.trackPrice,
      currency: itunesTrack.currency,
      collectionViewUrl: itunesTrack.collectionViewUrl,
      kind: itunesTrack.kind,
      previewUrl: itunesTrack.previewUrl,
      artworkUrl30: itunesTrack.artworkUrl30,
      artworkUrl60: itunesTrack.artworkUrl60,
      artworkUrl100: itunesTrack.artworkUrl100,
    }));

    return {
      resultCount: adaptedTracks.length,
      results: adaptedTracks
    }
  }
}


export default ItunesAdapter;
