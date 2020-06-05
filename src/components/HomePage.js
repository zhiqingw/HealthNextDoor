import React from "react";
import Button from "../components/Button";
import Logo from "./Logo";

export default function HomePage() {
    return (

        <div className="homepage_form">
            <div className={"h1_form"}>
                <h1> HEALTH NEXT DOOR</h1>
            </div>
            <div className={"h3_form"}>
                <h3> Care about you and your families! </h3>
            </div>

            <div className={"blank"}>

                <p>
                    Hope you can enjoy our services! Cheers!
                </p>
            </div>

            <div className={"credit_form"}>
                <p>2020 HealthNextDoor © All Rights Reserved</p>
            </div>
        </div>

    );
}