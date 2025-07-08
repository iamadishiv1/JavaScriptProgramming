
function performOperation() {
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);

    if(!isNaN(num1) && !isNaN(num2)) {
        let result = multiply(num1, num2);

        //display the result
        displayResult(result);
    }
    else {
        displayResult("Please enter valid numbers.");
    }
}

function multiply(a, b) {
    debugger; // This will pause execution for debugging
    return a * b;
}

function displayResult(result) {
    document.getElementById("result").textContent = `The result is: ${result}`;
}