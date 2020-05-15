import React from "react";
import Button from "../components/Button";
import {loginCheck, signupCheck} from "../api";

export default function Login() {
  return (
      <div className={"login_frame"} id={"sign_version"}>
        <h1> Join Us </h1>
      <div id="login_box">
        <h2>SignUp</h2>
        <div id="form">
          <div id = "input_box">
            <input type="text" id="username" placeholder="Username" />
          </div>
          <div id = "input_box">
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div id = "input_box">
            <input type="password" id="confirmed_password" placeholder="Confirm Password" />
          </div>
        </div>

          <Button id="login_button" onClick={onSubmit}>
            Submit
          </Button>
          <Button id="login_button" onClick={onsubmit}>
            Reset
          </Button>

      </div>
      </div>
      /*<div id="login_frame" className={"right"}>
        <form method="post" action="login.js">
          <p>
            <label class="label_input">Username</label>
            <input type="text" id="username" class="text_field" />
          </p >
          <p>
            <label class="label_input">Password</label>
            <input type="password" id="password" class="text_field" />
          </p >
          <p>
            <label class="label_input">Confirm Password</label>
            <input type="password" id="confirmed_password" class="text_field" />
          </p >

          <div id="login_control">
            <Button className={"btn-logIn"} onClick={onSubmit}>
              Submit
            </Button>
            <Button className={"btn-signUp"} onClick={onsubmit}>
              Reset
            </Button>
          </div>
        </form>
      </div>*/
  );
}

function onSubmit() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var confirmed_password = document.getElementById("confirmed_password");
  signupCheck(username.value, password.value, confirmed_password.value);
}