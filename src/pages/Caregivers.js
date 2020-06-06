import React, { useState } from "react";
import { useCaregivers, updateCaregiver, deleteCaregiver } from "../api";
import Loading from "../components/Loading";
import Button from "../components/Button";
import Filter from "../components/Filter";
import ReactStars from "react-rating-stars-component";
import Upload from "../components/Upload";

export default function Caregivers() {
    const { loading, caregivers, error } = useCaregivers();
    if (loading) {
        return Loading();
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    // Display a list of the caregivers
    return (
        <div>
            <div className={"list_style"}>
                <h1>Caregivers List</h1>
                <div id={"filter_place"}><Filter/></div>
                <div id={"join_button"}>
                </div>
                <div id="careGiverList">
                    {caregivers.map(caregiver => (
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
        </div>
    );
}

export function getCaregiverInformation(caregiver){
    console.log(caregiver);
    console.log(caregiver.username);
    var string_type = JSON.stringify(caregiver);
    //var string_type_username = JSON.stringify(caregiver.username);
    console.log(string_type);
    sessionStorage.setItem("personalInformation",string_type);
    //sessionStorage.setItem("caregiverUsername", string_type_username);
    window.location.assign(`http://localhost:3000/CaregiverInformation/${caregiver.username}`);
}

export function Caregiver(caregiver) {
    const { first_name, last_name, gender, introduction, username, age, address, salary, working_experience,
        contact_information} = caregiver;
    const [first_input, setFirstName] = useState(first_name);
    const [last_input, setLastName] = useState(last_name);
    const [gender_input, setGender] = useState(gender);
    const [introduction_input,setIntroduction] = useState(introduction);
    const [age_input,setAge] = useState(age);
    const [address_input,setAddress] = useState(address);
    const [salary_input,setSalary] = useState(salary);
    const [working_input,setWorking_experience] = useState(working_experience);
    const [contact_input,setContact_information] = useState(contact_information);
    function onSubmit() {
        // call upate caregiver function
        console.log(contact_input);
        updateCaregiver({
            first_name: first_input,
            last_name: last_input,
            gender: gender_input,
            introduction: introduction_input,
            username: username,
            age: age_input,
            address: address_input,
            salary: salary_input,
            working_experience: working_input,
            contact_information: contact_input,
        });
        window.location.assign(`http://localhost:3000/user-management/${window.sessionStorage.getItem("username")}`)
    }

    return (

        <div className={`caregiver-expand `}>
            <form className={"caregiver-expand-left"}>
                {/* TODO - add value and onChange properties to inputs */}
                <p>
                    <label className="update_input">first name</label>
                    <input type="text" name="first_name" value = {first_input} onChange={event => {setFirstName(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">last name</label>
                    <input type="text" name="last_name" value = {last_input} onChange={event => {setLastName(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">gender</label>
                    <input type="text" name="gender" value = {gender_input} onChange={event => {setGender(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">introduction</label>
                    <input type="text" name="introduction" value = {introduction_input} onChange={event => {setIntroduction(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">age</label>
                    <input type="text" name="age" value = {age_input} onChange={event => {setAge(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">address</label>
                    <input type="text" name="introduction" value = {address_input} onChange={event => {setAddress(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">salary</label>
                    <input type="text" name="salary" value = {salary_input} onChange={event => {setSalary(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">working_experience</label>
                    <input type="text" name="working_experience" value = {working_input} onChange={event => {setWorking_experience(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">contact information</label>
                    <input type="text" name="contact_information" value = {contact_input} onChange={event => {setContact_information(event.target.value);}}/>
                </p>

                <Button className={"btn-danger"} onClick={onSubmit}>
                    Update
                </Button>

                <Button className={"btn-danger"} onClick={() => deleteCaregiver(username)}>
                    Delete
                </Button>
                <Upload/>
            </form><form className={"caregiver-expand-right"}></form>


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
    var string_type = JSON.stringify(working_experience_result);
    console.log(string_type);
    sessionStorage.setItem("targetData",string_type);
    window.location.href = "SearchCaregivers"

}

function CaregiverExtended(props) {
    const { first_name, last_name, gender, introduction, username, age, address, salary, showUpdate, working_experience,
        contact_information} = props;
    const [first_input, setFirstName] = useState(first_name);
    const [last_input, setLastName] = useState(last_name);
    const [gender_input, setGender] = useState(gender);
    const [introduction_input,setIntroduction] = useState(introduction);
    const [age_input,setAge] = useState(age);
    const [address_input,setAddress] = useState(address);
    const [salary_input,setSalary] = useState(salary);
    const [working_input,setWorking_experience] = useState(working_experience);
    const [contact_input,setContact_information] = useState(contact_information);
    function onSubmit() {
        // call upate caregiver function
        console.log(contact_input);
        updateCaregiver({
            first_name: first_input,
            last_name: last_input,
            gender: gender_input,
            introduction: introduction_input,
            username: username,
            age: age_input,
            address: address_input,
            salary: salary_input,
            working_experience: working_input,
            contact_information: contact_input,
        });
        window.location.assign(`http://localhost:3000/user-management/${window.sessionStorage.getItem("username")}`)
    }

    return (

        <div className={`caregiver-expand ${showUpdate ? "show" : ""}`}>
            <form className={"caregiver-expand-left"}>
                {/* TODO - add value and onChange properties to inputs */}
                <p>
                    <label className="update_input">first name</label>
                    <input type="text" name="first_name" value = {first_input} onChange={event => {setFirstName(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">last name</label>
                    <input type="text" name="last_name" value = {last_input} onChange={event => {setLastName(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">gender</label>
                    <input type="text" name="gender" value = {gender_input} onChange={event => {setGender(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">introduction</label>
                    <input type="text" name="introduction" value = {introduction_input} onChange={event => {setIntroduction(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">age</label>
                    <input type="text" name="age" value = {age_input} onChange={event => {setAge(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">address</label>
                    <input type="text" name="introduction" value = {address_input} onChange={event => {setAddress(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">salary</label>
                    <input type="text" name="salary" value = {salary_input} onChange={event => {setSalary(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">working_experience</label>
                    <input type="text" name="working_experience" value = {working_input} onChange={event => {setWorking_experience(event.target.value);}}/>
                </p>
                <p>
                    <label className="update_input">contact information</label>
                    <input type="text" name="contact_information" value = {contact_input} onChange={event => {setContact_information(event.target.value);}}/>
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
