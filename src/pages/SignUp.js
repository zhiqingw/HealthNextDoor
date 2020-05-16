import React from "react";
import Button from "../components/Button";
import {signupCheck} from "../api";

export default function Signup() {
  return (
      <div className={"login_frame"} id={"sign_version"}>
        <h1> Join Us </h1>
        <div className="login_box">
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

          <Button className="login_button" onClick={onSubmit}>
            Submit
          </Button>
          <Button className="login_button" onClick={onsubmit}>
            Reset
          </Button>

        </div>
      </div>
  );
}

function onSubmit() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var confirmed_password = document.getElementById("confirmed_password");
  signupCheck(username.value, password.value, confirmed_password.value);
}