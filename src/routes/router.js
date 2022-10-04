import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {RouteItems} from "routes/router-options";

const SlackPublicRoutes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        {RouteItems.map(Item => {
          return (
            <Route
              key={`${Item.path}_${Item.id}`}
              exact={Item.exact}
              path={Item.path}
              component={Item.component}
            />
          )
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default SlackPublicRoutes;