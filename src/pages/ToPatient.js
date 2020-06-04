import React from "react";
import { usePatients} from "../api";

import Button from "../components/Button";
import ReactStars from "react-rating-stars-component";

export default function PatientInformation(){
    var data = sessionStorage.getItem("personalInformationForPatient");
    console.log(data);
    var dict_data = JSON.parse(data);
    //console.log(dict_data);
    const { loading, patients, error } = usePatients();
    let username;
    username = window.location.pathname;
    let index;
    index = username.lastIndexOf('/');
    let caregiver_name;
    caregiver_name = username.slice(index+1);

    return (
        <div>
            <h1>Caregivers List</h1>
            <div>
                <form className={"image_block"}>
                </form>
                <form className={"caregiver_infor_style"}>
                    <form className={"image_area"}>
                        Image
                    </form>
                    {patients.filter(person => person.username === caregiver_name).map(dict_data => (
                        <form>
                            Firstname : {dict_data.first_name}<br/><br/>
                            Lastname : {dict_data.last_name}<br/><br/>
                            Gender : {dict_data.gender}<br/><br/>
                            Age : {dict_data.age}<br/><br/>
                            Address : {dict_data.address}<br/><br/>
                            Contact Me : {dict_data.contact_information}<br/><br/>
                        </form>
                    ))}
                </form>
            </div>
        </div>
    );
}

/*function getPatientInformation(patient){
    console.log(patient);
    var string_type = JSON.stringify(patient)
    console.log(string_type);
    sessionStorage.setItem("personalInformation",string_type);
    window.location.href = "PatientInformation";
}
*/
