import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
export default function Nav() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/findCaregivers">Caregivers</NavLink>
    </nav>


  );
}
/*
function showUser(){
    var username = window.sessionStorage.getItem("username");

    if(username){
        return(
            window.location.href = `user-management/${window.sessionStorage.getItem("username")}`
        );
    }
}*/
