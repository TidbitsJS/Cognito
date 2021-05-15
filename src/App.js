import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Developer from "./container/Developer/Developer";
import Landing from "./container/Landing/Landing";
import { Pricing } from "./container/Pricing/Pricing";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/pricing" exact>
          <Pricing />
        </Route>
        <Route path="/developers" exact>
          <Developer />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
