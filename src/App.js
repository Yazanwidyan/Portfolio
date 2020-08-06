import React from "react";
import Home from "./Containers/Home/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Layls from "./Containers/ProjectPage/Layls";
import Nike from "./Containers/ProjectPage/Nike";
import Monitor from "./Containers/ProjectPage/Monitor";
import Erasmus from "./Containers/ProjectPage/Erasmus";

function App() {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/nike" component={Nike} />
            <Route path="/layls" component={Layls} />
            <Route path="/monitor" component={Monitor} />
            <Route path="/erasmus" component={Erasmus} />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
