"use_strict";

var scores = [];

var $ = function(id) {
    return document.getElementById(id);
};

var recordScore = function() {
    scores[scores.length] = parseFloat($("score").value);
    $("score").value = "";
    $("score").focus();
    averageScores();
};

var averageScores = function() {
    var total = 0;
    var average = 0;

    for (var i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    average = total / scores.length;
    $("average").value = average.toFixed(2);
};

window.onload = function() {
    $("score").focus();
    $("average").value = "";
    $("record").onclick = recordScore;
};