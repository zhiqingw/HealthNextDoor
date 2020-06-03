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
            <div className="rating_box">
                <div id="rate">
                Giving your rate
                </div>
            <div id="rating_star">
            <ReactStars
                count={5}
                size={38}
                onChange={ratingChanged}
                half={true}
                emptyIcon={<i className='far fa-star'></i>}
                halfIcon={<i className='fa fa-star-half-alt'></i>}
                fullIcon={<i className='fa fa-star'></i>}
                color2={'#ffd700'} />
                </div>
                <div id="rate">
                    review
                </div>
                <textarea rows = "5" cols = "60" id="review">

         </textarea>
            <button onClick={submitRating} id="submit_button">
                submit
            </button>
            </div>
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


