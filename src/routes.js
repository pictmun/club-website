import React from "react";
import { Route, Switch } from "react-router-dom";
import Events from "./Views/Events";
import Home from "./Views/Home";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
