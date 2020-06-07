import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Caregivers from "./pages/Caregivers";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NewCaregiver from "./pages/newCaregiver"
import NewPatient from "./pages/newPatient";
import "./views/styles.css";
import "./views/userStyle.css";
import "./views/caregiverStyle.css"
import "./views/loginStyle.css"
import "./views/homeStyle.css"
import "./views/loadingStyle.css"
import "./views/listStyle.css"
import "./views/ratingStyle.css"
import User from "./pages/User";
import SearchCaregivers from "./pages/searchCaregivers";
import ResetPassword from "./pages/resetPassword"
import ToList from "./pages/ToList";
//import ToPatient from "./pages/ToPatient";
import CaregiverInformation from "./pages/CaregiverInformation";
import PatientInformation from "./pages/ToPatient";
import Rate from "./components/rating";
import UpdateProfile from "./components/updateProfile";

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
            <Route path="/AddPatient">
              <NewPatient />
            </Route>
            <Route path="/CaregiverInformation">
              <CaregiverInformation />
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
            <Route path='/toList'>
              <ToList/>
            </Route>
            <Route path='/toPatient'>
              <PatientInformation/>
            </Route>
            <Route path='/rating'>
              <Rate/>
            </Route>
            <Route path='/updateProfile'>
              <UpdateProfile/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
