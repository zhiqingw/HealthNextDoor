import React from "react";
import Button from "../components/Button";

export default function Login() {
  return (
      <div id="login_frame" className={"right"}>
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
      </div>
  );
}

function onSubmit() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var confirmed_password = document.getElementById("confirmed_password");

  if (username.value === "") {
    alert("please input a username!");
  } else if (password.value === "") {
    alert("please input a password!");
  } else if (confirmed_password.value === "") {
    alert("please confirm your password!");
    //window.location.href="welcome.html";
  } else if (password.value !== confirmed_password.value) {
    alert("password and confirmed password does not match");
  } else if (password.value === confirmed_password.value) {
    alert("Successful!");
  }
}