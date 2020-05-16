import React, { useState } from "react";

import {addCaregiver, useCaregivers} from "../api";
import Button from "../components/Button";
import {SubmitFilter} from "../pages/Caregivers";

export default function Filter() {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [username, setUsername] = useState("");

    const { loading, caregivers, error } = useCaregivers();

    function onSubmit() {
        addCaregiver({
            first_name,
            last_name,
            gender,
            introduction,
            username
        });
    }

    return (
        <div className="addCaregiver">
            Filter
            <form>

                {/*<h3>Find a nurse who suits you best!</h3>*/}
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

            </form>
        </div>
    );
}

