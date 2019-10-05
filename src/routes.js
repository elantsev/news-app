import React from "react";
import { Switch, Route } from "react-router-dom";
import Tech from "./components/Tech";
import Main from "./components/Main";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/tech" component={Tech} />
  </Switch>
);

export default Routes;
