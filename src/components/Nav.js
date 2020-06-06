import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import {Logout} from "../pages/User";
import Logo from "./Logo";

export default function Nav() {
    if(window.sessionStorage.getItem("username")){
        return (
            <div className={"whole_nav"}>
                <div id={"logo_part"}>
                    <Logo/>
                </div>
                <div id={"nav_part"}>
                <nav id="head">
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                    <NavLink to="/login">User Center</NavLink>
                    <NavLink to="/findCaregivers">Caregivers</NavLink>
                    <h id="hello">Hello, </h>
                    <Button id="user_button" onClick={showUser}>{window.sessionStorage.getItem("username")}</Button>
                    <Button className={"logout"} onClick={Logout}>
                        Log out
                    </Button>
                </nav>
                </div>

            </div>

        );
    }
    return (
        <div className={"whole_nav"}>
            <div id={"logo_part"}>
                <Logo/>
            </div>
            <div id={"nav_part"}>
            <nav id="head">
                <NavLink exact to="/">
                    Home
                </NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/findCaregivers">Caregivers</NavLink>

            </nav>
            </div>
        </div>

    );
}

function showUser(){
    var username = window.sessionStorage.getItem("username");

    if(username){
        return(
            window.location.assign(`http://localhost:3000/user-management/${window.sessionStorage.getItem("username")}`)
        );
    }
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
