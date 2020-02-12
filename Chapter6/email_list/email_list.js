"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var isValid = true; // boolean variable that tracks validity of user entries

    // validate the entries
    if (emailAddress1 == "") {
        $("email_address1").nextElementSibling.textContent = "First email address entry required";
        isValid = false;
    } else {
        $("email_address1").nextElementSibling.textContent = "";
    }

    if (emailAddress2 == "") {
        $("email_address2").nextElementSibling.textContent = "Second email entry required";
        isValid = false;
    } else if (emailAddress2 != emailAddress1) {
        $("email_address2").nextElementSibling.textContent = "Email address entries must match";
        isValid = false;
    } else {
        $("email_address2").nextElementSibling.textContent = "";
    }

    if (firstName == "") {
        $("first_name").nextElementSibling.textContent = "First name entry required";
        isValid = false;
    } else {
        $("first_name").nextElementSibling.textContent = "";
    }

    // submit the form if all entries are valid
    if (isValid) {
        $("email_form").submit(); 
    }
};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};
