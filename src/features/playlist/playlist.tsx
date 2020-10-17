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
  onOptionChange: Function;
  sortedBy: string;
}> = ({ searchSong, onOptionChange, sortedBy }) => {
  const mediaPlayerLinksGenerator = new MediaPlayerLinksGenerator(searchSong);
  const getURLPath = (arrayIndex: number) =>
    mediaPlayerLinksGenerator.generateURIFromZeroBasedPosition(arrayIndex);

  return (
    <>
      <SortOptions value={sortedBy} onOptionChange={onOptionChange} />
      <PlayListWrapper>
        <TitleWithSort onOptionChange={onOptionChange} />
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
