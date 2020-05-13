import React from "react";
import { NavLink } from "react-router-dom";
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
