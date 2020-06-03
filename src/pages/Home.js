import React from "react";
import HomePage from "../components/HomePage";

export default function Home() {
    return (
        <body  className="homepage_form">
        <div className={"h1_form"}>
            <h1> HEALTH NEXT DOOR</h1>
        </div>
        <div className={"h3_form"}>
            <h3> Care about your and your families! </h3>
        </div>

        <div className={"blank"}>
            <h6>
                Health Next Door would like to provide you a convenient way
                to approach the modern healthcare facility!
            </h6>
            <p>
                Hope you can enjoy our services! Cheers!
            </p>
        </div>

        <div className={"credit_form"}>
            <p>2020 HealthNextDoor © All Rights Reserved</p>
        </div>
        </body>
    );
}
