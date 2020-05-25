import Header from "../components/Header";
import React from "react";
import Filter from "../components/Filter";
import HeaderForPatient from "../components/HeaderForPatient";

export default function newPatient() {

    return (
        <div>
            <h1>Add New Patient</h1>
            <HeaderForPatient/>
        </div>
    );
}