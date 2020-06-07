import React from "react";
import {loginCheck} from "../api";
import Button from "../components/Button";

export default function Login() {
    /*if the user already log in, redirect to the user home page*/
    if(window.sessionStorage.getItem("username")){
        window.location.href = `user-management/${window.sessionStorage.getItem("username")}`;
    }
    else{
        return (
            <div className={"login_frame"}>
                <div className="ti">Join us</div>
                <div className="login_box">
                    <div className="ti">LOGIN</div>
                    <div id="form">
                        <div id = "input_box">
                            <i className="fa fa-user-circle" aria-hidden="true"/>
                            <input type="text" id="username" placeholder="Username" />
                        </div>
                        <div id = "input_box">
                            <i className="fa fa-key" aria-hidden="true"/>
                            <input type="password" id="password" placeholder="Password" />
                        </div>
                    </div>
                    <Button className="login_button" onClick={login}>
                        Log in
                    </Button>
                    <div id="signup">
                        Don't have account?
                        <Button className="signup_button" onClick={toCurrent}>
                        Sign up
                        </Button>
                    </div>
                </div>
            </div>
        );}
}
/*
* Get and send the username and password back to back-end to check whether the user exists.
 */
function login() {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    loginCheck(username.value, pass.value);
}

/*if the user not have an account yet, click the sign up button and go to the sign up page*/
function toCurrent() {
    window.location.href = "SignUp";
}
