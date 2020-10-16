import React from "react";
import { setStore, storeInitialState } from "services/application/redux";
import { dummySearchData } from "services/externals/itunes-api/mock";
import { ConnectedMemoryRouter, Random } from "test-utils";
import Preview from "./preview";
import { render, screen } from "@testing-library/react";
import { Store } from "redux";
import MediaPlayerLinksGenerator from "application/route-logic/media-player-links-generator";
import Track from "domain/track";
import routesConfig, { basePaths } from "application/routes-config";
import { sortEnum } from "pages/search/search";

const playerPreviousIconEnabledTestId = "player-previous-icon-enabled";
const playerPreviousIconDisabledTestId = "player-previous-icon-disabled";
const playerNextIconEnabledTestId = "player-next-icon-enabled";
const playerNextIconDisabledTestId = "player-next-icon-disabled";
const coverImageTestId = "cover-image";
const coverTrackNameTestId = "cover-track-name";
const coverArtistNameTestId = "cover-artist-name";
const playerSourceTestId = "player-source";
const socialShareTestId = "social-share-component";

describe("Testing the Preview Page", () => {
  let store: Store;
  const mediaPlayerLinkGenerator = new MediaPlayerLinksGenerator({
    ...dummySearchData,
    searchTerm: "",
    sortedTracks: dummySearchData.results,
    sortedBy: sortEnum.unsorted,
  });

  const generateDummyURLBasedOnTracks = (track: ITrack) =>
    `${
      basePaths.PREVIEW
    }/${Random.getString()}/track-${track.getTrackNumber()}/${Random.getString()}`;

  const initializeStoreData = (currentTrack: ITrack) => {
    const track = dummySearchData.results[currentTrack.toZeroBaseIndex()];

    return {
      ...storeInitialState,
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
      },
    };
  };

  describe("Testing first track preview", () => {
    const currentTrack = new Track(1).defineMaxLimit(
      dummySearchData.resultCount
    );
    const firstTrack = dummySearchData.results[currentTrack.toZeroBaseIndex()];

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

      expect(getByTestId(coverImageTestId).src).toContain(
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

      expect(getByTestId(playerSourceTestId).src).toContain(
        firstTrack.previewUrl
      );
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
      dummySearchData.resultCount
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

    it("should both buttons enabled", () => {
      const { getByTestId } = screen;

      expect(getByTestId(playerPreviousIconEnabledTestId)).toBeInTheDocument();
      expect(getByTestId(playerNextIconEnabledTestId)).toBeInTheDocument();
    });
  });
  describe("testing last track preview", () => {
    const currentTrack = new Track(10).defineMaxLimit(
      dummySearchData.resultCount
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
