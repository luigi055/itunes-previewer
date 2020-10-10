import React, { FunctionComponent, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Header, SearchInput } from "components";
import { DesignH1 } from "components/typography";
import routesConfig from "application/routes-config";

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
          history.replace(`${routesConfig.SEARCH}?${value}`);
        }}
      />
    </Header>
  );
};

export default DomainHeader;
