// Calculator integration

const display = document.getElementById("display");

// Adds input to display
function AppendToDisplay(input) {
    display.value += input;
}

// Solve and display
function Calculate(input) {
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Syntax Error";
    }
}

// Clear display
function ClearDisplay() {
    display.value = "";
}