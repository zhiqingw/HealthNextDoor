import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Header from "./components/Header";

import Home from "./pages/Home";
import Authors from "./pages/Authors";
import Caregivers from "./pages/Caregivers";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import "./styles.css";
import User from "./pages/User";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* the content */}
        {/* A <Switch> looks through its children <Route>s and
   renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/authors">
            <Authors />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path='/user-management'>
            <User />
          </Route>
          <Route path='/findCaregivers'>
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
