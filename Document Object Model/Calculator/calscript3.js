// displayNumber() - to display whatever key is pressed
function displayNumber(num){
    display.value += num;
}

// clearBox() - clear the entire box
function clearBox() {
    display.value = "";
}

// evaluateExpression() - perform the specific operation
function evaluateExpression() {
    display.value = eval(display.value);
}

// removeNumber() - delete a single digit entered
function removeNumber(){
    display.value = display.value.slice(0,-1);
}

