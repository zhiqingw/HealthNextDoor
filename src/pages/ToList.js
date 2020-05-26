import React from "react";
import {UserExtendedList} from "./User";
import {acceptReq, acceptReqPatient, updateUser, useCaregivers, useUser} from "../api";
import Loading from "../components/Loading";
import {Caregiver} from "./Caregivers";

export default function ToList() {
    var data = sessionStorage.getItem("listing")
    var dict_data = JSON.parse(data)
    console.log(data);
    const { loading, user, error} = useUser();
    console.log(user);
    if (loading) {
        return Loading();
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    let username;
    username = window.location.pathname;
    let index;
    index = username.lastIndexOf('/');
    let name;
    name = username.slice(index+1);
    if(dict_data.identity === "Caregiver") {
        return (
            <div>
                <h1>List</h1>
                <div>
                    orderList
                    {user.filter(person => person.username === name).map(filteredPerson => (
                        filteredPerson.orderList.map(name => (
                                <p>
                                    <button>
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
                                <button>
                                    {name}
                                </button>
                                <button onClick={() => accept(name)}>
                                    accept
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
                                <button>
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
                                <button>
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
                                <button>
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
                                <button>
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

