"use_strict";

//global variables that are initialized when page is loaded with random numbers between 1 and 100
var num1 = Math.floor(Math.random() * 100) + 1;
var num2 = Math.floor(Math.random() * 100) + 1;
var answer = num1 + num2; //adds the random numbers for the expected answer

var $ = function(id) {
    return document.getElementById(id);
};

var checkAnswer = function() {
    var userAnswer = parseInt($("answer").value); //variable that will contain the user's answer
    var again = "y"; //prompt for user to play again or not

    //checks if the user entered the correct answer and responds accordingly by changing the span element's text with id title
    if (userAnswer === answer) {
        $("title").firstChild.nodeValue = "Correct!";
    } else {
        $("title").firstChild.nodeValue = "Incorrect";
    }

    again = prompt("Would you like to play again? (y or n)"); //ask user if they want to play again

    //check if the user wants to play again
    if (again == "y" || again == "Y") {
        location.reload(); //if the user plays again the page is refreshed so new random numbers can be chosen and the question updated
    } else {
        $("title").firstChild.nodeValue = "Thank you for playing!"
    }
};

window.onload = function() {
    $("question").value = "What is " + num1 + " + " + num2 + " ?"; //when page is loaded update the question for the user
    $("answer").focus(); //sets focus to the answer box when page is loaded
    $("check").onclick = checkAnswer; //calls the function to check answer when the user clicks the Check Answer button
};