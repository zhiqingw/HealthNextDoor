import React from "react";
import {UserExtendedList} from "./User";

export default function ToList() {
    var data = sessionStorage.getItem("listing")
    var dict_data = JSON.parse(data)
    console.log(data);
    return (
        <div>
            <h1>List</h1>
            <div className={"orderlist"}>

            {dict_data.orderList.map(name => (
                <p>
                <button>
                {name}
                </button>
                </p>
            ))}
            </div>
        </div>
    );
}