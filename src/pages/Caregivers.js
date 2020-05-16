import React, { useState } from "react";
import { useCaregivers, updateCaregiver, deleteCaregiver } from "../api";

import Button from "../components/Button";
import Header from "../components/Header";


export default function Caregivers() {
    const { loading, caregivers, error } = useCaregivers();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    // Display a list of the caregivers

    return (
        <div>
            <div className={"list_style"}>
            <h1>Caregivers List</h1>

            <div id={"join_button"}>
                <Button className={"btn-addCaregiver"} id={"jjj"} onClick={toAdd}>
                    Let's Join Us Today!
                </Button>
            </div>




                <div id="careGiverList">

                    {caregivers.map(caregiver => (
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
            </div>

            <div className="filter_style">
                <h2>Filter</h2>

                <form id="filter_form"className="filter_form_style">
                    <label className="label_input">Gender:</label><br/>
                    <label className="label_input">Male:</label>
                    <input type = "checkbox" value = "male" id = "gender_male"/>
                    <label className="label_input">Female: </label>
                    <input type = "checkbox" value = "female" id = "gender_female"/><br/>

                    <label className="label_input">Age: </label><br/>
                    <input type = "text" id = "min_age" className="small_textframe" placeholder="0"></input>-
                    <input type = "text" id = "max_age" className="small_textframe" placeholder="99"></input><br/>

                    <label className="label_input">Address: </label><br/>
                    <input type = "text" id = "address" placeholder="Carlton"/>
                    <br/><br/>

                    <label className="label_input">Working experience: </label><br/>
                    more than <input type = "text" id="working_experience" className="small_textframe"></input>&nbsp;years<br/>

                    <label className="label_input">Salary (per hour): </label><br/>
                    <select id="salary">
                        <option value="1"></option>
                        <option value="2">below 20 AUD</option>
                        <option value="3">20-40 AUD</option>
                        <option value="4">40-60 AUD</option>
                        <option value="5">aove 60 AUD</option>
                    </select><br/><br/>
                    <Button className={"btn-logIn"} onClick={() => SubmitFilter(caregivers)}>
                        Search
                    </Button>
                </form>
            </div>

        </div>
    );
}

export function Caregiver(caregiver) {
    const { first_name, last_name, gender, introduction, username} = caregiver;
    const [showUpdate, setShowUpdate] = useState(false);

    return (
        <div className={`caregiver caregiver-${username}`} key={username}>
            <div className="info">
                <div id="txt">Username: {username}</div>
                <div id="txt">First_name: {first_name}</div>
                <div id="txt">Last_name: {last_name}</div>
                <div id="txt">Gender: {gender}</div>
                <Button className={"btn"} onClick={() => setShowUpdate(!showUpdate)}>
                    {showUpdate ? "-" : "+"}
                </Button>
            </div>
            <CaregiverExtended {...caregiver} showUpdate={showUpdate} />
        </div>
    );
}

export function SubmitFilter(caregivers) {
    console.log(caregivers);
    var address = document.getElementById("address");
    var min_age = document.getElementById("min_age");
    var max_age = document.getElementById("max_age");
    var working_experience = document.getElementById("working_experience");
    var salary = document.getElementById("salary");
    var male = document.getElementById("gender_male");
    var female = document.getElementById("gender_female");
    var gender_result = caregivers;
    if (male && female) {
        if (male.checked && !female.checked) {
            gender_result = caregivers.filter(function (caregiver) {
                return caregiver.gender === "male";
            });
        }
        if (!male.checked && female.checked) {
            gender_result = caregivers.filter(caregivers =>
                caregivers.gender === "female"
            );
        }
    }
    console.log(gender_result);

    if (address.value) {
        var address_result = gender_result.filter(function (caregiver) {
            return caregiver.address === address.value;
        });
    } else {
        address_result = gender_result;
    }

    if(min_age.value || max_age.value) {

        var age_result = address_result.filter(function (caregiver) {
            var age = parseInt(caregiver.age);
            if(!min_age.value) {
                return age >= min_age.value;
            }
            if(!max_age.value) {
                return age >= min_age.value;
            } else {
                return age >= min_age.value && age <= max_age.value;
            }
        });
    } else {
        age_result = address_result;
    }

    if(salary.value !== "1") {
        var salary_result = age_result.filter(function (caregiver) {
            if (salary.value === "2") {
                return caregiver.salary < 20;
            }
            if (salary.value === "3") {
                return caregiver.salary > 20 && caregiver.salary < 40;
            }
            if (salary.value === "4") {
                return caregiver.salary > 40 && caregiver.salary < 60;
            }
            if (salary.value === "5") {
                return caregiver.salary > 60;
            }
        });
    } else {
        salary_result = age_result;
    }
    console.log(salary_result);
    if (working_experience.value) {
        var working_experience_result = salary_result.filter(function (caregiver) {
            return caregiver.working_experience > working_experience.value;
        });
    } else {
        working_experience_result = salary_result;
    }

    console.log(working_experience_result);
    //console.log(name_result);


    //console.log(working_experience_result)

    //window.location.href = "SearchCaregivers"
    //return name_result;
    //return (gender_result);
    //var getInput = gender_result
    //console.log(working_experience_result)
    var string_type = JSON.stringify(working_experience_result);
    console.log(string_type);
    sessionStorage.setItem("targetData",string_type);
    window.location.href = "SearchCaregivers"

}

function CaregiverExtended(props) {
    const { first_name, last_name, gender, introduction, username, showUpdate } = props;
    const [first_input, setFirstName] = useState(first_name);
    const [last_input, setLastName] = useState(last_name);
    const [gender_input, setGender] = useState(gender);
    const [introduction_input,setIntroduction] = useState(introduction);
    function onSubmit() {
        // call upate caregiver function
        updateCaregiver({
            first_name: first_input,
            last_name: last_input,
            gender: gender_input,
            introduction: introduction_input,
            username: username,
        });
    }

    return (

        <div className={`caregiver-expand ${showUpdate ? "show" : ""}`}>
            <form className={"caregiver-expand-left"}>
                {/* TODO - add value and onChange properties to inputs */}
                <p>
                    <label className="label_input">first name</label>
                    <input type="text" name="first_name" value = {first_input} onChange={event => {setFirstName(event.target.value);}}/>
                </p>
                <p>
                    <label className="label_input">last name</label>
                    <input type="text" name="last_name" value = {last_input} onChange={event => {setLastName(event.target.value);}}/>
                </p>
                <p>
                    <label className="label_input">gender</label>
                    <input type="text" name="gender" value = {gender_input} onChange={event => {setGender(event.target.value);}}/>
                </p>
                <p>
                    <label className="label_input">introduction</label>
                    <input type="text" name="introduction" value = {introduction_input} onChange={event => {setIntroduction(event.target.value);}}/>
                </p>

                <Button className={"btn-danger"} onClick={onSubmit}>
                    Update
                </Button>

                <Button className={"btn-danger"} onClick={() => deleteCaregiver(username)}>
                    Delete
                </Button>
            </form><form className={"caregiver-expand-right"}></form>


        </div>
    );
}

function toAdd() {
    window.location.href = "AddCaregiver";
}
