import React from "react";
import {UserExtendedList} from "./User";

export default function ToList() {
    var data = sessionStorage.getItem("listing")
    var dict_data = JSON.parse(data)
    console.log(data);
    if(dict_data.identity === "Caregiver") {
        return (
            <div>
                <h1>List</h1>
                <div className={"orderlist"}>
                    Order List
                    {dict_data.orderList.map(name => (
                        <p>
                            <button>
                                {name}
                            </button>
                        </p>
                    ))}
                </div>
                <div className={"rec_req_list"}>
                    Receive List
                    {dict_data.receiveReq.map(name => (
                        <p>
                            <button>
                                {name}
                            </button>
                            <button>
                                accept
                            </button>
                        </p>
                    ))}
                </div>
                <div className={"history_list"}>
                    History List
                    {dict_data.orderHistory.map(name => (
                        <p>
                            <button>
                                {name}
                            </button>
                        </p>
                    ))}
                </div>
            </div>
        );
    }else{
        return (
            <div>
                <h1>List</h1>
                <div className={"orderlist"}>
                Order List
                {dict_data.orderList.map(name => (
                    <p>
                        <button>
                            {name}
                        </button>
                    </p>
                ))}
            </div>
                <div className={"send_req_list"}>
                    Send List
                    {dict_data.sentReq.map(name => (
                        <p>
                            <button>
                                {name}
                            </button>
                        </p>
                    ))}
                </div>
                <div className={"history_list"}>
                    History List
                    {dict_data.orderHistory.map(name => (
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
}

