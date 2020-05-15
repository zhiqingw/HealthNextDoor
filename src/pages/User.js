import React, { useState } from "react";
import {updateUser, useCaregivers, useUser} from "../api";
import Button from "../components/Button";
import {Caregiver} from "./Caregivers";

export default function Users() {
    const { loading, caregivers, error } = useCaregivers();
    const { loadings, user, errors } = useUser();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    if (loadings) {
        return <p>Loading...</p>;
    }
    if (errors) {
        return <p>Something went wrong: {error.message}</p>;
    }

    // use this to make sure you are getting the right data
    // Display a list of the authors

    // Display a list of the users
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

            <div>
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
            <p>
           <User {...match} />
           </p>

        </div>
    );
}
function Logout(){
    window.sessionStorage.removeItem("username");
    window.location.assign('http://localhost:3000/')

}

function User(user) {
    const {username, password} = user;
    const [showUpdate, setShowUpdate] = useState(false);

    return (
        <div className={`user user-${username}`} key={username}>
            <h2 id={"one_line"}>Posting Record</h2>
            <div className="reset_pas" id={"one_line"}>
                <Button className={"btn"} id={"reset"} onClick={() => setShowUpdate(!showUpdate)}>
                    {showUpdate ? "reset password" : "reset password"}
                </Button>
            </div>
            <Button className={"btn-warning"} onClick={Logout}>
                Log out
            </Button>
            <div className={"posts"}></div>
            <UserExtended {...user} showUpdate={showUpdate} />
        </div>
    );
}

function UserExtended(props) {
    const { username, password, showUpdate} = props;

    const [password_input, setPassword] = useState(password);


    function onSubmit() {
        var confirmed_password = document.getElementById("confirmed_password");
        if(confirmed_password.value !== password_input){
            alert("password and confirmed password does not match");
        }
        // call upate author function
        updateUser({
            username: username,
            password: password_input
        });
    }

    return (
        <div className={`user-expand ${showUpdate ? "show" : ""}`}>
            <form className={`right`}>
                {/* TODO - add value and onChange properties to inputs */}
                <p>
                    <label className="label_input">Password</label>
                <input type="password" name="password" value={password_input} onChange = {event => {setPassword(event.target.value)}} />
                </p>
                <p>
                    <label className="label_input">Confirm Password</label>
                <input type="password" id="confirmed_password" className="text_field"/>
                </p>
                <Button className={"btn-warning"} onClick={onSubmit}>
                    Update
                </Button>
            </form>
        </div>
    );
}
