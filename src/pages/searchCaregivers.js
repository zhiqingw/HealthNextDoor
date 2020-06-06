import React from "react";
import {getCaregivers} from "../api";
import Button from "../components/Button";
import {getCaregiverInformation, SubmitFilter} from "./Caregivers";
import ReactStars from "react-rating-stars-component";

export default function SearchCaregivers() {
    var data = sessionStorage.getItem("targetData")
    var dict_data = JSON.parse(data)
    return (
        <div>
            <div className="list_style">
                <h1>Caregivers List</h1>
                <div id="careGiverList">
                {dict_data.map(caregiver => (
                    <div className="list">
                        <button id="listbutton" onClick={()=>getCaregiverInformation(caregiver)}>
                            <div className="block_list">
                                <div>
                                    <div id="name">
                                        {caregiver.first_name} {caregiver.last_name}<br/><br/>
                                    </div>
                                    <div id="intro">
                                        introduction : {caregiver.introduction}
                                    </div>
                                    <div id="as">
                                        Address : {caregiver.address} &nbsp;&nbsp;
                                        Salary : {caregiver.salary}<br/><br/>
                                    </div>
                                    <ReactStars
                                        count={caregiver.rate}
                                        size={24}
                                        edit={false}
                                        half={true}

                                        color1={'#ffd700'} />
                                </div>
                                <img className={"photo"}  src={caregiver.image} ></img>
                            </div>
                        </button>
                    </div>
                ))}
                </div>


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