import MediaPlayerLinksGenerator from "application/route-logic/media-player-links-generator";
import React, { FunctionComponent } from "react";
import {
  SortOptions,
  TitleWithSort,
  TrackElement,
} from "./playlist-collaborators";
import { PlayListWrapper } from "./playlist-styled";

const PlayList: FunctionComponent<{
  searchSong: SearchSongsState;
  onSortChange: Function;
  sortedBy: string;
}> = ({ searchSong, onSortChange, sortedBy }) => {
  const mediaPlayerLinksGenerator = new MediaPlayerLinksGenerator(searchSong);
  const getURLPath = (arrayIndex: number) =>
    mediaPlayerLinksGenerator.generateURIFromZeroBasedPosition(arrayIndex);

  return (
    <>
      <SortOptions value={sortedBy} onOptionChange={onSortChange} />
      <PlayListWrapper>
        <TitleWithSort onOptionChange={onSortChange} />
        {searchSong.sortedTracks.map((trackData, index) => (
          <TrackElement
            key={`${trackData.collectionName}${trackData.trackName}${trackData.trackId}`}
            trackData={trackData}
            trackPath={getURLPath(index)}
          />
        ))}
      </PlayListWrapper>
    </>
  );
};

export default PlayList;
