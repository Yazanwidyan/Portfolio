import React from "react";
import Home from "./Containers/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layls from "./Containers/ProjectPage/Layls";
import Nike from "./Containers/ProjectPage/Nike";

function App() {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/nike" component={Nike} />
            <Route path="/layls" component={Layls} />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
