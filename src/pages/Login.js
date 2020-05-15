import React from "react";
import {loginCheck} from "../api";
import Button from "../components/Button";

export default function Login() {
    if(window.sessionStorage.getItem("username")){
        window.location.href = `user-management/${window.sessionStorage.getItem("username")}`;
    }
    else{
        return (
            <div>

                <div>
                    <h1 id={"h1_login"}> Join Us </h1>
                </div>

                <div id="login_frame">

                    <form method="post" action="login.js">

                        <p>
                            <label className="label_input">Username</label>
                            <input type="text" id="username" className="text_field" />
                        </p>
                        <p>
                            <label className="label_input">Password</label>
                            <input type="password" id="password" className="text_field" />
                        </p>

                        <div id="login_control">
                            <Button className={"btn-logIn"} onClick={login}>
                                Log in
                            </Button>
                            <Button className={"btn-signUp"} onClick={toCurrent}>
                                Sign up
                            </Button>
                        </div>
                    </form>
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
