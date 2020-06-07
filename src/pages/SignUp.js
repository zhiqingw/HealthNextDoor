import React from "react";
import Button from "../components/Button";
import {signupCheck} from "../api";

export default function Signup() {
  return (
      <div className={"login_frame"} id={"sign_version"}>
        <div className="ti">Join us</div>
        <div className="login_box">
          <h2>SignUp</h2>
          <div>
            <form>
              <input type="radio" name="identity" id="caregiver" value="caregiver"/> Sign up as a caregiver &nbsp;&nbsp;&nbsp;
              <input type="radio" name="identity" id="patient" value="patient"/> Sign up as a Patient
            </form>
          </div>
          <div id="form">
            <div id = "input_box">
              <i className="fa fa-user-circle" aria-hidden="true"/>
              <input type="text" id="username" placeholder="Username" />
            </div>
            <div id = "input_box">
              <i className="fa fa-key" aria-hidden="true"/>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <div id = "input_box">
              <i className="fa fa-key" aria-hidden="true"/>
              <input type="password" id="confirmed_password" placeholder="Confirm Password" />
            </div>
          </div>
          <Button className="login_button" onClick={onSubmit}>
            Submit
          </Button>

        </div>
      </div>
  );
}

function onSubmit() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var confirmed_password = document.getElementById("confirmed_password");
  var caregiver = document.getElementById("caregiver");
  var patient = document.getElementById("patient");
  if(caregiver.checked){
    //console.log(caregiver.value);
    signupCheck(username.value, password.value, confirmed_password.value, caregiver.value);
    //window.location.href = "AddCaregiver"
  } else if(patient.checked){
    signupCheck(username.value, password.value, confirmed_password.value, patient.value);
    //window.location.href = "AddPatient"
  }
  if(!caregiver.checked && !patient.checked){
    alert("Must select an identity!")
    return;
  }



}