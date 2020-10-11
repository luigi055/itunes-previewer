class ITunesClient {
  static async search(term: string): Promise<SearchResult> {
    return await (
      await fetch(
        `${process.env.REACT_APP_ITUNES_SEARCH_URI}${term.replace(/\s/g, "+")}`
      )
    ).json();
  }
}

export default ITunesClient;
