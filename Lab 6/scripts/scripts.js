/****************** YOUR NAME: 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

var duration = 0;
var modelName = "XYZ";

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element"s innerHTML to this new value
*/

// INSERT YOUR CODE HERE

//totalCost needed to be defined
var totalCost = 0;

function recalculate() {

    var costLabel = document.getElementById("calculated-cost");

    //Calculations depending on model chosen
    if (modelName == "XYZ") {
        totalCost = duration * 100;
    }
    if (modelName == "CPRG") {
        totalCost = duration * 213;
    }

    //Sets the cost in the HTML to the totalCost calculated here
    costLabel.innerHTML = totalCost;
}

//The cost would be set to 0.00$ upon website start without this
recalculate();

/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
*/
    // 

// INSERT YOUR CODE HERE

function changeModel() {
    //Connect variable to text representation of model in website
    var modelText = document.getElementById("model-text");

    //Button swtiching if statements
    if (modelName == "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    }
    else if (modelName == "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    //Recalculates because the button was pressed
    recalculate();
}

//- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: 
document.getElementById("model-button").addEventListener("click", changeModel);

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE


function changeDuration() {
    //Connect variable to text representation of model in website
    var durationText = document.getElementById("duration-text");

    //Gets a new duration from the user, and applies it to the text in the HTML
    var durationUserInput = prompt("New duration: ");
    durationText.innerHTML = durationUserInput;

    //Sets the duration variable used for calculations to the new duration
    duration = durationUserInput;

    //Finally, recalculates with the new input
    recalculate();
}

//Detects the button press and activates the function
document.getElementById("duration-button").addEventListener("click", changeDuration);
