import React from "react";
import { usePatients} from "../api";

import Button from "../components/Button";

export default function PatientInformation(){
    var data = sessionStorage.getItem("personalInformationForPatient");
    console.log(data);
    var dict_data = JSON.parse(data);
    //console.log(dict_data);
    const { loading, patients, error } = usePatients();

    return (
        <div>
            <h1>Patient Information</h1>
            <div>
                <form className={"image_block"}>
                </form>
                <form className={"caregiver_infor_style"}>
                    <form className={"image_area"}>
                        Image
                    </form>
                    <form>
                        Firstname : {dict_data.first_name}<br/><br/>
                        Lastname : {dict_data.last_name}<br/><br/>
                        Gender : {dict_data.gender}<br/><br/>
                        Age : {dict_data.age}<br/><br/>
                        Address : {dict_data.address}<br/><br/>
                        Contact Me : {dict_data.contact_information}<br/><br/>
                    </form>
                </form>
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
