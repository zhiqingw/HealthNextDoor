import React, { useState } from "react";
import {updatePatient, deletePatient, updateUser, useCaregivers, usePatients, useUser} from "../api";
import Button from "../components/Button";
import {Caregiver} from "./Caregivers";
import Loading from "../components/Loading";
import ToList from "../pages/ToList"
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
    let username;
    username = window.location.pathname;
    let index;
    index = username.lastIndexOf('/');
    let name;
    name = username.slice(index+1);
    console.log(name);
    let match;
    var identity = user.identity;
    console.log(identity);
    console.log(user);
    if(user.identity === "caregiver"){

        return (
            <div>
                <h1>Welcome, {window.sessionStorage.getItem("username")}</h1>
                <div id={"htwo"}>
                    <h2>Posting Record</h2>
                </div>

                <div id={"tryy"}>
                    {caregivers.map(caregiver =>{
                        if(caregiver.username===name){
                           return <Caregiver key={caregiver.username} {...caregiver} />
                        }
                    })}

                </div>
                {user.map(used =>{
                    if(used.username===name){
                        match = used;
                    }
                })}
                <User id={"user_h2"} {...match} />
            </div>
        );
    } else {
        return (
            <div>
                <h1>Welcome, {window.sessionStorage.getItem("username")}</h1>
                <div id={"htwo"}>
                    <h2>Posting Record</h2>
                </div>

                <div id={"tryy"}>
                    {patients.map(patient =>{
                        if(patient.username===name){
                            return <Patient key={patient.username} {...patient} />
                        }
                    })}

                </div>
                {user.map(used =>{
                    if(used.username===name){
                        match = used;
                    }
                })}
                <User id={"user_h2"} {...match} />
            </div>
        );
    }
}

/*log out and redirect to home page*/
export function Logout(){
    window.sessionStorage.removeItem("username");
    window.location.assign('http://localhost:3000')
}

/*reset password*/
function User(user) {
    const {username, password} = user;
    const [showUpdate, setShowUpdate] = useState(false);

    return (
        <div className={`user user-${username}`} key={username}>
            <div id={"reset"}>
                <Button id={"btn-resetpassword"} onClick={toReset}>
                    Reset Password
                </Button>

                <Button id={"btn-toList"} onClick={() => toList(user)}>
                List
                </Button>
            </div>

            </div>


    );
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
            window.location.assign(`http://localhost:3000/user-management/${window.sessionStorage.getItem("username")}`)
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

/*export function UserExtendedList() {

    function onSubmit() {
        var username = window.sessionStorage.getItem("username");

            updateUserList({
                username: username,


            });
            window.location.assign(`http://localhost:3000/toList/${window.sessionStorage.getItem("username")}`)

    }

    return (
        <div>

        </div>
    );
}
*/
function toReset() {
    window.location.assign("http://localhost:3000/resetPassword")
}

function toList(user){
    console.log(user);
    var string_type = JSON.stringify(user);
    sessionStorage.setItem("listing",string_type);
    window.location.assign(`http://localhost:3000/toList/${window.sessionStorage.getItem("username")}`)
    /*return(
        <div>
            <ToList {...user}/>
        </div>

    );*/
}
function toPatient(){
    window.location.assign("http://localhost:3000/toPatient")

}

//==========================================================================================================================
export function Patient(patient) {
    const { first_name, last_name, gender, introduction, username, age, address, contact_information} = patient;
    const [showUpdate, setShowUpdate] = useState(false);

    return (
        <div className={`caregiver caregiver-${username}`} key={username}>
            <div className="info">
                <div id="txt">Username: {username}</div>
                <div id="txt">First_name: {first_name}</div>
                <div id="txt">Last_name: {last_name}</div>
                <div id="txt">Gender: {gender}</div>

                <div id="txt">Age: {age}</div>



                <Button className={"btn"} onClick={() => setShowUpdate(!showUpdate)}>
                    {showUpdate ? "-" : "+"}
                </Button>
            </div>
            <div id={"list_front"}>
                <PatientExtended {...patient} showUpdate={showUpdate} />
            </div>
        </div>
    );
}

function PatientExtended(props) {
    const { first_name, last_name, gender, introduction, username, age, address,showUpdate,
        contact_information} = props;
    const [first_input, setFirstName] = useState(first_name);
    const [last_input, setLastName] = useState(last_name);
    const [gender_input, setGender] = useState(gender);
    const [introduction_input,setIntroduction] = useState(introduction);
    const [age_input,setAge] = useState(age);
    const [address_input,setAddress] = useState(address);
    const [contact_input,setContact_information] = useState(contact_information);
    function onSubmit() {
        // call upate caregiver function
        console.log(contact_input);
        updatePatient({
            first_name: first_input,
            last_name: last_input,
            gender: gender_input,
            introduction: introduction_input,
            username: username,
            age: age_input,
            address: address_input,
            contact_information: contact_input,
        });
        window.location.assign(`http://localhost:3000/user-management/${window.sessionStorage.getItem("username")}`)
    }

    return (

        <div className={`caregiver-expand ${showUpdate ? "show" : ""}`}>
            <form className={"caregiver-expand-left"}>
                {/* TODO - add value and onChange properties to inputs */}
                <p>
                    <label className="update_input">first name</label>
                    <input type="text" name="first_name" value = {first_input} onChange={event => {setFirstName(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">last name</label>
                    <input type="text" name="last_name" value = {last_input} onChange={event => {setLastName(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">gender</label>
                    <input type="text" name="gender" value = {gender_input} onChange={event => {setGender(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">introduction</label>
                    <input type="text" name="introduction" value = {introduction_input} onChange={event => {setIntroduction(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">age</label>
                    <input type="text" name="age" value = {age_input} onChange={event => {setAge(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">address</label>
                    <input type="text" name="introduction" value = {address_input} onChange={event => {setAddress(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">contact information</label>
                    <input type="text" name="contact_information" value = {contact_input} onChange={event => {setContact_information(event.target.value);}}/>
                </p>

                <Button className={"btn-danger"} onClick={onSubmit}>
                    Update
                </Button>

                <Button className={"btn-danger"} onClick={() => deletePatient(username)}>
                    Delete
                </Button>
            </form><form className={"caregiver-expand-right"}></form>


        </div>
    );
}