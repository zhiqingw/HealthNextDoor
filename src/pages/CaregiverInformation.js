import React, { useState } from "react";
import {useCaregivers, updateCaregiver, deleteCaregiver, sendRequest, sentRequestPatient, useUser} from "../api";

import Button from "../components/Button";
import Filter from "../components/Filter";
import HomePage from "../components/HomePage";
import Loading from "../components/Loading";
import ReactStars from "react-rating-stars-component";

export default function CaregiverInformation(){
    var data = sessionStorage.getItem("personalInformation");
    console.log(data);
    var dict_data = JSON.parse(data);
    const { loading, user, error} = useUser();
    console.log(user);
    if (loading) {
        return Loading();
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    /*var identity = "caregiver";
    if(window.sessionStorage.getItem("username")){
        var now = user.filter(function (userr) {
            if(userr.username === window.sessionStorage.getItem("username")){
                return userr.identity;
            }
        });
        var userIdentity = undefined;
        user.map(singleuser => {
            if (singleuser.username === name){
                userIdentity = singleuser.identity;
            }});

        //var noww = JSON.parse(now);
        //identity = now;
    }*/
    var userIdentity = undefined;
    user.map(singleuser => {
        if (singleuser.username === window.sessionStorage.getItem("username")){
            userIdentity = singleuser.identity;
        }});

    console.log(dict_data.username);
    console.log("!!!!!!!!!!!");

    if(userIdentity === "patient") {

        return (
            <div>
                <h1>Caregivers List</h1>
                <div>
                    <form className={"image_block"}>
                    </form>
                    <form className={"caregiver_infor_style"}>
                        <form className={"image_area"}>
                            Image
                        </form>
                        <form>
                            Firstname : {dict_data.first_name}<br/><br/>
                            Lastname : {dict_data.last_name}<br/><br/>
                            Gender : {dict_data.gender}<br/><br/>
                            Age : {dict_data.age}<br/><br/>
                            Address : {dict_data.address}<br/><br/>
                            Salary : {dict_data.salary}<br/><br/>
                            Working Experience : {dict_data.working_experience}<br/><br/>
                            Contact Me : {dict_data.contact_information}<br/><br/>
                            <ReactStars
                                count={dict_data.rate}
                                size={24}
                                edit={false}
                                half={true}

                                color1={'#ffd700'} />
                        </form>
                    </form>
                    <div>
                    review: {dict_data.comment}
                    </div>
                    <button id="sendReq" onClick={() => sentReq(dict_data.username)}>
                        sent request
                    </button>
                    <button id="sendReq" onClick={() => rating(dict_data.username)}>
                        Rate
                    </button>


                </div>
            </div>
        )
    }else{
        return (
            <div>
                <h1>Caregivers List</h1>
                <div>
                    <form className={"image_block"}>
                    </form>
                    <form className={"caregiver_infor_style"}>
                        <form className={"image_area"}>
                            Image
                        </form>
                        <form>
                            Firstname : {dict_data.first_name}<br/><br/>
                            Lastname : {dict_data.last_name}<br/><br/>
                            Gender : {dict_data.gender}<br/><br/>
                            Age : {dict_data.age}<br/><br/>
                            Address : {dict_data.address}<br/><br/>
                            Salary : {dict_data.salary}<br/><br/>
                            Working Experience : {dict_data.working_experience}<br/><br/>
                            Contact Me : {dict_data.contact_information}<br/><br/>
                            rate : {dict_data.rate}<br/><br/>
                        </form>
                    </form>


                </div>
            </div>
        )


    }

}
function sentReq(name){
    console.log("here!!!!!!!!!!!!");
    var username = window.sessionStorage.getItem("username");
    sentRequestPatient({
        username: username,
        name: name,
        state: "send",
    });



}

function rating(username) {
    window.sessionStorage.setItem("rating_target",username);
    window.location.assign(`http://localhost:3000/rating/${username}`);
}
