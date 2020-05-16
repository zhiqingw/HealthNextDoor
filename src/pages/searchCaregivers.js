import React, {useEffect, useState} from "react";
import {useCaregiversCopy} from "../api";
import {SubmitFilter} from "./Caregivers";
import {StoreInfo} from "./Caregivers";
import {getInformation} from "./Caregivers";
import {getCaregivers} from "../api";
import { useCaregivers, updateCaregiver, deleteCaregiver } from "../api";

import Button from "../components/Button";

export default function SearchCaregivers() {
    var data = sessionStorage.getItem("targetData")
    var dict_data = JSON.parse(data)
    console.log(dict_data)
    //const { loading, caregivers, error } = useCaregivers();
    //if (loading) {
    //return <p>Loading...</p >;
    //}
    //if (error) {
    //return <p>Something went wrong: {error.message}</p >;
    //}
    //console.log(caregivers);
    //var information = getInformation();
    //console.log(information)
    // Display a list of the authors
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