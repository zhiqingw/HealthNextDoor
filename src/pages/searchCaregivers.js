import React from "react";
import {getCaregivers} from "../api";
import Button from "../components/Button";
import {getCaregiverInformation, SubmitFilter} from "./Caregivers";

export default function SearchCaregivers() {
    var data = sessionStorage.getItem("targetData")
    var dict_data = JSON.parse(data)
    return (
        <div>
            <div className="list_style">
                <h1>Caregivers List</h1>

                {dict_data.map(caregiver => (
                    <div className="list">
                        <button id="listbutton" onClick={()=>getCaregiverInformation(caregiver)}>
                            Firstname : {caregiver.first_name}<br/><br/>
                            Lastname : {caregiver.last_name}<br/><br/>
                            Gender : {caregiver.gender}<br/><br/>
                            Age : {caregiver.age}<br/><br/>
                            Address : {caregiver.address}<br/><br/>
                            Salary : {caregiver.salary}<br/><br/>
                            Working Experience : {caregiver.working_experience}<br/><br/>
                            Contact Me : {caregiver.contact_information}<br/><br/>
                            username: {caregiver.username}<br/><br/>
                        </button>
                    </div>
                ))}


            </div>
            <div className={"back_style"}>
                <Button className={"btn-login"} onClick={backToCaregiver}>
                    Back
                </Button>
            </div>
        </div>
    );
}

function backToCaregiver(){
    window.location.href = "findCaregivers"
}