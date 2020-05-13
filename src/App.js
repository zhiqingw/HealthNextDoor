import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Header from "./components/Header";

import Home from "./pages/Home";
import Caregivers from "./pages/Caregivers";

import "./styles.css";

export default function App() {
  return (
      <Router>
        <div className="App">
          <Nav />
          <Header />
          {/* the content */}
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>

              <Route path="/caregivers">
                  <Caregivers/>
              </Route>
          </Switch>
        </div>
      </Router>

  );
}
