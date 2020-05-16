import React from "react";
import {loginCheck} from "../api";
import Button from "../components/Button";

export default function Login() {
    if(window.sessionStorage.getItem("username")){
        window.location.href = `user-management/${window.sessionStorage.getItem("username")}`;
    }
    else{
        return (
            <div className={"login_frame"}>
                <h1> Join Us </h1>
                <div className="login_box">
                    <h2>LOGIN</h2>
                    <div id="form">
                        <div id = "input_box">
                            <input type="text" id="username" placeholder="Username" />
                        </div>
                        <div id = "input_box">
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

function login() {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    loginCheck(username.value, pass.value);
}

function toCurrent() {
    window.location.assign("SignUp")
}
