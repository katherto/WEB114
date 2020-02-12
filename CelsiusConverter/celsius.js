"use_strict";

var $ = function(id) {
    return document.getElementById(id);
}

var convertTemp = function() {
    var fahrenheit = parseFloat($("temperature").value); //parses user input from text field and assigns to fahrenheit variable

    if (!isNaN(fahrenheit)) { //checks if the input is a number
        fahrenheit = (fahrenheit * 1.8) + 32; //calculates converted temperature
        $("fahrenheit").value = fahrenheit; //displays converted temperature in text field
    } else {alert("Please enter a valid temperature in C°")} //output error message if a non-number was entered

    $("temperature").focus(); //shift focus to temperature text field
}

window.onload = function() {
    $("temperature").focus(); //when window loads focus on temperature text field
    $("convert").onclick = convertTemp; //call function when convert button is clicked
}