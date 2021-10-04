import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./Views/AboutUs";
import ContactUs from "./Views/ContactUs";
import Events from "./Views/Events";
import Gallery from "./Views/Gallery";
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
        <Route exact path="/aboutUs">
          <AboutUs />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/contactUs">
          <ContactUs />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
