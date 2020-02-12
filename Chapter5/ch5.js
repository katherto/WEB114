"use_strict";

var $ = function(id) {
    return document.getElementById(id);
};

var addMath = function() {
    //assigns the values as numbers of both inputs
    let input1 = parseFloat($("plusMath1").value);
    let input2 = parseFloat($("plusMath2").value);

    $("result1").value = input1 + input2; //outputs the result to the proper text field
}

var addString = function() {
    //assigns the string and the user's input as a number
    let input1 = $("plusString1").value;
    let input2 = parseFloat($("plusString2").value); /*while unnecessary to parse this input as a float
                                                     I want to demonstrate string concatenation using 
                                                     1 string object and 1 number object*/

    $("result2").value = input1 + input2 + " years old"; //outputs the result to the proper text field
}

var subtract = function() {
    //assigns the values as numbers of both inputs
    let input1 = parseFloat($("subtract1").value);
    let input2 = parseFloat($("subtract2").value);

    $("result3").value = input1 - input2; //outputs the result to the proper text field
}

var multiply = function() {
    //assigns the values as numbers of both inputs
    let input1 = parseFloat($("multiply1").value);
    let input2 = parseFloat($("multiply2").value);

    $("result4").value = input1 * input2; //outputs the result to the proper text field
}

var divide = function() {
    //assigns the values as numbers of both inputs
    let input1 = parseFloat($("divide1").value);
    let input2 = parseFloat($("divide2").value);

    $("result5").value = (input1 / input2).toFixed(2); //outputs the result to the proper text field
}

var modulus = function() {
    //assigns the values as numbers of both inputs
    let input1 = parseFloat($("remainder1").value);
    let input2 = parseFloat($("remainder2").value);

    $("result6").value = input1 % input2; //outputs the result to the proper text field
}

var exponent = function() {
    //assigns the values as numbers of both inputs
    let input1 = parseFloat($("exponent1").value);
    let input2 = parseFloat($("exponent2").value);

    $("result7").value = input1 ** input2; //outputs the result to the proper text field
}

var assign = function() {
    //assigns the user's input
    let yourInput = $("assignment").value;

    //displays the result of the user's assignment
    $("assignmentResult").value = yourInput;
}

var compare1 = function() {
    //assigns the values of both inputs
    let input1 = $("comparison1").value;
    let input2 = $("comparison2").value;

    //compares the two inputs and outputs the result
    if (input1 == input2) {
        $("evaluate1Result").value = "The comparison result is true. Both values are equal.";
    } else {
        $("evaluate1Result").value = "The comparison result is false. Both values are not equal.";
    }
}

var compare2 = function() {
    let input1 = $("comparison3").value; //this is a randomized number between 0 and 100 determined when the window loads
    let input2 = parseInt($("comparison4").value); //assigns the user's input as an integer

    if (input1 === input2) {
        /*a true result will never happen with this logic and input assignment. the point is to compare visually equal numbers,
          and when compared using === that it evaluates as false since one input is a string and the other is an integer*/
        $("evaluate2Result").value = "The comparison result is true. Both values are equal.";
    } else {
        $("evaluate2Result").value = "The comparison result is false. Both values are not equal.";
    }
}

var operations = function() {
    //assigns the values of the three inputs
    let num1 = parseFloat($("order1").value);
    let num2 = parseFloat($("order2").value);
    let num3 = parseFloat($("order3").value);

    //populates the inputs into the displayed formulas
    $("orderResult1").value = num1;
    $("orderResult5").value = num1;

    $("orderResult2").value = num2;
    $("orderResult6").value = num2;

    $("orderResult3").value = num3;
    $("orderResult7").value = num3;

    $("orderResult4").value = (num1 / num2 + num3).toFixed(2); //output results of normal math order of operations, rounded two decimal places
    $("orderResult8").value = (num1 / (num2 + num3)).toFixed(2); //output results of overridden math order of operations

}

window.onload = function() {
    let random = Math.floor(Math.random() * 100) + 1; //chooses a random number for one of the input fields
    $("comparison3").value = random; //displays the random number to the user

    $("plusMath1").focus();

    /*add event listeners for all buttons*/
    $("calculate1").onclick = addMath;
    $("calculate2").onclick = addString;
    $("calculate3").onclick = subtract;
    $("calculate4").onclick = multiply;
    $("calculate5").onclick = divide;
    $("calculate6").onclick = modulus;
    $("calculate7").onclick = exponent;
    $("showAssignment").onclick = assign;
    $("evaluate1").onclick = compare1;
    $("evaluate2").onclick = compare2;
    $("calculate8").onclick = operations;
};