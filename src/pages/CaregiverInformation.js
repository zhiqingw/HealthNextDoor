import React, { useState } from "react";

import {useCaregivers, updateCaregiver, deleteCaregiver, sendRequest, sentRequestPatient} from "../api";

import Button from "../components/Button";
import Filter from "../components/Filter";
import HomePage from "../components/HomePage";

export default function CaregiverInformation(){
    var data = sessionStorage.getItem("personalInformation");
    console.log(data);
    var dict_data = JSON.parse(data);
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
                    </form>
                    <button onClick={() => sentReq(dict_data.username)}>
                        sent request
                    </button>

                </form>


            </div>
        </div>
    )

}

function sentReq(name){
    let username;
    username = window.location.pathname;
    let index;
    index = username.lastIndexOf('/');
    username = username.slice(index+1);
    sendRequest({
        username: username,
        name: name,
        state: "decline",
    });
    sentRequestPatient({
        username: name,
        name: username,
        state: "decline",
    });


}