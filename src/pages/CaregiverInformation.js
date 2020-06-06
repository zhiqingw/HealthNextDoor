import React, { useState } from "react";
import {useCaregivers, updateCaregiver, deleteCaregiver, sendRequest, sentRequestPatient, useUser} from "../api";

import Button from "../components/Button";
import Filter from "../components/Filter";
import HomePage from "../components/HomePage";
import Loading from "../components/Loading";
import ReactStars from "react-rating-stars-component";
import Upload from "../components/Upload";
import anonymousIcon from "../pictures/anoy.png";
export default function CaregiverInformation(){
    let username;
    username = window.location.pathname;
    let index;
    index = username.lastIndexOf('/');
    let caregiver_name;
    caregiver_name = username.slice(index+1);
    var data = sessionStorage.getItem("personalInformation");
    console.log(data);
    var dict_data = JSON.parse(data);
    const { loading, user, error} = useUser();
    const { loadingg, caregivers, errorr} = useCaregivers();
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

    console.log("!!!!!!!!!!!");

    if(userIdentity === "patient") {

        return (
            <div>
                <h1>Caregivers List</h1>
                <div>
                    <form className={"image_block"}>
                    </form>
                    <div className={"caregiver_infor_style"}>

                        {caregivers.filter(person => person.username === caregiver_name).map(dict_data => (
                        <form>
                            <img className={"icon"}  src={dict_data.image} ></img><br/><br/>
                            <i className="fa fa-user" aria-hidden="true">{dict_data.first_name} {dict_data.last_name}</i><br/><br/>
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
                            ))}
                    </div>
                    <div>
                    review:
                        {caregivers.filter(person => person.username === caregiver_name).map(dict_data => (
                            dict_data.comment.map( comment => (
                        <p>
                           Anonymous: {comment}
                            <hr />
                        </p>
                            ))))}
                    </div>
                    <button id="sendReq" onClick={() => sentReq(caregiver_name)}>
                        <i className="fa fa-user-plus" aria-hidden="true"></i>
                        sent request
                    </button>

                    <button id="sendReq" onClick={() => rating(caregiver_name)}>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
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
                    <div className={"caregiver_infor_style"}>
                        {caregivers.filter(person => person.username === caregiver_name).map(dict_data => (
                            <form>
                                <form>
                                <img className={"icon"}  src={dict_data.image} ></img><br/><br/>

                                <i className="fa fa-user" aria-hidden="true">{dict_data.first_name} {dict_data.last_name}</i><br/><br/>

                                Gender : {dict_data.gender}<br/><br/>
                                Age : {dict_data.age}<br/><br/>
                                Address : {dict_data.address}<br/><br/>
                                Salary : {dict_data.salary}<br/><br/>
                                Working Experience : {dict_data.working_experience}<br/><br/>
                                Contact Me : {dict_data.contact_information}<br/><br/>
                                Rating :
                                </form>
                                <form className={"stars_form"}>
                                    <ReactStars
                                        count={dict_data.rate}
                                        size={24}
                                        edit={false}
                                        half={true}
                                        color1={'#ffd700'} /></form>

                            </form>
                        ))}
                    </div>
                    <div className={"comment_style"}>
                        <h4>Comment:</h4>
                        {caregivers.filter(person => person.username === caregiver_name).map(dict_data => (
                            dict_data.comment.map( comment => (
                                <p className={"comment_p_style"}>
                                    <img src={anonymousIcon} width={"25px"}></img>  &nbsp;
                                    Anonymous: <br/><br/>{comment}
                                    <p className={"comment_p_style"}>
                                    <hr />
                                    </p>
                                </p>

                            ))))}
                    </div>
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
