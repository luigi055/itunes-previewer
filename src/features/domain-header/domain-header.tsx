import React, { FunctionComponent, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Header, SearchInput } from "components";
import { DesignH1 } from "components/typography";
import { basePaths } from "application/routes-config";
import { useDispatch } from "react-redux";
import { searchSongsStart, updateSortedBy } from "features/search-songs";

const DomainHeader: FunctionComponent = () => {
  const history = useHistory();
  const { artistName } = useParams() as DomainURIParams;
  const searchInfo = artistName || "";
  const query = useLocation().search;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSortedBy(query.slice(1)));
    dispatch(searchSongsStart(searchInfo));
  }, [searchInfo, query,dispatch]);

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
