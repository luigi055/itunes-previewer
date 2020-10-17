import { Random } from "utils/test";
const arrayLength = 10;

export const dummySearchData = {
  resultCount: arrayLength,
  results: [...Array(arrayLength)].map((e) => ({
    trackId: Random.getNumber(),
    trackName: Random.getString(),
    artistName: Random.getString(),
    collectionName: Random.getString(),
    trackTimeMillis: Random.getNumber(),
    primaryGenreName: Random.getString(),
    trackPrice: Random.getNumber(),
    currency: Random.getString(),
    previewUrl: Random.getString(),
    artworkUrl60: Random.getString(),
    artworkUrl100: Random.getString(),
  })),
};

export const fetchSearchAPIMocked = () => {
  return Promise.resolve({
    json: () => Promise.resolve(dummySearchData),
    ok: true,
  } as any);
};
