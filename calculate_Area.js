let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);
    if (isNaN(length) || isNaN(width)) {
        alert("Please enter valid numbers for length and width.");
        return;
    }
    const area = length * width;
    document.getElementById("result").innerText = `Area: ${area} square units`;
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.color = "green";
}