import React, { useState } from "react";

import { addCaregiver } from "../api";
import Button from "../components/Button";

export default function Header() {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [username, setUsername] = useState("");

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
            Add New Caregiver
            <form>
                <p>
                <input
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    value={first_name}
                    onChange={event => {
                        setFirstName(event.target.value);
                    }}
                />
                </p>
                <p>
                <input
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value={last_name}
                    onChange={event => {
                        setLastName(event.target.value);
                    }}
                />
                </p>
                <p>
                <input
                    type="text"
                    placeholder="gender"
                    name="gender"
                    value={gender}
                    onChange={event => {
                        setGender(event.target.value);
                    }}
                />
                </p>
                <p>
                <input
                    type="text"
                    placeholder="introduction"
                    name="introduction"
                    value={introduction}
                    onChange={event => {
                        setIntroduction(event.target.value);
                    }}
                />
                </p>
                <p>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={event => {
                        setUsername(event.target.value);
                    }}
                />
                </p>
                <Button className={"btn-success"} onClick={onSubmit}>
                    Save
                </Button>
            </form>
        </div>
    );
}
