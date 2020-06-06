import React from "react";
import Button from "../components/Button";
import Logo from "./Logo";

export default function HomePage() {
    return (
        <div>


        <div className="homepage_form">
            <div className={"h1_form"}>
                <h1> HEALTH NEXT DOOR</h1>
            </div>
            <div className={"h3_form"}>
                <h3> Care about you and your families! </h3>
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