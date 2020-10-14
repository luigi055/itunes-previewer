import { AudioPlayer, Cover, SocialShare } from "components";
import Track from "domain/track";
import { fetchTrackData } from "features/media-player";
import {
  selectCurrentTrack,
  selectIsNextButtonDisabled,
  selectIsPreviousButtonDisabled,
  selectNextTrackPath,
  selectPreviousTrackPath,
} from "features/media-player/media-player-selectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

interface PreviewURIParams {
  trackNumber?: string;
  trackName?: string;
}

const Preview = () => {
  const { trackNumber } = useParams() as PreviewURIParams;
  const castedTrackNumber = trackNumber as string;
  const trackIndex = parseInt(
    castedTrackNumber.slice(castedTrackNumber.indexOf("-") + 1),
  );
  const track = new Track(trackIndex);

  const dispatch = useDispatch();
  const currentTrack = useSelector(selectCurrentTrack);
  const nextTrackPath = useSelector(selectNextTrackPath);
  const previousTrackPath = useSelector(selectPreviousTrackPath);
  const isNextButtonDisabled = useSelector(selectIsNextButtonDisabled);
  const isPreviousButtonDisabled = useSelector(selectIsPreviousButtonDisabled);

  useEffect(() => {
    dispatch(fetchTrackData(track.getTrackNumber()));
  }, [dispatch, track]);

  return (
    <div>
      <Cover currentTrack={currentTrack} />
      <AudioPlayer
        currentTrackURL={currentTrack.previewUrl}
        nextTrackPath={nextTrackPath}
        previousTrackPath={previousTrackPath}
        isNextButtonDisabled={isNextButtonDisabled}
        isPreviousButtonDisabled={isPreviousButtonDisabled}
      />
      <SocialShare />
    </div>
  );
};

export default Preview;
