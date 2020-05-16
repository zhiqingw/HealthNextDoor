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

            <div>
                <div>Filter</div>
                {/*<h3>Find a nurse who suits you best!</h3>*/}
                <div id="filter_form"className="filter_form_style">

                    <div className="label_input">Gender:</div>

                    <div className="label_input">Male:
                    <input type = "checkbox" value = "male" id = "gender_male"/>
                    </div>

                    <div className="label_input">Female:
                    <input type = "checkbox" value = "female" id = "gender_female"/>
                    </div>

                    <div className="label_input">Age:
                    <input type = "text" id = "min_age" className="small_textframe" placeholder="0"></input>-
                    <input type = "text" id = "max_age" className="small_textframe" placeholder="99"></input>
                    </div>

                    <div className="label_input">Address:
                    <input type = "text" id = "address" placeholder="Carlton"/>
                    </div>


                    <div className="label_input">Working experience:
                    more than <input type = "text" id="working_experience" className="small_textframe"></input>&nbsp;years
                    </div>

                    <div className="label_input">Salary (per hour):
                        <select id="salary">
                            <option value="1"></option>
                            <option value="2">below 20 AUD</option>
                            <option value="3">20-40 AUD</option>
                            <option value="4">40-60 AUD</option>
                            <option value="5">aove 60 AUD</option>
                        </select>
                    </div>
                    <div className={"label_input"}>
                        <Button className={"btn-logIn"} onClick={() => SubmitFilter(caregivers)}>
                            Search
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}

