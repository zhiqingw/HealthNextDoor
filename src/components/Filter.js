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
        <div className="addFilter">


            <div className={"title_input"}>Find a caregiver who suits you best!</div>
            <div><form className={"label_input"}>
                Gender:
                Male:&nbsp;
                <input type = "checkbox" value = "male" id = "gender_male"/>&nbsp;
                Female:&nbsp;
                <input type = "checkbox" value = "female" id = "gender_female"/>
                &nbsp;&nbsp;&nbsp;

                Age:
                <input type = "text" id = "min_age" min="0"className="small_textframe" placeholder="0"/>&nbsp;-&nbsp;
                <input type = "text" id = "max_age" min="0"className="small_textframe" placeholder="99"/>
                &nbsp;&nbsp;&nbsp;


                Address:&nbsp;
                <input type = "text" id = "address" placeholder="Carlton"/>
                &nbsp;&nbsp;&nbsp;



                Working experience:&nbsp;
                More than <input type = "text" min="0" id="working_experience" className="small_textframe"></input>&nbsp;years
                &nbsp;&nbsp;&nbsp;

                Salary (per hour):&nbsp;
                <select id="salary">
                    <option value="1"></option>
                    <option value="2">below 20 AUD</option>
                    <option value="3">20-40 AUD</option>
                    <option value="4">40-60 AUD</option>
                    <option value="5">above 60 AUD</option>
                </select>
                &nbsp;&nbsp;&nbsp;
            </form>
            </div>

            <div >
                <Button className={"btn-logIn"} id={"search_botton_style"} onClick={() => SubmitFilter(caregivers)}>
                    Search
                </Button>

            </div>


        </div>
    );
}

