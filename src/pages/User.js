import React from "react";
import { updateUser, useCaregivers, usePatients, useUser} from "../api";
import Button from "../components/Button";
import {Caregiver} from "./Caregivers";
import Loading from "../components/Loading";

/*user home page*/
export default function Users() {
    const { loading, caregivers, error } = useCaregivers();
    const { loading_p, patients, error_p} = usePatients();
    const { loadings, user, errors } = useUser();
    if (loading || loading_p) {
        return Loading();
    }
    if (error || error_p) {
        return <p>Something went wrong: {error.message}</p>;
    }
    if (loadings) {
        return Loading();
    }
    if (errors) {
        return <p>Something went wrong: {error.message}</p>;
    }
    var notFound = -1;
    let username;
    username = window.location.pathname;
    let index;
    index = username.lastIndexOf('/');
    let name;
    name = username.slice(index+1);
    console.log(name);
    let match;
    var userIdentity = undefined;
    user.map(singleuser => {
        if (singleuser.username === name){
            userIdentity = singleuser.identity;
    }});
    if (userIdentity === "caregiver"){
        caregivers.map(caregiver =>{
            if(caregiver.username===name){
                notFound = 0;
            }
        });
        if (notFound === -1){
            notFound = 1;
        }
    }
    if (userIdentity === "patient") {
        patients.map(patient => {
            if (patient.username === name) {
                notFound = 0;
            }
        });
        if (notFound === -1){
            notFound = 1;
        }
    }
    console.log(notFound);
    /*"notFound" is to check whether a user has only sign up as a user but didn't sign up for as a caregiver or patient */
    if (notFound === -1){
        return("")
    }
    if (userIdentity === "caregiver" && notFound === 0){
        return (
            <div className={"user_home_page"}>
                <h1>Welcome, {window.sessionStorage.getItem("username")}</h1>
                <div id={"htwo"}>
                    <h2>Profile</h2>
                </div>

                <div id={"tryy"}>
                    {caregivers.map(caregiver =>{
                        if(caregiver.username===name){
                            //console.log(caregiver);
                           return <Caregiver key={caregiver.username} {...caregiver} />
                        }
                    })}



                </div>

            </div>

        );
    } if (userIdentity === "patient" && notFound === 0) {
        return (
            <div className={"user_home_page"}>
                <h1 id={"lol"}>Welcome, {window.sessionStorage.getItem("username")}</h1>
                <div id={"htwo"}>
                    <h2>Profile</h2>
                </div>

                <div id={"tryy"}>
                    {patients.map(patient =>{
                        if(patient.username===name){
                            return <Patient key={patient.username} {...patient} />
                        }
                    })}

                </div>
            </div>
        );
    } if (userIdentity === "caregiver" && notFound === 1) {
        console.log(userIdentity);
        return (
            <div className={"user_home_page"}>
                <h1>Welcome, {window.sessionStorage.getItem("username")}</h1>
                <div id={"htwo"}>
                    <h2>Warning!</h2>
                </div>
                <p> Your infomation is not saved successfully, please click the button below to fill the infomation! </p>
                <Button className="login_button" onClick={fillCaregiverInformation}>
                    Fill infomation
                </Button>
            </div>

        )
    } if (userIdentity === "patient" && notFound === 1) {
        return (
            <div className={"user_home_page"}>
                <h1>Welcome, {window.sessionStorage.getItem("username")}</h1>
                <div id={"htwo"}>
                    <h2>Warning!</h2>
                </div>
                <p> Your infomation is not saved successfully, please click the button below to fill the infomation! </p>
                <Button className="login_button" onClick={fillPatientInformation}>
                    Fill infomation
                </Button>
            </div>
        )
    }
}

function fillCaregiverInformation(){
    window.location.assign('http://localhost:3000/AddCaregiver');
}

function fillPatientInformation(){
    window.location.assign('http://localhost:3000/AddPatient');
}

/*log out and redirect to home page*/
export function Logout(){
    window.sessionStorage.removeItem("username");
    window.location.assign('http://localhost:3000');
}



export function UserExtended() {
    function onSubmit() {
        var username = window.sessionStorage.getItem("username");
        var confirmed_password = document.getElementById("confirmed_password");
        var password = document.getElementById("password");
        if(confirmed_password.value !== password.value){
            alert("password and confirmed password does not match");
        }else{
            updateUser({
                username: username,
                password: password.value,
            });
            //window.location.assign(`http://localhost:3000/user-management/${window.sessionStorage.getItem("username")}`)
        }
    }

    return (
            <div id={"reset_box"} className={"login_box"}>
                <div id="reset_info">
                    <div>
                        <input type="password" id="password" placeholder="Password" className="text_field"/>
                    </div>
                    <div>
                        <input type="password" id="confirmed_password" placeholder="Confirm password"className="text_field"/>
                    </div>
                </div>
                <div>
                    <Button id={"reset_but"} className={"login_button"} onClick={onSubmit}>
                        Update
                    </Button>
                </div>
            </div>
    );
}
/*to the reset page*/
export function toReset() {
    window.location.assign("http://localhost:3000/resetPassword")
}
/*to the list page*/
export function toList(user){
    console.log(user);
    var string_type = JSON.stringify(user);
    sessionStorage.setItem("listing",string_type);
    window.location.assign(`http://localhost:3000/toList/${window.sessionStorage.getItem("username")}`)

}
/*to the patient page*/
function toPatient(){
    window.location.assign("http://localhost:3000/toPatient")

}

/*show the personal information of the patient*/
export function Patient(patient) {
    const { first_name, last_name, gender, introduction, username, age, address, contact_information} = patient;

    return (
        <div>
            <table id='profile'>
                <tr><td>Firstname:</td> <td>{first_name}</td></tr>
                <tr><td>Lastname: </td> <td>{last_name}</td></tr>
                <tr><td>Gender: </td> <td>{gender}</td></tr>
                <tr><td>Age: </td> <td> {age}</td></tr>
                <tr><td>Address: </td> <td> {address}</td></tr>
                <tr><td>Contact information: </td> <td>{contact_information}</td></tr>
                <tr ><td>Introduction: </td> <td width={'300px'}>{introduction}</td></tr>
                <button className={"btn-success"} onClick={()=>updateProfilePatient(username)}>
                    update
                </button>
            </table>
        </div>
    );
}

/*update the personal information of the patient*/
function updateProfilePatient(){
    window.location.assign(`http://localhost:3000/updatePatientProfile`);
}