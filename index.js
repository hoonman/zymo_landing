//This file is responsible for scrolling down to the form div when user presses "inquire now" and when presing submit, the user's data is stored into the userInputs array and an alert pops up saying that the message has been delivered.

var inquireButton = document.getElementById("inquire");

var textareaElements = document.querySelectorAll(".textareaForm");

var submitButton = document.getElementById("submit");

var userInputs = [];

inquireButton.addEventListener("click", function() {
    var formElement = document.getElementById("form");
    formElement.scrollIntoView({ behavior: "smooth", block: "start" });
});



textareaElements.forEach(function(textareaElement) {
    textareaElement.addEventListener("input", function() {
        var index = Array.from(textareaElements).indexOf(textareaElement);
        userInputs[index] = textareaElement.value;
    });
});

submitButton.addEventListener("click", function() {
    var isNotEmpty = userInputs.every(function(input) {
        return input !== "";
    });

    if (isNotEmpty) {
        alert("Submission successful!");
        //information is stored in the userInputs array. This would normally go to a database or some sort.
    }
});
