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
                <div id="login_box">
                    <h2>LOGIN</h2>
                    <div id="form">
                        <div id = "input_box">
                            <input type="text" id="username" placeholder="Username" />
                        </div>
                        <div id = "input_box">
                            <input type="password" id="password" placeholder="Password" />
                        </div>
                    </div>
                    <Button id="login_button" onClick={login}>
                        Log in
                    </Button>
                    <Button id="login_button" onClick={toCurrent}>
                        Sign up
                    </Button>
                </div>
            </div>
        );}
}

function login() {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    loginCheck(username.value, pass.value);
    /*
      if (username.value === "") {
        alert("please input username!");
      } else if (pass.value === "") {
        alert("please input password!");
      } else if (username.value === "gmy" && pass.value === "123456") {
        //window.location.href="welcome.html";
      } else {
        alert("please input correct username and password!");
      }*/
}

function toCurrent() {
    window.location.href = "SignUp";
}

function toNew() {
    const w = window.open("about:blank");
    w.location.href = "SignUp";
}