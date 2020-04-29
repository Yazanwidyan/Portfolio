import React from "react";
import Home from "./Containers/Home/Home";
import About from "./Containers/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
