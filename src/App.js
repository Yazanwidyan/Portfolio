import React from "react";
import Home from "./Containers/Home/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Layls from "./Containers/ProjectPage/Layls";
import Nike from "./Containers/ProjectPage/Nike";
import Monitor from "./Containers/ProjectPage/Monitor";
import Erasmus from "./Containers/ProjectPage/Erasmus";
import Slack from "./Containers/ProjectPage/Slack";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/nike" component={Nike} />
            <Route path="/layls" component={Layls} />
            <Route path="/monitor" component={Monitor} />
            <Route path="/erasmus" component={Erasmus} />
            <Route path="/slack" component={Slack} />
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
