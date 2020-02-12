/**********************************************************************************/
/**                               Kevin Atherton                                 **/
/**                                May 8, 2019                                   **/
/**                            WEB114 Final Project                              **/
/**********************************************************************************/

"use_strict"; // Satisfies the use strict requirement for this final

var $ = function(id) { return document.getElementById(id); };

var checkAnswers = function() {
    let ddls = $("quiz").getElementsByTagName("select"); // creates an array of the select elements within the quiz div

    // these statement test if the user was incorrect in any of the questions and upon finding an incorrect answer will notify the user and exit the function
    if ( !(!($("1").value > $("2").value) && ddls[0].options[ddls[0].selectedIndex].value == "false" )) {  // satisfies the > requirement
        document.querySelector("#quizResult").style.backgroundColor = "#FF4F4F";
        $("quizResult").textContent = "Incorrect. Try again!";
        return;
    };

    /* these conditions look very confusing at first, but the instructions inside the !() at the beginning are testing if the user is correct.
       by testing the inverse with !() at the beginning the error text and background color only change if the user is wrong in any choice*/
    if ( !(($("3").value >= $("4").value) && ddls[1].options[ddls[1].selectedIndex].value == "true" )) { // satisfies the >= requirement
        document.querySelector("#quizResult").style.backgroundColor = "#FF4F4F";
        $("quizResult").textContent = "Incorrect. Try again!";
        return;
    };

    if ( !(($("5").value <= $("6").value) && ddls[2].options[ddls[2].selectedIndex].value == "true")) { // satisfies the <= requirement
        document.querySelector("#quizResult").style.backgroundColor = "#FF4F4F";
        $("quizResult").textContent = "Incorrect. Try again!";
        return;
    };

    if ( !(!($("7").value === $("8").value) && ddls[3].options[ddls[3].selectedIndex].value == "false")) { // satisfies the === requirement
        document.querySelector("#quizResult").style.backgroundColor = "#FF4F4F";
        $("quizResult").textContent = "Incorrect. Try again!";
        return;
    };

    if ( !(!($("9").value != $("10").value) && ddls[4].options[ddls[4].selectedIndex].value == "false")) { // satisfies the != requirement
        document.querySelector("#quizResult").style.backgroundColor = "#FF4F4F";
        $("quizResult").textContent = "Incorrect. Try again!";
        return;
    };

    if ( !(($("11").value !== $("12").value) && ddls[5].options[ddls[5].selectedIndex].value == "true")) { // satisfies the !== requirement
        document.querySelector("#quizResult").style.backgroundColor = "#FF4F4F";
        $("quizResult").textContent = "Incorrect. Try again!";
        return;
    };

    if ( !(($("13").value > $("14").value) && ($("15").value < $("16").value) && ddls[6].options[ddls[6].selectedIndex].value == "true")) { // satisfies the && requirement
        document.querySelector("#quizResult").style.backgroundColor = "#FF4F4F";
        $("quizResult").textContent = "Incorrect. Try again!";
        return;
    };

    // after passing all the logical conditions the user's answer is correct, the only way to get to this point is by the function still running, which, is why testing if they're correct is not needed
    document.querySelector("#quizResult").style.backgroundColor = "#03E000";
    $("quizResult").textContent = "Congratulations! You're Correct!";
};

var checkImage = function() {
    if ($("selectedImage").getAttribute("src") == "images/Loki.JPG") {
        $("imageList").previousElementSibling.style.backgroundColor = "#03E000";
        $("imageList").previousElementSibling.innerHTML = "Correct!";
    } else {
        $("imageList").previousElementSibling.style.backgroundColor = "#FF4F4F";
        $("imageList").previousElementSibling.innerHTML = "Incorrect. Try again!";
    };
};

// function handles decrementing a number by one
var decrement = function() {
    let num1 = parseInt($("random1").value); // satisfies the .value requirement
    num1--; // satisfies the -- requirement
    $("random1").value = num1;
};

// function that handles decrementing by an amount designated by the user
var decrementBy = function() {
    let num1 = parseInt($("incdecBy").value); // assigns user's number to decrement by
    let num2 = parseInt($("random2").value); // assigns the number currently seen

    if (isNaN(num1)) {
        $("error").textContent = "Please enter a number to increment or decrement the number by"; // satisfies the .textcontent requirement
    } else {
        num2 -= num1;
        $("error").textContent = "\xa0"; // in case of previous error by user this clears the error message, \xa0 = &nbsp;
        $("random2").value = num2;
    };
};

// function handles incrementing a number by one
var increment = function() {
    let num1 = parseInt($("random1").value);
    num1++; // satisfies the ++ requirement
    $("random1").value = num1;
};

// function handles incrementing by an amount designated by the user
var incrementBy = function() {
    let num1 = parseInt($("incdecBy").value); // assigns user's number to increment by
    let num2 = parseInt($("random2").value); // assigns the number currently seen

    if (isNaN(num1)) {
        $("error").textContent = "Please enter a number to increment or decrement the number by";
    } else {
        num2 += num1; // satisfies the += requirement
        $("error").textContent = "\xa0"; // in case of previous error by user this clears the error message, \xa0 = &nbsp;
        $("random2").value = num2;
    };
};

