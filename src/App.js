import React from "react";
import MainView from "./components/MainView";
import DetailView from "./components/DetailView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SWRConfig } from "swr";
import {
  fetcher,
  dedupingInterval,
  revalidateOnFocus,
} from "./utils/SWRConfig";

function App() {
  return (
    <Router>
      <SWRConfig value={{ dedupingInterval, revalidateOnFocus, fetcher }}>
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route exact path="/:id" component={DetailView} />
        </Switch>
      </SWRConfig>
    </Router>
  );
}

export default App;
