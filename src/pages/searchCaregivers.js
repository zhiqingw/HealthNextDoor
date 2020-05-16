import React from "react";
import {getCaregivers} from "../api";
import Button from "../components/Button";

export default function SearchCaregivers() {
    var data = sessionStorage.getItem("targetData")
    var dict_data = JSON.parse(data)
    return (
        <div className="list_style">
            <h1>Caregivers List</h1>
            {dict_data.map(caregiver => (
                <div className="list">
                    <button id="listbutton">
                        firstname : {caregiver.first_name}<br/><br/>
                        lastname : {caregiver.last_name}<br/><br/>
                        gender : {caregiver.gender}<br/><br/>
                        introduction : {caregiver.introduction}<br/><br/>
                        username: {caregiver.username}<br/><br/>
                    </button>
                </div>
            ))}
        </div>
    );
}