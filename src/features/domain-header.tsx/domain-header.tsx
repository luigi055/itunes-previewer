import React, { FunctionComponent, useEffect } from "react";
import { Header, SearchInput } from "components";
import { useHistory, useLocation } from "react-router-dom";
import { DesignH1 } from "components/typography/heading";

const DomainHeader: FunctionComponent = () => {
  const history = useHistory();
  const query = useLocation().search;

  useEffect(() => {
    console.warn("HERE WILL GO THE FETCH TO ITUNES", query);
  }, [query]);

  return (
    <Header>
      <DesignH1 isFontWeightNormal>CornerJob Music Player</DesignH1>
      <SearchInput
        initialValue={decodeURIComponent(query.substring(1))}
        maxWidth="380px"
        screenReaderTitle="search for your favorite music"
        handleSubmit={(value) => {
          history.replace(`/search?${value}`);
        }}
      />
    </Header>
  );
};

export default DomainHeader;
