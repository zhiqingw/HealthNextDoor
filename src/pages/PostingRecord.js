import Header from "../components/Header";
import React from "react";
import Filter from "../components/Filter";
import {CaregiverExtended} from "./Caregivers";
import {useCaregivers} from "../api";

export default function newCaregiver() {
    var data = sessionStorage.getItem("Post_listing")
    var dict_data = JSON.parse(data)
    console.log(data);

    return (
        <div>
            <h1>Posting Record</h1>
            <div id={"Post_list_front"}>
                <CaregiverExtended {...dict_data}/>
            </div>


        </div>
    );
}