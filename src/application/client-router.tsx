import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Search from "pages/search";
import routes from "./routes-config";
import Preview from "pages/preview";

const ClientRouter: FunctionComponent = () => (
  <Switch>
    <Route exact path={routes.ROOT}>
      <Redirect to={routes.SEARCH} />
    </Route>
    <Route path={routes.SEARCH} exact>
      <Search />
    </Route>
    <Route path={routes.PREVIEW} component={Preview} exact></Route>
  </Switch>
);

export default ClientRouter;
