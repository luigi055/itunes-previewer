import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Search from "pages/search";
import routes from "./routes-config";

const ClientRouter: FunctionComponent = () => (
  <Switch>
    <Route exact path={routes.HOME}>
      <Redirect to={routes.SEARCH} />
    </Route>
    <Route path={routes.SEARCH} exact>
      <Search />
    </Route>
  </Switch>
);

export default ClientRouter;
