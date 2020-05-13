import React, { useState } from "react";
import {updateUser, useAuthors, useUser} from "../api";
import{Author} from "../pages/Authors";
import Button from "../components/Button";
import Header from "../components/Header";

export default function Users() {
    const { loading, authors, error } = useAuthors();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    // use this to make sure you are getting the right data
    console.log(authors);
    // Display a list of the authors

    // Display a list of the users
    let username;
    username = window.location.pathname;
    let index;
    index = username.lastIndexOf('/');
    let name;
    name = username.slice(index+1);

    console.log(name);


    return (
        <div>
            <Header />
            <h1>Personal Information</h1>
            {authors.map(author =>{
                if(author.username===name){
                    return <Author key={author.id} {...author} />
                }
                else{
                    return
                }
            })}

        </div>
    );
}


function User(user) {
    const {username, password} = user;
    const [showUpdate, setShowUpdate] = useState(false);

    return (
        <div className={`user user-${username}`} key={username}>
            <div className="info">
                ({username})
                <Button className={"btn"} onClick={() => setShowUpdate(!showUpdate)}>
                    {showUpdate ? "-" : "+"}
                </Button>
            </div>
            <UserExtended {...user} showUpdate={showUpdate} />
        </div>
    );
}

function UserExtended(props) {
    const { username, password, showUpdate} = props;

    const [password_input, setPassword] = useState(password);


    function onSubmit() {
        // call upate author function
        updateUser({
            username: username,
            password: password_input
        });
    }

    return (
        <div className={`user-expand ${showUpdate ? "show" : ""}`}>
            <form>
                {/* TODO - add value and onChange properties to inputs */}
                <input type="text" name="password" value={password_input} onChange = {event => {setPassword(event.target.value)}} />
                <Button className={"btn-warning"} onClick={onSubmit}>
                    Update
                </Button>
            </form>
        </div>
    );
}