import React from "react";
import MainView from "./MainView";
import DetailView from "./DetailView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainView} />
        <Route exact path="/:id" component={DetailView} />
      </Switch>
    </Router>
  );
}

export default App;
