import React, { useState } from "react";

import {addCaregiver, updateCaregiver, updatePatient} from "../api";
import Button from "../components/Button";

export default function UpdatePatientProfile() {

    return (
        <div className="addCaregiver">
            <h1>Update Profile</h1>
            <table id='profile'>
                <tr><td>firstname</td> <td><textarea rows = "1" cols = "40" id="first_name">
         </textarea></td></tr>
                <tr><td>lastname</td> <td><textarea rows = "1" cols = "40" id="last_name">
         </textarea></td></tr>
                <tr><td>gender(male/female)</td> <td><textarea rows = "1" cols = "40" id="gender">
         </textarea></td></tr>
                <tr><td>age</td><td><textarea rows = "1" cols = "40" id="age">
         </textarea></td></tr>
                <tr><td>address(city)</td><td><textarea rows = "1" cols = "40" id="address">
         </textarea></td></tr>
                <tr><td>contact infromation</td><td><textarea rows = "1" cols = "40" id="contact_information">
         </textarea></td></tr>
                <tr height={'100px'}><td>introduction</td><td><textarea rows = "5" cols = "40" id="introduction">
         </textarea></td></tr>
                <Button className={"btn-success"} onClick={onSubmit}>
                    Save
                </Button>
            </table>
        </div>
    );
}

function onSubmit() {
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var gender = document.getElementById("gender").value;
    var introduction = document.getElementById("introduction").value;
    var age = document.getElementById("age").value
    var address = document.getElementById("address").value;
    var contact_information = document.getElementById("contact_information").value;
    const username = window.sessionStorage.getItem("username");
    updatePatient({
        first_name,
        last_name,
        gender,
        introduction,
        username,
        age,
        address,
        contact_information,
    });
}