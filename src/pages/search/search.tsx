import React, { FunctionComponent, useEffect } from "react";
import { SearchInput } from "components";
import { useHistory, useLocation } from "react-router-dom";

const Search: FunctionComponent = () => {
  const history = useHistory();
  const query = useLocation().search;

  useEffect(() => {
    console.warn("HERE WILL GO THE FETCH TO ITUNES", query);
  }, [query]);

  return (
    <main>
      Search Page
      <SearchInput
        initialValue={decodeURIComponent(query.substring(1))}
        maxWidth="380px"
        handleSubmit={(value) => {
          history.replace(`?${value}`);
        }}
      />
    </main>
  );
};

export default Search;
