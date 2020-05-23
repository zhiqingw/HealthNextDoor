import React, { useState } from "react";
import {updateUser, useCaregivers, useUser} from "../api";
import Button from "../components/Button";
import {Caregiver} from "./Caregivers";
import Loading from "../components/Loading";
/*user home page*/
export default function Users() {
    const { loading, caregivers, error } = useCaregivers();
    const { loadings, user, errors } = useUser();
    if (loading) {
        return Loading();
    }
    if (error) {
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
    let match;
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
                    else{
                        return
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

                <Button id={"btn-toList"} onClick={toList}>
                List
                </Button>
                <Button id={"patient_list"} onClick={toPatient}>
                    Patient List
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


function toReset() {
    window.location.assign("http://localhost:3000/resetPassword")
}

function toList(){
    window.location.assign(`http://localhost:3000/toList/${window.sessionStorage.getItem("username")}`)

}
function toPatient(){
    window.location.assign("http://localhost:3000/toPatient")

}