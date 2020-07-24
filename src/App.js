import React from "react";
import Home from "./Containers/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectPage from "./Containers/ProjectPage/ProjectPage";

function App() {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/layls" component={ProjectPage} />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
