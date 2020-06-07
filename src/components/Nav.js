import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import {Logout} from "../pages/User";
import {toReset} from "../pages/User";
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
                    <ul className="nav">
                        <li className="drop-down">
                            <Button className={"userbt"} onClick={showUser}>{window.sessionStorage.getItem("username")}
                                <i className="fa fa-chevron-down" aria-hidden="true"/>
                            </Button>
                            <ul className="drop-down-content">
                                <li><Button className={"userbt"} onClick={toReset}>RESET PASSWORD</Button></li>
                                <li><Button className={"userbt"} onClick={toList}>LIST</Button></li>
                                <li><Button className={"userbt"} onClick={Logout}>LOG OUT</Button></li>
                            </ul>
                        </li>
                    </ul>
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
            window.location.assign(`https://healthnextdoor.herokuapp.com/user-management/${window.sessionStorage.getItem("username")}`)
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
function toList(){
    window.location.assign(`https://healthnextdoor.herokuapp.com/toList/${window.sessionStorage.getItem("username")}`);
}