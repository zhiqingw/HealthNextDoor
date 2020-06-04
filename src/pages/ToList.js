import React from "react";
import {UserExtendedList} from "./User";
import {
    acceptReq,
    acceptReqPatient,
    declineReq,
    declineReqPatient,
    usePatients,
    updateUser,
    useCaregivers,
    useUser,
    completeOrder
} from "../api";
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
                <div id={"together_block"}>
                    <div className={"list_left"}>
                        <div id={"order_list"}>
                            <div id={"order_list_title"}>
                                Order List
                            </div>
                            <div id={"ordered_user"}>
                                {user.filter(person => person.username === name).map(filteredPerson => (
                                    filteredPerson.orderList.map(name => (
                                        <p>
                                            <button id={"order_button"} onClick={() => toPatientPage(name, patients)}>
                                                {name}
                                            </button>
                                        </p>
                                    ))
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={"list_right"}>
                        <div id={"receive_req"}>
                            <div id={"receive_list_title"}>
                                Receive request
                            </div>
                            {user.filter(person => person.username === name).map(filteredPerson => (
                                filteredPerson.receiveReq.map(name => (
                                    <p>
                                        <button id={"rec_name"} onClick={() => toPatientPage(name)}>
                                            {name}
                                        </button>

                                        <button className={"rec_ac_button"} onClick={() => accept(name)}>
                                            accept
                                        </button>
                                        <button className={"rec_de_button"} onClick={() => decline(name)}>
                                            decline
                                        </button>
                                    </p>
                                ))
                            ))}
                        </div>
                        <div id={"history_list"}>
                            <div id={"history_list_title"}>
                                History
                            </div>
                            {user.filter(person => person.username === name).map(filteredPerson => (
                                filteredPerson.orderHistory.map(name => (
                                    <p>
                                        <button id={"history_button"} onClick={() => toPatientPage(name)}>
                                            {name}
                                        </button>
                                    </p>
                                ))
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        );
    }else{
        return (
            <div>
                <h1>List</h1>
                <div id={"together_block"}>
                <div className={"list_left"}>
                    <div id={"order_list"}>
                    <div id={"order_list_title"}>
                        Order List
                    </div>
                        <div id={"ordered_user"}>
                    {user.filter(person => person.username === name).map(filteredPerson => (
                        filteredPerson.orderList.map(name => (
                            <p>
                                <button  id={"order_button"} onClick={() => toCaregiverPage(name,caregivers)}>
                                    {name}
                                </button>
                                <button className={"rec_ac_button"} onClick={() =>complete(name)}>
                                    complete
                                </button>

                            </p>
                        ))
                    ))}
                    </div>
                    </div>
                </div>
                <div className={"list_right"}>
                    <div id={"receive_req"}>
                        <div id={"receive_list_title"}>
                            Send request
                        </div>
                    {user.filter(person => person.username === name).map(filteredPerson => (
                        filteredPerson.sentReq.map(name => (
                            <p>
                                <button id={"rec_name"} onClick={() => toCaregiverPage(name)}>
                                    {name}
                                </button>
                            </p>
                        ))
                    ))}
                    </div>
                    <div id={"history_list"}>
                        <div id={"history_list_title"}>
                            History
                        </div>
                    {user.filter(person => person.username === name).map(filteredPerson => (
                        filteredPerson.orderHistory.map(name => (
                            <p>
                                <button id={"history_button"} onClick={() => toCaregiverPage(name)}>
                                    {name}
                                </button>
                            </p>
                        ))
                    ))}
                </div>
                </div>
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
    //window.location.assign(`http://localhost:3000/toList/${window.sessionStorage.getItem("username")}`)

}

function toCaregiverPage(name) {

    //var string_type_username = JSON.stringify(caregiver.username);
    sessionStorage.setItem("caregiver_name", name);
    window.location.assign(`http://localhost:3000/CaregiverInformation/${name}`);
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


function toPatientPage(name) {
    window.location.assign(`http://localhost:3000/toPatient/${name}`);
}

function complete(name){
    let username;
    username = window.location.pathname;
    let index;
    index = username.lastIndexOf('/');
    username = username.slice(index+1);
    completeOrder({
        username: username,
        name: name,
        state: "complete",
    });
}
