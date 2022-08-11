import React from "react";
import Home from "./Containers/Home/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Layls from "./Containers/ProjectPage/Layls";
import Monitor from "./Containers/ProjectPage/Monitor";
import Erasmus from "./Containers/ProjectPage/Erasmus";
import Tab3 from "./Containers/ProjectPage/Tab3";
import Footer from "./Components/Common/Footer";
import NewProject from "./Containers/ProjectPage/NewProject";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/layls" component={Layls} />
            <Route path="/monitor" component={Monitor} />
            <Route path="/erasmus" component={Erasmus} />
            <Route path="/tab3" component={Tab3} />
            <Route path="/newProject" component={NewProject} />
          </div>
          <Footer />
        </>
      </Switch>
    </Router>
  );
}

export default App;
