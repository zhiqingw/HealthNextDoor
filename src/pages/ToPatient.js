import React from "react";
import { usePatients} from "../api";

import Button from "../components/Button";

export default function PatientInformation(){
    var data = sessionStorage.getItem("personalInformation");
    console.log(data);
    var dict_data = JSON.parse(data);
    //console.log(dict_data);
    const { loading, patients, error } = usePatients();

    return (
        <div className="list_style">
            <h1>Patients List</h1>

            <div id="careGiverList">
                {patients.map(patient => (
                    <div className="list">
                        <button id="listbutton" >
                            {/*ID : {patient.id}<br/><br/>*/}
                            Firstname : {patient.first_name}<br/><br/>
                            Lastname : {patient.last_name}<br/><br/>
                            Gender : {patient.gender}<br/><br/>
                            Age : {patient.age}<br/><br/>
                            Address : {patient.address}<br/><br/>
                            Contact Me : {patient.contact_information}<br/><br/>
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}

/*function getPatientInformation(patient){
    console.log(patient);
    var string_type = JSON.stringify(patient)
    console.log(string_type);
    sessionStorage.setItem("personalInformation",string_type);
    window.location.href = "PatientInformation";
}
*/
