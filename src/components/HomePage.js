import React from "react";
import Button from "../components/Button";
import Logo from "./Logo";

export default function HomePage() {
    return (
        <div>


        <div className="homepage_form">
            <div className={"h1_form"}>
                <div className='ti'> HEALTH NEXT DOOR</div>
            </div>
            <div className={"h3_form"}>
                <h3> health next door provide a platform for you connect with caregiver or patient family! </h3>
            </div>
            <div className={"blank"}>

                <button className="opa" onClick={toLogin}>
                    Getting start
                </button>
            </div>
        </div>
        </div>

    );
}

function toLogin() {
    if(window.sessionStorage.getItem("username")) {
        window.location.assign(`http://localhost:3000/findCaregivers`)
    }else{
        window.location.assign(`http://localhost:3000/login`)
    }
}