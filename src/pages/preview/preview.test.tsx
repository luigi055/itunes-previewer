import React from "react";
import { setStore, storeInitialState } from "services/application/redux";
import { ConnectedMemoryRouter, Random } from "test-utils";
import Preview from "./preview";
import { render, screen } from "@testing-library/react";
import { Store } from "redux";
import MediaPlayerLinksGenerator from "application/route-logic/media-player-links-generator";
import Track from "domain/track";
import routesConfig, {
  basePaths,
  queryStringSortOptions,
} from "application/routes-config";
import userEvent from "@testing-library/user-event";
import { triggeredActions } from "test-utils/triggered-actions";
import { GO_TO_TRACK } from "features/media-player";
import searchSongsInitialState from "features/search-songs/search-songs-initial-state";
import { dummyArtistTracks } from "test-utils/domain-dummies";

const playerPreviousButtonTestId = "player-go-previous-button";
const playerPreviousIconEnabledTestId = "player-previous-icon-enabled";
const playerPreviousIconDisabledTestId = "player-previous-icon-disabled";
const playerNextButtonTestId = "player-go-next-button";
const playerNextIconEnabledTestId = "player-next-icon-enabled";
const playerNextIconDisabledTestId = "player-next-icon-disabled";
const coverImageTestId = "cover-image";
const coverTrackNameTestId = "cover-track-name";
const coverArtistNameTestId = "cover-artist-name";
const playerAudioTestId = "player-audio-element";
const socialShareTestId = "social-share-component";

describe("Testing the Preview Page", () => {
  let store: Store;
  const mediaPlayerLinkGenerator = new MediaPlayerLinksGenerator({
    ...dummyArtistTracks,
    searchTerm: "",
    sortedTracks: dummyArtistTracks.results,
    sortedBy: queryStringSortOptions.unsorted,
  });

  const generateDummyURLBasedOnTracks = (track: ITrack) =>
    `${
      basePaths.PREVIEW
    }/${Random.getString()}/track-${track.getTrackNumber()}/${Random.getString()}`;

  const initializeStoreData = (currentTrack: ITrack) => {
    const track = dummyArtistTracks.results[currentTrack.toZeroBaseIndex()];

    return {
      ...storeInitialState,
      searchResult: {
        ...searchSongsInitialState,
        sortedTracks: dummyArtistTracks.results,
        resultCount: dummyArtistTracks.resultCount,
      },
      mediaPlayerData: {
        currentTrack: track,
        nextTrackPath: mediaPlayerLinkGenerator.generateNextTrackURI(
          currentTrack
        ),
        previousTrackPath: mediaPlayerLinkGenerator.generatePreviousTrackURI(
          currentTrack
        ),
        isNextButtonDisabled: currentTrack.isLastTrack(),
        isPreviousButtonDisabled: currentTrack.isFirstTrack(),
        trackNumber: currentTrack.getTrackNumber(),
      },
    };
  };

  describe("Testing first track preview", () => {
    const currentTrack = new Track(1).defineMaxLimit(
      dummyArtistTracks.resultCount
    );
    const firstTrack = dummyArtistTracks.results[currentTrack.toZeroBaseIndex()];

    beforeEach(() => {
      store = setStore(initializeStoreData(currentTrack));
    });

    beforeEach(() => {
      render(
        <ConnectedMemoryRouter
          store={store}
          initialURLPath={routesConfig.PREVIEW}
          route={`${generateDummyURLBasedOnTracks(currentTrack)}`}
        >
          <Preview />
        </ConnectedMemoryRouter>
      );
    });

    it("should be displayed the album cover correctly", () => {
      const { getByTestId } = screen;

      expect((getByTestId(coverImageTestId) as HTMLImageElement).src).toContain(
        firstTrack.artworkUrl100
      );
      expect(getByTestId(coverTrackNameTestId).textContent).toBe(
        firstTrack.trackName
      );
      expect(getByTestId(coverArtistNameTestId).textContent).toBe(
        firstTrack.artistName
      );
    });

    it("should reproduce the correct song", () => {
      const { getByTestId } = screen;

      expect(
        (getByTestId(playerAudioTestId) as HTMLAudioElement).src
      ).toContain(firstTrack.previewUrl);
    });

    it("should previous button be disabled and the next button enabled since it is the first track", () => {
      const { getByTestId } = screen;

      expect(getByTestId(playerPreviousIconDisabledTestId)).toBeInTheDocument();
      expect(getByTestId(playerNextIconEnabledTestId)).toBeInTheDocument();
    });

    it("should render the social share component correctly", () => {
      const { getByTestId } = screen;

      expect(getByTestId(socialShareTestId)).toBeInTheDocument();
    });
  });

  describe("testing a middle track preview", () => {
    const currentTrack = new Track(5).defineMaxLimit(
      dummyArtistTracks.resultCount
    );

    beforeEach(() => {
      store = setStore(initializeStoreData(currentTrack));
    });

    beforeEach(() => {
      render(
        <ConnectedMemoryRouter
          store={store}
          initialURLPath={routesConfig.PREVIEW}
          route={`${generateDummyURLBasedOnTracks(currentTrack)}`}
        >
          <Preview />
        </ConnectedMemoryRouter>
      );
    });

    beforeEach(() => triggeredActions.clear());

    it("should invoke goToTrack action creator when the user clicks on previous button", () => {
      const { getByTestId } = screen;

      userEvent.click(getByTestId(playerPreviousButtonTestId));

      expect(triggeredActions.getAction(GO_TO_TRACK)?.payload).toBe(
        currentTrack.getTrackNumber() - 1
      );
    });

    it("should invoke goToTrack action creator when the user clicks on next button", () => {
      const { getByTestId } = screen;

      userEvent.click(getByTestId(playerNextButtonTestId));

      expect(triggeredActions.getAction(GO_TO_TRACK)?.payload).toBe(
        currentTrack.getTrackNumber() + 1
      );
    });

    it("should both buttons enabled", () => {
      const { getByTestId } = screen;

      expect(getByTestId(playerPreviousIconEnabledTestId)).toBeInTheDocument();
      expect(getByTestId(playerNextIconEnabledTestId)).toBeInTheDocument();
    });
  });
  describe("testing last track preview", () => {
    const currentTrack = new Track(10).defineMaxLimit(
      dummyArtistTracks.resultCount
    );

    beforeEach(() => {
      store = setStore(initializeStoreData(currentTrack));
    });

    beforeEach(() => {
      render(
        <ConnectedMemoryRouter
          store={store}
          initialURLPath={routesConfig.PREVIEW}
          route={`${generateDummyURLBasedOnTracks(currentTrack)}`}
        >
          <Preview />
        </ConnectedMemoryRouter>
      );
    });

    it("should next button be disabled and the previous button enabled since it is the first track", () => {
      const { getByTestId } = screen;

      expect(getByTestId(playerPreviousIconEnabledTestId)).toBeInTheDocument();
      expect(getByTestId(playerNextIconDisabledTestId)).toBeInTheDocument();
    });
  });
});