// function that handles the first game which shows the user various math operations based on their input
var showCalculation = function() { 
    let num1 = parseInt($("num1").value);
    let num2 = parseInt($("num2").value);
    let ddl = $("mathOperation"); // assigns the drop down list of math operations to a variable
    let operation = ddl.options[ddl.selectedIndex].value; // assigns the value of the selected option in the drop down list

    if (isNaN(num1)) { // tests to see if the first text field, num1, is a number
        $("mathOperationResult").textContent = "Please Enter a Valid Number in the First Field";
    } else if (isNaN(num2)) { // tests to see if the second text field, num2, is a number
        $("mathOperationResult").textContent = "Please Enter a Valid Number in the Second Field";
    } else {
        switch (operation) { // satisfies the switch requirement
            case "+":
                $("mathOperationResult").textContent = num1 + " + " + num2 + " = " + (num1 + num2); // satisfies the requirement for showing the difference between + concatenating and using + to do math
                break;
            case "-":
                $("mathOperationResult").textContent = num1 + " - " + num2 + " = " + (num1 - num2);
                break;
            case "*":
                $("mathOperationResult").textContent = num1 + " \xD7 " + num2 + " = " + (num1 * num2);
                break;
            case "/":
                $("mathOperationResult").textContent = num1 + " \xF7 " + num2 + " = " + (num1 / num2);
                break;
            case "%":
                $("mathOperationResult").textContent = num1 + " % " + num2 + " = " + (num1 % num2);
                break;
            case "**":
                $("mathOperationResult").textContent = num1 + " \u02C6 " + num2 + " = " + (num1 ** num2);
                break;
        };
    };
};

// function that will handle toggling span text in h2 elements to + or - and showing/hiding parts of the game
var toggle = function() {
    let h2 = this; // clicked h2 element
    let div = h2.nextElementSibling; // sibling div to the h2 element

    // checks for the class of the targeted div, then toggles it on or off using css classes
    if (div.className == "hidden") {
        div.setAttribute("class", "show");
        h2.firstChild.firstChild.textContent = "-"; // changes the text for the span to show if it's expanded or collapsed
    } else {
        div.setAttribute("class", "hidden");
        h2.firstChild.firstChild.textContent = "+";
    };

    // each time an h2 element is clicked random hex values are chosen and set as a gradient for the background
    document.body.style.backgroundImage = 
    "linear-gradient(to bottom, #" + Math.floor(Math.random()*16777215).toString(16) + ", #" + Math.floor(Math.random()*16777215).toString(16); // satisfies the .style requirement
};

// function handles the user toggling dark view and light view modes
var toggleViewMode = function() {
    // satisfies the querySelectorAll requirement
    let lightElements = document.querySelectorAll(".light"); // assigns each element that is currently light theme
    let darkElements = document.querySelectorAll(".dark"); // assigns each element that is currently dark theme

    if ($("darkMode").checked) {
        document.querySelector("#wrapper").style.backgroundColor = "#151515"; // sets background to a dark color

        for (let i = 0; i < lightElements.length; i++) { // satisfies the for loop and < requirement
            lightElements[i].setAttribute("class", "dark"); // changes class so text will be white and viewable in dark mode
        };
    } else {
        document.querySelector("#wrapper").style.backgroundColor = "#FFFFFF"; // sets background to default white color

        for (let i = 0; i < darkElements.length; i++) {
            darkElements[i].setAttribute("class", "light"); // changes class so text will be black and viewable in light mode
        };
    };
};

window.onload = function() {
    // chooses two random numbers between 0 and 100
    let random1 = Math.floor(Math.random() * 100) + 1;
    let random2 = Math.floor(Math.random() * 100) + 1;

    // displays the chosen random numbers in their respective text fields
    $("random1").value = random1;
    $("random2").value = random2;

    $("checkAnswers").onclick = checkAnswers;
    $("checkLoki").onclick = checkImage;
    $("decByOne").onclick = decrement; // satisfies the event listener requirement using onclick property
    $("decBy").onclick = decrementBy;
    $("incByOne").onclick = increment;
    $("incBy").onclick = incrementBy;
    $("calculate").onclick = showCalculation;
    $("mathOperation").onchange = showCalculation; // if a user changes what math operation is selected it'll run the same function as pressing the calculate button
    $("darkMode").onclick = toggleViewMode;
    $("lightMode").onclick = toggleViewMode;

    // array of h2 elements which will have event listeners attached
    let h2Elements = document.getElementsByTagName("h2"); // satisfies the array and getElementsByTagName requirement

    for (let i = 0; i < h2Elements.length; i++) {
        h2Elements[i].onclick = toggle;
    };

    // array of anchor elements within the unordered list of images
    let imageLinks = $("imageList").getElementsByTagName("a");
    let image, link;

    for (let i = 0; i < imageLinks.length; i++) {
        // first preload the image
        image = new Image();
        image.src = imageLinks[i].getAttribute("href");

        // attach event handler to the anchor element by way of anonymous function
        imageLinks[i].onclick = function(e) {
            link = this; // the clicked anchor element

            // replaces main image with thumbnail image
            $("selectedImage").src = link.getAttribute("href");

            // cancel the default anchor element action in new and older browsers
            if (!e) {e = window.event};
            if (e.preventDefault) {e.preventDefault();}
            else {e.returnFalse = false;};
        };
    };

    let userName = window.prompt("Hello and welcome to the JavaScript game!  Please enter your name below."); // satisfies the window prompt requirement as well as the var/let/const requirement

    // checks if a name was entered, and will continue to prompt the user until text is entered
    if (userName == "" || userName == null) { // satisfies the if...else, ||, and == requirements
        do { // satisfies the while requirement
            userName = window.prompt("That's an invalid entry.  Please enter your name below!");
        } while (userName == "" || userName == null);
    };

    window.alert("Thank you " + userName + "! Now lets play the game."); // satisfies the window alert requirement
};