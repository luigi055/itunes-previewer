import React, { FunctionComponent, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Header, SearchInput } from "components";
import { DesignH1 } from "components/typography";
import { basePaths } from "application/routes-config";
import { useDispatch } from "react-redux";
import { searchSongsStart } from "features/search-songs";

const DomainHeader: FunctionComponent = () => {
  const history = useHistory();
  const {artistName} = useParams() as DomainURIParams;
  const searchInfo = artistName || "";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchSongsStart(searchInfo));
  }, [searchInfo, dispatch]);

  return (
    <Header>
      <DesignH1 isFontWeightNormal data-testid="application-heading">
        CornerJob Music Player
      </DesignH1>
      <SearchInput
        data-testid="search-input"
        initialValue={decodeURIComponent(searchInfo)}
        maxWidth="380px"
        screenReaderTitle="search for your favorite music"
        handleSubmit={(value) => {
          history.replace(`${basePaths.SEARCH}/${value}`);
        }}
      />
    </Header>
  );
};

export default DomainHeader;
