import { AudioPlayer, CoverInformation } from "components";
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

  const dispatch = useDispatch();
  const currentTrack = useSelector(selectCurrentTrack);
  const nextTrackPath = useSelector(selectNextTrackPath);
  const previousTrackPath = useSelector(selectPreviousTrackPath);
  const isNextButtonDisabled = useSelector(selectIsNextButtonDisabled);
  const isPreviousButtonDisabled = useSelector(selectIsPreviousButtonDisabled);

  useEffect(() => {
    dispatch(fetchTrackData(trackIndex));
  }, [dispatch, trackIndex]);

  return (
    <div>
      <CoverInformation currentTrack={currentTrack} />
      <AudioPlayer
        currentTrackURL={currentTrack.previewUrl}
        nextTrackPath={nextTrackPath}
        previousTrackPath={previousTrackPath}
        isNextButtonDisabled={isNextButtonDisabled}
        isPreviousButtonDisabled={isPreviousButtonDisabled}
      />
    </div>
  );
};

export default Preview;
