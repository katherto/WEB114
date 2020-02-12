"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var calculateFV = function(investment, rate, years) {
    var futureValue = investment; //sets futureValue equal to the investment amount passed to this function

    for (var i = 1; i <= years; i++) {
        futureValue += futureValue * (rate / 100); //calculates the future value of the investment
    }

    return futureValue.toFixed(2); //returns the future value rounded to two decimal places
};

var processEntries = function() {
    var investment = parseFloat($("investment").value); //parses text field entry and assigns it to the variable
    var rate = parseFloat($("rate").value);
    var years = parseInt($("years").value);
    var error = ""; //error message string variable

    //logic that detects an invalid entry by the user and stores the error message
    if (isNaN(investment) || investment < 0 || investment > 100000) {
        error = "Please enter valid investment amount\n(Between 0 and 100,000)";
        $("investment").focus();
    } else if (isNaN(rate) || rate < 0 || rate > 15) {
        error = "Please enter valid interest rate\n(Between 0 and 15)";
        $("rate").focus();
    } else if (isNaN(years) || years < 0 || years > 50) {
        error = "Please enter valid number of years\n(Between 0 and 50)";
        $("years").focus();
    }

    if (error == "") { //displays future value to the user if there were no errors
        $("future_value").value = calculateFV(investment, rate, years);
    } else {
        alert(error); //displays the error to the user
    }
};

window.onload = function() {
    $("calculate").onclick = processEntries; //when calculate button is clicked call function
    $("investment").focus(); //sets default focus when window is loaded
};