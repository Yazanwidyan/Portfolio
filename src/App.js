import React from "react";
import Home from "./Containers/Home/Home";
import About from "./Containers/About/About";
import Work from "./Containers/Work/Work";
import Contact from "./Containers/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <div className="App">
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/work" component={Work} />
            <Route exact path="/" component={Home} />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
