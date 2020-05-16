import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Caregivers from "./pages/Caregivers";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./styles.css";
import "./userStyle.css";
import User from "./pages/User";
import SearchCaregivers from "./pages/searchCaregivers";

export default function App() {
  return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
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
              <Caregivers />
            </Route>
            <Route path='/searchCaregivers'>
              <SearchCaregivers/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
