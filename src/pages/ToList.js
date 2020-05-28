import React from "react";
import {UserExtendedList} from "./User";
import {acceptReq, acceptReqPatient, declineReq, declineReqPatient, usePatients,updateUser, useCaregivers, useUser} from "../api";
import Loading from "../components/Loading";
import {Caregiver} from "./Caregivers";


export default function ToList() {
    var data = sessionStorage.getItem("listing");
    var dict_data = JSON.parse(data);
    console.log(data);
    const { loading_c, caregivers, error_c } = useCaregivers();
    const { loading_p, patients, error_p} = usePatients();
    const { loading, user, error} = useUser();
    var dict_caregivers;
    console.log(dict_data);
    console.log(caregivers);
    if (loading || loading_p || loading_c) {
        return Loading();
    }
    if (error || error_p || error_c) {
        return <p>Something went wrong: {error.message}</p>;
    }
    let username;
    username = window.location.pathname;
    let index;
    index = username.lastIndexOf('/');
    let name;
    name = username.slice(index+1);
    if(dict_data.identity === "caregiver") {
        return (
            <div>
                <h1>List</h1>
                <div>
                    orderList
                    {user.filter(person => person.username === name).map(filteredPerson => (
                        filteredPerson.orderList.map(name => (
                                <p>
                                    <button onClick={() => toPatientPage(name, patients)}>
                                        {name}
                                    </button>
                                </p>
                            ))
                    ))}
                </div>
                <div>
                    Receive request
                    {user.filter(person => person.username === name).map(filteredPerson => (
                        filteredPerson.receiveReq.map(name => (
                            <p>
                                <button onClick={() => toPatientPage(name)}>
                                    {name}
                                </button>
                                <button onClick={() => accept(name)}>
                                    accept
                                </button>
                                <button onClick={() => decline(name)}>
                                    decline
                                </button>
                            </p>
                        ))
                    ))}
                </div>
                <div>
                    History
                    {user.filter(person => person.username === name).map(filteredPerson => (
                        filteredPerson.orderHistory.map(name => (
                            <p>
                                <button onClick={() => toPatientPage(name)}>
                                    {name}
                                </button>
                            </p>
                        ))
                    ))}
                </div>
            </div>
        );
    }else{
        return (
            <div>
                <h1>List</h1>
                <div>
                    orderList
                    {user.filter(person => person.username === name).map(filteredPerson => (
                        filteredPerson.orderList.map(name => (
                            <p>
                                <button onClick={() => toCaregiverPage(name,caregivers)}>
                                    {name}
                                </button>
                            </p>
                        ))
                    ))}
                </div>
                <div>
                    sent request
                    {user.filter(person => person.username === name).map(filteredPerson => (
                        filteredPerson.sentReq.map(name => (
                            <p>
                                <button onClick={() => toCaregiverPage(name)}>
                                    {name}
                                </button>
                            </p>
                        ))
                    ))}
                </div>
                <div>
                    History
                    {user.filter(person => person.username === name).map(filteredPerson => (
                        filteredPerson.orderHistory.map(name => (
                            <p>
                                <button onClick={() => toCaregiverPage(name)}>
                                    {name}
                                </button>
                            </p>
                        ))
                    ))}
                </div>
            </div>
        );
    }
}

function accept(name){
    let username;
    username = window.location.pathname;
    let index;
    index = username.lastIndexOf('/');
    username = username.slice(index+1);
    acceptReq({
        username: username,
        name: name,
        state: "accept",
    });
    acceptReqPatient({
        username: name,
        name: username,
        state: "accept",
    });
    //window.location.assign(`http://localhost:3000/toList/${window.sessionStorage.getItem("username")}`)

}

function toCaregiverPage(name, caregivers) {

    //var string_type_username = JSON.stringify(caregiver.username);
    {
        caregivers.map(caregiver => {
            if (caregiver.username === name) {
                var string_type = JSON.stringify(caregiver);
                sessionStorage.setItem("personalInformation", string_type);
                //sessionStorage.setItem("caregiverUsername", string_type_username);
                window.location.assign(`http://localhost:3000/CaregiverInformation/${caregiver.username}`);
            }
        })
    }
}
    //window.location.assign  (`http://localhost:3000/CaregiverInformation/${name}`);
    //console.log(caregivers);
    //console.log(name);

function decline(name){
    let username;
    username = window.location.pathname;
    let index;
    index = username.lastIndexOf('/');
    username = username.slice(index+1);
    declineReq({
        username: username,
        name: name,
        state: "decline",
    });
    declineReqPatient({
        username: name,
        name: username,
        state: "decline",
    });
    //window.location.assign(`http://localhost:3000/toList/${window.sessionStorage.getItem("username")}`)

}


function toPatientPage(name, patients) {
    return
}



