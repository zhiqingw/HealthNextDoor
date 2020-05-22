import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Caregivers from "./pages/Caregivers";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NewCaregiver from "./pages/newCaregiver"
import "./views/styles.css";
import "./views/userStyle.css";
import "./views/caregiverStyle.css"
import "./views/loginStyle.css"
import "./views/homeStyle.css"
import "./views/loadingStyle.css"
import User from "./pages/User";
import SearchCaregivers from "./pages/searchCaregivers";
import ResetPassword from "./pages/resetPassword"

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
            <Route path="/AddCaregiver">
              <NewCaregiver />
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
            <Route path='/resetPassword'>
              <ResetPassword/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
