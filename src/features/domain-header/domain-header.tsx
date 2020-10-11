import React, { FunctionComponent, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Header, SearchInput } from "components";
import { DesignH1 } from "components/typography";
import routesConfig from "application/routes-config";
import ITunesClient from "services/externals/itunes-api";

const DomainHeader: FunctionComponent = () => {
  const history = useHistory();
  const query = useLocation().search;

  useEffect(() => {
    (async () => {
      const songs = await ITunesClient.search(query);
      console.warn(songs);
    })();
  }, [query]);

  return (
    <Header>
      <DesignH1 isFontWeightNormal data-testid="application-heading">
        CornerJob Music Player
      </DesignH1>
      <SearchInput
        data-testid="search-input"
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
