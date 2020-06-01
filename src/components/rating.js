import React, { useState } from "react";
import ReactStars from 'react-rating-stars-component'
import {addCaregiver, completeOrder, ratingOrder, reviewOrder, useUser} from "../api";
import Button from "../components/Button";

export default function Rate() {
    //const { loading, user, error} = useUser();
    var data = sessionStorage.getItem("rating_target");
    console.log(data);
    return (
        <div>
            <h1>Rating</h1>
            <ReactStars
                count={5}
                size={24}
                onChange={ratingChanged}
                half={true}
                emptyIcon={<i className='far fa-star'></i>}
                halfIcon={<i className='fa fa-star-half-alt'></i>}
                fullIcon={<i className='fa fa-star'></i>}
                color2={'#ffd700'} />
            <input type = "text" id = "review" placeholder="please enter review"/>
            <button onClick={submitRating}>
                submit
            </button>
            <ReactStars
                count={4}
                size={24}
                edit={false}
                half={true}

                color1={'#ffd700'} />
        </div>

    );
}

const ratingChanged = (newRating) => {
    sessionStorage.setItem("star", newRating)
    //console.log(newRating)
}

function submitRating() {
    var name = sessionStorage.getItem("username")
    var data = sessionStorage.getItem("star")
    var review = document.getElementById("review")
    console.log(data)
    console.log(review.value)
    sessionStorage.removeItem("star")
    let username;
    username = window.location.pathname;
    let index;
    index = username.lastIndexOf('/');
    username = username.slice(index+1);
    ratingOrder({
        username: username,
        name: name,
        rate: data,
        state: "rate",
    });
    reviewOrder({
        username: username,
        name: name,
        review: review.value,
        state: "comment",
    });
}


