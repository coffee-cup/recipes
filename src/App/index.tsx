import * as React from "react";
import Wrapper from "../Wrapper";
import ListPage from "../ListPage";
import { Route, Switch } from "react-router";

const App = () => (
  <Switch>
    <Wrapper>
      <Route exact path="/" component={ListPage} />
    </Wrapper>
  </Switch>
);

export default App;
