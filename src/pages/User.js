import React, { useState } from "react";
import {updateUser, useCaregivers, useUser} from "../api";
import Button from "../components/Button";
import {Caregiver} from "./Caregivers";
import Loading from "../components/Loading";
import ToList from "../pages/ToList"
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
                <Button id={"posting_record"} onClick={toPostRecord}>
                    Posting Record
                </Button>
            </div>
            <div className={"list"}>
            <div>
                {user.orderList.map(name => (
                    <p>
                        <button>
                            {name}
                        </button>
                    </p>
                ))}
            </div>


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

function toPostRecord() {


    window.location.assign(`http://localhost:3000/PostingRecord/${window.sessionStorage.getItem("username")}`)
}