import React, { FunctionComponent, useEffect } from "react";
import { Header, SearchInput } from "components";
import { useHistory, useLocation } from "react-router-dom";

const Search: FunctionComponent = () => {
  const history = useHistory();
  const query = useLocation().search;

  useEffect(() => {
    console.warn("HERE WILL GO THE FETCH TO ITUNES", query);
  }, [query]);

  return (
    <main>
      <Header>
        <h1> Search Page</h1>
        <SearchInput
          initialValue={decodeURIComponent(query.substring(1))}
          maxWidth="380px"
          screenReaderTitle="search for your favorite music"
          handleSubmit={(value) => {
            history.replace(`?${value}`);
          }}
        />
      </Header>
    </main>
  );
};

export default Search;
