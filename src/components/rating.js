
import React, { useState } from "react";
import ReactStars from 'react-rating-stars-component'
import { addCaregiver } from "../api";
import Button from "../components/Button";

export default function Rate() {


    return (
        <div>
            <ReactStars
                count={5}
                size={24}
                onChange={ratingChanged}
                half={true}
                emptyIcon={<i className='far fa-star'></i>}
                halfIcon={<i className='fa fa-star-half-alt'></i>}
                fullIcon={<i className='fa fa-star'></i>}
                color2={'#ffd700'} />
        </div>
    );
}

const ratingChanged = (newRating) => {
    console.log(newRating)
}
/*
var radios = document.querySelectorAll('#star_rating input[type=radio]');
var output = document.querySelector('#star_rating output');

var do_something = function(stars) {
    // An AJAX request could send the data to the server
    output.textContent = stars;
};

// Iterate through all radio buttons and add a click
// event listener to the labels
Array.prototype.forEach.call(radios, function(el, i){
    var label = el.nextSibling.nextSibling;
    label.addEventListener("click", function(event){
        do_something(label.querySelector('span').textContent);
    });
});

// If the form gets submitted, do_something
document.querySelector('#star_rating').addEventListener('submit', function(event){
    do_something(document.querySelector('#star_rating :checked ~ label span').textContent);
    event.preventDefault();
    event.stopImmediatePropagation();
});*/