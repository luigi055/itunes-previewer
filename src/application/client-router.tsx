import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Search from "pages/search";
import routes from "./routes-config";

const PlayList = ({ match: { params } }: any) => (
  <div>
    {params.artist} {params.trackNumber} {params.trackName}
  </div>
);

const ClientRouter: FunctionComponent = () => (
  <Switch>
    <Route exact path={routes.ROOT}>
      <Redirect to={routes.SEARCH} />
    </Route>
    <Route path={routes.SEARCH} exact>
      <Search />
    </Route>
    <Route path={routes.PLAYLIST} component={PlayList} exact></Route>
  </Switch>
);

export default ClientRouter;
